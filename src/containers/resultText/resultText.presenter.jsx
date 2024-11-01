import * as S from "../createText/createText.style";
import ResultAnimation from "./components/resultAnimation.component";
import ResultDisplay from "./components/resultDisplay.component";
import React from 'react';

const ResultTextUI = ({ goToHome, showDisplay, displayState, submitText, content}) => {
    return (
        <S.Wrapper>
            <S.Header>
                <S.MenuIcon src="/menu.png" onClick={goToHome} />
                <S.Logo>홍보사원, 영남이</S.Logo>
            </S.Header> 
            {!showDisplay && (
                <ResultAnimation 
                    onComplete={displayState} 
                    submitText={submitText} 
                />
            )}
            {showDisplay && <ResultDisplay />}
        </S.Wrapper>
    );
};

export default ResultTextUI;