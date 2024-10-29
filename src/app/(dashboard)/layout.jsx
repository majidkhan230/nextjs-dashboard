import React from "react";

const Dashboardlayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex ">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">l</div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        r
      </div>
    </div>
  );
};

export default Dashboardlayout;
