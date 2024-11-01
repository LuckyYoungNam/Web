import React, { useState } from 'react';
import ResultTextUI from './resultText.presenter';
import useStore from '../../store/useStore';

const ResultTextContainer = () => {
    const { goToHome } = useStore();
    const [showDisplay, setShowDisplay] = useState(false);

    const displayState = () => setShowDisplay(true);

    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    const submitText = async (postPreContent, onComplete) => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            alert("로그인이 필요합니다.");
            return;
        }

        try {
            const response = await fetch(`${BACKEND_URL}/api/v1/member/post/save-pre`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${accessToken}`,
                    'withCredentials': true,  
                },
                body: JSON.stringify({ postPreContent }),
            });
            if (response.ok) {
                const data = await response.json();
                onComplete(data);
            } else {
                console.error("응답 오류:", response.statusText);
                alert("서버 오류 발생");
            }
        } catch (error) {
            console.error("요청 오류:", error);
            alert("요청 오류 발생");
        }
    };

    return (
        <ResultTextUI 
            goToHome={goToHome} 
            showDisplay={showDisplay} 
            displayState={displayState} 
            submitText={submitText} 
        />
    );
};

export default ResultTextContainer;
