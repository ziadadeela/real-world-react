import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {login} from "../apis/authAPI";
import {useHistory} from "react-router-dom";
import {setAuthenticatedUser} from "../helpers/authHelper";
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';
import * as Yup from 'yup';
import {LoginCredentials} from "../Types";
import {useDispatch} from "react-redux";
import {authenticateUser} from "../redux/authUser/actions";

interface SignInFormProps {

}

export const SignInForm: React.FunctionComponent<SignInFormProps> = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<Map<string, Array<string>>>();
    let history = useHistory();
    const initialValues: LoginCredentials = {email, password};

    const validationSchema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),
    });
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Sign in</h1>
            <p>Need an account?</p>
            <div>
                {errors && "Invalid email or password"}
            </div>
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    login(values).then(result => {
                        dispatch(authenticateUser(result.user));
                        history.push('/');
                    })
                        .catch(error => {
                            console.log(error);
                            //email or password: ["is invalid"]
                            setErrors(error.response.data.errors);
                        }).finally(() => {
                        actions.setSubmitting(false);
                    });
                }}
                render={({setFieldValue, handleChange, values, errors, status, touched, isSubmitting}: FormikProps<LoginCredentials>) => (
                    <Form>
                        <Field
                            name="email"
                            render={({field, meta}: FieldProps) => (
                                <div>
                                    <div>
                                        <input type="text" {...field} placeholder="Email"/>
                                    </div>
                                    <div>
                                        {meta.touched && meta.error}
                                    </div>
                                </div>
                            )}
                        />
                        <Field
                            name="password"
                            render={({field, meta}: FieldProps) => (
                                <div>
                                    <div>
                                        <input type="text" {...field} placeholder="Password"/>
                                    </div>
                                    <div>
                                        {meta.touched && meta.error}
                                    </div>
                                </div>
                            )}
                        />
                        <Button variant="contained" color="primary"
                                type="submit"
                                disabled={values.email == "" || values.password == "" || isSubmitting}>
                            Sign in
                        </Button>
                    </Form>
                )}
            />
        </div>
    );
};
