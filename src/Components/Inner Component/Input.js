import React, { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";

const examples = [
    "Cook Dinner",
    "Wash clothes",
    "See a Friend",
    "Wash the Car",
    "Read a Book",
    "Hit the Gym",
    "Pay Electricity Bill",
    "Drink Plenty of water",
];

export default function Input({ props: { id, sendProps } }) {
    const [focus, setFocus] = useState(false);
    const [line, setLine] = useState("");
    const [input, setInput] = useState("");
    useEffect(() => {
        focus
            ? setLine("What Do you want Todo?...")
            : setLine("eg. " + examples[Math.floor(Math.random() * 8)]);
    }, [focus]);
    return (
        <form
            className="inputBlock"
            onSubmit={function (event) {
                event.preventDefault();
                sendProps(input);
                setInput("");
                var inputBox = document.querySelector(`.input-container[data-id="${id}"] input`);
                inputBox.value = "";
                inputBox.focus();
            }}
        >
            <div className="input-container" data-id={id}>
                <input
                    type="text"
                    className="Input"
                    name="inputBlock"
                    onChange={({ target: { value } }) => {
                        setInput(value);
                    }}
                    onFocus={() => {
                        setFocus(true);
                    }}
                    onBlur={({ target: { value } }) => {
                        if (value) return;
                        setFocus(false);
                    }}
                    autoComplete="off"
                    required={true}
                />
                <svg className="border" viewBox="0 0 275.05 40" preserveAspectRatio="none">
                    <path
                        className="cls-1 path"
                        d="M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139"
                        transform="translate(-1.3 -0.77)"
                    />
                    <path
                        className="cls-2 path"
                        d="M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164"
                        transform="translate(-1.3 -0.77)"
                    />
                </svg>
                {<span>{line}</span>}
            </div>
            <button className="plus" type="submit">
                <MdAdd fill="#222" className="icon" size="1.2rem" />
            </button>
        </form>
    );
}
