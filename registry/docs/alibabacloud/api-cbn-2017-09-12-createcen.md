A Cloud Enterprise Network (CEN) instance is the fundamental resource for managing an integrated network. A CEN instance manages a network that can span one or more regions. Before you enable communication between network instances, you must call the CreateCen operation to create a CEN instance.

## Operation description

**CreateCen** is an asynchronous operation. After a request is sent, the system returns a CEN instance ID, but the CEN instance is not created immediately. The creation task runs in the background. You can call the **DescribeCens** operation to query the status of the CEN instance.

-   If a CEN instance is in the **Creating** status, it is being created. In this status, you can only query the instance. You cannot perform other operations.
    
-   If a CEN instance is in the **Active** status, the instance is created.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateCen)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateCen)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:CreateCen

create

\*CenInstance

`acs:cen:*:{#accountId}:ceninstance/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ClientToken

string

No

The client token used to ensure the idempotence of the request.

Generate a unique parameter value from your client for each request. \`ClientToken\` supports only ASCII characters.

**Note**

If you do not specify this parameter, the system uses the **RequestId** of the request as the **ClientToken**. The **RequestId** is different for each request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

Name

string

No

The name of the CEN instance.

The name can be empty or 1 to 128 characters in length. It cannot start with \`http://\` or \`https://\`.

testname

Description

string

No

The description of the CEN instance.

The description can be empty or 1 to 256 characters in length. It cannot start with \`http://\` or \`https://\`.

testdesc

ProtectionLevel

string

No

The level of CIDR block overlap.

Set the value to **REDUCED**. This is the default value. This value specifies that CIDR blocks can overlap but cannot be identical.

REDUCED

Tag

array<object>

No

The tag information.

You can specify up to 20 tags.

object

No

Key

string

No

The tag key.

The tag key cannot be an empty string. It can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

You can specify up to 20 tag keys.

tagtest

Value

string

No

The tag value.

The tag value can be empty or a string of up to 128 characters. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

Each tag key must have a corresponding tag value. You can specify up to 20 tag values.

tagtest

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The returned data.

CenId

string

The ID of the CEN instance.

cen-dc4vwznpwbobrl\*\*\*\*

RequestId

string

The request ID.

0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50

## Examples

Success response

`JSON` format

```
{
  "CenId": "cen-dc4vwznpwbobrl****",
  "RequestId": "0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IllegalParam.ResourceGroupId

ResourceGroupId is illegal.

The error message returned because the specified resource group is invalid.

400

InvalidTagValue

The tag values are not valid.

The error message returned because the specified tag value is invalid.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/CreateCen#workbench-doc-change-demo) for a complete list.
