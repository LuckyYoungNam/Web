import MainUI from "./main.presenter";
const MainPage= () => {
    console.log(localStorage.getItem('accessToken'));
    return(
        <MainUI></MainUI>
    )
}
export default MainPage;
