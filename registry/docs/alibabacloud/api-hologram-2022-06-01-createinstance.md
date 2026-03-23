Creates an instance.

## Operation description

**Warning**

This API operation incurs fees. Before you call this operation, make sure that you fully understand the billing methods and pricing of Hologres.

-   For more information about the billing of Hologres, see [Billing overview](/help/en/hologres/product-overview/billing-overview).
    
-   When you create a Hologres instance, you must specify the region and zone for the instance. A region can contain multiple zones. The following list describes the zones that are available in each region:
    

```
   cn-hangzhou (Hangzhou): cn-hangzhou-h, cn-hangzhou-j, cn-hangzhou-k
   cn-hangzhou (Hangzhou): cn-hangzhou-h, cn-hangzhou-j, cn-hangzhou-k
   cn-shanghai (Shanghai): cn-shanghai-e, cn-shanghai-f, cn-shanghai-l
   cn-beijing (Beijing): cn-beijing-i, cn-beijing-g, cn-beijing-l
   cn-zhangjiakou (Zhangjiakou): cn-zhangjiakou-b
   cn-shenzhen (Shenzhen): cn-shenzhen-d, cn-shenzhen-f, cn-shenzhen-e
   cn-wulanchabu (Ulanqab): cn-wulanchabu-a
   cn-hongkong (Hong Kong): cn-hongkong-b, cn-hongkong-d
   cn-shanghai-finance-1 (Shanghai Finance Cloud): cn-shanghai-finance-1z, cn-shanghai-finance-1f
   cn-hangzhou-finance (Hangzhou Finance Cloud): cn-hangzhou-finance-k
   cn-shenzhen-finance-1 (Shenzhen Finance Cloud): cn-shenzhen-finance-1d
   ap-northeast-1 (Tokyo): ap-northeast-1a
   ap-southeast-1 (Singapore): ap-southeast-1c, ap-southeast-1a
   ap-southeast-3 (Kuala Lumpur): ap-southeast-3b
   ap-southeast-5 (Jakarta): ap-southeast-5b
   eu-central-1 (Frankfurt): eu-central-1a
   us-east-1 (Virginia): us-east-1a
   us-west-1 (Silicon Valley): us-west-1b
                    
```

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Hologram/2022-06-01/CreateInstance)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Hologram/2022-06-01/CreateInstance)

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

hologram:CreateInstance

create

\*All Resource

`*`

None

None

## Request syntax

```
POST /api/v1/instances/create HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

body

object

No

The request body.

regionId

string

Yes

The region ID. For more information, see [Endpoints](/help/en/hologres/developer-reference/api-hologram-2022-06-01-endpoint).

cn-hangzhou

zoneId

string

Yes

The zone ID.

cn-hangzhou-h

vpcId

string

Yes

The ID of the virtual private cloud (VPC). The VPC must be in the same region as the instance.

vpc-t4netc3y5xxxx

vSwitchId

string

Yes

The ID of the vSwitch. The vSwitch must be in the same zone as the instance.

vsw-2vccsiymtxxxxxx

resourceGroupId

string

No

The resource group. If you leave this parameter empty, the default resource group for your account is used.

""

instanceName

string

Yes

The instance name. The name must be 2 to 64 characters in length. A letter is counted as one character.

my\_holo

instanceType

string

Yes

The instance type.

**Valid values:**

-   Warehouse :
    
    Virtual warehouse instance.
    
-   Follower :
    
    Read-only secondary instance.
    
-   Standard :
    
    General-purpose instance.
    
-   Serverless :
    
    Serverless instance.
    
-   Shared :
    
    Shared instance.
    

Standard

cpu

integer

No

The instance type. Valid values:

-   32 vCPUs and 128 GB of memory (2 compute nodes)
    
-   64 vCPUs and 256 GB of memory (4 compute nodes)
    
-   96 vCPUs and 384 GB of memory (6 compute nodes)
    
-   128 vCPUs and 512 GB of memory (8 compute nodes)
    
-   and so on.
    

**Note**

-   Specify the number of vCPUs.
    
-   To purchase an instance with more than 1,024 vCPUs, submit a ticket.
    
-   You do not need to specify the instance type for a shared instance.
    

64

storageSize

integer

No

The standard storage capacity of the instance. Unit: GB.

**Note**

This parameter is ignored for pay-as-you-go (PostPaid) instances.

500

coldStorageSize

integer

No

The cold storage capacity of the instance. Unit: GB.

**Note**

This parameter is ignored for pay-as-you-go (PostPaid) instances.

500

gatewayCount

integer

No

The number of gateways. Valid values: \[2, 50\].

**Note**

You must specify this parameter only for virtual warehouse instances.

4

chargeType

string

Yes

**Note**

This parameter is ignored for shared instances. Shared instances use defined specifications and the default billing method is pay-as-you-go..

**Valid values:**

-   PostPaid :
    
    Pay-as-you-go
    
-   PrePaid :
    
    Subscription
    

PostPaid

autoPay

boolean

No

Specifies whether to enable automatic payment. Valid values:

-   true (default): Automatic payment is enabled.
    
-   false: An order is generated, but no payment is made.
    

**Note**

If your account balance is insufficient, set the `autoPay` parameter to `false`. When an unpaid order is generated, log on to the Expenses and Costs console to pay for the order.

true

pricingCycle

string

No

**Note**

-   Subscription instances support only `Month`.
    
-   Pay-as-you-go instances support only `Hour`.
    
-   For shared instances, the value is automatically set to `Hour`.
    

**Valid values:**

-   Month :
    
    The instance is billed on a monthly basis.
    
-   Hour :
    
    The instance is billed on an hourly basis.
    

Month

duration

integer

No

The subscription duration, such as two months.

**Note**

Specify this parameter only for subscription instances.

2

autoRenew

boolean

No

Specifies whether to enable auto-renewal. Valid values:

-   true: Auto-renewal is enabled.
    
-   false (default): Auto-renewal is disabled.
    

false

leaderInstanceId

string

No

The ID of the primary instance. This parameter is required for secondary instances.

**Note**

The primary and secondary instances must meet the following conditions:

-   The primary instance is in the Running state.
    
-   The primary and secondary instances are in the same region and zone.
    
-   The primary instance has less than 10 secondary instances.
    
-   The primary and secondary instances belong to the same Alibaba Cloud account.
    

hgpostcn-cn-lbj3aworq112

initialDatabases

string

No

The initial database.

chatbot

enableServerlessComputing

boolean

No

Specifies whether to enable Serverless Computing.

**Valid values:**

-   true :
    
    Enable Serverless Computing.
    
-   false :
    
    Disable Serverless Computing.
    

true

storageType

string

No

The storage class.

**Valid values:**

-   local :
    
    Locally redundant storage.
    
-   redundant :
    
    Zone-redundant storage.
    

redundant

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response details.

RequestId

string

The request ID.

9CC37B9F-F4B4-5FF1-939B-AEE78DC70130

Data

object

The returned results.

InstanceId

string

The instance ID.

hgpostcn-cn-xxxxxx

OrderId

string

The order ID.

217523224780172

Code

string

The error code.

InvalidVpcOrVSwitch.NotAvailable

Message

string

The details of the error.

InvalidVpcOrVSwitch.NotAvailable

Success

string

Indicates whether the instance was created.

-   true: The instance was created.
    
-   false: The instance failed to be created.
    

true

HttpStatusCode

string

The HTTP status code.

200

ErrorMessage

string

The error message.

null

ErrorCode

string

The error code.

null

**Note**

-   If a parameter verification error occurs, a Data response is still returned. In this case, the value of the Success parameter is false, and the Code and Message parameters are included. Unless an exception is thrown, you can determine whether the call is successful based on the value of Data.Success.
    
-   When you use the latest software development kit (SDK) to call this API operation, a timeout error may be returned. This occurs because the default timeout period of the client in the SDK is different from that of the server. This error can be returned even if the operation was successfully called. To prevent this issue, you can set the ReadTimeout parameter to 20000 before you make the call.
    

![](https://img.alicdn.com/imgextra/i4/O1CN01taNZUk1rjzv6VPthl_!!6000000005668-0-tps-1752-616.jpg)

## Examples

Success response

`JSON` format

```
{
  "RequestId": "9CC37B9F-F4B4-5FF1-939B-AEE78DC70130",
  "Data": {
    "InstanceId": "hgpostcn-cn-xxxxxx",
    "OrderId": "217523224780172",
    "Code": "InvalidVpcOrVSwitch.NotAvailable",
    "Message": "InvalidVpcOrVSwitch.NotAvailable\n",
    "Success": "true"
  },
  "HttpStatusCode": "200",
  "ErrorMessage": "null",
  "ErrorCode": "null"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Hologram/2022-06-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Hologram/2022-06-01/CreateInstance#workbench-doc-change-demo) for a complete list.
