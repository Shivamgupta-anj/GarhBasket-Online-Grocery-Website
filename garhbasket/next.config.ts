// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//       allowedDevOrigins: ['192.168.*.*', '10.*.*.*', '172.*.*.*'],
//       images:{
//         remotePatterns:[
//           {hostname:"lh3.googleusercontent.com"},
//           {hostname:"plus.unsplash.com"},
//           { hostname: "images.unsplash.com" },
//         ]
//       }

// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.*.*', '10.*.*.*', '172.*.*.*'],
  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "plus.unsplash.com" },
      { hostname: "images.unsplash.com" },
      {hostname:"res.cloudinary.com"}
    ]
  }
};

export default nextConfig;