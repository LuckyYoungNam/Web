import styled from '@emotion/styled';
export const Wrapper = styled.div`
    padding: 30px 30px;
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
    height: 40%;
    @media (min-width: 820px) {
        width: 10vw;
        height: 25vh;
    }
`
export const LoginBtn = styled.button`
   width: 70%;
   height: 6%;
   padding: 0px 40px;
   background: #FEE500;
   border: none;
   border-radius: 12px;
   cursor: pointer;
   display:flex;
   gap: 15px;
   justify-content:center;
   align-items: center;
   &:hover {
      opacity: 0.8;
   }
       @media (min-width: 820px) {
        width: 20vw;
        height: 5vh;
    }
`;

export const LoginContent = styled.div`
font-size: 15px;
font-family: "noto sans";
`