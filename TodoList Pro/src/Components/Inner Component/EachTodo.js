import React, { useState, useEffect } from "react";
import { useInterval } from "react-interval-hook";
import { MdCheck, MdClear, MdDelete, MdSettings } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import $ from "jquery";
import Push from "push.js";
import { store } from "react-notifications-component";
import ls from "local-storage";
import { useTransition, animated } from "react-spring";
function EachTodo({
    props: {
        eachTodo: {
            id,
            completed,
            Todo,
            DateOptions: { futureDate = null, reminder = false } = {},
        },
        updateTodo,
        removeTodo,
        AddUpdate,
        removeReminder,
    },
}) {
    const [TodoOp, setTodoOp] = useState({
        name: "",
        date: "",
        reminder: false,
    });
    const [TodoStatus, setTodoStatus] = useState(() => {
        if (Date.now() >= Date.parse(futureDate)) return "passed";
        else if (Date.now() >= Date.parse(futureDate) - 1800000) return "close";
        else if (reminder) return "normal";
        else return "";
    });
    const [toggle, setToggle] = useState("edit");
    const { start, stop } = useInterval(
        () => {
            var rem = ls.get(`Rem_${id}`);
            rem === undefined || rem === null ? (rem = false) : (rem = JSON.parse(rem));
            if (rem) return;
            if (reminder && !completed && Date.now() >= Date.parse(futureDate) && !rem) {
                Push.create(`Reminder: ${Todo}`, {
                    requireInteraction: false,
                    vibrate: [500, 200, 500],
                });
                setTodoStatus("passed");
                stop();
                ls.set(`Rem_${id}`, true);
            } else if (
                reminder &&
                completed === false &&
                Date.now() >= Date.parse(futureDate) - 1800000 &&
                !rem
            ) {
                setTodoStatus("close");
            } else if (reminder && completed === false) {
                setTodoStatus("normal");
            }
        },
        1000,
        { autoStart: false }
    );

    useEffect(() => {
        if (reminder && !completed) {
            setToggle("reminder");
        } else if (completed) {
            setToggle("completed");
        } else setToggle("edit");
    }, [reminder, completed]);

    var Done = {
        opacity: 0.4,
        textDecoration: "line-through",
    };

    const transition = useTransition(toggle, null, {
        from: { transform: "scale(0)" },
        enter: { transform: "scale(1)" },
        leave: { transform: "scale(0)" },
    });

    return (
        <>
            <div className="label" data-id={`${id}`}>
                <label>
                    <input
                        type="checkbox"
                        data-id={`${id}`}
                        checked={completed}
                        onChange={() => {
                            updateTodo(id);
                            if (!completed) {
                                removeReminder(id);
                                stop();
                            }
                        }}
                    />
                    <div className="Todo">
                        <div className="checkbox-container">
                            <svg viewBox="0 0 100 100" className="checkbox">
                                <path
                                    className="st0"
                                    d="M85,92H15c-3.9,0-7-3.1-7-7V15c0-3.9,3.1-7,7-7h70c3.9,0,7,3.1,7,7v70C92,88.9,88.9,92,85,92z"
                                />
                                <polyline
                                    className="check"
                                    points="22.5,47.5 42.5,67.5 78.5,31.5 "
                                />
                            </svg>
                        </div>
                        <span style={completed ? Done : null}>{Todo}</span>
                    </div>
                </label>
                <div className="op-cont">
                    {transition.map(({ item, props, key }) => {
                        switch (item) {
                            case "completed":
                                return (
                                    <animated.div style={props} key={key} className="op">
                                        <MdDelete
                                            className={"bin icon"}
                                            size="1.5rem"
                                            onClick={() => {
                                                removeTodo(id);
                                            }}
                                            data-id={id}
                                        />
                                    </animated.div>
                                );
                            case "reminder":
                                return (
                                    <animated.div style={props} key={key} className="op">
                                        <MdSettings
                                            className="icon settings"
                                            id={TodoStatus}
                                            size="1.5rem"
                                            data-id={id}
                                            onClick={() => {
                                                $(`.TodoEdit[data-id=${id}]`).fadeIn();
                                                $(".TodoEdit .Input[type='text']")
                                                    .val(Todo)
                                                    .select();
                                            }}
                                        />
                                    </animated.div>
                                );
                            default:
                                return (
                                    <animated.div style={props} key={key} className="op">
                                        <FiEdit
                                            size="1.5rem"
                                            data-id={id}
                                            onClick={() => {
                                                $(`.TodoEdit[data-id=${id}]`).fadeIn();
                                                $(".TodoEdit .Input[type='text']")
                                                    .val(Todo)
                                                    .select();
                                            }}
                                        />
                                    </animated.div>
                                );
                        }
                    })}
                </div>
            </div>
            <div className="modalCont TodoEdit right" data-id={id}>
                <div className="modal">
                    <h3>More Options</h3>
                    <h4>Edit task</h4>
                    <div className="input-container">
                        <input
                            type="text"
                            className="Input"
                            autoComplete="off"
                            onChange={({ target: { value } }) => {
                                setTodoOp((prev) => ({ ...prev, name: value }));
                            }}
                        />
                        <svg className="border" viewBox="0 0 275.05 40" preserveAspectRatio="none">
                            <path
                                className="cls-1 path"
                                d="M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139"
                                transdiv="translate(-1.3 -0.77)"
                            />
                            <path
                                className="cls-2 path"
                                d="M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164"
                                transform="translate(-1.3 -0.77)"
                            />
                        </svg>
                        <span>Edit Task</span>
                    </div>
                    <h4>Set Reminder for</h4>
                    <div className="input-container">
                        <input
                            className="Input"
                            type="datetime-local"
                            defaultValue={TodoOp.date}
                            onChange={({ target: { value } }) => {
                                setTodoOp((prev) => ({ ...prev, date: value }));
                            }}
                        />
                        <svg className="border" viewBox="0 0 275.05 40" preserveAspectRatio="none">
                            <path
                                className="cls-1 path"
                                d="M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139"
                                transdiv="translate(-1.3 -0.77)"
                            />
                            <path
                                className="cls-2 path"
                                d="M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164"
                                transform="translate(-1.3 -0.77)"
                            />
                        </svg>
                    </div>

                    {reminder ? (
                        <button
                            className="modalBtn del"
                            style={{ float: "none", margin: "0 0 20px 0", display: "grid" }}
                            onClick={() => {
                                removeReminder(id);
                                stop();
                                $(".TodoEdit").fadeOut();
                            }}
                        >
                            <MdClear />
                            <span> Remove Current Reminder?</span>
                        </button>
                    ) : null}
                    <button
                        className="modalBtn save"
                        onClick={() => {
                            if (Date.parse(TodoOp.date) <= Date.now()) {
                                store.addNotification({
                                    message: "Setting Date in the Past will not trigger Reminder!",
                                    type: "warning",
                                    container: "top-center",
                                    insert: "top",
                                    animationIn: ["animated", "bounceIn"],
                                    animationOut: ["animated", "fadeOut"],
                                    dismiss: {
                                        duration: 3000,
                                        onScreen: true,
                                        showIcon: true,
                                        touch: true,
                                        click: true,
                                    },
                                });
                                return;
                            }
                            AddUpdate(id, TodoOp);
                            start();
                            ls.set(`Rem_${id}`, false);
                            $(".TodoEdit").fadeOut();
                        }}
                    >
                        <MdCheck />
                        <span>Save</span>
                    </button>
                    <button
                        className="modalBtn cancel"
                        type="button"
                        onClick={() => {
                            $(".TodoEdit").fadeOut();
                        }}
                    >
                        <MdClear />
                        <span>Cancel</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default EachTodo;
