import * as S from "./main.style"
import useStore from '../../store/useStore'; 
const MainUI = () => {
    const { goToMyPage, goToCreateImg, goToCreateText } = useStore();
    return (
        <S.Wrapper>
            <S.Title>홍보사원, 영남이</S.Title>
            <S.MainImg src="/mainYN.png" />
            <S.MenuWrapper>
                <S.Info>원하는 서비스를 선택해주세요.</S.Info>
                <S.Group>
                    <S.MainBtn onClick={goToMyPage}>
                        <S.MyPageIcon src="/myPageIcon.png" />
                        <S.MyPageLabel>마이 페이지</S.MyPageLabel>
                    </S.MainBtn>
                    <S.MenuItem onClick={goToCreateImg}>
                        <S.MenuItemLabel>대표 사진 만들기</S.MenuItemLabel>
                        <S.ArrowIcon src="/arrow.png"></S.ArrowIcon>
                    </S.MenuItem>
                    <S.MenuItem onClick={goToCreateText}>
                        <S.MenuItemLabel>홍보 글 작성하기</S.MenuItemLabel>
                        <S.ArrowIcon src="/arrow.png"></S.ArrowIcon>
                    </S.MenuItem>
                </S.Group>
            </S.MenuWrapper>
        </S.Wrapper>
    )
}
export default MainUI;