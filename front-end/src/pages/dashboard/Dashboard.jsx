import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Posts from "../../components/Posts";
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const { email } = location.state || {};

  useEffect(() => {
    if (email) {
      setVisible(true);
    } else {
      console.log("Email not passed");
    }
  }, [email]);

  return (
    <div>
      {visible ? (
        <>
          <NavBar email={email} />
          <Posts />
        </>
      ) : (
        <p>Please login first</p>
      )}
    </div>
  )
}

export default Dashboard
