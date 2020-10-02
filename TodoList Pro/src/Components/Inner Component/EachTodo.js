import React from "react";
import { MdClear } from "react-icons/md";

function EachTodo({
    props: {
        EachTodo: { id, completed, Todo },
        updateTodo,
        removeTodo,
    },
}) {
    var comp = completed;
    var Done = {
        opacity: 0.4,
        textDecoration: "line-through",
    };

    return (
        <div className="label" data-id={`${id}`}>
            <label>
                <input
                    type="checkbox"
                    data-id={`${id}`}
                    checked={comp}
                    onChange={() => {
                        updateTodo(id);
                    }}
                />
                <div className="Todo">
                    <div className="checkbox-container">
                        <svg viewBox="0 0 100 100" className="checkbox">
                            <path
                                className="st0"
                                d="M85,92H15c-3.9,0-7-3.1-7-7V15c0-3.9,3.1-7,7-7h70c3.9,0,7,3.1,7,7v70C92,88.9,88.9,92,85,92z"
                            />
                            <polyline className="check" points="22.5,47.5 42.5,67.5 78.5,31.5 " />
                        </svg>
                    </div>
                    <span style={comp ? Done : null}>
                        {Todo} <span className="cross"></span>
                    </span>
                </div>
            </label>
            <MdClear
                className={"close"}
                fill="red"
                style={{
                    transform: comp ? "scale(1)" : "scale(0)",
                    fontWeight: "bolder",
                }}
                onClick={() => {
                    removeTodo(id);
                }}
                data-id={id}
            />
        </div>
    );
}

export default EachTodo;
