import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://shayna.sanity.studio',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://shayna.sanity.studio https://*.sanity.studio",
          },
        ],
      },
    ]
  },
}

export default nextConfig;
