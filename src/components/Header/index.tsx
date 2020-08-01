
import styled from 'styled-components';

export const Header = styled.header`  
    background-color: var(--color-gray-light);
    padding: 20rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    @media(max-width: 800px) {
        padding: 15rem 16rem;  
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

// ${container};
//     @media(max-width: 800px) {
//         justify-content: center;
//         & > ${Logo} {
//             height: 35px;
//         }
//     }