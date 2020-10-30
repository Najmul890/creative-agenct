import React from 'react';

import img from '../../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main>
            <div className="row">
            <div style={{padding:'100px 100px 10px 100px'}} className="col-md-5">
                <h2 style={{fontSize:'45px'}} className="color-dark mb-4 " >Let's Grow Your Brand To The Next Level</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sed eligendi obcaecati eveniet praesentium autem?</p>
                
                   <button to="/dashboard" className="btn  main-btn pl-5 pr-5 mt-3">Hire Us</button>
               
            </div>
            <div className="col-md-7 p-5 ">
                <img className="img-fluid" style={{height:'400px'}} src={img} alt=""/>
            </div>
            </div>
        </main>
    );
};

export default HeaderMain;