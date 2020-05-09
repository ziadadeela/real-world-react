import {Grid} from "@material-ui/core";
import {PostItem} from "./PostItem";
import {Paginator} from "./Paginator";
import React from "react";
import {TabPanel} from "./TabPanel";
import {Post} from "../Types";

interface PostTabProps {
    posts: Array<Post>,
    currentPage: number,
    totalCount: number,
    onPageChanged : (page: number) => any,
}

export const PostTab: React.FunctionComponent<PostTabProps> = props => {
    const {posts, currentPage, totalCount, onPageChanged} = props;

    return <TabPanel>
        <Grid container direction="column" justify="flex-start" alignItems="center"
              style={{margin: 20, padding: 20}}>
            <Grid container item xs={6}>
                {posts.map((post, key) => <PostItem key={`${post.slug}`} post={post}/>)}
            </Grid>
        </Grid>
        <Paginator currentPage={currentPage} totalCount={totalCount} onPageChanged={onPageChanged}/>
    </TabPanel>;
};





