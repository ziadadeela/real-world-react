import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {PostsTabs} from "./PostsTabs";
interface UserProfilePageProps {

}

export const UserProfilePage: React.FunctionComponent<UserProfilePageProps> = () => {
    const user = {
        id:1,
        name:"Ziad Adeela"
    };
    return (
        <div>
            <div>
                <img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt=""/>
                <h4>{user.name}</h4>
            </div>
            <div>
                <Button variant="outlined" startIcon={<AddIcon/>}>Follow {user.name}</Button>
            </div>
            <div>
                {/*TODO: change to the right tabs*/}
                <PostsTabs/>
            </div>
        </div>
    );
};