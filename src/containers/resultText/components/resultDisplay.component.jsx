import * as S from "./resultTextComponents.style";
import * as C from "../../createText/createText.style";
import React, { useState, useEffect } from 'react';

const ResultDisplay = () => {

    const BlogLinkClick = () => {
        const blogUrl = `https://blog.naver.com/22iseverywhere?Redirect=Write`;
        window.open(blogUrl, '_blank');
    };

    

    return(
        <C.MainSection>
            <S.resultGroup>
                <S.resultImg src="/resultImg.png"></S.resultImg>
                <S.resultContent></S.resultContent>
                <S.FunctionGroup>
                    <S.UpdateBtn>수정하기</S.UpdateBtn>
                    <S.IconGroup>
                        <i class="bi bi-clipboard" style={{ fontSize: "22px" }}></i>
                        <i class="bi bi-share-fill" style={{ fontSize: "18px" }} onClick={BlogLinkClick}></i>
                    </S.IconGroup>
                </S.FunctionGroup>
            </S.resultGroup>
            <S.SubmitBtn>홍보글 제작 완료하기</S.SubmitBtn>
        </C.MainSection>
    )
}

export default ResultDisplay;