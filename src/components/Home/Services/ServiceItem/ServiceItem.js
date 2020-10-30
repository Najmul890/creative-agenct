import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceItem.css';

const ServiceItem = (props) => {
    const {id,iconImg,serviceName}= props.service;
    return (
  
       <div className="col-md-4 service-card text-center p-5">
           <Link to={"/dashboard/order/"+id} style={{textDecoration:'none'}} >
              <div>
                    <img style={{height:'50px'}} className="img-fluid mb-2 " src={iconImg} alt=""/>
                    <h4 className="color-dark mb-3" >{serviceName} </h4>
                    <p className="text-secondary" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, blanditiis animi. Quasi reiciendis eaque sed.</p>
              </div>
           </Link> 
       </div>
       
    );
};

export default ServiceItem;