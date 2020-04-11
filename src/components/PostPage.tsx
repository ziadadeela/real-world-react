import React from "react";


interface PostPageProps {

}

export const PostPage: React.FunctionComponent<PostPageProps> = () => {
    const post = {
        title: "Post Title",
        body: "Description ................",
        author: {
            username: "Ziad Adeela"
        }
    };
    return (
        <div>
            <div style={{backgroundColor: "black", color:"white"}}>
                <h1>{post.title}</h1>
                <div>
                    {post?.author?.username}
                </div>
            </div>
            <div>
                <p>{post.body}</p>
            </div>
        </div>

    );
};