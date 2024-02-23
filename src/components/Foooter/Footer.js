import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="div">
        <div className="FooterContainer">
          <div className="FooterItems">
            <div className="FooterContents">
              <div className="FooterColumns">
                <div className="FooterText">
                  <div className="FooterOptions">Categories</div>
                  <div className="FooterOption">Web Builder</div>
                  <div className="FooterOption">Hosting</div>
                  <div className="FooterOption">Data Center</div>
                  <div className="FooterOption">Robotic-Automation</div>
                </div>
                <div className="FooterText">
                  <div className="FooterOptions">Contact</div>
                  <div className="FooterOption">Contact</div>
                  <div className="FooterOption">Privacy Policy</div>
                  <div className="FooterOption">Terms Of Service</div>
                  <div className="FooterOption">Categories</div>
                  <div className="FooterOption">About</div>
                </div>
              </div>
            </div>
            <div className="FooterCountry">
              <div className="Country_Drop_Down">United States</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b21365f39c494c6d0ac4f4ba8e51a71b1a7802c6ebfad90cbe58cf5dacddeda?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&"
                className="Dropdown"
                alt=""
                style={{ marginTop: "6px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
