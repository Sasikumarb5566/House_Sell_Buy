import React from 'react';

const ImageModal = ({ imageModalOpen, closeImageModal, currentImage, prevImage, nextImage, images }) => {
  return (
    <>
      {imageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white  rounded-lg shadow-lg max-w-4xl max-h-screen relative">
            <button
              onClick={closeImageModal}
              className="absolute md:-top-7 md:-right-7 -top-10 right-2 text-white text-2xl hover:bg-gray-200 hover:text-black rounded-full px-2"
            >
              &times;
            </button>
            <div className="relative">
              <img 
                src={images[currentImage]} 
                alt={`Slide ${currentImage + 1}`} 
                className="w-full h-96 object-cover rounded-lg" 
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900"
              >
                &lt;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
