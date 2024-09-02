import { useDispatch } from "react-redux";
import { addToastWithTimeOut } from "../redux/toast/toastActions";


const useToast = ()=>{
    const dispatch = useDispatch()
    const showToast = (message, type, timeout) =>{
        dispatch(addToastWithTimeOut(message, type, timeout))
    }
    return {showToast}
}

export default useToast;