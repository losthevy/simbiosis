import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import Scanner from './pages/Scanner';
import Verification from './pages/Verification';
import TrafficDetail from './pages/TrafficDetail';
import HeatmapDetail from './pages/HeatmapDetail';
import NavigationDetail from './pages/NavigationDetail';

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

