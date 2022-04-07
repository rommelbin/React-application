import { useNavigate, useParams } from 'react-router-dom'
import {useSelector} from "react-redux"
const SingleChat = ({getChat}) => {
    const {id} = useParams();
    const chat = getChat(id)
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', { replace: true });
    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {/* Bad approach */}
            <button onClick={goHome}>Go home</button>
            <>
                <h1>{chat.name} </h1>
                <h5>Айди чата: {chat.id} </h5>
            </>

        </div>
    )
}

export default SingleChat