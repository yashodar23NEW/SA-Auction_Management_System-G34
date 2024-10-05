import React from 'react'
import bg2 from '../../assets/bg2.png';
import car1 from '../../assets/car1.png';

import './allvehicles.css';
 
import p1 from '../../assets/p1.jpg'; 
 
 

const Allvehicles = () => {
  return (
    <div>
      <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Find Your Perfect Ride</h2>
          <p>
          Browse Our Extensive Vehicle Collection—From Luxury 
          Cars to Budget-Friendly Options, There's Something for Everyone.
          </p>
        </div>
      </div>
<div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <div className="right-side">
        <i className="fa fa-bell" aria-hidden="true"></i>
        <img src={p1} alt="P1" className="profile-picture" />
        <span className="username">James Smith</span>
      </div>
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
          <img src="path/to/motorcycle-image.jpg" alt="Motorcycle" />
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
          <img src="path/to/van-image.jpg" alt="Van" />
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
          <img src="path/to/motorcycle-image.jpg" alt="Motorcycle" />
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
          <img src="path/to/van-image.jpg" alt="Van" />
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
          <img src="path/to/motorcycle-image.jpg" alt="Motorcycle" />
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
          <img src="path/to/van-image.jpg" alt="Van" />
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
          <img src="path/to/motorcycle-image.jpg" alt="Motorcycle" />
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
          <img src="path/to/van-image.jpg" alt="Van" />
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
      <var><div className="card-container">
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
          <img src="path/to/motorcycle-image.jpg" alt="Motorcycle" />
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
          <img src="path/to/van-image.jpg" alt="Van" />
          <div className="card-info">
            <span className="auction-status timed">2D: 12H: 34Min: 52Sec</span>
            <h3>Product Name</h3>
            <p>Variant</p>
            <p>
              $55 <span className="bid-type">(Minimum Bid)</span>
            </p>
          </div>
        </div>
      </div></var>
    </div>

    
  )
}

export default Allvehicles
