import React from "react";

interface HeaderProps {

}

export const Header: React.FunctionComponent<HeaderProps> = () => {
    return (
        <div style={{padding: 20, backgroundColor: "#5cb85c", color: "white"}}>
            <h1>Conduit</h1>
            <p>A place to share your Angular knowledge.</p>
        </div>
    );
};

