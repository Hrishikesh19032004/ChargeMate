import React, { useState, useEffect, useReducer, createContext } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
// import { Signup } from "./pages/Signup/Signup";
// import { Login } from "./pages/Login/Login";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import {
  Routes,
  Route
} from "react-router-dom";
import Charger from "./components/Charger";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import {initialState,reducer} from "./components/reducer/UseReducer";
import Logout from "./components/Logout";

import Profile from "./components/Profile";
import Form from "./components/Form";
import Ev from "./components/Ev";
import Sos from "./components/Sos";
import Homepage from "./components/Home";
import Room from "./components/Room";
import Shop from "./components/Shop";


export const UserContext = createContext();

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
        <UserContext.Provider value={{state,dispatch}}>
      <Navigation />
      
      <Routes>
        <Route path='/' element={<Header data={landingPageData.Header} />} />
        <Route path='/features' element={<Features data={landingPageData.Features} />} />
        <Route path='/about' element={<About data={landingPageData.About} />} />
        <Route path='/services' element={<Services data={landingPageData.Services} />} />
        <Route path='/gallery' element={<Gallery data={landingPageData.Gallery} />} />
        <Route path='/testimonials' element={<Testimonials data={landingPageData.Testimonials} />} />
        <Route path='/team' element={<Team data={landingPageData.Team} />} />
        <Route path='/contact' element={<Contact data={landingPageData.Contact} />} />
        <Route path='/charger' element={<Charger data={landingPageData.Charger} />} />
        <Route path='/signup' element={<Signup data={landingPageData.Signup} />} />
        <Route path='/login' element={<Login data={landingPageData.Login} />} />
        <Route path='/logout' element={<Logout data={landingPageData.Logout} />} />
        <Route path='/profile' element={<Profile data={landingPageData.Profile} />} />
        <Route path='/form' element={<Form data={landingPageData.Form} />} />
        <Route path='/route' element={<Ev data={landingPageData.Ev} />} />
        <Route path='/sos' element={<Sos data={landingPageData.Sos} />} />
        <Route path='/video' element={<Homepage data={landingPageData.Homepage} />} />
<Route path='/room/:roomId' element={<Room data={landingPageData.Room} />} />
<Route path='/shop' element={<Shop data={landingPageData.Shop} />} />






        



      </Routes>
      </UserContext.Provider>
      
    </div>
    
  );
};

export default App;
