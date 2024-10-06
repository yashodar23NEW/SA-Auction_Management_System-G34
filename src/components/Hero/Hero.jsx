import React from 'react';
import './Hero.css';
import bg from '../../assets/bg.png';
import bg2 from '../../assets/bg2.png';
import Logos from '../../assets/logos.png';
import car1 from '../../assets/car1.png'; 
import v2 from '../../assets/v2.png'; 
import v3 from '../../assets/v3.png'; 
import v5 from '../../assets/v5.png'; 

const Hero = () => {
  return (
    <div className="Hero">
      <img src={bg} alt="bg" />

      <h1>Drive Your Dream, Bid Today</h1>
      <p>
        Bid on Your Dream Ride-From Classics to the Latest Models. Start Your
        Journey with Confidence.
      </p>

      <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Find Your Perfect Ride</h2>
          <p>
            Browse Our Extensive Vehicle Collection—From Luxury Cars to
            Budget-Friendly Options, There's Something for Everyone.
          </p>
        </div>
      </div>
      <div className="container">
      <div className="auction-info">
        <span className="most-viewed">MOST VIEWED</span>
        <h2 className="title">Featured Auctions</h2>
        <p>Top Vehicles at Unbeatable Starting Bids - Place Your Bid Now and Drive Away with a Deal!</p>
      </div>
      <a href="#" className="view-all-button">View all</a>
    </div>
    <div className="card-container">
        <div className="card">
        <img src={car1} alt="car1" className="vehi" />
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
        <img src={v2} alt="v2" className="vehi" />
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
        <img src={v3} alt="v3" className="vehi" />
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
        <img src={v5} alt="v5" className="vehi" />
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
        <img src={bg2} alt="bg2" className="image2" />
        <div className="overlay2">
          <p>Trusted Partners</p>
          <h2>Partnering with the Most Trusted Names in the  Industry</h2>
          <p>
          Our auctions are backed by reputable companies, ensuring you get the best quality and service with every bid. In Collaboration with Industry Leaders—Ensuring 
Quality and Reliability in Every Auction.
 
          </p>
         <p><button Type ="submit">see more</button></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
