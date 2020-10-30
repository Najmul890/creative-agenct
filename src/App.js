import React, { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import AddService from './components/Dashboard/AddService/AddService';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import OrderedServices from './components/Dashboard/OrderedServices/OrderedServices';
import OrderForm from './components/Dashboard/OrderForm/OrderForm';
import OrderReview from './components/Dashboard/PostReview/PostReview';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import Home from './components/Home/Home/Home';

import Login from './components/Login/Login';
import {  AuthContextProvider, PrivateRoute } from './components/Login/UseAuth';






function App() {
  

  
  
  return (
    
     
    
    <AuthContextProvider>
      
      <Router>
       <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>
        <PrivateRoute path="/dashboard/order/:serviceId">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path='/order'>
          <OrderForm></OrderForm>
        </PrivateRoute>
        <PrivateRoute path='/serviceList'>
          <ServiceList></ServiceList>
        </PrivateRoute>
        <PrivateRoute path='/addReview'>
          <OrderReview></OrderReview>
        </PrivateRoute>
          <PrivateRoute path='/allOrderedServices'>
            <OrderedServices></OrderedServices>
          </PrivateRoute>
          <PrivateRoute path='/addService'>
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        
        
        
      </Switch>
     </Router>
    </AuthContextProvider>
      
        
     
    
  );
}

export default App;
