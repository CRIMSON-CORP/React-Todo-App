import React, { useState } from "react";

function Input({ props: { handleProps } }) {
    const [Todo, setTodo] = useState({});
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
        handleProps(Todo.Todo, Todo.completed);
    }

    function setInput({ target: { value } }) {
        setTodo({ Todo: value, completed: false });
    }

    return (
        <div className="inputBlock" style={{ margin: "15px 0px" }}>
            <div className="input-container">
                <input
                    id="inputBox"
                    type="text"
                    name="inputBlock"
                    placeholder="What Do you want Todo?..."
                    onChange={setInput}
                    onKeyUp={sendKeyProps}
                    autoComplete="off"
                    required="required"
                />
                <div className="input"></div>
            </div>
            <div className="plus" onClick={sendProps}>
                <span aria-label="addTodo" role="img">
                    &#10133;
                </span>
            </div>
        </div>
    );
}

export default Input;
