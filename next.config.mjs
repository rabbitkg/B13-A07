const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;