import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import PageRoutes from './routes/pageroutes.jsx';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import useStore from './store/useStore.jsx';
function App() {
  const setNavigate = useStore((state) => state.setNavigate);
  const navigate = useNavigate();

  useEffect(() => {
    setNavigate(navigate);  // zustand 스토어에 navigate 함수 전달
  }, [navigate, setNavigate]);
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
      <PageRoutes />
  );
}
// Router로 App 컴포넌트를 감싸줍니다.
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;