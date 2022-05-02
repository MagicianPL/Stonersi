import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

interface IProps {
    children: JSX.Element
}

//Only route for admin or mod
const ProtectedRoute: React.FC<IProps> = ({ children }) => {
    const { user } = useSelector((state: any) => state.userReducer);
    
    if (!user || user?.function === "user") {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };

  export default ProtectedRoute;