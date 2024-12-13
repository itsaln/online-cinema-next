/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	optimizeFonts: false,
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
