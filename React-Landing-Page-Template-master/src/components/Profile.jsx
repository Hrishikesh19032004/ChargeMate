import React, { useEffect, useState } from 'react';
import "./Profile.css"
import axios from 'axios';

function Profile() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/getdata');
        console.log('Response:', response.data); // Add this line
        setUserData(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ paddingTop: "400px", backgroundColor: "#632778" }}>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5" style={{ fontSize: "1.9rem", color: "#fff" }}>
              <img className="rounded-circle mt-5" width="150px" src={userData.profilePic} alt="Profile" style={{ marginBottom: "40px" }} />
              <span className="font-weight-bold" style={{ margin: "20px" }}>{userData.username}</span>
              <span className="text-black-50">{userData.email}</span>
            </div>
          </div>
          <div className="col-md-5 border-right c1">
            <div className="p-3 py-5">
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Phone: </label>
                  <label className="labels">{userData.phone}</label>
                  <br />
                </div>
                <div className="col-md-6">
                  <label className="labels">Email: </label>
                  <label className="labels">{userData.email}</label>
                  <br />
                </div>
                <div className="col-md-6">
                  <label className="labels">Address: </label>
                  <label className="labels">{userData.address}</label>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience">
                <span>Car details</span>
              </div>
              <br />
              <div className="col-md-12">
                <label className="labels">Car Model: </label>
                <label className="labels">{userData.carmodel}</label>
              </div>
              <br />
              <div className="col-md-12">
                <label className="labels">Car Number: </label>
                <label className="labels">{userData.carnumber}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
