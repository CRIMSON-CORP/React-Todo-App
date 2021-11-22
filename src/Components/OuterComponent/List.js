import React, { useState, useContext } from "react";
import { FiEdit, FiHeart, FiHelpCircle, FiMoon, FiPhone, FiSun } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { MdAdd, MdClear, MdDelete, MdDeleteSweep, MdList } from "react-icons/md";
import Transition from "react-motion-ui-pack/lib/Transition";
import $ from "jquery";
import { AppContext, Side, ListID } from "../utils/Contexts";
import NewListModal from "./Modals/NewListModal";
import RenameList from "./Modals/RenameList";
import DeleteListModal from "./Modals/DeleteListModal";
import ClearListModal from "./Modals/ClearListModal";
function List({ setDonateModal, setHelpModal, setContactModal }) {
    const { app, whichMode, setwhichMode, currentList, setCurrentList } = useContext(AppContext);
    const { side, setSide } = useContext(Side);
    const [newListModal, setNewListModal] = useState(false);
    const [deleteListModal, setDeleteListModal] = useState(false);
    const [clearListModal, setClearListModal] = useState(false);
    const [currentListId, setCurrentListId] = useState("");
    const [renameListModal, setRenameListModal] = useState(false);

    const mode = whichMode ? "dark" : "light";
    var list = app.map((App, index) => {
        return (
            <IconContext.Provider
                value={{
                    size: "1.5rem",
                    className: `ListSetIcon ${mode}`,
                    style: { fill: whichMode ? "white" : "#333" },
                }}
                key={index}
            >
                <li
                    className={`listSet ${mode} ${app[currentList].id === App.id ? "active" : ""}`}
                    onClick={(event) => {
                        event.persist();
                        if (event.target.tagName === "svg" || event.target.tagName === "path") {
                            return;
                        }
                        setCurrentList(index);
                        setSide(false);
                    }}
                >
                    <MdList className="icon" />
                    <h3>{App.name}</h3>
                    <FiEdit
                        style={{ stroke: whichMode ? "white" : "#333", fill: "none" }}
                        className="icon edit"
                        onClick={() => {
                            setCurrentListId(App.id);
                            setRenameListModal(true);
                            setTimeout(() => $(".renamebox").val(App.name).select());
                        }}
                    />
                    <MdDelete
                        className="icon bin"
                        onClick={() => {
                            setDeleteListModal(true);
                            setCurrentListId(App.id);
                        }}
                    />
                </li>
            </IconContext.Provider>
        );
    });
    return (
        <>
            <Transition
                component={false}
                enter={{ translateX: 0, opacity: 1 }}
                leave={{ translateX: -500, opacity: 0 }}
            >
                {side && (
                    <div key="sideBar" className={`sideBar`}>
                        <h2>
                            Your List Set
                            <MdClear
                                size="1.5rem"
                                className="icon"
                                onClick={() => {
                                    setSide(false);
                                }}
                            />
                        </h2>
                        <ul>
                            {list}
                            <hr />
                            <IconContext.Provider
                                value={{
                                    size: "1.5rem",
                                    style: { fill: whichMode ? "white" : "#333" },
                                }}
                            >
                                <li
                                    className="subList"
                                    onClick={() => {
                                        setNewListModal(true);
                                    }}
                                >
                                    <MdAdd />
                                    <h3>Add New List</h3>
                                </li>
                                <li
                                    className="subList"
                                    onClick={() => {
                                        setClearListModal(true);
                                    }}
                                >
                                    <MdDeleteSweep />
                                    <h3>Clear All Lists</h3>
                                </li>

                                <li
                                    className="subList"
                                    onClick={() => {
                                        setSide(false);
                                        setwhichMode(!whichMode);
                                    }}
                                >
                                    {whichMode ? (
                                        <FiSun fill="white" />
                                    ) : (
                                        <FiMoon stroke="transparent" />
                                    )}
                                    <h3>Turn on {whichMode ? "Light" : "Dark"} Mode</h3>
                                </li>
                                <hr />
                                <li
                                    className="subList"
                                    onClick={() => {
                                        setHelpModal(true);
                                    }}
                                >
                                    <FiHelpCircle style={{ fill: whichMode ? "none" : "#333" }} />
                                    <h3>How to use</h3>
                                </li>
                                <li
                                    className="subList"
                                    onClick={() => {
                                        setContactModal(true);
                                    }}
                                >
                                    <FiPhone style={{ strokeWidth: 0 }} />
                                    <h3>Contact Me</h3>
                                </li>
                                <li
                                    className="subList"
                                    onClick={() => {
                                        setDonateModal(true);
                                    }}
                                >
                                    <FiHeart style={{ strokeWidth: 0 }} />
                                    <h3>Donate</h3>
                                </li>
                            </IconContext.Provider>
                            <hr />
                        </ul>
                    </div>
                )}
            </Transition>
            <ListID.Provider value={{ currentListId, setCurrentListId }}>
                <NewListModal props={{ newListModal, setNewListModal }} />
                <RenameList props={{ renameListModal, setRenameListModal }} />
                <DeleteListModal props={{ deleteListModal, setDeleteListModal }} />
                <ClearListModal props={{ clearListModal, setClearListModal }} />
            </ListID.Provider>
            <Transition component={false} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
                {(newListModal || renameListModal || deleteListModal) && (
                    <div
                        key="underlay"
                        className="ModalUnderLay"
                        onClick={() => {
                            setNewListModal(false);
                            setRenameListModal(false);
                            setDeleteListModal(false);
                            setDonateModal(false);
                            setHelpModal(false);
                            setContactModal(false);
                            setContactModal(false);
                        }}
                    ></div>
                )}
            </Transition>
        </>
    );
}

export default List;
