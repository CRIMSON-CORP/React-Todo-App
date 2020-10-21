import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { Md3DRotation, MdDelete, MdSettings } from "react-icons/md";

export default function Test() {
    const [toggle, set] = useState("one");

    const transition = useTransition(toggle, null, {
        from: { transform: "scale(0)", position: "absolute" },
        enter: { transform: "scale(1)" },
        leave: { transform: "scale(0)" },
    });

    return (
        <div>
            {transition.map(({ item, key, props }) => {
                switch (item) {
                    case "one":
                        return (
                            <animated.h1 style={props} key={key}>
                                <MdDelete className={"bin icon"} size="1.5rem" />
                            </animated.h1>
                        );
                    case "two":
                        return (
                            <animated.h1 style={props} key={key}>
                                <MdSettings className="icon settings" size="1.5rem" />
                            </animated.h1>
                        );
                    default:
                        return (
                            <animated.h1 style={props} key={key}>
                                <Md3DRotation className="icon settings" size="1.5rem" />
                            </animated.h1>
                        );
                }
            })}
            <button
                onClick={() => {
                    set("one");
                }}
                style={{ marginTop: 200 }}
            >
                change
            </button>
            <button
                onClick={() => {
                    set("two");
                }}
                style={{ marginTop: 200 }}
            >
                change
            </button>
            <button
                onClick={() => {
                    set("fff");
                }}
                style={{ marginTop: 200 }}
            >
                change
            </button>
        </div>
    );
}
