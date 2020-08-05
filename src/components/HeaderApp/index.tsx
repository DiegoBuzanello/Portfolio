
import React from 'react';

class HeaderApp extends React.Component {
    render() {
        return (

        );
    }
}


export default HeaderApp;










import styled from 'styled-components';

export const Header = styled.header`  
    background-color: var(--color-gray-light);
    padding: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    @media(max-width: 800px) {
        padding: 1rem 1rem;  
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`