"use client";

import { useState } from "react";
import { lusitana } from "./ui/fonts";

const Home = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const addRegistration = () => {
    alert(
      `Name: ${name}\nAge: ${age}\nGender: ${gender}\nAddress: ${address}\nPhone: ${phone}`
    );
  };

  return (
    <main className="flex min-h-screen flex-col p-6 space-y-3 bg-[#f5f5f5] items-center">
      <div className={`text-4xl font-semibold mb-8 ${lusitana.className}`}>
        User Registration Form!
      </div>
      <div className="flex space-x-6">
        <div>Name :</div>
        <div className="border border-gray-400 rounded-sm">
          <input
            type="text"
            className="w-96"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex space-x-10">
        <div>Age :</div>
        <div className="border border-gray-400 rounded-sm">
          <input
            type="text"
            className="w-96"
            value={age}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAge(e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div>Gender :</div>
        <div className="border border-gray-400 rounded-sm">
          <input
            type="text"
            className="w-96"
            value={gender}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setGender(e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex space-x-3">
        <div>Address :</div>
        <div className="border border-gray-400 rounded-sm">
          <input
            type="text"
            className="w-96"
            value={address}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAddress(e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex space-x-6">
        <div>Phone :</div>
        <div className="border border-gray-400 rounded-sm">
          <input
            type="text"
            className="w-96"
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={addRegistration}
          className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Save
        </button>
        <button className="bg-white text-blue-900 px-4 py-2 rounded-md border-2 border-blue-900">
          Cancel
        </button>
      </div>
    </main>
  );
};

export default Home;
