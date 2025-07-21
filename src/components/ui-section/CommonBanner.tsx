"use client";

import React, { FC } from "react";

interface BannerProps {
  title: string;
}

const CommonBannerComponent: FC<BannerProps> = ({ title }) => {
  return (
    <div className="relative w-full lg:h-[300px] h-[100px] m-auto banner-image">
      <div className="absolute inset-0 bg-black/10 flex justify-center items-center p-4">
        <div className=" space-y-5 w-full max-w-7xl text-center sm:text-center">
          <h1 className="lg:text-white text-3xl sm:text-5xl font-bold ">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CommonBannerComponent;
