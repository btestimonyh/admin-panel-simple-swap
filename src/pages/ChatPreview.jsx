import {useNavigate} from "react-router-dom";
import {formatDateTime} from "../util/Util.jsx";

export default function ChatPreview({id, login, telegram, registeredAt}) {
    const navigate = useNavigate();



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