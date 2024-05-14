import {useNavigate} from "react-router-dom";
import {API_URL} from "../util/URLs.js";
import {useEffect, useState} from "react";

export default function ChatPage({id, login, telegram, registeredAt}) {
    const getRequestPath = API_URL + "/admin"
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        try {
            fetch(getRequestPath)
                .then(res => res.json())
                .then(data => setUsers(data))
            console.log(users)
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }

    }, [getRequestPath]);

    return (
        <div>
            <div>Login: {login}</div>
            <div>Telegram: {telegram}</div>
            <div>Registered At: {registeredAt}</div>
        </div>

    )
}