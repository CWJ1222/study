import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <nav className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
          <ul className="list-none p-0 m-0 space-y-4">
            <li>
              <Link to="/signin" className="text-blue-500 hover:underline">Sign In</Link>
            </li>
            <li>
              <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;