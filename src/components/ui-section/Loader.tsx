"use client";

export default function Loader() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white fixed top-0 left-0 z-[9999]">
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Spinning Border */}
        <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-full animate-spin border-t-transparent"></div>

        {/* Centered Logo */}
        <img
          src="/logo/riyadvilogo.png"
          alt="Loading..."
          className="w-16 h-16 z-10"
        />
      </div>
    </div>
  );
}
