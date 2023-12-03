/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async exportPathMap(){
    return {
      "/": { page: "" }
    }
  }
}

module.exports = nextConfig
