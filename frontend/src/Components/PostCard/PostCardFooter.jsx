import React from "react";
import { FaShare, FaHeart, FaFlag } from "react-icons/fa";

export default function PostCardFooter() {
  return (
    <div className="flex justify-around py-4 border-t border-gray-200 text-center text-sm text-gray-600">
      <div className="flex flex-col items-center">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FaHeart className="text-red-500" />
        </button>
        <span>Like</span>
      </div>
      <div className="flex flex-col items-center">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FaShare className="text-blue-500" />
        </button>
        <span>Share</span>
      </div>
      <div className="flex flex-col items-center">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FaFlag className="text-gray-500" />
        </button>
        <span>Report</span>
      </div>
    </div>
  );
}