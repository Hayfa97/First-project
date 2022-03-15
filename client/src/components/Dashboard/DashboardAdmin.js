import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';

const DashboardAdmin = () => {
    const currentUser=useSelector(state=>state.userReducer.currentUser) 

  return <div> <NavBar/>
 
</div>
};

export default DashboardAdmin;
