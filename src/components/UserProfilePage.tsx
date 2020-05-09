import React, {useEffect, useState} from "react";
import {Button} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {PostsTabs} from "./PostsTabs";
import {retrieveUserProfile} from "../apis/usersAPI";
import {useParams} from "react-router";
import {Profile} from "../Types";

interface UserProfilePageProps {

}

export const UserProfilePage: React.FunctionComponent<UserProfilePageProps> = () => {
    const [userProfile, setUserProfile] = useState<Profile>();
    let {username} = useParams();

    useEffect(() => {
        if (username) {
            retrieveUserProfile(username).then(result => {
                setUserProfile(result.profile);
            })
        }

    }, []);
    return (
        <div>
            <div>
                <img style={{
                    width: 100,
                    height: 100,
                    borderRadius: 100,
                    marginBottom: 1,
                }} src={userProfile?.image} alt=""/>
                <h4>{userProfile?.username}</h4>
            </div>
            <div>
                <Button variant="outlined" startIcon={<AddIcon/>}>Follow {userProfile?.username}</Button>
            </div>
            <div>
                {/*TODO: change to the right tabs*/}
                <PostsTabs onTagCleared={() => {
                }}/>
            </div>
        </div>
    );
};