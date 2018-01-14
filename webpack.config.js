module.exports = {
    devtool: 'inline-source-map',
    entry: ['./client/client.js'],
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        // We need to translate to JSX, ES6 etc. to Javascript
        // Browser does not know what to do with the others.
        loaders: [
            {
                test: /\.js$/,
                // It is looking for files end with .js$
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react','es2015']
                    // react handles JSX, es2015 handles ES6
                }
            }
        ]
    }
}
