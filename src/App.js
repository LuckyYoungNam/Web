// App.js
import React, { useEffect } from 'react';
import './App.css';
import PageRoutes from './routes/pageroutes.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import useStore from './store/useStore.jsx';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
function App() {
  const setNavigate = useStore((state) => state.setNavigate);
  const navigate = useNavigate();
  serviceWorkerRegistration.register();
  // Zustand 스토어에 navigate 함수를 전달
  useEffect(() => {
    setNavigate(navigate);
  }, [navigate, setNavigate]);

  // 화면 크기 설정
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
  return (
    <div>
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