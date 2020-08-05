


import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/img/main-ilust.svg';
import projects from '../../services/projects';



import './styles.css';


const Fade = require('react-reveal/Fade');

const Home = () => {
    return (

        <main>
            <div>
                {projects.map(item => (
                    <div key={item.id}>
                        <Link
                            to={`/projects/${item.id}`}
                            className="test"
                        >
                            <div className="projects-blocks">
                                <p className="order">{item.order}.</p>
                                <h2 className="project-name">{item.name}</h2>
                                <h3 className="project-tecs">APPP AP PA PA </h3>
                            </div>

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


    );
}

export default Home;