import styled from '@emotion/styled';

export const SubGroup = styled.div`
    z-index: 100;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 왼쪽 정렬 */
    justify-content: flex-start; /* 위쪽 정렬 */
`;

export const SubTitle = styled.div`
    font-size: 22px;
    color: black;
    font-weight: 700;
    font-family: "Pretendard";
    text-align: left;
    align-self: flex-start;
    margin-bottom: 20px;
`;

export const InfoGroup = styled.div`
    margin-top: 30px;
`

export const InfoText = styled.div`
    font-size: 16px;
    color: black;
    font-weight: 700;
    font-family: "Pretendard";
`;

export const InfoWrite = styled.input`
    margin-top: 10px;
    padding-top: 10px;
    margin-bottom:5px;
    bottom: 0;
    border: none;   
    outline: none;  
    width: 330px;
    height: 30px;            
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 500;
    font-family: "Pretendard";
`;

export const InfoLine = styled.div`
    padding: 0;
    width: 330px;
    height: 1px;
    background: #D9D9D9;
`
export const SubmitBtn = styled.button`
    width: 250px;
    height: 60px;
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
    margin-top: 190px;

`;