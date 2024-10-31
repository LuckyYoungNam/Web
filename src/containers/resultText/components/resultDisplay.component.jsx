import * as S from "./resultTextComponents.style";
import * as C from "../../createText/createText.style";
import React, { useState } from 'react';
import useStore from '../../../store/useStore';

const ResultDisplay = ({ content = "", postId }) => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const { goToHome } = useStore();
    const [editableContent, setEditableContent] = useState(content);
    const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태 추가

    const BlogLinkClick = () => {
        const blogUrl = `https://blog.editor.naver.com/editor?deviceType=mobile&returnUrl=https%3A%2F%2Fm.blog.naver.com%2FGoWriteForm.naver`;
        window.open(blogUrl, '_blank');
    };

    const copyText = () => {
        if (!editableContent) {
            alert("복사할 내용이 없습니다.");
            return;
        }
        navigator.clipboard.writeText(editableContent)
            .then(() => alert("홍보글이 복사되었습니다."))
            .catch((error) => console.error("복사 실패:", error));
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const SaveFinalText = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken'); // localStorage에서 토큰 가져오기
            if (!accessToken) {
                console.error("accessToken 오류 발생");
                alert("로그인이 필요합니다.");
                return;
            }
            
            const response = await fetch(`${BACKEND_URL}/post/save-final`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,
                },
                body: JSON.stringify({
                    postId: postId,
                    postFinalContent: editableContent,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                alert("홍보글이 성공적으로 저장되었습니다.");
                console.log("서버 응답:", data);
                goToHome(); // 성공 후 메인페이지 이동
            } else {
                console.error("서버 응답 오류:", response.statusText);
                alert("서버 오류가 발생했습니다.");
            }
        } catch (error) {
            console.error("요청 오류:", error);
            alert("요청 중 오류가 발생했습니다.");
        }
    };

    return (
        <C.MainSection>
            <S.resultGroup>
                <S.resultImg src="/resultImg.png" alt="Result Image" />
                <S.resultContent
                    as="textarea"
                    value={editableContent}
                    readOnly={!isEditing} // 수정 모드일 때만 입력 가능하게
                    onChange={(e) => setEditableContent(e.target.value)}
                />
                <S.FunctionGroup>
                    <S.UpdateBtn onClick={toggleEdit}>{isEditing ? "수정 중" : "수정하기"}</S.UpdateBtn>
                    <S.IconGroup>
                        <i 
                            className="bi bi-clipboard"
                            style={{ fontSize: "22px" }}
                            onClick={copyText} 
                        ></i>
                        <i
                            className="bi bi-share-fill"
                            style={{ fontSize: "18px" }}
                            onClick={BlogLinkClick}
                        ></i>
                    </S.IconGroup>
                </S.FunctionGroup>
            </S.resultGroup>
            <S.SubmitBtn onClick={SaveFinalText}>홍보글 제작 완료하기</S.SubmitBtn>
        </C.MainSection>
    );
};

export default ResultDisplay;
