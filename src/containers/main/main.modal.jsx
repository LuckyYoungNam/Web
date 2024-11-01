import * as S from "./main.style";
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import DaumPostcode from 'react-daum-postcode';
import axios from "axios"
Modal.setAppElement('#root');

const MainModal = ({ openModal, closeModal, isModalOpen }) => {
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    const [businessName, setBusinessName] = useState("");
    const [location, setLocation] = useState("");
    const [address, setAddress] = useState("");
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    // 주소 검색 완료 시 처리 함수
    const handleAddressSelect = (data) => {
        const fullAddress = data.address;
        setAddress(fullAddress); // 선택한 주소를 상태에 저장
        setIsAddressModalOpen(false); // 주소 검색 모달 닫기
    };
    const handleSubmit = () => {
        const postData = async () => {
            try {
              const response = await axios.patch(`${BACKEND_URL}/users/info`, {
                    businessName,
                    location,
                    address
              }, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                  'withCredentials': true,
                }
              });
              console.log(response.data);
            } catch (error) {
              console.error('Error:', error.response ? error.response.data : error.message);
            }
          };
          if(!localStorage.getItem('userdata')){
            postData();
          }
          closeModal();
    }
    const fetchData = async () => {
        // 로컬스토리지에 'userdata'가 없는 경우에만 실행
        if (!localStorage.getItem('userdata')) {
            try {
                const response = await axios.get(`${BACKEND_URL}/users/info`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    }
                });
                console.log(response.data); // 응답 데이터 출력
                // 응답 데이터를 로컬스토리지에 저장
                localStorage.setItem('userdata', JSON.stringify(response.data));
    
                // 상태값 설정
                setAddress(response.data.address);
                setBusinessName(response.data.businessName);
                setLocation(response.data.location);
            } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
            }
        }
    };
    useEffect(() => {
        fetchData();
    }, []); // 빈 배열로 두어 한 번만 실행되게 설정
    return (
        <Modal
            isOpen={isModalOpen}
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
                    <S.ModelInput value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)} />
                    <S.InputLine />
                </S.ModalInputGroup>
            </S.ModalGroup>
            <S.ModalGroup>
                <S.ModalInfo>지역</S.ModalInfo>
                <S.ModalInputGroup>
                    <S.ModelInput value={location}
                        onChange={(e) => setLocation(e.target.value)} />
                    <S.InputLine />
                </S.ModalInputGroup>
            </S.ModalGroup>
            <S.ModalGroup>
                <S.ModalInfo>주소</S.ModalInfo>
                <S.ModalInputGroup>
                    <S.ModelInput
                        value={address}
                        readOnly
                        onChange={(e)=>setAddress(e.target.value)}
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