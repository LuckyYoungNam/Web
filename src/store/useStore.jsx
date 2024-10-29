// useStore.js (zustand store)
import {create} from 'zustand';
import { useNavigate } from 'react-router-dom';

const useStore = create((set, get) => ({
  navigateTo: null,  // 페이지 이동 함수 저장
  setNavigate: (navigateFn) => set({ navigateTo: navigateFn }),  // navigate 함수 설정

  // 페이지 이동 함수들
  goToHome: () => {
    const navigate = get().navigateTo;
    if (navigate) navigate('/main');
  },
  goToMyPage: () => {
    const navigate = get().navigateTo;
    if (navigate) navigate('/mypage');
  },
  goToCreateImg: () => {
    const navigate = get().navigateTo;
    if (navigate) navigate('/create/img');
  },
  goToCreateText: () => {
    const navigate = get().navigateTo;
    if (navigate) navigate('/create/text');
  }
}));

export default useStore;