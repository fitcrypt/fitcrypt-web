import React from "react";
import logo from "../assets/space_logo_100.svg"

function ComingSoon() {
    return (
      <div className="w-full h-[calc(100vh-200px)] flex flex-col justify-center items-center space-y-4">
        <div>
          <img src={logo} className="h-24" alt="Logo" />
        </div>
        <div className="text-4xl font-bold bg-gradient-to-br from-primary-200 to-primary-600 bg-clip-text text-transparent font-serif">
          Coming Soon
        </div>
      </div>
    );
  }
  

export default ComingSoon;