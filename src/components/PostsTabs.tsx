import React, {useEffect, useState} from "react";
import {AppBar, Tab, Tabs} from "@material-ui/core";
import {PostTab} from "./PostTab";
import {Post} from "../Types";
import {retrieveFeedPosts, retrievePosts} from "../apis/postsAPI";
import {PAGE_LIMIT} from "../Constants";

interface PostsTabsProps {
    selectedTag?: string,
    onTagCleared: () => any,
}

export const PostsTabs: React.FunctionComponent<PostsTabsProps> = ({selectedTag, onTagCleared}) => {
    const [selectedTab, setSelectedTab] = useState(1);

    const FEEDS_TAB = 0,
        GLOBAL_TAB = 1,
        TAG_TAB = 2;

    const [posts, setPosts] = useState(new Array<Post>());
    const [currentPage, setCurrentPage] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    useEffect(() => {
        if (selectedTag !== undefined && selectedTag !== "") {
            setSelectedTab(TAG_TAB);
        }
    }, [selectedTag]);

    useEffect(() => {
        if (selectedTab !== TAG_TAB) {
            onTagCleared();
        }
        setCurrentPage(0);
    }, [selectedTab]);
    useEffect(() => {
        // TODO: Check a better solution
        let postsEnpPoint = null;
        if (selectedTab === FEEDS_TAB) {
            postsEnpPoint = retrieveFeedPosts({offset: currentPage, limit: PAGE_LIMIT, tag: selectedTag});
        } else {
            postsEnpPoint = retrievePosts({offset: currentPage, limit: PAGE_LIMIT, tag: selectedTag});
        }
        postsEnpPoint.then(result => {
            setPosts(result.posts);
            setTotalCount(result.totalCount)
        });
    }, [selectedTab, currentPage, selectedTag]); // TODO: 2 APIs are called when moving to another tab.

    return (
        <div>
            <AppBar position="static" color="default">
                <Tabs value={selectedTab} centered onChange={(event, newValue) => {
                    setSelectedTab(newValue);
                }}>
                    <Tab label="Your Feed"/>
                    <Tab label="Global Feed"/>
                    {selectedTag && <Tab label={`#${selectedTag}`}/>}
                </Tabs>
            </AppBar>
            <PostTab onPageChanged={setCurrentPage} totalCount={totalCount} currentPage={currentPage} posts={posts}/>
        </div>
    );
};