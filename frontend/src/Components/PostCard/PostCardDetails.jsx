import React from "react";

export default function PostCardDetails() {
  return (
    <div className="w-full overflow-x-auto border-t border-b border-gray-200">
      <table className="w-full table-fixed text-sm md:text-base">
        <thead>
          {/* <tr className="bg-gray-100 text-left">
            <th className="w-1/2 p-2">Category</th>
            <th className="w-1/2 p-2">Value</th>
          </tr> */}
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border-t">Rent</td>
            <td className="p-2 border-t">1200</td>
          </tr>
          <tr>
            <td className="p-2 border-t">Type</td>
            <td className="p-2 border-t">Any one</td>
          </tr>
          <tr>
            <td className="p-2 border-t">Location</td>
            <td className="p-2 border-t">City Center</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}