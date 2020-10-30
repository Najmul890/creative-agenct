import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../Login/UseAuth';
import Sidebar from '../Sidebar/Sidebar';


const OrderReview = () => {
    const auth= useAuth();
    const history=useHistory();

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
                const newReview= {...auth.user, img:auth.user.photo, reviewInfo:data  };
        
                fetch('https://powerful-temple-34845.herokuapp.com/addReview', {
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(newReview)
            })
            .then(res=>res.json())
            .then(data=>{
                
                alert('Thanks For Review Us');
                history.push('/')          
            })
    }
    return (
        <div className="container-fluid" >
            <div className="row justify-content-between ">
                <h4>Post a review</h4>
                <p> {auth.user.name} </p>
            </div>
            <div className="row">
            <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
                
                <input value={auth.user.name} name="name" ref={register({ required: true })} /> 
                {errors.name && <span className="text-danger ml-2 " >This field is required</span>} <br/> <br/>

                <input name="companyName" placeholder="Company's Name Designation"  ref={register({ required: true })} />
                {errors.companyName && <span className="text-danger ml-2 " >This field is required</span>} <br/> <br/>

                

                <input name="description" placeholder="Description"  ref={register({ required: true })} /> 
                {errors.description && <span className="text-danger ml-2 " >This field is required</span>} <br/> <br/> 

                
      
                <input className="main-btn bg-color-dark" type="submit" />


              </form> 
            </div>
        </div>
    );
};

export default OrderReview;