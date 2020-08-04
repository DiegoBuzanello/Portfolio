import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectsDetail from './pages/ProjectsDetail';
import About from './pages/About';

import { Header, Wrapper } from './components/Header';
import Logo from './components/Logo';
import { Button, ButtonTertiary } from './components/Button';
import { Footer } from './components/Footer';

import { IconContext } from "react-icons";
import { AiFillGithub, AiOutlineDownload } from 'react-icons/ai';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import projects from './services/projects';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header>
                <Wrapper>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <a target="_blank" rel="noopener noreferrer" href="https://resume.io/r/9o9vSrMC0">
                        <Button>
                            <IconContext.Provider value={{ size: "2em", style: { paddingRight: '0.5em' } }}>
                                <div>
                                    <AiOutlineDownload />
                                </div>
                            </IconContext.Provider>
                            CV
                        </Button>
                    </a>
                </Wrapper>
            </Header>

            <Route component={Home} exact path="/" />
            <Route component={Projects} exact path="/projects" />


            {projects && (
                <Route path="/projects/:gistId" render={({ match }) => (
                    <ProjectsDetail project={projects.find((g: any) => g.id === match.params.gistId)} />
                )} />
            )}


           



            <Route component={About} path="/about" />

            <Footer>
                <Wrapper>
                    <IconContext.Provider value={{ size: "3rem", style: { paddingRight: '12rem' }}}>
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
                </Wrapper>
            </Footer>
        </BrowserRouter>
    );
}

export default Routes;