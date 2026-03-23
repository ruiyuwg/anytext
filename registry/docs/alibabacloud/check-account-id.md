Alibaba Cloud assigns a unique 16-digit identifier to every account, such as `0123456789012345`. This identifier is known as the **account ID** (also written as **Account ID** or **UID**). The account ID is the basis for resource ownership, billing, and permission boundaries for all your resources on Alibaba Cloud. It is critical for automated operations and maintenance (O&M), permission management, and cross-account collaboration. This guide shows you several ways to find your account ID.

**Important**

The account ID identifies your account. Although it is not confidential information like a password or an AccessKey, use and share it with caution.

## Use cases

Use an account ID to precisely identify accounts and resource ownership in the following scenarios:

-   **Cost and billing analysis**: In downloaded billing reports, fields such as `ResourcePurchaseAccountId` and `ResourceOwnerAccountId` contain the account ID for resource purchases or ownership.
    
-   **Call cloud product API calls**: Some OpenAPIs for cross-account operations require the account ID as a parameter (such as `OwnerId` or `OwnerAccount`).
    
-   **Cross-account resource access**: When you create a shared VPC or configure a VPC peering connection, the account ID is the unique identifier for the authorized party.
    
-   **Cross-account authorization with Resource Access Management (RAM)**: When granting permissions to another Alibaba Cloud account, specify the other account's ID in the `Principal` field of the access policy.
    
-   **Alibaba Cloud Resource Name (ARN) construction**: ARNs include the account ID to locate resources across all regions.
    
    -   ECS instance ARN: `acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`
        
    -   OSS bucket ARN: `acs:oss:<region>:<account-id>:<relative-id>`
        

## Find your account ID

You can find your account ID in the console or via an OpenAPI, depending on your use case. Note that the information displayed in the console or returned by the OpenAPI varies depending on the identity that you use to sign in. The following sections provide instructions for an Alibaba Cloud account, a RAM user, and a RAM role.

## Console

You can find the account ID by hovering over your profile picture in the upper-right corner of the console. The specific ID displayed depends on the identity that you use to sign in.

### **Alibaba Cloud account logon**

Log on to the console with your Alibaba Cloud account. Hover over your **profile picture** in the upper-right corner to see your **Account ID**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5808685671/p1034632.png)

### **RAM user**

Log on to the console as a RAM user. Hover over your **profile picture** in the upper-right corner to see the Alibaba Cloud account ID of the parent account (displayed as **Main Account ID**).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5808685671/p1008596.png)

### **RAM role**

Sign in to the console by assuming a RAM role. Hover over your **profile picture** in the upper-right corner to see the Alibaba Cloud account ID of the parent account (displayed as **Main Account ID**).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5808685671/p1013836.png)

## OpenAPI

Call the [GetCallerIdentity](/help/en/ram/developer-reference/api-sts-2015-04-01-getcalleridentity) API to obtain the **account ID** for the current caller. The API returns a JSON object that contains your identity information. The `AccountId` field contains the Alibaba Cloud account ID. The returned fields vary based on the caller's identity. The following table describes the key fields in the response:

**Key API response field**

**Alibaba Cloud account**

**RAM user**

**RAM role**

IdentityType

Account

RAMUser

AssumedRoleUser

AccountId

Your account ID

ID of the parent Alibaba Cloud account

ID of the parent Alibaba Cloud account

UserId / RoleId

Same as AccountId

ID of the RAM user

ID of the RAM role

PrincipalId

Same as AccountId

Same as UserId

RoleId:SessionName

## Comparison of account ID and login name

An **account ID** is a permanent, system-generated identifier used for programmatic access and resource attribution. In contrast, a **login name** is a mutable credential, such as an email address or alias, used only for logging into the console.

While they are often confused, they serve distinct purposes. Here is a detailed comparison:

**Item**

**Account ID**

**Login name**

**Nature**

Identity identifier

Login credential

**Format**

A unique, system-generated 16-digit **number string**

The **email address** that you use to log in

**Mutability**

**Cannot be changed**

**Can be changed**; changing the login name does not affect the account ID

**Purpose**

Programmatic identification, access policies, API calls, and billing attribution

Used only for logging in to the console

**Note**

When writing automation scripts, code, or access policies, you **must** use the static **account ID** to identify an account. Do not use the **login name**, because it can be changed and is not a reliable identifier for programmatic tasks.
