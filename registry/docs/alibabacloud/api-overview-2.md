This topic describes the basic information about Resource Access Management (RAM) APIs. For more information about Alibaba Cloud APIs, see [Overview](/help/en/doc-detail/2391383.html).

## **Overview**

RAM APIs include the Identity Management Service (IMS) API, RAM API, and Security Token Service (STS) API.

You can call the APIs based on your business requirements. The following table describes the details of the APIs.

**Scenario**

**Description**

**API selection**

**Difference**

User management

Manage RAM users, AccessKey pairs, logon passwords, and multi-factor authentication (MFA) devices.

-   [IMS API](/help/en/ram/api-overview-1#concept-354409)
    
-   [RAM API](/help/en/ram/api-overview#doc-12379)
    

-   IMS API supports new operations. For example, you can call an IMS operation to query the time at which an AccessKey pair was last used, to modify the default domain name, and to obtain user credential reports.
    
-   IMS API will support new operations that are related to user management, user group management, and security settings. We recommend that you use the IMS API.
    
-   Some RAM operations have the same features as IMS operations. You can call these RAM operations or IMS operations to achieve the same goals.
    

User group management

Manage RAM user groups, and add or remove RAM users in RAM user groups.

Security settings

Manage password policies, global security preferences, default domain names, user credential reports, and security reports of Alibaba Cloud accounts.

Policy management

Manage policies and grant permissions to or revoke permissions from a RAM user, RAM role, or RAM user group.

-   [RAM API](/help/en/ram/api-overview#doc-12379)
    
-   [Resource Management API](/help/en/resource-management/list-of-operations-by-function#concept-354409)
    

-   Some RAM operations have the same features as Resource Management operations. You can call these RAM operations or Resource Management operations to achieve the same goals.
    
-   You can call a Resource Management operation to grant permissions on resource groups. You cannot call a RAM operation to grant permissions on resource groups.
    
-   Resource Management API provides operations that are related to service-linked roles.
    

Role management

Manage RAM roles.

Role usage

Obtain STS tokens by assuming roles.

[STS API](/help/en/ram/api-assumerole#reference-clc-3sv-xdb)

None.

Single sign-on (SSO) management

Manage identity providers (IdPs) for user-based SSO and role-based SSO.

[IMS API](/help/en/ram/api-overview-1#concept-354409)

None.

Role-based SSO usage

Obtain STS tokens by using role-based SSO.

[STS API](/help/en/ram/api-assumerolewithsaml#reference-qrl-qcb-1hb)

None.

Open authorization (OAuth) management

Manage applications and application secrets.

[IMS API](/help/en/ram/api-overview-1#concept-354409)

None.

## **IMS API**

### **API versions**

**API version**

**Description**

[2019-08-15](https://next.api.alibabacloud.com/document/Ims/2019-08-15/overview)

We recommend that you use this version.

### **Endpoints**

For more information, see [Endpoints](/help/en/ram/developer-reference/api-ims-2019-08-15-endpoint).

### User identities

**User identity**

**Supported**

[Alibaba Cloud account](/help/en/openapi/identity#3948d68066ppy)

Yes

[RAM user](/help/en/openapi/identity#265242420egiy) (recommended)

Yes

[RAM role](/help/en/openapi/identity#5b7a31e066wma) (recommended)

Yes

We recommend that you use a **_RAM user_** or **_RAM role_** to call operations. Before you use a RAM user or RAM role to call operations, you must grant the required permissions to the RAM user or RAM role.

### **Format**

[Remote procedure call (RPC)](/help/en/sdk/product-overview/rpc-mechanism) API

### **Call methods**

**Call method**

**Supported**

**Description**

[Alibaba Cloud SDK](/help/en/openapi/alibaba-cloud-sdks) (recommended)

Yes

For more information about the programming languages supported by IMS SDKs and methods to install dependencies, see [IMS SDKs](https://next.api.alibabacloud.com/api-tools/sdk/Ims?version=2019-08-15).

[Alibaba Cloud CLI](/help/en/openapi/alibaba-cloud-cli)

Yes

None.

[Terraform](/help/en/openapi/terraform)

Partially supported

For more information, see [Terraform Registry](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs).

[Resource Orchestration Service (ROS)](/help/en/openapi/ros)

Partially supported

For more information, see [Resource type index](/help/en/ros/developer-reference/list-of-resource-types-by-service).

[Custom encapsulation](/help/en/openapi/custom-encapsulation)

Yes

None.

## **RAM API**

### **API versions**

**API version**

**Description**

[2015-05-01](https://next.api.alibabacloud.com/document/cloudsso/2021-05-15/overview)

We recommend that you use this version.

### **Endpoints**

For more information, see [Endpoints](/help/en/ram/developer-reference/api-ram-2015-05-01-endpoint).

### User identities

**User identity**

**Supported**

[Alibaba Cloud account](/help/en/openapi/identity#3948d68066ppy)

Yes

[RAM user](/help/en/openapi/identity#265242420egiy) (recommended)

Yes

[RAM role](/help/en/openapi/identity#5b7a31e066wma) (recommended)

Yes

We recommend that you use a **_RAM user_** or **_RAM role_** to call operations. Before you use a RAM user or RAM role to call operations, you must grant the required permissions to the RAM user or RAM role.

### **Format**

[RPC](/help/en/sdk/product-overview/rpc-mechanism) API

### **Call methods**

**Call method**

**Supported**

**Description**

[Alibaba Cloud SDK](/help/en/openapi/alibaba-cloud-sdks) (recommended)

Yes

For more information about the programming languages supported by RAM SDKs and methods to install dependencies, see [RAM SDKs](https://next.api.alibabacloud.com/api-tools/sdk/cloudsso?version=2021-05-15).

[Alibaba Cloud CLI](/help/en/openapi/alibaba-cloud-cli)

Yes

None.

[Terraform](/help/en/openapi/terraform)

Partially supported

For more information, see [Terraform Registry](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs).

[Resource Orchestration Service (ROS)](/help/en/openapi/ros)

Partially supported

For more information, see [Resource type index](/help/en/ros/developer-reference/list-of-resource-types-by-service).

[Custom encapsulation](/help/en/openapi/custom-encapsulation)

Yes

None.

## **STS API**

### **API versions**

**API version**

**Description**

[2015-04-01](https://next.api.alibabacloud.com/document/Sts/2015-04-01/overview)

We recommend that you use this version.

### **Endpoints**

For more information, see [Endpoints](/help/en/ram/developer-reference/api-sts-2015-04-01-endpoint).

### User identities

**Interface**

**Supported user identity**

[AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole)

[RAM user](/help/en/openapi/identity#265242420egiy) and [RAM role](/help/en/openapi/identity#5b7a31e066wma).

[AssumeRoleWithSAML](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithsaml)

Authentication for this operation is performed based on SAML assertions. Anonymous users can call this operation.

[AssumeRoleWithOIDC](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerolewithoidc)

Authentication for this operation is performed based on OIDC tokens. Anonymous users can call this operation.

[GetCallerIdentity](/help/en/ram/developer-reference/api-sts-2015-04-01-getcalleridentity)

[Alibaba Cloud account](/help/en/openapi/identity#3948d68066ppy), [RAM user](/help/en/openapi/identity#265242420egiy), and [RAM role](/help/en/openapi/identity#5b7a31e066wma).

### **Format**

[RPC](/help/en/sdk/product-overview/rpc-mechanism) API

### **Call methods**

**Call method**

**Supported**

**Description**

[Alibaba Cloud SDK](/help/en/openapi/alibaba-cloud-sdks) (recommended)

Yes

For more information about the programming languages supported by STS SDKs and methods to install dependencies, see [STS SDKs](https://next.api.alibabacloud.com/api-tools/sdk/Sts?version=2015-04-01).

[Alibaba Cloud CLI](/help/en/openapi/alibaba-cloud-cli)

Yes

None.

[Terraform](/help/en/openapi/terraform)

Yes

None.

[Resource Orchestration Service (ROS)](/help/en/openapi/ros)

Not Supported.

None.

[Custom encapsulation](/help/en/openapi/custom-encapsulation)

Yes

None.
