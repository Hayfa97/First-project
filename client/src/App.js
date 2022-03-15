import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './JS/actions/actionsUser';
import AuthUser from './components/AuthUser';
import DashboardAdmin from './components/Dashboard/DashboardAdmin';
import AuthAdmin from './components/AuthAdmin';
import { Container, Grid } from '@material-ui/core';
import { getPosts } from './JS/actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Mycarousel from './components/NavBar/Carousel';
function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getCurrentUser())
   
  }, []);
  
    
  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  
  return (
    <div className="App">
   <Routes>
     <Route path="/" element={<div><NavBar/><Mycarousel/></div>}/>
     <Route path="/signin" element={<Signin/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/dashboard" element={<AuthUser><Dashboard/></AuthUser>} />
     <Route path="/dashboardAdmin" element={<AuthAdmin><DashboardAdmin/></AuthAdmin>} />
     <Route path='/posts' element={<div> <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container></div>}/>

   </Routes>
    </div>
  );
}

export default App;
