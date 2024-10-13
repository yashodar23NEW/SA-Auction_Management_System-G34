import React from 'react';
import './profile.css';
import bg2 from '../../assets/bg2.png';
import { Link } from 'react-router-dom'; 
import p1 from '../../assets/p1.jpg'; 

const profile = () => {
  return (
    <div>
      <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Manage Your Profile</h2>
          <p>
            Update Your Details, Track Your Bids, and Customize Your Preferences—All in One Place.
          </p>
        </div>
      </div>
       <div><br /><br /><br />
       <p className="tab-header"> <ul> <li><Link to="/profile">Personal info </Link></li>
          <li><Link to="/profile2"> Bidding History </Link></li>
          <li><Link to="/profile3">Selling Statues</Link></li></ul></p>
       </div>
      <div className="profile-form">
        <div className="header">
          <div className="tabs">
            
             
          </div>
        </div>
        <div className="welcome">
          <p>Welcome</p>
          <h1>James</h1>
          <p>Read or edit profile details here.</p>
        </div> <br />
        <div className="user-profile">
          <img src={p1}  alt="user-profile" />
        </div>
        <div className="profile-inputs">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Phone number" />
          <input type="text" placeholder="House number" />
          <input type="text" placeholder="Province" />
        </div>
        <button className="change-info">Change info</button>
      </div>
    </div>
  );
};

export default profile;