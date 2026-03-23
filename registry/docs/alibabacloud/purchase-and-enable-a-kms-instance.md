A Key Management Service (KMS) instance provides key and secret management capabilities. You can use keys to encrypt and decrypt sensitive data and use secrets to avoid hardcoding credentials in your code. This topic describes how to purchase and enable a KMS instance.

## Step 1: Purchase a KMS instance

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  On the **Instances** page, click **Create Instance**, select a billing method, select the desired instance type, and then click **Buy Now**.
    
    ## Subscription
    
    **Parameter**
    
    **Description**
    
    **Site**
    
    The site where the instance's region is located. Options: **International regions** and **Chinese mainland regions**.
    
    **Instance Type**
    
    KMS provides default keys, including service keys and customer master keys, for cloud product encryption in each region. You do not need to purchase a KMS instance to use default keys, but the features are limited. Default keys are free to use. Only key rotation is a paid value-added service.
    
    Before purchasing a KMS instance, we recommend reading [Product Selection](/help/en/kms/key-management-service/product-overview/service-selection) to understand default keys and KMS instances.
    
    -   **Purchase a KMS instance**
        
        A software key management instance is sufficient for most use cases. Select a hardware key management instance if your business requires physical-level security protection or needs to comply with strict regulations, such as those in the financial industry.
        
        -   **Software Key Management**: Keys are stored in your dedicated database.
            
        -   **Hardware Key Management**: Key generation, storage, encryption, and decryption rely on a dedicated hardware security module (HSM) that is compliant with Chinese Cryptographic Algorithm or FIPS 140-2 Level 3 certification. To purchase this type of instance, you must also purchase a Dedicated HSM. For more information, see [Configure an HSM cluster for a KMS hardware key management instance](/help/en/kms/cloud-hardware-security-module/use-cases/configure-an-hsm-cluster-for-a-kms-instance-of-the-hardware-key-management-type).
            
    -   **Purchase value-added services for keys**
        
        -   **Instance backup**: Available only for software key management instances. After you enable a software key management instance, KMS automatically creates a free backup that stores data for 90 days. We recommend that you first evaluate the free backup service. If it does not meet your business requirements, you can purchase the instance backup service. For more information, see [Backup management](/help/en/kms/key-management-service/user-guide/backups).
            
        -   **Default key rotation**: Available only for the free default key.  For more information, see [Default key rotation](/help/en/kms/key-management-service/user-guide/configure-key-rotation#e34e977079g6t).
            
            **Note**
            
            If you purchase a KMS instance, the keys in the instance support rotation by default. You do not need to purchase this value-added service.
            
    
    **Region**
    
    We recommend selecting the same region as your business deployment. For more information, see [Supported regions](/help/en/kms/key-management-service/product-overview/supported-regions#concept-2313091).
    
    **Deployment Mode**
    
    KMS instances support dual-zone and multi-zone configurations, offering high availability, disaster recovery, and load balancing.
    
    **Note**
    
    -   Multi-zone deployments support up to three zones.
        
    -   KMS instances in the Phillippines (Manila) and Thailand (Bangkok) regions support only single-zone deployment.
        
        For the number of zones in each region, see [Regions and zones](/help/en/kms/key-management-service/product-overview/supported-regions).
        
    
    **Compute Performance**
    
    The [performance data](/help/en/kms/key-management-service/product-overview/performance-data#concept-337381) of the KMS instance. For example, a value of 2,000 indicates a maximum performance of 2,000 QPS for symmetric cryptographic operations and 300 QPS for asymmetric cryptographic operations when they are processed independently.
    
    **Note**
    
    If you need a software key management instance with computing performance of 10,000 or 20,000, [contact us](/help/en/kms/key-management-service/support/contact-us-1).
    
    **Number of Keys**
    
    The key quota. The default value is 1,000.
    
    The quota is calculated based on the number of key versions, not the number of keys. For example, if a key has five versions, it consumes five from your key quota.
    
    **Number of Secrets**
    
    The secret quota. The default value is 0.
    
    The quota is calculated based on the number of secrets, regardless of the number of secret versions. A secret consumes only one from your secret quota, no matter how many versions it has.
    
    **Note**
    
    If you do not use secrets, skip this quota. You can add a secret quota later by upgrading the instance.
    
    **Access Management Quantity**
    
    This quota applies to two features:
    
    -   [Accessing a KMS instance from multiple VPCs in the same region](/help/en/kms/key-management-service/user-guide/access-a-kms-instance-from-multiple-vpcs-in-the-same-region): Allows multiple VPCs in the same region to access KMS resources. The number of quotas required is equal to the number of VPCs.
        
    -   [Multi-account KMS instance sharing](/help/en/kms/key-management-service/user-guide/share-a-kms-instance-across-multiple-alibaba-cloud-accounts): You need one quota for each Alibaba Cloud account with which you share the instance.
        
    
    For example, to associate an instance with three VPCs and share it with two accounts, you need a quota of 5.
    
    The default value is 1. This allows the VPC attached to one KMS instance to access KMS resources.
    
    **Log Analysis**
    
    Specifies whether to enable log analysis. For more information, see [Log Service](/help/en/kms/key-management-service/user-guide/overview-of-simple-log-service).
    
    **Warning**
    
    You cannot disable log analysis after it is enabled. For information about the fees, see [Product Billing](/help/en/kms/key-management-service/product-overview/kms-billing).
    
    **Log Storage Capacity**
    
    The minimum capacity is 1,000 GB, and it increases in increments of 1,000 GB. To learn how to estimate the required capacity, see [How to calculate the required log storage capacity](/help/en/kms/key-management-service/user-guide/overview-of-simple-log-service#ff6a70c071kg3).
    
    **Quantity**
    
    The number of KMS instances to purchase.
    
    **Important**
    
    Typically, you only need to purchase one KMS instance. To purchase multiple KMS instances, [contact us](/help/en/kms/key-management-service/support/contact-us-1).
    
    **Duration**
    
    Select the subscription duration as needed.
    
    **Note**
    
    You can select **Auto-renewal on expiration**. The KMS instance is automatically renewed after it expires.
    
    ## Pay-as-you-go
    
    **Parameter**
    
    **Description**
    
    **Billing Method**
    
    The fixed value is **Pay-as-you-go 3.0**.
    
    **Instance Type**
    
    A software key management instance is sufficient for most use cases. Select a hardware key management instance if your business requires physical-level security protection or needs to comply with strict regulations, such as those in the financial industry.
    
    -   **Software Key Management**: Keys are stored in your dedicated database.
        
    -   **Hardware Key Management**: Key generation, storage, and cryptographic operations rely on a dedicated Hardware Security Module (HSM) that is compliant with Chinese Cryptographic Algorithm or FIPS 140-2 Level 3 certification. To purchase this type of instance, you must also purchase a Dedicated HSM. For more information, see [Configure an HSM cluster for a KMS hardware key management instance](/help/en/kms/cloud-hardware-security-module/use-cases/configure-an-hsm-cluster-for-a-kms-instance-of-the-hardware-key-management-type).
        
    
    **Region**
    
    We recommend selecting the same region as your business deployment. For more information, see [Supported regions](/help/en/kms/key-management-service/product-overview/supported-regions#concept-2313091).
    
3.  Click **Buy Now**, read **Terms of Service**, and then click **Pay** to complete the purchase.
    
    After a successful purchase, wait 1 to 5 minutes for the new instance to appear on the **Instances** page.
    

## Step 2: Enable the KMS instance

After you purchase a KMS instance, you must enable it before using key management and secret management.

### **Enable a software key management instance**

#### **Prerequisites**

-   You have a VPC and a vSwitch.
    
    Before enabling the KMS instance, we recommend checking your existing VPCs, vSwitches, and their zones in the [VPC console](https://vpc.console.alibabacloud.com/vpc). You can also create a new VPC and vSwitch. For more information, see [Create a VPC and a vSwitch](/help/en/vpc/user-guide/create-and-manage-a-vpc#section-znz-rbv-vrx) or [Create a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#section-ts9-t3s-8vw).
    
-   If you use an Alibaba Cloud account for the **Alibaba Cloud China site (aliyun.com)** to purchase a KMS instance in a region **outside the Chinese mainland**, or if you use an Alibaba Cloud account for the **Alibaba Cloud international site (alibabacloud.com)** to purchase a KMS instance in a region **within the Chinese mainland**, you must manually activate Alibaba Cloud DNS PrivateZone. For more information, see [Enable PrivateZone](/help/en/privatezone/latest/subscribe-service).
    
    **Note**
    
    -   If you use an Alibaba Cloud account for the **Alibaba Cloud China site** to purchase a KMS instance in a region **within the Chinese mainland**, or if you use an Alibaba Cloud account for the **Alibaba Cloud international site** to purchase a KMS instance in a region **outside the Chinese mainland**, Alibaba Cloud automatically activates PrivateZone for you.
        
    -   KMS covers the domain resolution costs for the instance, so you do not incur fees from Alibaba Cloud DNS PrivateZone.
        
    

#### **Procedure**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  On the **Software Key Management** tab, find the target software key management instance and click **Enable** in the **Actions** column.
    
3.  In the **Enable KMS Instance** panel, complete the configurations and click **Enable Now**.
    
    **Parameter**
    
    **Description**
    
    **Instance Name**
    
    A custom name for the KMS instance. The name can contain letters, digits, and the following special characters: `_/+=.@-`.
    
    **VPC ID**
    
    Select a VPC to bind to the KMS instance.
    
    **Zone Configuration**
    
    This setting depends on the deployment mode selected during purchase. It supports dual-zone or multi-zone configurations. You can configure up to three zones in a multi-zone deployment.
    
    -   **Zone and vSwitch**: Configure a zone and a vSwitch. Make sure that the vSwitch has at least one available IP address.
        
    -   **Other Zones**: You can have zones randomly assigned or manually specify them.
        
    
    **Note**
    
    -   Some regions provide only one zone. A KMS instance in these regions can be deployed only in a single zone.
        
    -   The choice of zone has a negligible impact on latency and performance, so you can select zones based on your preference.
        
    
    Wait for about 30 minutes and then refresh the page. The software key management instance is enabled when its status changes to **Enabled**.
    

### **Enable a hardware key management instance**

#### **Prerequisites**

-   You have configured an HSM cluster that the KMS instance can connect to. For more information, see [Configure an HSM cluster for a KMS hardware key management instance](/help/en/kms/cloud-hardware-security-module/use-cases/configure-an-hsm-cluster-for-a-kms-instance-of-the-hardware-key-management-type#task-2267046).
    
    **Warning**
    
    If you need to add more HSMs to the cluster later, contact Alibaba Cloud technical support to set the cluster's synchronization method to automatic, which prevents synchronization failures.
    
-   A vSwitch is available in each zone that you configured for the KMS instance. A dual-zone deployment is used as an example.
    
    -   (Recommended) Use the two vSwitches bound to the HSM instance: You do not need to create vSwitches. Just make sure that each vSwitch has at least four available IP addresses.
        
    -   Do not use the two vSwitches bound to the HSM instance: You need to create two vSwitches in different zones. Each vSwitch must have at least four available IP addresses. For more information, see [Create a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#section-ts9-t3s-8vw).
        
    
    You can log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc), go to the vSwitches page, and click a target vSwitch to view the number of available IP addresses on its details page.
    
-   If you use an Alibaba Cloud account for the **Alibaba Cloud China site (aliyun.com)** to purchase a KMS instance in a region **outside the Chinese mainland**, or if you use an Alibaba Cloud account for the **Alibaba Cloud international site (alibabacloud.com)** to purchase a KMS instance in a region **within the Chinese mainland**, you must manually activate Alibaba Cloud DNS PrivateZone. For more information, see [Enable PrivateZone](/help/en/privatezone/latest/subscribe-service).
    
    **Note**
    
    -   If you use an Alibaba Cloud account for the **Alibaba Cloud China site** to purchase a KMS instance in a region **within the Chinese mainland**, or if you use an Alibaba Cloud account for the **Alibaba Cloud international site** to purchase a KMS instance in a region **outside the Chinese mainland**, Alibaba Cloud automatically activates PrivateZone for you.
        
    -   KMS covers the domain resolution costs for the instance, so you do not incur fees from Alibaba Cloud DNS PrivateZone.
        
    

#### **Procedure**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  Click the **Hardware Key Management** tab, find the target hardware key management instance, and click **Enable** in the **Actions** column.
    
3.  In the **Connect to HSM** panel, configure the parameters, and then click **Connect to HSM** to specify an HSM cluster.
    
    **Parameter**
    
    **Description**
    
    **Instance Name**
    
    Enter a custom name for the KMS instance. The name can contain letters, digits, and the following special characters: `_/+=.@-`.
    
    **Select Cluster**
    
    Select the cluster that you configured in Cloud HSM.
    
    **Note**
    
    A hardware key management instance can be bound to only one HSM cluster.
    
    **Configure HSM Access Secret.**
    
    ## **HSM cluster in the Chinese mainland**
    
    The connection between a KMS hardware key management instance and an HSM uses mutual Transport Layer Security (TLS) authentication. When you purchase an HSM, you can choose to have certificates generated automatically. In this case, Cloud HSM automatically generates the certificates. You only need to configure the certificates on the client SDK side, and Cloud HSM will automatically deploy them on the server-side HSM. If you did not configure automatic certificate generation, you must configure a client certificate (a PKCS#12 certificate with a protection password) and a security domain certificate (the PEM-formatted CA certificate that issues the TLS server certificate for the HSM cluster). To generate certificates, see [Configure bidirectional TLS authentication for a master HSM instance](/help/en/kms/cloud-hardware-security-module/use-cases/configure-an-hsm-cluster-for-a-kms-instance-of-the-hardware-key-management-type#7213055d196fg).
    
    -   **Client Protection Password**: The protection password that you set when you generate the client certificate `client.p12`. If you used the certificate generation tool (hsm\_certificate\_generate), the default password is `12345678`.
        
    -   **Client Certificate**: A PKCS12 format certificate. Click **Select File** and select the generated `client.p12` file to upload.
        
    -   **Security Domain Certificate**: A CA certificate in PEM format. Click **Select File** and select the generated `rootca.pem` file to upload.
        
    
    ## **HSM cluster outside the Chinese mainland**
    
    -   **Username**: The username of the HSM operator. This is a static field: `kmsuser`.
        
    -   **Password**: The access password for the HSM operator. This is the password you set when you created the HSM operator.
        
    -   **Security Domain Certificate**: A CA certificate in PEM format. [Log on to the CloudHSM console](https://yundun.console.alibabacloud.com/?p=hsm#/Encrypt/list/cn-hangzhou), click the ID of any HSM instance in the cluster, and find **ClusterOwnerCertificate** at the bottom of the **Instance Details** tab. This is the security domain certificate. Copy the content directly or save it as a PEM file and then upload it.
        
    
    **VPC**
    
    This defaults to the VPC ID bound to the HSM and cannot be changed.
    
    **Configure Zone and vSwitch**
    
    This setting depends on the deployment mode selected during purchase. It supports dual-zone or multi-zone configurations. Each vSwitch in each zone must have at least four available IP addresses.
    
    For multi-zone deployment, you can configure up to three zones.
    
    **Note**
    
    The choice of zone has a negligible impact on latency and performance, so you can select zones based on your preference.
    
    Enablement takes about 30 minutes with a secret quota or 10 minutes without one. Refresh the page until the status changes to **Enabled**.
    

### **Enable an external key management instance**

#### **Prerequisites**

-   You have purchased an external HSM and configured an XKI proxy. For more information, contact your HSM provider.
    
    **Note**
    
    For more information about the XKI Proxy server, see [XKI Proxy Server](https://market.aliyun.com/products/53366009/cmjj00065781.html).
    
-   KMS can connect to the XKI proxy over the Internet or via a VPC endpoint. To connect via a VPC endpoint, first create an endpoint service. For more information, see [Create and manage endpoint services](/help/en/privatelink/create-and-manage-endpoint-services#section-t53-jkq-3n7). Note the following points when you create the endpoint service:
    
    -   The endpoint service's zones must match the zones selected for the KMS instance.
        
    -   You must add your current Alibaba Cloud account to the whitelist of the endpoint service.
        
    -   The ****Automatically Accept Endpoint Connections**** setting for the endpoint service must be set to **Yes**.
        
-   If you use an Alibaba Cloud account for the **Alibaba Cloud China site (aliyun.com)** to purchase a KMS instance in a region **outside the Chinese mainland**, or if you use an Alibaba Cloud account for the **Alibaba Cloud international site (alibabacloud.com)** to purchase a KMS instance in a region **within the Chinese mainland**, you must manually activate Alibaba Cloud DNS PrivateZone. For more information, see [Enable PrivateZone](/help/en/privatezone/latest/subscribe-service).
    
    **Note**
    
    -   If you use an Alibaba Cloud account for the **Alibaba Cloud China site** to purchase a KMS instance in a region **within the Chinese mainland**, or if you use an Alibaba Cloud account for the **Alibaba Cloud international site** to purchase a KMS instance in a region **outside the Chinese mainland**, Alibaba Cloud automatically activates PrivateZone for you.
        
    -   KMS covers the domain resolution costs for the instance, so you do not incur fees from Alibaba Cloud DNS PrivateZone.
        
    

#### **Procedure**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Instances**.
    
2.  Click the **External Key Management** tab, find the target instance, and click **Enable** in the **Actions** column.
    
3.  In the **Connect to HSM** panel, configure the parameters, and then click **Connect to HSM** to specify an HSM cluster.
    
    **Parameter**
    
    **Description**
    
    **Instance Name**
    
    Enter a custom name for the KMS instance. The name can contain letters, digits, and the following special characters: `_/+=.@-`.
    
    **VPC**
    
    Select a VPC to bind to the KMS instance.
    
    **Zone Configuration**
    
    This setting depends on the deployment mode selected during purchase. It supports dual-zone or multi-zone configurations. You can configure up to three availability zones in a multi-zone deployment.
    
    -   **Zone and vSwitch**: Configure a zone and a vSwitch. Make sure that the vSwitch has at least one available IP address.
        
    -   **Other Zones**: You can have zones randomly assigned or manually specify them.
        
    
    **Note**
    
    -   Some regions provide only one zone. A KMS instance in these regions can be deployed only in a single zone.
        
    -   Dual-zone or multi-zone deployment is used to achieve high availability, disaster recovery, and load balancing for KMS. The difference is negligible in latency and performance between selecting a zone where your services are located and a zone where they are not. You can select a zone as needed.
        
    
    **External Proxy Connectivity**
    
    -   **Public Endpoint Connectivity**: The KMS instance connects to the XKI proxy over the Internet.
        
    -   **VPC Endpoint Service Connectivity** : The KMS instance connects to the XKI proxy using a VPC endpoint service.
        
    
    **Domain Name of External Proxy**
    
    This is required only when you set **External Proxy Connectivity** to **Public Endpoint Connectivity**. Enter the domain name of the XKI proxy.
    
    **Endpoint Service**
    
    This is required only when you set **External Proxy Connectivity** to **VPC Endpoint Service Connectivity** . Select an endpoint service.
    
    The zones selected for enabling the KMS instance must be the same as the zones of the endpoint service.
    
    **External Proxy Configuration**
    
    -   **Manual Configuration**: Manually configure the **External Proxy Path**, **Certificate Fingerprint**, AccessKey ID, and AccessKey secret of the XKI proxy.
        
    -   **Configuration File Upload**: Upload a file to configure the parameters.
        
    
    Enablement takes about 30 minutes with a secret quota or 10 minutes without one. Refresh the page until the status changes to **Enabled**.
    

## **FAQ**

-   [Why is a KMS instance always in the Enabling state when I enable the instance?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#section-o4s-ba5-svc)
    
-   [Instance management FAQs](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#title-ofa-i18-90d)
    
-   [Troubleshooting errors when enabling a software key management instance](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#84f0955010484)
    
-   [Troubleshooting errors when enabling a hardware key management instance](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#a42dd6a01003e)
    
-   [How do I configure an HSM cluster for a KMS instance of the hardware key management type?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#section-98n-rnp-3eo)
    
-   [Instance management FAQs](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#title-8xv-shb-poi)
    
-   [How do I release a KMS instance?](/help/en/kms/key-management-service/user-guide/faq-about-instance-management#section-6vo-z3j-5w1)
    

## References

-   [Key management quick start](/help/en/kms/key-management-service/getting-started/getting-started-with-key-management#task-2025660)
    
-   [Secret management quick start](/help/en/kms/key-management-service/getting-started/getting-started-with-secrets-manager#task-2025661)
    
-   [What is Key Management Service?](/help/en/kms/key-management-service/product-overview/what-is-key-management-service-1#concept-268596)
