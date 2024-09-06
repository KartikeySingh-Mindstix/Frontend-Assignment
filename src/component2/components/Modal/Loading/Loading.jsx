import "./Loading.css"
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
const Loading = () => {
    return (
        <div className='loading-overlay'>
            <AiOutlineLoading3Quarters className='loading-icon' />

        </div>
    )
}

export default Loading