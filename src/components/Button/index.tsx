import styled from 'styled-components';

export const Button = styled.button`
    padding: 0.4rem 1.2rem;
    background-color: var(--color-primary-medium);
    color: var(--color-gray-light);
    border-radius: 5px;
    border: 1px solid var(--color-primary-medium);
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: 0.2s;

    &:hover {
        opacity: 0.8;
    }
    
`;

export const ButtonSecondary = styled.button`
    padding: 1rem 3rem;
    color: var(--color-primary-medium);
    border-radius: 10px;
    border: 1px solid var(--color-primary-medium);
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        opacity: 0.8;
    }
`;

export const ButtonTertiary = styled.button`
    color: var(--color-gray-dark);
    background-color: transparent;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        opacity: 0.8;
    }
`;


