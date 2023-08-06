import React,{useState} from "react";
function Login(props){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event)=>{
        setPassword(event.target.value)
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        const user = {
            username: email,
            password: password,
          };
      
          fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data); 
              window.alert('login successful');
            })
            .catch((error) => {
              console.error('Error:', error);
              
            });
            setEmail('');
            setPassword('');
    };

    return(
        <div className="login-container">
        <h2>Login to your account
            </h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" value={email} onChange={handleEmailChange} />
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} /><br />
          <label><input type="checkbox"/>Remember Me
          
         </label>
                <button className="log-btn" type="submit">Login</button>
        </form>
        <p>Don't have an account?<a href="/Signup">signup</a></p>
        </div>
    );
};
export default Login;