To manage an ACK cluster from the command line, connect to it using kubectl with a kubeconfig file. The kubeconfig file contains the credentials and endpoint information that kubectl needs to authenticate with the cluster's API server.

You can also manage clusters and applications through the [ACK console](https://cs.console.alibabacloud.com).

**Important**

Under the [shared responsibility model](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/shared-responsibility-model#section-6bh-fr1-i0y), you are responsible for securing your kubeconfig credentials. To reduce the risk of credential leakage, rotate your kubeconfig regularly and follow the principle of least privilege.

## Choose a kubeconfig type

A kubeconfig file defines how kubectl connects to your cluster. Choose a kubeconfig type based on two factors: how long you need access, and how your client connects to the cluster.

### By validity period

**Type**

**Validity**

**Best for**

**Security**

**Temporary**

30 minutes to 3 days (configurable)

Daily operations and maintenance (O&M), troubleshooting, CI/CD pipelines

Lower risk—auto-expires after the configured period

**Long-term**

3 years (default)

Automated systems, long-running monitoring services

Requires manual rotation before expiry

### By access method

**Type**

**When to use**

**Details**

**Private access**

Your client machine is in the same virtual private cloud (VPC) as the cluster

Connects over the internal network with lower latency and stronger security

**Public access**

Connect from any machine with Internet access

Exposes the API server through an [Elastic IP Address (EIP)](/help/en/eip/product-overview/what-is-eip)—suitable for local development and remote O&M

> A bound EIP incurs charges. For details, see [Pay-as-you-go](/help/en/eip/pay-as-you-go/#task-rcd-sgl-vdb).

If you have an ACK dedicated cluster with public access enabled, you can also get the kubeconfig file directly from the master node via SSH. For more information, see [Connect to the master node of an ACK dedicated cluster by using SSH](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-ssh-to-connect-to-the-master-nodes-of-a-dedicated-kubernetes-cluster#task-1664343).

## Prerequisites

Before you begin, make sure that you have:

-   [kubectl installed](https://kubernetes.io/docs/tasks/kubectl/install/) on your client machine, matching your cluster's Kubernetes version within one minor version (for example, if your cluster runs Kubernetes 1.28, use kubectl 1.27, 1.28, or 1.29)
    
-   A Resource Access Management (RAM) user with the required permissions granted both globally in ACK and for the specific cluster. For more information, see [Authorization](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/authorization-overview/#concept-268689).
    

## Get a kubeconfig file and connect to the cluster

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find your cluster and click its name, or click **Details** in the **Actions** column.
    
3.  On the **Cluster Information** page, click the **Connection Information** tab. Choose between a temporary or long-term kubeconfig. If you select a temporary kubeconfig, set the validity period.
    
4.  Click the **Internal Access** or **Public Access** tab based on your access method, then click **Copy** to copy the kubeconfig content.
    
5.  Paste the content into the `$HOME/.kube/config` file on your client, and save the file.
    
    > **Note:** If the directory or file does not exist, create it first.
    
6.  Verify the connection by listing all namespaces:
    
    ```
    kubectl get namespaces
    ```
    
    A successful connection returns output similar to:
    
    ```
    NAME              STATUS   AGE
    default           Active   4h39m
    kube-node-lease   Active   4h39m
    kube-public       Active   4h39m
    kube-system       Active   4h39m
    ```
    

## Manage kubeconfig credentials

### Rotate credentials before they expire

A long-term kubeconfig is valid for 3 years. To prevent service disruptions, get a new kubeconfig from the [ACK console](https://cs.console.alibabacloud.com) or through the [DescribeClusterUserKubeconfig](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-describeclusteruserkubeconfig) API within 180 days of its expiration.

> The new kubeconfig is also valid for 3 years. The old kubeconfig remains valid until its original expiration date.

### Revoke compromised credentials

If you suspect a kubeconfig file has been compromised, [revoke the cluster's kubeconfig credentials](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/revoke-a-kubeconfig-credential#task-2333177) immediately. This invalidates all connections that use the old credentials, and generates a new kubeconfig.

### Clean up permissions for departing users

When a user no longer needs access (for example, after a project ends or an employee leaves), revoke their kubeconfig permissions in bulk. After revocation, the system does not generate a new kubeconfig. For details, see [Delete kubeconfig files](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/clear-kubeconfig) and [Use ack-ram-tool to revoke the permissions of specified users on ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/revoke-the-permissions-of-the-specified-user-by-using-ack-ram-tool).

> To recover accidentally deleted permissions, use the [kubeconfig recycle bin](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/using-the-kubeconfig-recycle-bin) to restore specific revoked kubeconfig permissions.

## FAQ

> By default, kubectl uses `$HOME/.kube/config`. To use a different file, set the `KUBECONFIG` environment variable or pass the `--kubeconfig` flag. The commands in this section require you to replace `kubeconfig` with the path to your kubeconfig file.

#### **How do I find the identity associated with a kubeconfig certificate?**

Run the following command to extract the certificate subject:

```
# Extract the client certificate, decode it from base64,
# then use OpenSSL to display the Subject field
grep client-certificate-data kubeconfig | awk '{print $2}' | base64 -d | openssl x509 -noout -text | grep Subject:
```

The output looks similar to:

```
        Subject: O=system:users, OU=, CN=1***-1673419473
```

-   `O`—The Kubernetes user group. In this example, `system:users`.
    
-   `CN`—The user identifier. In this example, `1***-1673419473`, where `1***` is the Alibaba Cloud user ID.
    

#### **How do I check when a kubeconfig certificate expires?**

Run the following command:

```
# Extract the client certificate, decode it from base64,
# then use OpenSSL to print the expiration date
grep client-certificate-data kubeconfig | awk '{print $2}' | base64 -d | openssl x509 -noout -enddate
```

Expected output looks similar to:

```
notAfter=Jan 10 06:44:34 2026 GMT
```

In this example, the certificate expires on January 10, 2026.

Get a new kubeconfig from the console or by calling the API within 180 days before the certificate expires, or at any time after it has expired.

#### **How do I extract the client certificate, private key, and API server URL from a kubeconfig?**

Run the following commands:

```
# Extract and decode the client certificate to a PEM file
grep client-certificate-data ./kubeconfig | awk -F ' ' '{print $2}' | base64 -d > ./client-cert.pem

# Extract and decode the client private key to a PEM file
grep client-key-data ./kubeconfig | awk -F ' ' '{print $2}' | base64 -d > ./client-key.pem

# Extract the API server URL into a variable
APISERVER=$(grep server ./kubeconfig | awk -F ' ' '{print $2}')
```

#### **How do I resolve the "certificate is valid for" error?**

This error occurs when you bind a new IP address to the Server Load Balancer (SLB) instance for the cluster's API server. kubectl commands targeting the new IP fail with an `Error while proxying request: x509: certificate is valid for xxx` or `Unable to connect to the server: x509: certificate is valid for xxx` error.

The fix depends on your cluster type:

-   **ACK managed clusters:** Add the new IP address to the Subject Alternative Name (SAN) of the API server certificate. For more information, see [Customize the SANs of the API server certificate when you create an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/customize-the-san-of-the-api-server-certificate-when-you-create-an-ack-cluster#task-2064726).
    
-   **ACK dedicated clusters:** Configure kubectl to skip TLS verification using one of these methods:
    
    **Important**
    
    Skipping TLS verification is a security risk. Do not use this in production. Migrate to [ACK Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-dedicated-clusters-to-ack-pro-clusters#title-mor-ioc-kzy), then add the new IP address to the SAN of the API server certificate.
    
    -   **Method 1:** Pass the `--insecure-skip-tls-verify` flag:
        
        ```
        kubectl -s https://<IP>:6443 --insecure-skip-tls-verify get ns
        ```
        
    -   **Method 2:** Edit the kubeconfig file. Add `insecure-skip-tls-verify: true` and remove the `certificate-authority-data` field:
        
        ```
        apiVersion: v1
        clusters:
        - cluster:
            server: https://<IP>:6443
            insecure-skip-tls-verify: true
          name: kubernetes
        contexts:
        ...
        ```
        

#### Can I get the root certificate key for an ACK managed cluster to generate a kubeconfig myself?

No. ACK managed clusters do not expose the root certificate key. Get the cluster kubeconfig from the console or by calling the [DescribeClusterUserKubeconfig](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-describeclusteruserkubeconfig) API.

## References

-   To query a cluster kubeconfig programmatically, call the [DescribeClusterUserKubeconfig](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-describeclusteruserkubeconfig) API.
    
-   To log on to a cluster node, see [Overview of ECS remote connection methods](/help/en/ecs/user-guide/connect-to-instance).
