import styled from "@emotion/styled"
export const Wrapper = styled.div`
    width: 800px;
    height: 900px;
    background: #496BEA;
    position: relative; /* Logo를 가운데 배치하기 위한 기준점 설정 */
    display: flex;
    justify-content: flex-start;
    @media (max-width: 500px) {
        width: 100vw;
        height: 900px;
    }
    @media (min-width: 500px) {
        width: 500px;
        height: 900px;
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
    width: 40px;
    height: 40px;
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
    margin-bottom: 30px;
    position: relative;
    z-index:auto;
    min-height: 100px;
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
    width: 300px;
    height: 50px;
    background: #D9D9D9;
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
        width: 300px;
        height: 50px;
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
    font-family: 'PartialSansKR-Regular';
    text-shadow: 
        -3px -3px 0 #000, 
         3px -3px 0 #000, 
        -3px  3px 0 #000, 
         3px  3px 0 #000,
        -3px  0   0 #000, 
         3px  0   0 #000,
         0   -3px 0 #000, 
         0    3px 0 #000,
        -4px -4px 0 #000,
         4px -4px 0 #000,
        -4px  4px 0 #000,
         4px  4px 0 #000; /* 매우 굵은 검은 윤곽선 */
    color: ${(props) => props.regionTextColor};
    @media (min-width: 340px) {
            font-size: 24px;
    }
`;

export const KeywordText = styled.div`
    font-size: 18px;
    margin-top: 10px;
    font-weight: 500;
    font-family: 'SBAggroB';
    color: ${(props) => props.keywordTextColor};
`;


export const TextOverlay = styled.div`
    position: absolute;
    top: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;