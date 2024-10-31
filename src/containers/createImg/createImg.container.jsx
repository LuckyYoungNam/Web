import CreateImgUI from "./createImg.presenter"; // 이미 있는 CreateImgUI를 사용
import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas"; // html2canvas 가져오기
import useStore from "../../store/useStore";
const CreateImgPage = () => {

    //----------------------------------------------------------------------------------------------------------------
    /*state 관리*/
    const [image, setImage] = useState(null); // 이미지 상태 관리
    const [region, setRegion] = useState(""); // 문구 추가를 위한 지역 선택 (기본값 서울)
    const [keywords, setKeywords] = useState([]); // 키워드 상태 관리
    const [isClick, setIsClick] = useState(false); // 문구가 추가되었는지 여부 관리
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열고 닫는 상태 관리
    const { goToHome } = useStore();
    const imageRef = useRef(null);
    const [colors, setColors] = useState({ regionTextColor: "#FFFFFF", keywordTextColor: "#000000" });
    //----------------------------------------------------------------------------------------------------------------

    /* 이미지처리 관련 함수 */
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };
    const handleAddText = () => {
        if (!image) {
            // 이미지가 업로드되지 않은 경우 경고창 띄우기
            alert("문구를 추가할 이미지를 업로드해주세요!");
            return;
        }
        setIsModalOpen(true);
        setIsClick(true); // 문구 추가 여부를 true로 설정
    };
    const handleReset = () => {
        setIsClick(false);
        setImage(null);
        setKeywords([]);
    }
    const handleSaveImage = () => {
        const element = document.getElementById("captureArea"); // 캡처할 영역의 ID를 지정
        html2canvas(element).then((canvas) => {
            canvas.toBlob((blob) => {
                const link = document.createElement("a");
                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                if (isMobile) {
                    // 모바일에서 Blob을 사용하여 다운로드 처리
                    const url = URL.createObjectURL(blob);
                    link.href = url;
                    link.download = "대표사진.png";
                    link.click();
                    // URL 메모리 해제
                    URL.revokeObjectURL(url);
                } else {
                    // 데스크톱에서는 Blob으로 다운로드 처리
                    link.href = URL.createObjectURL(blob);
                    link.download = "대표사진.png";
                    link.click();
                    // URL 메모리 해제
                    URL.revokeObjectURL(link.href);
                }
            });
        });
    };
    {/*글씨색 관련*/ }
    // 식욕을 자극하는 밝은 색상 중에서 무작위로 선택하는 함수
    const getAppetizingColor = () => {
        // 식욕을 자극하는 색상 범위(빨강, 주황, 노랑 계열)
        const colors = [
            { r: 255, g: 99, b: 71 },  // 토마토 레드
            { r: 255, g: 140, b: 0 },  // 다크 오렌지
            { r: 255, g: 165, b: 0 },  // 오렌지
            { r: 255, g: 69, b: 0 },   // 오렌지 레드
            { r: 255, g: 215, b: 0 },  // 골드
            { r: 255, g: 223, b: 186 } // 라이트 살몬
        ];

        // 색상 배열에서 랜덤으로 하나 선택
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return `rgb(${randomColor.r}, ${randomColor.g}, ${randomColor.b})`;
    };

    // 밝은 색상 범위에서 랜덤으로 색상을 선택하는 함수
    const getRandomBrightColor = () => {
        const r = Math.floor(150 + Math.random() * 105);
        const g = Math.floor(150 + Math.random() * 105);
        const b = Math.floor(150 + Math.random() * 105);
        return `rgb(${r}, ${g}, ${b})`;
    };

    useEffect(() => {
        if (imageRef.current && image) {
            const imgElement = imageRef.current;
            imgElement.onload = () => {
                // 식욕 자극 색상 생성
                const regionColor = getAppetizingColor();
                let keywordColor = getRandomBrightColor();

                // 두 색상이 동일할 경우, keywordColor를 새로 설정
                while (regionColor === keywordColor) {
                    keywordColor = getRandomBrightColor();
                }

                // 최종 색상 설정
                setColors({ regionTextColor: regionColor, keywordTextColor: keywordColor });
            };
        }
    }, [image]);
    //----------------------------------------------------------------------------------------------------------------
    /*크롬 뷰포트 계산*/
    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        // 윈도우 크기 변경 시 height 업데이트
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    //----------------------------------------------------------------------------------------------------------------

    // 키워드 선택 완료 시 콜백
    const handleKeywordsSelect = (selectedKeywords) => {
        setKeywords(selectedKeywords); // 선택된 키워드 저장
    };

    // 모달 열기/닫기 핸들러
    const closeModal = () => setIsModalOpen(false);

    return (
        <CreateImgUI
            image={image}
            handleImageUpload={handleImageUpload}
            region={region}
            keywords={keywords}
            handleAddText={handleAddText}
            isClick={isClick}
            handleSaveImage={handleSaveImage}
            windowHeight={windowHeight}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            goToHome={goToHome}
            imageRef={imageRef}
            colors={colors}
            onKeywordsSelect={handleKeywordsSelect}
            closeModal={closeModal}
            handleReset={handleReset}
        />
    );
};

export default CreateImgPage;