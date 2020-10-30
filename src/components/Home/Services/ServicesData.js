import React from 'react';
import webDesignIcon from '../../../images/icons/service1.png';
import graphicDesignIcon from '../../../images/icons/service2.png';
import webDevIcon from '../../../images/icons/service3.png';


const servicesData = [
    {
        id:'CA101',
        iconImg:webDesignIcon,
        serviceName:'Web & Mobile Design',
    },
    {
        id:'CA102',
        iconImg:graphicDesignIcon,
        serviceName:'Graphic Design',
    },
    {
        id:'CA103',
        iconImg:webDevIcon,
        serviceName:'Web Development',
    }

]

const ServicesData = () => {
//     const handleAddServices =()=>{
//         fetch('https://powerful-temple-34845.herokuapp.com/addServices', {
//         method:'POST',
//         headers: {'Content-Type':'application/json'},
//         body: JSON.stringify(servicesData)
//       })
//       .then(res=>res.json())
//       .then(data=>{
//        console.log(data)
//       })
//   }
    
    return (
        <div className="container p-5">
            {/* <button onClick={handleAddServices} className="btn btn-primary">
                Add Services
            </button> */}
        </div>
    );
};

export default ServicesData;