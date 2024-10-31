import * as S from "./main.style";
import React, { useState } from 'react';
import Modal from 'react-modal';
import DaumPostcode from 'react-daum-postcode';

Modal.setAppElement('#root');

const MainModal = ({ isOpen, closeModal }) => {
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    const [address, setAddress] = useState("");

    // 주소 검색 완료 시 처리 함수
    const handleAddressSelect = (data) => {
        const fullAddress = data.address;
        setAddress(fullAddress); // 선택한 주소를 상태에 저장
        setIsAddressModalOpen(false); // 주소 검색 모달 닫기
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={{
                content: {
                    width: '375px',
                    height: '400px',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#ffffff',
                    borderRadius: '10px',
                    padding: '20px',
                    overflow: 'auto',
                },
                overlay: {
                    zIndex: '10',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                },
            }}
        >
            <S.ModalTitle>효과적인 홍보를 위해<br />기본 정보를 작성해주세요!</S.ModalTitle>
            <S.ModalGroup>
                <S.ModalInfo>상호명</S.ModalInfo>
                <S.ModalInputGroup>
                    <S.ModelInput />
                    <S.InputLine />
                </S.ModalInputGroup>
            </S.ModalGroup>
            <S.ModalGroup>
                <S.ModalInfo>지역</S.ModalInfo>
                <S.ModalInputGroup>
                    <S.ModelInput />
                    <S.InputLine />
                </S.ModalInputGroup>
            </S.ModalGroup>
            <S.ModalGroup>
                <S.ModalInfo>주소</S.ModalInfo>
                <S.ModalInputGroup>
                    <S.ModelInput
                        value={address}
                        readOnly
                        onClick={() => setIsAddressModalOpen(true)}
                    />
                    <S.InputLine />
                </S.ModalInputGroup>
            </S.ModalGroup>

            <S.SubmitBtn onClick={closeModal}>완료하기</S.SubmitBtn>

            {/* 주소 검색 모달 */}
            <Modal
                isOpen={isAddressModalOpen}
                onRequestClose={() => setIsAddressModalOpen(false)}
                style={{
                    content: {
                        width: '400px',
                        height: '450px',
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: '#ffffff',
                        borderRadius: '10px',
                        padding: '0',
                        overflow: 'hidden',
                    },
                    overlay: {
                        zIndex: '20',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    },
                }}
            >
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <DaumPostcode
                        onComplete={handleAddressSelect}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </Modal>
        </Modal>
    );
};

export default MainModal;