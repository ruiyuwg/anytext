Tair (Redis OSS-compatible) supports Transport Layer Security (TLS) to encrypt data in transit between clients and your instance. Enable TLS to protect sensitive data from interception. TLS is disabled by default.

## Prerequisites

Before you begin, make sure that:

-   Your instance is one of the following types:
    
    -   Tair (Enterprise Edition) memory-optimized instance
        
    -   Tair (Enterprise Edition) persistent memory instance
        
    -   Redis Open-Source Edition 5.0, 6.0, or 7.0 instance
        
-   Your instance uses the master-replica architecture
    
-   If a public endpoint is allocated, you have released it
    
-   If a private endpoint is allocated to a local disk-based cluster instance, you have released it
    

## Limitations

**Limitation**

**Impact**

**What to do**

Connection overhead

TLS handshakes consume more resources and time than standard connections.

Use persistent connections. Avoid frequently creating and destroying TLS connections.

Data transfer overhead

Encrypting and decrypting data adds processing overhead that increases with payload size.

Test in your environment to evaluate the impact.

No public endpoint

After you enable TLS, you cannot request a public endpoint. For cluster instances in the classic network (non-VPC), you also cannot request a direct connection endpoint.

Connect over a VPC with TLS. See [Connect to a TLS-enabled instance](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance-that-has-ssl-encryption-enabled#task-2103865).

No zone migration

After you enable TLS, you cannot migrate the instance to another zone.

Plan your zone selection before enabling TLS.

Endpoint or port changes

If you change the endpoint or port after enabling TLS, the error `No subject alternative DNS name matching xxx found` occurs.

Update the TLS certificate before connecting.

## Enable TLS encryption

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region of your instance. Find the instance and click its ID.
    
2.  In the left-side navigation pane, click **TLS Settings (SSL)**.
    
3.  Click **Enable**.
    
4.  In the dialog box, select a **TLS version**.
    
    **Version**
    
    **Description**
    
    **TLSv1.3** (Recommended)
    
    RFC 8446, published in 2018. Faster and more secure than TLSv1.2.
    
    **TLSv1.2** (Recommended)
    
    RFC 5246, published in 2008. Uses strong encryption technology.
    
    **TLSv1.1**
    
    RFC 4346, published in 2006. Fixes several vulnerabilities in TLSv1.0.
    
    **TLSv1.0**
    
    RFC 2246, published in 1999. Based on SSL 3.0. Vulnerable to BEAST and POODLE attacks.
    
5.  Click **OK**.
    
    **Warning**
    
    This operation restarts the instance and may cause a brief connection interruption of a few seconds. Perform this operation during off-peak hours. Make sure your application is configured to automatically reconnect.
    
6.  Refresh the page to verify the TLS status.
    

## Download the CA certificate

After TLS is enabled, click **Download CA Certificate** on the **TLS Settings (SSL)** page. The downloaded package contains the following files:

**File**

**Description**

`ApsaraDB-CA-Chain.p7b`

CA certificate for Windows

`ApsaraDB-CA-Chain.pem`

CA certificate for Linux, other systems, or applications

`ApsaraDB-CA-Chain.jks`

Java truststore file for importing the CA certificate chain into Java programs

**Note**

The CA certificate is the same for all Tair instances under your account. The certificate file is not password-protected.

## Manage TLS settings

After TLS is enabled, go to the **TLS Settings (SSL)** page to manage TLS settings.

### Update the CA certificate

Click **Update Certificate**, and then click **OK**.

The certificate has a default validity period of 3 years. This period cannot be customized. The system initiates a maintenance event to update the certificate 20 days before it expires. To change the maintenance time, go to **Event Center** > **Scheduled Events**. You can also click **Update Certificate** at any time. After the update, the certificate is valid for another 3 years.

**Warning**

This operation causes a brief connection interruption of a few seconds. Perform this operation during off-peak hours. Make sure your application is configured to automatically reconnect.

**Note**

After you update the certificate or change the TLS version, you do not need to download the certificate file again. The existing file remains valid.

### Change the TLS version

Click the edit icon next to **TLS version**, and then select a version from the drop-down list. We recommend **TLSv1.2**.

**Note**

If the **Minimum TLS version** drop-down list is unavailable, upgrade the minor version of the instance and try again. For more information, see [Upgrade the minor version and proxy version](/help/en/redis/user-guide/update-the-minor-version#concept-itn-f44-tdb).

### Disable TLS encryption

Turn off the switch next to **TLS Status**.

**Warning**

This operation restarts the instance. A brief connection interruption of a few seconds may occur. Perform this operation during off-peak hours. Make sure your application is configured to automatically reconnect.

## FAQ

### Why can't I enable TLS for my instance?

If your instance uses the read/write splitting architecture in the classic network, you cannot enable the TLS feature.

## Related API

**API**

**Description**

[ModifyInstanceTLS](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstancessl-redis#main-107864)

Configures the TLS (SSL) encryption feature for an instance.

## What to do next

[Connect to a TLS-enabled instance](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance-that-has-ssl-encryption-enabled#task-2103865)
