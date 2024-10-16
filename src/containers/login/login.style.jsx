import styled from '@emotion/styled';
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #FF6640;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 820px) {
        width: 820px;
    }
`
export const Group = styled.div`
    display:flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 200px;
`
export const Title = styled.div`
    font-size: 48px;
    color: white;
    font-weight: 500;
    font-family: "Gugi";
`

export const Logo = styled.img`
    width: 100%;
    height: auto;
    margin-left:
`
export const LoginBtn = styled.button`
   width: 70%;
   height: 5%;
   padding: 0px 40px;
   background: #FEE500;
   border: none;
   border-radius: 12px;
   cursor: pointer;
   display:flex;
   gap: 40px;
   justify-content:center;
   align-items: center;
   &:hover {
      opacity: 0.8;
   }
`;

export const LoginContent = styled.div`
font-size: 24px
font-weight: 700;
font-family: "noto sans";
`