import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "docs",
  output: "export",
  assetPrefix: "./",
  images: { unoptimized: true },
};

export default nextConfig;
