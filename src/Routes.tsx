import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import WelcomePage from "./WelcomePage";
import ConfirmEmail from "./ConfirmEmail";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/confirmEmail/:email" element={<ConfirmEmail />} />
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  );
};

export default AppRoutes;
