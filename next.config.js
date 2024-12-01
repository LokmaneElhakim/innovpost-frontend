/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during the build process
  },
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript type checking
  },
};
