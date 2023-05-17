import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, TextField, Container } from '@mui/material'

// interface for user info
interface UserInfo {
    name: string;
    phoneNumber: string;
    email: string;
}

const Login = () => {

    // check for userInfo in local storage
    const user = localStorage.getItem('userInfo');

    // if user in local storage redirect to home page
    if (user) {
        window.location.href = '/home';
    }

    const [userInfo, setUserInfo] = useState<UserInfo>({
        name: '',
        phoneNumber: '',
        email: '',
    });

    // validate form
    const validateForm = () => {
        // validate name
        const namePattern = /^[a-zA-Z\s]+$/;
        let result = namePattern.test(userInfo.name);
        if (result === false) {
            return "Enter Valid Name";
        }
        
        // validate phone number
        const numPattern = /^\d{10}$/;
        result = numPattern.test(userInfo.phoneNumber);
        
        if (result === false) {
            return "Enter Valid Mobile Number";
        }

        // validate email
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        result = emailPattern.test(userInfo.email);

        if (result === false) {
            return "Enter Valid Email"
        }

        return;
    }

    const navigate = useNavigate();

    // handle form data
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // validate form using validateForm function
        const msg = validateForm();
        // if any error message in msg, show msg in alert and return
        if (msg) {
            alert(msg);
            return;
        }
        // save userinfo in local storage
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        navigate('/home');
    }

    return (
        <Container maxWidth='sm'>
            <form onSubmit={handleSubmit}>
                <TextField
                    name='name'
                    label="Name"
                    value={userInfo.name}
                    onChange={(e) => {setUserInfo({...userInfo, name: e.target.value})}}
                    margin='normal'
                    fullWidth
                    required
                />
                <TextField
                    name='phoneNumber'
                    label="Phone Number"
                    value={userInfo.phoneNumber}
                    onChange={(e) => {setUserInfo({...userInfo, phoneNumber: e.target.value})}}
                    margin='normal'
                    fullWidth
                    required
                />
                <TextField
                    name='email'
                    label="Email"
                    value={userInfo.email}
                    onChange={(e) => {setUserInfo({...userInfo, email: e.target.value})}}
                    margin='normal'
                    fullWidth
                    required
                />
                <Button type='submit' variant='contained' color='primary'>
                    SUBMIT
                </Button>
            </form>
        </Container>
    )
}

export default Login