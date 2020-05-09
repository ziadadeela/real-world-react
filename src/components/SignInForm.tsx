import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {login} from "../apis/authAPI";
import { useHistory } from "react-router-dom";
import {setAuthenticatedUser} from "../helpers/authHelper";

interface SignInFormProps {

}

const buildErrorMessage = (key: string, errors: Array<string>): Array<string> => {
    let builtErrors = new Array<string>();

    errors.forEach(err => {
        builtErrors.push(`${key} ${err}`);
    });
    return builtErrors;
};


export const SignInForm: React.FunctionComponent<SignInFormProps> = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<Map<string, Array<string>>>();
    let history = useHistory();

    const tst = (errorsMap: Map<string, Array<string>>): Array<string> => {
        let arr = new Array<string>();
        console.log(errorsMap);
        for (let [key, error] of errorsMap.entries()) {
            arr.concat(buildErrorMessage(key, error));
        }
        return arr;
    };

    function authHandler() {
        //TODO: I DONT LIKE IT
        if (email && password) {
            login(email, password).then(result => {
                setAuthenticatedUser(result.user);
                history.push('/');
            })
                .catch(error => {
                    console.log(error.response.data.errors);
                    //email or password: ["is invalid"]
                    setErrors(error.response.data.errors);
                })
        }
    }

    return (
        <div>
            <h1>Sign in</h1>
            <p>Need an account?</p>
            <div>
                {errors && "Error :)"}
            </div>
            <form noValidate autoComplete="off"
                  onSubmit={e => {
                      e.preventDefault();
                      authHandler();
                  }}>
                <div>
                    <TextField required id="email" placeholder="Email" value={email}
                               onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <TextField required type="password" id="password" placeholder="Password"
                               value={password}
                               onChange={e => setPassword(e.target.value)}/>
                </div>
                <Button variant="contained" color="primary"
                        type="submit"
                        disabled={!email || !password}>
                    Sign in
                </Button>
            </form>
        </div>
    );
};
