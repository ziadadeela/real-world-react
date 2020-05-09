import React from "react";
import {Typography, Card, CardActions, Button} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {Link} from "react-router-dom";
import {Post} from "../Types";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {green} from "@material-ui/core/colors";

interface PostItemProps {
    post: Post,
}

export const PostItem: React.FunctionComponent<PostItemProps> = ({post}) => {
    return (
        <Card variant="outlined" style={{width: 500}}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    <Link to={`/profile/${post.author?.username}`}>
                        <img src={post.author?.image} style={{
                            display: "inline-block",
                            verticalAlign: "middle",
                            height: 32,
                            width: 32,
                            borderRadius: 30,
                            marginRight: 5,
                        }} alt={post.author?.username}/>
                        {post.author?.username}
                    </Link>
                    <Button variant="outlined"style={{marginLeft: 10, padding:1, minWidth: 20}}> <FavoriteIcon fontSize="small" style={{color: green[500]}}/> 1</Button>
                </Typography>
                <Typography variant="h5" component="h2">
                </Typography>
                <Typography color="textSecondary">
                    {post.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {post.body}
                    <br/>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link to={`/article/${post.slug}`}>Read More</Link>
                </Button>
            </CardActions>
        </Card>
    );
};