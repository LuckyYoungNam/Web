import * as S from "./main.style"
import Navigation from "../../common/navigation/navigation";
const MainUI = () => {
    return(
        <S.Wrapper>
            <S.Header>
                <S.MainLogo src="mainlogo.png" />
            </S.Header>
            <Navigation></Navigation>
        </S.Wrapper>
    )
}
export default MainUI;