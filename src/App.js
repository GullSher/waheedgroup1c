import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Routes from "./Components/Pages/Routes";
import Navbar6 from './Components/Navbar6/Navbar6';
import UpperNavbar from './Components/UpperNavbar/UpperNavbar';
import Video1 from './Components/Video1/Video1';
// import Card3 from "./Components/Card3/Card3";
// import CarouselReact from './Components/Carouselreact/Carousel';
// import Cards from './Cards/Cards';
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Services from "./Components/Pages/Services";
import ContactUs from "./Components/Pages/ContactUs";
import Chairman from "./Components/Pages/Chairman";
import Awards from "./Components/Pages/Awards";
import Directors from "./Components/Pages/Directors";
import EnergySector from "./Components/Pages/EnergySector";
import Hotel from "./Components/Pages/Hotel";
import IndustrialFat from "./Components/Pages/IndustrialFat";
import NotFound from "./Components/Pages/NotFound";
import OilandGhee from "./Components/Pages/OilandGhee";
import SignUp from "./Components/Pages/SignUp";
import Topbar from "./Components/Pages/Topbar";
import Transport from "./Components/Pages/Transport";
import LatestNews from './Components/Pages/LatestNews';
import WGCInterprisesLtd from "./Components/Pages/WGCInterprisesLtd";
import OurProducts from "./Components/Pages/OurProducts";
import MediaGallery from "./Components/Pages/MediaGallery";
// import Footer from './Components/Footer/Footer';
// import Footer2 from './Components/Footer2/Footer2';
// import Footer2a from './Components/Footer2a/Footer2a';
import Footer3a from './Components/Footer3a/Footer3a';
// import MyNavbar from "./Components/Navbar1aa/MyNavbar";
// import NotFound from './Components/NotFound';
// import Button from 'react-bootstrap/Button';
// or less ideally
// import Navbar4a from "./Components/Navbar4a/Navbar4a";



function App() {
  return (
    <div className="App">
      <UpperNavbar />
      <Navbar6 />
      <Video1 />
      {/* <BrowserRouter> */}
      <Routes>
        {/* <Route exact path='/Home' Component={Home} /> */}
        <Route exact path="/Home" Component={Home} />
        <Route exact path="/AboutUs" Component={AboutUs} />
        <Route exact path="/Services" Component={Services} />
        <Route exact path="/ContactUs" Component={ContactUs} />
        <Route exact path="/Chairman" Component={Chairman} />
        <Route exact path="/Awards" Component={Awards} />
        <Route exact path="/Directors" Component={Directors} />
        <Route exact path="/EnergySector" Component={EnergySector} />
        <Route exact path="/Hotel" Component={Hotel} />
        <Route exact path="/IndustrialFat" Component={IndustrialFat} />
        <Route exact path="/OilandGhee" Component={OilandGhee} />
        <Route exact path="/SignUp" Component={SignUp} />
        <Route exact path="/Transport" Component={Transport} />
        <Route exact path="/WGCInterprisesLtd" Component={WGCInterprisesLtd} />
        <Route exact path="/NotFound" Component={NotFound} />
        <Route exact path="/Topbar" Component={Topbar} />
        <Route exact path="/LatestNews" Component={LatestNews} />
        <Route exact path="/OurProducts" Component={OurProducts} />
        <Route exact path="/MediaGallery" Component={MediaGallery} />
      </Routes>
      {/* </BrowserRouter> */}
      <Footer3a />

    </div>
  );
}

export default App;
