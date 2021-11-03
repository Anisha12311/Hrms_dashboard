import React, { useState } from "react";
import "./ConfigureEmail.scss";
import google from "../../asserts/icons/google.png";
import outlook from "../../asserts/icons/outlook.png";
import exchange from "../../asserts/icons/exchange.png";
import pop from "../../asserts/icons/pop.png";
import imap from "../../asserts/icons/imap.png";
import microsoft_Office from "../../asserts/icons/microsoft_Office.png";
import exchange2003 from "../../asserts/icons/exchange2003.png";

const ConfigureEmail = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="config">
      <div className="config-box">
        {clicked === false && (
          <>
            <h1 className="config-heading">Configure Email</h1>

            <div className="input-container">
              <label>Email Address</label>
              <div className="input-box">
                <input type="email" />
              </div>
            </div>

            <div className="check-form">
              <input id="r-in-o" type="checkbox" />
              <label htmlFor="r-in-o"> Let me set up my account manually</label>
            </div>
            <div
              className="btn btn-w btn-active"
              style={{ minWidth: "0rem", display: "inline-block" }}
              onClick={() => setClicked(!clicked)}
            >
              Connect
            </div>

         
          </>
        )}
        {clicked === true && (
          <>
            <h1 className="config-heading">Advanced Setup</h1>

            <div className="icons">
              <img src={google} height="60px" />

              <img src={exchange} height="60px" />
              <img src={pop} height="60px" />
              <img src={outlook} height="60px" />
            </div>
            <div className="icons2">
              <img src={imap} height="60px" />
              <img src={exchange2003} height="60px" />
              <img src={microsoft_Office} height="60px" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ConfigureEmail;
