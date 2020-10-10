import React, { useState, useEffect } from "react";
import {
    MdDehaze,
    MdClear,
    MdAdd,
    MdEdit,
    MdDelete,
    MdList,
    MdDeleteSweep,
    MdCheck,
    MdError,
    MdSend,
} from "react-icons/md";
import { FiHeart, FiMoon, FiSun, FiPhone, FiLoader, FiCopy } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { IconContext } from "react-icons";
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
        clearList,
        changeMode,
        whichMode,
        sendForm,
        formStatus,
        setFormStatus,
    },
}) {
    const [side, setSide] = useState(false);
    const [list, setList] = useState([]);
    const [currentListId, setCurrentListId] = useState("");
    const [modes, setModes] = useState(true);
    const [contactForm, setcontactForm] = useState({});
    const [copy, setCopy] = useState(false);
    // creates Lists of TodoList Categories
    useEffect(() => {
        var list = app.map((app, index) => {
            return (
                <IconContext.Provider
                    value={{
                        size: "1.5rem",
                        className: `ListSetIcon ${whichMode ? "" : "light"}`,
                    }}
                    key={index}
                >
                    <li
                        className={`listSet ${whichMode ? "dark" : "light"}`}
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
                        <MdList className="icon" />
                        <h3>{app.name}</h3>
                        <MdEdit
                            data-id={app.id}
                            className="icon edit"
                            onClick={() => {
                                $(".rename").fadeIn();
                                $(".renamebox").val(app.name).select();
                                setCurrentListId(app.id);
                            }}
                        />
                        <MdDelete
                            className="icon deleteIcon"
                            data-id={app.id}
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

    if (whichMode) $(".modal").removeClass("light");
    else $(".modal").addClass("light");

    if (side) {
        $(".sideBarUnderLay")
            .fadeIn()
            .click(() => {
                setSide(false);
            });
    } else {
        $(".sideBarUnderLay").fadeOut();
    }

    $(".contactModal .Input.email").blur(function (event) {
        if (!/@/.test(event.target.value.trim())) {
            $(this).addClass("err");
        } else {
            $(this).removeClass("err");
        }
    });
    function check(input) {
        if (input.val().trim() === "") {
            input.addClass("err");
        } else {
            input.removeClass("err");
        }
    }
    $(".contactModal .Input:not('.email')").blur(function () {
        check($(this));
    });
    $(".contactModal .Input.err").keyup(function () {
        check($(this));
    });
    var sendBtn;
    switch (formStatus) {
        case "sending":
            sendBtn = (
                <button className="modalBtn sendBtn sending" type="submit">
                    <FiLoader className="loading" />
                    <span>Sending</span>
                </button>
            );
            break;
        case "sent":
            sendBtn = (
                <button className="modalBtn sendBtn sent" type="submit">
                    <MdCheck />
                    <span>Sent</span>
                </button>
            );
            break;
        case "error":
            sendBtn = (
                <button className="modalBtn sendBtn error" type="submit">
                    <MdError />
                    <span>Error Occured!</span>
                </button>
            );
            break;
        default:
            sendBtn = (
                <button className="modalBtn sendBtn send" type="submit">
                    <MdSend />
                    <span>Send</span>
                </button>
            );
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
                    <IconContext.Provider value={{ size: "1.5rem" }}>
                        <li
                            className="subList"
                            onClick={() => {
                                $(".newModal").fadeIn();
                                $(".new");
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
                                changeMode();
                                setModes(!modes);
                            }}
                        >
                            {whichMode ? <FiSun fill="white" /> : <FiMoon stroke="transparent" />}
                            <h3>Turn on {whichMode ? "Light" : "Dark"} Mode</h3>
                        </li>
                        <hr />
                        <li
                            className="subList"
                            onClick={() => {
                                $(".contactModal").fadeIn();
                            }}
                        >
                            <FiPhone
                                style={{ strokeWidth: 1 }}
                                fill={`${whichMode ? "white" : "#333"}`}
                            />
                            <h3>Contact Me</h3>
                        </li>
                        <li
                            className="subList"
                            onClick={() => {
                                $(".donateModal").fadeIn();
                            }}
                        >
                            <FiHeart
                                style={{ strokeWidth: 1 }}
                                fill={`${whichMode ? "white" : "#333"}`}
                            />
                            <h3>Donate</h3>
                        </li>
                    </IconContext.Provider>
                    <hr />
                </ul>
            </div>
            {/* Sets name of New List */}
            <div className="modalCont newModal">
                <form
                    className="modal"
                    onSubmit={(event) => {
                        event.preventDefault();
                        $(".newModal").fadeOut();
                        $(".Input").val(null);
                        addList();
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
                                setNewListName(value);
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
                        className="modalBtn"
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
            <div className="modalCont rename">
                <form
                    className="modal"
                    onSubmit={(event) => {
                        event.preventDefault();
                        $(".rename").fadeOut();
                        $(".Input").val(null);
                        updateList(currentListId);
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
                                setRename(value);
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
                        className="modalBtn"
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
            <div className="modalCont delete">
                <div className="modal" style={{ textAlign: "center" }}>
                    <MdDelete
                        fontSize="3rem"
                        className="bin"
                        style={{ textShadow: "0px 0px 5px red" }}
                    />
                    <h3>Are you sure You want to Delete this List?</h3>
                    <p>Entire List will be removed permanently</p>

                    <button
                        className="modalBtn"
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
            <div className="modalCont clearListModal">
                <div className="modal" style={{ textAlign: "center" }}>
                    <MdDeleteSweep
                        fontSize="3rem"
                        className="icon bin"
                        style={{ textShadow: "0px 0px 5px red" }}
                    />
                    <h3>Are you sure You want to Clear All Your Lists?</h3>
                    <p>All Lists will be removed permanently and Cannot be recovered!</p>
                    <button
                        className="modalBtn"
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
                            clearList(currentListId);
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
                            sendForm(contactForm);
                            setFormStatus("sending");
                        }}
                    >
                        <h3>Contact Me</h3>
                        <div className="input-container">
                            <input
                                type="text"
                                className="Input"
                                name="fullName"
                                onChange={({ target: { value } }) => {
                                    setcontactForm((prev) => {
                                        return { ...prev, fullname: value };
                                    });
                                }}
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
                                name="email"
                                onChange={({ target: { value } }) => {
                                    setcontactForm((prev) => {
                                        return { ...prev, email: value };
                                    });
                                }}
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
                            <textarea
                                className="Input"
                                name="inputBlock"
                                onChange={({ target: { value } }) => {
                                    setcontactForm((prev) => {
                                        return { ...prev, message: value };
                                    });
                                }}
                                required={true}
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
                        {sendBtn}
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
                            in 2018 and Now I'm an Intermediate Web Developer and Aspiring UI/UX
                            Deisgner, Im also a Logo/Video Editor.
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
                        className={`copy modalBtn sendBtn ${copy ? "sent" : "send"}`}
                        onClick={() => {
                            var temp = $("<input>");
                            $(".donateModal .modal").append(temp);
                            temp.val($("#acc").text()).select();
                            document.execCommand("copy");
                            temp.remove();
                            setCopy(true);
                            setTimeout(() => {
                                alert("Account Number Copied, Thank You So Much!");
                            }, 1000);
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
        </>
    );
}

export default OuterControl;
