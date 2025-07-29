import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Disable image optimization (if needed)
  },
};

export default nextConfig;
