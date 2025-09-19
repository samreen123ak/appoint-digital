// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.pixso.net",
      },
      {
        protocol: "https",
        hostname: "uizard.io",
      },
      {
        protocol: "https",
        hostname: "www.bigscal.com",
      },
    ],
  },
};

export default nextConfig;
