import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // ✅ tick icon

export default function Address() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    street: "",
    beside: "",
    village: "",
  });

  const [errors, setErrors] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false); // ✅ success state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.street.trim()) newErrors.street = "Street is required";
    if (!formData.village.trim()) newErrors.village = "Village is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsConfirmed(true); // ✅ show success message
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      {!isConfirmed ? (
        <>
          <h2 className="text-xl font-bold mb-4">Address Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block font-medium">Full Name *</label>
              <input
                type="text"
                name="fullName"
                className="w-full border rounded p-2"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block font-medium">Phone Number *</label>
              <input
                type="text"
                name="phone"
                className="w-full border rounded p-2"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Street */}
            <div>
              <label className="block font-medium">Street *</label>
              <input
                type="text"
                name="street"
                className="w-full border rounded p-2"
                value={formData.street}
                onChange={handleChange}
              />
              {errors.street && <p className="text-red-500 text-sm">{errors.street}</p>}
            </div>

            {/* Beside (optional) */}
            <div>
              <label className="block font-medium">Beside (Optional)</label>
              <input
                type="text"
                name="beside"
                className="w-full border rounded p-2"
                value={formData.beside}
                onChange={handleChange}
              />
            </div>

            {/* Village */}
            <div>
              <label className="block font-medium">Village *</label>
              <input
                type="text"
                name="village"
                className="w-full border rounded p-2"
                value={formData.village}
                onChange={handleChange}
              />
              {errors.village && <p className="text-red-500 text-sm">{errors.village}</p>}
            </div>

            {/* Confirm Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Confirm Address
            </button>
          </form>
        </>
      ) : (
              // ✅ Success Message
              <div className="flex flex-col items-center justify-center text-center">
                  <FaCheckCircle className="text-green-500 text-5xl mb-4" />
                  <h2 className="text-xl font-bold text-green-600">
                      Your order will reach you soon! 🚚
                  </h2>
                  <h2 className="text-xl font-bold text-green-600">
                      Thanks for the order
                  </h2>
              </div>
          )}
    </div>
  );
}
