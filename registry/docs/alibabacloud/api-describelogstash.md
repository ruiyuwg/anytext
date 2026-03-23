Queries the detailed information of a specified Logstash cluster.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=elasticsearch&api=DescribeLogstash&type=ROA&version=2017-06-13)

## Request headers

This operation uses only common request headers. For more information, see Common request headers.

## Request syntax

```
GET /openapi/logstashes/{InstanceId} HTTP/1.1
```

## Request parameters

     

Parameter

Type

Position

Required

Example

Description

InstanceId

String

Path

Yes

ls-cn-s9dsk3k4k\*\*\*\*

The ID of instance.

## Response parameters

   

Parameter

Type

Example

Description

RequestId

String

C9334241-4837-46C2-B24B-9BDC517318DE

The ID of the request.

Result

Object

Detailed information about the instance.

config

Map

The configurations of the instance.

paymentType

String

prepaid

The billing method of the instance. Valid values:

-   prepaid: subscription
-   postpaid: pay-as-you-go

ResourceGroupId

String

rg-aekzvowej3i\*\*\*\*

The ID of the resource group to which the instance belongs.

nodeAmount

Integer

2

The number of data nodes.

description

String

ls-cn-abc

The name of the instance.

createdAt

String

2020-02-06T14:12:03.672Z

The time when the instance was created.

status

String

active

The state of the instance. Four states are supported:

-   Normal: active
-   Active: activating
-   Freeze: inactive
-   Invalid: invalid

vpcInstanceId

String

vpc-bp16k1dvzxtmagcva\*\*\*\*

The ID of the virtual private cloud (VPC) to which the elastic container instances belong.

updatedAt

String

2020-02-06T14:22:36.850Z

The time when the instance was last updated.

version

String

7.4.0\_with\_X-Pack

The edition of the dedicated KMS instance.

instanceId

String

ls-cn-abc

The ID of the instance.

endpointList

Array of endpoint

The access information of the node.

zoneId

String

cn-hangzhou-b

The ID of the zone where the node resides.

port

String

9600

The port number.

host

String

172.16.\*\*.\*\*

The IP address of the node.

Tags

Array of tags

The tags added to the ALB instance.

tagKey

String

env

The key of the tag.

tagValue

String

dev

The value of the tag.

ZoneInfos

Array of zoneInfos

The information about the zones.

status

String

NORMAL

The status of the zone. Valid values:

-   ISOLATION: offline
-   NORMAL

zoneId

String

cn-hangzhou-b

The zone ID of the new instance.

ExtendConfigs

Array of Object

\[{ "configType": "aliVersion","aliVersion": "ali1.3.0" }\]

The configuration of cluster extension parameters.

nodeSpec

Object

The configuration information of the node.

spec

String

elasticsearch.sn1ne.large

The specifications of the node.

disk

Integer

20

The disk size of the node.

diskEncryption

Boolean

true

Whether to use disk encryption:

-   true
-   false

diskType

String

cloud\_ssd

The disk type of the node.

networkConfig

Object

The network configurations.

vpcId

String

vpc-bp16k1dvzxtmagcva\*\*\*\*

The ID of the virtual private cloud (VPC).

vsArea

String

cn-hangzhou-\*

The zone where the cluster resides.

type

String

vpc

The network type of the instance. Valid values: Currently, only Virtual Private Cloud (VPC) are supported.

vswitchId

String

vsw-bp1k4ec6s7sjdbudw\*\*\*\*

The ID of the vSwitch to which the instance is connected.

For more information, see [ListLogstash](/help/en/es/developer-reference/api-listlogstash).

## Examples

Sample requests

```
GET /openapi/logstashes/ls-cn-s9dsk3k4k**** HTTP/1.1
Host:elasticsearch.aliyuncs.com
Content-Type:application/json
```

Sample responses

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "Result" : {
    "instanceId" : "ls-cn-m7r1o6cl****",
    "version" : "6.7.0_with_X-Pack",
    "description" : "ls-cn-abc",
    "nodeAmount" : 2,
    "paymentType" : "postpaid",
    "status" : "active",
    "enablePublic" : false,
    "nodeSpec" : {
      "spec" : "elasticsearch.sn1ne.large",
      "disk" : 20,
      "diskType" : "cloud_ssd"
    },
    "networkConfig" : {
      "vpcId" : "vpc-bp16k1dvzxtmagcva****",
      "vswitchId" : "vsw-bp1k4ec6s7sjdbudw****",
      "vsArea" : "cn-hangzhou-i",
      "type" : "vpc"
    },
    "createdAt" : "2020-05-27T11:53:43.104Z",
    "updatedAt" : "2020-05-27T11:53:43.104Z",
    "commodityCode" : "elasticsearch_logstash_post",
    "extendConfigs" : [ ],
    "endTime" : 4746268800000,
    "clusterTasks" : [ ],
    "resourceGroupId" : "rg-acfm2h5vbzd****",
    "zoneCount" : 1,
    "protocol" : "HTTP",
    "zoneInfos" : [ {
      "zoneId" : "cn-hangzhou-i",
      "status" : "NORMAL"
    } ],
    "instanceType" : "logstash",
    "inited" : true,
    "tags" : [ ],
    "config" : {
      "slowlog.threshold.warn" : "2s",
      "slowlog.threshold.info" : "1s",
      "slowlog.threshold.debug" : "500ms",
      "slowlog.threshold.trace" : "100ms"
    },
    "endpointList" : [ {
      "host" : "172.16.**.**",
      "port" : 9600,
      "zoneId" : "cn-hangzhou-i"
    }, {
      "host" : "172.16.**.**",
      "port" : 9600,
      "zoneId" : "cn-hangzhou-i"
    } ]
  },
  "RequestId" : "C9334241-4837-46C2-B24B-9BDC517318DE"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/elasticsearch).
