import styled from "@emotion/styled"
export const NaviWrapper = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 50px;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5);
`
export const Group = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
`

export const Icon = styled.img`
    width: 50%;
    height: 50%;
`

export const Label = styled.div`
    font-size: 1rem;
    font-family: "noto sans";
    font-weight: 700;
`