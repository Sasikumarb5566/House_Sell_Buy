import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { fetchUser, fetchProperty } from "../../services/Users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import EditProfile from "../../components/EditProfile";
import EditProperty from "../../components/EditProperty";

const Profile = () => {
  const [visible, setVisible] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [editProperty, setEditProperty] = useState(false);
  const location = useLocation();
  const { email } = location.state || {};
  const [user, setUser] = useState({});
  const [property, setProperty] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      if (email) {
        setVisible(true);
        try {
          const userResponse = await fetchUser(email);
          const data = userResponse.data;
          if (!data.success) return;
          setUser(data.user);
          const propertyResponse = await fetchProperty(email);
          const propertyData = propertyResponse.data;
          if (!propertyData.success) return;
          setProperty(propertyData.property);
        } catch (error) {
          console.error("Failed to fetch user data", error);
        }
      } else {
        console.log("Email not passed");
      }
    };
    fetchUserData();
  }, [email]);

  const handleEditProfile = () => setEditProfile(!editProfile);
  const handleEditProperty = () => setEditProperty(!editProperty);
  const closeModal = (type) => {
    if (type === "profile") {
      setEditProfile(false);
    } else if (type === "property") {
      setEditProperty(false);
    }
  };
  

  return (
    <div>
      {visible ? (
        <>
          <NavBar email={email} profile={true} />
          <div className="flex md:flex-row flex-col py-6 md:max-w-screen-xl max-w-sm mx-auto gap-10">
            <div className="md:w-1/3 px-4 flex flex-col justify-center items-center bg-gray-100 py-4 rounded-xl">
              <div className="relative">
                <img
                  src={user.photo}
                  alt="profile_photo"
                  className="w-56 rounded-full "
                />
                <span>
                  <FontAwesomeIcon
                    icon={faPencil}
                    className="absolute bg-white cursor-pointer hover:bg-gray-200 p-3 rounded-full right-4 top-44"
                  />
                </span>
              </div>
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold mb-8">
                  {user.firstName + " " + user.lastName}
                </p>
                <div className="flex gap-2">
                  <p className="text-start font-semibold text-lg">Email:</p>
                  <p className="text-lg mb-3 text-gray-600 text-end">
                    {user.email}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="text-start font-semibold text-lg">Phone:</p>
                  <p className="text-lg mb-3 text-gray-600">{user.phone}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-start font-semibold text-lg">Address:</p>
                  <p className="text-lg mb-10 text-gray-600 text-start">
                    {user.place}
                  </p>
                </div>
              </div>
              <div
                className="bg-gray-200 w-full text-center border-slate-400 border-2 py-1 rounded-lg hover:bg-gray-300 cursor-pointer"
                onClick={handleEditProfile}
              >
                <button>Edit profile</button>
              </div>
            </div>
            <div className="bg-gray-100 md:w-2/3 rounded-xl px-8 py-4 gap-5 flex flex-col justify-around">
              <p className="text-2xl font-bold">Property</p>
              <div className="flex md:flex-row flex-col mt-6">
              <div className="md:w-1/2 text-center">
                  <table>
                    <tbody>
                      <tr>
                        <th className="text-lg text-start ">Size:</th>
                        <td className="text-gray-500">{property.sizeWidth}W X {property.sizeLength}L</td>
                      </tr>
                      <tr>
                        <th className="text-lg text-start">Floor:</th>
                        <td className="text-gray-500">{property.floor}</td>
                      </tr>
                      <tr>
                        <th className="text-lg text-start">Bedroom:</th>
                        <td className="text-gray-500">{property.bedroom}</td>
                      </tr>
                      <tr>
                        <th className="text-lg text-start w-1/2">Attached Bathroom:</th>
                        <td className="text-gray-500">{property.bathroom}</td>
                      </tr><tr>
                        <th className="text-lg text-start">Hall:</th>
                        <td className="text-gray-500">{property.hallWidth}W X {property.hallLength}L</td>
                      </tr>
                      <tr>
                        <th className="text-lg text-start">Kitchen:</th>
                        <td className="text-gray-500">{property.kitchenWidth}W X {property.kitchenLength}L</td>
                      </tr>
                      <tr>
                        <th className="text-lg text-start">Varanda:</th>
                        <td className="text-gray-500">{property.varanda}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="md:w-1/2 text-center">
                <table><tbody><tr>
                        <th className="text-lg text-start">Portigue:</th>
                        <td className="text-gray-500">{property.portigue}</td>
                      </tr>
                      <tr>
                        <th className="text-lg text-start w-1/2">Car Parking:</th>
                        <td className="text-gray-500">{property.carparking}</td>
                      </tr>
                      <tr>
                        <th className="text-lg text-start">NearBy Hospital:</th>
                        <td className="text-gray-500">{property.hospital}</td>
                      </tr>
                      <tr>
                        <th className="text-lg text-start">NearBy School:</th>
                        <td className="text-gray-500">{property.school}</td>
                      </tr>
                      <tr>
                        <th className="text-lg text-start">NearBy Market:</th>
                        <td className="text-gray-500">{property.market}</td>
                      </tr>
                      <tr>
                        <th className="text-lg text-start" text-start>Location:</th>
                        <td className="text-gray-500">{property.location}</td>
                      </tr>
                      <tr>
                        <th className="text-lg text-start">Price:</th>
                        <td className="text-gray-500">{property.price}</td>
                      </tr></tbody></table>
                </div>
              </div>
              <button className="bg-gray-200 text-center w-full py-1 border-2 border-slate-400 hover:bg-gray-300 rounded-lg" onClick={handleEditProperty}>
                Edit property
              </button>
            </div>
          </div>

          {editProfile && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 relative">
                <span
                  className="absolute top-2 right-4 cursor-pointer text-lg font-bold"
                  onClick={() => closeModal("profile")}
                >
                  &times;
                </span>
                <EditProfile email={email} closeModal={() => closeModal("profile")} />
              </div>
            </div>
          )}
          {editProperty && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 relative">
                <span
                  className="absolute top-2 right-4 cursor-pointer text-lg font-bold"
                  onClick={() => closeModal("property")}
                >
                  &times;
                </span>
                <EditProperty email={email} closeModal={() => closeModal("property")} />
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Please login first</p>
      )}
    </div>
  );
};

export default Profile;
