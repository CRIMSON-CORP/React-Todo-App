import React, { useState } from "react";
// import ReactDom from "react-dom";
import { CSSTransitionGroup } from "react-transition-group";

function Test() {
    const [state, setState] = useState({ items: ["hello", "how", "are", "you"] });
    function handleAdd() {
        const newItems = state.items.concat([prompt("Enter new Text...")]);

        setState({ items: newItems });
    }
    function removeAdd(i) {
        let newItems = state.items.slice();
        newItems.splice(i, 1);
        setState({ items: newItems });
    }

    const itemComp = state.items.map((item, i) => {
        return (
            <div key={item} onClick={() => removeAdd(i)}>
                {item}
            </div>
        );
    });
    return (
        <div>
            <button onClick={handleAdd}>Add Item</button>
            <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={500}
            >
                {itemComp}
            </CSSTransitionGroup>
        </div>
    );
}

export default Test;
