import * as S from "./phraseSelecet.style";

const PhraseSelecetUI = ({ keywordGroups, selectedKeywords, toggleKeyword, handleComplete }) => {
    return (
        <S.Wrapper>
            <S.Categories>키워드를 선택해주세요</S.Categories>
            <S.ContentWrapper>
                {keywordGroups.map((group, groupIndex) => (
                    <S.RegionBtnGroup key={groupIndex}>
                        {group.map((keyword) => (
                            <S.KeywordButton
                                key={keyword}
                                onClick={() => toggleKeyword(keyword)}
                                style={{
                                    backgroundColor: selectedKeywords.includes(keyword) ? "#496BEA" : "white",
                                    color: selectedKeywords.includes(keyword) ? "white" : "black",
                                }}
                            >
                                {keyword}
                            </S.KeywordButton>
                        ))}
                    </S.RegionBtnGroup>
                ))}
            </S.ContentWrapper>
            <S.AddBtn onClick={handleComplete}>선택 완료</S.AddBtn>
        </S.Wrapper>
    );
};

export default PhraseSelecetUI;