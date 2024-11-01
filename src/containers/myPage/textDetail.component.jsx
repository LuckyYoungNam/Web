import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import * as S from "./myPage.style";
Modal.setAppElement('#root');
const TextDetail = ({ isOpen, postId, closeModal }) => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const [postContent, setPostContent] = useState("");
    const [copied, setCopied] = useState(false);
    useEffect(() => {
        if (postId && isOpen) {
            const fetchPostContent = async () => {
                try {
                    const accessToken = localStorage.getItem('accessToken');
                    const response = await fetch(`${BACKEND_URL}/post/findOne/${postId}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${accessToken}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setPostContent(data.postFinalContent); // 불러온 콘텐츠 설정
                    } else {
                        console.error("조회 실패 오류");
                    }
                } catch (error) {
                    console.error("요청 오류:", error);
                }
            };
            fetchPostContent();
        }
    }, [postId, isOpen, BACKEND_URL]);
    // 클립보드 복사
    const copyToClipboard = () => {
        navigator.clipboard.writeText(postContent)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // 2초 후 원래 아이콘으로
            })
            .catch((error) => console.error("복사 실패:", error));
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={{
                content: {
                    width: '100%',
                    height: '60vh',
                    position: 'fixed',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    top: '70%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#ffffff',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                    padding: '20px',
                    overflow: 'auto',
                },
                overlay: {
                    zIndex: '10',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                },
            }}
        >
            <S.IconGroup>
                <i 
                    className={copied ? "bi bi-clipboard-check-fill" : "bi bi-clipboard"} 
                    onClick={copyToClipboard} 
                    style={{ fontSize: "22px", cursor: "pointer" }}
                ></i>
                <i 
                    className="bi bi-x-lg" 
                    onClick={closeModal} 
                    style={{ fontSize: "22px", cursor: "pointer" }}
                ></i>
            </S.IconGroup>
            <S.ViewText style={{ whiteSpace: 'pre-wrap' }}>
                {postContent}
            </S.ViewText>
        </Modal>
    );
}
export default TextDetail;