import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  webpack: (config) => {
    // Config existante
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    
    // Ajout de la config pour canvas
    config.externals = [...(config.externals || []), { canvas: 'canvas' }]
    
    return config
  },
};

export default nextConfig;