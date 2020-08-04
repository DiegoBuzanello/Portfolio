import styled from 'styled-components';

export const ProjectDetail = styled.div`  

    margin: 60px 0;
    padding: 2rem;
    width: 100%;
    font-size: 20.88rem;
    display: inline-flex;
    div.col-8 {
        width: 66.6%;
        background-color: white;
        margin: 20px;
        border-radius: 20px;
        border: 1px solid var(--color-gray-medium);
        height: 100%;
        .content {
            padding: 3rem;
        }
        img {
            max-height: 150px;
            width: 100%;
            border-radius: 20px 20px 0 0;
        }
    }
    div.col-4 {
        width: 33.3%;
        background-color: white;
        margin: 20px;
        border-radius: 20px;
        height: 100%;
        border: 1px solid var(--color-gray-medium);
        .content {
            padding: 3rem;
        }
    }
    
`;