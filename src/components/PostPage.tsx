import React, {useEffect, useState} from "react";
import {retrievePost} from "../apis/postsAPI";
import {
    useParams
} from "react-router-dom";
import {Post} from "../Types";

interface PostPageProps {

}

export const PostPage: React.FunctionComponent<PostPageProps> = () => {

    const [post, setPost] = useState<Post>();
    let {slug} = useParams();
    useEffect(() => {
        if (slug) {
            retrievePost(slug).then(result => {
                setPost(result.post);
            })
        }

    }, []);
    // const post = {
    //     title: "Post Title",
    //     body: "Description ................",
    //     author: {
    //         username: "Ziad Adeela"
    //     }
    // };
    return (
        <>
            {post && (<div>
                <div style={{backgroundColor: "black", color: "white"}}>
                    <h1>{post.title}</h1>
                    <div>
                        {post?.author?.username}
                    </div>
                </div>
                <div>
                    <p>{post.body}</p>
                </div>
            </div>)}
        </>
    );
};