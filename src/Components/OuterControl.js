import React, { useState, useEffect } from "react";
import {
    MdDehaze,
    MdClear,
    MdAdd,
    MdDelete,
    MdList,
    MdDeleteSweep,
    MdCheck,
    MdError,
    MdSend,
} from "react-icons/md";
import { FiHeart, FiMoon, FiSun, FiPhone, FiLoader, FiCopy, FiHelpCircle } from "react-icons/fi";
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaFacebookMessenger,
    FaGithub,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { FiEdit } from "react-icons/fi";
import $ from "jquery";
import create from "./help-vids/Create Task.mp4";
import newList from "./help-vids/Newlist.mp4";
import edit_rem from "./help-vids/Editing_Reminder.mp4";
import renameList from "./help-vids/RenameList.mp4";
import blue from "./help-vids/new.PNG";
import yell from "./help-vids/near.PNG";
import pass from "./help-vids/passed.PNG";
import lock from "./help-vids/lock.png";
import opt from "./help-vids/opt.png";
import Transition from "react-motion-ui-pack/lib/Transition";

import { store } from "react-notifications-component";
import Border from "./Border";
function OuterControl({
    props: {
        app,
        addList,
        setCurrentList,
        updateList,
        deleteList,
        currentList,
        clearList,
        whichMode,
        setwhichMode,
        sendForm,
        formStatus,
        setFormStatus,
    },
}) {
    const [side, setSide] = useState(false);
    const [list, setList] = useState([]);
    const [currentListId, setCurrentListId] = useState("");
    const [copy, setCopy] = useState(false);
    const [ListName, setListName] = useState("");

    // Modals
    const [newListModal, setNewListModal] = useState(false);
    const [renameListModal, setRenameListModal] = useState(false);
    const [deleteListModal, setDeleteListModal] = useState(false);
    const [clearListModal, setClearListModal] = useState(false);
    const [contactModal, setContactModal] = useState(false);
    const [donateModal, setDonateModal] = useState(false);
    const [helpModal, setHelpModal] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [messageErr, setMessageErr] = useState(false);

    // creates Lists of TodoList Categories
    useEffect(() => {
        var list = app.map((App, index) => {
            return (
                <IconContext.Provider
                    value={{
                        size: "1.5rem",
                        className: `ListSetIcon ${whichMode ? "" : "light"}`,
                        style: { fill: whichMode ? "white" : "#333" },
                    }}
                    key={index}
                >
                    <li
                        className={`listSet ${whichMode ? "dark" : "light"} ${
                            app[currentList].id === App.id ? "active" : ""
                        }`}
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
        setList(list);
    }, [app, setCurrentList, whichMode, currentList]);

    function checkEmail(event) {
        var val = event.target.value.trim();
        if (!/@/.test(val) || val === "") {
            setEmailErr(true);
        } else {
            setEmailErr(false);
        }
    }

    function check({ target: { value } }) {
        if (value.trim() === "") {
            return true;
        } else {
            return false;
        }
    }

    function closeContactModal() {
        setNameErr(false);
        setEmailErr(false);
        setMessageErr(false);
    }

    var sendBtn = {
        className: "",
        icon: "",
        text: "",
    };
    switch (formStatus) {
        case "sending":
            sendBtn.className = sendBtn.text = "Sending";
            sendBtn.icon = <FiLoader className="loading" />;
            break;
        case "sent":
            sendBtn.className = sendBtn.text = "Sent";
            sendBtn.icon = <MdCheck />;
            break;
        case "error":
            sendBtn.className = "Error";
            sendBtn.text = "An Error Occured!";
            sendBtn.icon = <MdError />;
            break;
        default:
            sendBtn.className = sendBtn.text = "Send";
            sendBtn.icon = <MdSend />;
    }

    function copyComp() {
        store.addNotification({
            title: "Copied!",
            message: "Account Number Copied, Thank You so Much!",
            type: "success",
            container: "top-center",
            animationIn: ["animated", "jackInTheBox"],
            animationOut: ["animated", "bounceOut"],
            dismiss: {
                duration: 3000,
                onScreen: true,
                showIcon: true,
                touch: true,
                click: true,
            },
        });
    }

    return (
        <>
            <div className="ham">
                <MdDehaze
                    size="1.5rem"
                    className="icon"
                    onClick={() => {
                        setSide(true);
                    }}
                />
            </div>
            <Transition component={false} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
                {(side || newListModal) && (
                    <div
                        key="underlay"
                        className="sideBarUnderLay"
                        onClick={() => {
                            setSide(false);
                        }}
                    ></div>
                )}
            </Transition>
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
            {/* Sets name of New List */}
            <Transition
                component={false}
                appear={{ translateY: 50, opacity: 0 }}
                enter={{ opacity: 1, translateY: 0 }}
                leave={{ translateY: -50, opacity: 0 }}
            >
                {newListModal && (
                    <div className="modalCont newModal right" key="newListModal">
                        <form
                            className="modal"
                            onSubmit={(event) => {
                                event.preventDefault();
                                setNewListModal(false);
                                addList(ListName);
                                setSide(false);
                                setListName("");
                            }}
                        >
                            <h3>list Name</h3>
                            <div className="input-container">
                                <input
                                    type="text"
                                    className="Input"
                                    name="inputBlock"
                                    value={ListName}
                                    onChange={({ target: { value } }) => {
                                        setListName(value);
                                    }}
                                    autoComplete="off"
                                    required={true}
                                />
                                <Border />
                                <span>List Name...</span>
                            </div>
                            <button className="modalBtn save" type="submit">
                                <MdCheck />
                                <span>Save</span>
                            </button>
                            <button
                                className="modalBtn cancel"
                                type="button"
                                onClick={() => {
                                    setNewListModal(false);
                                    setListName("");
                                }}
                            >
                                <MdClear />
                                <span>Cancel</span>
                            </button>
                        </form>
                    </div>
                )}
            </Transition>
            {/* Renames a list */}
            <Transition
                component={false}
                appear={{ translateY: 50, opacity: 0 }}
                enter={{ opacity: 1, translateY: 0 }}
                leave={{ translateY: -50, opacity: 0 }}
            >
                {renameListModal && (
                    <div className="modalCont rename right" key="renameList">
                        <form
                            className="modal"
                            onSubmit={(event) => {
                                event.preventDefault();
                                setRenameListModal(false);
                                updateList(currentListId, ListName);
                                setCurrentListId("");
                            }}
                        >
                            <h3>Rename Todo</h3>
                            <div className="input-container">
                                <input
                                    type="text"
                                    className="Input renamebox"
                                    name="inputBlock"
                                    onChange={({ target: { value } }) => {
                                        setListName(value);
                                    }}
                                    autoComplete="off"
                                    required={true}
                                />
                                <Border />
                            </div>

                            <button className="modalBtn save" type="submit">
                                <MdCheck />
                                <span>Save</span>
                            </button>
                            <button
                                className="modalBtn cancel"
                                type="button"
                                onClick={() => {
                                    setRenameListModal(false);
                                }}
                            >
                                <MdClear />
                                <span>Cancel</span>
                            </button>
                        </form>
                    </div>
                )}
            </Transition>
            {/* delets a list */}
            <Transition
                component={false}
                appear={{ translateY: 50, opacity: 0 }}
                enter={{ opacity: 1, translateY: 0 }}
                leave={{ translateY: -50, opacity: 0 }}
            >
                {deleteListModal && (
                    <div className="modalCont delete center" key="delete">
                        <div className="modal">
                            <MdDelete fontSize="3rem" className="bin" />
                            <h3>Are you sure You want to Delete this List?</h3>
                            <p>Entire List will be removed permanently</p>

                            <button
                                className="modalBtn cancel"
                                type="button"
                                onClick={() => {
                                    setDeleteListModal(false);
                                }}
                            >
                                <MdClear />
                                <span>Cancel</span>
                            </button>
                            <button
                                className="modalBtn del"
                                type="submit"
                                onClick={() => {
                                    setDeleteListModal(false);
                                    deleteList(currentListId);
                                    setSide(false);
                                }}
                            >
                                <MdCheck />
                                <span>OK</span>
                            </button>
                        </div>
                    </div>
                )}
            </Transition>
            {/* Clears all Lists */}
            <Transition
                component={false}
                appear={{ translateY: 50, opacity: 0 }}
                enter={{ opacity: 1, translateY: 0 }}
                leave={{ translateY: -50, opacity: 0 }}
            >
                {clearListModal && (
                    <div className="modalCont clearListModal center" key="clear">
                        <div className="modal">
                            <MdDeleteSweep fontSize="3rem" className="bin" />
                            <h3>Are you sure You want to Clear All Your Lists?</h3>
                            <p>All Lists will be removed permanently and Cannot be recovered!</p>
                            <button
                                className="modalBtn cancel"
                                onClick={() => {
                                    setClearListModal(false);
                                }}
                            >
                                <MdClear />
                                <span>Cancel</span>
                            </button>
                            <button
                                className="modalBtn del"
                                onClick={() => {
                                    setClearListModal(false);
                                    clearList();
                                    setSide(false);
                                }}
                            >
                                <MdDeleteSweep />
                                <span> Clear all Lists</span>
                            </button>
                        </div>
                    </div>
                )}
            </Transition>
            {/* Contact Me Section */}
            <Transition
                component={false}
                appear={{ translateY: 50, opacity: 0 }}
                enter={{ opacity: 1, translateY: 0 }}
                leave={{ translateY: -50, opacity: 0 }}
            >
                {contactModal && (
                    <div
                        key="contact"
                        className="modalCont contactModal"
                        style={{ userSelect: "text" }}
                    >
                        <div className="modal">
                            <MdClear
                                className={"icon closeModal"}
                                size="1.5rem"
                                onClick={() => {
                                    setContactModal(false);
                                    setFormStatus("send");
                                    closeContactModal();
                                }}
                            />

                            <form
                                className="contact"
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    sendForm(event);
                                    setFormStatus("sending");
                                }}
                            >
                                <h3>Contact Me</h3>
                                <div className={`input-container `}>
                                    <input
                                        type="text"
                                        className={`Input ${nameErr ? "err" : ""}`}
                                        name="from_name"
                                        autoComplete="off"
                                        required={true}
                                        onKeyUp={(event) => {
                                            setNameErr(check(event));
                                        }}
                                        onBlur={(event) => {
                                            setNameErr(check(event));
                                        }}
                                    />
                                    <Border />
                                    <span>Full Name</span>
                                </div>
                                <div className="input-container">
                                    <input
                                        type="email"
                                        className={`Input email ${emailErr ? "err" : ""}`}
                                        name="from_email"
                                        autoComplete="off"
                                        required={true}
                                        onKeyUp={checkEmail}
                                        onBlur={checkEmail}
                                    />
                                    <Border />
                                    <span>email</span>
                                </div>
                                <div className="input-container message">
                                    <textarea
                                        className={`Input ${messageErr ? "err" : ""}`}
                                        name="message"
                                        required={true}
                                        onKeyUp={(event) => {
                                            setMessageErr(check(event));
                                        }}
                                        onBlur={(event) => {
                                            setMessageErr(check(event));
                                        }}
                                    ></textarea>
                                    <svg
                                        className="border textarea"
                                        viewBox="0 0 309 277"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            className="cls-1 path"
                                            d="M154.5,1.5h138a15,15,0,0,1,15,15v244a15,15,0,0,1-15,15h-138"
                                        />
                                        <path
                                            className="cls-2 path"
                                            d="M154.5,275.5H16.5a15,15,0,0,1-15-15V16.5a15,15,0,0,1,15-15h138"
                                        />
                                    </svg>
                                    <span>Message</span>
                                </div>
                                <button
                                    className={`modalBtn sendBtn ${sendBtn.className}`}
                                    type="submit"
                                >
                                    {sendBtn.icon}
                                    <span>{sendBtn.text}</span>
                                </button>
                            </form>
                            <div className="social">
                                <a
                                    href="https://www.facebook.com/crimson.oluwatowo/"
                                    className="facebook"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="https://www.instagram.com/crimson_corp/"
                                    className="instagram"
                                >
                                    <FaInstagram />
                                </a>
                                <a href="m.me/oluwatowo_rosanwo" className="messenger">
                                    <FaFacebookMessenger />
                                </a>
                                <a
                                    href="https://api.whatsapp.com/send?phone=+2348024537884&text=Hi20%Crimson%20%"
                                    className="whatsapp"
                                >
                                    <FaWhatsapp />
                                </a>
                                <a href="https://github.com/CRIMSON-CORP" className="github">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
            {/* Donate Section */}
            <Transition
                component={false}
                appear={{ translateY: 50, opacity: 0 }}
                enter={{ opacity: 1, translateY: 0 }}
                leave={{ translateY: -50, opacity: 0 }}
            >
                {donateModal && (
                    <div
                        key="donate"
                        className="modalCont donateModal"
                        style={{ userSelect: "text" }}
                    >
                        <div className="modal">
                            <MdClear
                                className={"icon closeModal"}
                                size="1.5rem"
                                onClick={() => {
                                    setDonateModal(false);
                                    setCopy(false);
                                }}
                            />

                            <h3>Donate</h3>
                            <div className="info-block">
                                <h4>- About Me</h4>
                                <p>
                                    My Name is Oluwatowo Rosanwo Mayowa, I'm a 200L Student of The
                                    University Of Ibadan studying Food Technology, I started Web
                                    Development in 2018 and Now I'm a Self Taught Intermediate Full
                                    Stack Web Developer and Aspiring UI/UX Deisgner, Im also a
                                    Logo/Video Editor.
                                </p>
                                <p>
                                    I've had intense Self training on basics of Web Development
                                    which include HTML,CSS and Vanilla JAVASCRIPT, I Studied jQuery
                                    and React (This PWA was build With React), as well as back-end
                                    Frameworks Like NodeJS Express, and Database Query Language
                                    MySQL and Ive Built Projects With all These Technologies.
                                </p>
                                <p>
                                    I'm really good at solving problems and really bad at giving up
                                    on a project, I aspire to be hired as an Intern and Then gradute
                                    to Being a Frelance Developer.
                                </p>
                            </div>
                            <div className="info-block">
                                <h4>- Donate</h4>
                                <p>
                                    Please if You really Like my Work and have a some money to
                                    spare, Kindly make a Donation To me as This will enhance my
                                    Progress and Productivity and also make me work harder and
                                    Develop more Apps that you will Definately find usefull
                                </p>
                            </div>

                            <h4>Account Details:</h4>
                            <pre>
                                Bank: First Bank <br />
                                Account Number: <span id="acc">3123872415</span> <br />
                                Account Name: Oluwatowo Rosanwo <br />
                            </pre>
                            <button
                                className={`copy modalBtn sendBtn ${copy ? "Sent" : "Send"}`}
                                onClick={() => {
                                    var temp = document.createElement("input");
                                    document.querySelector(".donateModal .modal").appendChild(temp);
                                    temp.value = document.querySelector("#acc").innerHTML;
                                    temp.select();
                                    document.execCommand("copy");
                                    temp.remove();
                                    setCopy(true);
                                    copyComp();
                                }}
                            >
                                {copy ? (
                                    <>
                                        <MdCheck />
                                        <span>Copied</span>
                                    </>
                                ) : (
                                    <>
                                        <FiCopy />
                                        <span>Copy Account Number</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </Transition>
            {/* How to use section */}
            <Transition
                component={false}
                appear={{ translateY: 50, opacity: 0 }}
                enter={{ opacity: 1, translateY: 0 }}
                leave={{ translateY: -50, opacity: 0 }}
            >
                {helpModal && (
                    <div key="help" className="modalCont helpModal">
                        <div className="modal">
                            <MdClear
                                className={"icon closeModal"}
                                size="1.5rem"
                                onClick={() => {
                                    setHelpModal(false);
                                }}
                            />

                            <h3>
                                <u>How To Use</u>
                            </h3>
                            <div className="info-block">
                                <h4>What the App is used for</h4>
                                <p>
                                    Todo App is a Web Application Designed By Crimson Corp, it is
                                    designed specifically for creating Todo Lists.
                                </p>
                                <p>
                                    Now, one of the most important reasons for keeping a Todo list
                                    is the organization, Organizing your tasks with a list can make
                                    everything much more managable and make you feel grounded.
                                    Seeing a clear outline of your completed and uncompleted tasks
                                    will help you feel organized and mentally focused
                                </p>
                            </div>
                            <div className="info-block">
                                <h4>Note!</h4>
                                <p>
                                    Video Illustrations are made with Desktop interface so you can
                                    see what exactly is beign clicked
                                </p>
                                <p>if Video Illustration dosen't play, Kindly refresh the page </p>
                            </div>
                            <div className="info-block">
                                <h4>Creating a List</h4>
                                <p>
                                    To Create a List, Click the three line icon at Top left corner
                                    and click "Add New List", then Write the name of the list and
                                    Click Save
                                </p>
                                <video autoPlay={true} loop={true}>
                                    <source src={newList} type="video/mp4" />
                                </video>
                            </div>
                            <div className="info-block">
                                <h4>Creating a Task</h4>
                                <p>
                                    To Create a task, wimply write it in the Input Field and press
                                    the Plus Button to add it to the List
                                </p>
                                <video autoPlay={true} loop={true}>
                                    <source src={create} type="video/mp4" />
                                </video>
                            </div>
                            <div className="info-block">
                                <h4>Editing a Task and Setting Reminder</h4>
                                <p>
                                    To Edit a Task Simply Click the pen on paper icon at the right
                                    of every task, you can decide to change the task name if you
                                    wish, to set Reminder Simply add the Date you want to set
                                    reminder for and Click Save
                                </p>
                                <video autoPlay={true} loop={true}>
                                    <source src={edit_rem} type="video/mp4" />
                                </video>
                            </div>
                            <div className="info-block">
                                <h4>Rename a List</h4>
                                <p>
                                    To Rename a List Simply Click the pen on paper icon at the right
                                    of every List, write the New name of the List and Click Save
                                </p>
                                <video autoPlay={true} loop={true}>
                                    <source src={renameList} type="video/mp4" />
                                </video>
                            </div>
                            <div className="info-block">
                                <h3>Icon wheel Description</h3>
                                <div className="icon_descript">
                                    <img src={blue} alt="Blue wheel" />
                                    <p>Blue wheel means that your task Reminder is Running</p>
                                </div>
                                <div className="icon_descript">
                                    <img src={yell} alt="Yellow wheel" />
                                    <p>
                                        Yellow wheel means that your task Reminder has Thirty
                                        minutes Left to Due Time!
                                    </p>
                                </div>
                                <div className="icon_descript">
                                    <img src={pass} alt="Red wheel" />
                                    <p>
                                        Red wheel means that your task Reminder has passed Due Time!
                                    </p>
                                </div>
                            </div>
                            <h3>
                                <u>Performance Improvement Tips</u>
                            </h3>
                            <div className="info-block">
                                <p>
                                    For better user Experience, its best that the app continues to
                                    fuction even when not beign used so as to give Reminders at
                                    Appropriate times, to achieved this, Ive highlighted two Easy
                                    ways to achieve this feat, although there are more complex ways
                                    that Garuatee
                                </p>
                                <h4>Locking the App from Closing</h4>
                                <p>
                                    This is very easy to accomplish, you just need to minimize the
                                    App and the click the icon that looks like a Lock, You will have
                                    to lock Google Chrome or any Browser used to Install this App is
                                    a extension of the Browser, if your Browser shuts down, the app
                                    shuts down with it
                                </p>
                                <img src={lock} alt="lock"></img>
                                <h4>Removig the App from Optiization List</h4>
                                <p>
                                    There are a lot of Inbuilt system Apps that constantly optimize
                                    our device for us, This sounds Good but it removes the Apps that
                                    we need to function even when were not using it, a way around
                                    this is to remove the App from any optimization List as much as
                                    possible for it to continue running and Reminding you in future
                                </p>
                                <img src={opt} alt="optimize"></img>
                                <p>
                                    Although these tips do not assure Maximum effectivenes of the
                                    App, but they have been proven to improve it
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
            <Transition component={false} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
                {(newListModal ||
                    renameListModal ||
                    deleteListModal ||
                    donateModal ||
                    helpModal ||
                    clearListModal ||
                    contactModal) && (
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

export default OuterControl;
