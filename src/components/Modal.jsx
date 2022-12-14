import React, { useState } from "react";
import "../styles/Modal.css";
import "../styles/App.css";

export default function Modal() {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <button className="button" onClick={toggleModal}>Save</button>

            {modal && (
                <div>
                    <div className="modal">
                        <div className="overlay">
                            <div className="modal-content">
                                Employee Created !
                                <button className="close-modal" onClick={toggleModal}>✖</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}