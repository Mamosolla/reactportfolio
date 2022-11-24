import React, { Component } from "react";
import "./home.css";
export class home extends Component {
  render() {
    return (
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
        
      >
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
              <p className="text-pink-600">Hi,my name is</p>
              <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Kagiso Mamosolla</h1>
              <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer</h2>
              <p className="text-[#8892b0] py-4 max-w-[700px]">I'm a full-stack developer specializing in building web-applications and also ui/ux desgning. </p>

          
            <button className="text-white border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600">Get Started</button></div>
        
          </div>
    );
  }
}

export default home;
