import React from 'react';
import './profile2.css';
import bg2 from '../../assets/bg2.png';
import { Link } from 'react-router-dom'; 
 

const Profile2 = () => {
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
       <div className="bidding-table">
      <br /><br /><br />
       <table>
  <thead>
    <tr>
      <th colSpan={2}>
        <div className="header">
          <h2>Your Bidding</h2>
        </div>
      </th>
      <th>
        <div className="search-sort">
          <input type="text" placeholder="Search" />
          <select>
            <option value="default">Sort by</option>
            <option value="rank">Rank</option>
            <option value="item">Item</option>
            <option value="status">Status</option>
          </select>
        </div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tdataboxc">
        <button className="tdatabox">
          <p>3rd</p>
          <p>out of 17</p>
        </button>
      </td>
      <td>
        <p>Toyota Car - 12345</p>
        <p>1D : 22H : 30MIN : 12SEC</p>
      </td>
      <td>
        <p><button type="submit"class ="btn1">completed</button></p>
      </td>
    </tr>
    <tr>
      <td className="tdataboxc">
        <button className="tdatabox">
          <p>9th</p>
          <p>out of 27</p>
        </button>
      </td>
      <td>
        <p>Tesla Car  - 53272</p>
        <p>1D : 22H : 30MIN : 12SEC</p>
      </td>
      <td>
        <p><button type="submit"class ="btn2">procecing</button></p>
      </td>
    </tr>
    <tr>
      <td className="tdataboxc">
        <button className="tdatabox">
          <p>2nd</p>
          <p>out of 39</p>
        </button>
      </td>
      <td>
        <p>Honda BIKE - 4378</p>
        <p>1D : 22H : 30MIN : 12SEC</p>
      </td>
      <td>
        <p><button type="submit" class ="btn3">Rejected</button></p>
      </td>
    </tr>
    <tr>
      <td className="tdataboxc">
        <button className="tdatabox">
          <p>3rd</p>
          <p>out of 44</p>
        </button>
      </td>
      <td>
        <p>TATA Lorry - 88891</p>
        <p>1D : 22H : 30MIN : 12SEC</p>
      </td>
      <td>
        <p><button type="submit" class ="btn4">Rejected</button></p>
      </td>
    </tr>
  </tbody>
</table>
    </div>
                 


       
    </div>
  );
};

export default Profile2;