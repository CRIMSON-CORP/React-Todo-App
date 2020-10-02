import React, { useState, useEffect } from "react";
import { MdDehaze, MdClear, MdAdd, MdEdit, MdDelete, MdList } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import $ from "jquery";

function OuterControl({
    props: {
        app,
        setNewListName,
        addList,
        setCurrentList,
        setRename,
        updateList,
        deleteList,
        currentList,
    },
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
                        $(".listSet").removeClass("active");
                        $(`.listSet[data-id="${app.id}"]`).addClass("active");
                    }}
                >
                    <div className="tag">
                        <MdList className="icon" />
                        <h3>{app.name}</h3>
                    </div>
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

    if (side) {
        $(".container").click(() => {
            setSide(false);
        });
    }

    $(`.listSet`).removeClass("active");
    $(`.listSet:eq(${currentList})`).addClass("active");

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
                        className={"icon"}
                        onClick={() => {
                            setSide(false);
                        }}
                    />
                </h2>

                <ul>
                    {list}
                    <hr />
                    <li
                        className="addNew listSet"
                        onClick={() => {
                            $(".newModal").fadeIn();
                            $(".new").focus();
                        }}
                    >
                        <div className="tag">
                            <MdAdd className="addList" />
                            Add New List
                        </div>
                    </li>
                    <li
                        className="donate listSet"
                        onClick={() => {
                            $(".donateModal").fadeIn();
                        }}
                    >
                        <div className="tag">
                            <FiHeart fill="white" className="donateIcon" />
                            Donate
                        </div>
                    </li>
                    <hr />
                </ul>
            </div>
            <div className={`modalCont newModal`} style={{ display: "none" }}>
                <form
                    className="modal"
                    onSubmit={(event) => {
                        event.preventDefault();
                        $(".newModal").fadeOut();
                        $(".inputBox").val(null);
                        addList();
                        setSide(false);
                    }}
                >
                    <MdClear
                        className={"icon"}
                        style={{
                            display: "block",
                            marginLeft: "auto",
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
                    <button className="setName" type="submit">
                        Set Name
                    </button>
                </form>
            </div>

            <div className="modalCont rename" style={{ display: "none" }}>
                <form
                    className="modal"
                    onSubmit={(event) => {
                        event.preventDefault();

                        $(".rename").fadeOut();
                        $(".inputBox").val(null);
                        updateList(currentListId);
                        setCurrentListId("");
                    }}
                >
                    <MdClear
                        className={"icon"}
                        style={{
                            display: "block",
                            marginLeft: "auto",
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
                    <button className="setName" type="submit">
                        Set Name
                    </button>
                </form>
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

            <div className="modalCont donateModal" style={{ display: "none", userSelect: "text" }}>
                <div className="modal">
                    <MdClear
                        className={"icon"}
                        style={{
                            display: "block",
                            marginLeft: "auto",
                        }}
                        onClick={() => {
                            $(".donateModal").fadeOut();
                        }}
                    />

                    <h3>Donate</h3>
                    <div className="info-block">
                        <h4>- About Me</h4>
                        <p>
                            My Name is Oluwatowo Rosanwo Mayowa, I'm a 200L Student of The
                            University Of Ibadan studying Food Technology, I started Web Development
                            in 2018 and Now I'm an Intermediate Web Developer and Aspiring UI/UX
                            Deisgner, Im also a Logo/Video Editor.
                        </p>
                    </div>
                    <div className="info-block">
                        <h4>- Donate</h4>
                        <p>
                            Please if You really Like my Work and have a Dollar or two to spare,
                            Kindly make a Donation To me as This will enhance my Progress and
                            Productivity and also make me work harder and Develop more Apps that you
                            will Definately find usefull
                        </p>
                    </div>

                    <h4>Account Details:</h4>
                    <pre>
                        Bank: First Bank <br />
                        Account Number: <span id="acc">3123872415</span> <br />
                        Account Name: Oluwatowo Rosanwo <br />
                    </pre>
                    <button
                        className="copy"
                        onClick={() => {
                            var temp = $("<input>");
                            $(".donateModal .modal").append(temp);
                            temp.val($("#acc").text()).select();
                            document.execCommand("copy");
                            temp.remove();
                            alert("Account Number Copied, Thank You So Much!");
                        }}
                    >
                        Copy Account Number
                    </button>
                </div>
            </div>
        </>
    );
}

export default OuterControl;
