module.exports = {
    entry: './index.js',
    output: {
        path: './bin/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
        ]
    },resolve: {
        alias: {vue: 'vue/dist/vue.js'}
    }
}
