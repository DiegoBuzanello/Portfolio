import styled from 'styled-components';

export const Button = styled.button`
    padding: 2rem 12rem;
    background-color: var(--color-primary-medium);
    color: var(--color-gray-light);
    border-radius: 5px;
    border: 1px solid var(--color-primary-medium);
    font-size: 16rem;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
`;

export const ButtonSecondary = styled.button`
    padding: 12rem 30rem;
    color: var(--color-primary-medium);
    border-radius: 10px;
    border: 1px solid var(--color-primary-medium);
    font-size: 16rem;
    cursor: pointer;
    text-decoration: none;
`;

export const ButtonTertiary = styled.button`
    padding: 12rem 30rem;
    color: var(--color-primary-medium);
    border: none;
    font-size: 16rem;
    cursor: pointer;
    text-decoration: none;
`;


