import { useNavigate } from 'react-router-dom'

const SingleChat = ({chats_array}) => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', { replace: true });

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {/* Bad approach */}
            <button onClick={goHome}>Go home</button>
            <>
                <h1>Здесь будет chat.name</h1>
                <h5>Здесь будет chat.id</h5>
            </>

        </div>
    )
}

export default SingleChat