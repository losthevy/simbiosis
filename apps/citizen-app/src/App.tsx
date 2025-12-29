import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import Scanner from './pages/Scanner';
import Login from './pages/Login';
import Register from './pages/Register';
import ChallengeDetail from './pages/ChallengeDetail';
import PlasticFreeChallengeDetail from './pages/PlasticFreeChallengeDetail';
import ChallengeList from './pages/ChallengeList';
import RedeemPoints from './pages/RedeemPoints';
import TopUp from './pages/TopUp';
import TopUpConfirm from './pages/TopUpConfirm';
import EcoPointsHistory from './pages/EcoPointsHistory';
import PlasticFreeHistory from './pages/PlasticFreeHistory';
import WeeklyImpact from './pages/WeeklyImpact';
import ChallengeProposal from './pages/ChallengeProposal';
import LeaderboardDetail from './pages/LeaderboardDetail';
import ChatDetail from './pages/ChatDetail';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import BankSampahAccess from './pages/BankSampahAccess';
import BankSampahSchedule from './pages/BankSampahSchedule';
import MyChallenges from './pages/MyChallenges';
import SimbiAI from './pages/SimbiAI';
import SimbiChat from './pages/SimbiChat';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/scan" element={<Scanner />} />
          <Route path="/challenges" element={<ChallengeList />} />
          <Route path="/challenge-proposal" element={<ChallengeProposal />} />
          <Route path="/redeem" element={<RedeemPoints />} />
          <Route path="/top-up" element={<TopUp />} />
          <Route path="/leaderboard" element={<LeaderboardDetail />} />
          <Route path="/chat/:id" element={<ChatDetail />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/top-up-confirm" element={<TopUpConfirm />} />
          <Route path="/weekly-impact" element={<WeeklyImpact />} />
          <Route path="/history" element={<EcoPointsHistory />} />
          <Route path="/challenge-detail" element={<ChallengeDetail />} />
          <Route path="/challenge-detail-plastic-free" element={<PlasticFreeChallengeDetail />} />
          <Route path="/plastic-free-history" element={<PlasticFreeHistory />} />
          <Route path="/bank-sampah" element={<BankSampahAccess />} />
          <Route path="/bank-sampah-schedule" element={<BankSampahSchedule />} />
          <Route path="/my-challenges" element={<MyChallenges />} />
          <Route path="/simbi-ai" element={<SimbiAI />} />
          <Route path="/chat-ai" element={<SimbiChat />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
