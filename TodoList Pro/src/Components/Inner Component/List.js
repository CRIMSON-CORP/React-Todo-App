import React, { useState, useEffect } from "react";
import uuid from "uuid";
import EachTodo from "./EachTodo";

function List({ props: { PassedTodo, PassedCompleted } }) {
    const [TodoListArray, setTodoListArray] = useState([]);

    useEffect(() => {
        var TodoObject = {
            Todo: {
                id: uuid.v4(),
                completed: PassedCompleted,
                task: PassedTodo,
            },
        };

        PassedTodo === undefined
            ? setTodoListArray([])
            : setTodoListArray((prev) => {
                  return [...prev, TodoObject];
              });
    }, [PassedTodo, PassedCompleted]);

    if (PassedCompleted === undefined) return <div className="listContainer"></div>;
    function updateTodo(id) {
        console.log(id);
        setTodoListArray(
            TodoListArray.map((arr) => {
                if (arr.Todo.id === id) {
                    arr.Todo.completed = !arr.Todo.completed;
                }
                return arr;
            })
        );
    }

    function removeTodo(id) {
        setTodoListArray(
            TodoListArray.filter((arr) => {
                return arr.Todo.id !== id;
            })
        );
    }

    var TodoBlocks = TodoListArray.map((eachTodo, index) => {
        return (
            <EachTodo
                key={index}
                props={{
                    EachTodo: eachTodo,
                    updateTodo: updateTodo,
                    removeTodo: removeTodo,
                    setTodoListArray: setTodoListArray,
                    TodoListArray: TodoListArray,
                }}
            />
        );
    });

    return <div className="listContainer">{TodoBlocks}</div>;
}

export default List;
