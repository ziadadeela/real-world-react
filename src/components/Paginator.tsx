import React from "react";
import {PAGE_LIMIT} from "../Constants";
import {Button} from "@material-ui/core";


interface PaginatorProps {
    totalCount: number,
    currentPage: number,
    onPageChanged: (page: number) => any,
}

export const Paginator: React.FunctionComponent<PaginatorProps> = ({totalCount, currentPage, onPageChanged}) => {
    const totalPages = Math.ceil(totalCount / PAGE_LIMIT);

    // const onPageChange = (page: number) => {
    //     onPageChanged(page)
    // };
    return (
        <div>
            {Array.from(Array(totalPages), (e, i) =>
                <Button
                    key={i}
                    onClick={() => onPageChanged(i)}
                    color="primary" style={{
                    backgroundColor: i === currentPage ? "#5cb85c" : "#eceeef",
                    color: i === currentPage ? "white" : "black",
                    borderColor: "#ddd",
                    marginLeft: 0,
                    borderRadius: ".25rem",
                    padding: 3
                }}>
                    <span>{i + 1}</span>
                </Button>)}
        </div>
    );
};