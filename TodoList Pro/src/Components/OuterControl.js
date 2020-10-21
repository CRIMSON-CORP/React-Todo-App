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

import { store } from "react-notifications-component";
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
    // creates Lists of TodoList Categories
    useEffect(() => {
        var list = app.map((app, index) => {
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
                        className={`listSet ${whichMode ? "dark" : "light"}`}
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
                        <MdList className="icon" />
                        <h3>{app.name}</h3>
                        <FiEdit
                            style={{ stroke: whichMode ? "white" : "#333", fill: "none" }}
                            className="icon edit"
                            onClick={() => {
                                $(".rename").fadeIn();
                                $(".renamebox").val(app.name).select();
                                setCurrentListId(app.id);
                            }}
                        />
                        <MdDelete
                            className="icon bin"
                            onClick={() => {
                                $(".delete").fadeIn();
                                setCurrentListId(app.id);
                            }}
                        />
                    </li>
                </IconContext.Provider>
            );
        });
        setList(list);
    }, [app, setCurrentList, whichMode]);

    $(`.listSet`).removeClass("active");
    $(`.listSet:eq(${currentList})`).addClass("active");

    if (side) {
        $(".sideBarUnderLay")
            .fadeIn()
            .click(() => {
                setSide(false);
            });
    } else {
        $(".sideBarUnderLay").fadeOut();
    }

    function checkEmail(event, x) {
        var val = event.target.value.trim();
        if (!/@/.test(val) || val === "") {
            x.addClass("err");
        } else {
            x.removeClass("err");
        }
    }

    $(".contactModal .Input.email").on({
        keyup: function (event) {
            checkEmail(event, $(this));
        },
        blur: function (event) {
            checkEmail(event, $(this));
        },
    });
    function check(input) {
        if (input.val().trim() === "") {
            input.addClass("err");
        } else {
            input.removeClass("err");
        }
    }
    $(".contactModal .Input:not(.email)").on({
        blur: function () {
            check($(this));
        },

        keyup: function () {
            check($(this));
        },
    });

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
            <div className="sideBarUnderLay"></div>
            <div className={`sideBar ${side ? "openBar" : ""} ${whichMode ? "" : "lightMode"}`}>
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
                        value={{ size: "1.5rem", style: { fill: whichMode ? "white" : "#333" } }}
                    >
                        <li
                            className="subList"
                            onClick={() => {
                                $(".newModal").fadeIn();
                            }}
                        >
                            <MdAdd />
                            <h3>Add New List</h3>
                        </li>
                        <li
                            className="subList"
                            onClick={() => {
                                $(".clearListModal").fadeIn();
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
                            {whichMode ? <FiSun fill="white" /> : <FiMoon stroke="transparent" />}
                            <h3>Turn on {whichMode ? "Light" : "Dark"} Mode</h3>
                        </li>
                        <hr />
                        <li
                            className="subList"
                            onClick={() => {
                                $(".helpModal").fadeIn();
                            }}
                        >
                            <FiHelpCircle style={{ fill: whichMode ? "none" : "#333" }} />
                            <h3>How to use</h3>
                        </li>
                        <li
                            className="subList"
                            onClick={() => {
                                $(".contactModal").fadeIn();
                            }}
                        >
                            <FiPhone style={{ strokeWidth: 0 }} />
                            <h3>Contact Me</h3>
                        </li>
                        <li
                            className="subList"
                            onClick={() => {
                                $(".donateModal").fadeIn();
                            }}
                        >
                            <FiHeart style={{ strokeWidth: 0 }} />
                            <h3>Donate</h3>
                        </li>
                    </IconContext.Provider>
                    <hr />
                </ul>
            </div>
            {/* Sets name of New List */}
            <div className="modalCont newModal right">
                <form
                    className="modal"
                    onSubmit={(event) => {
                        event.preventDefault();
                        $(".newModal").fadeOut();
                        $(".Input").val(null);
                        addList(ListName);
                        setSide(false);
                    }}
                >
                    <h3>list Name</h3>
                    <div className="input-container">
                        <input
                            type="text"
                            className="Input"
                            name="inputBlock"
                            onChange={({ target: { value } }) => {
                                setListName(value);
                            }}
                            autoComplete="off"
                            required={true}
                        />
                        <svg className="border" viewBox="0 0 275.05 40" preserveAspectRatio="none">
                            <path
                                className="cls-1 path"
                                d="M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139"
                                transform="translate(-1.3 -0.77)"
                            />
                            <path
                                className="cls-2 path"
                                d="M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164"
                                transform="translate(-1.3 -0.77)"
                            />
                        </svg>
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
                            $(".newModal").fadeOut();
                            $(".Input").val(null);
                        }}
                    >
                        <MdClear />
                        <span>Cancel</span>
                    </button>
                </form>
            </div>
            {/* Renames a list */}
            <div className="modalCont rename right">
                <form
                    className="modal"
                    onSubmit={(event) => {
                        event.preventDefault();
                        $(".rename").fadeOut();
                        $(".Input").val(null);
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
                        <svg className="border" viewBox="0 0 275.05 40" preserveAspectRatio="none">
                            <path
                                className="cls-1 path"
                                d="M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139"
                                transform="translate(-1.3 -0.77)"
                            />
                            <path
                                className="cls-2 path"
                                d="M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164"
                                transform="translate(-1.3 -0.77)"
                            />
                        </svg>
                    </div>

                    <button className="modalBtn save" type="submit">
                        <MdCheck />
                        <span>Save</span>
                    </button>
                    <button
                        className="modalBtn cancel"
                        type="button"
                        onClick={() => {
                            $(".rename").fadeOut();
                            $(".Input").val(null);
                        }}
                    >
                        <MdClear />
                        <span>Cancel</span>
                    </button>
                </form>
            </div>
            {/* delets a list */}
            <div className="modalCont delete center">
                <div className="modal">
                    <MdDelete fontSize="3rem" className="bin" />
                    <h3>Are you sure You want to Delete this List?</h3>
                    <p>Entire List will be removed permanently</p>

                    <button
                        className="modalBtn cancel"
                        type="button"
                        onClick={() => {
                            $(".delete").fadeOut();
                        }}
                    >
                        <MdClear />
                        <span>Cancel</span>
                    </button>
                    <button
                        className="modalBtn del"
                        type="submit"
                        onClick={() => {
                            $(".delete").fadeOut();
                            deleteList(currentListId);
                            setSide(false);
                        }}
                    >
                        <MdCheck />
                        <span>OK</span>
                    </button>
                </div>
            </div>
            {/* Clears all Lists */}
            <div className="modalCont clearListModal center">
                <div className="modal">
                    <MdDeleteSweep fontSize="3rem" className="bin" />
                    <h3>Are you sure You want to Clear All Your Lists?</h3>
                    <p>All Lists will be removed permanently and Cannot be recovered!</p>
                    <button
                        className="modalBtn cancel"
                        onClick={() => {
                            $(".clearListModal").fadeOut();
                        }}
                    >
                        <MdClear />
                        <span>Cancel</span>
                    </button>
                    <button
                        className="modalBtn del"
                        onClick={() => {
                            $(".clearListModal").fadeOut();
                            clearList();
                            setSide(false);
                        }}
                    >
                        <MdDeleteSweep />
                        <span> Clear all Lists</span>
                    </button>
                </div>
            </div>
            {/* Contact Me Section */}
            <div className="modalCont contactModal" style={{ display: "none", userSelect: "text" }}>
                <div className="modal">
                    <MdClear
                        className={"icon closeModal"}
                        size="1.5rem"
                        onClick={() => {
                            $(".contactModal .Input").val(null);
                            $(".contactModal").fadeOut();
                            $(".contactModal .Input").removeClass("err");
                            setFormStatus("send");
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
                        <div className="input-container">
                            <input
                                type="text"
                                className="Input"
                                name="from_name"
                                autoComplete="off"
                                required={true}
                            />
                            <svg
                                className="border"
                                viewBox="0 0 275.05 40"
                                preserveAspectRatio="none"
                            >
                                <path
                                    className="cls-1 path"
                                    d="M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139"
                                    transform="translate(-1.3 -0.77)"
                                />
                                <path
                                    className="cls-2 path"
                                    d="M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164"
                                    transform="translate(-1.3 -0.77)"
                                />
                            </svg>
                            <span>Full Name</span>
                        </div>
                        <div className="input-container">
                            <input
                                type="email"
                                className="Input email"
                                name="from_email"
                                autoComplete="off"
                                required={true}
                            />
                            <svg
                                className="border"
                                viewBox="0 0 275.05 40"
                                preserveAspectRatio="none"
                            >
                                <path
                                    className="cls-1 path"
                                    d="M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139"
                                    transform="translate(-1.3 -0.77)"
                                />
                                <path
                                    className="cls-2 path"
                                    d="M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164"
                                    transform="translate(-1.3 -0.77)"
                                />
                            </svg>
                            <span>email</span>
                        </div>
                        <div className="input-container message">
                            <textarea className="Input" name="message" required={true}></textarea>
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
                        <button className={`modalBtn sendBtn ${sendBtn.className}`} type="submit">
                            {sendBtn.icon}
                            <span>{sendBtn.text}</span>
                        </button>
                    </form>
                    <div className="social">
                        <a href="https://www.facebook.com/crimson.oluwatowo/" className="facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/crimson_corp/" className="instagram">
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
                        <a
                            href="https://https://github.com/CRIMSON-CORP/React-Todo-App/"
                            className="github"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
            {/* Donate Section */}
            <div className="modalCont donateModal" style={{ display: "none", userSelect: "text" }}>
                <div className="modal">
                    <MdClear
                        className={"icon closeModal"}
                        size="1.5rem"
                        onClick={() => {
                            $(".donateModal").fadeOut();
                            setCopy(false);
                        }}
                    />

                    <h3>Donate</h3>
                    <div className="info-block">
                        <h4>- About Me</h4>
                        <p>
                            My Name is Oluwatowo Rosanwo Mayowa, I'm a 200L Student of The
                            University Of Ibadan studying Food Technology, I started Web Development
                            in 2018 and Now I'm a Self Taught Intermediate Full Stack Web Developer
                            and Aspiring UI/UX Deisgner, Im also a Logo/Video Editor.
                        </p>
                        <p>
                            I've had intense Self training on basics of Web Development which
                            include HTML,CSS and Vanilla JAVASCRIPT, I Studied jQuery and React
                            (This PWA was build With React), as well as back-end Frameworks Like
                            NodeJS Express, and Database Query Language MySQL and Ive Built Projects
                            With all These Technologies.
                        </p>
                        <p>
                            I'm really good at solving problems and really bad at giving up on a
                            project, I aspire to be hired as an Intern and Then gradute to Being a
                            Frelance Developer.
                        </p>
                    </div>
                    <div className="info-block">
                        <h4>- Donate</h4>
                        <p>
                            Please if You really Like my Work and have a some money to spare, Kindly
                            make a Donation To me as This will enhance my Progress and Productivity
                            and also make me work harder and Develop more Apps that you will
                            Definately find usefull
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
                            var temp = $("<input>");
                            $(".donateModal .modal").append(temp);
                            temp.val($("#acc").text()).select();
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
            {/* How to use section */}
            <div className="modalCont helpModal" style={{ display: "none", userSelect: "text" }}>
                <div className="modal">
                    <MdClear
                        className={"icon closeModal"}
                        size="1.5rem"
                        onClick={() => {
                            $(".helpModal").fadeOut();
                        }}
                    />

                    <h3>How To Use</h3>
                    <div className="info-block">
                        <h4>What the App is used for</h4>
                        <p>
                            Todo App is a Web Application Designed By Crimson Corp, it is designed
                            specifically for creating Todo Lists.
                        </p>
                        <p>
                            Now, one of the most important reasons for keeping a Todo list is the
                            organization Organizing your tasks with a list can make everything much
                            more managable and make you feel grounded. Seeing a clear outline of
                            your completed and uncompleted tasks will help you feel organized and
                            mentally focused
                        </p>
                    </div>
                    <div className="info-block">
                        <h4>Creating a List</h4>
                        <p>
                            To create a List, Click the three line icon at Top left corner and click
                            "Add New List", then Write the name of the list and Click Save
                        </p>
                        <video autoPlay={true} loop={true}>
                            <source src={newList} type="video/mp4" />
                        </video>
                    </div>
                    <div className="info-block">
                        <h4>Creating a Task</h4>
                        <p>
                            To create a task, Simply Write it in the Input Field and press the Plus
                            Button to add it to the List
                        </p>
                        <video autoPlay={true} loop={true}>
                            <source src={create} type="video/mp4" />
                        </video>
                    </div>
                    <div className="info-block">
                        <h4>Editing a Task and Setting Reminder</h4>
                        <p>
                            To Edit a Task Simply Click the pen on paper icon at the right of every
                            task, you can decide to change the task name if you wish, to set
                            Reminder Simply add the Date you want to set reminder for and Click Save
                        </p>
                        <video autoPlay={true} loop={true}>
                            <source src={edit_rem} type="video/mp4" />
                        </video>
                    </div>
                    <div className="info-block">
                        <h4>Rename a List</h4>
                        <p>
                            To Rename a List Simply Click the pen on paper icon at the right of
                            every List, write the New name of the List and Click Save
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
                                Yellow wheel means that your task Reminder has Thirty minutes Left
                                to Due Time!
                            </p>
                        </div>
                        <div className="icon_descript">
                            <img src={pass} alt="Red wheel" />
                            <p>Red wheel means that your task Reminder has passed Due Time!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OuterControl;
