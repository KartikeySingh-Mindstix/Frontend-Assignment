import React, { useState, useEffect } from 'react';
import './ToastMessage.css'; 

const ToastMessage = ({ message, show, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000); 
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return (
        show && (
            <div className="toast-message">
                {message}
            </div>
        )
    );
};

export default ToastMessage;
