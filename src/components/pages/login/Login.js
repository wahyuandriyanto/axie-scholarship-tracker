import React, { useState } from 'react';
import { StyledLogin } from './Styled';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from 'utils/Helpers';
import { signInWithEmailAndPassword } from 'utils/firebaseConfig';

const Login = () => {

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
                    Please <Link to="/">log in</Link> to continue with an awesome stuff, or <Link to="/register">sign up</Link> to get started!
                </div>
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
                <button className="btn-login" onClick={() => signInWithEmailAndPassword(email, password)}>Login</button>
                <div className="login-divider">
                    Or
                </div>
                <button className="btn-google">
                    <img src={toAbsoluteUrl('/icons/google.png')} />
                    Login with google
                </button>
            </div>    
        </StyledLogin>
    )
}

export default Login
