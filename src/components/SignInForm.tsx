import React from "react";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

interface SignInFormProps {

}

export const SignInForm: React.FunctionComponent<SignInFormProps> = () => {
    return (
        <div>
            <h1>Sign in</h1>
            <p>Need an account?</p>
            <form noValidate autoComplete="off">
                <div>
                    <TextField required id="email" placeholder="Email"/>
                </div>
                <div>
                    <TextField required type="password" id="password" placeholder="Password"/>
                </div>
                <Button variant="contained" color="primary">
                    Sign in
                </Button>
            </form>
        </div>
    );
};
