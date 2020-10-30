import React from 'react';

const OrderedServiceItem = ({service}) => {
    console.log(service)
    return (
        <div className="col-md-4" >
            <img style={{height:'50px'}} className="img-fluid mb-3 " src={service.img} alt=""/>
            <h4>{service.orderInfo.serviceName} </h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus nemo accusamus exercitationem nesciunt sed sunt minus debitis, excepturi nihil quae. </p>
        </div>
    );
};

export default OrderedServiceItem;