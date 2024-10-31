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
    margin-top: 12%;
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
    margin-top: 15%;
`;

export const InfoGroup = styled.div`
    margin-top: 10px;
    width: 100%;
`

export const InfoText = styled.div`
    font-size: 16px;
    color: black;
    font-weight: 700;
    font-family: "Pretendard";
`;

export const InfoEditGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: space-btween; 

`;

export const InfoWrite = styled.input`
    position: relative;
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
    width: 70%;
    height: 1px;
    background: #D9D9D9;
`

export const UpdateBtn = styled.button`
    padding: 5px 10px 5px 10px;
    background: #D9D9D9;
    border: none;   
    outline: none;  
    color: #ffffff;
    border-radius: 3px;
    width: 50px;
    font-weight: 500;
    font-family: "Pretendard";
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



