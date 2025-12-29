import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import Scanner from './pages/Scanner';
import Verification from './pages/Verification';
import TrafficDetail from './pages/TrafficDetail';
import HeatmapDetail from './pages/HeatmapDetail';
import NavigationDetail from './pages/NavigationDetail';
import SimbiAI from './pages/SimbiAI';
import SimbiChat from './pages/SimbiChat';

import WasteCollection from './pages/WasteCollection';
import CostEfficiency from './pages/CostEfficiency';

function AppRoutes() {
  // Demo mode: bypass authentication for frontend-only deployment
  return (
    <Routes>
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/scan" element={<Scanner />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/traffic" element={<TrafficDetail />} />
      <Route path="/heatmap" element={<HeatmapDetail />} />
      <Route path="/navigation" element={<NavigationDetail />} />
      <Route path="/simbi-ai" element={<SimbiAI />} />
      <Route path="/chat-ai" element={<SimbiChat />} />
      <Route path="/waste-collection" element={<WasteCollection />} />
      <Route path="/cost-efficiency" element={<CostEfficiency />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

