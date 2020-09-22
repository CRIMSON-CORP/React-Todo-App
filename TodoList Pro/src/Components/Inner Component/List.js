import React from "react";
// import uuid from "uuid";
import EachTodo from "./EachTodo";

export default function List({ props: { removeTodo, updateTodo, TodoListArray, filtered } }) {
    if (TodoListArray.length === 0) return <div className="listContainer"></div>;

    var TodoBlocks = filtered.map((eachTodo, index) => {
        return (
            <EachTodo
                key={index}
                props={{
                    EachTodo: eachTodo,
                    updateTodo: updateTodo,
                    removeTodo: removeTodo,
                }}
            />
        );
    });

    return <div className="listContainer">{TodoBlocks}</div>;
}
