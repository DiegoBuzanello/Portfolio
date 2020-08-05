import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectsDetail from './pages/ProjectsDetail';
import About from './pages/About';

import { Header, Wrapper } from './components/Header';
import Logo from './components/Logo';
import { Button, ButtonTertiary } from './components/Button';
import  Footer  from './components/Footer';

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
                            <IconContext.Provider value={{ size: "3.5rem", style: { paddingRight: '10px' } }}>
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
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;