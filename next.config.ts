import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ['three'],
    ignoreBuildErrors: true,
};

export default nextConfig;
