/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_DEPLOYED_AT: new Date().toISOString()
  }
};

export default nextConfig;
