import React from "react";

export default function ProductCard({ name, price, image, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-indigo-600 font-semibold">₹{price}</span>
          <button className="px-3 py-1 bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-600">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
