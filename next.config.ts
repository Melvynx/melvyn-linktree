import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'codelynx.dev',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
