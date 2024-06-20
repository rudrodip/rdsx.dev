/** @type {import('next').NextConfig} */

const cspHeader = `
default-src * data: mediastream: blob: filesystem: about: ws: wss: 'unsafe-eval' 'wasm-unsafe-eval' 'unsafe-inline'; 
script-src * data: blob: 'unsafe-inline' 'unsafe-eval'; 
script-src-elem * data: blob: 'unsafe-inline' 'unsafe-eval';
connect-src * data: blob: 'unsafe-inline'; 
img-src * data: blob: 'unsafe-inline'; 
media-src * data: blob: 'unsafe-inline'; 
frame-src * data: blob: ; 
style-src * data: blob: 'unsafe-inline';
font-src * data: blob: 'unsafe-inline';
frame-ancestors * data: blob:;
`
 
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },
}

export default nextConfig;
