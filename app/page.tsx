"use client";

import { useState } from "react";
import { lusitana } from "./ui/fonts";

interface RegistrationFormData {
  name: string;
  age: string;
  gender: string;
  address: string;
  phone: string;
}

const Home = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addRegistration = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("User registered successfully!");
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to register user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-6 space-y-3 bg-[#f5f5f5] items-center">
      <div className={`text-4xl font-semibold mb-8 ${lusitana.className}`}>
        User Registration Form!
      </div>

      {error && <div className="text-red-500 mt-4">{error}</div>}

      <div className="flex space-x-6">
        <div>Name :</div>
        <div className="border border-gray-400 rounded-sm">
          <input
            type="text"
            className="w-96"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex space-x-10">
        <div>Age :</div>
        <div className="border border-gray-400 rounded-sm">
          <input
            type="text"
            className="w-96"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div>Gender :</div>
        <div className="border border-gray-400 rounded-sm">
          <input
            type="text"
            className="w-96"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex space-x-3">
        <div>Address :</div>
        <div className="border border-gray-400 rounded-sm">
          <input
            type="text"
            className="w-96"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex space-x-6">
        <div>Phone :</div>
        <div className="border border-gray-400 rounded-sm">
          <input
            type="text"
            className="w-96"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={addRegistration}
          className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </button>
        <button className="bg-white text-blue-900 px-4 py-2 rounded-md border-2 border-blue-900">
          Cancel
        </button>
      </div>
    </main>
  );
};

export default Home;
