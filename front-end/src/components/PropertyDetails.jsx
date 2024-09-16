import React from "react";

const PropertyDetails = ({
  change,
  singleUser,
  property,
  owner,
  showMore,
  handleShowMore,
  handleOwner,
  isModalOpen,
  closeModal
}) => {
  return (
    <>
      {change && (
        <>
          <div className="md:w-1/4 w-full mt-4 md:mt-8 hidden md:block fixed right-36 top-30 shadow-xl p-4 max-h-[74vh] overflow-auto scrollable-content rounded-xl ">
          <button
              onClick={closeModal}
              className="absolute right-2 text-black bg-gray-200 shadow-2xl text-2xl hover:bg-gray-200 hover:text-black rounded-full px-2"
            >&times;</button>
            <div className="flex flex-col items-center text-center">
              <img
                src={singleUser.photo || "src/assets/images/default-avatar.jpg"}
                alt="Photo"
                className="w-32 rounded-full h-32 object-cover"
              />
              <p className="text-xl font-semibold mt-4">
                {singleUser.firstName} {singleUser.lastName}
              </p>
              <table className="mt-4">
                {owner ? (
                  <tbody>
                    <tr>
                      <th className="text-start">Place: </th>
                      <td className="text-gray-500">{singleUser.place}</td>
                    </tr>
                    <tr>
                      <th className="text-start">Email: </th>
                      <td className="text-gray-500">{singleUser.email}</td>
                    </tr>
                    <tr>
                      <th className="text-start">Phone: </th>
                      <td className="text-gray-500">{singleUser.phone}</td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <th className="text-end">Location: </th>
                      <td className="text-gray-500">{property.location}</td>
                    </tr>
                    <tr>
                      <th className="text-end">Size: </th>
                      <td className="text-gray-500">
                        {property.sizeWidth + "W  X  " + property.sizeLength + "L"}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-end">Floor: </th>
                      <td className="text-gray-500">{property.floor}</td>
                    </tr>
                    {showMore && (
                      <>
                        <tr>
                          <th className="text-end">Bedroom: </th>
                          <td className="text-gray-500">{property.bedroom}</td>
                        </tr>
                        <tr>
                          <th className="text-end">Attached Bathroom: </th>
                          <td className="text-gray-500">{property.bathroom}</td>
                        </tr>
                        <tr>
                          <th className="text-end">Hall: </th>
                          <td className="text-gray-500">
                            {property.hallWidth + "W  X  " + property.hallLength + "L"}
                          </td>
                        </tr>
                        <tr>
                          <th className="text-end">Kitchen: </th>
                          <td className="text-gray-500">
                            {property.kitchenWidth + "W  X  " + property.kitchenLength + "L"}
                          </td>
                        </tr>
                        <tr>
                          <th className="text-end">Varanda: </th>
                          <td className="text-gray-500">{property.varanda}</td>
                        </tr>
                        <tr>
                          <th className="text-end">Portigue: </th>
                          <td className="text-gray-500">{property.portigue}</td>
                        </tr>
                        <tr>
                          <th className="text-end">Car Parking: </th>
                          <td className="text-gray-500">{property.carparking}</td>
                        </tr>
                        <tr>
                          <th className="text-end">NearBy Hospital: </th>
                          <td className="text-gray-500">{property.hospital}</td>
                        </tr>
                        <tr>
                          <th className="text-end">NearBy School: </th>
                          <td className="text-gray-500">{property.school}</td>
                        </tr>
                        <tr>
                          <th className="text-end">NearBy Market: </th>
                          <td className="text-gray-500">{property.market}</td>
                        </tr>
                        <tr>
                          <th className="text-end">Price: </th>
                          <td className="text-gray-500">{property.price}</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                )}
              </table>
              <button
                className={`${
                  owner && "hidden"
                } mt-6 bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-full`}
                onClick={handleShowMore}
              >
                {showMore ? "Hide More" : "Show More"}
              </button>
              <button
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-full"
                onClick={handleOwner}
              >
                {owner ? "Property Details" : "Contact Owner"}
              </button>
            </div>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden flex justify-center items-center">
              <div className="bg-white w-11/12 md:w-1/3 p-6 rounded-lg shadow-lg overflow-y-auto max-h-screen">
              
                <div className="flex flex-col items-center text-center">
                <button
              onClick={closeModal}
              className="absolute right-9  text-black bg-gray-200 shadow-2xl text-2xl hover:bg-gray-200 hover:text-black rounded-full px-2"
            >&times;</button>
                  <img
                    src={singleUser.photo || "src/assets/images/default-avatar.jpg"}
                    alt="Photo"
                    className="w-32 rounded-full h-32 object-cover"
                  />
                  <p className="text-xl font-semibold mt-4">
                    {singleUser.firstName} {singleUser.lastName}
                  </p>
                  <table className="mt-4">
                    {owner ? (
                      <tbody>
                        <tr>
                          <th className="text-start">Place: </th>
                          <td className="text-gray-500">{singleUser.place}</td>
                        </tr>
                        <tr>
                          <th className="text-start">Email: </th>
                          <td className="text-gray-500">{singleUser.email}</td>
                        </tr>
                        <tr>
                          <th className="text-start">Phone: </th>
                          <td className="text-gray-500">{singleUser.phone}</td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody>
                        <tr>
                          <th className="text-start">Location: </th>
                          <td className="text-gray-500">{property.location}</td>
                        </tr>
                        <tr>
                          <th className="text-start">Size: </th>
                          <td className="text-gray-500">
                            {property.sizeWidth + "W  X  " + property.sizeLength + "L"}
                          </td>
                        </tr>
                        <tr>
                          <th className="text-start">Floor: </th>
                          <td className="text-gray-500">{property.floor}</td>
                        </tr>
                        {showMore && (
                          <>
                            <tr>
                              <th className="text-start">Bedroom: </th>
                              <td className="text-gray-500">{property.bedroom}</td>
                            </tr>
                            <tr>
                              <th className="text-start">Attached Bathroom: </th>
                              <td className="text-gray-500">{property.bathroom}</td>
                            </tr>
                            <tr>
                              <th className="text-start">Hall: </th>
                              <td className="text-gray-500">
                                {property.hallWidth + "W  X  " + property.hallLength + "L"}
                              </td>
                            </tr>
                            <tr>
                              <th className="text-start">Kitchen: </th>
                              <td className="text-gray-500">
                                {property.kitchenWidth + "W  X  " + property.kitchenLength + "L"}
                              </td>
                            </tr>
                            <tr>
                              <th className="text-start">Varanda: </th>
                              <td className="text-gray-500">{property.varanda}</td>
                            </tr>
                            <tr>
                              <th className="text-start">Portigue: </th>
                              <td className="text-gray-500">{property.portigue}</td>
                            </tr>
                            <tr>
                              <th className="text-start">Car Parking: </th>
                              <td className="text-gray-500">{property.carparking}</td>
                            </tr>
                            <tr>
                              <th className="text-start">NearBy Hospital: </th>
                              <td className="text-gray-500">{property.hospital}</td>
                            </tr>
                            <tr>
                              <th className="text-start">NearBy School: </th>
                              <td className="text-gray-500">{property.school}</td>
                            </tr>
                            <tr>
                              <th className="text-start">NearBy Market: </th>
                              <td className="text-gray-500">{property.market}</td>
                            </tr>
                            <tr>
                              <th className="text-start">Price: </th>
                              <td className="text-gray-500">{property.price}</td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    )}
                  </table>
                  <button
                    className={`${
                      owner && "hidden"
                    } mt-6 bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-full`}
                    onClick={handleShowMore}
                  >
                    {showMore ? "Hide More" : "Show More"}
                  </button>
                  <button
                    className="mt-2 bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-full"
                    onClick={handleOwner}
                  >
                    {owner ? "Property Details" : "Contact Owner"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PropertyDetails;
