import React, { useState, useEffect } from "react";
import uuid from "uuid";
import Input from "./Inner Component/Input";
import List from "./Inner Component/List";
import Control from "./Inner Component/Control";

export default function App() {
    const [Todo, setTodo] = useState({});
    const [TodoListArray, setTodoListArray] = useState([]);
    const [done, setDone] = useState(0);
    const [progress, setProgress] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [status, setStatus] = useState("All");

    useEffect(() => {
        const DoneTodos = TodoListArray.filter((arr) => {
            return arr.completed === true;
        });
        var progress = Math.floor((DoneTodos.length / TodoListArray.length) * 100);
        if (isNaN(progress)) progress = 0;
        setProgress(progress);
        setDone(DoneTodos.length);
    }, [progress, TodoListArray]);

    useEffect(() => {
        function FilterLogic() {
            switch (status) {
                case "Completed":
                    setFiltered(TodoListArray.filter((arr) => arr.completed === true));
                    break;
                case "Uncompleted":
                    setFiltered(TodoListArray.filter((arr) => arr.completed === false));
                    break;
                default:
                    setFiltered(TodoListArray);
            }
        }
        FilterLogic();
    }, [status, TodoListArray]);

    useEffect(() => {
        if (localStorage.getItem("todoLocal") == null)
            localStorage.setItem("todoLocal", JSON.stringify([]));
        else var TodoLocal = localStorage.getItem("todoLocal");
        setTodoListArray(JSON.parse(TodoLocal));
    }, []);

    useEffect(() => {
        localStorage.setItem("todoLocal", JSON.stringify(TodoListArray));
    }, [TodoListArray]);

    function sendProps() {
        Todo.Todo === undefined ? alert("Please write a Task") : setSend();
        document.getElementById("inputBox").focus();
    }
    function sendKeyProps({ keyCode }) {
        if (Todo.Todo !== undefined) {
            if (keyCode === 13) setSend();
        } else alert("Please write a Task");
    }

    function setSend() {
        setTodo({});
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
        setTodoListArray(TodoListArray.filter((arr) => arr.id !== id));
    }

    function clearDone() {
        setTodoListArray(TodoListArray.filter((arr) => arr.completed === false));
    }

    function statusHandler({ target: { value } }) {
        setStatus(value);
    }

    return (
        <div className="container">
            <Control
                props={{
                    progress: progress,
                    TodoListArray: TodoListArray,
                    clearDone: clearDone,
                    done: done,
                    statusHandler: statusHandler,
                }}
            />
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
                    filtered: filtered,
                }}
            />
        </div>
    );
}
