const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const html=require("./src/index.html")


module.exports =(env,options)=> {
  const modeIs=env.production?"production":"development"

    const config={

  
    mode:modeIs,
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
     

    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                sources: {
                list: [
                    // All default supported tags and attributes
                    "...",
                ]}
            }
            },
            {
                test: /\.scss/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
                ],
              
            },
       
            {
                test: /\.(gif|svg|png|jpe?g)$/,
                type: 'asset/resource'
              
              },
        ]
    },
 
    plugins: [
        new HtmlWebpackPlugin({
            title: "Jadoo",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"style.css"
        })
    ]
}
return config
}