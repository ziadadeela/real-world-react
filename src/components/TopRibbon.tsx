import React from "react";
import {Grid} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {
    Link
} from "react-router-dom";

interface TopRibbonProps {

}

export const TopRibbon: React.FunctionComponent<TopRibbonProps> = () => {

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
    } as React.CSSProperties;

    return (
        <nav>
            <Grid container direction="row" justify="space-between" style={{padding: 10}}>
                <Grid container item xs={8} justify="flex-start">
                    <h1 style={{paddingLeft: 20}}>Conduit</h1>
                </Grid>
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
                </Grid>
            </Grid>
        </nav>
    );
};