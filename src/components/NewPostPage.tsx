import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {CreatePost} from "../apis/postsAPI";
import {useHistory} from "react-router-dom";

interface NewPostPageProps {

}

export const NewPostPage: React.FunctionComponent<NewPostPageProps> = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [tags, setTags] = useState<Array<string>>([]);
    const [errors, setErrors] = useState<Map<string, Array<string>>>();

    const history = useHistory();
    return (
        <div>
            <div>
                {errors && "Error :)"}
            </div>
            <form noValidate autoComplete="off" onSubmit={e => {
                e.preventDefault();
                CreatePost(title, description, body, tags).then(result => {
                    history.push(`article/${result.post?.slug}`);
                })
                    .catch(error => {
                        console.log(error.response.data.errors);
                        //email or password: ["is invalid"]
                        setErrors(error.response.data.errors);
                    });
            }}>

                <div>
                    <TextField required id="title" placeholder="Article Title"
                               value={title}
                               onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <TextField required id="description" placeholder="What's this article about?"
                               value={description}
                               onChange={e => setDescription(e.target.value)}/>
                </div>
                <div>
                    <TextField required id="body" multiline rows={5} placeholder="Write your article (in markdown)"
                               value={body}
                               onChange={e => setBody(e.target.value)}/>
                </div>
                <div>
                    <TextField required id="tags" placeholder="Enter tags"
                               value={tags.join(",")}
                               onChange={e => setTags(e.target.value.split(',').map(tag => tag.trim()))}/>
                </div>
                <div>
                    <Button variant="contained" color="primary" type="submit">
                        Publish Article
                    </Button>
                </div>
            </form>
        </div>
    );
};
