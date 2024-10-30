import * as S from "./resultTextComponents.style";
import * as C from "../../createText/createText.style";
import React, { useState, useEffect } from 'react';


const ResultAnimation = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isAnimated, setIsAnimated] = useState(false);

    const ImageClick = () => {
        setIsAnimated(true);
    
        setTimeout(() => {
            setIsVisible(false);
            if (onComplete) {
                onComplete();  // onComplete 호출
            }
        }, 1800);
    };

    return (
        isVisible && (
            <C.MainSection isVisible={isVisible}>
                <C.ResultTitle>홍보글 확인하기</C.ResultTitle>
                <S.Motion>
                    <S.DocumentBack src="/documentBack.png"></S.DocumentBack>
                    <S.DocumentPaper animate={isAnimated} src="/documentPaper.png"></S.DocumentPaper>
                    <S.DocumentFront onClick={ImageClick} src="/documentFront.png"></S.DocumentFront>
                </S.Motion>
                <C.ContentGroup>
                    <C.Content>결과를 확인해주세요.</C.Content>
                    <C.Script style={{ marginTop: "30px" }}>봉투를 눌러 영남이의 홍보글을 열어보세요!</C.Script>
                </C.ContentGroup>
            </C.MainSection>
        )

    )
}

export default ResultAnimation;