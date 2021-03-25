module.exports = {
    env: {
        test: {
            presets: ['@babel/preset-env'],
            plugins: [
                '@babel/plugin-transform-modules-commonjs',
                '@babel/plugin-transform-runtime',
            ]
        }
    }
};