import React, { useContext } from "react";
import { UserContext } from '../App';

export const Navigation = (props) => {
  const {state,dispatch} = useContext(UserContext);
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
          Charge Mate
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          <li>
              <a href="/" className="page-scroll" style={{marginLeft:"20px"}}>
                Home
              </a>
            </li>
            <li>
              <a href="/features" className="page-scroll">
                EV Station
              </a>
            </li>
            <li>
              <a href="/about" className="page-scroll">
                About
              </a>
            </li>
            {/* <li>
              <a href="/services" className="page-scroll">
                Services
              </a>
            </li> */}
            <li>
              <a href="/route" className="page-scroll">
                Route
              </a>
            </li>
            <li>
              <a href="/shop" className="page-scroll">
                Shop
              </a>
            </li>
            <li>
              <a href="/sos" className="page-scroll" style={{color:"red"}}>
                Emergency
              </a>
            </li>
            {/* <li>
              <a href="/contact" className="page-scroll">
                Contact
              </a>
            </li> */}
            <li>
              <a href="/signup" className="page-scroll">
                Signin
              </a>
            </li>
            {/* <li>
              <a href="/login" className="page-scroll">
                Login
              </a>
            </li> */}
            
            <li>
           <a href="/profile" >
              {/* <FontAwesomeIcon icon={faUser} style={{marginLeft:"100px"}} /> */}
            </a>
           </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
