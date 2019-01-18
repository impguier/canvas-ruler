const path = require("path");
module.exports = {
    mode:"development",
    entry:"./src/canvas.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"[name].js",
        publicPath:"/dist/"
    },
    module:{
        rules:[{
            test:"/\.js$/",
            use:"babel-loader",
            exclude:/(node_modules)/
        }]
    },
    devServer:{        
        inline: true, 
        compress: true,
        hot: true,
        https: false,
        contentBase: './'
    }
} 