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
        <Route path="/tokens" element={
          <div className="min-h-screen w-full bg-smoke">
            <div className="max-w-[420px] mx-auto min-h-screen bg-white shadow-xl p-6">
              <div className="bg-gradient-to-br from-honey-light to-honey rounded-bubble p-8 text-center mb-6">
                <h1 className="text-2xl font-display font-bold text-charcoal">
                  Design System
                </h1>
              </div>
              <div className="space-y-4">
                <div className="bg-smoke-dark rounded-card p-6">
                  <h2 className="font-display font-bold text-lg mb-2">Colors</h2>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-12 bg-honey rounded-lg"></div>
                    <div className="h-12 bg-plum rounded-lg"></div>
                    <div className="h-12 bg-mint rounded-lg"></div>
                    <div className="h-12 bg-coral rounded-lg"></div>
                  </div>
                </div>
                <div className="bg-smoke-dark rounded-card p-6">
                  <h2 className="font-display font-bold text-lg mb-2">Typography</h2>
                  <p className="text-sm text-text-secondary">
                    Display: Bricolage Grotesque<br />
                    Body: Inter
                  </p>
                </div>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;