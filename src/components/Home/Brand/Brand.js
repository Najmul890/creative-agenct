import React from 'react';
import slackBrand from '../../../images/logos/slack.png';
import googleBrand from '../../../images/logos/google.png';
import uberBrand from '../../../images/logos/uber.png';
import netflixBrand from '../../../images/logos/netflix.png';
import airbnbBrand from '../../../images/logos/airbnb.png';
import './Brand.css';

const Brand = () => {
    return (
        <section className="container-fluid brand-sec  ">
            <div className="row">
                <div className="col-md-2 ml-4">
                    <img className="img-fluid" src={slackBrand} alt=""/></div>
                <div className="col-md-2 ml-4">
                    <img className="img-fluid" src={googleBrand} alt=""/></div>
                <div className="col-md-2 ml-4">
                    <img className="img-fluid" src={uberBrand} alt=""/></div>
                <div className="col-md-2 ml-4">
                    <img className="img-fluid" src={netflixBrand} alt=""/></div>
                <div className="col-md-2 ml-4">
                    <img className="img-fluid" src={airbnbBrand} alt=""/></div>
            </div>
        </section>
    );
};

export default Brand;