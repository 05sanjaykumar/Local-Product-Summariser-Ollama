import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import DashBoard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
