import React, { useState } from "react";
import { Md3DRotation, MdDelete, MdSettings } from "react-icons/md";
import Transition from "react-motion-ui-pack/lib/Transition";

export default function Test() {
    const [toggle, set] = useState({ hello: true, hi: true });
    const [toggle1, set1] = useState(false);

    return (
        <div>
            <Transition component={false}>
                {toggle.hello && <h1 key="helo">hello World</h1>}
            </Transition>
            <Transition component={false}>{toggle.hi && <h1 key="hi">hi</h1>}</Transition>
            <button
                style={{
                    background: "#222",
                    color: "white",
                    borderRadius: 5,
                    margin: "200px 20px 0",
                    padding: 10,
                }}
                onClick={() => {
                    set((prev) => {
                        return { ...prev, hello: !prev.hello };
                    });
                }}
            >
                toggle hello
            </button>
            <button
                style={{
                    background: "#222",
                    color: "white",
                    borderRadius: 5,
                    margin: "200px 20px 0",
                    padding: 10,
                }}
                onClick={() => {
                    set((prev) => {
                        return { ...prev, hi: !prev.hi };
                    });
                }}
            >
                toggle hi
            </button>
        </div>
    );
}
