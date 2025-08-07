/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui", "@workspace/shared"],
  images: {
    remotePatterns: [new URL("https://lckqyplcfzrpgormzxrz.supabase.co/**")],
  },
};

export default nextConfig;
