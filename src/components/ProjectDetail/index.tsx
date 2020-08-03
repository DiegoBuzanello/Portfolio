import styled from 'styled-components';

export const ProjectDetail = styled.div`  

    margin: 80px 0;
    padding: 20rem;
    width: 100%;
    height: 100vh;
    font-size: 20.88rem;
    display: inline-flex;
    div.col-8 {
        width: 66.6%;
        background-color: var(--color-gray-light);
        height: 400px;
        margin: 20px;
        border-radius: 20px;
        border: 1px solid var(--color-gray-medium);
        .content {
            padding: 30rem;
        }
        img {
            max-height: 150px;
            width: 100%;
            border-radius: 20px;
        }
    }
    div.col-4 {
        width: 33.3%;
        background-color: var(--color-gray-light);
        height: 400px;
        margin: 20px;
        border-radius: 20px;
        border: 1px solid var(--color-gray-medium);
        .content {
            padding: 30rem;
        }
    }
`;