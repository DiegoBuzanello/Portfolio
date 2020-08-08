import React from 'react';

import './styles.css';

import projects from '../../services/projects';
const Fade = require('react-reveal/Fade');

const Home = () => {
    let delayShowProject = 0;

    return (

        <main id="main-page">
            <ul>
                {projects.map(project => 
                {
                    const imgProject = require(`../../assets/img/${project.img}`);

                    return (
                        <div key={project.id}>
                            <a  target="_blank" rel="noopener noreferrer" href={project.url}>
                                <Fade delay={delayShowProject = delayShowProject + 300}>
                                    <li>{project.name}</li>
                                    <p>{project.subtitle}</p>
                                </Fade>
                            </a>
                            <div className="project-image">
                                    <img src={imgProject} alt={ project.name } /> 
                            </div>
                        </div>
                    )
                }
                )}
            </ul>
            
        </main>





    );
}

export default Home;