// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // …existing config…
  eslint: {
    // ❌ skip ESLint checks during `next build`
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
