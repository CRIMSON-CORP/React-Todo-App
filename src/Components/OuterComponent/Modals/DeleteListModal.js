import React, { useContext } from "react";
import { MdCheck, MdClear, MdDelete } from "react-icons/md";
import Transition from "react-motion-ui-pack/lib/Transition";
import { AppContext, ListID } from "../../utils/Contexts";
function DeleteListModal({ props: { deleteListModal, setDeleteListModal } }) {
    const { deleteList } = useContext(AppContext);
    const { currentListId } = useContext(ListID);
    return (
        <Transition
            component={false}
            appear={{ translateY: 50, opacity: 0 }}
            enter={{ opacity: 1, translateY: 0 }}
            leave={{ translateY: -50, opacity: 0 }}
        >
            {deleteListModal && (
                <div className="modalCont delete center" key="delete">
                    <div className="modal">
                        <MdDelete fontSize="3rem" className="bin" />
                        <h3>Are you sure You want to Delete this List?</h3>
                        <p>Entire List will be removed permanently</p>

                        <button
                            className="modalBtn cancel"
                            type="button"
                            onClick={() => {
                                setDeleteListModal(false);
                            }}
                        >
                            <MdClear />
                            <span>Cancel</span>
                        </button>
                        <button
                            className="modalBtn del"
                            type="submit"
                            onClick={() => {
                                setDeleteListModal(false);
                                deleteList(currentListId);
                            }}
                        >
                            <MdCheck />
                            <span>OK</span>
                        </button>
                    </div>
                </div>
            )}
        </Transition>
    );
}

export default DeleteListModal;
