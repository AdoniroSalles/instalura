const redirect = require('./configs/redirects');

module.exports = {
  trailignSlash: true,
  async redirects() {
    return redirect;
  },
  async headers() {
    return [
      {
        source: '/app/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },

        ],
      },
    ];
  },
};
