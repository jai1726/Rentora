import React, { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
  const [formData, setFormData] = useState({
    description: '',
    city: '',
    area: '',
    location: '',
    rent: '',
    contactInfo: '',
    images: []  // Will hold selected images
  });

  const [selectedImages, setSelectedImages] = useState([]); // Holds image files

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);  // Temporarily store selected files
    setFormData((prev) => ({ ...prev, images: files }));
  };

  const handleSubmit=async (e)=>{
    e.preventDefault();
    console.log("submit");
    const token = localStorage.getItem('jwtToken');
    // const token=  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzE2OTMxNDhhMzViODQyZWFmMTQ4NDMiLCJlbWFpbCI6ImphZ2FkZWVzaGRlbmRlQGdtYWlsLmNvbSIsImlhdCI6MTczMDA1Mzc5OSwiZXhwIjoxNzMwMDU3Mzk5fQ.U8C8na-rEKHsYA2F3BropZDo65NNwmxMsi94q4544LY";

   const data =new FormData();
   data.append('description',formData.description);
   data.append('city', formData.city);
   data.append('area', formData.area);
   data.append('location', formData.location);
   data.append('rent', formData.rent);
   data.append('contactInfo', formData.contactInfo);

   selectedImages.forEach((image) => {
    data.append('images', image);
  });

  try{
    const response =await axios.post(
      'http://localhost:7000/api/post/add',
      data,
      {
        headers :{
          'content-Type':'multipart/form-data',
             Authorization:`Bearer ${token}`
        }
      }
    );
    console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

  }

  // Render form fields and image input
  return (
    <form className="bg-white flex justify-center items-center h-screen" onSubmit={handleSubmit}>
    <div className="bg-gray-200 space-y-4 rounded-lg p-8 shadow-lg">
      <div className="flex flex-col m-2">
        <label className="font-medium">Description</label>
        <input className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300" type="text" name="description" value={formData.description} onChange={handleChange} />
      </div>
      <div className="flex flex-col m-2 ">
        <label  className="font-medium">City</label>
        <input className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300" type="text" name="city" value={formData.city} onChange={handleChange} />
      </div>
      <div className="flex flex-col m-2">
        <label className="font-medium" >Area</label>
        <input className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300" type="text" name="area" value={formData.area} onChange={handleChange} />
      </div>
      <div className="flex flex-col m-2">
        <label className="font-medium">Location</label>
        <input className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" type="text" name="location" value={formData.location} onChange={handleChange} />
      </div>
      <div className="flex flex-col m-2">
        <label className="font-medium ">Rent</label>
        <input className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" type="number" name="rent" value={formData.rent} onChange={handleChange} />
      </div>
      <div className="flex flex-col m-2">
        <label className="font-medium ">Contact Info</label>
        <input className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} />
      </div>
      <div className="flex flex-col m-2">
        <label className="font-medium ">Images</label>
        <input className="border border-gray-400 rounded px-4 py-2" type="file" name="images" accept="image/*" multiple onChange={handleImageChange} />
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200" type="submit">Submit</button>
      </div>
    </div>
  </form>
  );
};

export default AddPost;
