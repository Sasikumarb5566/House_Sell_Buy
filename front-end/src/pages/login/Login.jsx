import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginValidate } from "../../utils/formValidation";
import { loginUser } from "../../services/Users";
import NotificationBar from "../../components/notification-bar/NotificationBar";

const Login = () => {
  const [ formData, setFormData ] = useState({
    email: "",
    password: ""
  })
  const [notification, setNotification] = useState({
    message: "",
    type: "",
    visible: false,
  });

  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, visible: false }));
  };
  const showNotification = (message, type) => {
    setNotification({ message, type, visible: true });
    setTimeout(() => setNotification((prev) => ({ ...prev, visible: false })), 5000);
  };
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const validateLogin = await loginValidate(formData);
    if(validateLogin.success) {
      try {
        const response = await loginUser(formData);
        const data = response.data;
        if(!data.success) {
          showNotification(data.message, "error");
          return;
        }
        navigate('/dashboard',{ state: { email: formData.email } });
      } catch(error) {
        console.log("Error in checking user in client");
      }
    } else {
      showNotification(validateLogin.message, "error");
    }
  }

  return (
    <div className='bg-[#F5F7F8] flex justify-center items-center min-h-screen'>
      {notification.visible && (
        <NotificationBar
          message={notification.message}
          type={notification.type}
          onClose={hideNotification}
        />
      )}
      <form onSubmit={handleSubmit} className="bg-white md:max-w-md w-full shadow-xl p-6 rounded-xl max-w-sm ">
        <p className="text-center text-2xl font-semibold text-[#134B70]">Login</p>
        <div className="mt-6 flex flex-col gap-4">
          <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})} className="h-12 border-2 px-3 rounded-full text-[#134B70]" />
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="h-12 border-2 px-3 rounded-full text-[#134B70]" />
        </div>
        <div className="mt-6">
          <button type="submit" className="w-full bg-[#508C9B] hover:bg-[#457986] text-white h-12 rounded-full">Login</button>
          <p className="text-center mt-5">Not have an account? <Link to={'/register'} className="text-blue-600">Register</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login
