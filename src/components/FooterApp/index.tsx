
import React from 'react';

import { Wrapper } from '../../tools/Wrapper';
import { IconContext } from "react-icons";
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ButtonApp from '../ButtonApp';

import './styles.css';

class FooterApp extends React.Component {
    render() {
        return (
            <footer id="footer-component">
                <Wrapper>
                    <IconContext.Provider value={{ size: "3.5rem", className: "media-buttons" }}>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511964330683">
                                <FaWhatsapp />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/diego-buzanello-7355b819b/">
                                <FaLinkedinIn />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/diegobuzanello">
                                <AiFillGithub />
                            </a>
                        </div>
                    </IconContext.Provider>
                    <Link to="/about">
                        <ButtonApp title="About" type="button-tertiary" />
                        {/* <ButtonTertiary>ABOUT</ButtonTertiary> */}
                    </Link>
                </Wrapper>
            </footer>
        )
    };
}

export default FooterApp;