import React from "react";
import ProfileCard from "./ProfileCard";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ProfileCard
        name="Shees Abdullah"
        role="Developer"
        bio="Loves C++, Python, and Java."
        avatar="https://i.pravatar.cc/150?img=32"
      />
    </div>
  );
}
