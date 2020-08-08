
import React from 'react';

import { Wrapper } from '../../tools/Wrapper';
import ButtonApp from '../ButtonApp';

import './styles.css';

class FooterApp extends React.Component {
    render() {
        return (
            <footer id="footer-component">
                <Wrapper>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/diegobuzanello">
                        <ButtonApp title="GITHUB" type="button-tertiary" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/diego-buzanello/">
                        <ButtonApp title="LINKEDIN" type="button-tertiary" />
                    </a>
                </Wrapper>
            </footer>
        )
    };
}

export default FooterApp;