import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServiceItem from '../ServiceItem/ServiceItem';
import ServicesData from '../ServicesData';







const Services = () => {
    
       const [services, setServices] =useState([]);
       useEffect(()=>{
        fetch('https://powerful-temple-34845.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <section style={{padding:'150px 50px 50px 50px'}} className="container-fluid">
            {/* <ServicesData></ServicesData> */}
            <h3 className="text-center mb-3 ">Provide awesome services</h3>
            <div className="row">
                
               {
                   services.map(service => <ServiceItem 
                      key={service.id}
                    service={service} ></ServiceItem>)
               }
                
            </div>
        </section>
    );
};

export default Services;