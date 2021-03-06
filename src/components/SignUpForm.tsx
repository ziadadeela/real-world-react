import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";
import {createUser} from "../apis/usersAPI";
import {setAuthenticatedUser} from "../helpers/authHelper";

interface SignUpFormProps {

}

export const SignUpForm: React.FunctionComponent<SignUpFormProps> = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<Map<string, Array<string>>>();
    let history = useHistory();
    return (
        <div>
            <h1>Sign up</h1>
            <p>Have an account?</p>
            <div>
                {errors && "Error :)"}
            </div>
            <form noValidate autoComplete="off" onSubmit={e => {
                e.preventDefault();
                createUser(username, email, password)
                    .then(result => {
                        setAuthenticatedUser(result);
                        history.push("/");
                    }).catch(error => {
                    console.log(error.response.data.errors);
                    //email or password: ["is invalid"]
                    setErrors(error.response.data.errors);
                })
            }}>
                <div>
                    <TextField required id="username" placeholder="Username" value={username}
                               onChange={e => setUsername(e.target.value)}/>
                </div>
                <div>
                    <TextField required id="email" placeholder="Email" value={email}
                               onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <TextField required type="password" id="password" placeholder="Password"
                               value={password}
                               onChange={e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <Button variant="contained" color="primary" type="submit">
                        Sign up
                    </Button>
                </div>
            </form>
        </div>
    );
};
