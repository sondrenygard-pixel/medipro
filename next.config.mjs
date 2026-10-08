/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: '/adminpush', destination: '/adminpush/index.html' }];
  },
  async headers() {
    return [{
      source: '/adminpush/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'no-referrer' },
        { key: 'Cache-Control', value: 'no-store' },
        { key: 'Content-Security-Policy', value: "default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src https://zgbgrugtohuubuqgqdqw.supabase.co; base-uri 'none'; form-action 'none'; frame-ancestors 'none'" }
      ]
    }];
  }
};
export default nextConfig;
