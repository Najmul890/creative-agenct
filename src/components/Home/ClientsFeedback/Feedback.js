import React from 'react';

const Feedback = ({feedback}) => {
    return (
        <div style={{borderLeft:'1px solid lightGray'}} className="col-md-4 p-5    ">
            
            <div className="row">
                <div className="col-md-3">
                    <img className="rounded-circle z-depth-2 img-fluid" src={feedback.img} alt=""/>
                </div>
                <div className="col-md-9">
                    <h4>{feedback.name} </h4>
                    <p>CEO, {feedback.reviewInfo.companyName} </p>
                </div>
            </div>
            <div className="row ">
                <p>{feedback.reviewInfo.description} </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut animi, possimus itaque reprehenderit nihil totam corporis officiis earum. Ex amet maiores nam magni corrupti.</p>
            </div>
            </div>
        
    );
};

export default Feedback;