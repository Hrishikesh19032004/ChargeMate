// App.js
import React, { useState } from 'react';
import './Shop.css';


function Shop() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Clothing Ecommerce Website</title>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
        <link rel="stylesheet" href="style.css" />
        <script src="https://kit.fontawesome.com/dad03e859c.js" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Alkatra&family=Berkshire+Swash&family=Comic+Neue:wght@700&family=Gentium+Book+Plus:wght@400;700&family=Lato:ital,wght@0,400;0,700;0,900;1,700&family=Lexend+Deca:wght@500&family=Lexend:wght@500&family=Montserrat:wght@500&family=Open+Sans:wght@500;800&family=Roboto:wght@100;400&family=Sue+Ellen+Francisco&family=Work+Sans:wght@400;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900;&display:swap" rel="stylesheet" />
      </head>

      <body>
        <section id="header">
          <a href="#"><img src="https://i.postimg.cc/x8ncvFjr/logo.png" alt="Logo" /></a>
          <div>
            <ul id="navbar">
              <li><a href="index.html" className="active">Home</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li>
                <a href="cart.html" id="lg-bag"><i className="fal fa-shopping-bag"></i></a>
                <span className="quantity">0</span>
              </li>
              <li><a href="#" id="close"><i className="far fa-times"></i></a></li>
            </ul>
          </div>
          <div id="mobile">
            <a href="cart.html">
              <i className="fal fa-shopping-bag"></i>
              <span className="quantity">0</span>
            </a>
            <i id="bar" className="fas fa-outdent"></i>
          </div>
        </section>

        <section id="hero">
          <h4>Trade-in-fair</h4>
          <h2>Super value deals</h2>
          <h1>On all Products</h1>
          <p>Save more with coupons and up to 70% off!</p>
          <button>Shop Now</button>
        </section>

        <section id="banner" className="section-m1">
  <h4>Repair Service</h4>
  <h2>Up to <span>70% off</span> - Buy EV Batteries and Accessories</h2>
  <button className="btn normal">Explore more</button>
</section>

<section id="sm-banner" className="section-p1">
  <div className="banner-box">
    <h4>Crazy deals</h4>
    <h2>Charge your E.V.</h2>
    <span></span>
    <button className="btn white">Learn More</button>
  </div>
  <div className="banner-box banner-box2">
    <h4>Servicing</h4>
    <h2>Making your vehicle young</h2>
    <span></span>
    <button className="btn white">Collection</button>
  </div>
</section>

<section id="banner3" className="section-p1">
  <div className="banner-box">
    <h2>Antiques</h2>
    <h3>Collectors option</h3>
  </div>
  <div className="banner-box banner-img2">
    <h2>Electrifying</h2>
    <h3>Public transport maintenance</h3>
  </div>
  <div className="banner-box banner-img3">
    <h2>Green Revolution</h2>
    <h3>Use more bicycles</h3>
  </div>
</section>

<section id="newsletter" className="section-p1">
  <div className="newstext">
    <h4>Sign Up for Newsletters</h4>
    <p>Get Email updates about our latest shop and <span> special offers.</span> </p>
  </div>
  <div className="form">
    <input type="text" placeholder="Your email address" />
    <button className="btn normal">Sign Up</button>
  </div>
</section>

<footer className="section-p1">
  <div className="col">
    
    <h4>Contact</h4>
    <p><strong>Address:</strong> 349, Olorilogbon street, Onigbogbo Lagos</p>
    <p><strong>Phone:</strong> +23456876199, +23458903120</p>
    <p><strong>Hours:</strong> 10.00 - 18.00, Mon - Sat</p>
    <div className="follow">
      <h4>Follow Us</h4>
      <div className="icon">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-pinterest-p"></i>
      </div>
    </div>
  </div>
  <div className="sec">
    <div className="col">
      <h4>About</h4>
      <a href="#">About Us</a>
      <a href="#">Delivery Information</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms and Condition</a>
      <a href="#">Contact Us</a>
    </div>
    <div className="col">
      <h4>My Account</h4>
      <a href="#">Sign In</a>
      <a href="#">View Cart</a>
      <a href="#">My Account</a>
      <a href="#">My Wishlist</a>
      <a href="#">Track my Order</a>
      <a href="#">Help</a>
    </div>
    <div className="col install">
      <h4>Install App</h4>
      <p>From App Store or Google Play</p>
      <div className="row">
        <img src="https://i.postimg.cc/Y2s5mLdR/app.jpg" alt="App Store" />
        <img src="https://i.postimg.cc/7YvyWTS6/play.jpg" alt="Google Play" />
      </div>
      <p>Secured Payment Gateways</p>
      <img src="https://i.postimg.cc/kgfzqVRW/pay.png" alt="Payment Gateways" />
    </div>
  </div>
  <div className="coypright">
    <p>© 2023 All rights reserved! made by Dhuri </p>
  </div>
</footer>


        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="script.js"></script>
      </body>
    </html>
  );
}

export default Shop;