import styled from '@emotion/styled';

export const MainSection = styled.div`
    width: 100%;
    height: 88%;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: white;
    bottom: 0;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    @media (min-width: 820px) {
        width: 100%;
        height: 90%;
    }
    overflow: hidden; 
`;

export const PageTitle = styled.div`
    font-size: 20px;
    color: black;
    font-weight: 700;
    margin-top: 5%;
    font-family: "Pretendard";
`


export const SubGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: flex-start; 
    padding: 0 5% 0 5%;
`;

export const SubTitle = styled.div`
    font-size: 22px;
    color: black;
    font-weight: 700;
    font-family: "Pretendard";
    text-align: left;
    align-self: flex-start;
    margin-bottom: 20px;
    margin-top: 10%;
`;

export const InfoGroup = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between; /* 가로 양 끝에 배치 */
    align-items: center; /* 수직 가운데 정렬 */
    width: 100%; /* 부모 요소 너비를 차지하도록 설정 */
`

export const InfoText = styled.div`
    font-size: 16px;
    color: black;
    font-weight: 700;
    font-family: "Pretendard";
    width: auto;
`;

export const InfoEditGroup = styled.div`
    display: flex;
    flex-direction: column;

`;

export const InfoWrite = styled.input`
    position: relative;
    margin-bottom:5px;
    bottom: 0;
    border: none;   
    outline: none;  
    width: 250px;
    height: 30px;            
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 500;
    font-family: "Pretendard";
`;

export const InfoLine = styled.div`
    padding: 0;
    width: 90%;
    height: 1px;
    background: #D9D9D9;
`

export const UpdateBtn = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background: #496BEA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    color: #ffffff;
    font-weight: 700;
    font-family: "Pretendard";
    border: none;   
    outline: none;  
    margin: 0 auto; 
    margin-top: 10%;
`;

export const TextGroup = styled.div`
    width: 100%; /* 원하는 너비 */
    max-height: 30vh; 
    overflow-y: auto; 
    box-sizing: border-box;
    padding: 5% 0 5% 0;
    // background: gray;

`

export const BeforeContent = styled.div`
    padding: 30px 10px 30px 10px;
    background: #ffffff;
    border-radius: 10px;
    margin: 10px 3px 0 3px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

`



