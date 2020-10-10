import React from "react";
import { MdAdd } from "react-icons/md";

export default function Input({ props: { sendProps, setInput } }) {
    return (
        <form className="inputBlock" onSubmit={sendProps}>
            <div className="input-container">
                <input
                    type="text"
                    className="Input"
                    name="inputBlock"
                    onChange={setInput}
                    autoComplete="off"
                    required="required"
                />
                <svg
                    className="border"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 275.05 40"
                    preserveAspectRatio="none"
                >
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
                <span>What Do you want Todo?...</span>
            </div>
            <button className="plus" type="submit">
                <MdAdd fill="#222" className="icon" size="1.2rem" />
            </button>
        </form>
    );
}