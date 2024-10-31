import React, { useState } from "react";
import PhraseSelecetUI from "./phraseSelecet.presenter";
import { keywordList } from "../createImg/keywordList";

const PhraseSelecetPage = ({ onKeywordsSelect, closeModal }) => {
    // 선택된 키워드를 상태로 관리
    const [selectedKeywords, setSelectedKeywords] = useState([]);

    // 최대 3개 선택 제한
    const toggleKeyword = (keyword) => {
        if (selectedKeywords.includes(keyword)) {
            // 이미 선택된 키워드를 클릭하면 해제
            setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
        } else if (selectedKeywords.length < 3) {
            // 최대 3개까지 선택 가능
            setSelectedKeywords([...selectedKeywords, keyword]);
        } else {
            alert("최대 3개까지만 선택할 수 있습니다.");
        }
    };

    // 선택 완료 버튼 클릭 시
    const handleComplete = () => {
        onKeywordsSelect(selectedKeywords); // 부모 컴포넌트에 선택된 키워드 전달
        closeModal(); // 모달 닫기
    };

    // 키워드 목록을 3개씩 묶음
    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const keywordGroups = chunkArray(keywordList, 3);

    return (
        <PhraseSelecetUI
            keywordGroups={keywordGroups}
            selectedKeywords={selectedKeywords}
            toggleKeyword={toggleKeyword}
            handleComplete={handleComplete}
        />
    );
};

export default PhraseSelecetPage;