import {API_URL, POOLING_REFRESH_RATE, USER_ID_LINK_PARAM_NAME} from "../util/URLs.js";
import {useEffect, useState} from "react";
import ChatMessage from "./ChatMessage.jsx";

export default function ChatPage() {
    const getRequestPathToFetchUser = API_URL + "/users/"
    const getRequestPathToFetchChatHistory = API_URL + "/admin/"
    const pathToUploadAdminMessage = API_URL + "/admin/"
    const [chatHistory, setChatHistory] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    // SEARCHING FOR USER ID IN HRE
    let currentURL = window.location.href;
    const userUniqueId = currentURL.substring(currentURL.lastIndexOf(`?${USER_ID_LINK_PARAM_NAME}=`)+5);


    const getChatHistoryOfCertainUser = () => {
        try {
            fetch(getRequestPathToFetchChatHistory + userUniqueId)
                .then(res => res.json())
                .then(data => setChatHistory(data))
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        setIsLoading(true)

        const intervalId = setInterval(getChatHistoryOfCertainUser, POOLING_REFRESH_RATE);

        try {
            fetch(getRequestPathToFetchUser + userUniqueId)
                .then(res => res.json())
                .then(data => setUser(data))
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }

        return () => clearInterval(intervalId);
    }, [getRequestPathToFetchChatHistory, getRequestPathToFetchUser]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    // WHEN BTN CLICKED THIS WORKS, SEND MESSAGE TO BACKEND FROM ADMIN
    const handleButtonClick = () => {
        // Perform any action you want with the input value
        // console.log('Admin send to user: ', inputValue);

        const postData ={
            message: inputValue
        };

        const handlePostRequest = () => {
            // Make a POST request using fetch
            fetch(pathToUploadAdminMessage + userUniqueId, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData), // Convert state to JSON string
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    // Handle successful response
                    return response.json();
                })
                // .then(data => {
                    // Handle data from the response
                    // console.log('Response:', data);
                // })
                .catch(error => {
                    // Handle errors
                    console.error('Error:', error);
                });

            setInputValue('');
        }

        handlePostRequest()
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter something"
            />
            <button onClick={handleButtonClick}>Submit</button>
            <div>Login: {user.login}</div>
            <div>Telegram: {user.telegram}</div>
            <div>User Registered At: {user.registeredAt}</div>
            {chatHistory.map(elem => <ChatMessage key={elem.id} userName={user.login} {...elem}/>)}
        </div>

    )
}