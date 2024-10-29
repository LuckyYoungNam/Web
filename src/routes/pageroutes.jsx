import { Routes, Route} from 'react-router-dom';
import Login from '../containers/login/login.container';
import CreateImgPage from '../containers/createImg/createImg.container';
import CreateTextPage from '../containers/createText/createText.container';
import ResultTextPage from '../containers/resultText/resultText.container';
import MyPage from '../containers/myPage/myPage.container';
import MainPage from '../containers/main/main.container';
import RedirectPage from '../containers/login/redirectPage';

// 시작 페이지 라우트
function PageRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Login />}></Route>
         <Route path="/create/img" element={<CreateImgPage/>}></Route>
         <Route path="/create/text" element={<CreateTextPage/>}></Route>
         <Route path="/result/text" element={<ResultTextPage/>}></Route>
         <Route path="/mypage" element={<MyPage/>}></Route>
         <Route path="/main" element={<MainPage />}></Route>
         <Route path="/redirect" element={<RedirectPage />}></Route>
      </Routes>
   );
}

export default PageRoutes;