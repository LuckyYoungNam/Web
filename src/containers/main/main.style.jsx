import styled from "@emotion/styled"
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    @media (min-width: 820px) {
        width: 820px;
    }
`

export const Title = styled.div`
    color: black;
    font-weight: 600;
    font-size: 32px;
    margin-top: 2vh;
    font-family: "YoonChildfundkoreaDaeHan";
`

export const MainImg = styled.img`
    width: 50%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    z-index: 1;
    position: relative;
`;

export const MenuWrapper = styled.div`
    width: 90%;
    flex-grow: 1; /* 이미지 아래 나머지 공간을 채움 */
    position: relative;
    top: -1.5%;
    border: 3px solid silver;
    background-color: white;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F4F4F4;
    border-radius: 20px;
    border:none;
`;

export const Info = styled.div`
    position: relative;
    top: 6%;
    font-size: 20px;
    font-weight: 700; 
    font-family: Pretendard;
`

export const Group = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 30%;
    gap: 20px;
`

export const MainBtn = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background: #EBEFFF;
    border: 2px solid #2C408A;
    border-radius: 9px;
    padding: 15px 30px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 3vh;
`

export const MyPageIcon = styled.img`
    width: 11%;
    height: auto;
`

export const MyPageLabel = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: #2C408A;
`

export const MenuItemLabel = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: white;
`
export const MenuItem = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    font-weight: 700;
    background: #496BEA;
    border:none;
    border-radius: 9px;
    padding: 15px 30px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    gap: 15px;
`
export const ArrowIcon = styled.img`
    width: 10%;
    height: auto;
`
