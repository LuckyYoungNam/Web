import * as S from "./resultTextComponents.style";
import * as C from "../../createText/createText.style";
import React, { useState } from 'react';
import useStore from "../../../store/useStore";

const ResultAnimation = ({ onComplete }) => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    const [isVisible, setIsVisible] = useState(false); // true로 바꾸기
    const [isAnimated, setIsAnimated] = useState(false);

    // POST 요청
    const TextSubmit = async () => {
        setIsAnimated(true);

        const postPreContent = localStorage.getItem("postPreContent");

        if (postPreContent) {
            try {
                const accessToken = localStorage.getItem('accessToken'); // localStorage에서 토큰 가져오기
                if (!accessToken) {
                    console.error("accessToken 오류 발생");
                    return;
                }
                const response = await fetch(`${BACKEND_URL}/post/save-pre`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`, 
                    },
                    body: JSON.stringify({
                        postPreContent: postPreContent,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("응답 성공:", data);

                    setIsVisible(false);
                    if (onComplete) {
                        onComplete(data);
                    }
                } else {
                    console.error("응답 오류:", response.statusText);
                    alert("서버 오류가 발생했습니다.");
                }
            } catch (error) {
                console.error("요청 오류:", error);
                alert("요청 중 오류가 발생했습니다.");
            }
        }
    };

    return (
        isVisible && (
            <C.MainSection isVisible={isVisible}>
                <C.ResultTitle>홍보글 확인하기</C.ResultTitle>
                <S.Motion>
                    <S.DocumentBack src="/documentBack.png"></S.DocumentBack>
                    <S.DocumentPaper animate={isAnimated} src="/documentPaper.png"></S.DocumentPaper>
                    <S.DocumentFront onClick={TextSubmit} src="/documentFront.png"></S.DocumentFront>
                </S.Motion>
                <C.ContentGroup>
                    <C.Content>결과를 확인해주세요.</C.Content>
                    <C.Script style={{ marginTop: "30px" }}>봉투를 눌러 영남이의 홍보글을 열어보세요!</C.Script>
                </C.ContentGroup>
            </C.MainSection>
        )
    );
};

export default ResultAnimation;
