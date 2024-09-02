import { ADD_TOAST, REMOVE_TOAST } from './toastTypes';

export const addToast = (toast) => ({
  type: ADD_TOAST,
  payload: toast, // Unique ID
});

export const removeToast = (id) => ({
  type: REMOVE_TOAST,
  payload: id,
});


export const addToastWithTimeOut = (message, type, timeout=1000) => dispatch => {
    const toastId = Date.now();
    dispatch(addToast({id: toastId, type, message}))

    setTimeout(() => {
       removeToast(toastId) 
    }, timeout);
}