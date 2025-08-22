/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force static export for better Google Cloud compatibility
  output: 'standalone',
  
  // Disable image optimization (causes issues on Google Cloud)
  images: {
    unoptimized: true,
    domains: ['localhost', 'your-domain.com'],
  },
  
  // Ensure proper static file handling
  distDir: '.next',
  
  // Fix common Google Cloud issues
  swcMinify: true,
  reactStrictMode: true,
  
  // Ensure CSS is properly included
  compiler: {
    styledComponents: true,
  },
  
  // Environment variables that should be available client-side
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://your-app.appspot.com',
  },
  
  // Webpack configuration to handle common issues
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;