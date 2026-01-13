import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotesPage from "./pages/NotesPage";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import WakeUpModal from "./components/wakeUpModal";
import { useWakeUpBackend } from "./hooks/useWakeUpBackend";

const App: React.FC = () => {
  const waking = useWakeUpBackend();
  return (
    <>
     <WakeUpModal open={waking} />
    <Router>
      <Routes>
        <Route path="/login" element={<PublicRoute element={<LoginPage />} />} />
        <Route path="/signup" element={<PublicRoute element={<SignupPage />} />} />
        <Route path="/notes" element={<PrivateRoute element={<NotesPage />} />} />
        <Route path="/" element={<PublicRoute element={<SignupPage />} />} />
        <Route path="*" element={<PublicRoute element={<LoginPage />} />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;