import styled from '@emotion/styled';

// createText
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #496BEA;
    position: relative; /* Logo를 가운데 배치하기 위한 기준점 설정 */
    display: flex;
    justify-content: flex-start;
    @media (min-width: 820px) {
        width: 50vw;
        height: 100vh;
    }
`

export const Header = styled.div`
    width: 100vw;
    height: 80px;
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
    margin: 25px 0 0 20px;
    top: 0;
    
    
`;

export const Logo = styled.div`
    font-size: 28px;
    color: #ffffff;
    display: flex;
    font-weight: 600;
    font-family: "YoonChildfundkoreaDaeHan";
}
`;

export const MainSection = styled.div`
    width: 100%;
    height: 88%;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: white;
    bottom: 0;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    @media (min-width: 820px) {
        width: 100%;
        height: 90%;
    }
`;


export const PageTitle = styled.div`
    font-size: 20px;
    color: black;
    font-weight: 700;
    margin-top: 5%;
    font-family: "Pretendard";
    
`;

export const createTextPad = styled.img`
    margin-left: 12px;
    width: 80vw;
    @media (min-width: 820px) {
        width: 30vw;
    }
    
`;

export const TextArea = styled.textarea`
    font-size: 18px;
    font-weight: 500;
    font-family: "Pretendard";
    width: 300px;
    height: 250px;
    border: none; 
    outline: none;
    position: absolute;
    background: transparent;
    top: 0;
    margin-top: 150px;
    padding: 20px;
    
`;

export const NextBtn = styled.div`
    font-size: 18px;
    color: #121212;
    font-weight: 700;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    font-family: "Pretendard";
    margin-left: 180px;    
`;

// export const ContentGroup = styled.div`
// `

export const Content = styled.div`
    vertical-align: bottom;
    font-size: 16px;
    display: inline-block;
    color: #121212;
    font-weight: 700;
    font-family: "Pretendard";
`;

export const ScriptGroup = styled.div`
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
`;

export const FaceImg = styled.img`
    width: 60px;
    height: auto;
`;

export const Script = styled.div`
    font-size: 13px;
    color: gray;
    font-family: "Pretendard";

`;


// resultText
export const ResultTitle = styled.div`
    font-size: 20px;
    color: black;
    font-weight: 700;
    font-family: "Pretendard";
    
`;

export const ContentGroup = styled.div`
    // margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // @media (min-height: 700px) {
    //     margin-top: 10%;
    // }
`;


