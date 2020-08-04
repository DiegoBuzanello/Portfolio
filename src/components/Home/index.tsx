
import styled from 'styled-components';

export const HomeApp = styled.main`  
    font-size: 3rem;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    h2 {
        max-width: 400px;
        padding: 2rem;
        width: 400px;
        font-size: 0.7rem;
        transition: 0.3s;
    }
    a {
        text-decoration: none;
        color: gray;
    }
    h2:hover {
        background-color: #f0f0f0;
        color: black;
    }
    img {
        width: 100%;
        height: auto;
        max-width: 450px;
    }
    .project-img img {
        opacity: 0;
        place-items: center;
        top: 50%;
        left: 40%;
        transform: translate(-50%, -50%);
        z-index: -100;
        transition: 1s;
        position: absolute;
    }
    .test:hover + .project-img img {
        opacity:0.5;
    }
`;