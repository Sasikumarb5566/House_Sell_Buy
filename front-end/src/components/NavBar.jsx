import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faArrowDown,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import SellForm from "./SellForm";
import NotificationDropDown from "./NotificationDropDown";
import { useNavigate } from "react-router-dom";

const NavBar = ({ email, profile }) => {
  const [dropDown, setDropDown] = useState(false);
  const [sellForm, setSellForm] = useState(false);
  const [notification, setNotification] = useState(false);
  const navigate = useNavigate();

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleSellForm = () => {
    setSellForm(!sellForm);
  };

  const handleNotification = () => {
    setNotification(!notification);
  };

  useEffect(() => {
    if (sellForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sellForm]);

  return (
    <div className="relative bg-white shadow-lg">
      <nav className="flex justify-between items-center py-6 max-w-screen-xl mx-auto">
        <div className="md:ml-12 ml-6 flex gap-3 text-[#134B70]">
          <p className="text-2xl font-semibold">
            {profile ? "Profile" : "Dashboard"}
          </p>
          <button className="md:hidden" onClick={handleDropDown}>
            <FontAwesomeIcon icon={faArrowDown} className="text-lg" />
          </button>
        </div>
        <div className="md:mr-12 mr-6 flex md:gap-12 gap-8 items-center">
          <button
            className="md:flex hidden items-center gap-1 p-2 rounded-lg text-lg hover:bg-gray-200text-black "
            onClick={handleSellForm}
          >
            <FontAwesomeIcon icon={faUpload} className="text-md" />{" "}
          </button>
          <button className="relative" onClick={handleNotification}>
            <span className="w-2 h-2 bg-red-500 rounded-full absolute -right-2 -top-1"></span>
            <FontAwesomeIcon icon={faBell} className="text-xl" />
          </button>
          {notification && <NotificationDropDown />}
          {!profile && <button onClick={() => navigate("/profile", { state: { email } })}>
            <FontAwesomeIcon icon={faUser} className="text-lg mr-2" />
          </button>}
        </div>
      </nav>
      {dropDown && (
        <div className="py-2">
          <button
            className="md:hidden bg-red-500 text-white w-full py-2 rounded-full"
            onClick={handleSellForm}
          >
            <FontAwesomeIcon icon={faPlus} className="text-md" />{" "}
            <span>Post</span>
          </button>
        </div>
      )}
      {sellForm && (
        <>
          <div className="fixed inset-0 bg-opacity-50 backdrop-blur-lg z-10"></div>
          <div className="fixed inset-0 z-20 flex justify-center items-center overflow-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg max-h-full overflow-y-auto scrollable-content">
              <SellForm onClose={handleSellForm} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
