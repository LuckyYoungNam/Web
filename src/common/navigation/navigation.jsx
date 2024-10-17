import * as S from "./navigation.style"
const navigation = () => {

    return (
        <S.NaviWrapper>
            <S.Group>
                <S.Icon src="/menu1.png"></S.Icon>
                <S.Label>상점</S.Label>
            </S.Group>
            <S.Group>
                <S.Icon src="/menu2.png"></S.Icon>
                <S.Label>홈</S.Label>
            </S.Group>
            <S.Group>
                <S.Icon src="/menu3.png"></S.Icon>
                <S.Label>마이페이지</S.Label>
            </S.Group>
        </S.NaviWrapper>
    )
}

export default navigation;