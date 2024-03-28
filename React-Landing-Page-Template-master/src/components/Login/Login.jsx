import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../../App";

function Login() {
	const {state,dispatch} = useContext(UserContext);
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  
	const loginUser = async(e)=>{
  
	  e.preventDefault();
  
	  const res = await fetch("/signin",{
		method:"POST",
		headers:{
		  "Content-Type":"application/json"
		},
		body: JSON.stringify({
		  email,password
		})
	  });
  
	  const data = res.json();
  
	  if(res.status === 400 || !data){
		window.alert("Invalid Credentials");
	  }else{
		dispatch({type:"USER",payload:true});
		window.alert("Login Successful");
		navigate("/form");
	  }
  
  
	}
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Log in Form</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/login.jpg" alt="login" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Members Log in</h2>
					<form method='POST'>
					<input type="text" id="email" name='email'  className={styles.input} placeholder="Email" value={email}
                      onChange={(e)=>setEmail(e.target.value)} />
					<input type="text" id="password" name='password' className={styles.input} placeholder="Password"  value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
					<button className={styles.btn}  type="submit" name='signin' id='signin'   value="Login" onClick={loginUser}>Log In</button>
					</form>
					<p className={styles.text}>or</p>
					{/* <button className={styles.google_btn} onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sing in with Google</span>
					</button> */}
					<p className={styles.text}>
						New Here ? <Link to="/signup">Sing Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
