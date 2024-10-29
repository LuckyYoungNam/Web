import CreateImgUI from "./createImg.presenter"; // 이미 있는 CreateImgUI를 사용
import { useState, useEffect } from "react";
import html2canvas from "html2canvas"; // html2canvas 가져오기

const CreateImgPage = () => {
    const [image, setImage] = useState(null); // 이미지 상태 관리
    const [region, setRegion] = useState("서울"); // 문구 추가를 위한 지역 선택 (기본값 서울)
    const [keywords, setKeywords] = useState([]); // 키워드 상태 관리
    const [isClick, setIsClick] = useState(false); // 문구가 추가되었는지 여부 관리
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

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
        const selectedData = data.find((item) => item.region === region);
        if (selectedData) {
            setKeywords(selectedData.keyword);
        }
        setIsClick(true); // 문구 추가 여부를 true로 설정
    };
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

    // 문구 추가 임시 더미 데이터
    const data = [
        {
            region: "서울",
            keyword: ["중독성 강함", "맛있음", "매콤함"]
        }
    ];

    return (
        <CreateImgUI
            image={image}
            handleImageUpload={handleImageUpload}
            region={region}
            keywords={keywords}
            handleAddText={handleAddText}
            isClick={isClick}
            handleSaveImage={handleSaveImage}
            windowHeight={windowHeight} // windowHeight를 전달
        />
    );
};

export default CreateImgPage;