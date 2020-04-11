import React from "react";


interface TagsFilterProps {

}

export const TagsFilter: React.FunctionComponent<TagsFilterProps> = () => {
    return (
        <div style={{backgroundColor: "#f3f3f3"}}>
            <h3>Popular Tags</h3>
            <span style={{
                backgroundColor: "#818991", paddingRight: 1,
                paddingLeft: 1,
                borderRadius: 10
            }}>tag</span>
        </div>
    );
};