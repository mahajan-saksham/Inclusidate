import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ProfileFlow from './pages/ProfileFlow';
import SmartCallFlow from './pages/SmartCallFlow';
import NoBoundariesFlow from './pages/NoBoundariesFlow';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile-flow" element={<ProfileFlow />} />
        <Route path="/smart-call" element={<SmartCallFlow />} />
        <Route path="/no-boundaries" element={<NoBoundariesFlow />} />
      </Routes>
    </Router>
  );
}

export default App;