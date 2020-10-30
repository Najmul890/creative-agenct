import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../../Login/UseAuth';
import Sidebar from '../Sidebar/Sidebar';
import OrderedServiceItem from './OrderedServiceItem';

const ServiceList = () => {
    const auth=useAuth();
    const [services, setServices] =useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/orderedServices?email='+auth.user.email)
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className="container-fluid" >
            <div className="row justify-content-between ">
                <h4>Your Ordered Services</h4>
                <p> {auth.user.name} </p>
            </div>
            <div className="row">
               {
                   services.map(service=>  <OrderedServiceItem service={service} ></OrderedServiceItem> )
               }
            </div>
               
                
            
        </div>
    );
};

export default ServiceList;