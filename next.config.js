const API_KEY = process.env.API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
      {
        source: "/google",
        destination: "https://www.google.com/",
        permanent: false,
      },
      {
        source: "/old-blog/:path",
        destination: "/new-blog/:path",
        permanent: false,
      },
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig
