import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Categories = () => {
  const [cate, setCate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/menus/categories/');
        setCate(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

    return cate;
};