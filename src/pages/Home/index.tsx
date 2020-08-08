


import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/img/main-ilust.svg';
import projects from '../../services/projects';
import ButtonApp from '../../components/ButtonApp';


import './styles.css';


const Fade = require('react-reveal/Fade');

const Home = () => {
    return (

        <main>
            {/* <div className="image">
                <img src={Image} alt="" />
            </div>
            <div className="projects-block">
                <h1>Hi, I'm a web <br /> developer</h1>
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
                <ButtonApp title="Mais projetos" type="button-secondary" />
            </div> */}
            <h2>Hi, <br />I’m a web developer</h2>
            <div className="projects">
                <ul>
                    {projects.map(item => (
                        <Link to={`/projects/${item.id}`}>
                            <li>{item.name}</li>
                        </Link>

                    ))}
                </ul>
            </div>
            
        </main>


    );
}

export default Home;