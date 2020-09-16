import React, { useState } from "react";
import Input from "./Inner Component/Input";
import List from "./Inner Component/List";

export default function App() {
    const [Todo, setTodo] = useState({});
    function handleProps(todo, completed) {
        setTodo({ Todo: todo, completed: completed });
    }

    return (
        <div className="container">
            <Input props={{ handleProps: handleProps }} />
            <List props={{ PassedTodo: Todo.Todo, PassedCompleted: Todo.completed }} />
        </div>
    );
}
