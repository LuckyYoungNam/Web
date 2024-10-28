import styled from '@emotion/styled';
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
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
    justify-content: center;
    align-items: center;
    gap: 5px;
`
export const Title = styled.div`
    font-size: 48px;
    color: black;
    font-weight: 500;
    font-family: "YoonChildfundkoreaDaeHan";
`

export const SubTitle = styled.div`
    font-size: 18px;
    color: black;
    font-weight: 500;
    font-family: "Pretendard";
`

export const Logo = styled.img`
    width: 40%;
    height: auto;
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