import React from "react";
import PostCardFooter from "./PostCardFooter";
import PostCardDetails from "./PostCardDetails";

export default function PostCard() {
  let imgUrl = "https://picsum.photos/id/237/800/400";
  
  return (
    <div className="flex flex-row border-2 border-gray-300 rounded-lg overflow-hidden shadow-md m-4 w-full max-w-3xl bg-white">
      <div className="w-1/2">
        <img src={imgUrl} alt="Rentero_image" className="object-cover w-full h-full" />
      </div>
      
      <div className="flex flex-col w-1/2 p-4 space-y-4">
        <div className="text-sm text-gray-700 mb-2">
          Description comes here. This is a sample description to demonstrate the layout of the card.
        </div>
        
        <hr className="my-2 border-gray-200" />
      
        <div className="w-full">
          <PostCardDetails />
        </div>
        
        <hr className="my-2 border-gray-200" />
      
        <div className="w-full">
          <PostCardFooter />
        </div>
      </div>
    </div>
  );
}
