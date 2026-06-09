/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // required: next/image can't optimize on a static export
  trailingSlash: true, // serves out/ cleanly from Apache/nginx/Hostinger without extensionless 404s
  reactStrictMode: true,
};

export default nextConfig;
