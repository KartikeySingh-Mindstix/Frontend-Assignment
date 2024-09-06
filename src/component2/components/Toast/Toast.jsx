// Toast.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToast } from '../../redux/toast/toastActions';
import './Toast.css'; // Import a separate CSS file for styling

const Toast = () => {
  const toasts = useSelector((state) => state.toast);
  console.log(toasts)
  const dispatch = useDispatch();

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          <span>{toast.message}</span>
          {/* <button onClick={() => dispatch(removeToast(toast.id))}>X</button> */}
        </div>
      ))}
    </div>
  );
};

export default Toast;
