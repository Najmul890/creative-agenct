import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Login/UseAuth';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const auth= useAuth();

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        const newAdminInfo= {  adminEmail:data.email  };
        
        fetch('https://powerful-temple-34845.herokuapp.com/addAdmin', {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newAdminInfo)
    })
    .then(res=>res.json())
    .then(data=>{
        
        alert('Successfully added as a member');
         e.target.reset()         
    })
    }
    return (
        <section className="container-fluid">
           <div className="row justify-content-between">
                <h4>Add a new Admin </h4>
                <p> <span><img style={{width:'30px'}} className="img-fluid rounded-circle z-depth-2" src={auth.user.photo} alt=""/> </span> {auth.user.name} </p>
            </div>
            <div className="row">
              <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
                
                
                <input placeholder="Email" name="email" ref={register({ required: true })} /> 
                {errors.email && <span className="text-danger ml-2 " >This field is required</span>} <br/> <br/>
                <input className="main-btn bg-color-dark" type="submit" />
              </form>  
            </div>
        </section>
    );
};

export default MakeAdmin;