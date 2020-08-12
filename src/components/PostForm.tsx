import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {CreatePost} from "../apis/postsAPI";
import {useHistory} from "react-router-dom";
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';
import * as Yup from 'yup';
import {PostState} from "../Types";
import {useDispatch} from "react-redux";
import {createNewPost} from "../redux/post/actions";

interface PostFormProps {

}

export const PostForm: React.FunctionComponent<PostFormProps> = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [tagList, setTagList] = useState<Array<string>>([]);
    const [errors, setErrors] = useState<Map<string, Array<string>>>();

    const initialValues: PostState = {title, description, body, tagList};

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        description: Yup.string().required(),
        body: Yup.string().required(),
    });

    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                {errors && "Error :)"}
            </div>
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    dispatch(createNewPost(values));
                }}
                render={({setFieldValue, handleChange, values, errors, status, touched, isSubmitting}: FormikProps<PostState>) => (
                    <Form>
                        <Field
                            name="title"
                            render={({field, meta}: FieldProps) => (
                                <div>
                                    <div>
                                        <input type="text" {...field} placeholder="Article Title"/>
                                    </div>
                                    <div>
                                        {meta.touched && meta.error}
                                    </div>
                                </div>
                            )}
                        />
                        <Field
                            name="description"
                            render={({field, meta}: FieldProps) => (
                                <div>
                                    <div>
                                        <input type="text" {...field} placeholder="What's this article about?"/>
                                    </div>
                                    <div>
                                        {meta.touched && meta.error}
                                    </div>
                                </div>
                            )}
                        />
                        <Field
                            name="body"
                            render={({field, meta}: FieldProps) => (
                                <div>
                                    <div>
                                        <input type="text" {...field} placeholder="Write your article (in markdown)"/>
                                    </div>
                                    <div>
                                        {meta.touched && meta.error}
                                    </div>
                                </div>
                            )}
                        />
                        <Field
                            name="tags"
                            render={({field, meta}: FieldProps) => (
                                <div>
                                    <div>
                                        <input type="text" {...field} placeholder="Enter Tags"
                                               value={values.tagList.join(",")}
                                               onChange={e => setFieldValue('tagList', e.target.value.split(',').map(tag => tag.trim()))}
                                        />
                                    </div>
                                    <div>
                                        {meta.touched && meta.error}
                                    </div>
                                </div>
                            )}
                        />
                        <Button variant="contained" color="primary"
                                type="submit"
                                disabled={isSubmitting}>
                            Publish Article
                        </Button>
                    </Form>
                )}
            />
        </div>
    );
};
