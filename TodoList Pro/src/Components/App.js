import React, { useState, useEffect } from "react";
import uuid from "uuid";
import Input from "./Inner Component/Input";
import List from "./Inner Component/List";
import Control from "./Inner Component/Control";
import $ from "jquery";

export default function App({ props: { app } }) {
    const [Todo, setTodo] = useState({});
    const [TodoListArray, setTodoListArray] = useState([]);
    const [done, setDone] = useState(0);
    const [progress, setProgress] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [status, setStatus] = useState("All");
    const [id] = useState(app.id);

    useEffect(() => {
        const DoneTodos = TodoListArray.filter((arr) => arr.completed === true);
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
    }, [TodoListArray, status]);

    useEffect(() => {
        Trans(false);
    }, [status]);

    useEffect(() => {
        var TodoLocal = localStorage.getItem(id);
        if (TodoLocal === null || TodoLocal === undefined)
            localStorage.setItem(id, JSON.stringify([]));
        else setTodoListArray(JSON.parse(TodoLocal));
    }, [id]);

    useEffect(() => {
        localStorage.setItem(id, JSON.stringify(TodoListArray));
    }, [TodoListArray, id]);

    function Trans(x) {
        if (x) {
            $(".checkbox path").css("transition", ".4s");
            $(".check").css("transition", ".4s");
        } else {
            $(".checkbox path").css("transition", "none");
            $(".check").css("transition", "none");
        }
    }

    function sendProps(event) {
        event.preventDefault();
        var inputBox = $(".inputBox");
        let { Todo: todo } = Todo;
        if (todo.trim() === "" || todo.trim() === undefined) {
            inputBox.val(null).focus();
            return alert("Please write a Task");
        }
        Todo.id = uuid.v4();
        Todo.completed = false;
        setTodoListArray((prev) => [...prev, Todo]);
        inputBox.val(null).focus();
        setTodo({});
        setStatus("All");
    }

    function setInput({ target: { value } }) {
        setTodo({ Todo: value });
    }

    function updateTodo(id) {
        Trans(true);
        setTodoListArray(
            TodoListArray.map((arr) => {
                if (arr.id === id) arr.completed = !arr.completed;
                return arr;
            })
        );
    }

    function removeTodo(id) {
        Trans(false);
        setTodoListArray(TodoListArray.filter((arr) => arr.id !== id));
    }

    function clearDone() {
        Trans(false);
        setTodoListArray(TodoListArray.filter((arr) => arr.completed === false));
    }

    function statusHandler({ target: { value } }) {
        setStatus(value);
    }

    return (
        <div className="container">
            <h1 className="ListName">{app.name}</h1>
            <Control
                props={{
                    progress: progress,
                    TodoListArray: TodoListArray,
                    clearDone: clearDone,
                    done: done,
                    status: status,
                    statusHandler: statusHandler,
                }}
            />
            <Input
                props={{
                    sendProps: sendProps,
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
