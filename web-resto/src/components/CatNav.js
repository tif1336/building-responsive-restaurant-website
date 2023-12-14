'use client'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MenuList = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/menus/');
        setMenus(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

    return menus;
};

  

  
  export default function food() {
    const menus = MenuList();
    const pembuka = menus.find((menu) => menu.id === 1);
    const utama = menus.find((menu) => menu.id === 2);
    const penutup = menus.find((menu) => menu.id === 3);
    return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          

    
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {menus.map((menu) => (
                <a key={menu.id} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                    <img
                      src={menu.image}
                      
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                    <h3>{menu.name}</h3>
                    <p>Rp.{menu.price}000</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    }
  