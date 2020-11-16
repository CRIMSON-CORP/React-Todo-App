import React, { useState, useEffect } from "react";
import { useInterval } from "react-interval-hook";
import { MdCheck, MdClear, MdDelete, MdSettings } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import $ from "jquery";
import Push from "push.js";
import { store } from "react-notifications-component";
import ls from "local-storage";
import { useTransition, animated } from "react-spring";
import Border from "../Border";
import Transition from "react-motion-ui-pack/lib/Transition";
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
        trans,
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
    const [modal, setModal] = useState(false);
    const { start, stop } = useInterval(
        () => {
            var rem = ls.get(`Rem_${id}`);
            rem === null ? (rem = false) : (rem = JSON.parse(rem));
            if (rem) return;
            if (reminder && completed === false && Date.now() >= Date.parse(futureDate) && !rem) {
                Push.create(`Reminder: ${Todo}`, {
                    requireInteraction: true,
                    vibrate: [500, 200, 500],
                });
                setTodoStatus("passed");
                stop();
                ls.set(`Rem_${id}`, true);

                if (Date.now() >= Date.parse(futureDate) - 1800000) {
                    setTodoStatus("close");
                }
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

    useEffect(() => {
        if (modal) {
            setTimeout(() => $(".TodoEdit .Input[type='text']").val(Todo).select());
        }
    }, [modal, Todo]);
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
            <div className="label">
                <label>
                    <input
                        type="checkbox"
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
                                    style={{ transition: trans ? ".4s" : "none" }}
                                    d="M85,92H15c-3.9,0-7-3.1-7-7V15c0-3.9,3.1-7,7-7h70c3.9,0,7,3.1,7,7v70C92,88.9,88.9,92,85,92z"
                                />
                                <polyline
                                    className="check"
                                    style={{ transition: trans ? ".4s" : "none" }}
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
                                            onClick={() => {
                                                setModal(true);
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
                                            onClick={() => {
                                                setModal(true);
                                            }}
                                        />
                                    </animated.div>
                                );
                        }
                    })}
                </div>
            </div>

            <Transition
                component={false}
                appear={{ translateY: 50, opacity: 0 }}
                enter={{ opacity: 1, translateY: 0 }}
                leave={{ translateY: -50, opacity: 0 }}
            >
                {modal && (
                    <div className="modalCont TodoEdit right" key="modal">
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
                                <Border />
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
                                <Border />
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
                                            message:
                                                "Setting Date in the Past will not trigger Reminder!",
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
                                    setModal(false);
                                }}
                            >
                                <MdCheck />
                                <span>Save</span>
                            </button>
                            <button
                                className="modalBtn cancel"
                                type="button"
                                onClick={() => {
                                    setModal(false);
                                }}
                            >
                                <MdClear />
                                <span>Cancel</span>
                            </button>
                        </div>
                    </div>
                )}
            </Transition>
            <Transition component={false} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
                {modal && (
                    <div
                        key="underlay"
                        className="ModalUnderLay"
                        onClick={() => {
                            setModal(false);
                        }}
                    ></div>
                )}
            </Transition>
        </>
    );
}

export default EachTodo;
