import React from "react";

export default function ProfileCard({ name, role, bio, avatar }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      <div className="flex items-center p-6">
        <img
          src={avatar}
          alt={name}
          className="w-20 h-20 rounded-full border-2 border-indigo-500"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-indigo-600">{role}</p>
        </div>
      </div>
      <div className="px-6 pb-6">
        <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
