import React, { useState } from 'react';
import { StyledLogin } from './Styled';
import { Link } from 'react-router-dom';
import { registerWithEmailAndPassword } from 'utils/firebaseConfig';

const Register = () => {
    const [name, setName]   = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <StyledLogin>
            <div className="login-banner">
                <img src="https://cdn.axieinfinity.com/landing-page/_next/static/images/logo-f3b5c962671a2516bc9fef42ad9e9145@1x.webp" />
            </div>    
            <div className="login-text">
                <div className="login-text__title">
                    Welcome Managers!!
                </div>
                <div className="login-text__desc">
                    Already have an account? <Link to="/">Login</Link>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="name" className={name.length > 0 ? 'active' : null}>Name</label>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="email" className={email.length > 0 ? 'active' : null}>Email</label>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password" className={password.length > 0 ? 'active' : null}>Password</label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="login-action">
                <button className="btn-login" onClick={() => registerWithEmailAndPassword(name, email, password)}>Register</button>
            </div>    
        </StyledLogin>
    )
}

export default Register
