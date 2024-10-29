import * as S from "./createImg.style";
import useStore from "../../store/useStore";
const CreateImgUI = ({image,handleImageUpload}) => {
    const { goToHome } = useStore();
    return (
        <S.Wrapper>
            <S.BannerGroup>
                <S.HomeIcon src="/homeIcon.png" onClick={goToHome}/>
                <S.Logo>홍보사원, 영남이</S.Logo>
            </S.BannerGroup>
            <S.ContentWrapper>
                <S.MainImg src="/createImg.png" />
                <S.ImageWrapper onClick={() => document.getElementById('imageInput').click()}>
                    {image ? ( // 이미지가 있으면 이미지 표시
                        <S.UploadedImage src={image} alt="Uploaded" />
                    ) : (
                        <S.IconWrapper>
                            <S.PlusIcon
                                src="/plusIcon.png"
                                onClick={() => document.getElementById('imageInput').click()} // 아이콘 클릭 시 파일 입력 활성화
                            />
                            <S.Description>게시글의 대표사진으로<br />사용할 사진을 추가해보세요!</S.Description>
                        </S.IconWrapper>
                    )}
                    <S.HiddenInput
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        onChange={handleImageUpload} // 이미지 업로드 핸들러
                    />
                </S.ImageWrapper>
                <S.ButtonGroup>
                    <S.Label>대표 사진을 꾸며보세요.</S.Label>
                    <S.AddBtn>문구 추가하기</S.AddBtn>
                </S.ButtonGroup>
            </S.ContentWrapper>
        </S.Wrapper>
    );
};

export default CreateImgUI;