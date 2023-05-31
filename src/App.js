import "./App.css";
import { Routes, Route, Navigate} from 'react-router-dom';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgetPassword from "./components/Forget-Password/ForgetPassword";
import ResetPassword from "./components/Reset-Password/ResetPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forget-password" element={<ForgetPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
