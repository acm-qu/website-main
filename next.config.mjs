/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	basePath: isProd ? "/website-main" : "",
	assetPrefix: isProd ? "/website-main" : "",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
