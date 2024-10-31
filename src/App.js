import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import PageRoutes from './routes/pageroutes.jsx';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import useStore from './store/useStore.jsx';
import useCheckAddToHomeAvailable from './useCheckAddToHomeAvailable.js';

function App() {
  const setNavigate = useStore((state) => state.setNavigate);
  const navigate = useNavigate();
  const deferredPrompt = useCheckAddToHomeAvailable();

  // Navigate 함수를 zustand 스토어에 전달
  useEffect(() => {
    setNavigate(navigate);
  }, [navigate, setNavigate]);

  // 화면 크기를 설정하는 함수
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  // PWA 설치를 위한 함수
  const installApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt(); // 설치 프롬프트 표시
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('PWA 설치가 완료되었습니다.');
      clearPrompt();
    } else {
      console.log('PWA 설치가 취소되었습니다.');
    }
  };

  // 설치 프롬프트를 초기화하는 함수
  const clearPrompt = () => {
    setDeferredPrompt(null); // 수정: setDeferredPrompt가 아니라 useCheckAddToHomeAvailable의 상태 관리
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