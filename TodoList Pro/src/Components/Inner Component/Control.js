import React from "react";

export default function Control({
    props: { progress, TodoListArray, clearDone, done, statusHandler },
}) {
    return (
        <div className="control">
            <div className="box">
                <div className="percent">
                    <svg>
                        <linearGradient id="grad" x1="0" y1="0" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ff0612"></stop>
                            <stop offset="100%" stopColor="#6544ff"></stop>
                        </linearGradient>
                        <circle cx="50%" cy="50%" r="40" className="dark"></circle>

                        <circle
                            cx="50%"
                            cy="50%"
                            r="40"
                            style={{
                                strokeDashoffset:
                                    250.92137145996094 - (250.92137145996094 * progress) / 100,
                            }}
                        ></circle>
                    </svg>
                    <div className="number">
                        {progress !== 0 || TodoListArray.length !== 0 ? (
                            <>
                                <h2>
                                    {progress}
                                    <span className="perc">%</span>
                                </h2>
                                <span className="comp">completed</span>
                            </>
                        ) : (
                            <h2 className="empty">No Task</h2>
                        )}
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button
                    onClick={clearDone}
                    disabled={done === 0 ? true : false}
                    className={done === 0 ? "disable" : "clear"}
                >
                    &#10005; Clear Done
                </button>
                <select name="filter" id="filter" onChange={statusHandler}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                </select>
            </div>
        </div>
    );
}
