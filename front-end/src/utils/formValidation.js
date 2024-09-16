export const registerValidate = async (user) => {
    const { phone, email, password } = user;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!phone || phone.toString().length !== 10) {
      return { success: false, message: "Enter a valid phone number" };
    }
    if (!emailRegex.test(email)) {
      return { success: false, message: "Enter a valid email address" };
    }
    if (password.length < 6) {
      return { success: false, message: "Password must be more than 5 characters" };
    }
    return { success: true };
  };
  

export const loginValidate = async (user) => {
    const { email, password } = user;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        return { success: false, message: "Enter valid email address"};
    }
    if(password.length < 6) {
        return { success: false, message: "Password must be more than 5"};
    }
    return { success: true };
}