import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains:['cdn.sanity.io']
  },
  experimental: {
    optimizeCss: false
  }
};

export default nextConfig;
