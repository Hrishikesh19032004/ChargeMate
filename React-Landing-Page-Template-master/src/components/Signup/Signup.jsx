import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";

function Signup() {
	const navigate  = useNavigate();
	const [user, setUser] = useState({
	 name:"",email:"",phone:"",work:"",password:"",cpassword:""
	});
   
	const handleInputs = (e) => {
	 // console.log(e);
	  const name = e.target.name;
	  const value = e.target.value;
   
	  setUser ({
		...user,
		[name]: value
	  })
	  
	}
	const PostData = async (e) => {
	 e.preventDefault();
   
	 const { name, email, phone, work, password, cpassword } = user;
	 const res = await fetch("http://localhost:8000/register", {
	   method: "POST",
	   headers: {
		 "Content-Type": "application/json",
	   },
	   body: JSON.stringify({
		 name,
		 email,
		 phone,
		 work,
		 password,
		 cpassword,
	   }),
	 });
   
	 try {
	   const data = await res.json();
   
	   if (data.status === 422 || !data) {
		 window.alert("Invalid Registration");
		 console.log("Invalid Registration");
	   } else {
		 window.alert("Successful Registration");
		 console.log("Successful Registration");
	   }
	 } catch (error) {
	   // Handle non-JSON response
	   console.error("Error parsing JSON:", error);
	   window.alert("Error during registration. Please try again.");
	 }
   
	 navigate("/login");
   };
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Sign up Form</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/signup.jpg" alt="signup" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Create Account</h2>
					<form method='POST'>
    <input
        type="text"
        className={styles.input}
        placeholder="name"
        name="name"
		id="name" 
		value={user.name} onChange={handleInputs} 

    />
    <input
        type="text"
        className={styles.input}
        placeholder="Email"
        name="email"
		id="email"
		value={user.email} onChange={handleInputs} 
    />
    <input
        type="text"
        className={styles.input}
        placeholder="phone"
        name="phone"
		id="phone"
        value={user.phone} onChange={handleInputs} 
    />
    <input
        type="text"
        className={styles.input}
        placeholder="work"
        name="work"
		id="work"
       value={user.work} onChange={handleInputs} 
    />
    <input
        type="password"
        className={styles.input}
        placeholder="password"
        name="password"
		id="password"
         value={user.password} onChange={handleInputs}
    />
    <input
        type="password"
        className={styles.input}
        placeholder="cpassword"
        name="cpassword"
		id="cpassword" 
        value={user.cpassword} onChange={handleInputs} 
    />
    <button  type="submit" name='signup' id='signup' className={styles.btn} value="Register" onClick={PostData}>
        Sign Up
    </button>
</form>

					{/* <button className={styles.btn}>Sign Up</button> */}
					<p className={styles.text}>or</p>
					{/* <button className={styles.google_btn} onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sing up with Google</span>
					</button> */}
					<p className={styles.text}>
						Already Have Account ? <Link to="/login">Log In</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Signup;
