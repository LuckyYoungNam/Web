import styled from "@emotion/styled"
export const Wrapper = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const Categories = styled.div`
    width: 100%;
    height: auto;
    font-size: 24px;
    font-family: Pretendard;
    font-weight: 700;
`
export const DividingLine = styled.div`
    width: 100%;
    height: 15px;
    background: #F5F5F5;
`

export const ContentWrapper = styled.div`
    width: 100%;
    height: auto;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`
export const RegionBtnGroup = styled.div`
    display: flex;
    gap: 20px;
`;

export const Label = styled.div`
    font-size: 18px;
    font-weight: 600;
`
export const RegionButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 100%;
    background: white;
    border: none;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 7px;
    :hover{
        background: #496BEA;
    }
    margin: 10px;   
    color: black;
`
export const KeywordButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 15px;
    background: white;
    border: none;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 7px;
    :hover{
        background: #496BEA;
    }
    margin: 7px;
    color: black;
`

export const AddBtn = styled.button`
    width: 150px;
    height: 30px;
    background: #496BEA;
    font-family: "Pretendard";
    color: white;
    font-size: 12px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 30px
`;