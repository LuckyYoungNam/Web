import logo from './logo.svg';
import './App.css';
import PageRoutes from './routes/pageroutes.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <PageRoutes />
    </Router>
  );
}

export default App;
