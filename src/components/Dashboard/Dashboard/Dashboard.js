import React, { useEffect, useState } from 'react';
import OrderForm from '../OrderForm/OrderForm';
import './Dashboard.css';
import { useAuth } from '../../Login/UseAuth';
import { Link } from 'react-router-dom';
import OrderedServices from '../OrderedServices/OrderedServices';
import Sidebar from '../Sidebar/Sidebar';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ServiceList from '../ServiceList/ServiceList';
import OrderReview from '../PostReview/PostReview';



const Dashboard = () => {
    const auth= useAuth();
    
    const [isAdmin, setIsAdmin] = useState(false);
   
    const [section, setSection]=useState(<OrderForm/>) 
    

    useEffect(() => {
        
           
        const email = auth.user.email;
            fetch(`http://localhost:5000/isAdmin?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if(data){
                  setIsAdmin(true);
                }
              })
            .catch(error => console.log(error));
           
        
        }, [auth.user.email])
      
    
    
    return (
        <section className="dashboard container-fluid d-flex pt-3">
            <div className="col-md-2">

             
            {
                 isAdmin ? 
                 
                 <ul style={{listStyle:'none'}} >
                     <li onClick={()=>setSection(<OrderForm/>)}>Order Now</li> 
                 <li onClick={()=>setSection(<ServiceList/>)}  > Ordered Service list </li>
                 <li onClick={()=>setSection(<OrderReview/>)} >Give a review  </li>
                    <li onClick={()=>setSection(<OrderedServices/>)}> Ordered Services </li>
                    <li onClick={()=>setSection(<AddService/>)}>Add a new Service </li>
                    <li onClick={()=>setSection(<MakeAdmin/>)}>Add a Admin </li>
             </ul>
                 
                 :

                 <ul style={{listStyle:'none'}} >
                 <li onClick={()=>setSection(<OrderForm/>)}>Order Now</li> 
                 <li onClick={()=>setSection(<ServiceList/>)}  > Ordered Service list </li>
                 <li onClick={()=>setSection(<OrderReview/>)} >Give a review  </li>
             </ul>  
            
           }
            
        
          </div>

               
          <div className="col-md-10  pr-5 ">
                    {
                        section
                    }
          </div>      
            
        </section>
    );
};

export default Dashboard;