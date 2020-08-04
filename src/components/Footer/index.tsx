
import styled from 'styled-components';

export const Footer = styled.footer`  
    background-color: var(--color-gray-light);
    svg {
        color: var(--color-gray-dark);
    }
    svg:hover {
        color: var(--color-black-medium);
    }
    padding: 2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    @media(max-width: 800px) {
        padding: 1rem 1rem;  
    }
`;