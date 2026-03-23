Creates a Resource Access Management (RAM) role.

## Operation description

### [](#)Operation description

For more information about RAM roles, see [Overview of RAM roles](/help/en/ram/user-guide/ram-role-overview).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ram/2015-05-01/CreateRole)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ram/2015-05-01/CreateRole)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

ram:CreateRole

create

\*Role

`acs:ram:*:{#accountId}:role/{#RoleName}`

-   ram:TrustedPrincipalTypes
-   ram:ServiceNames

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RoleName

string

No

The name of the RAM role.

The name must be 1 to 64 characters in length, and can contain letters, digits, periods (.), and hyphens (-).

ECSAdmin

Description

string

No

The description of the RAM role.

The description must be 1 to 1,024 characters in length.

ECS管理角色

AssumeRolePolicyDocument

string

No

The trust policy that specifies one or more trusted entities to assume the RAM role. The trusted entities can be Alibaba Cloud accounts, Alibaba Cloud services, or identity providers (IdPs).

**Note**

RAM users cannot assume the RAM roles of trusted Alibaba Cloud services.

{"Statement":\[{"Action":"sts:AssumeRole","Effect":"Allow","Principal":{"RAM":"acs:ram::123456789012\*\*\*\*:root"}}\],"Version":"1"}

MaxSessionDuration

integer

No

The maximum session time of the RAM role.

Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.

If you do not specify this parameter, the default value is used.

3600

Tag

array<object>

No

The tags.

object

No

The tag.

Key

string

No

The key of the tag.

k1

Value

string

No

The value of the tag.

v1

The following content provides sample values for the **AssumeRolePolicyDocument** parameter.

-   The following policy allows the RAM role to be assumed by all RAM users of the Alibaba Cloud account whose ID is `123456789012****`.
    

```
{
	"Statement": [{
		"Action": "sts:AssumeRole",
		"Effect": "Allow",
		"Principal": {
			"RAM": [
				"acs:ram::123456789012****:root"
			]
		}
	}],
	"Version": "1"
}
```

-   The following policy allows the RAM role to be assumed by the RAM user named `testuser` of the trusted Alibaba Cloud account whose ID is `123456789012****`.
    

**Note**

Before you create the role, make sure that you have created a RAM user named `testuser` whose logon name is `testuser@123456789012****.onaliyun.com`.

```
{
	"Statement": [{
		"Action": "sts:AssumeRole",
		"Effect": "Allow",
		"Principal": {
			"RAM": [
				"acs:ram::123456789012****:user/testuser"
			]
		}
	}],
	"Version": "1"
}
```

-   The following policy allows the RAM role to be assumed by the Elastic Compute Service (ECS) service of the current trusted Alibaba Cloud account.
    

```
{
	"Statement": [{
		"Action": "sts:AssumeRole",
		"Effect": "Allow",
		"Principal": {
			"Service": [
				"ecs.aliyuncs.com"
			]
		}
	}],
	"Version": "1"
}
```

-   The following policy allows the RAM role to be assumed by the Security Assertion Markup Language (SAML) IdP named `testprovider` of the current trusted Alibaba Cloud account whose ID is `123456789012****`.
    

**Note**

Before you create the role, make sure that you have created a SAML IdP named `testprovider`.

```
{
	"Statement": [{
		"Action": "sts:AssumeRole",
		"Effect": "Allow",
		"Principal": {
			"Federated": [
				"acs:ram::123456789012****:saml-provider/testprovider"
			]
		},
		"Condition": {
			"StringEquals": {
				"saml:recipient": "https://signin.aliyun.com/saml-role/sso"
			}
		}
	}],
	"Version": "1"
}
```

-   The following policy allows the RAM role to be assumed by the OpenID Connect (OIDC) IdP named `TestOIDCProvider` of the current trusted Alibaba Cloud account whose ID is `123456789012****`.
    

**Note**

Before you create the role, make sure that you have created an OIDC IdP named `TestOIDCProvider`.

```
{
	"Statement": [{
		"Action": "sts:AssumeRole",
		"Effect": "Allow",
		"Principal": {
			"Federated": [
				"acs:ram::123456789012****:oidc-provider/TestOIDCProvider"
			]
		},
		"Condition": {
			"StringEquals": {
				"oidc:aud": [
					"496271242565057****"
				],
				"oidc:iss": "https://dev-xxxxxx.okta.com",
				"oidc:sub": "KryrkIdjylZb7agUgCEf****"
			}
		}
	}],
	"Version": "1"
}
```

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

Role

object

The information about the RAM role.

AssumeRolePolicyDocument

string

The trust policy that specifies the trusted entity to assume the RAM role.

{ "Statement": \[ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::123456789012\*\*\*\*:root" } } \], "Version": "1" }

Description

string

The description of the RAM role.

ECS管理角色

MaxSessionDuration

integer

The maximum session time of the RAM role.

3600

RoleName

string

The name of the RAM role.

ECSAdmin

CreateDate

string

The time when the RAM role was created.

2015-01-23T12:33:18Z

RoleId

string

The ID of the RAM role.

901234567890\*\*\*\*

Arn

string

The Alibaba Cloud Resource Name (ARN) of the RAM role.

acs:ram::123456789012\*\*\*\*:role/ECSAdmin

RequestId

string

The request ID.

04F0F334-1335-436C-A1D7-6C044FE73368

## Examples

Success response

`JSON` format

```
{
  "Role": {
    "AssumeRolePolicyDocument": "{ \"Statement\": [ { \"Action\": \"sts:AssumeRole\", \"Effect\": \"Allow\", \"Principal\": { \"RAM\": \"acs:ram::123456789012****:root\" } } ], \"Version\": \"1\" }",
    "Description": "ECS管理角色",
    "MaxSessionDuration": 3600,
    "RoleName": "ECSAdmin",
    "CreateDate": "2015-01-23T12:33:18Z",
    "RoleId": "901234567890****",
    "Arn": "acs:ram::123456789012****:role/ECSAdmin"
  },
  "RequestId": "04F0F334-1335-436C-A1D7-6C044FE73368"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ram/2015-05-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ram/2015-05-01/CreateRole#workbench-doc-change-demo) for a complete list.
