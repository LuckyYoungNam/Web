import React, { useState } from 'react';
import ResultTextUI from './resultText.presenter';
import useStore from '../../store/useStore';

const ResultTextContainer = () => {
    const { goToHome } = useStore();
    const [showDisplay, setShowDisplay] = useState(false);

    const displayState = () => setShowDisplay(true);
    const accessToken = localStorage.getItem('accessToken');
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    const submitText = async (postPreContent, onComplete) => {
        if (!accessToken) {
            alert("로그인이 필요합니다.");
            return;
        }

        try {
            const response = await fetch(`${BACKEND_URL}/api/v1/member/post/save-pre`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                credentials: "include",  // 'withCredentials' 대신 'credentials' 사용
                body: JSON.stringify({ postPreContent }),
            });
        
            if (response.ok) {
                const data = await response.json();
                // 응답 데이터에서 postGptContent만 추출하여 로컬 스토리지에 저장
                localStorage.setItem('text', data.postGptContent);
                onComplete(data);  // 응답 데이터를 onComplete 함수에 전달
            } else {
                console.error("응답 오류:", response.statusText);
                alert("서버 오류 발생");
            }
        } catch (error) {
            console.error("요청 오류:", error);
            alert("요청 오류 발생");
        }
    }
    return (
        <ResultTextUI
            content={localStorage.getItem('text')}
            goToHome={goToHome} 
            showDisplay={showDisplay} 
            displayState={displayState} 
            submitText={submitText} 
        />
    );
};

export default ResultTextContainer;