import * as S from "./createImg.style";
import PhraseSelectPage from "../phraseSelect/phraseSelecet.container"
import Modal from 'react-modal';
const CreateImgUI = ({ image, handleImageUpload, region, keywords, handleAddText, isClick, handleSaveImage, isModalOpen, setIsModalOpen, getContrastingRandomColor, getDominantColor,
    goToHome, imageRef, colors,
    onKeywordsSelect,closeModal,handleReset
}) => {
    
    const userData = JSON.parse(localStorage.getItem('userdata')) || {};
    return (
        <S.Wrapper>
            <S.BannerGroup>
                <S.HomeIcon src="/homeIcon.png" onClick={goToHome} />
                <S.Logo>홍보사원, 영남이</S.Logo>
            </S.BannerGroup>
            <S.ContentWrapper>
                <S.Label style={{ fontSize: "32px" }}>대표 사진 만들기</S.Label>
                <S.ImageWrapper
                    onClick={() => {
                        if (!isModalOpen) { // 모달이 열려 있을 때는 이미지 선택 이벤트를 막음
                            document.getElementById('imageInput').click();
                        }
                    }}
                    id="captureArea"
                >
                    {image ? (
                        <>
                            <Modal
                                isOpen={isModalOpen} // 모달 열림 여부를 결정하는 속성
                                onRequestClose={() => setIsModalOpen(false)} // 모달 외부 클릭 또는 ESC 키를 누를 때 모달 닫기
                                style={{
                                    overlay: {
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    },
                                    content: {
                                        width: "500px",
                                        height: "500px",
                                        top: '50%',
                                        left: '50%',
                                        right: 'auto',
                                        bottom: 'auto',
                                        marginRight: '-50%',
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: 101,
                                        borderRadius: "20px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    },
                                }}
                                onClick={(e) => e.stopPropagation()} // 이벤트 전파 중지
                            >
                                <PhraseSelectPage
                                    onKeywordsSelect={onKeywordsSelect}
                                    closeModal={closeModal} />
                            </Modal>

                            <S.UploadedImage ref={imageRef} src={image} alt="Uploaded" />
                            {isClick && (
                                <S.TextOverlay>
                                    <S.RegionText style={{color:"black"}}>{userData.location} 맛집</S.RegionText>
                                    <S.RegionText regionTextColor={colors.regionTextColor}>{userData.businessName}</S.RegionText>
                                    <S.KeywordText keywordTextColor={colors.keywordTextColor}>
                                        {keywords.map((keyword, index) => (
                                            <span key={index}>{keyword} </span>
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
                    <S.Label>{isClick ? "결과를 확인해보세요" : "대표 사진을 꾸며보세요."}</S.Label>
                    <S.AddBtn
                        onClick={isClick ? handleSaveImage : handleAddText}
                        style={{
                            backgroundColor: isClick ? 'black' : '#496BEA',
                        }}
                    >
                        {isClick ? "이미지 저장하기" : "문구 추가하기"}
                    </S.AddBtn>
                    <S.AddBtn onClick={handleReset}>다시 만들기</S.AddBtn>
                </S.ButtonGroup>
            </S.ContentWrapper>
        </S.Wrapper>
    );
};

export default CreateImgUI;