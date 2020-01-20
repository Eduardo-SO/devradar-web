import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 70px auto 0;

    display: flex;

    @media(max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`
