import React, { useEffect, useState } from 'react';
import './App.css';
import PageRoutes from './routes/pageroutes.jsx';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import useStore from './store/useStore.jsx';
import useCheckAddToHomeAvailable from './useCheckAddToHomeAvailable.js';

function App() {
  const setNavigate = useStore((state) => state.setNavigate);
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState(null); // useState로 상태 정의
  const checkAddToHomePrompt = useCheckAddToHomeAvailable();

  useEffect(() => {
    setNavigate(navigate); // zustand 스토어에 navigate 함수 전달
  }, [navigate, setNavigate]);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  useEffect(() => {
    // useCheckAddToHomeAvailable에서 전달된 이벤트를 상태로 설정
    if (checkAddToHomePrompt) {
      setDeferredPrompt(checkAddToHomePrompt);
    }
  }, [checkAddToHomePrompt]);

  const installApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt(); // Show the install prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('PWA 설치가 완료되었습니다.');
      clearPrompt(); // Clear the prompt
    } else {
      console.log('PWA 설치가 취소되었습니다.');
    }
  };

  // Clear the deferred prompt
  const clearPrompt = () => {
    setDeferredPrompt(null);
  };

  return (
    <div>
      <button onClick={installApp} disabled={!deferredPrompt}>
        앱 설치
      </button>
      <PageRoutes />
    </div>
  );
}

// Router로 App 컴포넌트를 감싸기
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;