import React from 'react';

import { Wrapper } from '../../tools/Wrapper';
import ButtonApp from '../../components/ButtonApp';

import './styles.css';

class HeaderApp extends React.Component {
    render() {
        return (
            <header id="header-component">
                <Wrapper>
                    <a target="_blank" rel="noopener noreferrer" href="https://resume.io/r/9o9vSrMC0">
                        <ButtonApp 
                            title="CV LINK" 
                            type="button-secondary" 
                        >
                        </ButtonApp>
                    </a>
                </Wrapper>
            </header>
        );
    }
}

export default HeaderApp;