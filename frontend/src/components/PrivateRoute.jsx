import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Your authentication logic here
    const checkAuthentication = () => {
      // Replace this with your actual authentication logic
      const isAuthenticated = localStorage.getItem('userdata')!==null;
      setIsAuthenticated(isAuthenticated);
      console.log(isAuthenticated)
    };

    checkAuthentication();
  }, []);

  return isAuthenticated ? (
    <Route element={<Element />} {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
