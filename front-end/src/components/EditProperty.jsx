import React, { useEffect, useState } from "react";
import { fetchProperty, updateProperty } from "../services/Users";

const EditProperty = ({ email, closeModal }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProperty(email);
      const data = response.data;
      if (!data.success) return;
      setFormData(data.property);
    };
    fetchData();
  }, [email]);

  const handeSizeWidth = (change) => {
    setFormData((prevData) => ({ ...prevData, sizeWidth: change }));
  };
  const handeSizeLength = (change) => {
    setFormData((prevData) => ({ ...prevData, sizeLength: change }));
  };
  const handeFloor = (change) => {
    setFormData((prevData) => ({ ...prevData, floor: change }));
  };
  const handleBedroom = (change) => {
    setFormData((prevData) => ({ ...prevData, bedroom: change }));
  };
  const handeHallWidth = (change) => {
    setFormData((prevData) => ({ ...prevData, hallWidth: change }));
  };
  const handeHallLength = (change) => {
    setFormData((prevData) => ({ ...prevData, hallLength: change }));
  };
  const handeKitchenWidth = (change) => {
    setFormData((prevData) => ({ ...prevData, kitchenWidth: change }));
  };
  const handleKitchenLength = (change) => {
    setFormData((prevData) => ({ ...prevData, kitchenLength: change }));
  };
  const handeLocation = (change) => {
    setFormData((prevData) => ({ ...prevData, location: change }));
  };
  const handePrice = (change) => {
    setFormData((prevData) => ({ ...prevData, price: change }));
  };

  const handleSave = async () => {
    try {
      const response = await updateProperty(email, formData);
      const data = response.data;
      if (data.success) {
        closeModal();
      } else {
        console.log("Save failed:", data.message);
      }
    } catch (error) {
      console.log("Error in frontend: " + error);
    }
  };

  return (
    <div className="overflow-y-auto max-h-[80vh] scrollable-content">
      <p className="text-2xl font-bold">Edit Property</p>
      <div className="mt-6 flex flex-col">
        <label className="font-semibold mb-2">Size</label>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 flex-col  md:w-1/2">
            <label className="text-sm text-gray-400">Width</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={formData.sizeWidth}
                onChange={(e) => handeSizeWidth(e.target.value)}
                className="border-2 px-2 py-1 rounded-lg w-full"
              />
              <span className="font-bold">X</span>
            </div>
          </div>
          <div className=" md:w-1/2">
            <label className="text-sm text-gray-400">Length</label>
            <input
              type="text"
              value={formData.sizeLength}
              onChange={(e) => handeSizeLength(e.target.value)}
              className="border-2 px-2 py-1 rounded-lg w-full"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="font-semibold mb-2">Floor</label>
          <input
            type="number"
            value={formData.floor}
            onChange={(e) => handeFloor(e.target.value)}
            className="border-2 px-2 py-1 rounded-lg w-full"
          />
        </div>
        <div className="mt-4">
          <label className="font-semibold mb-2">Bedroom</label>
          <input
            type="number"
            value={formData.bedroom}
            onChange={(e) => handleBedroom(e.target.value)}
            className="border-2 px-2 py-1 rounded-lg w-full"
          />
        </div>
        <div className="mt-4">
          <label className="font-semibold mb-2">Attached Bathroom</label>
          <select
            value={formData.bathroom}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                bathroom: e.target.value,
              }))
            }
            className="border-2 px-2 py-1 rounded-lg w-full"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <label className="font-semibold mb-2 mt-4">Hall</label>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 flex-col  md:w-1/2">
            <label className="text-sm text-gray-400">Width</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={formData.hallWidth}
                onChange={(e) => handeHallWidth(e.target.value)}
                className="border-2 px-2 py-1 rounded-lg w-full"
              />
              <span className="font-bold">X</span>
            </div>
          </div>
          <div className=" md:w-1/2">
            <label className="text-sm text-gray-400">Length</label>
            <input
              type="text"
              value={formData.hallLength}
              onChange={(e) => handeHallLength(e.target.value)}
              className="border-2 px-2 py-1 rounded-lg w-full"
            />
          </div>
        </div>
        <label className="font-semibold mb-2 mt-4">Kitchen</label>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 flex-col  md:w-1/2">
            <label className="text-sm text-gray-400">Width</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={formData.kitchenWidth}
                onChange={(e) => handeKitchenWidth(e.target.value)}
                className="border-2 px-2 py-1 rounded-lg w-full"
              />
              <span className="font-bold">X</span>
            </div>
          </div>
          <div className=" md:w-1/2">
            <label className="text-sm text-gray-400">Length</label>
            <input
              type="text"
              value={formData.kitchenLength}
              onChange={(e) => handleKitchenLength(e.target.value)}
              className="border-2 px-2 py-1 rounded-lg w-full"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="font-semibold mb-2">Varanda</label>
          <select
            value={formData.varanda}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                varanda: e.target.value,
              }))
            }
            className="border-2 px-2 py-1 rounded-lg w-full"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="font-semibold mb-2">Portigue</label>
          <select
            value={formData.portigue}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                portigue: e.target.value,
              }))
            }
            className="border-2 px-2 py-1 rounded-lg w-full"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="font-semibold mb-2">Car Parking</label>
          <select
            value={formData.carparking}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                carparking: e.target.value,
              }))
            }
            className="border-2 px-2 py-1 rounded-lg w-full"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="font-semibold mb-2">Nearby Hospital</label>
          <select
            value={formData.hospital}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                hospital: e.target.value,
              }))
            }
            className="border-2 px-2 py-1 rounded-lg w-full"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="font-semibold mb-2">Nearby School</label>
          <select
            value={formData.school}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                school: e.target.value,
              }))
            }
            className="border-2 px-2 py-1 rounded-lg w-full"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="font-semibold mb-2">Nearby Market</label>
          <select
            value={formData.market}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                market: e.target.value,
              }))
            }
            className="border-2 px-2 py-1 rounded-lg w-full"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="font-semibold mb-2">Location</label>
          <textarea rows={3}
            type="number"
            value={formData.location}
            onChange={(e) => handeLocation(e.target.value)}
            className="border-2 px-2 py-1 rounded-lg w-full"
          />
        </div>
        <div className="mt-4">
          <label className="font-semibold mb-2">Price</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => handePrice(e.target.value)}
            className="border-2 px-2 py-1 rounded-lg w-full"
          />
        </div>
      </div>
      <button
        className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default EditProperty;
