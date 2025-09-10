/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**", // allow all user avatars
      },
      {
        protocol: "https",
        hostname: "share.google",
        pathname: "/**", // match all paths
      },
    ],
  },
};

export default nextConfig;
