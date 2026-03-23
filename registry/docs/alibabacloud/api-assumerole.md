Obtains a Security Token Service (STS) token to assume a Resource Access Management (RAM) role.

## Operation description

### Prerequisites

You cannot use an Alibaba Cloud account to call this operation. The requester of this operation can only be a RAM user or RAM role. Make sure that the AliyunSTSAssumeRoleAccess policy is attached to the requester. After this policy is attached to the requester, the requester has the management permissions on STS.

If you do not attach the AliyunSTSAssumeRoleAccess policy to the requester, the following error message is returned:

`You are not authorized to do this action. You should be authorized by RAM.`

You can refer to the following information to troubleshoot the error:

-   Cause of the error: The policy that is required to assume a RAM role is not attached to the requester. To resolve this issue, attach the AliyunSTSAssumeRoleAccess policy or a custom policy to the requester. For more information, see [Can I specify the RAM role that a RAM user can assume?](/help/en/ram/support/faq-about-ram-roles-and-sts-tokens) and [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
-   Cause of the error: The requester is not authorized to assume the RAM role. To resolve this issue, add the requester to the Principal element in the trust policy of the RAM role For more information, see [Edit the trust policy of a RAM role](/help/en/ram/user-guide/edit-the-trust-policy-of-a-ram-role).
    

### Best practices

An STS token is valid for a period of time after it is issued, and the number of STS tokens that can be issued within an interval is also limited. Therefore, we recommend that you configure a proper validity period for an STS token and repeatedly use the token within this period. This prevents frequent issuing of STS tokens from adversely affecting your services if a large number of requests are sent. For more information about the limit, see [Is the number of STS API requests limited?](/help/en/ram/support/faq-about-ram-roles-and-sts-tokens) You can configure the `DurationSeconds` parameter to specify a validity period for an STS token.

When you upload or download Object Storage Service (OSS) objects on mobile devices, a large number of STS API requests are sent. In this case, repeated use of an STS token may not meet your business requirements. To avoid the limit on STS API requests from affecting access to OSS, you can **add a signature to the URL of an OSS object**. For more information, see [Add signatures to URLs](/help/en/oss/developer-reference/ddd-signatures-to-urls) and [Obtain signature information from the server and upload data to OSS](/help/en/oss/user-guide/obtain-signature-information-from-the-server-and-upload-data-to-oss).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeZones)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeZones)

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

sts:AssumeRole

get

\*Role

`acs:ram::{#accountId}:role/{#RoleName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DurationSeconds

integer

No

The validity period of the STS token. Unit: seconds.

Minimum value: 900. Maximum value: the value of the `MaxSessionDuration` parameter. Default value: 3600.

You can call the CreateRole or UpdateRole operation to configure the `MaxSessionDuration` parameter. For more information, see [CreateRole](/help/en/ram/api-createrole) and [UpdateRole](/help/en/ram/api-updaterole).

3600

Policy

string

No

The policy that specifies the permissions of the returned STS token. This allows you to implement more fine-grained access control.

-   If you specify this parameter, the permissions of the returned STS token are the intersection of the permissions defined in this policy and the permissions granted by the role's policy.
    
-   If you do not specify this parameter, the returned STS token has all the permissions of the RAM role.
    

The value must be 1 to 2,048 characters in length.

For more information about policy elements and sample policies, see [Policy elements](/help/en/ram/policy-elements) and [Overview of sample policies](/help/en/ram/user-guide/overview-of-sample-policies).

{"Statement": \[{"Action": \["\*"\],"Effect": "Allow","Resource": \["\*"\]}\],"Version":"1"}

RoleArn

string

Yes

The Alibaba Cloud Resource Name (ARN) of the RAM role.

The trusted entity of the RAM role is an Alibaba Cloud account. For more information, see [Create a RAM role for a trusted Alibaba Cloud account](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-account) and [CreateRole](/help/en/ram/api-createrole).

Format: `acs:ram::<account_id>:role/<role_name>`.

You can view the ARNs of RAM roles by using the RAM console or by calling API operations.

-   For more information about how to view the ARN of a RAM role in the RAM console, see the "How do I view the ARN of a RAM role?" section of the [FAQ about RAM roles and STS tokens](/help/en/ram/support/faq-about-ram-roles-and-sts-tokens) topic.
    
-   For more information about how to view the ARN by calling operations, see [ListRoles](/help/en/ram/api-listroles) and [GetRole](/help/en/ram/api-getrole).
    

acs:ram::123456789012\*\*\*\*:role/adminrole

RoleSessionName

string

Yes

The name of the role session.

The value is user-defined. In most cases, you can set this parameter to the identity of the user who calls the operation. For example, you can specify a username. You can specify `RoleSessionName` to identify API callers that assume the same RAM role in ActionTrail logs. This allows you to track the users that perform the operations.

The name must be 2 to 64 characters in length, and can contain letters, digits, and the following special characters: `. @ - _`.

alice

ExternalId

string

No

The external ID of the RAM role.

The value of this parameter is provided by an external party and is used to prevent the confused deputy issue. For more information, see [Use external IDs to prevent the confused deputy issue](/help/en/ram/use-cases/use-externalid-to-prevent-the-confused-deputy-problem).

The ID must be 2 to 1,224 characters in length, and can contain letters, digits, and the following special characters: `= , . @ : / - _`. The regular expression for this parameter is `[\w+=,.@:\/-]*`.

abcd1234

SourceIdentity

string

No

The source identity information.

When a user assumes a role, the source identity of the user can be specified as the initial identity of a session. The specified source identity persists throughout the role session and cannot be changed. This ensures operation traceability and security.

The value must be 2 to 64 characters in length, and can contain letters, digits, and the following special characters: `=,.@-_`. The regular expression for this parameter is `[\w+=,.@-]*`. The value cannot start with `acs:`, `aliyun:`, or `alibabacloud:`. These prefixes are internally used within Alibaba Cloud.

Alice

For more information about common request parameters, see [Common parameters](/help/en/sdk/product-overview/rpc-mechanism).

## Response elements

**Parameter**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The request ID.

6894B13B-6D71-4EF5-88FA-F32781734A7F

AssumedRoleUser

object

The temporary identity that you use to assume the RAM role.

AssumedRoleId

string

The ID of the temporary identity that you use to assume the RAM role.

34458433936495\*\*\*\*:alice

Arn

string

The ARN of the temporary identity that you use to assume the RAM role.

acs:ram::123456789012\*\*\*\*:role/adminrole/alice

Credentials

object

The STS credentials.

SecurityToken

string

The STS token.

**Note**

Alibaba Cloud STS does not impose limits on the length of STS tokens. We recommend that you do not specify a maximum length for STS tokens.

\*\*\*\*\*\*\*\*

Expiration

string

The time when the STS token expires. The time is displayed in UTC.

2015-04-09T11:52:19Z

AccessKeySecret

string

The AccessKey secret.

wyLTSmsyPGP1ohvvw8xYgB29dlGI8KMiH2pK\*\*\*\*

AccessKeyId

string

The AccessKey ID.

STS.L4aBSCSJVMuKg5U1\*\*\*\*

SourceIdentity

string

The source identity information.

When a user assumes a role, the source identity of the user can be specified as the initial identity of a session. The specified source identity persists throughout the role session and cannot be changed. This ensures operation traceability and security.

If the SourceIdentity parameter was not specified in the request, this field is omitted from the response.

Alice

## Examples

Success response

`JSON` format

```
{
  "RequestId": "6894B13B-6D71-4EF5-88FA-F32781734A7F",
  "AssumedRoleUser": {
    "AssumedRoleId": "34458433936495****:alice",
    "Arn": "acs:ram::123456789012****:role/adminrole/alice"
  },
  "Credentials": {
    "SecurityToken": "********",
    "Expiration": "2015-04-09T11:52:19Z",
    "AccessKeySecret": "wyLTSmsyPGP1ohvvw8xYgB29dlGI8KMiH2pK****",
    "AccessKeyId": "STS.L4aBSCSJVMuKg5U1****"
  },
  "SourceIdentity": "Alice"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter.DurationSeconds

The Min/Max value of DurationSeconds is 15min/1hr.

400

InvalidParameter.ExternalId

The parameter ExternalId is wrongly formed.

400

InvalidParameter.RoleArn

The parameter RoleArn is wrongly formed.

400

InvalidParameter.RoleSessionName

The parameter RoleSessionName is wrongly formed.

400

InvalidParameter.SerialNumber

The parameter SerialNumber is wrongly formed.

400

InvalidParameter.TokenCode

The parameter TokenCode is wrongly formed.

400

InvalidParameter.PolicyGrammar

The parameter Policy has not passed grammar check.

400

InvalidParameter.PolicySize

The size of Policy must be smaller than 2048 bytes.

400

InvalidParameter.ContentType

The ContentType request header must be either "application/json" or "application/x-www-form-urlencoded".

500

InternalError

STS Server Internal Error happened, please send the RequestId to us.

403

NoPermission

You are not authorized to do this action. You should be authorized by RAM.

403

AuthenticationFail.ApiUsername

The specified api username is not legal.

403

AuthenticationFail.ApiPassword

The specified api password is not legal.

404

EntityNotExist.Role

The specified Role not exists .

See [Error Codes](https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.aliyun.com/document/Ecs/2014-05-26/RunInstances?updateTime=2025-01-17#workbench-doc-change-demo) for a complete list.
