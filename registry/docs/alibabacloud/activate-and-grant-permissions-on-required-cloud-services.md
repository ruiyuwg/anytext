Grant RAM users access to PAI resources and authorize PAI to access dependent cloud services like OSS, MaxCompute, and VPC.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9888113771/CAEQSBiBgIDKz9WvwRkiIGU1YTk2ZGMxMWMxMDQzNjI5NTg5Mjk1NzU3ZTVlNjQ54911584_20250411142407.922.svg)

## **RAM user authorization**

Alibaba Cloud accounts have full access by default. [RAM users](/help/en/ram/user-guide/overview-of-ram-users) must be authorized before accessing resources through console or APIs. Authorize RAM users in PAI using these methods:

-   [Manage RAM user permissions through workspaces](/help/en/pai/manage-permissions-through-workspaces).
    
-   Add [system policies](/help/en/pai/pai-system-policy#2ded5f101f3df): quickly grant permissions to access PAI and dependent services.
    
-   Add custom policies for fine-grained control.
    

### **Activate and purchase PAI resources**

To activate PAI and purchase resources, [add the AliyunPAIFullAccess policy](#1532fe2fe2cv0).

**Note**

The `AliyunPAIFullAccess` policy grants extensive permissions. Use the Alibaba Cloud account for these operations instead.

### **Use PAI sub-services**

PAI provides [workspace-based permission management](/help/en/pai/manage-permissions-through-workspaces). Add RAM users as workspace members and assign roles like **Resource Administrator (Alibaba Cloud Account/through RAM Authorization)**, **Workspace Administrator/Owner**, **Algorithm Developer**, **Algorithm O&M Engineer**, **Labeling Administrator**, or **Visitor**. See [Appendix: Role and permission list](/help/en/pai/appendix-list-of-roles-and-permissions#b5d97b346ago6) for role permissions.

-   For **iTAG**, see [iTAG personnel assignment](/help/en/pai/user-guide/grant-the-permissions-that-are-required-to-use-itag#18d508a00cv0f) for further permission settings.
    
-   **EAS** provides system policies to authorize RAM users. For example:
    
    -   EAS management permissions: `AliyunPAIEASFullAccess`
        
    -   EAS read-only permissions: `AliyunPAIEASReadOnlyAccess`
        
-   Most **AI Acceleration** features only require operation permissions of the corresponding sub-services (model development, training, and inference). Dataset acceleration requires `AliyunPAIFullAccess` and `AliyunDatasetAccFullAccess` permissions.
    

### **Activate and use other cloud services**

PAI depends on these cloud services:

**Dependent cloud services by PAI sub-service**

**PAI sub-service**

**Dependent cloud service**

iTAG

OSS

Designer

OSS, MaxCompute, Flink

DSW

OSS, NAS, VPC

DLC

OSS, NAS, VPC

AutoML

OSS, MaxCompute

EAS

OSS, API Gateway, SLS, VPC, Cloud Monitor

LangStudio

OSS, SLS, VPC, OpenTelemetry

AI asset management

ACR

**Note**

Use the Alibaba Cloud account to activate cloud services (no authorization required). Control RAM account access through RAM policies (see **RAM account usage authorization** in the table below).

Workspace members have partial permissions for dependent cloud services based on their assigned roles. If permission issues occur when activating or using cloud services, refer to this table for authorization operations.

Example: To use a RAM user to activate OSS, add the system policy AliyunOSSFullAccess. For permission issues when using OSS, refer to [OSS RAM Policy](/help/en/oss/ram-policy-overview/) for RAM authorization.

**Cloud service**

**Policy required for activation**

**RAM account usage authorization**

**Operation guides**

OSS

AliyunOSSFullAccess

[OSS RAM Policy](/help/en/oss/ram-policy-overview/)

-   Activate: [Activate OSS service](/help/en/oss/getting-started/activate-oss)
    
-   Common operation: [Create a bucket in the console](/help/en/oss/getting-started/create-buckets-6)
    

MaxCompute

AliyunBSSOrderAccess, AliyunDataWorksFullAccess

Add the **MaxCompute Developer** role for RAM accounts in the workspace. For more information, see [Create and manage workspaces](/help/en/pai/user-guide/create-and-manage-workspaces#section-ajl-hie-emf).

-   Activate: [Activate MaxCompute](/help/en/maxcompute/getting-started/activate-maxcompute-and-dataworks)
    
-   Common operation: [Create a MaxCompute Project](/help/en/maxcompute/getting-started/create-a-maxcompute-project), [Associate MaxCompute as a workspace computing resource](/help/en/pai/manage-workspaces#section-ip5-rl3-gu1)
    

Flink

AliyunStreamFullAccess

[Management Console authorization](/help/en/flink/realtime-flink/user-guide/ram-based-authorization)

Activate: [Activate real-time computing Flink version](/help/en/flink/realtime-flink/getting-started/activate-fully-managed-flink)

NAS

AliyunNASFullAccess

[Control NAS access permissions using RAM policies](/help/en/nas/user-guide/perform-access-control-based-on-ram-policies)

-   Authorize RAM users: [Control NAS access permissions using RAM policies](/help/en/nas/user-guide/perform-access-control-based-on-ram-policies)
    
-   Common operation: [Create a NAS file system](/help/en/nas/user-guide/create-a-file-system)
    

API Gateway

AliyunApiGatewayFullAccess

[Use RAM to manage API](/help/en/api-gateway/traditional-api-gateway/user-guide/use-ram-to-manage-the-permissions-on-api-resources)

SLS

AliyunLogFullAccess

[SLS authentication rules](/help/en/sls/developer-reference/ram-authentication-rules-1)

-   Activate: [Quick Start: Collect and analyze ECS text logs using Logtail](/help/en/sls/getting-started#section-j4p-xt3-arc)
    
-   Common operation: [Manage Projects](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb), [Create a Logstore](/help/en/sls/manage-a-logstore#section-v52-2jx-ndb)
    

VPC

AliyunVPCFullAccess

[VPC authorization information](/help/en/vpc/developer-reference/api-vpc-2016-04-28-ram)

-   Common operations: [Create and manage virtual private clouds](/help/en/vpc/user-guide/create-and-manage-a-vpc), [Create and manage vSwitches](/help/en/vpc/user-guide/create-and-manage-vswitch)
    

Cloud Monitor

AliyunCloudMonitorFullAccess

[Cloud Monitor authorization information](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-ram)

Common operations: [Step 1: Configure alert contacts](/help/en/pai/user-guide/enable-service-monitoring-and-alerting#section-byc-uh8-21s), [Step 2: Configure alert rules](/help/en/pai/user-guide/enable-service-monitoring-and-alerting#section-bkc-ryd-kfp)

OpenTelemetry

AliyunARMSFullAccess

[Implement permission separation using RAM users](/help/en/opentelemetry/use-ram-users-to-manage-permissions)

Activate: [Quick Start](/help/en/opentelemetry/quick-start)

ACR

AliyunContainerRegistryFullAccess

[ACR RAM authorization information](/help/en/acr/user-guide/ram-authorization-information)

Common operation: [Build images using Enterprise instances](/help/en/acr/user-guide/build-images-on-container-registry-enterprise-edition-instances)

## **PAI service authorization**

Authorization is usually completed during PAI activation. If authorization steps are missed, authorization prompts appear in subsequent operation interfaces. Alternatively, check authorization status as follows (using Designer accessing OSS as an example):

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/console).
    
2.  In the left navigation pane, click **Activation & Authorization** > **Dependent Services**, and find **OSS** under Designer.
    
3.  Check authorization status in the **Actions** column.
    
    -   If not authorized, click **Authorize** in the **Actions** column and follow the instructions.
        
    -   If authorized, click **View Authorization** in the **Actions** column to view details.
        
    

PAI sub-services access cloud services through regular service roles and service-linked roles. The "Dependent Services" page does not cover all scenarios. Refer to sub-service documentation as needed:

-   Workspace: [Appendix: PAI workspace service-linked roles](/help/en/pai/user-guide/service-linked-role-aliyunserviceroleforpaiworkspace)
    
-   EAS: [EAS general service-linked role](/help/en/pai/user-guide/service-linked-role-for-eas), [EAS self-maintained resource service-linked role](/help/en/pai/user-guide/service-linked-role-of-eas-self-managed-resource-groups)
    
-   LangStudio: [PAI service account authorization](/help/en/pai/user-guide/cloud-product-dependency-and-authorization-langstudio#bf69f2d755nyc)
    
-   DLC: [PAI service account authorization](/help/en/pai/user-guide/grant-the-permissions-that-are-required-to-use-dlc#9ec4d7000cpe5)
    
-   DSW: [PAI service account authorization](/help/en/pai/user-guide/grant-the-permissions-that-are-required-to-use-dsw#8cb7e5a00cp82)
    
-   **DatasetAccelerator:** [Grant dataset accelerator management permissions to RAM users](/help/en/pai/user-guide/grant-the-permissions-that-are-required-to-use-dataset-accelerator#d4362f110cfz1)
    

## **Appendix**

### **Add a policy to a RAM user**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  On the **Users** page, find the required RAM user, and click **Add Permissions** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6555724171/p794639.png)
    
    You can also select multiple RAM users and click **Add Permissions** in the lower part of the page to grant permissions to the RAM users at a time.
    
4.  In the **Grant Permission** panel, add permissions for the RAM user:
    
    -   **Resource Scope**: Select **Account**.
        
    -   **Policy**: Select the **AliyunPAIFullAccess** policy.
        
        **Important**
        
        A RAM user with this policy can purchase, create, and delete all resources and has administrator permissions on all workspaces. Use with caution.
        
        Refer to [Create a custom policy](#f5ba67be1cp62) to set minimum required policies for RAM users.
        
5.  Click **Grant permissions**.
    
6.  Click **Close**.
    

### **Create a custom policy**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left navigation pane, choose **Permissions** > **Policies**.
    
3.  Click **Create Policy**, choose the **JSON** tab, and configure this policy (grants RAM users permission to view all EAS model services).
    
    **Important**
    
    Follow the principle of least privilege when specifying policy documents.
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "eas:ListServices"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
    

For more information, see [Create a custom policy in script editor mode](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m).
