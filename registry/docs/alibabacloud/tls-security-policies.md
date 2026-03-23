When you configure an HTTPS listener for Global Accelerator (GA), TLS security policies determine the TLS versions and cipher suites that GA supports during TLS negotiation with clients. GA provides several common default policies that you can use. For scenarios with custom security requirements, you can create custom TLS security policies.

## How it works

You configure TLS security policies for GA. These policies define the TLS versions and cipher suites that GA supports during TLS negotiation. During the handshake, the client sends a list of supported protocol versions and cipher suites in a Client Hello message. Based on the configured policy, GA selects a protocol version and cipher suite that are supported by both the client and GA. GA then responds with a Server Hello message. Subsequent steps, such as key exchange and session key generation, proceed based on this selection.

## Default policies

Various information security standards may impose requirements on the TLS security policies of GA. Expand the following table to view the TLS versions and cipher suites supported by the default policies. You can select a policy as needed. If the default policies do not meet your requirements, you can create [custom policies](#section-ga-tls-custom-policy).

**Policy details**

**Policy Name**

**tls\_cipher\_policy\_1\_0**

**tls\_cipher\_policy\_1\_1**

**tls\_cipher\_policy\_1\_2**

**tls\_cipher\_policy\_1\_2\_strict**

**tls\_cipher\_policy\_1\_2\_strict\_with\_1\_3**

TLS version

v1.0

Supported

Not supported

Not supported

Not supported

Not supported

v1.1

Supported

Supported

Not supported

Not supported

Not supported

v1.2

Supported

Supported

Supported

Supported

Supported

v1.3

Not supported

Not supported

Not supported

Not supported

Supported

Cipher suites

ECDHE-RSA-AES128-GCM-SHA256

Supported

Supported

Supported

Supported

Supported

ECDHE-RSA-AES256-GCM-SHA384

Supported

Supported

Supported

Supported

Supported

ECDHE-RSA-AES128-SHA256

Supported

Supported

Supported

Supported

Supported

ECDHE-RSA-AES256-SHA384

Supported

Supported

Supported

Supported

Supported

AES128-GCM-SHA256

Supported

Supported

Supported

Not supported

Not supported

AES256-GCM-SHA384

Supported

Supported

Supported

Not supported

Not supported

AES128-SHA256

Supported

Supported

Supported

Not supported

Not supported

AES256-SHA256

Supported

Supported

Supported

Not supported

Not supported

ECDHE-RSA-AES128-SHA

Supported

Supported

Supported

Supported

Supported

ECDHE-RSA-AES256-SHA

Supported

Supported

Supported

Supported

Supported

AES128-SHA

Supported

Supported

Supported

Not supported

Not supported

AES256-SHA

Supported

Supported

Supported

Not supported

Not supported

DES-CBC3-SHA

Supported

Supported

Supported

Not supported

Not supported

TLS\_AES\_128\_GCM\_SHA256

Not supported

Not supported

Not supported

Not supported

Supported

TLS\_AES\_256\_GCM\_SHA384

Not supported

Not supported

Not supported

Not supported

Supported

TLS\_CHACHA20\_POLY1305\_SHA256

Not supported

Not supported

Not supported

Not supported

Supported

TLS\_AES\_128\_CCM\_SHA256

Not supported

Not supported

Not supported

Not supported

Supported

TLS\_AES\_128\_CCM\_8\_SHA256

Not supported

Not supported

Not supported

Not supported

Supported

ECDHE-ECDSA-AES128-GCM-SHA256

Not supported

Not supported

Not supported

Not supported

Supported

ECDHE-ECDSA-AES256-GCM-SHA384

Not supported

Not supported

Not supported

Not supported

Supported

ECDHE-ECDSA-AES128-SHA256

Not supported

Not supported

Not supported

Not supported

Supported

ECDHE-ECDSA-AES256-SHA384

Not supported

Not supported

Not supported

Not supported

Supported

ECDHE-ECDSA-AES128-SHA

Not supported

Not supported

Not supported

Not supported

Supported

ECDHE-ECDSA-AES256-SHA

Not supported

Not supported

Not supported

Not supported

Supported

Go to the [TLS security policies](https://ga.console.alibabacloud.com/tls) page in the GA console. On the **System Default Policy** tab, you can view the policy details.

For public-facing applications that do not have special compatibility requirements, we recommend that you use the `tls_cipher_policy_1_2` policy or a policy with a higher security level.

## Custom policies

If the default policies do not meet your security or compliance requirements, such as supporting only specific TLS versions or disabling certain cipher suites, you can create custom TLS security policies.

### Create custom policies

Go to the [TLS security policies](https://ga.console.alibabacloud.com/tls) page in the GA console and click **Create Custom Policy**. Configure the parameters that are described in the following list. After you complete the configuration, click **OK**.

-   **Security Policy Name**: The name of the custom policy.
    
-   **Minimum Version**: If your business does not have special compatibility requirements, we recommend that you select **TLS 1.2 or higher** to ensure security.
    
-   **Enable TLS 1.3**: To ensure network communication security and efficiency, we recommend that you enable this feature if it is compatible with your business.
    
-   **Cipher Suites**: Select the required cipher suites and move them to the selection box on the right. Note that the selected cipher suites must be compatible with the selected TLS version.
    

> You can create a maximum of 50 custom TLS security policies for each account.

### Update custom policy TLS versions and cipher suites

Go to the [TLS security policies](https://ga.console.alibabacloud.com/tls) page in the GA console. In the **Actions** column of the target custom policy, click **Edit**. In the **Edit Custom Policy** dialog box that appears, update the TLS version and cipher suite.

### Delete custom policies

If a custom policy is used by a listener, you must modify the TLS security policy of the listener or delete the listener before you can delete the custom policy.

Go to the [TLS security policies](https://ga.console.alibabacloud.com/tls) page in the GA console. In the **Actions** column of the target custom policy, click **Delete** and then click **OK**.

## Configure TLS security policies for listeners

-   When you add an **HTTPS listener**, select a system default policy or a custom policy for the **TLS Security Policies** parameter on the listener configuration page. The configuration method is the same regardless of whether you are [creating a medium pay-as-you-go GA instance](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#8791282027dcm) using the configuration wizard or [adding a listener separately](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#bca0cd2a5euqb).
    
    > Only standard pay-as-you-go GA instances support custom TLS security policies.
    
    > If the **Maximum HTTP Version** of a listener is set to **HTTP/3**, custom TLS security policies are not supported.
    
-   To modify a TLS security policy, go to the [Instance List](https://ga.console.alibabacloud.com/list) page in the GA console and click the ID of the target instance. On the **Listeners** tab, click the ID of the target HTTPS listener to go to the **Listener Details** page. In the **SSL Certificate** section, modify the **TLS Security Policies**.
    

## Billing

TLS security policies are free of charge. However, you are charged for [GA instances](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances) and [server certificates](/help/en/ssl-certificate/product-overview/billing-overview).
