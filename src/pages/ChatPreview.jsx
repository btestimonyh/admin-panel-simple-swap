import {useNavigate} from "react-router-dom";

export default function ChatPreview({id, login, telegram, registeredAt}) {
    const navigate = useNavigate();

    const formatDateTime = (dateString) => {
        const parsedDate = new Date(dateString);

        const day = parsedDate.getDate().toString().padStart(2, '0');
        const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
        const hour = parsedDate.getHours().toString().padStart(2, '0');
        const minutes = parsedDate.getMinutes().toString().padStart(2, '0');

        return `${month}-${day} ${hour}:${minutes}`;
    };

    function handleChatSelection() {
        navigate(`/chat?uid=${id}`);
    }

    return (
        <div onClick={handleChatSelection}>
            {/*<div>Login: {login}</div>*/}
            <div>{telegram} -- {formatDateTime(registeredAt)}</div>
            {/*<div>Registered At: {registeredAt}</div>*/}
        </div>

    )
}