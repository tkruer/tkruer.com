import type { NextConfig } from "next";
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default withMDX(nextConfig);
