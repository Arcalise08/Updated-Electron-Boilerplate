import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home";
import OtherPage from "./pages/other-page";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/other-page" element={<OtherPage />} />
      </Routes>
    </Router>
  );
}
