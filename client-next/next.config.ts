import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c0e4d041-eba7-495c-bd58-dbd184a94c09.s3.timeweb.com",
      },
    ],
  },
  allowedDevOrigins: ["smartly-spicy-rhea.cloudpub.ru"],
};

export default nextConfig;

//   new URL("https://c0e4d041-eba7-495c-bd58-dbd184a94c09.s3.timeweb.com/**"),
