import React from "react";
import {
    Route, Switch,
} from "react-router-dom";
import {Home} from "./Home";
import {SignInForm} from "./SignInForm";
import {SignUpForm} from "./SignUpForm";
import {UserProfilePage} from "./UserProfilePage";
import {PostPage} from "./PostPage";

interface RoutesProps {

}


export const Routes: React.FunctionComponent<RoutesProps> = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sign-in" component={SignInForm}/>
            <Route exact path="/sign-up" component={SignUpForm}/>
            <Route exact path="/profile/:id" component={UserProfilePage}/>
            <Route exact path="/article/:id" component={PostPage}/>
        </Switch>
    );
}