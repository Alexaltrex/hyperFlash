import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ['three'],
    ignoreBuildErrors: true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
