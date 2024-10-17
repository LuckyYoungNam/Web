import * as S from "./main.style"
import Navigation from "../../common/navigation/navigation";
const MainUI = (props) => {
    return (
        <S.Wrapper>
            <S.Header>
                <S.MainLogo src="mainlogo.png" />
                <S.Header_Group>
                    <S.Header_Text>{props.userName}님,</S.Header_Text>
                    <S.Header_Text>"early bird catches the worm"</S.Header_Text>
                </S.Header_Group>
            </S.Header>
            <S.ListWrapper>
                <S.TitleGroup>
                    <S.ListLabel>모임목록</S.ListLabel>
                    <S.Listdes>내일의 기상 모임에 참여해보세요!</S.Listdes>
                </S.TitleGroup>
                <S.List_body_Wrapper>
                    {props.data.map((room) => (
                        <S.ListGroup key={room.id}>
                            {/*이미지 들어갈 자리*/}
                            <div style={{ borderRadius: "100%", background: "silver", width: "5rem", height: "5rem", textAlign: "center" }}></div>
                            <S.RoomGroup>
                                <S.RoomTitle>{room.title}</S.RoomTitle>
                                <S.UserCount>현재 참여 인원 수: {room.participants}</S.UserCount>
                            </S.RoomGroup>
                            <S.CoinGroup>
                                <S.CoinImage src="/coin.png" style={{ width: "1rem", height: "20%" }}></S.CoinImage>
                                <S.CoinNumber>{room.coin}</S.CoinNumber>
                            </S.CoinGroup>
                        </S.ListGroup>
                    ))}
                </S.List_body_Wrapper>
            </S.ListWrapper>
            <Navigation></Navigation>
        </S.Wrapper>
    )
}
export default MainUI;