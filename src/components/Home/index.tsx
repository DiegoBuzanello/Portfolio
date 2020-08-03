
import styled from 'styled-components';

export const HomeApp = styled.main`  
    font-size: 30rem;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
        max-width: 400px;
        padding: 0.8em 0;
        width: 400px;
        font-size: 0.8em;
        transition: 0.3s;
    }
    a {
        text-decoration: none;
        color: gray;
    }
    h2:hover {
        background-color: gray;
    }
    img {
        width: 100%;
        height: auto;
    }
`;