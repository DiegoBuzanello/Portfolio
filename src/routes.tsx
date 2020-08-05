import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectsDetail from './pages/ProjectsDetail';
import About from './pages/About';

import HeaderApp from './components/HeaderApp';
import FooterApp from './components/FooterApp';

import projects from './services/projects';

const Fade = require('react-reveal/Fade');

const Routes = () => {
    return (
        <BrowserRouter>
            <Fade>
                <HeaderApp />
            </Fade>

            <Route component={Home} exact path="/" />
            <Route component={Projects} exact path="/projects" />
            {projects && (
                <Route path="/projects/:gistId" render={({ match }) => (
                    <ProjectsDetail project={projects.find((g: any) => g.id === match.params.gistId)} />
                )} />
            )}
            <Route component={About} path="/about" />
            <Fade delay={1000}>
                <FooterApp />
            </Fade>

        </BrowserRouter>
    );
}

export default Routes;