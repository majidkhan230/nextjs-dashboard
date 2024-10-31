import Image from "next/image";
import React from "react";

const UserCard = ({ type }) => {
  // console.log(type)
  return (
    <div className="bg-teal-300 rounded-2xl odd:bg-Purple even:bg-Yellow p-4 min-w-[130px] flex-1">
      <div className="flex justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" width={20} height={20} alt="more"></Image>
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
