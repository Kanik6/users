import React from 'react';
import './Layout.css';
import Header from "./Header/Header";

const Layout = props => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
        </>
    );
};

export default Layout;