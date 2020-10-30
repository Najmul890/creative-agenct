import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Login/UseAuth';
import Sidebar from '../Sidebar/Sidebar';

const OrderedServices = () => {
    const auth= useAuth();
    const [services, setServices]=useState([]);
    console.log(services)
    useEffect(()=>{
        fetch('http://localhost:5000/orderedAllServices')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <section className="container-fluid">
            <div className="row">
                
                <div className="col-md-10">
                <div className="row d-flex justify-content-between ">
                <h4>Services List</h4>
                <p>{auth.user.name} </p>
            </div>
            <div className="row">
            <table className="table table-borderLess">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Service Name</th>
                <th className="text-secondary" scope="col">Project Details</th>
                <th className="text-secondary" scope="col">Status</th>
                
                </tr>
            </thead>
            <tbody>
                {
                  services.map((orderedServiceInfo, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{orderedServiceInfo.name}</td>
                        <td>{orderedServiceInfo.email}</td>
                        <td>{orderedServiceInfo.orderInfo.serviceName}</td>
                        <td>{orderedServiceInfo.orderInfo.details}</td>
                        <td>pending</td>
                        
                    </tr>
                    )
                }
            </tbody>
        </table>
            </div>
                </div>
            </div>
        </section>
    );
};

export default OrderedServices;