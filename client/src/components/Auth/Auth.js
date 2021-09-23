import React, { useState} from 'react';
import useStyles from './styles';
import { GoogleLogin } from 'react-google-login'
import {useDispatch } from 'react-redux';
import {Avatar, Button, CircularProgress, Container, Grid, Grow, Paper, Typography} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';

import Input from './Input';
import Icon from './icon';
import {AUTH} from "../../constants/actionTypes";
import {useHistory} from "react-router-dom";
import {signin, signup} from "../../actions/auth";
import {getCharacter} from "../../actions/character";

const initialState = {name: '', email: '', password: '', id: ''};

const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [formData, setFormData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

     const handleSubmit = async e => {
         e.preventDefault();
         setIsLoading(true);
         if(isSignup) {
             await dispatch(signup(formData, history));
         } else {
             await dispatch(signin(formData, history));
         }
         setIsLoading(false);
         history.push('/character');
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const switchMode = () => {
        setIsSignup( prevIsSignup => !prevIsSignup);
        setShowPassword(false);
    };

    const googleSuccess = async res => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            await dispatch(getCharacter(result?.googleId, history));
            dispatch({ type: AUTH, data: { result, token } });
            history.push('/character');
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = error => {
        console.log(error);
        console.log("Google sign in was unsuccessful. Try again.")
    }

    return (
        isLoading ?  <CircularProgress className={classes.circularProgress} size={100} />
        :
        <Grow in>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={5}>
                    <Avatar className={classes.avatar}> <LockIcon /> </Avatar>
                    <Typography variant="h4" className={classes.signTitle}>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            { isSignup && (
                                    <>
                                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                        <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                                    </>
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                        </Grid>
                        <GoogleLogin
                            clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                            render={ renderProps =>
                                <Button
                                    className={classes.googleSignIn}
                                    color="primary"
                                    fullWidth
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    startIcon={<Icon />}
                                    variant="contained"
                                >
                                    Google Sign In
                                </Button>
                            }
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                        <Button className={classes.customSignIn} type="submit" fullWidth variant="contained" color="primary">
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>{ isSignup ? 'Already have and account? Sign In' : 'Don\'t have an account? Sign Up'}</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Grow>
    );
};

export default Auth;
