The AllocateAnycastEipAddress operation creates an Anycast EIP instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Eipanycast/2020-03-09/AllocateAnycastEipAddress)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Eipanycast/2020-03-09/AllocateAnycastEipAddress)

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

eipanycast:AllocateAnycastEipAddress

create

\*AnycastEipAddress

`acs:eipanycast:{#regionId}:{#accountId}:anycast/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Bandwidth

string

No

The peak bandwidth of the Anycast EIP instance. Unit: Mbps.

Valid values: **200** to **1000**.

Default value: **1000**.

**Note**

The peak bandwidth is for reference only and is not a guaranteed value. It serves as the upper limit for bandwidth.

**Valid values:**

-   1000 :
    
    1000
    

200

ServiceLocation

string

Yes

The access area of the Anycast EIP instance.

**Valid values:**

-   international :
    
    Specifies regions outside the Chinese mainland.
    

international

InstanceChargeType

string

No

The billing method of the Anycast EIP instance.

Set the value to **PostPaid**. This value specifies the pay-as-you-go billing method.

PostPaid

InternetChargeType

string

No

The metering method for Internet data transfer.

Set the value to **PayByTraffic**. This value specifies the pay-by-data-transfer metering method.

PayByTraffic

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Make sure that the client token is unique for each request. The token can contain a maximum of 64 ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

Name

string

No

The name of the Anycast EIP instance.

The name must be 0 to 128 characters in length. It must start with a letter or a Chinese character and can contain digits, underscores (\_), and hyphens (-).

doctest

Description

string

No

The description of the Anycast EIP instance.

The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.

docdesc

ResourceGroupId

string

No

The ID of the resource group to which the instance belongs.

rg-acfm3obzjuk\*\*\*\*

Tag

array<object>

No

The resource tags.

object

No

The resource tag. Specify up to 20 tags at a time.

Key

string

No

The tag key. Specify up to 20 tag keys. A tag key cannot be an empty string.

A tag key contains up to 128 characters, cannot begin with `aliyun` or `acs:` or contain `http://` or `https://`.

tag-key

Value

string

No

The tag value. Specify up to 20 tag values. A tag value can be an empty string.

A tag value contains up to 128 characters, cannot begin with `aliyun` or `acs:` or contain `http://` or `https://`.

tag-value

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The request ID.

FBDB18D8-E91E-4978-8D6C-6E2E3EE10133

AnycastId

string

The ID of the Anycast EIP instance.

aeip-bp1ix34fralt4ykf3\*\*\*\*

OrderId

string

The order ID.

1422000\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "FBDB18D8-E91E-4978-8D6C-6E2E3EE10133",
  "AnycastId": "aeip-bp1ix34fralt4ykf3****",
  "OrderId": "1422000****"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationFailed.CdtNotOpened

Operation failed because cdt not opened.

Please activate CDT service before performing the current operation.

400

QuotaExceeded.AnycastEIP

Quota exceeded: The number of Anycast Elastic IP addresses has reached the limit. Please request a quota increase or release unused resources.

Quota Excess: The Anycast Elastic IP address has reached the upper limit and cannot be created. Apply for a quota increase or release useless resources.

400

IllegalParameter.Name

The specified Name is invalid.

400

COMMODITY.INVALID\_COMPONENT

The order configuration parameters do not meet the validation criteria. Please reselect the products.

Order configuration parameters do not meet the verification conditions, please re-match the goods!

See [Error Codes](https://api.alibabacloud.com/document/Eipanycast/2020-03-09/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Eipanycast/2020-03-09/AllocateAnycastEipAddress#workbench-doc-change-demo) for a complete list.
