import React, { useEffect, useState } from "react";
import { fetchUser, saveUser } from "../services/Users";

const EditProfile = ({ email, closeModal }) => {
  const [formData, setFormData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUser(email);
      const data = response.data;
      if (!data.success) return;
      setFormData(data.user);
    };
    fetchData();
  }, [email]);

  const handleFirstNameChange = (firstName) => {
    setFormData((prevData) => ({ ...prevData, firstName: firstName }));
  };

  const handleLastNameChange = (lastName) => {
    setFormData((prevData) => ({ ...prevData, lastName: lastName }));
  };

  const handlePhoneChange = (newPhone) => {
    setFormData((prevData) => ({ ...prevData, phone: newPhone }));
  };

  const handleAddressChange = (newAddress) => {
    setFormData((prevData) => ({ ...prevData, place: newAddress }));
  };

  const handleSave = async() => {
    try{
        const response = await saveUser(email, formData);
        const data = response.data;
        if (data.success) {
          closeModal();
        } else {
          console.log("Save failed:", data.message);
        }
    } catch(error) {
        console.log("Error in frontend: " + error);
    }
  };

  return (
    <div>
      <p className="text-2xl font-bold">Edit Profile</p>
      <div className="mt-6 flex flex-col">
        <div className="flex gap-4 md:flex-row flex-col">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-sm text-gray-400">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleFirstNameChange(e.target.value)}
              className="border-2 px-2 py-1 rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-sm text-gray-400">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleLastNameChange(e.target.value)}
              className="border-2 px-2 py-1 rounded-lg w-full"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-sm text-gray-400">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            className="border-2 px-2 py-1 rounded-lg w-full"
          />
        </div>
        <textarea
          type="text"
          value={formData.place}
          onChange={(e) => handleAddressChange(e.target.value)}
          className="border-2 px-2 py-1 rounded-lg mt-4 w-full"
        />
      </div>
      <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default EditProfile;
