/** @type {import('next').NextConfig} */
// const nextConfig = {
// 	reactStrictMode: true,
// 	images: {
// 		domains: [
// 			"www.thefilmik.com",
// 			"movieguide.b-cdn.net",
// 			"lumiere-a.akamaihd.net",
// 			"vum.bg",
// 		],
// 	},
// };

// module.exports = nextConfig;

const withPWA = require("@ducanh2912/next-pwa").default({
	dest: "public",
});

module.exports = withPWA({
	// Next.js config
	reactStrictMode: true,
	images: {
		domains: [
			"www.thefilmik.com",
			"movieguide.b-cdn.net",
			"lumiere-a.akamaihd.net",
			"vum.bg",
		],
	},
});
