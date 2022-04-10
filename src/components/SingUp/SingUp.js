import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SingUp.css'
import auth from '../../firebase-init';


const SingUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        // if (password !== confirmPassword) {
        //     setError('your two password do not match')
        //     return;
        // }
        createUserWithEmailAndPassword(email, password)
            .then('user created')
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sing Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <input className='form-submit' type="submit" value="Sing Up" />
                </form>

                <p>
                    Already have an account ? <Link className='form-link' to="/login">Login</Link>
                </p>
                <>
                    -----------  or -----------
                </>
            </div>
        </div>
    );
};

export default SingUp;