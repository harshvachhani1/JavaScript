const path = require('path')

module.exports = {
    entry:['babel-polyfill','./src/index.js'], 
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool : 'source-map' //root property source map
}

//Node. js path module is used for handling and transforming file paths.

//__dirname: It is a local variable that returns the directory name of the current module.

// /home/web-h-059/harsh/JavaScript/babel/public/script.

//The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

//__dirname is a special global variable in Node.js that represents the directory name of the currently executing script.

//this path is where we store(save) the webpack output

//loader install first npm install babel-loader@latest
//webpack expects this to be an object.module

//we provide the name of the library we would like access to.

