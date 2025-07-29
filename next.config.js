/** @type {import('next').NextConfig} */
const nextConfig = {

    trailingSlash: true,
    reactStrictMode: true,
    images: {
        domains: [
            "img.ophim1.com",
            "img.ophim10.cc",
            "img.ophim.live",
            "img.ophim.cc",
            "res.cloudinary.com",
            "image.tmdb.org",
        ],
    },
};
module.exports = nextConfig;
