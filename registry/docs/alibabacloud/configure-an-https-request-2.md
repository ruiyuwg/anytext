By default, the V2.0 Software Development Kit (SDK) uses the HTTPS protocol to access Alibaba Cloud services. You can use the **protocol** parameter of the Config class to select the communication protocol. Supported values include `HTTP` and `HTTPS`. To ensure secure data transmission, always use the HTTPS protocol.

```
import (
    openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
)

config := &openapi.Config{
    // Other configurations are omitted.
    Protocol: tea.String("HTTPS"), // Set the protocol. Valid values: HTTPS and HTTP. Default value: HTTPS.
}
```

When you use the HTTPS protocol, the SDK enables SSL/TLS certificate verification by default. If your code environment does not have the required certificates, a certificate verification error may occur. You can use the **ignoreSSL** parameter of the `RuntimeOptions` class to enable or disable SSL/TLS certificate verification. For example, in a test environment, you can set **ignoreSSL** to `true` to skip certificate verification for temporary testing.

**Important**

Enable SSL/TLS certificate verification in production environments.

```
import (
    util "github.com/alibabacloud-go/tea-utils/v2/service"
)

runtime := &util.RuntimeOptions{}
// true: skips certificate verification. false: enables certificate verification. By default, verification is enabled.
runtime.IgnoreSSL = tea.Bool(true)
```
