import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {
    Link
} from "react-router-dom";
import {getAuthenticatedUser, isAuthenticatedUser} from "../helpers/authHelper";

interface TopRibbonProps {

}

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
} as React.CSSProperties;


export const TopRibbon: React.FunctionComponent<TopRibbonProps> = () => {
    return (
        <nav>
            <Grid container direction="row" justify="space-between" style={{padding: 10}}>
                <Grid container item xs={8} justify="flex-start">
                    <h1 style={{paddingLeft: 20}}>Conduit</h1>
                </Grid>
                {isAuthenticatedUser() ? <AuthTopRibbonItems/> : <PublicTopRibbonItems/>}
            </Grid>
        </nav>
    );
};


//TODO: Refactor into 1 component and pass the routes & names ?
const PublicTopRibbonItems: React.FunctionComponent = () => {
    return (
        <Grid container item xs={4} justify="flex-end">
            <List style={flexContainer}>
                <ListItem>
                    <Link to="/">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/sign-in">Sign In</Link>
                </ListItem>
                <ListItem>
                    <Link to="/sign-up">Sign Up</Link>
                </ListItem>
            </List>
        </Grid>)
};

const AuthTopRibbonItems: React.FunctionComponent = () => {
    //TODO: not updated when logged in
    let authUser = getAuthenticatedUser();

    return (
        <Grid container item xs={4} justify="flex-end">
            <List style={flexContainer}>
                <ListItem>
                    <Link to="/">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/editor">New Article</Link>
                </ListItem>
                <ListItem>
                    <Link to="/settings">Settings</Link>
                </ListItem>
                <ListItem>
                    <img src={authUser?.image} alt="" style={{
                        width: 30,
                        height: 26,
                        borderRadius: 50,
                        float: "left",
                        marginRight: 5,
                    }}/>
                    <Link to={`/profile/${authUser?.username}`}>{authUser?.username}</Link>
                </ListItem>
            </List>
        </Grid>)
};