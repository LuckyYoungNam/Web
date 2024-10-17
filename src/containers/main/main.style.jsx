import styled from "@emotion/styled"
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 820px) {
        width: 820px;
    }
`
export const Header = styled.div`
    width: 100vw;
    height: 30vh;
    background: #FF6640;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    box-shadow: 2px 2px 7px 0 rgba(0, 0, 0, 0.5);
    text-align: center;
`

export const MainLogo = styled.img`
    width: 35%;
    height: 20%;
    margin-top: 2vh;
`