import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import CreateReport from './pages/CreateReport';
import AllCollections from './pages/AllCollections';
import NewAudit from './pages/NewAudit';
import DetailedStatistics from './pages/DetailedStatistics';
import ReportAccess from './pages/ReportAccess';
import Login from './pages/Login';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span className="material-symbols-outlined text-4xl text-green-500 animate-spin">progress_activity</span>
          <p className="text-gray-400">Memuat...</p>
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
      <Route path="/create-report" element={<CreateReport />} />
      <Route path="/all-collections" element={<AllCollections />} />
      <Route path="/new-audit" element={<NewAudit />} />
      <Route path="/detailed-statistics" element={<DetailedStatistics />} />
      <Route path="/report-access" element={<ReportAccess />} />
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

