import React from "react";
import Charger from "./Charger";
import VideoButton from "./VideoButton";

export const Features = (props) => {
  return (
    <>
    <VideoButton/>
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>

    <div style={{paddingBottom:"100px"}}>
              <h1 style={{textAlign:"center"}}>Search your current station</h1>
              <div style={{marginTop:"-100px"}}>
              <Charger/>
              </div>
    </div>

    </>
  );
};
