Version: 4.x

On this page

Once you have [installed](/docs/v4/client-installation/) the Socket.IO client library, you can now init the client. The complete list of options can be found [here](/docs/v4/client-options/).

tip

For TypeScript users, it is possible to provide type hints for the events. Please check [this](/docs/v4/typescript/).

In the examples below, the `io` object comes either from:

-   the `<script>` import

```
<script src="/socket.io/socket.io.js"></script>
```

-   an ESM import

```
<script type="module">  import { io } from "https://cdn.socket.io/4.8.3/socket.io.esm.min.js";</script>
```

-   NPM

-   CommonJS
-   ES modules
-   TypeScript

```
const { io } = require("socket.io-client");
```

```
import { io } from "socket.io-client";
```

```
import { io } from "socket.io-client";
```

## From the same domain[​](#from-the-same-domain "Direct link to From the same domain")

If your front is served on the same domain as your server, you can simply use:

```
const socket = io();
```

The server URL will be deduced from the [window.location](https://developer.mozilla.org/en-US/docs/Web/API/Window/location) object.

## From a different domain[​](#from-a-different-domain "Direct link to From a different domain")

In case your front is not served from the same domain as your server, you have to pass the URL of your server.

```
const socket = io("https://server-domain.com");
```

In that case, please make sure to enable [Cross-Origin Resource Sharing (CORS)](/docs/v4/handling-cors/) on the server.

info

You can use either `https` or `wss` (respectively, `http` or `ws`).

```
// the following forms are similarconst socket = io("https://server-domain.com");const socket = io("wss://server-domain.com");const socket = io("server-domain.com"); // only in the browser when the page is served over https (will not work in Node.js)
```

## Custom namespace[​](#custom-namespace "Direct link to Custom namespace")

In the examples above, the client will connect to the main namespace. Using only the main namespace should be sufficient for most use cases, but you can specify the namespace with:

```
// same origin versionconst socket = io("/admin");// cross origin versionconst socket = io("https://server-domain.com/admin");
```

You can find more details about namespaces [here](/docs/v4/namespaces/).

## Options[​](#options "Direct link to Options")

The complete list of available options can be found [here](/docs/v4/client-options/).

-   [From the same domain](#from-the-same-domain)
-   [From a different domain](#from-a-different-domain)
-   [Custom namespace](#custom-namespace)
-   [Options](#options)
