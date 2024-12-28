// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import NotesPage from "./pages/NotesPage";


// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/notes" element={<NotesPage />} />
//         <Route path="/" element={<LoginPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import NotesPage from "./pages/NotesPage";
// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<PublicRoute element={<LoginPage />} />} />
//         <Route path="/signup" element={<PublicRoute element={<SignupPage />} />} />
//         <Route path="/notes" element={<PrivateRoute element={<NotesPage />} />} />
//         <Route path="/" element={<PublicRoute element={<LoginPage />} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;




import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotesPage from "./pages/NotesPage";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PublicRoute element={<LoginPage />} />} />
        <Route path="/signup" element={<PublicRoute element={<SignupPage />} />} />
        <Route path="/notes" element={<PrivateRoute element={<NotesPage />} />} />
        <Route path="/" element={<PublicRoute element={<LoginPage />} />} />
        <Route path="*" element={<PublicRoute element={<LoginPage />} />} />
      </Routes>
    </Router>
  );
};

export default App;