import React from 'react';
import '../Navbar1/Navbar1.css';
import {
   // BrowserRouter as Router,
   // Switch,
   // Route,
   NavLink
   // Link
} from 'react-router-dom';

const Navbar1 = () => {
   return (

      <nav>

         <div class="logo">
            {/* <img src="logo1" height={"80px"} alt='Image not Found....   ' /> */}

            {/* <img src="../Assets/logo/waheedgroup-logo1.jpg" height={"80px"} alt='not Found....   ' /> */}
            {/* <img class="logo" src="../Assets/logo/waheedgroup-logo1.jpg" height={"80px"} alt='not Found....   ' /> */}
            {/* <img alt="aa" src="../Assets/logo/waheedgroup-log.png" /> */}
            {/* file:///H:/Work-Folder-9/Web Work 9/3 may 2023/gullshair/website/src/Assets/logo/waheedgroup-log.png */}
            {/* <img class="sealImage" height={"70px"} src="WhaeedHafeez.png" alt="file-not-found" /> */}
            {/* <img class="sealImage" height={"70px"} src="WhaeedHafeez.png" alt="file-not-found" /> */}
            {/* <img src="https://i.imgur.com/hCrQkJi.png" /> */}
            <img class="logo" src="./Assets/logo/WhaeedHafeez.png" height={"80px"} alt='not Found....   ' />
            Waheed Group Navbar 1
         </div>

         <input type="checkbox" id="click" />
         <label for="click" class="menu-btn">
            <i class="fas fa-bars"></i>
         </label>
         <ul class="flex-container flex-end">
            <NavLink to="/">Home</NavLink> {/* The route to the home page is http://localhost:3000 */}

            {/* <NavLink path="/plans">contact me</NavLink> */}
            {/* Wants to check the link */}
            {/* <NavLink to="/about">About</NavLink> */}
            <NavLink to="/contact">Contact Me</NavLink>
            {/* <NavLink path="/plans">Contact Me</NavLink> */}

            <NavLink to="/about">About</NavLink> {/* About page route that is, http://localhost:3000/about */}
            <NavLink to="/services">Services</NavLink> {/* Services page route that is, http://localhost:3000/services */}
            {/* <NavLink to="/feedback">FeedBack</NavLink> – FeedBack page route that is, http://localhost:3000/feedback */}
            {/* <NavLink to="/contact">ContactUs</NavLink> – ContactUs to the contact page that is http://localhost:3000/contactus */}
            {/* <NavLink to="/blog">Blog</NavLink> – Route to the blog page that is http://localhost:3000/blog */}
            {/* <NavLink to="/Gallery">Gallery</NavLink> – Route to the Gallery page that is http://localhost:3000/gallery */}


            {/* <li><a class="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">ContactUs</a></li> */}

            {/* <ul class="flex-container flex-end">
               <li class="flex-item">1</li>
               <li class="flex-item">2</li>
               <li class="flex-item">3</li>
               <li class="flex-item">4</li>
               <li class="flex-item">5</li>
            </ul>
 */}


         </ul>
      </nav >




      //  <Router>
      //       <div>
      //         <nav>
      //           <ul>
      //             <li>
      //               <Link to="/">Home</Link>
      //             </li>
      //             <li>
      //               <Link to="/about">About</Link>
      //             </li>
      //             <li>
      //               <Link to="/users">Users</Link>
      //             </li>
      //           </ul>
      //         </nav>

      //    A <Switch> looks through its children <Route>s and
      // renders the first one that matches the current URL. 

      //  <Switch>
      //           <Route path="/about">
      //             <About />
      //           </Route>
      //           <Route path="/users">
      //             <Users />
      //           </Route>
      //           <Route path="/">
      //             <Home />
      //           </Route>
      //         </Switch>
      //       </div>
      //     </Router>

      //          





   )
}

export default Navbar1

