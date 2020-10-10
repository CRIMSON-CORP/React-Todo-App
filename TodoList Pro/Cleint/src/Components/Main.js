import React, { useState, useEffect } from "react";
import App from "./App";
import uuid from "uuid";
import OuterControl from "./OuterControl";
import { MdDehaze } from "react-icons/md";
import "animate.css";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

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
    const [whichMode, setwhichMode] = useState(() => {
        var mode = localStorage.getItem("mode");
        if (mode === undefined || mode === null) return true;
        else return JSON.parse(mode.toLowerCase());
    });
    const [formStatus, setFormStatus] = useState("send");

    useEffect(() => {
        localStorage.setItem("AppLocal", JSON.stringify(app));
    }, [app]);

    useEffect(() => {
        localStorage.setItem("Index", JSON.stringify(currentList));
    }, [currentList]);

    useEffect(() => {
        localStorage.setItem("mode", whichMode);
    }, [whichMode]);

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
    function clearList() {
        setApp([]);
        localStorage.clear();
    }

    function changeMode() {
        setwhichMode(!whichMode);
    }

    function sendForm(form) {
        axios.post("/contact_req", form).then(({ data: { success } }) => {
            success ? setFormStatus("sent") : setFormStatus("error");
        });
    }

    var content;
    app.length <= 0
        ? (content = (
              <div className="noList">
                  <div>
                      <h1>No Lists</h1>
                      <p>
                          Click <MdDehaze className="dir" /> to make a List
                      </p>
                  </div>
              </div>
          ))
        : (content = (
              <App
                  key={app[currentList].id}
                  props={{ app: app[currentList], whichMode: whichMode }}
              />
          ));

    return (
        <div className={`main ${whichMode ? "" : "light"}`}>
            <OuterControl
                props={{
                    app,
                    setNewListName,
                    addList,
                    setCurrentList,
                    setRename,
                    updateList,
                    deleteList,
                    currentList,
                    clearList,
                    changeMode,
                    whichMode,
                    sendForm,
                    formStatus,
                    setFormStatus,
                }}
            />
            {content}
        </div>
    );
}
export default Main;
