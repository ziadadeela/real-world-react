import React, {useState} from "react";
import {AppBar, Tab, Tabs} from "@material-ui/core";
import {PostTab} from "./PostTab";

interface PostsTabsProps {
}

export const PostsTabs: React.FunctionComponent<PostsTabsProps> = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <AppBar position="static" color="default">
                <Tabs  value={value} centered onChange={(event, newValue)=>{
                    setValue(newValue);
                }}>
                    <Tab label="Your Feed"/>
                    <Tab label="Global Feed"/>
                </Tabs>
            </AppBar>
            <PostTab value={value} index={0}/>
            <PostTab value={value} index={1}/>
        </div>



    );
};