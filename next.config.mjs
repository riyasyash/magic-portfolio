import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/work", destination: "/#work", permanent: false },
      { source: "/blog", destination: "/#blog", permanent: false },
      { source: "/achievements", destination: "/#achievements", permanent: false },
    ];
  },
};

export default withMDX(nextConfig);
