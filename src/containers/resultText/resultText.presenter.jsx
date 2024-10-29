import * as S from "../createText/createText.style";
import ResultAnimation from "./components/resultAnimation.component";
import ResultDisplay from "./components/resultDisplay.component";
import React, { useState } from 'react';


const ResultTextUI = () => {
    const [showDisplay, setShowDisplay] = useState(false);

    const displayState = () => {
        setShowDisplay(true);
    };

    return (
        <S.Wrapper>
            <S.Header>
                <S.MenuIcon src="/menu.png" ></S.MenuIcon>
                <S.Logo>홍보사원, 영남이</S.Logo>
            </S.Header> 
            <S.MainSection>
            {!showDisplay && <ResultAnimation onComplete={displayState} />}
            {showDisplay && <ResultDisplay />}
            </S.MainSection>
            
        </S.Wrapper>

    )
}

export default ResultTextUI;