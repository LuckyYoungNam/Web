import React, { useEffect, useState } from 'react';
import * as S from "./myPage.style";
import * as C from "../createText/createText.style";
import useStore from "../../store/useStore";
import TextDetail from './textDetail.component'; 

const MyPageUI = () => {
import axios from 'axios';
const MyPageUI = ({ closeModal }) => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const { goToHome } = useStore();
    const userData = JSON.parse(localStorage.getItem('userdata')) || {};
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedPostId, setSelectedPostId] = useState(null); 
    const [isModalOpen, setIsModalOpen] = useState(false); 

    // 날짜 형식 파싱
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}월 ${date.getDate()}일 (${date.toLocaleDateString('ko-KR', { weekday: 'short' })}) ${date.getHours()}시 ${date.getMinutes()}분`;
    };
    const [page, setPage] = useState(0); // 현재 페이지 상태
    const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
    const [businessName, setBusinessName] = useState("");
    const [location, setLocation] = useState("");
    const [address, setAddress] = useState("");
    const [businessName, setBusinessName] = useState(userData.businessName || "");
    const [location, setLocation] = useState(userData.location || "");
    const [address, setAddress] = useState(userData.address || "");
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await fetch(`${BACKEND_URL}/post/findAll?page=${page}&size=3`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`,
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
    // 모달 
    const openModal = (postId) => {
        setSelectedPostId(postId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPostId(null);
    };

         // 날짜 형식 파싱
         const formatDate = (dateString) => {
            const date = new Date(dateString);
            const options = { month: 'numeric', day: 'numeric', weekday: 'short', hour: 'numeric', minute: 'numeric' };
            return `${date.getMonth() + 1}월 ${date.getDate()}일 (${date.toLocaleDateString('ko-KR', { weekday: 'short' })}) ${date.getHours()}시 ${date.getMinutes()}분`;
        };
    
        const handlePageChange = (newPage) => {
            if (newPage >= 0 && newPage < totalPages) {
                setPage(newPage);
            }
        };

    const handleSubmit = () => {
        // 페이지 변경 함수
        const postData = async () => {
            try {
                const response = await axios.patch(`${BACKEND_URL}/users/info`, {
                    businessName,
                    location,
                    address
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
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
                        {/* 최신순으로 정렬 */}
                        {posts.map((post) => (
                            <S.BeforeContent
                                key={post.postId}
                                onClick={() => openModal(post.postId)} // postId로 모달 열기
                            >
                                {formatDate(post.postDate)}
                            </S.BeforeContent>
                        ))}
                    </S.TextGroup>
                    {/* 페이지네이션 */}
                    <S.Pagination>
                        {page > 0 && (
                            <S.PaginationBtn onClick={() => setPage(page - 1)}>
                                이전
                            </S.PaginationBtn>
                        )}
                        <span>{page + 1} / {totalPages}</span>
                        {page < totalPages - 1 && (
                            <S.PaginationBtn onClick={() => setPage(page + 1)}>
                                다음
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
