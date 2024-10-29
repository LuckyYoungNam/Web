import * as S from "./createImg.style";
import useStore from "../../store/useStore";

const CreateImgUI = ({ image, handleImageUpload, region, keywords, handleAddText, isClick, handleSaveImage,windowHeight}) => {
    const { goToHome } = useStore();

    return (
        <S.Wrapper>
            <S.BannerGroup>
                <S.HomeIcon src="/homeIcon.png" onClick={goToHome} />
                <S.Logo>홍보사원, 영남이</S.Logo>
            </S.BannerGroup>

            <S.ContentWrapper>
                <S.Label style={{fontSize:"32px"}}>대표 사진 만들기</S.Label>
                <S.ImageWrapper onClick={() => document.getElementById('imageInput').click()} id="captureArea">
                    {image ? (
                        <>
                            <S.UploadedImage src={image} alt="Uploaded" />
                            {isClick && (
                                <S.TextOverlay>
                                    <S.RegionText>{region} 맛집</S.RegionText>
                                    <S.KeywordText>
                                        {keywords.map((keyword, index) => (
                                            <span key={index}>#{keyword} </span>
                                        ))}
                                    </S.KeywordText>
                                </S.TextOverlay>
                            )}
                        </>
                    ) : (
                        <S.IconWrapper>
                            <S.PlusIcon src="/plusIcon.png" />
                            <S.Description>
                                게시글의 대표사진으로<br />사용할 사진을 추가해보세요!
                            </S.Description>
                        </S.IconWrapper>
                    )}
                    <S.HiddenInput
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                </S.ImageWrapper>

                <S.ButtonGroup>
                    {/* isClick 값에 따라 Label과 버튼 스타일 변경 */}
                    <S.Label>{isClick ? "결과를 확인해보세요" : "대표 사진을 꾸며보세요."}</S.Label>
                    <S.AddBtn
                        onClick={isClick? handleSaveImage: handleAddText}
                        style={{
                            backgroundColor: isClick ? 'black' : '#496BEA',
                        }}
                    >
                        {isClick ? "이미지 저장하기" : "문구 추가하기"}
                    </S.AddBtn>
                </S.ButtonGroup>
            </S.ContentWrapper>
        </S.Wrapper>
    );
};

export default CreateImgUI;