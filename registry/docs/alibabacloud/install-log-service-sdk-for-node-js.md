Before you can use Simple Log Service SDK for Node.js to call the API operations of Simple Log Service, you must install Simple Log Service SDK for Node.js. This topic describes how to install Simple Log Service SDK for Node.js.

## Prerequisites

-   Simple Log Service is activated. For more information, see [Activate Simple Log Service](https://www.alibabacloud.com/product/log-service?spm=a2c5t.10695662.1996646101.searchclickresult.536d31bdPTqffd).
    
-   [Configure access credentials](/help/en/sls/developer-reference/configure-sls-access-credentials).
    
-   A Node.js development environment is set up. For more information, visit the [official website of Node.js](https://nodejs.org/en/download/).
    

## Usage notes

Simple Log Service SDK for Node.js is developed based on JavaScript. TypeScript is not supported.

## Installation

1.  Create a project directory and go to the directory.
    
2.  Run the following initialization command:
    
    ```
    npm init
    ```
    
    Set the name parameter to `sls_node` and retain default values for other parameters. After the initialization is complete, a file named package.json is created. Example:
    
    ```
    {
      "name": "sls_node",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }
    ```
    
3.  Run the following command to install Simple Log Service SDK for Node.js:
    
    ```
    npm install @alicloud/log
    ```
    
    After the command is run, the package.json file is injected with @alicloud/log information. Example:
    
    ```
    {
      "name": "sls_node",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "@alicloud/log": "^1.2.5"
      }
    }
    ```
    
4.  Create a project. In the following example, Express is used to create a project.
    
    1.  Run the following command to install Express:
        
        ```
        npm install express
        ```
        
        For more information, see [Installing](https://expressjs.com/en/starter/installing.html).
        
    2.  Run the following command to install morgan:
        
        ```
        npm install morgan
        ```
        
        For more information, see [morgan](https://www.npmjs.com/package/morgan).
        
    3.  Create a file named app.js and add the following code to the file:
        
        ```
        var express = require('express')
        var morgan = require('morgan')
        var app = express()
        const logger = morgan(function (tokens, req, res) {
          return [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms'
          ].join(' ')
        })
        app.use(logger)
        app.get('/', (req, res) => res.send('Hello World!'))
        app.listen(3000, () => console.log('Example app listening on port 3000!'))
        ```
        
    4.  Run the following command to start the project:
        
        ```
        node app.js
        ```
        
    
    After the project is created, the following result is returned:
    
    ```
    Example app listening on port 3000!
    ```
    

## FAQ

### What do I do if the ../xx/jsSHA/src/sha.js file is not found?

The file of the dependent module is deleted. We recommend that you run the `npm install aliyun-sdk` command to reinstall the SDK. When you reinstall the SDK, the missing file is automatically retrieved.

## What to do next

[Get started with Simple Log Service SDK for Node.js](/help/en/sls/developer-reference/get-started-with-log-service-sdk-for-node-js#task-2100930)
