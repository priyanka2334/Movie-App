import React, { useState } from 'react';
import './Home.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Username:', username);
        console.log('Password:', password);
        setUsername('');
        setPassword('');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required className='input'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required className='input'
                    />
                </div>
                <button type="submit" className='login'>Login</button>
                <p className="message">
                    Not registered? <a href="#">Create an account</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
