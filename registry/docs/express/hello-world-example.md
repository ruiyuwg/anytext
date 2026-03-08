# Hello world example

Embedded below is essentially the simplest Express app you can create. It is a single file app — _not_ what you’d get if you use the [Express generator](/en/starter/generator.html), which creates the scaffolding for a full app with numerous JavaScript files, Jade templates, and sub-directories for various purposes.

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (`/`) or _route_. For every other path, it will respond with a **404 Not Found**.

### Running Locally

First create a directory named `myapp`, change to it and run `npm init`. Then, install `express` as a dependency, as per the [installation guide](/en/starter/installing.html).

In the `myapp` directory, create a file named `app.js` and copy the code from the example above.

The `req` (request) and `res` (response) are the exact same objects that Node provides, so you can invoke `req.pipe()`, `req.on('data', callback)`, and anything else you would do without Express involved.

Run the app with the following command:

```
$ node app.js
```

Then, load `http://localhost:3000/` in a browser to see the output.

[Edit this page](
            https://github.com/expressjs/expressjs.com/edit/gh-pages/en/starter/hello-world.md
          )
