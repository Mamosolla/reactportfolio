import React, { Component } from "react";

export class resume extends Component {
  render() {
    return (
   
        <div className="min-h-screen bg-[#0a192f]">
            <h1 className="text-5xl font-bold text-white flex justify-center mb-6">Resume</h1>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-full card bg-base-300 rounded-box ">
              <div className="card-body">
              <h1 className="text-4xl font-bold ">Education</h1>

              <h1 className="text-2xl font-bold ">NSC Diploma</h1>
                <p className="">January 2016 - December 2020</p>
                <div className="date"></div>
                <i>Makala Secondary School</i>
                <h1 className="text-4xl font-bold ">Experience</h1>

              <h1 className="text-2xl font-bold ">The Digital Academy</h1>
              <h1 className="text-1xl font-bold ">Full Stack Developer</h1>
              <div className="date">2022 Present</div>
              <i>The Media Mill, 7 Quince St, Auckland Park, Johannesburg, 2000</i>
              <div></div>
              </div>

            </div>
          </div>
        </div>

    );
  }
}

export default resume;
