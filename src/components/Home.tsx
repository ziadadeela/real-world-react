import React, {useEffect, useState} from "react";
import {Header} from "./Header";
import Grid from "@material-ui/core/Grid";
import {PostsTabs} from "./PostsTabs";
import {TagsFilter} from "./TagsFilter";
import {retrieveTags} from "../apis/tagsAPI";

interface HomeProps {

}


export const Home: React.FunctionComponent<HomeProps> = () => {

    const [tags, setTags] = useState(new Array<string>());
    const [selectedTag, setSelectedTag] = useState("");

    useEffect(() => {
        retrieveTags().then(result => {
            setTags(result.tags);
        }).catch();
    },[]);

    const onTagCleared = ()=>{
        setSelectedTag("");
    };
    return (
        <div>
            <Header/>
            <Grid container direction="row" justify="space-between">
                <Grid item xs={8}>
                    <PostsTabs selectedTag={selectedTag} onTagCleared={onTagCleared}/>
                </Grid>
                <Grid item xs={4}>
                    <TagsFilter tags={tags} onTagChanged={setSelectedTag}/>
                </Grid>
            </Grid>
        </div>
    );
};