import MainModal from "./main.modal";
import * as S from "./main.style";
import useStore from '../../store/useStore'; 
import React, { useState } from 'react';

const MainUI = () => {
    const { goToMyPage, goToCreateImg, goToCreateText } = useStore();
    
    // 모달 열림 상태 관리
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // 모달 열고 닫기 함수
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const userData = JSON.parse(localStorage.getItem('userdata')) || {};
    return (
        <S.Wrapper>
            <S.Title>홍보사원, 영남이</S.Title>
            <S.MainImg src="/mainYN.png" />
            <S.MenuWrapper>
                <S.Info>원하는 서비스를 선택해주세요.</S.Info>
                <S.Group>
                    <S.MainBtn onClick={goToMyPage}>
                        <S.MyPageIcon src="/myPageIcon.png" />
                        <S.MyPageLabel>마이 페이지</S.MyPageLabel>
                    </S.MainBtn>
                    <S.MenuItem> 
                        <S.MenuItemLabel onClick={goToCreateImg}>대표 사진 만들기</S.MenuItemLabel>
                        <S.ArrowIcon src="/arrow.png" />
                    </S.MenuItem>
                    <S.MenuItem onClick={goToCreateText}>
                        <S.MenuItemLabel>홍보 글 작성하기</S.MenuItemLabel>
                        <S.ArrowIcon src="/arrow.png" />
                    </S.MenuItem>
                </S.Group>
            </S.MenuWrapper>
            
            {/* 모달 컴포넌트에 열림 상태와 닫기 함수 전달 */}
            {/*사용자 정보 입력 여부에 따른 모달 동작 여부*/}
            <MainModal isOpen={(!userData.location || !userData.businessName || !userData.address)?true:false} closeModal={closeModal} />
        </S.Wrapper>
    );
};

export default MainUI;