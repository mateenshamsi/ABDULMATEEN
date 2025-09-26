/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "streak-stats.demolab.com"],
 dangerouslyAllowSVG: true, 
},
 
};

export default nextConfig; // if .mjs (ESM)
// module.exports = nextConfig; // if .js (CJS)
