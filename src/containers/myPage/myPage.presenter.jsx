import React, { useEffect, useState } from 'react';
import * as S from "./myPage.style";
import * as C from "../createText/createText.style";
import useStore from "../../store/useStore";
import axios from 'axios';
import TextDetail from './textDetail.component';

const MyPageUI = () => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const { goToHome } = useStore();
    const userData = JSON.parse(localStorage.getItem('userdata')) || {};

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // useState로 초기 상태 설정
    const [businessName, setBusinessName] = useState(userData.businessName || "");
    const [location, setLocation] = useState(userData.location || "");
    const [address, setAddress] = useState(userData.address || "");

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                if (!accessToken) {
                    console.error("accessToken 오류 발생");
                    return;
                }

                const response = await fetch(`${BACKEND_URL}/post/findAll?page=${page}&size=3`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`,
                        'withCredentials': true,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    const sortedPosts = data.content.sort((a, b) => new Date(b.postDate) - new Date(a.postDate)); // 최신순 정렬
                    setPosts(sortedPosts);
                    setTotalPages(data.totalPages);
                } else {
                    console.error("조회 실패 오류");
                }
            } catch (error) {
                console.error("요청 오류:", error);
            }
        };

        fetchPosts();
    }, [BACKEND_URL, page]);

    // 날짜 형식 파싱
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}월 ${date.getDate()}일 (${date.toLocaleDateString('ko-KR', { weekday: 'short' })}) ${date.getHours()}시 ${date.getMinutes()}분`;
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            setPage(newPage);
        }
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
        postData();
        closeModal();
    }
    // 모달 
    const openModal = (postId) => {
        setSelectedPostId(postId);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPostId(null);
    };
    return (
        <C.Wrapper>
            <C.Header>
                <C.MenuIcon src="/menu.png" onClick={goToHome}></C.MenuIcon>
                <C.Logo>홍보사원, 영남이</C.Logo>
            </C.Header>
            <S.MainSection>
                <S.PageTitle>마이페이지</S.PageTitle>
                <S.SubGroup>
                    <S.SubTitle>회원 정보 수정</S.SubTitle>
                    <S.InfoGroup>
                        <S.InfoText>상호명</S.InfoText>
                        <S.InfoEditGroup>
                            <S.InfoWrite
                                placeholder="상호명을 입력하세요"
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                            />
                            <S.InfoLine></S.InfoLine>
                        </S.InfoEditGroup>
                    </S.InfoGroup>
                    <S.InfoGroup>
                        <S.InfoText>지역</S.InfoText>
                        <S.InfoEditGroup>
                            <S.InfoWrite
                                placeholder="지역 정보를 입력하세요"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            <S.InfoLine></S.InfoLine>
                        </S.InfoEditGroup>
                    </S.InfoGroup>
                    <S.InfoGroup>
                        <S.InfoText>주소</S.InfoText>
                        <S.InfoEditGroup>
                            <S.InfoWrite
                                placeholder="주소를 입력하세요"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <S.InfoLine></S.InfoLine>
                        </S.InfoEditGroup>
                    </S.InfoGroup>
                    <S.UpdateBtn onClick={handleSubmit}>저장하기</S.UpdateBtn>
                </S.SubGroup>
                <S.SubGroup>
                    <S.SubTitle>이전 홍보글 확인하기</S.SubTitle>
                    <S.TextGroup>
                        {posts.map((post) => (
                            <S.BeforeContent
                                key={post.postId}
                                onClick={() => console.log(`홍보글 ID: ${post.postId} 클릭됨`)}
                            >
                                {formatDate(post.postDate)}
                            </S.BeforeContent>
                        ))}
                    </S.TextGroup>
                    <S.Pagination>
                        {page > 0 && (
                            <S.PaginationBtn onClick={() => handlePageChange(page - 1)}>
                                <i className="bi bi-caret-left-fill" style={{ fontSize: "15px" }}></i>
                            </S.PaginationBtn>
                        )}
                        <span>{page + 1} / {totalPages}</span>
                        {page < totalPages - 1 && (
                            <S.PaginationBtn onClick={() => handlePageChange(page + 1)}>
                                <i className="bi bi-caret-right-fill" style={{ fontSize: "15px" }}></i>
                            </S.PaginationBtn>
                        )}
                    </S.Pagination>
                </S.SubGroup>
            </S.MainSection>
            <TextDetail 
                isOpen={isModalOpen} 
                postId={selectedPostId} 
                closeModal={closeModal} 
            />
        </C.Wrapper>
    );
};
export default MyPageUI;