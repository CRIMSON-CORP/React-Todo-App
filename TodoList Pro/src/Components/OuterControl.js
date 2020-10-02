import React, { useState, useEffect } from "react";
import { MdDehaze, MdClear, MdAdd, MdEdit, MdDelete } from "react-icons/md";
import $ from "jquery";

function OuterControl({
    props: { app, setNewListName, addList, setCurrentList, setRename, updateList, deleteList },
}) {
    const [side, setSide] = useState(false);
    const [list, setList] = useState([]);
    const [currentListId, setCurrentListId] = useState("");

    useEffect(() => {
        var list = app.map((app, index) => {
            return (
                <li
                    className="listSet"
                    key={index}
                    data-id={app.id}
                    onClick={(event) => {
                        event.persist();
                        if (event.target.tagName === "svg" || event.target.tagName === "path") {
                            return;
                        }
                        setCurrentList(index);
                        setSide(false);
                    }}
                >
                    <h3>{app.name}</h3>
                    <div className="icons">
                        <MdEdit
                            data-id={app.id}
                            className="icon edit"
                            onClick={() => {
                                $(".rename").fadeIn();
                                $(".renamebox").focus();
                                setCurrentListId(app.id);
                            }}
                        />
                        <MdDelete
                            className="icon deleteIcon"
                            fill="red"
                            data-id={app.id}
                            onClick={() => {
                                $(".delete").fadeIn();
                                setCurrentListId(app.id);
                            }}
                        />
                    </div>
                </li>
            );
        });
        setList(list);
    }, [app, setCurrentList]);

    if (side) $(".container").css("pointer-events", "none");
    else $(".container").css("pointer-events", "auto");

    return (
        <>
            <div className={"ham"}>
                <MdDehaze
                    role="img"
                    aria-label="plus"
                    onClick={() => {
                        setSide(true);
                    }}
                    className="icon"
                />
            </div>
            <div className={`sideBar ${side ? "openBar" : "closeBar"}`}>
                <h2>
                    Your List Set
                    <MdClear
                        fill="red"
                        className={"icon"}
                        onClick={() => {
                            setSide(false);
                        }}
                    />
                </h2>

                <ul>
                    {list}
                    <li
                        className="addNew listSet"
                        onClick={() => {
                            $(".newModal").fadeIn();
                            $(".new").focus();
                        }}
                    >
                        Add New List <MdAdd className="addList" />
                    </li>
                </ul>
            </div>
            <div className={`modalCont newModal`} style={{ display: "none" }}>
                <div className="modal">
                    <MdClear
                        className={"icon"}
                        style={{
                            display: "block",
                            marginLeft: "auto",
                            fill: "red",
                        }}
                        onClick={() => {
                            $(".newModal").fadeOut();
                            $(".inputBox").val(null);
                        }}
                    />

                    <h3>Set New Todolist Name</h3>
                    <div className="input-container">
                        <input
                            className="inputBox new"
                            type="text"
                            name="inputBlock"
                            placeholder="Name..."
                            autoComplete="off"
                            required={true}
                            onChange={({ target: { value } }) => {
                                setNewListName(value);
                            }}
                        />
                        <div className="input"></div>
                    </div>
                    <button
                        className="setName"
                        onClick={() => {
                            $(".newModal").fadeOut();
                            $(".inputBox").val(null);
                            addList();
                            setSide(false);
                        }}
                    >
                        Set Name
                    </button>
                </div>
            </div>

            <div className="modalCont rename" style={{ display: "none" }}>
                <div className="modal">
                    <MdClear
                        className={"icon"}
                        style={{
                            display: "block",
                            marginLeft: "auto",
                            fill: "red",
                        }}
                        onClick={() => {
                            $(".rename").fadeOut();
                            $(".inputBox").val(null);
                        }}
                    />

                    <h3>Rename Todo</h3>
                    <div className="input-container">
                        <input
                            className="inputBox renamebox"
                            type="text"
                            name="inputBlock"
                            placeholder="New Name..."
                            autoComplete="off"
                            required={true}
                            onChange={({ target: { value } }) => {
                                setRename(value);
                            }}
                        />
                        <div className="input"></div>
                    </div>
                    <button
                        className="setName"
                        onClick={() => {
                            $(".rename").fadeOut();
                            $(".inputBox").val(null);
                            updateList(currentListId);
                            setCurrentListId("");
                        }}
                    >
                        Set Name
                    </button>
                </div>
            </div>

            <div className="modalCont delete" style={{ display: "none" }}>
                <div className="modal" style={{ textAlign: "center" }}>
                    <MdDelete
                        fontSize="3rem"
                        fill="red"
                        style={{ textShadow: "0px 0px 5px red" }}
                    />
                    <h3>Are you sure You want to Delete this List?</h3>
                    <p>Entire List will be removed permanently</p>

                    <button
                        className="deleteListBtn clear"
                        onClick={() => {
                            $(".delete").fadeOut();
                            $(".inputBox").val(null);
                            deleteList(currentListId);
                            setSide(false);
                            setCurrentListId("");
                        }}
                    >
                        OK
                    </button>
                    <button
                        className="canceldelete"
                        onClick={() => {
                            $(".delete").fadeOut();
                            $(".inputBox").val(null);
                            setCurrentListId("");
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </>
    );
}

export default OuterControl;
