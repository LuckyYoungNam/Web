import styled from '@emotion/styled';

// createText
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background: #496BEA;
    @media (min-width: 820px) {
        width: 820px;
    }
`;

export const Header = styled.div`
    width: 100vw;
    height: 75px;
    display: flex;
    position: fixed;
    top: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (min-width: 820px) {
        width: 820px;
    }
`;

export const MenuIcon = styled.img`
    width: 28px;
    height: auto;
    position: absolute;
    left: 0;
    margin: 22px 0 0 20px;
    top: 0;
    
    
`;

export const Logo = styled.div`
    font-size: 28px;
    color: #ffffff;
    display: flex;
    font-weight: 500;
    font-family: "YoonChildfundkoreaDaeHan";
}
`;

export const MainSection = styled.div`
    width: 100vw;
    height: calc(100vh - 75px);
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border-top-left-radius: 30px;  
    border-top-right-radius: 30px;
    margin-top: 75px;
    @media (min-width: 820px) {
        width: 820px;
    }
`;


export const PageTitle = styled.div`
    font-size: 20px;
    color: black;
    font-weight: 700;
    margin-top: 20px;
    font-family: "Pretendard";
    
`;

export const createTextPad = styled.img`
    margin-top: 50px;
    margin-left: 12px;
`;

export const TextArea = styled.textarea`
    margin-top: 180px;
    font-size: 18px;
    font-weight: 500;
    font-family: "Pretendard";
    width: 300px;
    height: 250px;
    border: none; 
    outline: none;
    position: absolute;
    background: transparent;

    
`;

export const NextBtn = styled.div`
    // background: #496BEA;
    font-size: 18px;
    color: #121212;
    font-weight: 700;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    // padding: 0 30px 15px 40px;
    font-family: "Pretendard";
    margin-left: 180px;
    
`;

export const Content = styled.div`
    margin-top: 60px;
    font-size: 18px;
    color: #121212;
    font-weight: 700;
    font-family: "Pretendard";
`;

export const Group = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const FaceImg = styled.img`
    width: 90px;
    height: auto;
`;

export const Script = styled.div`
    font-size: 20px;
    color: gray;
    font-family: "Pretendard";

`;


// resultText
export const ContentGroup = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


