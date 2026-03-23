Queries the detailed information of all Logstash clusters or a specified Logstash cluster.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=elasticsearch&api=ListLogstash&type=ROA&version=2017-06-13)

## Request headers

/openapi/logstashes

## Request syntax

```
GET /openapi/logstashes HTTP/1.1
```

## Request parameters

     

Parameter

Type

Position

Required

Example

Description

page

Integer

Query

No

1

The page number of the returned page. Default value: 1.

size

Integer

Query

No

10

The number of entries to return on each page. Default value: 20.

description

String

Query

No

ls-cn-abc

The name of the instance. You can specify a keyword to match multiple instances. For example, if you query an instance named abc, all the instances named abc, abcde, xyabc, and xabcy may be returned.

instanceId

String

Query

No

ls-cn-n6w1o5jq\*\*\*\*

The ID of the instance.

version

String

Query

No

5.5.3\_with\_X-Pack

The version of the instance.

resourceGroupId

String

Query

No

rg-acfm2h5vbzd\*\*\*\*

The ID of the resource group.

tags

String

Query

No

\[{"tagKey":"key1","tagValue":"value1"}\]

The tag of the instance. Valid values:

## Response parameters

   

Parameter

Type

Example

Description

RequestId

String

AC442F2F-5068-4434-AA21-E78947A9\*\*\*\*

The ID of the request.

Headers

Object

Details of the request header.

X-Total-Count

Integer

10

The number of entries returned per page.

Result

Array of Instance

Detailed information about the matching instances.

paymentType

String

postpaid

The billing method of the instance. Supported: prepaid (subscription) and postpaid (pay-as-you-go).

nodeAmount

Integer

2

The number of data nodes.

description

String

ls-cn-abc

The name of the VPC.

createdAt

String

2018-07-13T03:58:07.253Z

The time when the instance was created.

status

String

active

The state of the instance. Valid values: Normal, Active, Inactive, and Invalid.

updatedAt

String

2018-07-18T10:10:04.484Z

The time when the instance was last updated.

instanceId

String

ls-cn-n6w1o5jq\*\*\*\*

The ID of the instance.

version

String

6.7.0\_with\_X-Pack

The version of the instance. Currently, only 6.7.0\_with\_X-Pack and 7.4.0\_with\_X-Pack are supported.

Tags

Array of tags

The tag of the instance. Valid values:

TagValue

String

dev

The tag value of the cloud disk.

TagKey

String

env

The tag key of the cloud disk.

nodeSpec

Object

The configuration information of the data node.

spec

String

logstash.n4.small

The instance type of the ECS instance.

disk

Integer

50

The disk size of the node.

diskEncryption

Boolean

false

Specifies whether to use disk encryption. Valid values:

-   true: Enables the concurrent query feature for queries other than aggregate queries.
-   false: Disables the concurrent query feature for queries other than aggregate queries.

diskType

String

cloud\_ssd

The type of the disk.

networkConfig

Object

The network configurations.

vpcId

String

vpc-abc

The ID of the VPC.

vsArea

String

cn-hangzhou-\*

The zone where the cluster resides.

type

String

vpc

The network type. Currently, only Virtual Private Cloud (VPC) is supported.

vswitchId

String

vsw-def

The ID of the vSwitch.

The returned data also contains the following parameters.

   

Parameter

Type

Example

Description

enablePublic

Boolean

false

Specifies whether to enable Internet access. Default value: false.

commodityCode

String

elasticsearch\_logstash\_post

The code of the service.

endTime

Long

4749897600000

The last expiration time of the subscription instance.

clusterTasks

Array

\[\]

The task list of the instance.

resourceGroupId

String

rg-acfm2h5vbzd\*\*\*\*

The ID of the resource group to which the instance belongs.

zoneCount

Integer

1

The number of zones in which the Elasticsearch cluster is deployed.

protocol

String

HTTP

The access protocol of the instance.

zoneInfos

Array

The information about the zones.

└zoneId

String

cn-hangzhou-i

The zone ID of the cluster.

└status

String

NORMAL

The status of the zone. Supported: **ISOLATION** (offline) and **NORMAL** (normal).

instanceType

String

logstash

The edition of the instance.

inited

Boolean

true

Indicates whether the instance has been initialized.

config

Array

\[\]

Configure ECS instances.

endpointList

Array

The node information.

└host

String

172.16.xx.xx

The IP address of the node.

└port

Integer

9200

The access port number of the node.

└zoneId

String

cn-hangzhou-i

The zone ID of the node.

**Note** └ indicates a child parameter.

## Examples

Sample requests

```
GET /openapi/logstashes?page=1&size=10&description=ls-cn-abc&instanceId=ls-cn-n6w1o5jq****&version=5.5.3_with_X-Pack&resourceGroupId=rg-acfm2h5vbzd****&tags=[{"tagKey":"key1","tagValue":"value1"}] HTTP/1.1
Host:elasticsearch.aliyuncs.com
Content-Type:application/json
```

Sample success responses

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "Result" : [ {
    "instanceId" : "ls-cn-n6w1o5jq****",
    "version" : "6.7.0_with_X-Pack",
    "description" : "test",
    "nodeAmount" : 1,
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
    "createdAt" : "2020-05-27T01:30:15.947Z",
    "updatedAt" : "2020-05-27T01:40:51.333Z",
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
    "config" : { },
    "endpointList" : [ {
      "host" : "172.16.**.**",
      "port" : 9600,
      "zoneId" : "cn-hangzhou-i"
    } ]
  } ],
  "RequestId" : "918C05D8-4689-4A79-B6D5-D2500991****",
  "Headers" : {
    "X-Total-Count" : 1
  }
}
```

## Error codes

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/elasticsearch).
