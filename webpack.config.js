var path = require("path");
var config = {
    entry: ["./app.tsx"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: '/'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devServer: {
        historyApiFallback: true,
	host: '0.0.0.0',
	port: 8008
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                include: path.appSrc,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
};

module.exports = config;