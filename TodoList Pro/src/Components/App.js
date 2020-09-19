import React, { useState, useEffect } from "react";
import uuid from "uuid";
import Input from "./Inner Component/Input";
import List from "./Inner Component/List";

export default function App() {
    const [Todo, setTodo] = useState({});
    const [TodoListArray, setTodoListArray] = useState([]);
    const [done, setDone] = useState(0);
    const [progress, setProgress] = useState("");

    useEffect(() => {
        const DoneTodos = TodoListArray.filter((arr) => {
            return arr.completed === true;
        });
        var progress, length;
        progress = length = Math.floor((DoneTodos.length / TodoListArray.length) * 100);
        isNaN(progress) ? (progress = 0) : (progress = length);

        setProgress(progress);
        setDone(DoneTodos.length);
    }, [progress, TodoListArray]);

    function sendProps() {
        Todo.Todo === undefined ? alert("Fill Box") : setSend();
        document.getElementById("inputBox").focus();
    }
    function sendKeyProps({ keyCode }) {
        if (Todo.Todo !== undefined) {
            if (keyCode === 13) setSend();
        } else alert("Fill Box");
    }

    function setSend() {
        setTodo((prev) => {
            return {};
        });
        document.getElementById("inputBox").value = null;
        Todo.id = uuid.v4();
        Todo.completed = false;
        setTodoListArray((prev) => [...prev, Todo]);
    }

    function setInput({ target: { value } }) {
        setTodo({ Todo: value });
    }

    function updateTodo(id) {
        setTodoListArray(
            TodoListArray.map((arr) => {
                if (arr.id === id) {
                    arr.completed = !arr.completed;
                }
                return arr;
            })
        );
    }

    function removeTodo(id) {
        setTodoListArray(
            TodoListArray.filter((arr) => {
                return arr.id !== id;
            })
        );
    }

    function clearDone() {
        setTodoListArray(
            TodoListArray.filter((arr) => {
                return arr.completed === false;
            })
        );
    }

    return (
        <div className="container">
            <div className="control">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <linearGradient id="grad" x1="0" y1="0" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ff0612"></stop>
                                <stop offset="100%" stopColor="#6544ff"></stop>
                            </linearGradient>
                            <circle cx="50%" cy="50%" r="40" className="dark"></circle>

                            <circle
                                cx="50%"
                                cy="50%"
                                r="40"
                                style={{ strokeDashoffset: 251 - (251 * progress) / 100 }}
                            ></circle>
                        </svg>
                        <div className="number">
                            {progress !== 0 || TodoListArray.length !== 0 ? (
                                <>
                                    <h2>
                                        {progress}
                                        <span>%</span>
                                    </h2>
                                    <span className="comp">completed</span>
                                </>
                            ) : (
                                <h2 className="empty">No Task</h2>
                            )}
                        </div>
                    </div>
                    {/* <div className="text">Progress</div> */}
                </div>
                <button
                    onClick={clearDone}
                    disabled={done === 0 ? true : false}
                    className={done === 0 ? "disable" : "clear"}
                >
                    &#10005; Clear Done
                </button>
            </div>
            <Input
                props={{
                    sendProps: sendProps,
                    sendKeyProps: sendKeyProps,
                    setInput: setInput,
                }}
            />
            <List
                props={{
                    removeTodo: removeTodo,
                    updateTodo: updateTodo,
                    TodoListArray: TodoListArray,
                }}
            />
        </div>
    );
}
