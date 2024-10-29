import { Link } from 'react-router-dom';
import * as S from "./createText.style";
import 'bootstrap-icons/font/bootstrap-icons.css';
import useStore from "../../store/useStore";
const CreateTextUI = () => {
    const { goToHome } = useStore();
    return (
        <S.Wrapper>
            <S.Header>
                <Link to="/main">
                    <S.MenuIcon src="/menu.png" ></S.MenuIcon>
                </Link>
                <S.Logo>홍보사원, 영남이</S.Logo>
            </S.Header> 
            <S.MainSection>
                <S.PageTitle>홍보글 작성하기</S.PageTitle>
                <S.createTextPad src="/createTextpad.png"></S.createTextPad>
                <S.TextArea></S.TextArea>
                <S.NextBtn>결과 확인하기<i style={{ fontSize: "30px" }} className="bi bi-arrow-right-short"></i>
                </S.NextBtn>
                <S.Content>간단한 홍보글을 작성해주세요.</S.Content>
                <S.Group>
                    <S.FaceImg src="/characterFace.png" ></S.FaceImg>
                    <S.Script>내용이 자세할수록 <br/>영남이가 홍보하기 쉬워져요!</S.Script>
                </S.Group>

            </S.MainSection>
            
        </S.Wrapper>

    )
}

export default CreateTextUI;