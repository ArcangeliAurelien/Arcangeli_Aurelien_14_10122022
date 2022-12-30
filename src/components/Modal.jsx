import React from 'react'
import "../styles/Modal.css"

export default function Modal({ setOpenModal, modalStyle, messageStyle, message, closeModalStyle }) {

    return (
        <>
            <div className="modal">
                <div className="overlay">
                    <div className="modal-content" style={modalStyle}>
                        <div style={messageStyle}>{message}</div>
                        <button className="close-modal" style={closeModalStyle} onClick={() => setOpenModal(false)}>✖</button>
                    </div>
                </div>
            </div>
        </>
    )
}
