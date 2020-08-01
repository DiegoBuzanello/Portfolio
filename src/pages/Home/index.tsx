import React from 'react';
import { HomeApp } from '../../components/Home';
import { Link } from 'react-router-dom';
import Image  from '../../assets/img/main-ilust.svg';

class Home extends React.Component {
    render() {
        return (
            <>
                <HomeApp>
                    <div>
                    <Link to="/create-point">
                            <h2>Projeto 1</h2>
                        </Link>
                        <Link to="/create-point">
                            <h2>Projeto 1</h2>
                        </Link>
                        <Link to="/create-point">
                            <h2>Projeto 1</h2>
                        </Link>
                        <Link to="/create-point">
                            <h2>Projeto 1</h2>
                        </Link>
                    </div>
                        <div>
                            <img src={Image} alt=""/>
                        </div>
                </HomeApp>
            </>
        );
    }

}

export default Home;
