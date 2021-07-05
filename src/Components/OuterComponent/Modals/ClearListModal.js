import React, { useContext } from "react";
import { MdClear, MdDeleteSweep } from "react-icons/md";
import Transition from "react-motion-ui-pack/lib/Transition";
import { AppContext } from "../../utils/Contexts";
function ClearListModal({ props: { clearListModal, setClearListModal } }) {
    const { clearList } = useContext(AppContext);
    return (
        <Transition
            component={false}
            appear={{ translateY: 50, opacity: 0 }}
            enter={{ opacity: 1, translateY: 0 }}
            leave={{ translateY: -50, opacity: 0 }}
        >
            {clearListModal && (
                <div className="modalCont clearListModal center" key="clear">
                    <div className="modal">
                        <MdDeleteSweep fontSize="3rem" className="bin" />
                        <h3>Are you sure You want to Clear All Your Lists?</h3>
                        <p>All Lists will be removed permanently and Cannot be recovered!</p>
                        <button
                            className="modalBtn cancel"
                            onClick={() => {
                                setClearListModal(false);
                            }}
                        >
                            <MdClear />
                            <span>Cancel</span>
                        </button>
                        <button
                            className="modalBtn del"
                            onClick={() => {
                                setClearListModal(false);
                                clearList();
                            }}
                        >
                            <MdDeleteSweep />
                            <span> Clear all Lists</span>
                        </button>
                    </div>
                </div>
            )}
        </Transition>
    );
}

export default ClearListModal;
