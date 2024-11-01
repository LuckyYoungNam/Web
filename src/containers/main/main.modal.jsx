import * as S from "./main.style";
import React, { useState } from 'react';
import Modal from 'react-modal';
import DaumPostcode from 'react-daum-postcode';
import axios from "axios";
Modal.setAppElement('#root');

const MainModal = ({ isModalOpen, setIsModalOpen }) => {
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

    // Temporary state for inputs
    const [tempBusinessName, setTempBusinessName] = useState("");
    const [tempLocation, setTempLocation] = useState("");
    const [tempAddress, setTempAddress] = useState("");

    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    // 주소 검색 완료 시 처리 함수
    const handleAddressSelect = (data) => {
        const fullAddress = data.address;
        setTempAddress(fullAddress); // 임시 상태에 저장
        setIsAddressModalOpen(false); // 주소 검색 모달 닫기
    };

    const handleSubmit = async () => {
        try {
            await axios.post(`${BACKEND_URL}/users/info`, {
                businessName: tempBusinessName,
                location: tempLocation,
                address: tempAddress
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
                withCredentials: true,
            });
            setIsModalOpen(false); // Close the modal after successful submission
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <Modal
            isOpen={isModalOpen}
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
                    <S.ModelInput
                        value={tempBusinessName}
                        onChange={(e) => setTempBusinessName(e.target.value)} // 임시 상태에 저장
                    />
                    <S.InputLine />
                </S.ModalInputGroup>
            </S.ModalGroup>
            <S.ModalGroup>
                <S.ModalInfo>지역</S.ModalInfo>
                <S.ModalInputGroup>
                    <S.ModelInput
                        value={tempLocation}
                        onChange={(e) => setTempLocation(e.target.value)} // 임시 상태에 저장
                    />
                    <S.InputLine />
                </S.ModalInputGroup>
            </S.ModalGroup>
            <S.ModalGroup>
                <S.ModalInfo>주소</S.ModalInfo>
                <S.ModalInputGroup>
                    <S.ModelInput
                        value={tempAddress}
                        readOnly
                        onClick={() => setIsAddressModalOpen(true)}
                    />
                    <S.InputLine />
                </S.ModalInputGroup>
            </S.ModalGroup>
            <S.SubmitBtn onClick={handleSubmit}>완료하기</S.SubmitBtn>

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