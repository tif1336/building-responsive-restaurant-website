import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context
const MenuContext = createContext();

// Create a provider component that wraps your application
export const MenuProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/menus/');
        const result = await response.json();
        setMenus(result);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MenuContext.Provider value={menus}>
      {children}
    </MenuContext.Provider>
  );
};

// Create a hook to use the menu data
export const useMenuData = () => {
  return useContext(MenuContext);
};
