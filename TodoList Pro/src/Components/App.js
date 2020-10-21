import React, { useState, useEffect } from "react";
import uuid from "uuid";
import Input from "./Inner Component/Input";
import List from "./Inner Component/List";
import Control from "./Inner Component/Control";
import $ from "jquery";
import ls from "local-storage";

export default function App({ props: { app } }) {
    const [id] = useState(app.id);
    const [Todo, setTodo] = useState({});
    const [TodoListArray, setTodoListArray] = useState(() => {
        return ls.get(id) === null ? [] : ls.get(id);
    });
    const [done, setDone] = useState(0);
    const [progress, setProgress] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [status, setStatus] = useState("All");

    useEffect(() => {
        ls.set(id, TodoListArray);
    }, [TodoListArray, id]);

    useEffect(() => {
        const DoneTodos = TodoListArray.filter((arr) => arr.completed === true);
        var progress = Math.floor((DoneTodos.length / TodoListArray.length) * 100);
        if (isNaN(progress)) progress = 0;
        setProgress(progress);
        setDone(DoneTodos.length);
    }, [TodoListArray]);

    useEffect(() => {
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
    }, [TodoListArray, status]);

    useEffect(() => {
        Trans(false);
    }, [status]);

    function Trans(x) {
        if (x) {
            $(".checkbox path").css("transition", ".4s");
            $(".check").css("transition", ".4s");
        } else {
            $(".checkbox path").css("transition", "none");
            $(".check").css("transition", "none");
        }
    }

    function sendProps(todo) {
        var inputBox = $(".Input");
        if (todo.trim() === "" || todo.trim() === undefined) {
            inputBox.val(null).focus();
            return alert("Please write a Task");
        }
        Todo.Todo = todo;
        Todo.id = uuid.v4();
        Todo.completed = false;
        Todo.DateOptions = {
            futureDate: null,
            reminder: false,
        };
        setTodoListArray((prev) => [...prev, Todo]);
        inputBox.val(null).focus();
        setTodo({});
        setStatus("All");
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

    function AddUpdate(id, { name, date }) {
        if (name) {
            setTodoListArray(
                TodoListArray.map((arr) => {
                    if (arr.id === id) arr.Todo = name;
                    return arr;
                })
            );
        }
        if (date) {
            setDate(id, date);
        }

        function setDate(id, date) {
            setTodoListArray(
                TodoListArray.map((arr) => {
                    if (arr.id === id) {
                        arr.DateOptions = {
                            futureDate: date,
                            reminder: true,
                        };
                    }
                    return arr;
                })
            );
        }
    }

    function removeReminder(id) {
        setTodoListArray(
            TodoListArray.map((arr) => {
                if (arr.id === id) {
                    arr.DateOptions.reminder = false;
                    arr.DateOptions.futureDate = null;
                }
                return arr;
            })
        );
        ls.remove(`Rem_${id}`);
    }

    function removeTodo(id) {
        Trans(false);
        setTodoListArray(TodoListArray.filter((arr) => arr.id !== id));
        ls.remove(`Rem_${id}`);
    }

    function clearDone() {
        Trans(false);
        setTodoListArray(TodoListArray.filter((arr) => arr.completed === false));
    }

    function statusHandler({ target: { value } }) {
        setStatus(value);
    }

    return (
        <div className="container" data-id={id}>
            <h1 className="ListName">{app.name}</h1>
            <Control
                props={{
                    id,
                    progress,
                    TodoListArray,
                    clearDone,
                    done,
                    status,
                    statusHandler,
                }}
            />
            <Input
                props={{
                    sendProps,
                }}
            />
            <List
                props={{
                    removeTodo,
                    updateTodo,
                    TodoListArray,
                    filtered,
                    AddUpdate,
                    removeReminder,
                }}
            />
        </div>
    );
}
