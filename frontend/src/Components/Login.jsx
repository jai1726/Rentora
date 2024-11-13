import React, { useState } from 'react';
import Card from './Card';
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate= useNavigate();
  const fields = [
    { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email' },
    { label: 'Password', type: 'password', name: 'password', placeholder: 'Enter your password' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ads = await JSON.stringify(formData);
      console.log('Log');
      const response = await fetch('http://localhost:7000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      // console.log(response);
    
      if (response.ok) {
        console.log('Logined');
        const data = await response.json();
        const token=data.token;
        console.log(token);
        localStorage.setItem('jwtToken', token);
        console.log('Login successful:', data);
       navigate('/')
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
   
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
      <Card
        header={<h1 className="text-2xl font-bold">Login</h1>}
        content={
          <form className="space-y-4" onSubmit={handleSubmit}>
            {fields.map((field, index) => (
              <div key={index} className="flex flex-col">
                <label className="font-medium mb-2" htmlFor={field.name}>{field.label}</label>
                <input
                  className="border rounded px-4 py-2"
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}<div className='flex flex-row'>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 justify-end">
              Login
            </button></div>
          </form>
        }
      />
    </div>
  );
}

