import React from "react";
import EachTodo from "./EachTodo";

export default function List({
    props: { removeTodo, updateTodo, TodoListArray, filtered, AddUpdate, removeReminder },
}) {
    var TodoBlocks = filtered.map((eachTodo, index) => {
        return (
            <EachTodo
                key={index}
                props={{
                    eachTodo,
                    updateTodo,
                    removeTodo,
                    AddUpdate,
                    removeReminder,
                }}
            />
        );
    });

    return <div className="listContainer">{TodoListArray.length === 0 ? "" : TodoBlocks}</div>;
}
