import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { fetchAllUsers, fetchProperty, fetchUser } from "../services/Users";
import PropertyDetails from "./PropertyDetails";
import ImageModal from "./ImageModal";
import { likeDisLike } from "../services/Users";

const Posts = () => {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [property, setProperty] = useState({});
  const [change, setChange] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [owner, setOwner] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userResponse = await fetchAllUsers();
        const data = userResponse.data;
        if (!data.success) {
          console.log(data.message);
          return;
        }
        setUsers(data.users);
      } catch (error) {
        console.log("Error in fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleClick = async (email) => {
    try {
      const response = await fetchProperty(email);
      const data = response.data;
      if (!data.success) return;

      const userResponse = await fetchUser(email);
      const userData = userResponse.data;
      if (!userData.success) return;

      setChange(true);
      setSingleUser(userData.user);
      setProperty(data.property); 
      setIsModalOpen(true);
    } catch (error) {
      console.log("Error in fetching property:", error);
    }
  };

  const handleLike = async (email) => {
    console.log(email);
    try {
      const response = await likeDisLike({ email });
      const data = response.data;
  
      if (!data.success) {
        console.log(data.message);
        return;
      }
      console.log(data.message);
    } catch (error) {
      console.log("Error toggling like:", error);
    }
  };
  
  const handleOwner = () => {
    setOwner((prevOwner) => !prevOwner);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setChange(false);
  };

  const handleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const openImageModal = (images) => {
    setImages(images);
    setCurrentImage(0);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const getLikesCount = () => {
    return property && property.likes !== undefined ? property.likes : 0;
  };

  return (
    <div className="flex flex-col items-center py-6 md:max-w-screen-xl max-w-full mx-auto">
      {users.map((user) => (
        <div
          key={user._id}
          className="flex flex-col md:flex-row w-full px-2 md:px-10 mb-4 md:mb-8"
        >
          <div className="md:w-2/3 w-full h-auto md:h-screen overflow-y-auto pr-0 md:pr-6">
            <div className="shadow-2xl p-4 max-w-3xl w-full rounded-xl mb-4 ">
              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src={user.photo || "src/assets/images/default-avatar.jpg"}
                  onClick={() => handleClick(user.email)}
                  alt="Profile_Photo"
                  className="w-12 rounded-full h-12 object-cover cursor-pointer"
                />
                <div>
                  <p
                    className="text-md md:text-lg font-semibold cursor-pointer hover:underline hover:text-[#134B70]"
                    onClick={() => handleClick(user.email)}
                  >
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    {user.email}
                  </p>
                </div>
              </div>
              <div className="relative mt-4 columns-2 gap-2 cursor-pointer group">
                <img
                  src="src/assets/images/r1.jpg"
                  alt="r1"
                  className="w-full aspect-video mb-2 rounded-lg"
                />
                <img
                  src="src/assets/images/r5.jpg"
                  alt="r5"
                  className="rounded-lg"
                />
                <img
                  src="src/assets/images/r6.jpg"
                  alt="r6"
                  className="mb-2 rounded-lg"
                />
                <img
                  src="src/assets/images/r2.jpg"
                  alt="r2"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gray-200 bg-opacity-15 items-center justify-center group-hover:flex hidden" onClick={() =>
                      openImageModal([
                        "src/assets/images/r1.jpg",
                        "src/assets/images/r5.jpg",
                        "src/assets/images/r6.jpg",
                        "src/assets/images/r2.jpg",
                      ])
                    }>  
                </div>
              </div>
              <hr className="bg-gray-400 mt-3" />
              <div className="mt-3 flex items-center gap-2 md:gap-4">
              {getLikesCount()}
                <button>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="text-md md:text-lg border-2 p-2 rounded-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={(e) => handleLike(user.email)}
                  /> 
                </button>
                <button>
                  <FontAwesomeIcon
                    icon={faComment}
                    className="text-md md:text-lg border-2 p-2 rounded-full bg-green-500 hover:bg-green-600 text-white"
                  />
                </button>
                <button className="border-2 px-2 md:px-3 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  I'm Interested
                </button>
              </div>
            </div>
          </div>
          <PropertyDetails
            change={change}
            singleUser={singleUser}
            property={property}
            owner={owner}
            showMore={showMore}
            handleShowMore={handleShowMore}
            handleOwner={handleOwner}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
          />
        </div>
      ))}
      <ImageModal
        imageModalOpen={imageModalOpen}
        closeImageModal={closeImageModal}
        currentImage={currentImage}
        prevImage={prevImage}
        nextImage={nextImage}
        images={images}
      />
    </div>
  );
};

export default Posts;
