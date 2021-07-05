import React, { useContext, useState } from "react";
import { MdCheck, MdClear } from "react-icons/md";
import Transition from "react-motion-ui-pack/lib/Transition";
import Border from "../../Border";
import { AppContext, ListID } from "../../utils/Contexts";
function RenameList({ props: { renameListModal, setRenameListModal } }) {
    const { updateList } = useContext(AppContext);
    const { currentListId } = useContext(ListID);
    const [ListName, setListName] = useState("");
    return (
        <Transition
            component={false}
            appear={{ translateY: 50, opacity: 0 }}
            enter={{ opacity: 1, translateY: 0 }}
            leave={{ translateY: -50, opacity: 0 }}
        >
            {renameListModal && (
                <div className="modalCont rename right" key="renameList">
                    <form
                        className="modal"
                        onSubmit={(event) => {
                            event.preventDefault();
                            setRenameListModal(false);
                            updateList(currentListId, ListName);
                        }}
                    >
                        <h3>Rename Todo</h3>
                        <div className="input-container">
                            <input
                                type="text"
                                className="Input renamebox"
                                name="inputBlock"
                                onChange={({ target: { value } }) => {
                                    setListName(value);
                                }}
                                autoComplete="off"
                                required={true}
                            />
                            <Border />
                        </div>

                        <button className="modalBtn save" type="submit">
                            <MdCheck />
                            <span>Save</span>
                        </button>
                        <button
                            className="modalBtn cancel"
                            type="button"
                            onClick={() => {
                                setRenameListModal(false);
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

export default RenameList;
