This topic describes how to enable, view, upgrade, and renew Key Management Service (KMS) instances, and how to enable security audit for the instances.

**Important**

Pay attention to the **remaining subscription period** of your KMS instance. Renew the instance before it expires to prevent business disruptions. For more information, see [Expiration rules](/help/en/kms/key-management-service/product-overview/kms-billing#section-xep-scj-udo).

## Enable a KMS instance

After purchasing a instance, you must enable it before you can use its key and secret management features.

## **Enable a software key management instance**

#### **Prerequisites**

-   You must have one VPC and one vSwitch.
    
    We recommend that you first log on to the [VPC Management Console](https://vpc.console.alibabacloud.com/vpc) to view your existing VPCs, vSwitches, and the zones where the vSwitches are located before enabling the instance. You can also create a new VPC and vSwitch. For more information, see [Create a VPC and a vSwitch](/help/en/vpc/user-guide/create-and-manage-a-vpc#section-znz-rbv-vrx) or [Create a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#section-ts9-t3s-8vw).
    
-   You must manually enable Cloud DNS PrivateZone if you use an **Alibaba Cloud China site (aliyun.com)** account to purchase a KMS instance **outside the Chinese mainland**, or if you use an **Alibaba Cloud international site (alibabacloud.com)** account to purchase an instance in **the Chinese mainland**. For more information, see [Enable PrivateZone](/help/en/privatezone/latest/subscribe-service).
    
    **Note**
    
    -   If you use an **Alibaba Cloud China site (aliyun.com)** account to purchase an instance **in the Chinese mainland**, or use an **Alibaba Cloud international site** account to purchase an instance **outside the Chinese mainland**, Alibaba Cloud automatically enables PrivateZone. You do not need to manually enable it.
        
    -   KMS covers the costs of domain name resolution for the instance. You do not need to pay fees to PrivateZone.
        
    

#### **Procedure**

**Enable a software key management instance in the console**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  On the **Software Key Management** tab, find the target software key management instance and click **Enable** in the **Actions** column.
    
3.  In the **Enable KMS Instance** panel, complete the configurations and click **Enable Now**.
    
    **Parameter**
    
    **Description**
    
    **Instance Name**
    
    Enter a custom name for the instance. The name can contain letters, digits, and special characters `_/+=.@-`.
    
    **VPC ID**
    
    Select a VPC to attach to the instance.
    
    **Zone Configuration**
    
    This is related to the deployment mode selected during instance purchase. Dual-zone or multi-zone deployment is supported. For multi-zone deployment, configure up to three zones.
    
    -   **Zone and vSwitch**: Configure a zone and a vSwitch. Make sure that the vSwitch has at least one available IP address.
        
    -   **Other Zones**: You can have zones randomly assigned or manually specify them.
        
    
    **Note**
    
    -   Some regions provide only one zone. An instance in these regions can only be deployed in a single zone.
        
    -   Dual-zone or multi-zone deployment is used to achieve high availability, disaster recovery, and load balancing for KMS. The difference is negligible in latency and performance between selecting a zone where your services are located and a zone where they are not. Select as needed.
        
    
    Wait for about 30 minutes and then refresh the page. The software key management instance is enabled when its status changes to **Enabled**.
    

**Enable a software key management instance using the KMS API**

You can call the [ConnectKmsInstance](/help/en/kms/key-management-service/developer-reference/api-connectkmsinstance) operation.

**Enable a software key management instance using Terraform**

For more information, see [Purchase and enable a software key management instance using Terraform](/help/en/kms/key-management-service/developer-reference/purchase-and-enable-an-instance-of-software-key-management).

## **Enable a hardware key management instance**

#### **Prerequisites**

-   You must have configured a cryptor cluster that the KMS instance can connect to. For more information, see [Configure a cryptor cluster for a KMS hardware key management instance](/help/en/kms/cloud-hardware-security-module/use-cases/configure-an-hsm-cluster-for-a-kms-instance-of-the-hardware-key-management-type#task-2267046).
    
    **Warning**
    
    If you plan to expand the number of HSMs in the HSM cluster, contact Alibaba Cloud technical support to change the cluster synchronization method to automatic synchronization. This helps prevent synchronization failures.
    
-   Ensure that each zone configured for the KMS instance has a vSwitch. The following section uses a dual-zone deployment as an example.
    
    -   (Recommended) Use the two vSwitches that are attached to the HSM instance. In this case, you do not need to create vSwitches. Just ensure that four available IP addresses are reserved for each vSwitch.
        
    -   If you do not use the two vSwitches that are attached to the HSM instance, you must create two vSwitches in different zones. Ensure that four available IP addresses are reserved for each vSwitch. For more information, see [Create a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#section-ts9-t3s-8vw).
        
    
    You can log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc), click the target vSwitch on the **vSwitches** page, and view the available IP address count on the details page.
    
-   You must manually enable Cloud DNS PrivateZone if you use an **Alibaba Cloud China site (aliyun.com)** account to purchase a KMS instance **outside the Chinese mainland**, or if you use an **Alibaba Cloud international site** account to purchase a KMS instance in **the Chinese mainland**. For more information, see [Enable PrivateZone](/help/en/privatezone/latest/subscribe-service).
    
    **Note**
    
    -   If you use an **Alibaba Cloud China site (aliyun.com)** account to purchase a KMS instance **in the Chinese mainland**, or use an **Alibaba Cloud international site** account to purchase a KMS instance **outside the Chinese mainland**, Alibaba Cloud automatically enables PrivateZone. You do not need to manually enable it.
        
    -   KMS covers the costs of domain name resolution for the KMS instance. You do not need to pay fees to PrivateZone.
        
    

#### Procedure

**Note**

You can enable hardware key management instances only in the console. You cannot enable them using the KMS API or Terraform.

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  Click the **Hardware Key Management** tab, find the target hardware key management instance, and click **Enable** in the **Actions** column.
    
3.  In the **Connect to HSM** panel, complete the configurations, and then click **Connect to HSM** to specify an HSM cluster.
    
    **Parameter**
    
    **Description**
    
    **Instance Name**
    
    Enter a custom name for the instance. The name can contain letters, digits, and special characters `_/+=.@-`.
    
    **Select Cluster**
    
    Select the HSM cluster that you configured in CloudHSM.
    
    **Note**
    
    A hardware key management instance can be attached to only one HSM cluster.
    
    **Configure HSM Access Secret.**
    
    ##### **HSM cluster in the Chinese mainland**
    
    A hardware key management instance uses bidirectional TLS authentication to connect to an HSM. You can choose to automatically generate certificates when you purchase an HSM. You only need to configure the certificates on the client SDK side, and the HSM automatically deploys them to the server-side encryption machine. If you do not configure the HSM to automatically generate certificates, you must configure a client certificate (a PKCS12 format certificate with a security token) and a security domain certificate (the CA certificate in PEM format that is used to issue the TLS server-side certificate for the HSM cluster). For more information about how to generate certificates, see [Configure bidirectional TLS authentication for a master HSM instance](/help/en/kms/cloud-hardware-security-module/use-cases/configure-an-hsm-cluster-for-a-kms-instance-of-the-hardware-key-management-type#7213055d196fg).
    
    -   **Client Protection Password**: The protection password that you set when you generate the client certificate `client.p12`. If you use the certificate generation tool (hsm\_certificate\_generate), the default password is `12345678`.
        
    -   **Client Certificate**: A PKCS12 certificate. Click **Select File** and select the generated `client.p12` file to upload.
        
    -   **Security Domain Certificate**: A CA certificate in PEM format. Click **Select File** and select the generated `rootca.pem` file to upload.
        
    
    ##### **HSM cluster outside the Chinese mainland**
    
    -   **Username**: The username of the HSM operator (fixed as `kmsuser`).
        
    -   **Password**: The access password for the HSM operator. This is the password you set when you created the HSM operator.
        
    -   **Security Domain Certificate**: A CA certificate in PEM format. [Log on to the CloudHSM console](https://yundun.console.alibabacloud.com/?p=hsm#/Encrypt/list/cn-hangzhou), click the ID of any HSM instance in the cluster, and find **ClusterOwnerCertificate** at the bottom of the **Details** tab. This is the security domain certificate. Copy the content directly or save it as a PEM file and then upload it.
        
    
    **VPC ID**
    
    By default, this is the ID of the VPC attached to the HSM. It cannot be changed.
    
    **Configure Zone and vSwitch**
    
    This is related to the deployment mode selected during instance purchase. Dual-zone or multi-zone deployment is supported. Four available IP addresses must be reserved for the vSwitch in each zone.
    
    For multi-zone deployment, configure up to three zones.
    
    **Note**
    
    Dual-zone or multi-zone deployment is used to achieve high availability, disaster recovery, and load balancing for KMS. The difference in latency and performance between selecting a zone where your services are located and a zone where they are not is negligible. Select as needed.
    
    If you selected a secret quota when you purchased the instance, wait for about 30 minutes and then refresh the page. If you did not select a secret quota, wait for about 10 minutes and then refresh the page. The hardware key management instance is enabled when its status changes to **Enabled**.
    

## **Enable an external key management instance**

#### Prerequisites

-   You must have purchased an external HSM and configured an XKI proxy. For more information, contact your HSM provider.
    
    **Note**
    
    For more information, see [XKI Proxy server](https://market.aliyun.com/products/53366009/cmjj00065781.html).
    
-   You can connect KMS to the XKI proxy using a public endpoint or a VPC endpoint service. To use a VPC endpoint, first create an endpoint service. For more information, see [Create and manage endpoint services](/help/en/privatelink/create-and-manage-endpoint-services#section-t53-jkq-3n7). Note the following when you create the endpoint service:
    
    -   The two zones of the endpoint service must be the same as the zones selected when you enable the KMS instance.
        
    -   You must add the current Alibaba Cloud account to the whitelist of the endpoint service.
        
    -   The **Auto-accept Connection** setting for the endpoint service must be set to **Yes**.
        
-   You must manually enable PrivateZone if you use an **Alibaba Cloud China site (aliyun.com)** account to purchase a KMS instance **outside the Chinese mainland**, or if you use an **Alibaba Cloud international site** account to purchase a KMS instance in **the Chinese mainland**. For more information, see [Enable PrivateZone](/help/en/privatezone/latest/subscribe-service).
    
    **Note**
    
    -   If you use an **Alibaba Cloud China site (aliyun.com)** account to purchase an instance **in the Chinese mainland**, or use an **Alibaba Cloud international site** account to purchase an instance **outside the Chinese mainland**, Alibaba Cloud automatically enables PrivateZone. You do not need to manually enable it.
        
    -   KMS covers the costs of domain name resolution for the KMS instance. You do not need to pay fees to PrivateZone.
        
    

#### **Procedure**

**Note**

You can enable external key management instances only in the console. You cannot enable them using KMS APIs or Terraform.

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  Click the **External Key Management** tab, find the target instance, and click **Enable** in the **Actions** column.
    
3.  In the **Connect to HSM** panel, complete the configurations, and then click **Connect to HSM** to specify an HSM cluster.
    
    **Parameter**
    
    **Description**
    
    **Instance Name**
    
    Enter a custom name for the instance. The name can contain letters, digits, and special characters `_/+=.@-`.
    
    **VPC ID**
    
    Select a VPC to attach to the instance.
    
    **Zone Configuration**
    
    This is related to the deployment mode selected during instance purchase. Dual-zone or multi-zone deployment is supported. For multi-zone deployment, you can configure up to three zones.
    
    -   **Zone and vSwitch**: Configure a zone and a vSwitch. Make sure that the vSwitch has at least one available IP address.
        
    -   **Other Zones**: You can have zones randomly assigned or manually specify them.
        
    
    **Note**
    
    -   Some regions provide only one zone. A KMS instance in these regions can only be deployed in a single zone.
        
    -   Dual-zone or multi-zone deployment is used to achieve high availability, disaster recovery, and load balancing for KMS. The difference is negligible in latency and performance between selecting a zone where your services are located and a zone where they are not. Select as needed.
        
    
    **External Proxy Connectivity**
    
    -   **Public Endpoint Connectivity**: The KMS instance connects to the XKI proxy over the Internet.
        
    -   **VPC Endpoint Service Connectivity** : The KMS instance connects to the XKI proxy using a VPC endpoint service.
        
    
    **Domain Name of External Proxy**
    
    This is required only when **External Proxy Connectivity** is set to **Public Endpoint Connectivity**. Enter the domain name of the XKI proxy.
    
    **Endpoint Service**
    
    This is required only when **External Proxy Connectivity** is set to **VPC Endpoint Service Connectivity** . Select an endpoint service.
    
    The zones selected for enabling the KMS instance must be the same as the zones of the endpoint service.
    
    **External Proxy Configuration**
    
    -   **Manual Configuration**: Manually configure the **External Proxy Path**, **Certificate Fingerprint**, AccessKey ID, and AccessKey secret of the XKI proxy.
        
    -   **Configuration File Upload**: Configure by uploading a file.
        
    
    If you selected a secret quota when you purchased the instance, wait for about 30 minutes and then refresh the page. If you did not select a secret quota, wait for about 10 minutes and then refresh the page. The external key management instance is enabled when its status changes to **Enabled**.
    

## **Set an alias for a KMS instance**

An alias for a KMS instance must be 1 to 128 characters in length and can contain only letters, digits, and the following special characters: `/_+=.@-`.

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  Click the tab for the target instance. Below the instance ID, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7541648271/p855549.png) edit icon to set the alias.
    

## View KMS instance details

After you enable a Key Management Service (KMS) instance, you can view its details, such as the instance ID, VPC address, and associated virtual private cloud (VPC).

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  On the **Instances** page, click the tab of the instance type based on your business requirements.
    
3.  Find the target KMS instance and click **Details** in the **Actions** column. The instance details page appears.
    

## Upgrade a KMS instance

If the current instance type of your Key Management Service (KMS) instance does not meet your business requirements, you can upgrade the instance. For example, you can increase the computing performance or the number of credentials and keys. The upgrade process does not affect your services.

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  On the **Instances** page, click the tab of the instance type based on your business requirements.
    
3.  Find the target KMS instance and click **Upgrade** in the **Actions** column. On the Upgrade/Downgrade page, select a new instance type.
    
4.  Read **Terms of Service** and click **Buy Now**.
    

## **Release a KMS instance**

You can manually release only pay-as-you-go Key Management Service (KMS) instances. Subscription instances cannot be manually released. You can unsubscribe from subscription instances only if they meet specific conditions. For more information, see [Unsubscription rules](/help/en/kms/key-management-service/product-overview/kms-billing#section-0e1-y0z-fle).

**Warning**

-   When an instance is released, all its resources are also released. Resources that are encrypted by keys from the instance cannot be decrypted. Credentials from the instance cannot be retrieved. Before you release an instance, confirm that no data is encrypted by its keys and no services are calling its credentials. This helps prevent service disruptions.
    
-   If your instance is a software key management instance, back up its resources before you release it. You can then recover the resources from the backup. For more information, see [Backup management](/help/en/kms/key-management-service/user-guide/backups).
    
-   Pay-as-you-go instances are billed daily. After you release an instance, the bill for the previous day is generated by 12:00 on the following day.
    

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  On the **Instances** page, click the tab of the instance type based on your business requirements.
    
3.  Find the KMS instance and click **Release** in the **Actions** column. Then, confirm the details and click **Release**.
    
    **Note**
    
    If the **Release** button is unavailable, deletion protection might be enabled for the KMS instance. Disable deletion protection before you release the instance.
    

## **Enable deletion protection for a KMS instance**

You can enable deletion protection for a Key Management Service (KMS) instance to prevent it from being accidentally released or unsubscribed. After this feature is enabled, you cannot manually release or unsubscribe from the instance using the console, an API, or the command line.

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  On the **Instances** page, click the tab of the instance type based on your business requirements.
    
3.  Find the target KMS instance, click **Enable Deletion Protection** in the **Actions** column, and then click **Enable**.
    

## **Renew a KMS instance**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  Select the **Software Key Management** or **Hardware Key Management** tab, locate the instance you want to renew, and click **Actions** in the **Renew** column.
    
3.  On the **KMS (International) | Renew** page, set the **Duration**, agree to the **Terms of Service**, and proceed.
    
4.  Click **Buy Now** and complete the purchase.
    

You can also renew the instance on the Expenses and Costs page. For more information, see [Renew expiring resources](/help/en/user-center/renewal-guide).

## **Set the default instance**

This feature is for users who are migrating from KMS 1.0 to KMS 3.0. Other users do not need to set a default instance.

For more information, see [Migrate KMS 1.0 resources to a KMS 3.0 instance](/help/en/kms/key-management-service/use-cases/migrate-cmks-in-default-kms-instances-to-your-kms-instances/).

## **Set the sharing model for instances**

The owner of a KMS instance (instance owner) can share the instance with other Alibaba Cloud accounts (instance users). For more information, see [Share a KMS instance with multiple accounts](/help/en/kms/key-management-service/user-guide/share-a-kms-instance-across-multiple-alibaba-cloud-accounts). KMS supports the following two shared modes:

**Important**

-   New instances default to the **Joint Ownership** mode.
    
-   In either mode, instance users cannot use or manage the keys and credentials of the instance owner.
    

**Feature**

**Independent ownership**

**Joint ownership**

**Use cases**

Required when you have cross-account secrets with the same name or need to isolate permissions.

Ideal for internal collaboration where a central team (such as IT or security) needs to manage and audit all keys and secrets.

**Core characteristic**

**Independent data ownership**: The resource owner cannot manage or use the keys and secrets created by the principal.

**Shared data ownership**: The resource owner can manage and use the keys and secrets created by the principal.

**Cross-account resources with the same name**

**Allowed**. The principal and the resource owner can create secrets with the same name within the instance.

**Not allowed**. All key and secret names within the instance must be unique.

**Mode change**

Cannot be changed to joint ownership.

Can be changed to independent ownership.

## **FAQ**

-   [Why is a KMS instance always in the Enabling state when I enable the instance?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#section-o4s-ba5-svc)
    
-   [Why does the "Failed to Connect" error message appear when I enable a hardware key management instance?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#title-ofa-i18-90d)
    
-   [What do I do if an error occurs when I enable a software key management instance?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#84f0955010484)
    
-   [What do I do if an error occurs when I enable a hardware key management instance?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#a42dd6a01003e)
    
-   [How do I configure an HSM cluster for a KMS instance of the hardware key management type?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#section-98n-rnp-3eo)
    
-   [How do I configure the HSM cluster to which I want to connect a hardware key management instance?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#title-8xv-shb-poi)
    
-   [How do I release a KMS instance?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#section-6vo-z3j-5w1)
