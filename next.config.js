module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during the build process
  },
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript type checking
  },
  async redirects() {
    return [
      {
        source: "/aptracking",
        destination: "https://aptracking.poste.dz",
        permanent: true,
      },
      {
        source: "/ccpnet",
        destination: "https://ccpnet.poste.dz",
        permanent: true,
      },
      {
        source: "/ephilatelie",
        destination: "https://ephilatelie.poste.dz",
        permanent: true,
      },
      {
        source: "/baridinet",
        destination: "https://baridinet.poste.dz",
        permanent: true,
      },
      { source: "/postdz", destination: "https://poste.dz", permanent: true },
      {
        source: "/baridiweb",
        destination: "https://baridweb.poste.dz",
        permanent: true,
      },
      {
        source: "/store-anep",
        destination: "https://store-anep.poste.dz",
        permanent: true,
      },
      {
        source: "/eccp",
        destination: "https://eccp.poste.dz",
        permanent: true,
      },
    ];
  },
};
