import React, { useEffect, useState } from 'react';
import * as S from "./myPage.style";
import * as C from "../createText/createText.style";
import useStore from "../../store/useStore";

const MyPageUI = () => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const { goToHome } = useStore();
    const [blogId, setBlogId] = useState("");

    useEffect(() => {
        const fetchBlogId = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken'); // localStorage에서 토큰 가져오기
                if (!accessToken) {
                    console.error("accessToken 오류 발생");
                    return;
                }

                const response = await fetch(`${BACKEND_URL}/blog`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setBlogId(data.blogId); // 서버에서 받은 블로그 아이디로 상태 업데이트
                } else {
                    console.error("블로그 아이디를 불러오는 데 실패했습니다.");
                }
            } catch (error) {
                console.error("요청 오류:", error);
            }
        };

        fetchBlogId();
    }, [BACKEND_URL]);

    const updateBlogId = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken'); // localStorage에서 토큰 가져오기
            if (!accessToken) {
                console.error("accessToken 오류 발생");
                return;
            }

            const response = await fetch(`${BACKEND_URL}/blog`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,
                },
                body: JSON.stringify({
                    blogId: blogId,
                }),
            });

            if (response.ok) {
                alert("블로그 아이디가 업데이트되었습니다.");
            } else {
                console.error("업데이트 실패:", response.statusText);
                alert("블로그 아이디 업데이트에 실패했습니다.");
            }
        } catch (error) {
            console.error("요청 오류:", error);
            alert("요청 중 오류가 발생했습니다.");
        }
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
                    <S.SubTitle>회원 정보를<br/>수정해 주세요.</S.SubTitle>
                    <S.InfoGroup>
                        <S.InfoText>네이버 블로그 아이디</S.InfoText>
                        <S.InfoEditGroup>
                            <S.InfoWrite 
                                placeholder="아이디를 입력하세요" 
                                value={blogId} 
                                onChange={(e) => setBlogId(e.target.value)} 
                            />
                            <S.UpdateBtn onClick={updateBlogId}>저장</S.UpdateBtn>
                        </S.InfoEditGroup>
                        <S.InfoLine></S.InfoLine>
                    </S.InfoGroup>
                    <S.SubTitle>이전에 생성한 <br/>홍보글 확인하기</S.SubTitle>
                    <S.TextGroup>
                        <S.BeforeContent>아아아</S.BeforeContent>
                    </S.TextGroup>
                </S.SubGroup>
            </S.MainSection>
        </C.Wrapper>
    );
};

export default MyPageUI;
