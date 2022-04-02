module.exports = {
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.resolve.fallback.fs = false;
            config.resolve.fallback.module = false;
        }
    
        return config;
    }
}

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        providerImportSource: '@mdx-js/react'
    }
});

module.exports = withMDX({
    pageExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'md',
        'mdx'
    ]
});