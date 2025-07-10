import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    webpack: (config, {  }) => {
        config.node = {
            fs: 'empty'
        }
        return config
    },
};

// const hostnames: string[] = ["mars.jpl.nasa.gov"];

module.exports = {
    images: {
        domains: ["mars.jpl.nasa.gov"],
    },

}

export default nextConfig;
