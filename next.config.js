module.exports = {
  async rewrites() {
    return [
      {
        source: "/foo/(.*)",
        destination: "https://httpbin.org/anything/$1"
      }
    ];
  }
};
