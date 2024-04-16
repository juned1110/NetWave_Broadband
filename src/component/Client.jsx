import React from "react";
import img1 from "../assets/logo-1.png";
import img2 from "../assets/logo-2.png";
import img3 from "../assets/logo-3.png";
import img4 from "../assets/logo-4.png";
import img5 from "../assets/logo-5.png";
import img6 from "../assets/logo-6.png";

const Client = () => {
  return (
    <div className="w-full h-28 bg-[#F2F2F2]">
      <div className="img flex justify-evenly">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </div>
    </div>
  );
};

export default Client;
