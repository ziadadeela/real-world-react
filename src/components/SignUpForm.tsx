import React from "react";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

interface SignUpFormProps {

}

export const SignUpForm: React.FunctionComponent<SignUpFormProps> = () => {
    return (
        <div>
            <h1>Sign up</h1>
            <p>Have an account?</p>
            <form noValidate autoComplete="off">
                <div>
                    <TextField required id="username" placeholder="Username"/>
                </div>
                <div>
                    <TextField required id="email" placeholder="Email"/>
                </div>
                <div>
                    <TextField required type="password" id="password" placeholder="Password"/>
                </div>
                <div>
                    <Button variant="contained" color="primary">
                        Sign up
                    </Button>
                </div>
            </form>
        </div>
    );
};
