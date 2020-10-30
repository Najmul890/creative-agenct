import React, { useEffect, useState } from 'react';
import Feedback from './Feedback';
import PostReviews from './PostReviews';

const ClientsFeedback = () => {
    const [feedbacks, setFeedbacks] =useState([]);
            useEffect(()=>{
            fetch('http://localhost:5000/reviews')
            .then(res=>res.json())
            .then(data=> setFeedbacks(data))
        },[])    

    return (
        <section style={{padding:'100px 100px'}} className="container-fluid  ">
            <h2 style={{fontSize:'40px'}} className="text-center color-dark ">Clients <span style={{color:'#3F760B'}} >FeedBack</span></h2>
            <div className=" row pt-5 mt-5">
                {
                    feedbacks.map(feedback=> <Feedback feedback={feedback} ></Feedback> )
                }
            </div>
            {/* <PostReviews></PostReviews> */}
        </section>
    );
};

export default ClientsFeedback;