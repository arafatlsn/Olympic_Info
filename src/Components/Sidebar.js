import React from "react";
import olympic_img from "../Assets/olympic_log.png";

const Sidebar = () => {
  return (
    <div className="min-w-[220px] py-[1rem]">
      <div className="flex flex-col items-center">
        <img
          className="w-[100px] h-[80px] object-contain"
          src={olympic_img}
          alt="olympic_logo"
        />
        <h4 className="text-[1.3rem] text-red-600 translate-y-[-1rem] font-semibold">
          Olympic Info
        </h4>
      </div>
    </div>
  );
};

export default Sidebar;
