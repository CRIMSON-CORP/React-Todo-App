import React from "react";
import { MdDelete } from "react-icons/md";

function EachTodo({
    props: {
        EachTodo: { id, completed, Todo },
        updateTodo,
        removeTodo,
    },
}) {
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
                    checked={completed}
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
                    <span style={completed ? Done : null}>
                        {Todo} <span className="cross"></span>
                    </span>
                </div>
            </label>
            <MdDelete
                className={"deleteIcon icon"}
                size="1.5rem"
                style={{
                    transform: completed ? "scale(1)" : "scale(0)",
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
