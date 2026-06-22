import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ajout de cette ligne pour désactiver le bug des workers Turbopack sur Vercel
  turbopack: {},
  // Supprimez transpilePackages s'il ne contient que ces packages
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
};

export default nextConfig;