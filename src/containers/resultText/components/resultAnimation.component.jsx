import * as S from "./resultTextComponents.style";
import * as C from "../../createText/createText.style";
import React, { useState } from 'react';

const ResultAnimation = ({ onComplete, submitText }) => {
    const [isAnimated, setIsAnimated] = useState(false);

    const TextSubmit = async () => {
        setIsAnimated(true);
        const postPreContent = localStorage.getItem("postPreContent");
        if (postPreContent) {
            await submitText(postPreContent, onComplete);
        }
    };

    return (
        <C.MainSection>
            <C.ResultTitle>홍보글 확인하기</C.ResultTitle>
            <S.Motion>
                <S.DocumentBack src="/documentBack.png" />
                <S.DocumentPaper animate={isAnimated} src="/documentPaper.png" />
                <S.DocumentFront onClick={TextSubmit} src="/documentFront.png" />
            </S.Motion>
            <C.ContentGroup>
                <C.Content>결과를 확인해주세요.</C.Content>
                <C.Script style={{ marginTop: "30px" }}>봉투를 눌러 영남이의 홍보글을 열어보세요!</C.Script>
            </C.ContentGroup>
        </C.MainSection>
    );
};

export default ResultAnimation;
