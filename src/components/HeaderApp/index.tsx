import React from 'react';

import { Wrapper } from '../../tools/Wrapper';
import { IconContext } from "react-icons";
import { AiOutlineDownload } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import Logo from '../Logo';

import './styles.css';

class HeaderApp extends React.Component {
    render() {
        return (
            <header id="header-component">
                <Wrapper>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <a target="_blank" rel="noopener noreferrer" href="https://resume.io/r/9o9vSrMC0">
                        <Button>
                            <IconContext.Provider value={{ size: "3.5rem", style: { paddingRight: '10px' } }}>
                                <div>
                                    <AiOutlineDownload />
                                </div>
                            </IconContext.Provider>
                            CV
                    </Button>
                    </a>
                </Wrapper>
            </header>
        );
    }
}

export default HeaderApp;