import React from 'react';
import Brand from '../Brand/Brand';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Contact from '../Contact/Contact';
import Header from '../Header/Header/Header';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import Services from '../Services/Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Brand></Brand>
            <Services></Services>
            <ProjectsSection></ProjectsSection>
            <ClientsFeedback></ClientsFeedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;