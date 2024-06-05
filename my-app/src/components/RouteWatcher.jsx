import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteWatcher = () => {
  const location = useLocation();

  useEffect(() => {
    const rootDiv = document.getElementById('root');
    if (location.pathname === '/committee' || location.pathname === '/registration') {
      rootDiv.classList.add('flex');
    } else {
      rootDiv.classList.remove('flex');
    }
  }, [location]);

  return null; // This component does not render anything
};

export default RouteWatcher;
