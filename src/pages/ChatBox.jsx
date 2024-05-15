import {useEffect, useState} from "react";
import {API_URL} from "../util/URLs.js";
import ChatPreview from "./ChatPreview.jsx";

const ChatBox = () => {
    const getRequestPath = API_URL + "/users"
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        try {
            fetch(getRequestPath)
                .then(res => res.json())
                .then(data => setUsers(data))
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }

    }, [getRequestPath]);

    return (
        <div className="wrapper">
            {isLoading && <p>Loading products...</p>}
            {error && <p>Error fetching products: {error.message}</p>}
            {users.map(elem => <ChatPreview key={elem.id} {...elem}/>)}
        </div>
    )
}

export default ChatBox;