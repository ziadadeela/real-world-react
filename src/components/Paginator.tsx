import React from "react";


interface PaginatorProps {

}

export const Paginator: React.FunctionComponent<PaginatorProps> = () => {
    return (
        <div>
            <span style={{
                backgroundColor: "#eceeef",
                borderColor: "#ddd",
                marginLeft: 0,
                borderRadius: ".25rem",
            }}>1</span>
        </div>
    );
};