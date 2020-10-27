import React, { useState, useEffect } from "react";
import App from "./App";
import uuid from "uuid";
import OuterControl from "./OuterControl";
import { MdDehaze } from "react-icons/md";
import "animate.css";
import emailjs from "emailjs-com";
import $ from "jquery";

function Main() {
    const ls = localStorage;
    const [app, setApp] = useState(() => {
        return ls.getItem("AppLocal") === null ? [] : JSON.parse(ls.getItem("AppLocal"));
    });
    const [currentList, setCurrentList] = useState(() => {
        return ls.getItem("Index") === null ? 0 : Number.parseInt(ls.getItem("Index"));
    });
    const [whichMode, setwhichMode] = useState(() => {
        return ls.getItem("mode") === null ? true : JSON.parse(ls.getItem("mode").toLowerCase());
    });
    const [formStatus, setFormStatus] = useState("send");

    useEffect(() => {
        localStorage.setItem("AppLocal", JSON.stringify(app));
    }, [app]);

    useEffect(() => {
        ls.setItem("Index", JSON.stringify(currentList));
        $(`.container`).css({ display: "none" });
        $(`.container[data-id="${app[currentList] ? app[currentList].id : ""}"]`).css({
            display: "block",
        });
        // eslint-disable-next-line
    }, [currentList, app]);

    useEffect(() => {
        localStorage.setItem("mode", whichMode);
    }, [whichMode]);

    function addList(newListName) {
        let NewListProps = {
            id: uuid.v4(),
            name: newListName,
        };
        setCurrentList(app.length);
        setApp((prev) => {
            return [...prev, NewListProps];
        });
    }

    function updateList(id, name) {
        setApp(
            app.map((app) => {
                if (app.id === id) app.name = name;
                return app;
            })
        );
    }

    function deleteList(id) {
        ls.removeItem(id);
        var filteredList = app.filter((app) => app.id !== id);
        setCurrentList(filteredList.length - 1);
        setApp(filteredList);
    }
    function clearList() {
        setApp([]);
        ls.clear();
    }

    async function sendForm(form) {
        try {
            var res = await emailjs.sendForm(
                process.env.REACT_APP_Service_id,
                process.env.REACT_APP_template_id,
                form.target,
                process.env.REACT_APP_User_ID
            );
            if (res.status === 1 || res.text === "OK") setFormStatus("sent");
            else throw res;
        } catch (err) {
            if (err) setFormStatus("error");
        }
    }

    var content;
    app.length <= 0
        ? (content = (
              <div className="noList">
                  <div>
                      <h1>No Lists</h1>
                      <p>
                          Click <MdDehaze size="1.2rem" style={{ margin: "0 5px" }} /> to make a
                          List
                      </p>
                  </div>
              </div>
          ))
        : (content = app.map((app, Index) => {
              return <App key={Index} props={{ app }} />;
          }));

    return (
        <div className={`main ${whichMode ? "" : "light"}`}>
            <OuterControl
                props={{
                    app,
                    addList,
                    setCurrentList,
                    updateList,
                    deleteList,
                    currentList,
                    clearList,
                    setwhichMode,
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
