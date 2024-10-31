import * as S from "./main.style";
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const MainModal = ({ isOpen, closeModal }) => {
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={closeModal} // 외부 클릭 시 닫힘
            style={{
                content: {
                    width: '85%',
                    height: '50%',
                    background: '#ffffff',
                    marginTop: '62%',
                    borderRadius: '10px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                },
                overlay: {
                    zIndex: '10',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                },
            }}
        >
                <S.ModalTitle>효과적인 홍보를 위해<br/>기본 정보를 작성해주세요!</S.ModalTitle>
                <S.ModalGroup>
                    <S.ModalInfo>상호명</S.ModalInfo>
                    <S.ModalInputGroup>
                        <S.ModelInput/>
                        <S.InputLine />
                    </S.ModalInputGroup>
                </S.ModalGroup>
                <S.ModalGroup>
                    <S.ModalInfo>지역</S.ModalInfo>
                    <S.ModalInputGroup>
                        <S.ModelInput/>
                        <S.InputLine />
                    </S.ModalInputGroup>
                </S.ModalGroup>
                <S.ModalGroup>
                    <S.ModalInfo>주소</S.ModalInfo>
                    <S.ModalInputGroup>
                        <S.ModelInput/>
                        <S.InputLine />
                    </S.ModalInputGroup>
                </S.ModalGroup>
                
                <S.SubmitBtn onClick={closeModal}>완료하기</S.SubmitBtn>
        </Modal>
    );
};

export default MainModal;
