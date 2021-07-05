import React from "react";
import EachTodo from "./EachTodo";

export default function List({
    props: { removeTodo, updateTodo, TodoListArray, filtered, AddUpdate, removeReminder, trans },
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
                    trans,
                }}
            />
        );
    });

    return <div className="listContainer">{TodoListArray.length === 0 ? "" : TodoBlocks}</div>;
}
