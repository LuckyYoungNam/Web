import * as S from "../createText/createText.style";
import ResultAnimation from "./components/resultAnimation.component";
import ResultDisplay from "./components/resultDisplay.component";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStore from "../../store/useStore";


const ResultTextUI = () => {
    const [showDisplay, setShowDisplay] = useState(false);

    const displayState = () => {
        setShowDisplay(true);
    };

    return (
        <S.Wrapper>
            <S.Header>
                <Link to="/main">
                    <S.MenuIcon src="/menu.png" ></S.MenuIcon>
                </Link>
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