import React from "react";
import {Typography, Card, CardActions, Button} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {Link} from "react-router-dom";

interface PostItemProps {

}

export const PostItem: React.FunctionComponent<PostItemProps> = () => {
    return (
        <Card variant="outlined" style={{width:500}}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    <Link to="/profile/ziadadeela">Ziad Adeela</Link>
                </Typography>
                <Typography variant="h5" component="h2">
                </Typography>
                <Typography color="textSecondary">
                    Post Title
                </Typography>
                <Typography variant="body2" component="p">
                    details of the post
                    <br/>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link to="/article/article1">Read More</Link>
                </Button>
            </CardActions>
        </Card>
    );
};