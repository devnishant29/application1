import React from "react";
import "./main.scss";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Foooter/Footer";

function MyComponent() {
  return (
    <>
      <div className="div">
        <Header/>
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default MyComponent;
