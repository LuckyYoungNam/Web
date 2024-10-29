import styled from "@emotion/styled"
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
export const BannerGroup = styled.div`
    width: 100%;
    display: flex;
    position: relative; /* HomeIcon과 Logo의 위치를 절대 배치하기 위해 relative 설정 */
    justify-content: flex-start; /* 기본적으로 왼쪽에 정렬 */
    margin-top: 20px;
`;
export const HomeIcon = styled.img`
    width: 10vw;
    height: 4vh;
    margin-top: 5px;
    position: absolute;
    left: 20px; /* HomeIcon을 왼쪽에 고정 */
`;

export const Logo = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%); /* Logo를 가운데 정렬 */
    font-size: 28px;
    font-family: "YoonChildfundkoreaDaeHan";
    color: white;
    font-weight: 600;
`;
export const ContentWrapper = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: white;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    @media (min-width: 820px) {
        width: 100%;
        height: 90%;
    }
`
export const ImageWrapper = styled.div`
    width: 70%;
    height: 40%;
    border: 5px solid rgba(244, 244, 244, 0.9);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative; /* 부모 컨테이너로 설정 */
    overflow: hidden; /* 이미지가 영역을 벗어나지 않도록 */
    top: 16vh;
`;
export const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3vh;
    align-items: center;
`
export const PlusIcon = styled.img`
    width: 20vw; /* 아이콘 크기 조절 */
    height: auto;
    margin-bottom: 10px; /* 아이콘과 설명 사이 여백 */
    object-fit: cover;
`;
export const ButtonGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
export const Label = styled.div`
    font-size: 18px;
    font-weight: 700;
    font-family: "Pretendard";
`
export const Description = styled.div`
    width: 100%;
    font-size: 14px;
    color: #8C8C8C;
    font-family: "Pretendard";
`;

export const AddBtn = styled.button`
    width: 80%;
    height: 7vh;
    background: #496BEA;
    font-family: "Pretendard";
    color: white;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 30px
    @media (min-width: 820px) {
        width: 20vw;
        height: 50vh;
    }
`;

export const UploadedImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 40px;
`;

export const HiddenInput = styled.input`
    display: none;
`;

export const MainImg = styled.img`
    width: 70%;
    height: auto;
    object-fit: cover;
    position: absolute; /* 겹치도록 설정 */
    top: -3.5vh;
    left: 13vw;
    z-index: 1; /* 필요에 따라 z-index를 조정 */
`