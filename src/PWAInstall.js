// PWAInstallPrompt.js
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'; // 부트스트랩의 버튼 컴포넌트
import { RiInstallLine } from 'react-icons/ri'; // 정확한 경로에서 가져오기
const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // "beforeinstallprompt" 이벤트를 처리하여 설치 프롬프트를 저장
  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event); // 이벤트를 상태에 저장
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // 설치 버튼 클릭 핸들러
  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // 설치 프롬프트 표시

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('사용자가 설치 프롬프트에 동의했습니다.');
        } else {
          console.log('사용자가 설치 프롬프트를 무시했습니다.');
        }

        setDeferredPrompt(null); // 프롬프트 초기화
      });
    }
  };

  return (
    <>
      {deferredPrompt && (
        <Button size="large" onClick={handleInstallClick}>
          <RiInstallLine /> Install
        </Button>
      )}
    </>
  );
};

export default PWAInstallPrompt;