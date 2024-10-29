import { Link } from 'react-router-dom';
import * as S from "./myPage.style";
import * as C from "../createText/createText.style";
import useStore from "../../store/useStore";

const MyPageUI = () => {
    const { goToHome } = useStore();
    return (
        <C.Wrapper>
            <C.Header>
                <Link to="/main">
                    <C.MenuIcon src="/menu.png" ></C.MenuIcon>
                </Link>
                <C.Logo>홍보사원, 영남이</C.Logo>
            </C.Header> 
            <C.MainSection>
                <C.PageTitle>마이페이지</C.PageTitle>
                <S.SubGroup>
                    <S.SubTitle>회원 정보를<br/>수정해 주세요.</S.SubTitle>
                    <S.InfoGroup>
                        <S.InfoText>네이버 아이디</S.InfoText>
                        <S.InfoWrite placeholder="아이디를 입력하세요"></S.InfoWrite>
                        <S.InfoLine></S.InfoLine>
                    </S.InfoGroup>
                    <S.InfoGroup>
                        <S.InfoText>인스타그램 아이디</S.InfoText>
                        <S.InfoWrite placeholder="아이디를 입력하세요"></S.InfoWrite>
                        <S.InfoLine></S.InfoLine>
                    </S.InfoGroup>
                    <S.InfoGroup>
                        <S.InfoText>다음 아이디</S.InfoText>
                        <S.InfoWrite placeholder="아이디를 입력하세요"></S.InfoWrite>
                        <S.InfoLine></S.InfoLine>
                    </S.InfoGroup>
                </S.SubGroup>
                <S.SubmitBtn>저장하기</S.SubmitBtn>
            </C.MainSection>
        </C.Wrapper>

    )
}

export default MyPageUI;