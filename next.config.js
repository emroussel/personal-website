module.exports = {
  eslint: {
    dirs: ["components", "pages", "providers", "styles"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        locale: false,
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "0",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Content-Security-Policy",
            value: `default-src 'self'; script-src 'self' 'unsafe-inline'${
              process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""
            }; font-src https://fonts.googleapis.com https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; connect-src 'self' https://vitals.vercel-insights.com; img-src 'self' data:; frame-ancestors 'none'`,
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};
