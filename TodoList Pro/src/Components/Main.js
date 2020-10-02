import React, { useState, useEffect } from "react";
import App from "./App";
import uuid from "uuid";
import OuterControl from "./OuterControl";
import { MdDehaze } from "react-icons/md";

function Main() {
    const [app, setApp] = useState(() => {
        var ListLocal = localStorage.getItem("AppLocal");
        if (ListLocal === null || ListLocal === undefined) return [];
        else return JSON.parse(ListLocal);
    });
    const [currentList, setCurrentList] = useState(() => {
        var index = localStorage.getItem("Index");
        if (index === null || index === undefined) return 0;
        else return Number.parseInt(index);
    });
    const [newListName, setNewListName] = useState("");
    const [reName, setRename] = useState("");

    useEffect(() => {
        localStorage.setItem("AppLocal", JSON.stringify(app));
    }, [app]);

    useEffect(() => {
        localStorage.setItem("Index", JSON.stringify(currentList));
    }, [currentList]);

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
    }

    function deleteList(id) {
        localStorage.removeItem(id);
        var filteredList = app.filter((app) => app.id !== id);
        setCurrentList(filteredList.length - 1);
        setApp(filteredList);
    }

    var content;
    app.length <= 0
        ? (content = (
              <div className="noList">
                  <h1>No Lists</h1>
                  <p>
                      Click <MdDehaze className="dir" /> to make a List
                  </p>
              </div>
          ))
        : (content = <App key={app[currentList].id} props={{ app: app[currentList] }} />);
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
                    currentList: currentList,
                }}
            />
            {content}
        </div>
    );
}
export default Main;
