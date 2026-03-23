In a multi-account architecture on Alibaba Cloud, an ACK cluster and a Container Registry (ACR) Enterprise Edition instance may belong to different Alibaba Cloud accounts. To enable the ACK cluster to pull container images from the ACR instance to deploy workloads, you must establish network connectivity and grant the required permissions. This topic describes how to use the aliyun-acr-credential-helper passwordless component to pull images across accounts.

## **Selection guide**

First, select a network connectivity method and an account authorization method that meet your business requirements. Then, select a passwordless component that supports the chosen authorization method.

> For the specific procedure, see [Configure network connectivity](#9065ff1ec4fp3), [Configure account authorization and the passwordless component](#02972360cajxc), and [Verify cross-account image pulling](#1b63aa7a76hlv).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2445091771/CAEQUBiBgMCd.ayY2RkiIDQ0ZDUxZDE0NjM0YzRmYjJiMGE3ZGUzZDQ4YmQwNjIx4799057_20241209153850.462.svg)

**Note**

In this topic, cross-account refers to different **Alibaba Cloud accounts**, not [RAM users](/help/en/ram/user-guide/overview-of-ram-users).

## **Prerequisites**

-   The required permissions are [granted](https://ram.console.alibabacloud.com/role/authorization?request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22CS%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunCSManagedAcrRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedAcrRole%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fcs.console.alibabacloud.com%2F%22%7D) to the RAM role that is used by the passwordless component.
    
-   The ACK cluster supports the passwordless component.
    
    -   aliyun-acr-credential-helper (managed)
        
        ACK managed clusters, ACK serverless clusters, and ACK Edge clusters that run Kubernetes 1.22 or later
        
    -   aliyun-acr-credential-helper (self-managed)
        
        ACK managed clusters and ACK dedicated clusters that run Kubernetes 1.20 or later
        
-   The Container Registry (ACR) instance is an Enterprise Edition instance.
    
    **Important**
    
    -   The passwordless component supports only ACR Enterprise Edition instances and ACR Personal Edition instances created on or before September 8, 2024. If you cannot use the passwordless component, see [How do I use imagePullSecrets?](/help/en/acr/user-guide/non-secret-pulling-container-image#1dcf6f7876w83).
        
    

## **Procedure**

### **Step 1: Configure network connectivity**

When you pull images across accounts, the ACK cluster and the ACR Enterprise Edition instance are in different VPCs, belong to different accounts, and may be in different regions. Before you can pull images, you must ensure network connectivity and that the related domain names can be parsed. The following methods are available:

-   **Public network connection**: Configure a public endpoint for the ACR Enterprise Edition instance and enable public network access for the ACK cluster. Images are transferred over the public network. However, transferring data over the public network is less secure and incurs fees for Elastic IP Addresses (EIPs) and data transfer.
    
-   **VPC peering connection**: Use a VPC peering connection to connect the two VPCs. This allows the ACK cluster to access the ACR Enterprise Edition instance. VPC peering connections are free of charge if the VPCs are in the same region but are charged if the VPCs are in different regions. This method requires that the two VPCs have non-overlapping CIDR blocks. This requirement may reduce the number of available CIDR blocks in the VPCs. In addition, if the CIDR blocks of the two VPCs overlap, you must modify the existing network architecture.
    
-   **Cloud Enterprise Network connection**: A CEN instance can contain one or more transit routers. The transit routers can be connected using inter-region connections to implement cross-region and cross-account VPC-to-VPC connections.
    

> For a comparison of VPC peering connections and CEN connections, see [What are the differences between CEN and VPC peering connections?](/help/en/cen/support/faq-1#9fa2e94089jlp)

**Comparison item**

**Public network connection**

**VPC peering connection**

**Cloud Enterprise Network connection**

**Network type**

Public network

Private network

Private network

**Billing**

Fees are charged based on the [billing methods of Elastic IP Address](/help/en/eip/billing-overview#section-j0c-7wh-cko).

-   No fees are charged if the VPCs of the ACK cluster and the ACR Enterprise Edition instance are in the same region.
    
-   If the VPCs are in different regions, [Cloud Data Transfer (CDT)](/help/en/cdt/product-overview/what-is-cdt) charges data transfer fees for outbound traffic.
    

Fees are charged based on the [billing rules](/help/en/cen/product-overview/billing-rules) of Cloud Enterprise Network.

**Key features**

You do not need to modify the existing network architecture. For security, you must consider inbound and outbound rules, access control, and other factors.

-   Images are transferred over a private network, which provides high security. No fees are charged if the VPCs are in the same region.
    
-   This feature requires the two VPCs to share CIDR blocks, which reduces the number of available CIDR blocks in the VPCs. If many used CIDR blocks in the two VPCs overlap, you need to modify the existing network architecture.
    

-   Images are transferred over a private network, which provides high security.
    
-   CEN is designed for enterprise production environments that have high security requirements.
    

**Configuration procedure**

1.  [Configure a public endpoint for the ACR instance](/help/en/acr/user-guide/configure-access-over-the-internet)
    
    > By configuring an access control policy for the public network, you can remotely and securely manage and access the ACR Enterprise Edition instance.
    
2.  [Enable public network access for the ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-an-existing-ack-cluster-to-access-the-internet)
    
    > Configure the ACK cluster to access external public resources to pull images from the ACR Enterprise Edition instance.
    

1.  [Attach a VPC to an ACR instance for internal same-region endpoint resolution](/help/en/acr/user-guide/configure-access-over-vpcs#context-vfd-5l0-tf6)
    
    > After you connect the ACR Enterprise Edition instance to the VPC, you can access the Enterprise Edition instance from the VPC using an internal domain name. After the configuration is complete, obtain the VPC ID and the internal IP address of the ACR Enterprise Edition instance.
    
2.  [Obtain the domain names and IP addresses related to the ACR instance](/help/en/acr/use-cases/access-enterprise-edition-instances-across-regions-or-from-idc#1d057a4680ogk)
    
    > Obtain the domain name and IP address of the authentication service and the domain name and IP address of the associated OSS Bucket that are used to access the ACR Enterprise Edition instance.
    
3.  [Create a VPC peering connection and configure a route table](/help/en/vpc/vpc-peer-to-peer-connection)
    
    > Add a route that points to the peer VPC at each end of the VPC peering connection to enable private connectivity between the VPC of the ACK cluster and the VPC of the ACR Enterprise Edition instance. At the VPC peering connection end of the ACK cluster, you also need to configure routes for the IP address of the authentication service and the IP address of the associated OSS Bucket.
    
4.  Resolve the domain name of the ACR instance for the ACK cluster
    
    > Use methods such as [adding an internal DNS resolution](/help/en/dns/introduction-to-intranet-analysis) or using a [node pool custom data script](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#8613b8ae0bsra) to modify the `/etc/hosts` file in batches. This resolves the domain name of an ACR instance to its internal IP address for the ACK cluster, which allows traffic to be forwarded through a route entry of the VPC peering connection to the VPC to which the ACR instance is attached.
    

1.  [Configure VPC internal DNS for an ACR instance](/help/en/acr/user-guide/configure-access-over-vpcs#context-vfd-5l0-tf6)
    
    > After you connect the ACR Enterprise Edition instance to the VPC, you can access the Enterprise Edition instance from the VPC using an internal domain name. After the configuration is complete, obtain the VPC ID and the internal IP address of the ACR Enterprise Edition instance.
    
2.  [Obtain the domain names and IP addresses related to the ACR instance](/help/en/acr/use-cases/access-enterprise-edition-instances-across-regions-or-from-idc#1d057a4680ogk)
    
    > Obtain the domain name and IP address of the authentication service and the domain name and IP address of the associated OSS Bucket that are used to access the ACR Enterprise Edition instance.
    
3.  [Configure a cross-account VPC-to-VPC connection using CEN](/help/en/cen/getting-started/use-enterprise-edition-transit-routers-to-connect-vpcs-across-regions-and-accounts)
    
    > Connect the VPC of the ACR Enterprise Edition instance to the transit router in the region of that account. Connect the VPC of the ACK cluster to the transit router in the region of that account. Then, use an inter-region connection to connect the transit routers in the two regions.
    
4.  [Configure the route tables of the VPC and the TransitRouter](/help/en/acr/use-cases/access-enterprise-edition-instances-across-regions-or-from-idc#585a8815f8rhz)
    
    > For the VPC and transit router of the ACK cluster, you also need to configure routes for the IP address of the authentication service and the IP address of the associated OSS Bucket.
    
5.  Resolve the domain name of the ACR instance for the ACK cluster
    
    > Use methods such as [adding an internal DNS resolution record](/help/en/dns/introduction-to-intranet-analysis) or using a [custom data script for a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#8613b8ae0bsra) to modify the `/etc/hosts` file in batches. This resolves the domain name of the ACR instance to the internal IP address of the ACR instance for the ACK cluster. This way, traffic is forwarded through CEN routes to the VPC that the ACR instance is attached to.
    

### **Step 2: Configure account authorization and the passwordless component**

The following three authorization methods are available for pulling images across accounts without credentials. Select the configuration that is most suitable for your scenario.

**Comparison item**

**Use RRSA**

**Use Worker RAM role assumption**

**Use the AccessKey pair of a RAM user**

Cluster type

Supported in ACK managed cluster Basic Edition, ACK managed cluster Pro Edition, ACK Edge clusters, and ACK serverless cluster Pro Edition of v1.22 or later.

Supported in ACK managed cluster Basic Edition, ACK managed cluster Pro Edition, and ACK dedicated clusters of v1.20 or later.

Supported in ACK managed cluster Basic Edition, ACK managed cluster Pro Edition, and ACK dedicated clusters of v1.20 or later.

Supported components

-   aliyun-acr-credential-helper managed component
    
-   aliyun-acr-credential-helper component
    
    > The component must be v23.02.06.1-74e2172-aliyun or later.
    

For more information about the differences between the components, see [Passwordless Component Comparison](/help/en/acr/user-guide/non-secret-pulling-container-image#47a2eda8724dn).

aliyun-acr-credential-helper component

aliyun-acr-credential-helper component

Permission granularity

Pod-level (fine-grained)

Cluster-level (medium-grained)

Account-level (coarse-grained)

Security

High. This method provides fine-grained permission control and isolation. It uses STS temporary credentials without hard-coded AccessKey pairs.

Medium. All pods share permissions, which may cause excessive permission risks.

Low. The risk of AccessKey pair leakage is high.

Scenarios

This method is suitable for security-sensitive services and production environments that require strict permission control.

This method is suitable for scenarios that require unified permissions, and development and staging environments that require a certain level of permission control.

This method is suitable for quick deployments or demo environments.

## **Use RRSA**

In the ACK cluster of **Account A**, configure a specific ServiceAccount to assume a RAM role of **Account B** that has the permissions to pull images without credentials. This allows the ACK cluster to access and pull private images from **Account B**.

**Note**

To enable the RRSA feature of the passwordless component, first enable RRSA in the cluster, and then configure RRSA for the passwordless component. If you perform these steps in the wrong order, delete the pod of the passwordless plug-in to activate the RRSA feature.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2445091771/CAEQUBiBgMDSqsyY2RkiIDA4MTI5NDg0NTRhZDQ1NmVhYTZlZDQyMzk1YmViZjk45185291_20250527144618.104.svg)

1.  In **Account A**, enable the RRSA feature for the ACK cluster and create a RAM role that has the permission to assume roles.
    
    1.  Enable the RRSA feature for the ACK cluster.
        
        1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
            
        2.  On the **Clusters** page, find the target cluster and click its name. In the navigation pane on the left, click **Cluster Information**.
            
        3.  In the **Security and Auditing** section of the **Basic Information** tab, click **Enable** next to **RRSA OIDC**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7897731371/p863552.png)
            
        4.  In the **Enable RRSA** dialog box, click **Confirm**.
            
            In the **Basic Information** section, if the cluster status changes from **Updating** to **Running**, the RRSA feature is enabled for the cluster.
            
        5.  After the RRSA feature is enabled for the cluster, navigate to the **Security and Auditing** section under the **Basic Information** tab. If you hover your mouse over the **Enabled** label next to **RRSA OIDC**, the URL and Alibaba Cloud Resource Name (ARN) of the OIDC provider are displayed. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2979105371/p888519.png)
            
    2.  Use the script editor to edit the trust policy and [create a RAM role for an OIDC IdP](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-idp#title-i4d-8c9-0yp).
        
        -   Replace `<oidc_issuer_url>` in the example with the OIDC provider URL of the current cluster that you obtained in the preceding step.
            
        -   Replace `<oidc_provider_arn>` in the example with the OIDC provider ARN of the current cluster that you obtained in the preceding step.
            
        
        ```
        {
          "Statement": [
            {
              "Action": "sts:AssumeRole",
              "Condition": {
                "StringEquals": {
                  "oidc:aud": "sts.aliyuncs.com",
                  "oidc:iss": "<oidc_issuer_url>",
                  "oidc:sub": "system:serviceaccount:kube-system:aliyun-acr-credential-helper"
                }
              },
              "Effect": "Allow",
              "Principal": {
                "Federated": [
                  "<oidc_provider_arn>"
                ]
              }
            }
          ],
          "Version": "1"
        }
        ```
        
    3.  Attach the `AliyunSTSAssumeRoleAccess` policy to the role to grant it the permission to assume roles, and then record its ARN. For more information, see [Manage permissions for a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
        
        1.  On the role details page, click the **Permissions** tab, and then click **Grant Permission**.
            
        2.  In the **Grant Permission** panel, in the **Access Policy** section, select the **AliyunSTSAssumeRoleAccess** access policy, and then click **OK**.
            
        3.  On the role details page, in the **Basic Information** section, view and record the ARN of the RAM role. For more information, see [How do I view the ARN of a RAM role?](/help/en/ram/support/faq-about-ram-roles-and-sts-tokens#section-qbw-mhy-173)
            
2.  In **Account B**, create a RAM role, grant it the permissions to pull private images, and allow the RAM role of **Account A** to assume this role.
    
    1.  Use the script editor to edit the trust policy and [create a RAM role for a trusted Alibaba Cloud account](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-account) to allow **Account A** to assume the role.
        
        ```
        {
          "Statement": [
            {
              "Action": "sts:AssumeRole",
              "Effect": "Allow",
              "Principal": {
                "RAM": [
                  "<ARN of the role created in Account A>"
                ]
              }
            }
          ],
          "Version": "1"
        }
        ```
        
    2.  [Create a custom policy](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m) with the following content and [grant the policy to the RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role). This grants the role the permissions to obtain instance information and pull images.
        
        ```
        {
            "Version": "1",
            "Statement": [
                {
                    "Action": [
                        "cr:GetAuthorizationToken",
                        "cr:ListInstanceEndpoint",
                        "cr:PullRepository"
                    ],
                    "Resource": "*",
                    "Effect": "Allow"
                }
            ]
        }
        ```
        
    3.  [Set the maximum session duration for the RAM role](/help/en/ram/user-guide/specify-the-maximum-session-duration-for-a-ram-role) to a value between 3,600 seconds and 43,200 seconds. The default value is 3,600 seconds.
        
        > Ensure that this value is the same as the value of the `expireDuration` parameter that you configure later. The value of `expireDuration` must not exceed the maximum session duration.
        
    4.  On the role details page, record the ARN of the RAM role from the **Basic Information** section.
        
3.  In **Account A**, install the passwordless component for the ACK cluster and modify its configuration items.
    
    > For more information about the differences between the components, see [Comparison of passwordless components](/help/en/acr/user-guide/non-secret-pulling-container-image#47a2eda8724dn).
    
    ## aliyun-acr-credential-helper managed **component**
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster you want and click its name. In the left navigation pane, click **Add-ons**.
        
    3.  On the **Add-ons** page, select the **Security** tab. Find the **aliyun-acr-credential-helper (Managed)** card and click **Install**.
        
    4.  In the **Aliyun-acr-credential-helper Parameter Settings** dialog box, select the **Is RRSA Enabled** checkbox and click **Add**. Enter the following parameters and click **OK**.
        
        ![791184c653f445f62c3387d88ad8bdcf](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3001464571/p966504.png)
        
        Configuration of the associated ACR Enterprise Edition instance:
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        instanceId
        
        The ID of the ACR instance. To specify multiple IDs, separate them with commas (,).
        
        cri-XXXXX
        
        regionId
        
        The region ID of the ACR instance.
        
        cn-hangzhou
        
        domains
        
        The domain names used by the ACR instance. Enter all endpoints (public and VPC) of the ACR instance. To specify individual domain names, separate them with commas (,).
        
        XXXXX-registry.cn-hangzhou.cr.aliyuncs.com
        
        assumeRoleARN
        
        The ARN of the RAM role of the ACR instance owner. Enter the ARN of the RAM role that you created in **Account B**.
        
        acs:ram::100XXXXXXXX9630:role/XXXX
        
        expireDuration
        
        The validity period of the temporary credentials in a cross-account scenario. Enter the maximum session duration of the RAM role that you created in **Account B**.
        
        3600
        
        rrsaRoleARN
        
        The ARN of the RAM role of the ACK cluster owner. Enter the ARN of the RAM role that you created in **Account A**.
        
        acs:ram::128XXXXXXXXXX09011:role/XXXX
        
        rrsaOIDCProviderRoleARN
        
        The ARN of the OIDC IdP of the ACK cluster. Enter the [ARN of the RRSA OIDC IdP](#c9f49358dezhx) of the ACK cluster in **Account A**.
        
        acs:ram::128XXXXXXXXXX09011:oidc-provider/ack-rrsa-c8864XXXXXXXXXXXXXXXXXX99356a636
        
        > For more information about other parameters, see [Component configuration](/help/en/acr/user-guide/non-secret-pulling-container-image#c2f3f39f5bkhr).
        
    
    ## aliyun-acr-credential-helper component
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster you want and click its name. In the left navigation pane, click **Add-ons**.
        
    3.  On the **Applications** page, click the **Security** tab. Locate the **aliyun-acr-credential-helper** component and click **Install**. In the dialog box that appears, set the **tokenMode** option to **auto** and click **OK**.
        
        ![04479cf3d9857845bf530ea2f0850a60](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3001464571/p966505.png)
        
    4.  Modify the ConfigMap of the passwordless component.
        
        1.  In the navigation pane on the left, choose **Configuration** > **ConfigMaps**.
            
        2.  At the top of the **ConfigMaps** page, select **kube-system** from the **Namespace** drop-down list. Then, click **Edit YAML** in the Actions column for **acr-configuration** and modify the configuration as shown in the following example.
            
            ```
            data:
              service-account: "default"
              watch-namespace: "all"
              expiring-threshold: "15m"
              notify-email: "c*@example.com"
              acr-registry-info: |
                - instanceId: "cri-xxx"                                   # The ID of the ACR instance.
                  regionId: "cn-hangzhou"                                 # The region ID of the ACR instance.
                  domains: "xxxxx-registry.cn-hangzhou.cr.aliyuncs.com"   # The endpoint of the ACR instance.
                  rrsaRoleARN: "<ARN of the role created in Account A>"
                  rrsaOIDCProviderRoleARN: "<The ARN of the OIDC IdP from the basic information page of the ACK cluster in the console for Account A.>"
                  assumeRoleARN: "<ARN of the role created in Account B>"
                  expireDuration: 3600                                    # The maximum session duration of the RAM role in Account B. The default value is 3600.             
              rrsa: |
                enable: true                                              # Enable the RRSA feature for the passwordless component. 
            ```
            
    

## Use Worker RAM role assumption

In the ACK cluster of **Account A**, configure the default Worker RAM role of the cluster to assume a RAM role of **Account B** that has the permissions to pull images without credentials. This allows the ACK cluster to access and pull private images from **Account B**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2445091771/CAEQUBiBgMCG8M6Y2RkiIGNkZjdmNGU2NWY5YjQwOTliNjJmZDg0Y2FiNmZlNGM15185291_20250527144618.104.svg)

1.  In **Account A**, view the Worker RAM role of the cluster and grant it the permission to assume roles.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the target cluster and click its name. In the navigation pane on the left, click **Cluster Information**.
        
    3.  On the **Cluster Information** page, click the **Basic Information** tab. In the **Cluster Resources** area, click the link to the right of **Worker RAM Role**.
        
    4.  Attach the `AliyunSTSAssumeRoleAccess` policy to the role to grant it the permission to assume roles, and then record its ARN. For more information, see [Manage permissions for a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
        
        1.  On the role details page, click the **Permissions** tab, and then click **Grant Permission**.
            
        2.  In the **Grant Permission** panel, in the **Access Policy** section, select the **AliyunSTSAssumeRoleAccess** access policy, and then click **OK**.
            
        3.  On the role details page, in the **Basic Information** section, view and record the ARN of the RAM role. For more information, see [How do I view the ARN of a RAM role?](/help/en/ram/support/faq-about-ram-roles-and-sts-tokens#section-qbw-mhy-173)
            
2.  In **Account B**, create a RAM role, grant it the permissions to pull private images, and allow the Worker RAM role of the ACK cluster in **Account A** to assume this role.
    
    1.  [Create a RAM role for a trusted Alibaba Cloud account](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-account#task-xvr-ftf-xdb).
        
    2.  [Create a custom policy](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m) with the following content, and [grant the policy to the RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role). This grants the role the permissions to obtain instance information and pull images.
        
        ```
        {
            "Version": "1",
            "Statement": [
                {
                    "Action": [
                        "cr:GetAuthorizationToken",
                        "cr:ListInstanceEndpoint",
                        "cr:PullRepository"
                    ],
                    "Resource": "*",
                    "Effect": "Allow"
                }
            ]
        }
        ```
        
    3.  On the basic information page of the RAM role, click the **Trust Policy** tab and click **Edit Trust Policy**. Update the policy with the following content to allow the Worker RAM role of the ACK cluster in **Account A** to assume the RAM role of **Account B**.
        
        ```
        {
          "Statement": [
            {
              "Action": "sts:AssumeRole",
              "Effect": "Allow",
              "Principal": {
                "RAM": [
                  "<ARN of the role created in Account A>"
                ]
              }
            }
          ],
          "Version": "1"
        }
        ```
        
    4.  On the role details page, in the **Basic Information** section, view and record the ARN of the RAM role. For more information, see [How do I view the ARN of a RAM role?](/help/en/ram/support/faq-about-ram-roles-and-sts-tokens#section-qbw-mhy-173)
        
3.  In **Account A**, install the passwordless component for the ACK cluster and modify its configuration items.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster you want and click its name. In the left navigation pane, click **Add-ons**.
        
    3.  On the **Applications** page, click the **Security** tab. Find the **aliyun-acr-credential-helper** component and click **Install**. In the dialog box that appears, set **tokenMode** to **workerRole** and click **OK**.
        
        ![100f8cde3395436575996fbbd290dc56](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3001464571/p966508.png)
        
    4.  Modify the ConfigMap of the passwordless component.
        
        1.  In the navigation pane on the left, choose **Configuration** > **ConfigMaps**.
            
        2.  At the top of the **ConfigMaps** page, select **kube-system** from the **Namespace** drop-down list. Then, click **Edit YAML** in the Actions column for **acr-configuration** and modify the configuration as shown in the following example.
            
            ```
            data:
                service-account: "default"
                watch-namespace: "all"
                expiring-threshold: "15m"
                notify-email: "c*@example.com"
                acr-registry-info: |
                  - instanceId: "cri-xxx"                                    # The ID of the ACR Enterprise Edition instance.
                    regionId: "cn-hangzhou"                                  # The region ID of the ACR Enterprise Edition instance.
                    domains: "xxxxx-registry.cn-hangzhou.cr.aliyuncs.com"    # The endpoint of the ACR Enterprise Edition instance.
                    assumeRoleARN: "<ARN of the role created in Account B>"
                    expireDuration: 3600                                     # The maximum session duration of the RAM role in Account B. The default value is 3600.
            ```
            

## **Use the AccessKey pair of a RAM user**

In the ACK cluster of **Account A**, the passwordless component uses the AccessKey ID and AccessKey secret of a RAM user from **Account B** to pull private images from **Account B**. Although this method is simple to configure, the AccessKey ID and AccessKey secret are stored in plaintext, which poses a security risk.

1.  In **Account B**, create a RAM user and grant the RAM user the **cr.\*** permissions.
    
    1.  [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user).
        
    2.  [Create a custom policy](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m) with the following content and [grant the policy to the RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#section-sjg-7hb-xph). This grants the RAM user the permissions to obtain instance information and pull images.
        
        ```
        {
            "Version": "1",
            "Statement": [
                {
                    "Action": [
                        "cr:GetAuthorizationToken",
                        "cr:ListInstanceEndpoint",
                        "cr:PullRepository"
                    ],
                    "Resource": "*",
                    "Effect": "Allow"
                }
            ]
        }
        ```
        
    3.  [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair) and record the **AccessKey ID** and **AccessKey secret**.
        

In **Account A**, install the passwordless component for the ACK cluster and modify its configuration items.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left navigation pane, click **Cluster Information**.
    
3.  On the [ACK Clusters](https://cs.console.alibabacloud.com) page, click the name of the target cluster. In the left navigation pane, click **Add-ons**.
    
4.  On the **Applications** page, click the **Security** tab. Locate the **aliyun-acr-credential-helper** component and click **Install**. In the dialog box that appears, set the **tokenMode** option to **auto** and click **OK**.
    
    ![04479cf3d9857845bf530ea2f0850a60](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3001464571/p966505.png)
    
5.  Modify the ConfigMap of the passwordless component.
    
    1.  In the navigation pane on the left, choose **Configuration** > **ConfigMaps**.
        
    2.  At the top of the **ConfigMaps** page, select **kube-system** from the **Namespace** drop-down list. Then, click **Edit YAML** in the Actions column for **acr-configuration** and modify the configuration as shown in the following example.
        
    
    ```
    data:
        service-account: "default"
        watch-namespace: "all"
        expiring-threshold: "15m"
        notify-email: "c*@example.com"
        acr-registry-info: |
          - instanceId: ""                        # The ID of the ACR Enterprise Edition instance.             
            regionId: "cn-hangzhou"               # The region ID of the ACR Enterprise Edition instance.    
            customAccessKey: "xxxxx"              # The AccessKey ID of the RAM user in Account B.
            customAccessKeySecret: "xxxxxx"       # The AccessKey secret of the RAM user in Account B. 
    ```
    

### **Step 3: Verify cross-account image pulling**

**Note**

The verification procedure is for demonstration purposes only. For more information, see [Build images](/help/en/acr/user-guide/image-build/) and [Create a workload](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploying-workloads/).

1.  In the ACR Enterprise instance of **Account B**, obtain the required **Public Endpoint** or **VPC** address of the container image.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3001464571/p966536.png)
    
2.  In the ACK cluster of **Account A**, select **Workloads** > **Deployments** and create a workload from the container image.
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-deployment-basic
      labels:
        app: nginx
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: ******.cn-hangzhou.cr.aliyuncs.com/instance/instancetest:v1 # Specify the address of the ACR image in Account B. 
            ports:
            - containerPort: 80
    ```
    
3.  If the message `Successfully pulled image "XXX" in XXXs (XXXs including waiting). Image size: XXX bytes.` appears in the pod events for the workload, the image was successfully pulled from a different account using the passwordless component.
    
    ![ecb56ef14d98a537ebe64f6bd9fd883d](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3001464571/p966525.png)
    

## **FAQ**

### **How do I resolve IP address conflicts in the 100.0.0.0/8 CIDR block?**

When you configure routing rules, the IP addresses resolved from the authentication domain name and the OSS domain name are in the 100.0.0.0/8 CIDR block. If your internal network also uses IP addresses from this CIDR block, conflicts may occur when you access the ACR Enterprise Edition instance. To avoid these conflicts, follow these steps.

#### **Authentication domain name CIDR block conflict**

You can enable the instance to take over the authentication domain name. This way, you only need to access the instance domain name. This resolves the conflict with the authentication domain name CIDR block.

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
    
4.  In the navigation pane of the instance management page, choose **Repository Management** > **Domain Names**. On the **Domain Names** page, turn on the **Instance Takeover of Authentication Domain Name** switch.
    
    **Important**
    
    To use the feature that allows an instance to take over the authentication domain name, you must [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to add the Enterprise Edition instance to the whitelist.
    
5.  In the **Confirm Enable Instance Takeover Authentication Domain Name** prompt, click **OK**.
    

#### **OSS domain name CIDR block conflict**

You can [access OSS resources over a private network using PrivateLink](/help/en/oss/user-guide/access-oss-via-privatelink-network#5015f68458wcb). Then, point the CNAME record of the original target OSS domain name to the PrivateLink endpoint.
