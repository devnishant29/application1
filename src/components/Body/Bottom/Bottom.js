import React from "react";
import Deals from "../Deals/deals";
import SignUp from "../SignUp/SignUp";

function Bottom() {
  return (
    <>
      <div className="div-127">Related deals you might like for</div>
      <div className="div-128">
        <div className="div-129">
          <div className="div-130">
            <Deals />
            <Deals />
            <Deals />
          </div>
        </div>
        <SignUp />
      </div>
    </>
  );
}

export default Bottom;
