import { Outlet } from 'react-router-dom';

import { useEffect } from 'react';
import Header from "./Header.jsx";

function RootLayout() {
    useEffect(() => {
        document.body.dir = 'ltr';
        document.title = 'Pizza Hut  UAE |  Order Pizza Online - Delivery and Takeaway';
    }, []);

    return (
        <>
            <Header />
            <main className='pt-[67px] w-screen  text-[#000] flex flex-col items-center'>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;