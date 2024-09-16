import { Routes, Route } from "react-router-dom";
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Dashboard from "../pages/dashboard/Dashboard";
import SellForm from "../components/SellForm";
import Profile from "../pages/profile/Profile";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/dashboard" element = {<Dashboard />} />
        <Route path="/sell" element={<SellForm />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default Router
