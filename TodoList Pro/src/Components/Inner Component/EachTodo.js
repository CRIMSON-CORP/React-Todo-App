import React, { useState, useEffect } from "react";

function EachTodo({
    props: {
        EachTodo: { id, completed, Todo },
        updateTodo,
        removeTodo,
    },
}) {
    const [Id, setId] = useState("");

    useEffect(() => {
        setId(id);
    }, [Todo, id]);
    var comp = completed;
    var Done = {
        opacity: 0.4,
        textDecoration: "line-through",
    };

    return (
        <div className="label" data-id={`${Id}`}>
            <label>
                <input
                    type="checkbox"
                    data-id={`${Id}`}
                    checked={comp}
                    onChange={() => {
                        updateTodo(Id);
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
            <div
                className={"close"}
                style={{ display: comp ? "inline-grid" : "none", fontWeight: "bolder" }}
                onClick={() => {
                    removeTodo(Id);
                }}
                data-id={Id}
            >
                &#10005;
            </div>
        </div>
    );
}

export default EachTodo;
