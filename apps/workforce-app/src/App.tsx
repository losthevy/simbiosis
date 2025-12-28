import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import Scanner from './pages/Scanner';
import Verification from './pages/Verification';
import TrafficDetail from './pages/TrafficDetail';
import HeatmapDetail from './pages/HeatmapDetail';
import NavigationDetail from './pages/NavigationDetail';
import Login from './pages/Login';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-blue-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span className="material-symbols-outlined text-4xl text-emerald-400 animate-spin">progress_activity</span>
          <p className="text-blue-200">Memuat...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

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

