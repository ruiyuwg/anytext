When calling Alibaba Cloud APIs, authentication of RAM users is performed by an AccessKey, which includes an AccessKey ID and an AccessKey Secret. To prevent the security risk of hardcoding the AccessKey, you can manage AccessKeys using Key Management Service (KMS) secrets, also known as RAM secrets. This topic describes how to manage and use RAM secrets.

## Feature description

If you use KMS to manage a RAM secret, you do not need to configure an AccessKey pair in your application. You need to only configure a secret name, which can be used to retrieve a valid AccessKey pair for calling operations. You can also rotate RAM secrets to reduce the risk of AccessKey pair leaks.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7929701071/p725030.png)

### **Limits**

Only the AccessKey pair of a RAM user can be managed. The AccessKey pair of an Alibaba Cloud account cannot be managed.

### **RAM secret rotation**

During rotation, RAM creates an AccessKey pair and then deletes the old AccessKey pair. KMS writes the new AccessKey as a secret value and deletes the secret value that is associated with the old AccessKey pair. Secret rotation supports two methods. The following table describes the methods.

**Rotation method**

**Rotation period**

**Scenario**

Automatic rotation

Approximately 2 days

A RAM secret is integrated into an application. The application periodically reads the RAM secret.

To minimize the risk of AccessKey pair leaks, we recommend that you specify an automatic rotation period of no more than three months.

Immediate rotation

You can specify a rotation period that ranges from 10 minutes to 2 days.

If a RAM secret is leaked, we recommend that you specify a rotation period of 30 minutes. In other scenarios, a rotation period of 2 days is optimal.

-   If a RAM secret is leaked, you can immediately rotate the secret as an emergency response.
    
-   When an application retrieves a RAM secret, you can manually trigger rotation.
    

**Important**

-   If a RAM secret is being rotated, do not delete the RAM user that is associated with the secret. This helps prevent secret rotation failures.
    
-   If a RAM secret is being rotated, you cannot configure an automatic rotation policy or perform immediate rotation.
    

## Prerequisites

-   [A KMS instance is purchased and enabled](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance#task-2289651).
    
-   A symmetric key that is used to encrypt secrets is created in the KMS instance. For more information, see [Create keys](/help/en/kms/key-management-service/user-guide/manage-keys-2#37081e7032asm).
    
-   If you use a RAM user or a RAM role to manage RAM secrets, the **AliyunKMSSecretAdminAccess** and **AliyunRAMReadOnlyAccess** system policies are attached to the RAM user or the RAM role. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800) or [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
    

**Note**

If the Alibaba Cloud account associated with your current RAM account already has the **AliyunKMSManageRAMCredentialsRole** or **AliyunKMSManagedRAMCrendentialsRole** service role, skip [Step 1: Grant KMS the permissions to manage the AccessKey pair of a RAM user](#title-ktd-hbt-x2g). KMS has the permissions to manage the AccessKey pair of a RAM user by default.

## Step 1: Grant KMS the permissions to manage the AccessKey pair of a RAM user

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Secrets**.
    
2.  Click the **Customer-managed Secrets** tab, locate the **RAM Secrets** type, select the required instance ID from the **Instance ID** drop-down list, and then click **Create Secret**.
    
3.  On the **Create RAM Secrets** panel, click **Authorize KMS to access AccessKey pairs.**
    
4.  If you use a RAM administrator user without **AliyunKMSManageRAMCredentialsRole** or **AliyunKMSManagedRAMCrendentialsRole**, click **Agree to Authorization** on the **Cloud Resource Access Authorization** page. Otherwise, send the **Cloud Resource Access Authorization** link to the RAM administrator or the Alibaba Cloud account to do the authorization.
    
    When authorization is complete, the system will automatically create the service-linked role **AliyunKMSManageRAMCredentialsRole** and attach the permission policy **AliyunKMSManageRAMCredentialsRolePolicy** to it. KMS uses this role to manage your RAM secrets and perform tasks such as RAM secrets rotation.
    

You can log on to the RAM console to view the details of service-linked roles and policies. For more information, see [View the information about a RAM role](/help/en/ram/user-guide/view-the-information-about-a-ram-role#task-188120) and [View the information about a policy](/help/en/ram/view-the-basic-information-about-a-policy#task-221536).

When authorization is complete, you can return to the RAM secrets creation page and click the refresh button. Then you can create RAM secrets.

## Step 2: Create a RAM secret

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Secrets**.
    
2.  Click the **Customer-managed Secrets** tab, locate the **RAM Secrets** type, select the required instance ID from the **Instance ID** drop-down list, and then click **Create Secret**. Then, configure the parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Select RAM User**
    
    The RAM user for which you want to create the secret. The selected RAM user must have at least one AccessKey pair. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
    The secret name is automatically generated based on the name of the RAM user. The secret name is unique within the current region.
    
    **Secret Value**
    
    The AccessKey secret of the RAM user.
    
    The value cannot exceed 30,720 bytes in length, which is equivalent to 30 KB in size.
    
    **CMK**
    
    The key that is used to encrypt the current value of the secret.
    
    **Important**
    
    -   Your key and secret must belong to the same KMS instance. The key must be a symmetric key. For more information about the symmetric keys supported by KMS, see [Key specifications for symmetric and Asymmetric encryption](/help/en/kms/key-management-service/user-guide/key-types-and-specifications#task-2292624).
        
    -   If you are a RAM user or a RAM role, you must have the permissions to call the GenerateDataKey operation by using a key.
        
    
    **Tag**
    
    The tag that you want to add to the secret. You can use tags to classify and manage secrets. A tag consists of a key-value pair.
    
    **Note**
    
    -   A tag key or a tag value can be up to 128 characters in length and can contain letters, digits, forward slashes (/), backslashes (\\), underscores (\_), hyphens (-), periods (.), plus signs (+), equal sign (=), colons (:), at signs (@), and spaces.
        
    -   A tag key cannot start with aliyun or acs:.
        
    -   You can configure up to 20 key-value pairs for each secret.
        
    
    **Automatic Rotation**
    
    Specifies whether to enable automatic secret rotation.
    
    **Days (7 Days to 365 Days)**
    
    The interval of automatic secret rotation. This setting is required only when you enable automatic rotation.
    
    KMS periodically updates the secret based on the value of this parameter.
    
    **Description**
    
    The description of the secret.
    
    **Advanced Settings** > **Policy Settings**
    
    The policy settings of the secret. For more information, see [Overview](/help/en/kms/key-management-service/security-and-compliance/overview-of-secret-policies).
    
    You can use the default policy and then modify the policy based on your business requirements after you create the secret.
    

## Step 3: Integrate the RAM secret into an application

KMS offers RAM secret plug-in, Secret Client, Alibaba Cloud SDK, KMS Agent, and KMS instance SDK to call the [GetSecretValue (OpenAPI)](/help/en/kms/key-management-service/developer-reference/api-getsecretvalue) or [GetSecretValue (KMS Instance API)](/help/en/kms/key-management-service/developer-reference/getsecretvalue-2) (not recommended) operation to retrieve a RAM secret's value.

**Note**

-   To enhance service reliability, we recommend that you implement a robust error retry mechanism in your application.
    
-   KMS provides multiple authentication methods. For enhanced security, we recommend use of either an ECS instance RAM role or a standard RAM role.
    
-   Endpoints:
    
    -   Shared gateway endpoint: see [Endpoint](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/#3b8b6b498e958).
        
    -   Dedicated gateway endpoint: `{INSTANCE_ID}.cryptoservice.kms.aliyuncs.com`.
        

**Method**

**Applicable scenario**

**Supported gateways**

[RAM secret plugin](/help/en/kms/key-management-service/developer-reference/ram-secret-plug-in)

-   The application is developed in Java 8 or later, Go, or Python.
    
-   Your application must use a [supported SDK version](/help/en/kms/key-management-service/developer-reference/ram-secret-plug-in#title-ij7-jbm-lze).
    

-   Shared gateway
    
-   Dedicated gateway
    

[Secret Client](/help/en/kms/key-management-service/developer-reference/secrets-manager-client)

The application is developed in Java 8 or later, Go, or Python.

-   Shared gateway
    
-   Dedicated gateway
    

[Alibaba Cloud SDK](/help/en/kms/key-management-service/developer-reference/get-secret-value-example-of-java)

The application supports Java 8 or later (Java 6 or later with Alibaba Cloud SDK V1.0), PHP, Go, Python, .NET (C# only), C++, TypeScript, and Swift.

-   Dedicated gateway (recommended)
    
-   Shared gateway
    

[KMS Agent](/help/en/kms/key-management-service/developer-reference/using-the-kms-agent-to-obtain-secret-values/)

-   Ideal for multi-application deployments where many applications access KMS.
    
-   It offers standardized HTTP APIs, supporting applications written in any language.
    

-   Dedicated gateway (recommended)
    
-   Shared gateway
    

[KMS Instance SDK](/help/en/kms/key-management-service/developer-reference/kms-instance-sdk-for-java/) (not recommended)

The application is developed in Java 8 or later, PHP, Go, Python, or .NET (C# only).

Dedicated gateway

## What to do next

### Rotate a RAM secret

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Secrets**.
    
2.  Click the **Customer-managed Secrets** tab, locate the **RAM Secrets** type, select the required instance ID from the **Instance ID** drop-down list, find the secret that you want to rotate, and then click **Details** in the **Actions** column.
    
3.  Configure a secret rotation policy.
    
    -   Automatic rotation: In the upper-right corner of the page, click **Configure Rotation**, enable or disable Automatic Rotation, and then click **OK**.
        
    -   Immediate rotation: In the upper-right corner of the page, click **Rotate Now**. In the **Configure Rotation** dialog box, set the **Rotation Window** parameter to a value that ranges from 10 minutes to 2 days, and then click **OK**.
        

### Delete a RAM secret

You can immediately delete a secret or create a scheduled task to delete a secret. If you delete a RAM secret, the RAM secret is deleted only from Secrets Manager. The AccessKey pair of the RAM user that is associated with the RAM secret is not deleted from RAM.

**Warning**

Before you delete a RAM secret, make sure that the RAM secret is no longer in use. If you delete a RAM secret that is in use, service failures may occur.

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Secrets**.
    
2.  Click the **Customer-managed Secrets** tab, locate the **RAM Secrets** type, select the required instance ID from the **Instance ID** drop-down list, find the secret that you want to delete, and then click **Schedule Deletion** in the **Actions** column.
    
3.  In the **Schedule Deletion** dialog box, select a method to delete the secret and click **OK**.
    
    -   If you select **Schedule Deletion**, configure Retention Period (7 to 30 Days). When the scheduled deletion period ends, KMS deletes the secret.
        
    -   If you select **Delete Immediately**, the system immediately deletes the secret.
        
    
    During the scheduled deletion period, you can click **OK** in the **Actions** column to cancel the deletion.
    

### Add tags to secrets

You can use tags to classify and manage secrets. A tag consists of a key-value pair.

**Note**

-   A tag key or a tag value can be up to 128 characters in length and can contain letters, digits, forward slashes (/), backslashes (\\), underscores (\_), hyphens (-), periods (.), plus signs (+), equal sign (=), colons (:), at signs (@), and spaces.
    
-   A tag key cannot start with aliyun or acs:.
    
-   You can configure up to 20 key-value pairs for each secret.
    

#### **Add tags for a secret**

**Solution**

**Description**

Method 1: Add tags on the **Secrets** page

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Secrets**.
    
2.  Click a tab based on the type of your secret, select the required instance ID from the **Instance ID** drop-down list, find the desired secret, and then click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9347704961/p703146.png) icon in the Tag column.
    
3.  Click **Add**. In the **Edit Tag** dialog box, enter multiple **Tag Key** and **Tag Value**, and click **OK**. In the message that appears, click **Close**.
    
    In the **Edit Tag** dialog box, you can modify the tag values and remove multiple tags at a time.
    

Method 2: Add tags on the **Secret Details** page

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Secrets**.
    
2.  Click a tab based on the type of your secret. Select the required instance ID from the **Instance ID** drop-down list, find the desired secret, and then click **Details** in the **Actions** column.
    
3.  On the **Secret Details** page, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0115704961/p702977.png) icon next to **Tag**.
    
4.  In the **Edit Tag** dialog box, enter multiple **Tag Key** and **Tag Value** and click **OK**. In the message that appears, click **Close**.
    
    In the **Edit Tag** dialog box, you can modify the tag values and remove multiple tags at a time.
    

#### **Configure tags for multiple secrets at a time**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Secrets**.
    
2.  Click a tab based on the type of your secret, select the required instance ID from the **Instance ID** drop-down list, and then select the desired secrets from the secret list.
    
    -   Add tags: In the lower part of the secret list, click **Add Tag**. In the **Add Tag** dialog box, enter multiple **Tag Key** and **Tag Value**, and click **OK**. In the message that appears, click **Close**.
        
    -   Remove tags: In the lower part of the secret list, click **Remove Tag**. In the **Batch Remove** dialog box, select the tags that you want to remove and click **Cancel**. In the message that appears, click **Close**.
        

### **Check** accounts

The account check feature allows you to check whether a RAM user indicated by a RAM secret exists and whether the AccessKey ID of the RAM user is the same as that stored in the secret.

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Secrets**.
    
2.  Click the **Customer-managed Secrets** tab, locate the **RAM Secrets** type, select the required instance ID from the **Instance ID** drop-down list, find the secret that you want to manage, and then click **Details** in the **Actions** column.
    
3.  In the **Versions** section, click **Check Account**. After the check is complete, view the check result.
    

## **FAQs**

-   [What do I do when setting a rotation policy or initiating immediate rotation, the message "Your secret is being rotated, please try again later" appears?](/help/en/kms/key-management-service/user-guide/secrets-faq#c2675b303c870)
    
-   [What do I do if secret status is unavailable or the API call returns "Rejected.Unavailable"?](/help/en/kms/key-management-service/user-guide/secrets-faq#b4988ba06dkht)
