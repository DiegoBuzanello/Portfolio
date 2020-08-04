import React from 'react';
import { HomeApp } from '../../components/Home';
import { Link } from 'react-router-dom';
import Image from '../../assets/img/main-ilust.svg';
import projects from '../../services/projects';


interface Item {
    id: number;
    name: string;
    url: string;
    text: string;
}


const Home = () => {
    return (
        <>
            <HomeApp>
                <div>
                    {projects.map(item => (
                        <div>
                            <Link
                                key={item.id}
                                to={`/projects/${item.id}`}
                                className="test"
                            >
                                <h2>{item.name}</h2>
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
            </HomeApp>
        </>
    );
}

export default Home;
