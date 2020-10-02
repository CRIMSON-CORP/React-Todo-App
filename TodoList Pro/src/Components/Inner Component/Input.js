import React from "react";

export default function Input({ props: { sendProps, setInput } }) {
    return (
        <form className="inputBlock" onSubmit={sendProps}>
            <div className="input-container">
                <input
                    className="inputBox"
                    type="text"
                    name="inputBlock"
                    placeholder="What Do you want Todo?..."
                    onChange={setInput}
                    autoComplete="off"
                    required="required"
                />
                <div className="input"></div>
            </div>
            <button className="plus" type="submit">
                <span aria-label="addTodo" role="img">
                    &#10133;
                </span>
            </button>
        </form>
    );
}
