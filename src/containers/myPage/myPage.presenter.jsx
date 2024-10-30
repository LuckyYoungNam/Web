import * as S from "./myPage.style";
import * as C from "../createText/createText.style";
import useStore from "../../store/useStore";

const MyPageUI = () => {
    const { goToHome } = useStore();
    return (
        <C.Wrapper>
            <C.Header>
                <C.MenuIcon src="/menu.png" onClick={ goToHome }></C.MenuIcon>
                <C.Logo>홍보사원, 영남이</C.Logo>
            </C.Header> 
            <C.MainSection>
                <C.PageTitle>마이페이지</C.PageTitle>
                <S.SubGroup>
                    <S.SubTitle>회원 정보를<br/>수정해 주세요.</S.SubTitle>
                    <S.InfoGroup>
                        <S.InfoText>네이버 블로그 아이디</S.InfoText>
                        <S.InfoWrite placeholder="아이디를 입력하세요"></S.InfoWrite>
                        <S.InfoLine></S.InfoLine>
                    </S.InfoGroup>
                    <S.SubTitle>이전에 생성한 <br/>홍보글 확인하기</S.SubTitle>
                    <S.TextGroup>
                        <S.BeforeContent></S.BeforeContent>
                    </S.TextGroup>
                </S.SubGroup>
                <S.SubmitBtn>저장하기</S.SubmitBtn>
            </C.MainSection>
        </C.Wrapper>

    )
}

export default MyPageUI;