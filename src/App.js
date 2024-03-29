import "./App.css";
import HomePage from "./pages/HomePage";
import LikedSchemePage from "./pages/LikedSchemePage";
import SavedSchemePage from "./pages/SavedSchemePage";
import SchemeDetailPage from "./pages/SchemeDetailPage";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App bg-violet-50 min-h-[100vh]">
      <Router>
        <div className="py-4">
          <nav>
            <ul className="flex justify-between py-2 shadow-md w-[100%] px-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/saved">saved</Link>
              </li>
              <li>
                <Link to="/liked">liked Scheme</Link>
              </li>
            </ul>
          </nav>
          <div className="px-2">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/saved" element={<SavedSchemePage />} />
              <Route path="/liked" element={<LikedSchemePage />} />
              <Route path="/schemedetails" element={<SchemeDetailPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
