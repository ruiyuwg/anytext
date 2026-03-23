If you want your Network Load Balancer (NLB) instance to forward TCP requests in scenarios that have high requirements for performance and large-scale TLS offloading, you can add a TCP/SSL listener to your NLB instance.

## Prerequisites

-   An NLB instance is created. For more information, see [Create and manage an NLB instance](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance#task-2223922).
    
-   A server group is created. For more information, see [NLB server groups](/help/en/slb/network-load-balancer/user-guide/create-and-manage-a-server-group#task-2223842).
    

## Procedure

You can use one of the following methods to create a TCP/SSL listener:

-   [Add a TCP/SSL listener](#section-hsz-v43-020): the standard configuration method. You can enable the listener to listen by port range and configure advanced settings.
    
-   [Add a TCP/SSL listener (quick configuration)](#section-u8a-vef-4zk): the quick configuration method. You need to only specify a listener protocol, listener port, server certificate, TLS security policy, and server group.
    

## Add a TCP/SSL listener

### Step 1: Configure a listener

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region in which the NLB instance is deployed.
    
3.  On the **Instances** page, find the NLB instance that you want to manage and use one of the following methods to open the listener configuration wizard:
    
    -   Click **Create Listener** in the **Actions** column.
        
    -   Click the ID of the NLB instance and click the **Listener** tab. On the **Listener** tab, click **Create Listener** above the listener list.
        
    -   Click the instance ID. On the instance details page, click **Create Listener** in the wizard.
        
    -   Click the instance ID. In the upper-right corner of the instance details page, click **Create Listener**.
        
    
4.  In the **Configure Listener** step, configure the parameters and click **Next**. The following table describes the parameters.
    
    **Parameter**
    
    **Procedure**
    
    **Listener Protocol**
    
    Select a listener protocol. In this example, **TCPSSL** is selected.
    
    **Multi-port Listening/Forwarding**
    
    Specifies whether to enable the listener to listen by port range. If you enable this feature, the NLB instance listens on all ports in the specified listener port range, and redirects requests destined for the ports to the backend servers.
    
    **Note**
    
    This feature must be enabled for server groups associated with a listener that listens by port range.
    
    **Listener Port Range**
    
    Specify the first and last port to define the listener port range if you want to enable the listener to listen by port range.
    
    **Important**
    
    The listener port range cannot be modified after the listener is created.
    
    **Listener Port**
    
    Specify a **port** on which the NLB instance listens. The NLB instance uses the port to receive requests and forward the requests to backend servers.
    
    You can select a commonly used port or enter a port number. Valid values: 1 to 65535.
    
    If **Listen by Port Range** is enabled, you do not need to set Listener Port.
    
    **Listener Name**
    
    Enter a name for the listener.
    
    **Tags**
    
    Configure the **Tag Key** and **Tag Value** parameters to add a tag. You can add one or more tags.
    
    After you specify tags, you can filter listeners by tag on the **Listener** tab.
    
    **Advanced Settings**
    
    Click **Modify** to configure the advanced settings.
    
    **Idle Connection Timeout Period**
    
    Specify a timeout period for idle TCP/SSL connections. If no request is received within the timeout period, NLB closes the current connection. When another request is received, NLB establishes a new connection.
    
    Unit: seconds. Valid values: 1 - 900. Default value: 900.
    
    **Limit on New Connections**
    
    Specifies whether to limit the number of new connections.
    
    **Maximum New Connections per Second**
    
    If you turn on Limit on New Connections, you must specify the maximum number of new connections per second that the listener can handle in each zone. Each zone provides a virtual IP address (VIP).
    
    **Important**
    
    This value applies only to the current listener. Connections to other listeners are not affected. To view the throttling values of other listeners, check the configurations of the listeners.
    
    **Enable Proxy Protocol**
    
    Specifies whether to enable Proxy Protocol. After Proxy Protocol is enabled, client IP addresses are passed to backend servers.
    
    For more information, see [Enable NLB to preserve client IP addresses and pass them to backend servers](/help/en/slb/network-load-balancer/use-cases/obtain-client-ip-addresses).
    
    **Important**
    
    The Proxy protocol takes effect only if it is enabled on both the proxy server and backend server. If the backend server cannot parse Proxy protocol headers but the Proxy protocol is enabled, parsing errors may arise on the backend server and compromise service availability.
    
    **Enable ALPN Policy**
    
    Specify whether to enable Application-Layer Protocol Negotiation (ALPN). ALPN allows clients and servers to better manage the protocol over which they communicate. This improves the efficiency and security of communication. For example, the preferential use of HTTP 2.0 can reduce latency and bandwidth consumption.
    
    -   **Definition**: ALPN is a TLS extension that allows the client and the server to negotiate the application layer protocol during a TLS handshake. This enables the client and the server to use the optimal protocol to communicate, such as HTTP 1.0, HTTP 1.1, and HTTP 2.0.
        
    -   **Note**: ALPN is an extension of a TLS handshake. When you create a TCP/SSL listener and you enable ALPN for an NLB instance, a TLS handshake is performed between the client and the NLB instance. The client sends a list of supported protocols to NLB. NLB uses one of these protocols, and notifies the client of the protocol after the handshake is complete.
        
    
    **ALPN Policy**
    
    After you enable ALPN, select an ALPN policy.
    
    -   **HTTP1Only**: uses only HTTP 1.x. The priority of HTTP 1.1 is higher than the priority of HTTP 1.0.
        
    -   **HTTP2Only**: uses only HTTP 2.0.
        
    -   **HTTP2Optional**: preferentially uses HTTP 1.x over HTTP 2.0. The priority of HTTP 1.1 is higher than the priority of HTTP 1.0, and the priority of HTTP 1.0 is higher than the priority of HTTP 2.0.
        
    -   **HTTP2Preferred**: preferentially uses HTTP 2.0 over HTTP 1.x. The priority of HTTP 2.0 is higher than the priority of HTTP 1.1, and the priority of HTTP 1.1 is higher than the priority of HTTP 1.0.
        
    
    > If you select **HTTP2Optional** or **HTTP2Preferred**, ensure that your backend server supports both HTTP 1.x and HTTP 2.0. If the backend server and the NLB instance vary in HTTP protocol version support, NLB will fail to forward requests to the backend server as expected.
    
    > As gRPC is a protocol that uses HTTP/2.0, select **HTTP2Only** when the listener checks for gRPC requests.
    

### Step 2: Configure an SSL certificate

To create a TCP/SSL listener, you must configure an SSL certificate for identity authentication to ensure secure data transfer.

**Certificate**

**Procedure**

**Required for one-way authentication**

**Required for mutual authentication**

**Server certificate**

A server certificate is used to authenticate the identity of a server.

Your browser checks whether the certificate sent by the server is signed and issued by a trusted certificate authority (CA). For more information, see [What is an SSL certificate?](/help/en/ssl-certificate/what-is-an-ssl-certificate#concept-yz4-v2p-ydb)

Yes

You can purchase or upload a server certificate in the Certificate Management Service console. NLB obtains the certificate from Certificate Management Service and uses the certificate.

Yes

You can purchase or upload a server certificate in the Certificate Management Service console. NLB obtains the certificate from Certificate Management Service and uses the certificate.

**CA certificate**

A CA certificate is used by a server to verify the signature on a client certificate. If the signature is invalid, the connection request is denied.

**Note**

A client certificate is used to authenticate the identity of the client when the client communicates with the server. You need to install a client certificate only on the client.

No

Yes

You can purchase a CA certificate in the Certificate Management Service console. NLB obtains the certificate from Certificate Management Service and uses the certificate.

**Note**

If you want to access multiple domain names or add multiple server certificates, you can add additional certificates to the TCP/SSL listener. For more information, see [Add an additional certificate](/help/en/slb/network-load-balancer/user-guide/management-certificate#section-d8e-bs1-84a).

1.  In the **Configure SSL Certificate** step, select a server certificate from the **Server Certificate** drop-down list.
    
    If no server certificate is available, click **Create SSL Certificate** in the drop-down list to go to the Certificate Management Service console. Then, you can purchase or upload a server certificate. For more information, see [Purchase an SSL certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate#task-q3j-zfp-ydb) and [Upload an SSL certificate](/help/en/ssl-certificate/upload-an-ssl-certificate).
    
2.  **Optional:** Turn on **Enable Mutual Authentication**. Select a CA certificate from the **Default CA Certificate** drop-down list.
    
    If no CA certificate is available, click **Purchase CA Certificate** to create a CA certificate. For more information, see [Purchase and enable a private CA](/help/en/ssl-certificate/purchase-and-enable-a-private-ca#task-2060468).
    
    **Note**
    
    If you want to disable mutual authentication, perform the following operations:
    
    1.  On the **Instances** page, click the ID of the NLB instance that you want to manage.
        
    2.  On the **Listener** tab, click the ID of the TCP/SSL listener.
        
    3.  On the **Listener Details** tab, go to the **SSL Certificate** section and disable mutual authentication.
        
    
3.  Select a **TLS security policy** and click **Next**.
    
    If no TLS security policy is available, click **Create TLS Security Policy** to create one. For more information, see [TLS security policies](/help/en/slb/network-load-balancer/user-guide/tls-security-policy#task-2230201).
    

### Step 3: Select a server group

In the **Select Server Group** step, select a backend server group, view the backend servers, and then click **Next**.

**Important**

-   The backend protocol of the server group must be TCP. Requests sent from NLB to the backend server are SSL-decrypted, and backend servers do not need to perform SSL decryption on received requests.
    
-   You **cannot** associate listeners that use SSL over TCP with server groups for which **client IP preservation** is enabled. **Make sure that the feature is disabled for the server group.**
    

### Step 4: Confirm the configurations

In the **Configuration Review** step, confirm the configurations and click **Submit**.

## Add a TCP/SSL listener (quick configuration)

If you select this method, you need to only specify a listener protocol, a listener port, a server certificate, a TLS security policy, and a server group.

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region in which the NLB instance is deployed.
    
3.  In the left-side navigation pane, choose **NLB** > **Instances**.
    
4.  On the **Instances** page, click the ID of the NLB instance that you want to manage.
    
5.  Click the **Listener** tab. On the **Listener** tab, click **Quick Create Listener**.
    
6.  In the **Quick Create Listener** dialog box, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Listener Protocol**
    
    Select a listener protocol. In this example, **TCPSSL** is selected.
    
    **Listener Port**
    
    Specify the frontend port that is used to receive requests and forward them to backend servers.
    
    You can select a commonly used port, or enter a port number. Valid values: 1 to 65535.
    
    **Server Certificate**
    
    Select a server certificate from the drop-down list.
    
    If no server certificate is available, click **Create SSL Certificate** to create one. For more information, see [Purchase an SSL certificate](/help/en/ssl-certificate/purchase-an-ssl-certificate#task-q3j-zfp-ydb).
    
    **TLS Security Policy**
    
    Select a TLS security policy from the drop-down list.
    
    If no TLS security policy is available, click **Create TLS Security Policy** to create one. For more information, see [TLS security policies](/help/en/slb/network-load-balancer/user-guide/tls-security-policy#task-2230201).
    
    **Server Group**
    
    Select a backend server group.
    

## References

-   Tutorials:
    
    -   For more information about how to configure NLB and an SSL certificate to perform SSL offloading over TCP while using one-way authentication, see [Use NLB to enable SSL offloading over TCP (one-way authentication)](/help/en/slb/network-load-balancer/use-cases/use-nlb-to-enable-ssl-offloading-over-tcp#task-2313648).
        
    -   For more information about how to configure NLB, an SSL certificate, and a CA certificate to perform SSL offloading over TCP while using mutual authentication, see [Use NLB to enable SSL offloading over TCP (mutual authentication)](/help/en/slb/network-load-balancer/use-cases/use-nlb-to-enable-ssl-offloading-over-tcp-1#task-2272221).
        
-   API references:
    
    -   [CreateListener](/help/en/slb/api-createlistener-nl#doc-api-Nlb-CreateListener): creates a TCP, UDP, or TCP/SSL listener for an NLB instance.
        
    -   [DeleteListener](/help/en/slb/api-deletelistener-nlb#doc-api-Nlb-DeleteListener): deletes a listener from an NLB instance.
        
    -   [ListListeners](/help/en/slb/api-listlisteners-nlb#doc-api-Nlb-ListListeners): queries listeners added to an NLB instance.
        
    -   [UpdateListenerAttribute](/help/en/slb/api-updatelistenerattribute-nlb#doc-api-Nlb-UpdateListenerAttribute): modifies the configurations of NLB listeners.
        
    -   [StartListener](/help/en/slb/api-startlistener-nlb#doc-api-Nlb-StartListener): enables an NLB listener.
        
    -   [StopListener](/help/en/slb/api-stoplistener-nlb#doc-api-Nlb-StopListener): disables a listener for an NLB instance.
        
    -   [GetListenerAttribute](/help/en/slb/api-getlistenerattribute-nlb#doc-api-Nlb-GetListenerAttribute): queries the details about an NLB listener.
        
    -   [GetListenerHealthStatus](/help/en/slb/api-getlistenerhealthstatus-nlb#doc-api-Nlb-GetListenerHealthStatus): queries the health status of an NLB listener.
