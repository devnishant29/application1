import React from "react";
import "./../main.css";
import Top from "./Top/Top";
import Review from "./Middle/Review";
import Bottom from "./Bottom/Bottom";
import Description from "./Middle/Description";

function Body() {
  return (
    <>
      <div className="div">
        <div className="div-9">
          <div className="div-10">
            <Top />
            <Description />
            <Review />
            <Bottom />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
