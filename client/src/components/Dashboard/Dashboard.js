import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import ("./dash.css")



const Dashboard = () => {
    const currentUser=useSelector(state=>state.userReducer.currentUser)
  return <div>
      <NavBar/>
      <div class="padding">
    <div class="col-md-8">
        
        <div class="card"> <img class="card-img-top" src={currentUser.photoCouverture} alt="Card image cap"/>
            <div class="card-body little-profile text-center">
                <div class="pro-img"><img src={currentUser.image} alt="user"/></div>
                <h3 class="m-b-0">{currentUser.fullName}</h3>
                <p>{currentUser.rate}</p> 
                <div class="row text-center m-t-20">
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">OUr GrOup:</h3><small>{currentUser.groupName}</small>
                    </div>
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">ContaCt mE:</h3><small>{currentUser.phoneNumber}</small>
                    </div>
                    <div class="col-lg-4 col-md-4 m-t-20">
                        <h3 class="m-b-0 font-light">AbOut mE:</h3><small>{currentUser.description}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  </div>;
};

export default Dashboard;
