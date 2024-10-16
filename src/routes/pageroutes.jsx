import { Routes, Route} from 'react-router-dom';
import Login from '../containers/login/login.container';

// 시작 페이지 라우트
function PageRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Login />}></Route>
      </Routes>
   );
}

export default PageRoutes;