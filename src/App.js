import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgetPassword from "./components/Forget-Password/ForgetPassword";
import ResetPassword from "./components/Reset-Password/ResetPassword";
import SuccessMessage from "./components/Success-Message/SuccessMessage";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import VerificationCode from "./components/VerificationCode/VerificationCode";
import CustomLayout from "./components/Layout/Layout/Layout";
import Profile from "./pages/Profile";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([]));
    }
  }, []);

  const layoutWrapper = (component) => (
    <PrivateRoute>
      <CustomLayout>{component}</CustomLayout>
    </PrivateRoute>
  );

  return (
    <div>
      <Routes>
        <Route
          path="/register"
          element={
            <LoginRedirect>
              <Register />
            </LoginRedirect>
          }
        />
        <Route
          path="/login"
          element={
            <LoginRedirect>
              <Login />
            </LoginRedirect>
          }
        />
        <Route path="/" element={layoutWrapper(<Dashboard />)} />
        <Route path="/profile" element={layoutWrapper(<Profile />)} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verification-code" element={<VerificationCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/success-message" element={<SuccessMessage />} />
        <Route path="*" element={layoutWrapper(<PageNotFound />)} />
      </Routes>
    </div>
  );
}

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const LoginRedirect = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default App;
