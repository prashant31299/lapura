/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "lapuraprofessional.com" }],
        destination: "https://www.lapuraprofessional.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
