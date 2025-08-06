/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
  },
  // Enable static exports for Vercel
  output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
};

// For Turbopack, we don't need webpack configuration
// as it uses its own bundler
if (process.env.TURBOPACK) {
  console.log('Turbopack is enabled');
}

module.exports = nextConfig;
