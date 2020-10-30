import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

import './Header.css';

const Header = () => {
    return (
        <section className="container-fluid header-sec bg-color-light" >
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </section>
    );
};

export default Header;