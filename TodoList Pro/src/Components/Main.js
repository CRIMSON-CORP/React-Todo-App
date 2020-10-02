import React, { useState, useEffect } from "react";
import App from "./App";
import uuid from "uuid";
import OuterControl from "./OuterControl";
import { MdDehaze } from "react-icons/md";

function Main() {
    const [app, setApp] = useState([]);

    const [currentList, setCurrentList] = useState(app.length - 1);
    const [newListName, setNewListName] = useState("");
    const [reName, setRename] = useState("");

    useEffect(() => {
        var ListLocal = localStorage.getItem("AppLocal");
        if (ListLocal === null || ListLocal === undefined)
            localStorage.setItem("AppLocal", JSON.stringify([]));
        else setApp(JSON.parse(ListLocal));
    }, []);

    useEffect(() => {
        localStorage.setItem("AppLocal", JSON.stringify(app));
    }, [app]);

    useEffect(() => {
        setCurrentList(app.length - 1);
    }, [app.length]);

    function addList() {
        let NewListProps = {
            id: uuid.v4(),
            name: newListName,
        };
        setCurrentList(app.length);
        setApp((prev) => {
            return [...prev, NewListProps];
        });
    }

    function updateList(id) {
        setApp(
            app.map((app) => {
                if (app.id === id) app.name = reName;
                return app;
            })
        );
        setRename("");
    }

    function deleteList(id) {
        localStorage.removeItem(id);
        var filteredList = app.filter((app) => app.id !== id);
        setCurrentList(filteredList.length - 1);
        setApp(filteredList);
    }
    return (
        <div>
            <OuterControl
                props={{
                    app: app,
                    setNewListName: setNewListName,
                    addList: addList,
                    setCurrentList: setCurrentList,
                    setRename: setRename,
                    updateList: updateList,
                    deleteList: deleteList,
                }}
            />
            {app.length <= 0 || currentList < 0 ? (
                <div className="noList">
                    <h1>No Lists</h1>
                    <p>
                        Click <MdDehaze className="dir" /> to make a List
                    </p>
                </div>
            ) : (
                <App key={app[currentList].id} props={{ app: app[currentList] }} />
            )}
        </div>
    );
}
export default Main;
