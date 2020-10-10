import React from "react";
import EachTodo from "./EachTodo";

export default function List({
    props: { removeTodo, updateTodo, TodoListArray, filtered, mode, whichMode },
}) {
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

    return (
        <div className={`listContainer ${whichMode ? "darkMode" : "LightMode"}`}>
            {TodoListArray.length === 0 ? "" : TodoBlocks}
        </div>
    );
}
