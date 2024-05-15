import {json, useNavigate} from "react-router-dom";
import {formatDateTime} from "../util/Util.jsx";

export default function ChatMessage({userName, message, sendFrom, timestamp}) {
    return (
        <div>
            <div>User Name: {userName}</div>
            <div>Message content: {message}</div>
            <div>Message written by support or customer -- {sendFrom}</div>
            <div>Msg created at: {formatDateTime(timestamp)}</div>
        </div>
    )
}