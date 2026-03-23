The V2.0 SDK uses HTTPS by default to access Alibaba Cloud services. You can specify a different communication protocol using the **protocol** parameter in the Config class of the `@alicloud/openapi-client` library. The supported values are `HTTP` and `HTTPS`. For secure data transmission, we recommend that you use the HTTPS protocol.

Node.js

```
const { Config } = require('@alicloud/openapi-client');

const config = new Config({
    // Other configurations are omitted.
    protocol: 'HTTPS', // The protocol type. Valid values: HTTPS and HTTP. Default value: HTTPS.
});
```

Typescript

```
import * as $OpenApi from '@alicloud/openapi-client';

// Configure requests to be sent over the HTTPS protocol.
const config = new $OpenApi.Config({
    // Other configurations are omitted.
    protocol: 'HTTPS', // Valid values: HTTPS and HTTP. Default value: HTTPS.
});
```

When you use the HTTPS protocol, the SDK enables SSL/TLS certificate verification by default. If your code environment does not have the required certificates, a certificate verification error occurs. You can use the **ignoreSSL** parameter in the RuntimeOptions class of the `@alicloud/tea-util` library to enable or disable SSL/TLS certificate verification. For example, in a test environment, you can set **ignoreSSL** to `true` to skip certificate verification for temporary testing.

**Important**

Enable SSL/TLS certificate verification in a production environment.

Node.js

```
const { RuntimeOptions } = require('@alicloud/tea-util');

const runtime = new RuntimeOptions({
    // true: Skips certificate verification. false: Enables certificate verification. Verification is enabled by default.
    ignoreSSL: true,
});
```

Typescript

```
import Util, * as $Util from '@alicloud/tea-util';

const runtime = new $Util.RuntimeOptions({
    // true: Skips certificate verification. false: Enables certificate verification.
    ignoreSSL: true,
});
```
