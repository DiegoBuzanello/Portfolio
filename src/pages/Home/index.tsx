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

    console.log(projects);

    // function handleSelectItem(id: number) {
    //     const alreadySelected = selectedItems.findIndex(item => item === id);

    //     if (alreadySelected >= 0) {
    //         const filteredItems = selectedItems.filter(item => item !== id);

    //         setSelectedItems(filteredItems);
    //     } else {
    //         setSelectedItems([ ...selectedItems, id]);
    //     } 
    // }

    return (
        <>
            <HomeApp>
                <div>
                    {projects.map(item => (
                        <Link
                            key={item.id}
                            to={`/projects/${item.id}`}
                        >
                            <h2>{item.name}</h2>
                        </Link>
                    ))}
                </div>
                <div>
                    <img src={Image} alt="" />
                </div>
            </HomeApp>
        </>
    );
}

export default Home;
