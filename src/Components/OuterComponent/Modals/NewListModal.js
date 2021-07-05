import React, { useState, useContext } from "react";
import { AppContext, Side } from "../../utils/Contexts";
import Transition from "react-motion-ui-pack/lib/Transition";
import { MdCheck, MdClear } from "react-icons/md";
import Border from "../../Border";

function NewListModal({ props: { newListModal, setNewListModal } }) {
    const [ListName, setListName] = useState("");
    const { addList } = useContext(AppContext);
    const { setSide } = useContext(Side);
    return (
        <Transition
            component={false}
            appear={{ translateY: 50, opacity: 0 }}
            enter={{ opacity: 1, translateY: 0 }}
            leave={{ translateY: -50, opacity: 0 }}
        >
            {newListModal && (
                <div className="modalCont newModal right" key="newListModal">
                    <form
                        className="modal"
                        onSubmit={(event) => {
                            event.preventDefault();
                            setNewListModal(false);
                            addList(ListName);
                            setSide(false);
                            setListName("");
                        }}
                    >
                        <h3>list Name</h3>
                        <div className="input-container">
                            <input
                                type="text"
                                className="Input"
                                name="inputBlock"
                                value={ListName}
                                onChange={({ target: { value } }) => {
                                    setListName(value);
                                }}
                                autoComplete="off"
                                required={true}
                            />
                            <Border />
                            <span>List Name...</span>
                        </div>
                        <button className="modalBtn save" type="submit">
                            <MdCheck />
                            <span>Save</span>
                        </button>
                        <button
                            className="modalBtn cancel"
                            type="button"
                            onClick={() => {
                                setNewListModal(false);
                                setListName("");
                            }}
                        >
                            <MdClear />
                            <span>Cancel</span>
                        </button>
                    </form>
                </div>
            )}
        </Transition>
    );
}

export default NewListModal;
