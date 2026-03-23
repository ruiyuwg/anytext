In ACK Pro clusters, you can use keys from Alibaba Cloud Key Management Service (KMS) to encrypt Kubernetes Secrets. This topic describes how to use a KMS-managed key to encrypt Secret data at rest in an ACK Pro cluster.

## Prerequisites

**Prerequisite**

**Description**

KMS key

Created a KMS key in the [Key Management Service console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). The key and the destination ACK Pro cluster must be in the same region.

ACK Pro clusters support default keys, software-protected keys, and hardware-protected keys. Select a key type based on your requirements. For more information about how to manage KMS keys, see [Getting started with key management](/help/en/kms/key-management-service/getting-started/getting-started-with-key-management). For more information about KMS billing, see [Product billing](/help/en/kms/key-management-service/product-overview/kms-billing).

**Important**

After you enable encryption at rest, do not use the KMS console or API to disable or delete the key used for Secret encryption and decryption. Otherwise, the cluster API server becomes unavailable and prevents you from obtaining objects such as Secrets and ServiceAccounts, which affects the normal operation of your applications.

Cluster network ACL rules

The KMS plugin on the control plane accesses the Alibaba Cloud KMS API to encrypt and decrypt Secret instances. Ensure that the **outbound** rules of the security group and the **inbound and outbound rules** of the VPC network ACL used by the cluster allow traffic to the Alibaba Cloud service CIDR block (`100.64.0.0/10`). Otherwise, the cluster control plane becomes unavailable. For more information, see [Basic security groups](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters#d2126c3b6b6le).

Authorization

Completed the following authorization operations based on your account type:

-   Alibaba Cloud account: Granted the AliyunCSManagedSecurityRole system role to the container service account. If this role has not been granted, the ACK console prompts you to authorize the KMS security system role when you enable encryption at rest for Secrets. You can follow the instructions in the console, or go to the [Quick Authorization page for Access Control](https://ram.console.alibabacloud.com/role/authorization?request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22CS%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunCSManagedSecurityRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedSecurityRole%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fcs.console.alibabacloud.com%2F%22%7D) to complete the authorization.
    
-   RAM user or RAM role:
    
    -   Granted administrator or O&M permissions on the cluster using Role-Based Access Control (RBAC). For more information, see [Use RBAC to grant permissions on cluster resources](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).
        
    -   Granted the AliyunKMSCryptoAdminAccess system permission. For more information, see [Grant permissions to a RAM user or RAM role](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
        

## How Secret encryption works

In a Kubernetes cluster, Secrets store and manage sensitive application data such as passwords, TLS certificates, and image pull credentials. Kubernetes stores all Secret object data in the cluster's etcd. For more information, see [Secrets](https://kubernetes.io/zh/docs/concepts/configuration/secret/).

In ACK Pro clusters, you can use a KMS key to encrypt Kubernetes Secrets. The encryption process is based on the Kubernetes KMS Encryption Provider mechanism, which uses envelope encryption to automatically encrypt and decrypt Kubernetes Secrets stored in etcd. The following steps describe the encryption and decryption process:

1.  When you create a Secret through the Kubernetes API, the API server encrypts the data with a random data encryption key (DEK). The API server then uses the specified KMS key to encrypt the DEK. Both the encrypted data and encrypted DEK are stored in etcd.
    
2.  When a client retrieves a Kubernetes Secret, the API server calls the KMS Decrypt API to decrypt the encrypted DEK. The API server then uses the resulting plaintext DEK to decrypt the Secret data, and returns the plaintext to the client.
    

For more information, see [Using a KMS provider for data encryption](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) and [Use a KMS key for envelope encryption](/help/en/kms/key-management-service/use-cases/use-envelope-encryption).

## KMS v2

Starting from Kubernetes 1.31, ACK Pro clusters use the KMS v2 API to implement encryption at rest. KMS v2 supports more Secret instances per cluster, and provides improved encryption and decryption performance. For more information about the KMS v2 encryption and decryption process, see [KMS v2](https://kubernetes.io/blog/2023/05/16/kms-v2-moves-to-beta/).

To upgrade from the KMS v1 API to the KMS v2 API, see [How do I upgrade to use KMS v2 for encryption at rest?](#88573927f4zn5)

**Note**

The Kubernetes community deprecated KMS v1 in Kubernetes 1.27 and disabled the v1 API by default in Kubernetes 1.29. To ensure compatibility, ACK Pro clusters can still use the v1 API because the KMS v1 feature gate is enabled.

## Enable encryption at rest for Secrets

### New ACK Pro cluster

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click **Create Kubernetes Cluster**.
    
3.  On the **ACK Managed Cluster** tab, expand **Advanced Options (Optional)**. In the **Secret Encryption** section, select the **Select Key** checkbox, then select a KMS key ID from the drop-down list. Configure other parameters as required and click **Create Cluster**.
    
    ![Secret encryption](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4520632661/p386752.png)
    
    For more information about how to configure other parameters, see [Parameters for creating an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/description-of-configuration-items-for-ack-managed-clusters).
    

Log on to the [ActionTrail console](https://actiontrail.console.alibabacloud.com). In the left navigation pane, click **Event Query**. If the page contains event logs for encryption and decryption operations that use the `aliyuncsmanagedsecurityrole` system role, encryption at rest for Secrets is enabled for the cluster.

To disable encryption at rest for Secrets, click the cluster name on the **Cluster Information** page, click the **Basic Information** tab, then disable **Secret Encryption** in the **Security and Auditing** section.

### Existing ACK Pro cluster

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the target cluster. On the cluster details page, click the **Basic Information** tab. In the **Security and Auditing** section, enable the **Secret Encryption**.
    
    If you are enabling this feature for the first time, click **Go to RAM for Authorization** as prompted. On the **Quick Authorization for Access Control** page, click **Confirm Authorization** to grant the required permissions.
    
    **Note**
    
    -   To enable encryption at rest, make sure that the current RAM user or RAM role has administrator or O&M permissions on the cluster granted through RBAC. For more information, see [Use RBAC to grant permissions on cluster resources](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles#task-1664343).
        
    -   To grant permissions to the aliyuncsmanagedsecurityrole role, make sure that you are logged on as an Alibaba Cloud account or a RAM user or RAM role that has RAM management permissions.
        
    
3.  In the **Secret Encryption at Rest** dialog box, select an existing KMS key and click **OK**.
    
    If you have not created a KMS key, click **Create Key** to go to the [Key Management Service console](https://yundun.console.alibabacloud.com/?p=kms) and create a key. For more information, see [Create a key](/help/en/kms/key-management-service/support/create-a-cmk#task-1939967).
    
    When the cluster status changes from **Updating** to **Running**, encryption at rest for Secrets is enabled.
    
    To disable encryption at rest for Secrets, disable the **Secret Encryption** in the **Security and Auditing** section.
    

## Use automatic key rotation

You can use the automatic key rotation feature of KMS with encryption at rest for Secrets. When a key is automatically rotated, existing Secrets remain encrypted with the previous key version, and new Secrets are encrypted with the new key version. For more information about automatic key rotation, see [Key rotation](/help/en/kms/key-management-service/user-guide/configure-key-rotation).

To re-encrypt existing Secrets with the new key version after an automatic key rotation, run the following command:

```
kubectl get secrets --all-namespaces -o json | kubectl annotate --overwrite -f - encryption-key-rotation-time="$(date -u +'%Y-%m-%dT%H:%M:%S%z')"
```

## FAQ

### How do I upgrade to use KMS v2 for encryption at rest?

To use KMS v2, make sure that your ACK Pro cluster is version 1.31 or later.

-   If encryption at rest for Secrets is not enabled, see [Enable encryption at rest for Secrets](#ln3qhi16uuij5) to enable the feature. Once enabled, Secrets will automatically use the KMS v2 API for encryption and decryption during the storage and retrieval processes.
    
-   If encryption at rest for Secrets is already enabled, rotate the encryption key during off-peak hours using one of the following methods:
    
    -   Method 1: Run the `kubectl get secrets --all-namespaces -o json | kubectl replace -f -` command to re-encrypt all Secrets using the KMS v2 API.
        
    -   Method 2: Log on to the [ACK console](https://cs.console.alibabacloud.com). On the **Basic Information** tab of the **Cluster Information** page, disable **Secret Encryption** to decrypt all Secrets. After the process is complete, see [Enable encryption at rest for Secrets](#ln3qhi16uuij5) to re-enable the feature. All Secrets are then encrypted at rest using the KMS v2 API.
        

### After encryption at rest is enabled, is the Secret obtained through kubectl commands encrypted?

No. The encryption at rest feature encrypts the raw Secret data stored in etcd. This means that while the data residing in etcd is ciphertext, the Secret data retrieved by clients through the API server remains in its original plaintext format.

### How do I prevent RAM users or RAM roles from enabling or disabling Secret encryption at rest?

Attach the following RAM policy to a RAM user or RAM role to prevent them from enabling or disabling the encryption at rest feature for Secrets in an existing ACK Pro cluster. For more information, see [Use RAM to grant access permissions to clusters and cloud resources](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-custom-ram-policy#task-1664328).

```
{
    "Action": [
        "cs:UpdateKMSEncryption"
    ],
    "Effect": "Deny",
    "Resource": [
        "*"
    ]
}
```
