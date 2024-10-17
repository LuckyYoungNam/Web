import MainUI from "./main.presenter";
import { useState } from "react";
const MainPage= () => {
    const [userName, setUserName] = useState("권도훈");
    const data = [
        { id: 1, title: "6시 00분 기상 모임", participants: "5명", coin: 100 },
        { id: 2, title: "7시 00분 독서 모임", participants: "3명", coin: 200 },
        { id: 3, title: "8시 00분 운동 모임", participants: "8명", coin: 150 },
    ];
    return(
        <MainUI userName={userName} data={data}></MainUI>
    )
}
export default MainPage;
