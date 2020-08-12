import React from "react";
import {
    Route, Switch,
} from "react-router-dom";
import {Home} from "./Home";
import {SignInForm} from "./SignInForm";
import {SignUpForm} from "./SignUpForm";
import {UserProfilePage} from "./UserProfilePage";
import {PostPage} from "./PostPage";
import {PostForm} from "./PostForm";
import {SettingsPage} from "./SettingsPage";
import {useSelector} from "react-redux";
import LoadingOverlay from 'react-loading-overlay';
import {selectIsLoading} from "../redux/blockUI/selectors";

interface RoutesProps {

}


export const Routes: React.FunctionComponent<RoutesProps> = () => {
    const isActive = useSelector(selectIsLoading);
    return (
        <LoadingOverlay active={isActive}
                        spinner
                        text='Loading...'>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sign-in" component={SignInForm}/>
                <Route exact path="/sign-up" component={SignUpForm}/>
                <Route exact path="/profile/:username" component={UserProfilePage}/>
                <Route exact path="/article/:slug" component={PostPage}/>
                <Route exact path="/editor" component={PostForm}/>
                <Route exact path="/settings" component={SettingsPage}/>
            </Switch>
        </LoadingOverlay>
    );
}