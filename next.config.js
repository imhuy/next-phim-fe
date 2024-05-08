/** @type {import('next').NextConfig} */
const nextConfig = {

    trailingSlash: true,
    reactStrictMode: true,
    images: {
        domains: [
            "img.ophim1.com",
            "img.ophim10.cc"
        ],
    }
}
module.exports = nextConfig
