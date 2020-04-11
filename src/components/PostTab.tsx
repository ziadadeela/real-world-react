import {Grid} from "@material-ui/core";
import {PostItem} from "./PostItem";
import {Paginator} from "./Paginator";
import React from "react";
import {TabPanel} from "./TabPanel";

interface PostTabProps {
    value: number;
    index: number;
}

export const PostTab: React.FunctionComponent<PostTabProps> = props => {
    const {value, index} = props;
    return (
        <TabPanel value={value} index={index}>
            <Grid container direction="column" justify="flex-start" alignItems="center"
                  style={{margin: 20, padding: 20}}>
                <Grid container item xs={6}>
                    <PostItem/>
                </Grid>
            </Grid>
            <Paginator/>
        </TabPanel>
    );
};





