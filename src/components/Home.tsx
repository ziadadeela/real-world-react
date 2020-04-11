import React from "react";
import {Header} from "./Header";
import Grid from "@material-ui/core/Grid";
import {PostsTabs} from "./PostsTabs";
import {TagsFilter} from "./TagsFilter";

interface HomeProps {

}


export const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <div>
            <Header/>
            <Grid container direction="row" justify="space-between">
                <Grid item xs={8}>
                    <PostsTabs/>
                </Grid>
                <Grid item xs={4}>
                    <TagsFilter/>
                </Grid>
            </Grid>
        </div>
    );
}