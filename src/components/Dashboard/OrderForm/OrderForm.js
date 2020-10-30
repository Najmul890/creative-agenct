import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {  useParams } from 'react-router-dom';
import { useAuth } from '../../Login/UseAuth';

import './OrderForm.css';


const OrderForm = () => {
    
    const auth= useAuth();
    const {serviceId}=useParams();
    const [service, setService]= useState({});
    
    
    useEffect(()=>{
        fetch('https://powerful-temple-34845.herokuapp.com/services/' +serviceId)
        .then(res=> res.json())
        .then(data=> setService(data))
    },[serviceId])


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        const newOrder= {...auth.user, orderInfo:data,  img:service.iconImg };
 
        fetch('https://powerful-temple-34845.herokuapp.com/addOrderInfo', {
         method:'POST',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify(newOrder)
       })
       .then(res=>res.json())
       .then(data=>{
         
        alert('your order has been successfully placed');
        e.target.reset();          
       })
   }
console.log(service)
    return (
        <div className="container-fluid" >
            <div className="row justify-content-between ">
                <h4>Order Now</h4>
                <p> {auth.user.name} </p>
            </div>
            <div className="row">
            <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
                
                <input placeholder="Your Name / Company Name" name="name" ref={register({ required: true })} /> 
                {errors.name && <span className="text-danger ml-2 " >This field is required</span>} <br/> <br/>

                <input name="email" value={auth.user.email}  ref={register({ required: true })} /> <br/> <br/>
                

                <input  value={service.serviceName} name="serviceName" ref={register({ required: true })} />
                 <br/> <br/>

                <input name="details" placeholder="Project Details"  ref={register({ required: true })} /> 
                {errors.details && <span className="text-danger ml-2 " >This field is required</span>} <br/> <br/> 

                <input name="budget" placeholder="Budget"  ref={register({ required: true })} /> 
                {errors.budget && <span className="text-danger ml-2 " >This field is required</span>} <br/> <br/>

                {/* <input name="file" type="file"  ref={register({ required: true })} /> 
                {errors.file && <span className="text-danger ml-2 " >This field is required</span>} <br/> <br/> */}
      
                <input className="main-btn" type="submit" />


              </form>  
            </div>
        </div>
    );
};

export default OrderForm;