import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png';
import { useAuth } from '../../../Login/UseAuth';



const Navbar = () => {
    const auth =useAuth();
    return (
        <nav class="navbar  navbar-expand-lg navbar-light ">
          <Link class="navbar-brand ml-5 " href="#">
              <img style={{width:'160px'}} className="img-fluid" src={logo} alt=""/>
          </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-5">
            <li class="nav-item active">
                <Link class="nav-link mr-4" >Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link mr-4" >Our Portfolio</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link mr-4" >Our Team</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link  mr-4" >Contact Us</Link>
            </li>
            <li class="nav-item">
                <Link to="/login" class=" btn pl-4 pr-4  main-btn mr-4" >{
                    auth.user ? <span>Sign Out</span> : <span> Sign In </span>
                } </Link>
            </li>
            {
                auth.user && 
                <li class="nav-item">
                    
                   <span style={{fontSize:'20px'}} className="color-main" > {auth.user.name} </span>
                   <img className="img-fluid rounded-circle z-depth-2 " style={{height:'35px'}} src={auth.user.photo} alt=""/>
            </li>
            }
            
            
            
            </ul>
            
        </div>
    </nav>
    );
};

export default Navbar;