var webpack = require('webpack');
var isProduction = process.env.NODE_ENV === "production" ? true : false;

console.log("Build is production : " + isProduction)

var config = {
    entry: './lib/index.js',
    output: {
        filename: './index.js',
        libraryTarget : "var"
    },
    mode : "development",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }

};

if(isProduction)
    {
        config.output.libraryTarget = 'commonjs2';
        config.mode = "production";
    }

module.exports = config;