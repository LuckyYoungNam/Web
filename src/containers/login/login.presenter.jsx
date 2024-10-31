import * as S from "./login.style"
const LoginUI = () => {
    const KakaoLogin = () => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
    }
    return (
        <S.Wrapper>
            <S.Group>
                <S.Title>홍보사원, 영남이</S.Title>
                <S.Group>
                    <S.SubTitle>자영업자의 부담을 덜어주는</S.SubTitle>
                    <S.SubTitle>홍보 서비스</S.SubTitle>
                </S.Group>
            </S.Group>
            <S.Logo src="/character.png"></S.Logo>
            <S.LoginBtn onClick={KakaoLogin}>
                <S.KakaoIcon src="/kakaoIcon.png"/>
                <S.LoginContent>카카오톡 로그인</S.LoginContent>
            </S.LoginBtn>
        </S.Wrapper>
    )
}

export default LoginUI;