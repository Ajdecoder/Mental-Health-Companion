import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from "./utils/GoogleLogin";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./componenets/Dashboard";
import { useState, useEffect } from "react";
import RefrshHandler from "./RefreshHandler";
import NotFound from "./utils/NotFound";
import Home from "./componenets/Home";
import Navbar from "./componenets/Navbar";
import { Resources } from "./componenets/Resources";
import { Therapists } from "./componenets/Therapists";
import { Community } from "./componenets/Community";
import ProfilePage from "./componenets/Profile/ProfilePage";
import { TestPage } from "./componenets/MoodTest/TestPage";
import { FaceScan } from "./componenets/Tests/FaceScan";
import { InputScan } from "./componenets/Tests/InputScan";
import { UserContext, UserProvider } from "./context/UserContext";
import RevenueModel from "./componenets/RevenueModel";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("user-info");
  });

  useEffect(() => {
    console.log("Auth state:", isAuthenticated);
  }, [isAuthenticated]);

  const clientId = import.meta.env.VITE_AUTHID;

  console.log(clientId);

  const GoogleWrapper = () => (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin setIsAuthenticated={setIsAuthenticated} />
    </GoogleOAuthProvider>
  );

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <UserProvider>
        <Navbar />{" "}
        {/* ✅ Navbar placed outside <Routes> for global rendering */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/therapists" element={<Therapists />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<GoogleWrapper />} />
          <Route path="/mood-test" element={<TestPage />} />
          <Route path="/face-scan" element={<FaceScan />} />
          <Route path="/text-scan" element={<InputScan />} />
          <Route path="/pricing" element={<RevenueModel />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute element={<ProfilePage />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
