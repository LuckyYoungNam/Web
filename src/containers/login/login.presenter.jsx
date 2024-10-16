import * as S from "./login.style"
const LoginUI = () => {
    return(
        <S.Wrapper>
            <S.Group>
                <S.Logo src="/logo.png"></S.Logo>
                <S.Title>모임<br/>모닝</S.Title>
            </S.Group>
            <S.LoginBtn>
                <img src="/kakaoIcon.png"/>
                <S.LoginContent>카카오톡 로그인</S.LoginContent>
            </S.LoginBtn>
        </S.Wrapper>
    )
}

export default LoginUI;