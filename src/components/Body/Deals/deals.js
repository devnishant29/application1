import React from "react";
import "./deals.sass"

function Deals() {
  return (
    <div className="DealsContainer">
      <div className="DealsCard">
        <div className="DealsItems">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c54dfb8f509f33c6f0f70d605bce432ba91ab754a6c72cdad01d3fa6a40fa599?apiKey=d9ca65cc33d447538b153ce5c0cb3c6f&"
            className="UploadedImage"
            alt=""
          />
          <div className="DealsTags">
            <div className="DealsTag">20% Off</div>
            <div className="DealsTag">Limited time </div>
          </div>
          <div className="DelasTitle">Webbuilder 1</div>
        </div>
        <div className="DealsContents">
          <div className="DealsDescription">Computer Modern clasic with wix support</div>
          <div className="DealsDetails">
            <div className="DealsNewPrice">$39.96</div>
            <div className="DealsOldPrice">$49.96</div>
            <div className="DealsDiscount">(20% Off)</div>
          </div>
          <button className="DealsButton">View Deal</button>
        </div>
      </div>
    </div>
  );
}

export default Deals;
