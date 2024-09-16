import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/Users";
import { registerValidate } from "../../utils/formValidation";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import NotificationBar from "../../components/notification-bar/NotificationBar";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    place: "",
    email: "",
    password: "",
    photo: null,
  });
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
  const [photoFile, setPhotoFile] = useState(null);
  const [showCropModal, setShowCropModal] = useState(false);
  const cropperRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhotoFile(file);
    setShowCropModal(true);
  };

  const handleCropSave = () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current.cropper;
      if (cropper) {
        cropper.getCroppedCanvas().toBlob((blob) => {
          setFormData({ ...formData, photo: blob });
          setShowCropModal(false);
        }, "image/jpeg");
      } else {
        console.error('Cropper instance is not properly initialized');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = await registerValidate(formData);
    if (validation.success) {
      try {
        const formDataToSend = new FormData();
        for (const key in formData) {
          formDataToSend.append(key, formData[key]);
        }

        const response = await registerUser(formDataToSend); 
        const data = response.data;
        if (!data.success) {
          showNotification(data.message, "error");
          //console.log(data.message);
          return;
        }
        showNotification(data.message, "error");
        navigate("/");
      } catch (error) {
        console.log("Error in registering user: ", error);
      }
    } else {
      //console.log(validation.message);
      showNotification(validation.message, "error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F5F7F8]">
      {notification.visible && (
        <NotificationBar
          message={notification.message}
          type={notification.type}
          onClose={hideNotification}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="md:max-w-md bg-white w-full max-w-sm p-6 rounded-2xl shadow-xl"
        encType="multipart/form-data"
      >
        <div className="text-center text-2xl font-semibold text-[#134B70]">
          Register
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            required
            className="h-12 border-2 p-1 rounded-full px-3 text-[#134B70]"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            required
            className="h-12 border-2 p-1 rounded-full px-3 text-[#134B70]"
          />
          <input
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
            className="h-12 border-2 p-1 rounded-full px-3 text-[#134B70]"
          />
          <textarea rows={3}
            type="text"
            placeholder="Address"
            name="place"
            value={formData.place}
            onChange={(e) =>
              setFormData({ ...formData, place: e.target.value })
            }
            required
            className=" border-2 p-1 rounded-2xl px-3 text-[#134B70]"
          ></textarea>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="h-12 border-2 p-1 rounded-full px-3 text-[#134B70]"
          />
          <input
            type="password"
            placeholder="Create Password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            className="h-12 border-2 p-1 rounded-full px-3 text-[#134B70]"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            placeholder="Profile Photo"
            className="h-12 p-1 rounded-full px-3 text-[#134B70]"
            required
          />
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="h-12 bg-[#508C9B] hover:bg-[#457986] text-white w-full rounded-full"
          >
            Register
          </button>
        </div>
      </form>

      {showCropModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Cropper
              src={photoFile ? URL.createObjectURL(photoFile) : ''}
              style={{ height: 400, width: '100%' }}
              initialAspectRatio={1}
              aspectRatio={1}
              guides={false}
              ref={cropperRef}
            />
            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
                onClick={handleCropSave}
              >
                Save
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-full"
                onClick={() => setShowCropModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
