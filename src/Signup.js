import React from 'react';
import { useState,useContext } from 'react';

function Signup() {
  const [username, setUsername] = useState('');
  const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    

    const handleUserNameChange = (event)=>{
        setUsername(event.target.value);
    };

    const handlePasswordChange=(event)=>{
        setPassword(event.target.value);
    };

    const handleEmailChange=(event)=>{
        setEmail(event.target.value);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        const user = {
            username: username,
            password: password,
            email: email,
          };
      
          fetch('http://localhost:3001/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data); // Handle the response from the server
              window.alert('registration successful');
            })
            .catch((error) => {
              console.error('Error:', error);
            });
            setUsername('');
            setEmail('');
            setPassword('');

    };
  return (
    <div className="signup-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={username} onChange={handleUserNameChange}/>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange}/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange}/>
        <label><input type="checkbox"/>Remember Me
          
         </label>

        {/* Other form fields if needed */}

        <button type="submit">Sign Up</button>
          </form>
          <p>Already have an account? <a href='/login'>Login</a></p>
    </div>
  );
}

export default Signup;
