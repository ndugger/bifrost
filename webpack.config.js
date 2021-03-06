const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        demo: path.resolve(__dirname, 'demo', 'index.ts')
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            allowTsInNodeModules: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            bifrost: path.resolve(__dirname)
        },
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx'
        ]
    }
};
