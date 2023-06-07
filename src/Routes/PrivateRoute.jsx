import React, { useContext } from 'react';
import { AuthContest } from '../Provider/ContextApi';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ( {children} ) => {
    const { user, loading } = useContext(AuthContest);
    const location = useLocation();

    if(loading){
        return <div> Loading .... </div>
    }

    if(user){
        return children;
    }

   
    return (
        <Navigate to="/login" state={{from:location}} replace> </Navigate>
    );
};

export default PrivateRoute;