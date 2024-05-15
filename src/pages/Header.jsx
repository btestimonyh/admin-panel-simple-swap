import React, { useState } from 'react';
import axios from 'axios';
import {API_URL} from "../util/URLs.js";

const Header = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const handleButton1Click = () => {
        // Make GET request using input1
        axios.get(API_URL + "/setdep/" + input1)
            .then(response => {
                // Handle response
                console.log(response.data);
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
    };

    const handleButton2Click = () => {
        // Make GET request using input2
        axios.get(API_URL + "/setrec/" + input2)
            .then(response => {
                // Handle response
                console.log(response.data);
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter deposit address"
                value={input1}
                onChange={e => setInput1(e.target.value)}
            />
            <button onClick={handleButton1Click}>Set</button>
            <br />
            <input
                type="text"
                placeholder="Enter recipient address"
                value={input2}
                onChange={e => setInput2(e.target.value)}
            />
            <button onClick={handleButton2Click}>Set</button>
        </div>
    );
};

export default Header;
