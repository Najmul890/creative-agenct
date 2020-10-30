import React from 'react';
import client1 from '../../../images/customer-3.png';
import client2 from '../../../images/customer-2.png';
import client3 from '../../../images/customer-1.png';


const reviews= [
    {
        name:'Bria Malone',
        profession:'CEO, Manpol',
        img:client1
    },
    {
        name:'Miriam Barron',
        profession:'CEO, Manpol',
        img:client2
    },
    {
        name:'Nash Patrik',
        profession:'CEO, Manpol',
        img:client3
    }
]

const PostReviews = () => {
//     const handleAddReviews =()=>{
//         fetch('http://localhost:5000/addReviews', {
//         method:'POST',
//         headers: {'Content-Type':'application/json'},
//         body: JSON.stringify(reviews)
//       })
//       .then(res=>res.json())
//       .then(data=>{
//        console.log(data)
//       })
//   }
    return (
        <div>
           {/* <button onClick={handleAddReviews} className="btn btn-success">
               Add Reviews
           </button>   */}
        </div>
    );
};

export default PostReviews;