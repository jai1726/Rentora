import React, { useState } from 'react';
// import Footer from './Footer';
import Navbar from './Navbar';

const HomePage = () => {
  const [propertyType, setPropertyType] = useState(''); // Track property type

  return (
    
     
    <div className="flex flex-col min-h-screen">
       <Navbar/>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-500 text-white flex items-center justify-center h-[80vh] text-center px-6">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">Find Your Perfect Home</h1>
          <p className="text-lg">Search PGs, Hostels, and Houses for rent effortlessly.</p>

          {/* Search Form */}
          <form className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto space-y-4">
            {/* City Dropdown */}
            <div>
              <label htmlFor="city" className="block text-left text-gray-700 mb-1">City</label>
              <select
                id="city"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a City</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="chennai">Chennai</option>
              </select>
            </div>

            {/* Locality Input */}
            <div>
              <label htmlFor="locality" className="block text-left text-gray-700 mb-1">Locality</label>
              <input
                type="text"
                id="locality"
                placeholder="Enter the locality"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Property Type Dropdown */}
            <div>
              <label htmlFor="propertyType" className="block text-left text-gray-700 mb-1">House/Pg</label>
              <select
                id="propertyType"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Property Type</option>
                <option value="house">Full House</option>
                <option value="hostel">PG/Hostel</option>
              </select>
            </div>

            {/* Conditional Inputs for House */}
            {propertyType === 'house' && (
              <div>
                <label htmlFor="houseType" className="block text-left text-gray-700 mb-1">House Type</label>
                <select
                  id="houseType"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="1bhk">1 BHK</option>
                  <option value="2bhk">2 BHK</option>
                  <option value="3bhk">3 BHK</option>
                </select>
              </div>
            
            )}

            {/* Conditional Inputs for Hostel */}
            {propertyType === 'hostel' && (
              <div>
                <label htmlFor="sharing" className="block text-left text-gray-700 mb-1">Sharing Type</label>
                <select
                  id="sharing"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="1">Single Sharing</option>
                  <option value="2">Double Sharing</option>
                  <option value="3">Triple Sharing</option>
                </select>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-4 mt-auto">
        <div className="container mx-auto flex justify-between items-center px-6">
          <p>&copy; 2024 Rentora. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </footer>
      {/* <Footer/> */}
    </div>
  );
};

export default HomePage;