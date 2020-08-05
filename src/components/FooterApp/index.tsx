
import React from 'react';

import { Wrapper } from '../HeaderApp';
import { IconContext } from "react-icons";
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ButtonTertiary } from '../Button';

import './styles.css';

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer-component">
                <Wrapper>
                    <IconContext.Provider value={{ size: "3.5rem", style: { paddingRight: '10px' } }}>
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
                        <ButtonTertiary>ABOUT</ButtonTertiary>
                    </Link>
                </Wrapper >
            </footer>
        )
    };
}


export default Footer;





// export const Footer = styled.footer`  
//     background-color: var(--color-gray-light);
//     svg {
//         color: var(--color-gray-dark);
//     }
//     svg:hover {
//         color: var(--color-black-medium);
//     }
//     padding: 2rem;
//     position: fixed;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     @media(max-width: 800px) {
//         padding: 1rem 1rem;  
//     }
// `;