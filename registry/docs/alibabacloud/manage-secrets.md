This topic describes how to manage secrets in a Kubernetes cluster.

## Prerequisites

An ACK cluster is created. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).

## Background information

We recommend that you use Secrets to store sensitive information in Kubernetes clusters. The information includes passwords and certificates.

Secret dictionaries include the following types:

-   Service account: A service account is automatically created by Kubernetes and automatically mounted to the /run/secrets/kubernetes.io/serviceaccount directory of a pod. The service account provides an identity for the pod to interact with the API server.
    
-   Opaque: This type of Secret is encoded in Base64 and used to store sensitive information, such as passwords and certificates.
    

By default, you can create only Opaque Secrets in the ACK console. Opaque Secrets store map type data. Therefore, values must be encoded in Base64. You can create Secrets in the ACK console with a few clicks. Plaintext is automatically encoded in Base64.

You can also [create Secrets using the CLI](https://kubernetes.io/docs/concepts/configuration/secret/).

## Create a Secret

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Configurations** > **Secrets**.
    
3.  On the **Secrets** page, select a **Namespace**. In the upper-right corner, click **Create**, and then configure the new Secret in the panel that appears.
    
    **Parameter**
    
    **Description**
    
    Name
    
    Enter a name for the Secret. The name must be 1 to 253 characters in length, and can contain only lowercase letters, digits, hyphens (-), and periods (.).
    
    Type
    
    This includes Opaque, private image repository logon key, and TLS certificate.
    
    Opaque
    
    If you set Type to Opaque, configure the following parameters:
    
    -   **Optional:** To enter plaintext secret data, select **Encode Data Values Using Base64**.
        
    -   Configure the secret data. Click **+****Add**. In the **Name** and **Value** text boxes, enter the secret key and value.
        
    
    Private Repository Logon Secret
    
    If you set Type to Private Repository Logon Secret, configure the following parameters:
    
    -   Docker Registry URL: Enter the address of the Docker registry where your Secret is stored.
        
    -   Username: Enter the username that is used to log on to the Docker registry.
        
    -   Password: Enter the password that is used to log on to the Docker registry.
        
    
    TLS Certificate
    
    If you set Type to TLS Certificate, configure the following parameters:
    
    -   Cert: Enter a TLS certificate.
        
    -   Key: Enter the key for the TLS certificate.
        
    

## Related operations

After you create a Secret, you can perform the following operations on the **Secrets** page:

-   Click the name of the Secret to view the basic information and details about the Secret.
    
    **Note**
    
    Click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5211938961/p712621.png) icon to view the values in plaintext.
    
-   In the **Actions** column, click **Edit** to modify the Secret.
    
-   In the **Actions** column, click **Delete** to delete an unneeded Secret.
    
    **Important**
    
    Do not delete Secrets that are generated when the cluster is created.
