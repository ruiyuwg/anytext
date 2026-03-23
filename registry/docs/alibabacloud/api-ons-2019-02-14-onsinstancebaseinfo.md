You can call the OnsInstanceBaseInfo operation to query the basic information about an instance and its endpoints for sending and receiving messages.

## Operation description

**Important** The OpenAPI provided by Alibaba Cloud is a management API that is used to manage and query Alibaba Cloud service resources. Integrate OpenAPI for management purposes only. Do not use OpenAPI for core data links that send and receive messages. This can create security threats to your data links.

Clients connect to ApsaraMQ for RocketMQ through endpoints to send and receive messages. You can call this operation to query the endpoints of an instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ons/2019-02-14/OnsInstanceBaseInfo)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ons/2019-02-14/OnsInstanceBaseInfo)

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

mq:QueryInstanceBaseInfo

get

\*Instance

`acs:mq:{#regionId}:{#accountId}:{#InstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

InstanceId

string

Yes

The ID of the instance to query.

MQ\_INST\_138015630679\*\*\*\*\_BAAy1Hac

## Response elements

**Element**

**Type**

**Description**

**Example**

object

InstanceBaseInfo

object

The instance information object.

Endpoints

object

The endpoints for different protocols.

TcpEndpoint

string

The internal endpoint for the TCP protocol.

http://MQ\_INST\_138015630679\*\*\*\*\_BAAy1Hac.cn-chengdu.mq-internal.aliyuncs.com:8080

TcpInternetEndpoint

string

The public endpoint for the TCP protocol.

-   Only instances in the China (Chengdu), China (Qingdao), and China (Shenzhen) regions support public endpoints for the TCP protocol.
    
-   To use the public endpoint for the TCP protocol, upgrade the client software development kit (SDK) to one of the following versions:
    -   Java SDK for TCP: 2.0.0.Final or later. For more information, see [the Java SDK Version Guide](/help/en/apsaramq-for-rocketmq/release-notes-for-the-sdk-for-java).
        
    -   C++ SDK for TCP: 3.0.0 or later. For more information, see [the C++ SDK Version Guide](/help/en/apsaramq-for-rocketmq/release-notes-for-the-sdk-for-cpp).
        
-   Data transfer costs are incurred when you use the public endpoint for the TCP protocol. For more information, see [Data transfer cost](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/product-overview/internet-traffic-fee).
    

http://MQ\_INST\_138015630679\*\*\*\*\_BAAy1Hac.mq.cn-chengdu.aliyuncs.com:80

HttpInternetEndpoint

string

The public endpoint for the HTTP protocol.

http://138015630679\*\*\*\*.mqrest.cn-chengdu.aliyuncs.com

HttpInternalEndpoint

string

The internal endpoint for the HTTP protocol.

http://138015630679\*\*\*\*.mqrest.cn-chengdu-internal.aliyuncs.com

HttpInternetSecureEndpoint

string

The public endpoint for the HTTPS protocol.

https://138015630679\*\*\*\*.mqrest.cn-chengdu.aliyuncs.com

IndependentNaming

boolean

Indicates whether the instance has a namespace. Valid values:

-   **true**: The instance has an independent namespace. The resource names must be unique within the instance. The resource names can be the same across instances.
    
-   **false**: The instance does not have an independent namespace. The resource names must be globally unique.
    

true

MaxTps

integer

The maximum Transactions Per Second (TPS) for sending and receiving messages. Valid values: 5000, 10000, 20000, 50000, 100000, 200000, 300000, 500000, 800000, and 1000000.

For more information, see the instance purchase page.

**Note**

This parameter is applicable only to ApsaraMQ for RocketMQ Platinum Edition instances.

10000

Remark

string

The remarks on the instance.

ons-cn-m7r1r5f\*\*\*\*

InstanceName

string

The name of the instance.

The name must be 3 to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (\_).

test

ReleaseTime

integer

The time when the Platinum edition instance expires.

1603555200000

TopicCapacity

integer

The maximum number of topics that can be created on the instance. Valid values: 25, 50, 100, 300, and 500.

**Note**

This parameter is applicable only to ApsaraMQ for RocketMQ Platinum Edition instances.

50

InstanceStatus

integer

The status of the instance. Valid values:

-   **0**: The Platinum Edition instance is being deployed.
    
-   **2**: The payment for the Standard Edition instance is overdue.
    
-   **5**: The Standard Edition or Platinum Edition instance is in service.
    
-   **7**: The Platinum Edition instance is being upgraded and is available.
    

5

InstanceId

string

The ID of the instance.

MQ\_INST\_138015630679\*\*\*\*\_BAAy1Hac

InstanceType

integer

The type of the instance. Valid values:

-   **1**: Standard Edition (pay-as-you-go) instance
    
-   **2**: Platinum Edition (subscription) instance
    

For more information about the types and specifications of ApsaraMQ for RocketMQ instances, see [Instance types](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/product-overview/instance-editions).

2

CreateTime

string

The time when the instance was created. The value of this parameter is a UNIX timestamp in milliseconds.

1570701259403

spInstanceId

string

The commodity ID of the instance.

ons-cn-m7r1r5f\*\*\*\*

spInstanceType

integer

The sales type of the instance.

**Valid values:**

-   1 :
    
    Standard Edition (pay-as-you-go) instance
    
-   2 :
    
    Platinum Edition (subscription) instance
    

1

SupportClassic

integer

2

RequestId

string

The common parameter. Each request has a unique ID that you can use to troubleshoot issues.

6CC46974-65E8-4C20-AB07-D20D102E\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "InstanceBaseInfo": {
    "Endpoints": {
      "TcpEndpoint": "http://MQ_INST_138015630679****_BAAy1Hac.cn-chengdu.mq-internal.aliyuncs.com:8080",
      "TcpInternetEndpoint": "http://MQ_INST_138015630679****_BAAy1Hac.mq.cn-chengdu.aliyuncs.com:80",
      "HttpInternetEndpoint": "http://138015630679****.mqrest.cn-chengdu.aliyuncs.com",
      "HttpInternalEndpoint": "http://138015630679****.mqrest.cn-chengdu-internal.aliyuncs.com",
      "HttpInternetSecureEndpoint": "https://138015630679****.mqrest.cn-chengdu.aliyuncs.com"
    },
    "IndependentNaming": true,
    "MaxTps": 10000,
    "Remark": "ons-cn-m7r1r5f****",
    "InstanceName": "test",
    "ReleaseTime": 1603555200000,
    "TopicCapacity": 50,
    "InstanceStatus": 5,
    "InstanceId": "MQ_INST_138015630679****_BAAy1Hac",
    "InstanceType": 2,
    "CreateTime": "1570701259403",
    "spInstanceId": "ons-cn-m7r1r5f****",
    "spInstanceType": 1,
    "SupportClassic": 2
  },
  "RequestId": "6CC46974-65E8-4C20-AB07-D20D102E****"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ons/2019-02-14/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ons/2019-02-14/OnsInstanceBaseInfo#workbench-doc-change-demo) for a complete list.
