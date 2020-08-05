


import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/img/main-ilust.svg';
import projects from '../../services/projects';



import './styles.css';

const Fade = require('react-reveal/Fade');

const Home = () => {
    return (
        <Fade delay={400}>
            <main>
                
                <div>
                
                    {projects.map(item => (
                        
                        <div key={item.id}>
                            
                            <Link

                                to={`/projects/${item.id}`}
                                className="test"
                            >
                                
                                <h2 key={item.id}>{item.name}</h2>
                                
                                
                            </Link>
                            
                            <div className="project-img">
                                <img src={item.details.img} alt="" />
                            </div>
                            
                        </div>
                        
                    ))}
                    
                </div>
                
                <div className="image">
                    <img src={Image} alt="" />
                </div>
                
                
            </main>
            </Fade>

    );
}

export default Home;