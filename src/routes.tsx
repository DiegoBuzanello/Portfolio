import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Header, Wrapper } from './components/Header';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Logo from './components/Logo';
import { Button, ButtonTertiary } from './components/Button';

import { Footer } from './components/Footer';
import { AiOutlineWhatsApp, AiFillGithub, AiOutlineMail, AiOutlineDownload } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header>
                <Wrapper>
                    <Link to="/">
                        <Logo />
                    </Link>

                    <Button>
                        <IconContext.Provider value={{ size: "2em", style: { paddingRight: '0.5em' } }}>
                            <div>
                                <AiOutlineDownload />
                            </div>
                        </IconContext.Provider>
                        CV

                        </Button>
                </Wrapper>
            </Header>
            <Route component={Home} exact path="/" />
            <Route component={Project} path="/create-point" />
            <Route component={About} path="/about" />

            <Footer>
                <Wrapper>
                    <IconContext.Provider value={{ size: "20em", style: { paddingRight: '12em' }, className: "global-class-name" }}>
                        <div>
                            <AiOutlineWhatsApp />
                            <FaLinkedinIn />
                            <AiFillGithub />
                            <AiOutlineMail />
                        </div>
                    </IconContext.Provider>
                    <Link to="/about">
                        <ButtonTertiary>ABOUT</ButtonTertiary>
                    </Link>



                </Wrapper>
            </Footer>
        </BrowserRouter>
    );
}

export default Routes;