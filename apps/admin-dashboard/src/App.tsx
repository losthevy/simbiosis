import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import CreateReport from './pages/CreateReport';
import AllCollections from './pages/AllCollections';
import NewAudit from './pages/NewAudit';
import DetailedStatistics from './pages/DetailedStatistics';
import ReportAccess from './pages/ReportAccess';

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

