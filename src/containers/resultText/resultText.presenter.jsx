import * as S from "../createText/createText.style";
import ResultAnimation from "./components/resultAnimation.component";
import ResultDisplay from "./components/resultDisplay.component";
import React, { useState } from 'react';
import useStore from "../../store/useStore";



const ResultTextUI = () => {
    const { goToHome } = useStore();
    const [showDisplay, setShowDisplay] = useState(true); // false로 고치기

    const displayState = () => {
        setShowDisplay(true);
    };

    return (
        <S.Wrapper>
            <S.Header>
                <S.MenuIcon src="/menu.png"onClick={ goToHome } ></S.MenuIcon>
                <S.Logo>홍보사원, 영남이</S.Logo>
            </S.Header> 
            {!showDisplay && <ResultAnimation onComplete={displayState} />}
            {showDisplay && <ResultDisplay />}
        </S.Wrapper>

    )
}

export default ResultTextUI;