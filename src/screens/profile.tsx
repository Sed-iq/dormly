// @ts-nocheck

import { useState, useEffect, useRef } from "react";
import { ArrowLeftCircle } from "lucide-react";
import { FaCamera, FaUser, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProfileScreen() {
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [editedData, setEditedData] = useState({});

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    // Load profile data from localStorage
    const storedData = localStorage.getItem("profile-details");
    if (storedData) {
      const data = JSON.parse(storedData);
      setProfileData(data);
      setEditedData(data);
      if (data.profilePicture) {
        setCapturedImage(data.profilePicture);
      }
    }
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setShowCamera(true);
    } catch (error) {
      alert("Camera access denied or not available");
      console.error("Camera error:", error);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0);
      const base64Image = canvas.toDataURL("image/jpeg", 0.8);

      setCapturedImage(base64Image);
      stopCamera();

      // Update localStorage with the new profile picture
      const updatedProfile = { ...profileData, profilePicture: base64Image };
      localStorage.setItem("profile-details", JSON.stringify(updatedProfile));
      setProfileData(updatedProfile);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    setShowCamera(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData({ ...profileData });
  };

  const handleSave = () => {
    const updatedProfile = { ...editedData };
    if (capturedImage) {
      updatedProfile.profilePicture = capturedImage;
    }

    localStorage.setItem("profile-details", JSON.stringify(updatedProfile));
    setProfileData(updatedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedData({ ...profileData });
    setIsEditing(false);
  };

  if (!profileData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-gray-600">No profile data found</p>
          <p className="text-sm text-gray-500 mt-2">Please sign up first</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <Link to={"/"}>
            <div className="flex space-x-4">
              <ArrowLeftCircle />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                My Profile
              </h1>
            </div>
          </Link>
          <p className="text-gray-600">Manage your account information</p>
        </div>

        {/* Profile Picture Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Profile Picture
          </h2>

          <div className="flex flex-col items-center space-y-4">
            {/* Profile Picture Display */}
            <div className="relative">
              {capturedImage ? (
                <img
                  src={capturedImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center border-4 border-gray-200">
                  <FaUser className="text-4xl text-gray-500" />
                </div>
              )}

              <button
                onClick={startCamera}
                className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors"
              >
                <FaCamera className="text-sm" />
              </button>
            </div>

            {/* Camera Interface */}
            {showCamera && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold">Take a Photo</h3>
                  </div>

                  <div className="relative mb-4">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full rounded-lg"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={capturePhoto}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Capture
                    </button>
                    <button
                      onClick={stopCamera}
                      className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            <canvas ref={canvasRef} className="hidden" />
          </div>
        </div>

        {/* Profile Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Personal Information
            </h2>

            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
              >
                <FaEdit />
                <span>Edit</span>
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  <FaSave className="text-sm" />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-1 bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700"
                >
                  <FaTimes className="text-sm" />
                  <span>Cancel</span>
                </button>
              </div>
            )}
          </div>

          <div className="grid gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedData.fullName || ""}
                  onChange={(e) =>
                    setEditedData({ ...editedData, fullName: e.target.value })
                  }
                  className="w-full border-2 border-gray-300 p-2 text-sm focus:border-blue-500 outline-none rounded"
                />
              ) : (
                <p className="text-gray-900 bg-gray-50 p-2 rounded">
                  {profileData.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={editedData.email || ""}
                  onChange={(e) =>
                    setEditedData({ ...editedData, email: e.target.value })
                  }
                  className="w-full border-2 border-gray-300 p-2 text-sm focus:border-blue-500 outline-none rounded"
                />
              ) : (
                <p className="text-gray-900 bg-gray-50 p-2 rounded">
                  {profileData.email}
                </p>
              )}
            </div>

            {/* NIN */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                NIN
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedData.nin || ""}
                  onChange={(e) =>
                    setEditedData({ ...editedData, nin: e.target.value })
                  }
                  className="w-full border-2 border-gray-300 p-2 text-sm focus:border-blue-500 outline-none rounded"
                />
              ) : (
                <p className="text-gray-900 bg-gray-50 p-2 rounded">
                  {profileData.nin}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Address
              </label>
              {isEditing ? (
                <textarea
                  value={editedData.address || ""}
                  onChange={(e) =>
                    setEditedData({ ...editedData, address: e.target.value })
                  }
                  className="w-full border-2 border-gray-300 p-2 text-sm focus:border-blue-500 outline-none rounded"
                  rows="2"
                />
              ) : (
                <p className="text-gray-900 bg-gray-50 p-2 rounded">
                  {profileData.address}
                </p>
              )}
            </div>

            {/* Member Since */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Member Since
              </label>
              <p className="text-gray-900 bg-gray-50 p-2 rounded">
                {new Date(profileData.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
