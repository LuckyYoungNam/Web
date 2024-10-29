import styled from '@emotion/styled';
import { keyframes } from 'styled-components';


export const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    visibility: visible;
`;


// resultAnimation
export const Motion = styled.div`
    margin-top: 100px;
    margin-bottom:50px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;

`

const moveUp = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-100px); /* 위로 100px 이동 */
    }
`;

export const DocumentFront = styled.img`
    position: absolute;
    margin-top: 30px;
    cursor: pointer;

`
export const DocumentPaper = styled.img`
    position: absolute;
    margin-top: 10px;
    transition: transform 1s ease;
    transform: ${({ animate }) => (animate ? 'translateY(-100px)' : 'translateY(0)')};

`;

export const DocumentBack = styled.img`

`


// resultDisplay
export const resultImg = styled.img`
    width: 330px;
    height: auto;
`;

export const resultContent = styled.div`
    border: 3px solid #D8ECFF;
    border-radius: 7px;
    width: 330px;
    height: 350px;
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* 패딩과 보더 포함 */
`;

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
    margin-top: 80px;

`;

export const FunctionGroup = styled.div`
    width: 320px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
`;

export const IconGroup = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const UpdateBtn = styled.button`
    text-decoration: underline;
    background: transparent;
    border: none;   
    outline: none;  
    font-size: 16px;
    color: black;
    font-weight: 700;
    font-family: "Pretendard";

`

export const FunctionIcon = styled.i`
`