import React from 'react';
import './sell.css';
import bg2 from '../../assets/bg2.png';

const sell = () => {
  return (
    <div>
       <div className="bg2">
        <img src={bg2} alt="bg2" className="image" />
        <div className="overlay">
          <h2>Meet the Team</h2>
          <p>
          Together, We Achieve More.
          </p>
        </div>
      </div>

      <div className="para">
       
       <h1>
       Vehicle Details
       </h1>
       <p>Describe Your Vehical Details To Make Easy To Find</p>
      </div> <br /><br />
      <div className="vehicle-inputs">
          <input type="text" placeholder="SELECT YOUR VEHICLE TYPE" />
          <input type="text" placeholder="VEHICAL BRAND NAME" />
          <input type="text" placeholder="DESCRIPTION ABOUT VEHICLE " />
          <input type="text" placeholder="DESCRIPTION ABOUT CONDITION   " />
          <input type="text" placeholder="LOCATE ADDRESS  " />
           
           
        </div>

        <div className="para">
       
       <h1>
       Vehicle APPEAPPEARANCE 
       </h1>
       <p>Make Sure To Add Detailed Pictures</p>
      </div> <br /><br />
      <div className="container">
      <div className="image-container"></div>
      <div className="form-container">
        <div className="input-container">
          <input type="text" className="input-field" placeholder="SELECT YOUR VEHICLE TYPE" />
        </div>
        <div className="input-container">
          <input type="text" className="input-field" placeholder="VEHICLE #####" />
        </div>
        <div className="input-container">
          <input type="text" className="input-field" placeholder="VEHICLE #####" />
        </div>
        <div className="input-container">
          <input type="text" className="input-field" placeholder="VEHICLE #####" />
        </div>
        <div className="input-container">
          <input type="text" className="input-field" placeholder="VEHICLE #####" />
        </div>
        <button className="button">COMFORM DETAILS AND SED FOR APPROVAPPROVAL</button>
      </div>
    </div>
    </div>
  )
}

export default sell
