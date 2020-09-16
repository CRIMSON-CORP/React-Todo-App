import React, { useState } from "react";
import uuid from "uuid";
import Input from "./Inner Component/Input";
import List from "./Inner Component/List";

export default function App() {
    const [Todo, setTodo] = useState({});
    const [TodoListArray, setTodoListArray] = useState([]);

    function sendProps() {
        Todo.Todo === null ? alert("Fill Box") : setSend();
    }
    function sendKeyProps({ keyCode }) {
        if (Todo.Todo !== null) {
            if (keyCode === 13) setSend();
        } else alert("Fill Box");
    }

    function setSend() {
        setTodo((prev) => {
            return {};
        });
        document.getElementById("inputBox").value = null;
        Todo.id = uuid.v4();
        setTodoListArray((prev) => [...prev, Todo]);
    }

    function setInput({ target: { value } }) {
        setTodo({ Todo: value, completed: false });
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

    return (
        <div className="container">
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
