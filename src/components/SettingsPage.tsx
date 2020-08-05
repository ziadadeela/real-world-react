import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {updateUser} from "../apis/usersAPI";
import {useHistory} from "react-router";
import {logOut, setAuthenticatedUser} from "../helpers/authHelper";

interface SettingsPageProps {

}

export const SettingsPage: React.FunctionComponent<SettingsPageProps> = () => {
    const [image, setImage] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [bio, setBio] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<Map<string, Array<string>>>();
    let history = useHistory();

    return (
        <div>
            <h1>Your Settings</h1>
            <div>
                {errors && "Error :)"}
            </div>
            <form noValidate autoComplete="off" onSubmit={e => {
                e.preventDefault();
                updateUser(image, username, bio, email, password).then(result => {
                    setAuthenticatedUser(result);
                    history.push(`profile/${result.username}`);
                })
                    .catch(error => {
                        console.log(error.response.data.errors);
                        //email or password: ["is invalid"]
                        setErrors(error.response.data.errors);
                    });
            }}>

                <div>
                    <TextField required id="image" placeholder="URL of profile picture"
                               value={image}
                               onChange={e => setImage(e.target.value)}/>
                </div>
                <div>
                    <TextField required id="username" placeholder="Username"
                               value={username}
                               onChange={e => setUsername(e.target.value)}/>
                </div>
                <div>
                    <TextField required id="bio" multiline rows={5} placeholder="Short bio about you"
                               value={bio}
                               onChange={e => setBio(e.target.value)}/>
                </div>
                <div>
                    <TextField required id="email" placeholder="Email"
                               value={email}
                               onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <TextField required type="password" id="password" placeholder="Password"
                               value={password}
                               onChange={e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <Button variant="contained" color="primary" type="submit">
                        Update Settings
                    </Button>
                </div>

            </form>
            <br/>
            <div>
                <Button variant="contained" color="secondary" onClick={() => {
                    //TODO: remove authUser from store
                    logOut();
                    history.push("/");
                }}>
                    Or click here to logout
                </Button>
            </div>
        </div>
    );
};
