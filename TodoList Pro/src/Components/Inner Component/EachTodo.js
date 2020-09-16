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
        transform: "skewx(-20deg)",
    };

    var span1 = {
        height: 12,
    };
    var span2 = {
        width: 22,
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
                    <div className="checkbox" style={{ background: comp ? "#333" : null }}>
                        <div className="checkbox_inner">
                            <span style={comp ? span1 : null}></span>
                            <span style={comp ? span2 : null}></span>
                        </div>
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
