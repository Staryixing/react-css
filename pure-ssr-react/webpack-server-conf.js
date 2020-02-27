const serverWebpackConfig = merge(baseWebpackconfig,{
    mode: 'development',
    target: 'node',
    entry: {
        app: path.join(__dirname, './server-entry.js')
    },
    output: {
        path:config.build.assetsRoot,
        filemane: 'server-entry.js',
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
        libraryTarget: 'commonjs2',
    },
    devtool: config.dev.devtool
})