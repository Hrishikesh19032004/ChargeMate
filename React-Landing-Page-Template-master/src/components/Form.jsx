import React, { useEffect, useState } from 'react';
// import { navigate } from 'react-router-dom'; // Import navigate if you're using React Router
import "./Form.css"
import { Navigate } from 'react-router-dom';

const Form = () => {
   const [user, setUser] = useState({
      username: "",
      email: "",
      address: "",
      phone: "",
      carmodel: "",
      carnumber: "",
    });
  
    const handleInputs = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setUser({ ...user, [name]: value });
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { username, email, phone, address, carmodel, carnumber } = user;
      const res = await fetch("http://localhost:8000/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          address,
          phone,
          carmodel,
          carnumber
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
          Navigate("/");
        }
      } catch (error) {
        // Handle non-JSON response
        console.error("Error parsing JSON:", error);
        window.alert("Error during registration. Please try again.");
      }
   
    //   navigate("/login"); // If you're using React Router, navigate to login page after successful registration
    };
  
    useEffect(() => {
      // Any initial data fetching logic here
    }, []);
  
  return (
    <div className="form_wrapper">
      <div className="form_container">
        <div className="title_container">
          <h2>Responsive Registration Form</h2>
        </div>
        <div className="row clearfix">
          <div className="">
            <form method='POST' onSubmit={handleSubmit}>
              <div className="input_field"> 
                <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                <input type="text" name="username" id="username" onChange={handleInputs} value={user.username} placeholder="Username"  />
              </div>
              <div className="input_field"> 
                <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                <input type="email" name="email" id="email" onChange={handleInputs} value={user.email} placeholder="Email"  />
              </div>
              <div className="input_field"> 
                <span><i aria-hidden="true" className="fa fa-map-marker"></i></span>
                <input type="text" name="address" id="address" onChange={handleInputs} value={user.address} placeholder="Address"  />
              </div>
              <div className="input_field"> 
                <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                <input type="text" name="phone" id="phone" onChange={handleInputs} value={user.phone} placeholder="Phone"  />
              </div>
              <div className="input_field"> 
                <span><i aria-hidden="true" className="fa fa-car"></i></span>
                <input type="text" name="carmodel" id="carmodel" onChange={handleInputs} value={user.carmodel} placeholder="Car Model"  />
              </div>
              <div className="input_field"> 
                <span><i aria-hidden="true" className="fa fa-car"></i></span>
                <input type="text" name="carnumber" id="carnumber" onChange={handleInputs} value={user.carnumber} placeholder="Car Number"  />
              </div>
              <div className="input_field checkbox_option">
                <input type="checkbox" id="cb1" />
                <label htmlFor="cb1">I agree with terms and conditions</label>
              </div>
              <div className="input_field checkbox_option">
                <input type="checkbox" id="cb2" />
                <label htmlFor="cb2">I want to receive the newsletter</label>
              </div>
              <input className="button" type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
      <p className="credit">Developed by <a href="http://www.designtheway.com" target="_blank" rel="noopener noreferrer">Design the way</a></p>
    </div>
  );
}

export default Form;
