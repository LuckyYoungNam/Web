import { Routes, Route} from 'react-router-dom';
import Login from '../containers/login/login.container';
import CreatePage from '../containers/create';
import GamePage from '../containers/game';
import MainPage from '../containers/main/main.container';
import StorePage from '../containers/storepage';

// 시작 페이지 라우트
function PageRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Login />}></Route>
         <Route path="/create" element={<CreatePage />}></Route>
         <Route path="/game" element={<GamePage />}></Route>
         <Route path="/main" element={<MainPage />}></Route>
         <Route path="/shop" element={<StorePage />}></Route>
      </Routes>
   );
}

export default PageRoutes;