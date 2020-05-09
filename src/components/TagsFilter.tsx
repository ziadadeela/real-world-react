import React from "react";
import { Button } from "@material-ui/core";


interface TagsFilterProps {
    tags: Array<string>
    onTagChanged: (tag: string) => any,
}

export const TagsFilter: React.FunctionComponent<TagsFilterProps> = ({tags, onTagChanged}) => {
    return (
        <div style={{backgroundColor: "#f3f3f3"}}>
            <h3>Popular Tags</h3>
            <p>
                {tags.map((tag, key) => (
                    <Button
                        onClick={() => onTagChanged(tag)}
                        size="small"
                        key={`${tag}-${key}`}
                        style={{
                            backgroundColor: "#818991",
                            padding: 1,
                            margin:5,
                            borderRadius: 10
                        }}>{tag}</Button>))}
            </p>
        </div>
    );
};