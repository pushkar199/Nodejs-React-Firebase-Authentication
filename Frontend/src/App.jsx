import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="bg-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <span className="font-semibold text-xl">Music APP</span>
            </div>
            <div className="flex space-x-4">
              <Link to="/login" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
                Login
              </Link>
              <Link to="/register" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
                Register
              </Link>
            </div>
          </div>
        </nav>
        <div className="p-0">
          <Routes>
            <Route exact path="/login" element={<LoginForm />} />
            <Route exact path="/register" element={<RegisterForm />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
