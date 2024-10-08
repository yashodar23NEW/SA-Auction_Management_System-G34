import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';  
import bg from '../../assets/bg.png';
import bg2 from '../../assets/bg2.png';
import Logos from '../../assets/logos.png';
import car1 from '../../assets/car1.png'; 
import v2 from '../../assets/v2.png'; 
import v3 from '../../assets/v3.png'; 
import v5 from '../../assets/v5.png'; 
import p1 from '../../assets/p1.jpg'; 

const Hero = () => {
  return (
    <div className="Hero">
     
      <img src={bg} alt="bg" />
       

      <h1>Drive Your Dream, Bid Today</h1>
      <p>
        Bid on Your Dream Ride-From Classics to the Latest Models. Start Your
        Journey with Confidence.
        <br /> <br />
      </p>

      <div className="bg2">
  <img src={bg2} alt="bg2" className="image" />
  <div className="overlay">
    <h2>Find Your Perfect Ride</h2>
    <p>
      Browse Our Extensive Vehicle Collection—From Luxury Cars to
      Budget-Friendly Options, There's Something for Everyone.<br /> <br />
    </p>  <br /> <br />
    <p>
      <Link to="">
        <button className="btn2" type="button">Sign in</button>
      </Link>&nbsp;
      <Link to="">
        <button className="btn2" type="button">Sign up</button>
      </Link>
    </p>
  </div>
</div>
      <div className="container">
      <div className="auction-info">
        <span className="most-viewed">MOST VIEWED</span>
        <h2 className="title">Featured Auctions</h2>
        <p>Top Vehicles at Unbeatable Starting Bids - Place Your Bid Now and Drive Away with a Deal!</p>
      </div>
       
      <Link to="">
        <button className="btn2" type="button">View all</button>
      </Link>
    </div>
    <div className="card-container">
    <div className="card-container">
  <div className="card">
    <Link to="/productdetails">
      <img src={car1} alt="car1" className="vehicle" />
    </Link>
    <div className="card-info">
      <span className="auction-status live">Live Auction</span>
      <h3>Product Name</h3>
      <p>Variant</p>
      <p>
        $55 <span className="bid-type">(Highest Bid)</span>
      </p>
    </div>
  </div>
</div>

        <div className="card">
        <Link to="/productdetails">
        <img src={v2} alt="v2" className="vehi" />
        </Link>

          <div className="card-info">
            <span className="auction-status live">Live Auction</span>
            <h3>Product Name</h3>
            <p>Variant</p>
            <p>
              $55 <span className="bid-type">(Highest Bid)</span>
            </p>
          </div>
        </div>


        <div className="card">
        <Link to="/productdetails">
        <img src={v3} alt="v3" className="vehi" />
        </Link>
        
          <div className="card-info">
            <span className="auction-status timed">2D: 12H: 34Min: 52Sec</span>
            <h3>Product Name</h3>
            <p>Variant</p>
            <p>
              $55 <span className="bid-type">(Minimum Bid)</span>
            </p>
          </div>
        </div>

        <div className="card">
        <Link to="/productdetails">
        <img src={v5} alt="v5" className="vehi" />
        </Link>
       
          <div className="card-info">
            <span className="auction-status timed">2D: 12H: 34Min: 52Sec</span>
            <h3>Product Name</h3>
            <p>Variant</p>
            <p>
              $55 <span className="bid-type">(Minimum Bid)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg3">
      <Link to="/productdetails">
      <img src={bg2} alt="bg2" className="image2" />
        </Link>
       
        
        <div className="overlay2">
          <p>Trusted Partners</p>
          <h2>Partnering with the Most Trusted Names in the  Industry</h2>
          <p>
          Our auctions are backed by reputable companies, </p>ensuring you get the best quality and service with every bid.<p> In Collaboration with Industry Leaders—Ensuring 
Quality and Reliability in Every Auction.
         
          </p><p> <br />
            <img src={Logos} alt="bg2" className="logos" /></p>
         <p><button className="btn2"Type ="submit">see more</button></p>
        </div>
      </div>
        <div className="rd">
        <h1>Our Proven Track Record Speaks <br />
        for Itself</h1>
        </div>

        <div className="bg2">
  <img src={bg2} alt="bg2" className="image" />
  <div className="overlay">
    <h2>Hear from Our Happy Bidders</h2>
    <p><br /> <br />
    Real Experiences, Real Reviews,See What Our Users Are Saying 
    About Their Auction Wins.<br /> <br />
    </p>  
     
  </div>
</div>
<div className="hcustm"><br /> <br /><br /> <br />
  <p>"I was initially skeptical about using this platform, but I'm so glad I did. <br /> The bidding process was quick and easy, 
    and I found exactly what I was looking for at a great price."</p> <br /> <br />
    <img src={p1} alt="P1" className="profile-picture" /> <br />
    <p>Marcus Peter</p> <br />
    <p>Position, Company name</p>
</div>
<br /><br />


<div className="bg2">
  <img src={bg2} alt="bg2" className="image" />
  <div className="overlay">
    <h2>Ready to Start Bidding?</h2><br />
    <p>
    Create an Account and Join the Excitement—Your Next Vehicle is Just a Bid Away!<br /> <br />
    </p>  <br /> <br />
    <p>
      <Link to="">
        <button className="btn2" type="button">Sign in</button>
      </Link>&nbsp;
      <Link to="">
        <button className="btn2" type="button">Sign up</button>
      </Link>
    </p>
  </div>
</div>
        
    </div>
    

    
  );
};

export default Hero;
