const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
    target: 'node',
    entry: './src/entry-server.js',
    output: {
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new VueSSRServerPlugin()
    ]
})
