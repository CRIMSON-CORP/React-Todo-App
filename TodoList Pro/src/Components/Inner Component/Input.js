import React from "react";

export default function Input({ props: { sendProps, sendKeyProps, setInput } }) {
    return (
        <div className="inputBlock">
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
