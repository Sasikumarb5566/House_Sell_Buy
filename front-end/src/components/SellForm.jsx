import { saveProperty } from "../services/Users";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const SellForm = ({ onClose }) => {
  const location = useLocation();
  const { email } = location.state || {};
  const [formData, setFormData] = useState({
    email: email || "",
    sizeWidth: "",
    sizeLength: "",
    floor: "",
    bedroom: "",
    bathroom: "",
    hallWidth: "",
    hallLength: "",
    kitchenLength: "",
    kitchenWidth: "",
    varanda: "",
    portigue: "",
    carparking: "",
    hospital: "",
    school: "",
    market: "",
    location: "",
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await saveProperty(formData);
      const data = response.data;
      if(!data.success) {
        console.log(data.message);
        return;
      } 
      onClose();
      console.log(data.message);
    } catch (error) {
      console.log("Error occured in storing user details in frontend: ", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen scrollable-content mx-auto ">
      <form
        className="shadow-xl p-8 rounded-xl w-[30rem]"
        onSubmit={handleSubmit}
      >
        <div className="text-2xl font-bold mb-4 text-[#134B70]">Post</div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <div className="mb-4">
              <div className="font-semibold mb-1">Email</div>
              <input type="email" className=" p-1 border-2 rounded-lg text-sm w-full" placeholder={email} disabled />
            </div>
            <div className="font-semibold">Size </div>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                id="size"
                placeholder="W"
                className="w-20 p-1 border-2 text-center rounded-lg text-sm"
                required
                value={formData.sizeWidth}
                onChange={(e) => setFormData({ ...formData, sizeWidth: e.target.value })}
              />
              <span className="font-semibold text-sm">X</span>
              <input
                type="text"
                id="size"
                placeholder="L"
                className="w-20 p-1 border-2 text-center rounded-lg text-sm"
                required
                value={formData.sizeLength}
                onChange={(e) => setFormData({ ...formData, sizeLength: e.target.value })}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="font-semibold mb-1">Floor </div>
            <input
              type="number"
              id="floor"
              placeholder="1"
              className="w-14 p-1 border-2 text-center rounded-lg text-sm"
              required
              value={formData.floor}
              onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
            />
          </div>
          <div>
            <div className="font-semibold mb-2">Rooms </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="noOfBedRoom" className="text-gray-500 text-sm">
                No of Bedrooms & Attached Bathroom
              </label>
              <div className="flex gap-4 text-sm">
                <input
                  type="number"
                  id="noOfBedRoom"
                  placeholder="1"
                  className="w-14 p-1 border-2 text-center rounded-lg"
                  required
                  value={formData.bedroom}
                  onChange={(e) => setFormData({ ...formData, bedroom: e.target.value })}
                />
                <select
                  name="bathroom"
                  id="bathroom"
                  className="w-20 p-1 border-2 text-center rounded-lg"
                  required
                  value={formData.bathroom}
                  onChange={(e) => setFormData({ ...formData, bathroom: e.target.value })}
                >
                  <option value="" disabled hidden>
                    Select
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col mt-4 text-sm">
              <label htmlFor="hall" className="text-gray-500">
                Hall
              </label>
              <div className="flex gap-2 items-center mt-1">
                <input
                  type="text"
                  id="hall"
                  placeholder="W"
                  className="w-24 p-1 border-2 text-center rounded-lg"
                  required
                  value={formData.hallWidth}
                  onChange={(e) => setFormData({ ...formData, hallWidth: e.target.value })}
                />
                <span className="font-semibold text-sm">X</span>
                <input
                  type="text"
                  id="hall"
                  placeholder="L"
                  className="w-24 p-1 border-2 text-center rounded-lg"
                  required
                  value={formData.hallLength}
                  onChange={(e) => setFormData({ ...formData, hallLength: e.target.value })}
                />
              </div>
            </div>
            <div className="items-center mt-4 text-sm">
              <label htmlFor="kitchen" className="text-gray-500">
                Kitchen
              </label>
              <div className="flex gap-2 items-center mt-1">
                <input
                  type="text"
                  id="kitchen"
                  placeholder="W"
                  className="w-24 p-1 border-2 text-center rounded-lg"
                  required
                  value={formData.kitchenWidth}
                  onChange={(e) => setFormData({ ...formData, kitchenWidth: e.target.value })}
                />
                <span className="font-semibold text-sm">X</span>
                <input
                  type="text"
                  id="kitchen"
                  placeholder="L"
                  className="w-24 p-1 border-2 text-center rounded-lg"
                  required
                  value={formData.kitchenLength}
                  onChange={(e) => setFormData({ ...formData, kitchenLength: e.target.value })}
                />
              </div>
            </div>
            <div className="items-center mt-4 text-sm">
              <label htmlFor="varanda" className="text-gray-500 mr-4">
                Varanda
              </label>
              <select
                name="varanda"
                id="varanda"
                className="w-20 p-1 border-2 text-center rounded-lg"
                required
                value={formData.varanda}
                onChange={(e) => setFormData({ ...formData, varanda: e.target.value })}
              >
                <option value="" disabled hidden>
                  Select
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="mt-4 items-center text-sm">
              <label htmlFor="portigue" className="text-gray-500 mr-4">
                Portigue
              </label>
              <select
                name="portigue"
                id="portigue"
                className="w-20 p-1 border-2 text-center rounded-lg"
                required
                value={formData.portigue}
                onChange={(e) => setFormData({ ...formData, portigue: e.target.value })}
              >
                <option value="" disabled hidden>
                  Select
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="mt-4 items-center text-sm">
              <label htmlFor="carParking" className="text-gray-500 mr-4">
                Car Parking
              </label>
              <select
                name="carParking"
                id="carParking"
                className="w-20 p-1 border-2 text-center rounded-lg"
                required
                value={formData.carparking}
                onChange={(e) => setFormData({ ...formData, carparking: e.target.value })}
              >
                <option value="" disabled hidden>
                  Select
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div>
            <div className="font-semibold">Nearby</div>
            <div className="mt-1 items-center text-sm">
              <label htmlFor="hospital" className="text-gray-500 mr-4">
                Hospital
              </label>
              <select
                name="hospital"
                id="hospital"
                className="w-20 p-1 border-2 text-center rounded-lg"
                required
                value={formData.hospital}
                onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
              >
                <option value="" disabled hidden>
                  Select
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="mt-4 items-center text-sm">
              <label htmlFor="school" className="text-gray-500 mr-4">
                School
              </label>
              <select
                name="school"
                id="school"
                className="w-20 p-1 border-2 text-center rounded-lg"
                required
                value={formData.school}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
              >
                <option value="" disabled hidden>
                  Select
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="mt-4 items-center text-sm">
              <label htmlFor="market" className="text-gray-500 mr-4">
                Market
              </label>
              <select
                name="market"
                id="market"
                className="w-20 p-1 border-2 text-center rounded-lg"
                required
                value={formData.market}
                onChange={(e) => setFormData({ ...formData, market: e.target.value })}
              >
                <option value="" disabled hidden>
                  Select
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="location" className="font-semibold">
              Location
            </label>
            <textarea
              name="location"
              id="location"
              className="border-2 rounded-lg text-sm p-1"
              rows={5}
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            ></textarea>
          </div>
          <div className=" flex items-center gap-4">
            <label htmlFor="price" className="font-semibold">
              Price{" "}
            </label>
            <input
              type="text"
              className="text-sm border-2 p-1 rounded-lg w-32"
              required
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>
        </div>
        <button
          className="bg-green-500 text-white w-full mt-6 rounded-full py-2"
          type="submit"
        >
          Post
        </button>
        <button
          className="text-red-500 text-center w-full mt-4"
          onClick={onClose}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default SellForm;
