"use client";
import React from "react";
import HeadingComponent from "./Heading";

const TrustedPartner = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 mt-10">
      <HeadingComponent
        heading="Adored by Countless Satisfied Clients
"
        description="Discover the wonderful experiences and accomplishments our clients have shared with us!"
      />
      <div className="max-w-7xl mx-auto lg:py-20 py-10">
        <div
          className="slider max-w-7xl"
          style={
            {
              "--width": "130px",
              "--height": "70px",
              "--quantity": "7",
            } as React.CSSProperties
          }
        >
          <div className="list">
            <div
              className="item"
              style={{ "--position": 1 } as React.CSSProperties}
            >
              <img className="logo" src="/clients/l5.png" alt="" />
            </div>
            <div
              className="item h"
              style={{ "--position": 2 } as React.CSSProperties}
            >
              <img
                className=" logo scale-125"
                src="/clients/l7.png"
                alt="hp logo"
              />
            </div>
            <div
              className="item"
              style={{ "--position": 3 } as React.CSSProperties}
            >
              <img className="logo" src="/clients/l9.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": 4 } as React.CSSProperties}
            >
              <img className="h-50 " src="/clients/l13.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": 5 } as React.CSSProperties}
            >
              <img
                className="logo object-contain pb-2"
                src="/clients/puratap.png"
                alt=""
              />
            </div>
            <div
              className="item"
              style={{ "--position": 6 } as React.CSSProperties}
            >
              <img className="logo" src="/clients/studio11-logo.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": 7 } as React.CSSProperties}
            >
              <img className="logo" src="/clients/TNG.png" alt="" />
            </div>

            {/* <div
              className="item"
              style={{ "--position": 10 } as React.CSSProperties}
            >
              <img className="logo" src="/brand/wepsol-logo.svg" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartner;
