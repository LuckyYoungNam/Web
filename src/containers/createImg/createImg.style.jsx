import styled from "@emotion/styled"
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
export const Wrapper = styled.div`
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    background: #496BEA;
    position: relative; /* Logo를 가운데 배치하기 위한 기준점 설정 */
    display: flex;
    justify-content: flex-start;
    @media (min-width: 820px) {
        width: 50vw;
        height: 100vh;
    }
    @media (max-width: 820px) {
        width: 100vw;
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
    justify-content: center;
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
    gap: 50px;
`
export const ImageWrapper = styled.div`
    width: 350px;
    height: 300px;
    border: 5px solid rgba(244, 244, 244, 0.9);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3vh;
    align-items: center;
`
export const PlusIcon = styled.img`
    width: 40%; /* 아이콘 크기 조절 */
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
    margin-bottom: 3vh;
    position: relative;
    z-index:33;
    min-height: 10vh; /* 최소 높이 설정 */
    @media (min-width: 820px) {
        min-height: 20vh; /* 더 큰 화면에서는 큰 높이를 부여 */
    }
`;
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

export const RegionText = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: ${getRandomColor()};
`;

export const KeywordText = styled.div`
    font-size: 22px;
    margin-top: 10px;
    font-weight: bold;
    color: ${getRandomColor()};
`;
export const TextOverlay = styled.div`
    position: absolute;
    top: 40vh;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
export const SaveBtn = styled.button`
    background-color: #4CAF50; /* 녹색 배경 */
    color: white; /* 흰색 텍스트 */
    padding: 10px 20px; /* 버튼의 패딩 */
    font-size: 16px; /* 텍스트 크기 */
    border: none; /* 테두리 제거 */
    border-radius: 5px; /* 약간의 둥근 모서리 */
    cursor: pointer; /* 마우스 커서 변경 */
    transition: background-color 0.3s ease; /* 배경색 전환 효과 */

    &:hover {
        background-color: #45a049; /* 호버 시 배경색 변경 */
    }

    &:active {
        background-color: #3e8e41; /* 클릭 시 배경색 변경 */
    }

    &:disabled {
        background-color: #ccc; /* 비활성화 시 배경색 변경 */
        cursor: not-allowed; /* 비활성화 시 커서 변경 */
    }
`;
