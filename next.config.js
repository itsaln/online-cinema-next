/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_ENV: process.env.APP_ENV,
		APP_URL: process.env.APP_URL,
		APP_SERVER_URL: process.env.APP_SERVER_URL
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.APP_SERVER_URL}/api/:path*`
			},
			{
				source: '/uploads/:path*',
				destination: `${process.env.APP_SERVER_URL}/uploads/:path*`
			}
		]
	}
}

module.exports = nextConfig
