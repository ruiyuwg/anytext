Version: 4.x

On this page

While less common than frontend bundling, it is totally possible to create a bundle for the server.

## Webpack 5[​](#webpack-5 "Direct link to Webpack 5")

### Without serving the client files[​](#without-serving-the-client-files "Direct link to Without serving the client files")

Installation:

```
npm install -D webpack webpack-cli socket.io bufferutil utf-8-validate
```

`index.js`

```
const { Server } = require("socket.io");const io = new Server({  serveClient: false});io.on("connection", socket => {  console.log(`connect ${socket.id}`);  socket.on("disconnect", (reason) => {    console.log(`disconnect ${socket.id} due to ${reason}`);  });});io.listen(3000);
```

`webpack.config.js`

```
const path = require("path");module.exports = {  entry: "./index.js",  target: "node",  mode: "production",  output: {    path: path.resolve(__dirname, "dist"),    filename: "index.js",  }};
```

Note: `bufferutil` and `utf-8-validate` are two optional dependencies from the `ws` package. You can also set them as "external" with:

```
const path = require("path");module.exports = {  entry: "./index.js",  target: "node",  mode: "production",  output: {    path: path.resolve(__dirname, "dist"),    filename: "index.js",  },  externals: {    bufferutil: "bufferutil",    "utf-8-validate": "utf-8-validate",  },};
```

Documentation: [https://webpack.js.org/configuration/externals/](https://webpack.js.org/configuration/externals/)

### Including serving the client files[​](#including-serving-the-client-files "Direct link to Including serving the client files")

In that case, we'll have to use [Asset modules](https://webpack.js.org/guides/asset-modules/) and override the `sendFile` function of the Socket.IO server:

`index.js`

```
const { Server } = require("socket.io");const clientFile = require("./node_modules/socket.io/client-dist/socket.io.min?raw");const clientMap = require("./node_modules/socket.io/client-dist/socket.io.min.js.map?raw");Server.sendFile = (filename, req, res) => {  res.end(filename.endsWith(".map") ? clientMap : clientFile);};const io = new Server();io.on("connection", socket => {  console.log(`connect ${socket.id}`);  socket.on("disconnect", (reason) => {    console.log(`disconnect ${socket.id} due to ${reason}`);  });});io.listen(3000);
```

`webpack.config.js`

```
const path = require("path");module.exports = {  entry: "./index.js",  target: "node",  mode: "production",  output: {    path: path.resolve(__dirname, "dist"),    filename: "index.js",  },  module: {    rules: [      {        resourceQuery: /raw/,        type: "asset/source",      },    ],  },};
```

-   [Webpack 5](#webpack-5)
    -   [Without serving the client files](#without-serving-the-client-files)
    -   [Including serving the client files](#including-serving-the-client-files)
