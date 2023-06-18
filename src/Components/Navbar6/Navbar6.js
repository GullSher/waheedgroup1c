import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo1 from "../../AssetsMain/Img/whImages/logo.png";
//import "./Navbar6js.js";
import "./Navbar6css.css";


const Navbar6 = () => {
    return (
        <div className="navigation-fixed-wrapper" style={{ top: '0px' }}>
            <nav id="navigation4" className="container navigation navigation-landscape" style={{ width: '1423px' }}>

                <div className="nav-header"><a className="nav-brand" href="index.html">
                    <img className="Navbar-Image" style={{ height: '40px' }} src=
                        {Logo1} alt="file-not-found" id="main_logo" />
                </a>
                    {/* <img src={{"../../"}} className="main-logo" alt="logo" id="main_logo" /></a> */}
                    <div className="nav-toggle"></div>
                </div>

                <div className="nav-menus-wrapper">
                    <span className="nav-menus-wrapper-close-button">Gamaaxxxx✕</span>
                    <ul className="nav-menu align-to-right">
                        <li><a href="index.html">Home</a></li>

                        <li className="dropdown">
                            {/* <a href="#">About Us<span className="submenu-indicator dropdown-toggle"> */}
                            <a href="#">About Us
                                <span className="dropdown-toggle" data-toggle='drowpdown'>
                                    {/* <span className="submenu-indicator-chevron"></span> */}
                                </span></a>

                            <ul className="dropdown-menu nav-submenu" style={{ right: 'auto' }}>

                                .<li><a href="chairman.html">Chairman</a></li>
                                <li><a href="directors.html">Directors</a></li>
                                <li><a href="awards.html">Awards</a></li>
                                <li><a href="aboutus.html">About Us </a></li>
                            </ul>
                        </li>

                        <li className='dropdown'>
                            <a href="#">Our Concerns<span className="submenu-indicator">
                                <span className="submenu-indicator-chevron">
                                </span></span></a>
                            {/* <ul className="nav-dropdown nav-submenu" style={{ right: 'auto' }}> */}
                            <ul className="nav-dropdown" style={{ right: 'auto' }}>

                                <li><a href="oil&amp;ghee.html">Oil &amp; Ghee</a></li>
                                <li><a href="industrial-fat.html">Industrial Fat</a></li>
                                <li><a href="transport.html">Transport</a></li>
                                <li><a href="hotel.html">Hotel</a></li>
                                <li><a href="energy-sector.html">Energy Sector</a></li>
                                <li><a href="wgc-interprises-ltd.html">WGC Interprises Ltd</a></li>
                            </ul>
                        </li>
                        <li><a href="products.html">Our Products</a></li>
                        <li><a href="latestNews.html">Latest News</a></li>
                        <li><a href="gallery.html">Media Gallery</a></li>
                        <li><a href="contactus.html">Contact Us</a></li>
                    </ul>
                </div>
                <div className="nav-overlay-panel"></div>
            </nav>
        </div>

    )
}

export default Navbar6

