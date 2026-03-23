Queries the detailed information of a specified Elasticsearch cluster.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=elasticsearch&api=DescribeInstance&type=ROA&version=2017-06-13)

## Request headers

This operation does not have operation-specific request headers and uses only common request headers. For more information, see the "Common request headers" section of the "Common parameters" topic.

## Syntax

```
GET /openapi/instances/{InstanceId} HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Position**

**Required**

**Example**

**Description**

InstanceId

String

Path

Yes

es-cn-3h4k3axh33th9\*\*\*\*

The ID of instance N.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

RequestId

String

5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1\*\*\*\*

The request ID.

Result

Object

The response parameters.

advancedDedicateMaster

Boolean

true

Indicates whether the cluster contains dedicated master nodes. Valid values:

-   true: The cluster contains client nodes.
-   false: The cluster does not contain client nodes.

protocol

String

HTTP

The communication protocol. Valid values: HTTP and HTTPS.

enableKibanaPublicNetwork

Boolean

true

Indicates whether access to Kibana over the Internet is enabled. Valid values:

-   true: enabled
-   false

nodeAmount

Integer

2

The number of data nodes.

createdAt

String

2018-07-13T03:58:07.253Z

The time when the instance was created.

enableKibanaPrivateNetwork

Boolean

false

Indicates whether access to Kibana over an internal network is enabled. Valid values:

-   true: enabled
-   false

vpcInstanceId

String

vpc-bp1uag5jj38c\*\*\*\*

The VPC ID.

port

Integer

9200

The port number that is used to access the cluster.

enablePublic

Boolean

true

Indicates whether access to the cluster over the Internet is enabled. Valid values:

-   true: enabled
-   false

dedicateMaster

Boolean

false

Indicates whether the cluster contains dedicated master nodes. This parameter is deprecated.

kibanaPort

Integer

5601

The port number that is used to access Kibana.

esConfig

Map

The YML file configuration of the cluster.

resourceGroupId

String

rg-aekzvowej3i\*\*\*\*

The ID of the resource group to which the ALB instance belongs.

paymentType

String

postpaid

The billing method of the cluster. Valid values:

-   prepaid: subscription
-   postpaid: pay-as-you-go

postpaidServiceStatus

String

active

The status of the pay-as-you-go service for the subscription cluster. Valid values:

-   active: normal
-   closed: closed
-   indebt: being frozen due to an overdue payment

esVersion

String

6.3.2\_with\_X-Pack

The version of the instance.

haveKibana

Boolean

true

Indicates whether the cluster contains Kibana nodes. Valid values:

-   true: The cluster contains client nodes.
-   false: The cluster does not contain client nodes.

isNewDeployment

Boolean

true

Indicates whether the cluster is deployed in the new architecture.

warmNode

Boolean

true

Indicates whether warm nodes are enabled for the cluster. Valid values:

-   true: enabled
-   false

updatedAt

String

2018-07-13T03:58:07.253Z

The time when the instance was last updated.

instanceId

String

es-cn-3h4k3axh33th9\*\*\*\*

The instance ID.

zoneCount

Integer

2

The number of zones.

publicDomain

String

es-cn-3h4k3axh33th9\*\*\*\*.elasticsearch.aliyuncs.com

The public endpoint of the cluster.

status

String

active

The status of the instance. Valid values:

-   active: The cluster is in a normal state.
-   activating: The cluster is being initialized.
-   inactive: The cluster is frozen.
-   invalid: The cluster does not exist or cannot be accessed. In this case, some fields in the response may be missing, such as domain and kibanaDomain.
-   unknown: The cluster does not exist or cannot be accessed. In this case, some fields in the response may be missing, such as domain and kibanaDomain.

serviceVpc

Boolean

true

Indicates whether the VPC is within the Elasticsearch service account.

publicPort

Integer

9200

The port number that is used to access the cluster over the Internet.

haveClientNode

Boolean

true

Indicates whether the cluster contains client nodes. Valid values:

-   true: The cluster contains client nodes.
-   false: The cluster does not contain client nodes.

domain

String

es-cn-3h4k3axh33th9\*\*\*\*.elasticsearch.aliyuncs.com

The internal endpoint of the cluster.

description

String

es-cn-abc

The instance name.

kibanaDomain

String

es-cn-3h4k3axh33th9\*\*\*\*.kibana.elasticsearch.aliyuncs.com

The endpoint of Kibana.

dictList

Array of DictList

The configurations of IK dictionaries.

fileSize

Long

2782602

The size of the dictionary file. Unit: bytes.

sourceType

String

ORIGIN

The source type of the dictionary file. Valid values:

-   OSS: OSS. You must make sure that the ACL of the related OSS bucket is public read.
-   ORIGIN: open source Elasticsearch.
-   UPLOAD: uploaded file.

name

String

SYSTEM\_MAIN.dic

The name of the dictionary file.

type

String

MAIN

The type of the dictionary. Valid values:

-   STOP: stopword list
-   MAIN: main dictionary
-   SYNONYMS: synonym dictionary
-   ALI\_WS: Alibaba Cloud dictionary

synonymsDicts

Array of SynonymsDicts

The configurations of synonym dictionaries.

fileSize

Long

2782602

The size of the dictionary file. Unit: byte.

sourceType

String

ORIGIN

The source type.

name

String

SYSTEM\_MAIN.dic

The name of the dictionary file.

type

String

STOP

The type of the dictionary. Valid values:

-   STOP: stopword list
-   MAIN: main dictionary
-   SYNONYMS: synonym dictionary
-   ALI\_WS: Alibaba Cloud dictionary

zoneInfos

Array of ZoneInfo

The information about the zone.

status

String

NORMAL

The zone status. Valid values:

-   ISOLATION: disabled
-   NORMAL: normal

zoneId

String

cn-hangzhou-b

The ID of the zone.

aliwsDicts

Array of Dict

The configurations of Alibaba Cloud IK dictionaries.

fileSize

Long

2782602

The size of the dictionary file. Unit: byte.

sourceType

String

OSS

The source type of the dictionary file. Valid values:

-   OSS: OSS. You must make sure that the ACL of the related OSS bucket is public read.
-   ORIGIN: open source Elasticsearch.
-   UPLOAD: uploaded file.

name

String

aliws\_ext\_dict.txt

The name of the dictionary file.

type

String

ALI\_WS

The type of the dictionary. Valid values:

-   STOP: stopword list
-   MAIN: main dictionary
-   SYNONYMS: synonym dictionary
-   ALI\_WS: Alibaba Cloud dictionary

tags

Array of Tag

The tags of the instance. Each tag is a key-value pair.

tagKey

String

env

The tag key.

tagValue

String

dev

The tag value.

esIPWhitelist

Array of String

\[ "0.0.0.0/0" \]

The private IP address whitelist. This parameter is deprecated.

extendConfigs

Array of Object

\[{ "configType": "aliVersion","aliVersion": "ali1.3.0" }\]

The extended configurations of the instance.

privateNetworkIpWhiteList

Array of String

0.0.0.0/0

The IP address whitelist of the instance.

publicIpWhitelist

Array of String

\[ "0.0.0.0/0" \]

The public endpoint access whitelist of the instance.

kibanaPrivateIPWhitelist

Array of String

\["192.168.XX.XX"\]

The list of private IP addresses in the whitelist of Kibana.

esIPBlacklist

Array of String

\[ "0.0.0.0/0" \]

The private network access blacklist (abandoned).

kibanaIPWhitelist

Array of String

\[ "0.0.0.0/0" \]

Kibana public endpoint access whitelist list.

nodeSpec

Object

The configurations of data nodes.

spec

String

elasticsearch.n4.small

The specification category. For more information, see [Product specifications](/help/en/es/product-overview/node-specifications).

disk

Integer

0

The storage capacity. Unit: GB.

diskEncryption

Boolean

true

Indicates whether disk encryption is enabled. Valid values:

-   true
-   false

diskType

String

cloud\_ssd

The disk category of the node. Valid values:

-   cloud\_ssd: standard SSD
-   cloud\_efficiency: ultra disk

performanceLevel

String

PL1

The performance level (PL) of the ESSD. This parameter is returned if the value of diskType is cloud\_essd. Valid values: PL1, PL2, and PL3.

specInfo

String

1C 2G

node specifications Description

networkConfig

Object

The network type.

vpcId

String

vpc-abc

The ID of the virtual private cloud (VPC).

vsArea

String

cn-hangzhou-b

The zone where the cluster resides.

type

String

vpc

The network type. Only the VPC is supported.

vswitchId

String

vsw-abc

The vSwitch ID.

whiteIpGroupList

Array of whiteIpGroupList

The list of whitelists.

whiteIpType

String

PRIVATE\_ES

The type of the whitelist. Valid values:

-   PRIVATE\_ES: private IP address whitelist for Elasticsearch
-   PUBLIC\_ES: public IP address whitelist for Elasticsearch
-   PRIVATE\_KIBANA: private IP address whitelist for Kibana
-   PUBLIC\_KIBANA: public IP address whitelist for Kibana

groupName

String

default

The name of the whitelist group. By default, the default whitelist is included.

ips

Array of String

\["0.0.0.0", "127.0.XX.XX"\]

The IP addresses in the IP address whitelist.

kibanaConfiguration

Object

The configurations of Kibana nodes.

amount

Integer

1

The number of nodes.

spec

String

elasticsearch.n4.small

The specification category. For more information, see [Product specifications](/help/en/es/product-overview/node-specifications).

disk

Integer

20

The storage capacity of each node. Unit: GB.

specInfo

String

1C 2G

node specifications Description

masterConfiguration

Object

The configurations of dedicated master nodes.

spec

String

elasticsearch.n4.small

The specification category. For more information, see [Product specifications](/help/en/es/product-overview/node-specifications).

amount

Integer

3

The number of nodes.

disk

Integer

40

The storage capacity. Unit: GB.

diskType

String

cloud\_ssd

The storage type. Only cloud\_ssd is supported.

specInfo

String

1C 2G

node specifications Description

clientNodeConfiguration

Object

The configurations of client nodes.

spec

String

elasticsearch.n4.small

The specification category. For more information, see [Product specifications](/help/en/es/product-overview/node-specifications).

amount

Integer

3

The number of nodes.

disk

Integer

40

The storage capacity. Unit: GB.

diskType

String

cloud\_efficiency

The storage type. Only cloud\_efficiency is supported.

specInfo

String

1C 2G

node specifications Description

warmNodeConfiguration

Object

The configurations of warm nodes.

amount

Integer

6

The number of nodes.

spec

String

elasticsearch.n4.small

The specification category. For more information, see [Product specifications](/help/en/es/product-overview/node-specifications).

disk

Integer

500

The storage capacity. Unit: GB.

diskEncryption

Boolean

true

Specifies whether to enable disk encryption. Valid values:

-   true: enabled
-   false

diskType

String

cloud\_efficiency

The storage type. Only cloud\_efficiency is supported.

specInfo

String

1C 2G

node specifications Description

advancedSetting

Object

The advanced configurations.

gcName

String

CMS

The name of the garbage collector (GC). Valid values: CMS and G1.

elasticDataNodeConfiguration

Object

The configurations of elastic nodes.

amount

Integer

3

The number of nodes.

spec

String

elasticsearch.sn2ne.large

The specification category. For more information, see [Product specifications](/help/en/es/product-overview/node-specifications).

disk

Integer

20

The storage capacity. Unit: GB.

diskEncryption

Boolean

true

Indicates whether disk encryption is enabled. Valid values:

-   true
-   false

diskType

String

cloud\_ssd

The storage type. Valid values:

-   cloud\_ssd: standard SSD
-   cloud\_essd: Enhanced SSD (ESSD)
-   cloud\_efficiency: ultra disk.

specInfo

String

1C 2G

The description of the node specifications.

ikHotDicts

Array of ikHotDicts

The configurations of rolling updates for IK dictionaries.

type

String

MAIN

The type of the dictionary that you want to update. Valid values:

-   MAIN: IK main dicrionary
-   STOP: IK stopword list

sourceType

String

OSS

The source type of the dictionary file. Valid values:

-   OSS
-   ORIGIN

fileSize

Integer

6

The size of the dictionary file. Unit: bytes.

name

String

deploy\_0.dic

The name of the dictionary file.

instanceCategory

String

advanced

The edition of the Elasticsearch cluster. The returned values are as follows:

-   x-pack: Standard Edition
-   advanced/IS: Enhanced Edition
-   community: Basic Edition

endtime

Long

1715826092044

The time when the cache reserve instance expires.

archType

String

public

Deployment mode, architecture type:

exclusive: basic management

public: cloud-native new control

kibanaPrivateDomain

String

es-cn-x0r3\*\*\*\*\*\*\*\*\*.elasticsearch.aliyuncs.com

Private endpoint of Kibana

kibanaPrivatePort

String

5601

Private port of Kibana

**Note** In the following return example, this article only ensures that the parameters in the returned data list are included, and the parameters that are not mentioned are for reference only. The program cannot be forced to rely on to obtain these parameters.

## Examples

Sample requests

```
GET /openapi/instances/es-cn-3h4k3axh33th9**** HTTP/1.1
Host:elasticsearch.aliyuncs.com
Content-Type:application/json
```

Sample success responses

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "Result" : {
    "instanceId" : "es-cn-3h4k3axh33th9****",
    "domain" : "es-cn-3h4k3axh33th9****.elasticsearch.aliyuncs.com",
    "description" : "es-cn-3h4k3axh33th9****",
    "nodeAmount" : 2,
    "paymentType" : "postpaid",
    "status" : "active",
    "port" : 9200,
    "esVersion" : "6.3.2_with_X-Pack",
    "archType" : "exclusive",
    "instanceCategory" : "x-pack",
    "esConfig" : {
      "action.destructive_requires_name" : "true",
      "xpack.security.audit.outputs" : "index",
      "xpack.watcher.enabled" : "false",
      "xpack.security.audit.enabled" : "false",
      "action.auto_create_index" : "+.*,-*"
    },
    "esIPWhitelist" : [ "0.0.0.0/0" ],
    "esIPBlacklist" : [ ],
    "privateNetworkIpWhiteList" : [ "0.0.0.0/0" ],
    "kibanaIPWhitelist" : [ "0.0.0.0/0", "::/0" ],
    "publicIpWhitelist" : [ ],
    "kibanaDomain" : "es-cn-3h4k3axh33th9****.kibana.elasticsearch.aliyuncs.com",
    "kibanaPort" : 5601,
    "enablePublic" : false,
    "haveKibana" : true,
    "nodeSpec" : {
      "spec" : "elasticsearch.sn1ne.large",
      "disk" : 21,
      "diskType" : "cloud_ssd"
    },
    "serviceVpc" : true,
    "networkConfig" : {
      "vpcId" : "vpc-bp13n1j3fcv1cqfkg****",
      "vswitchId" : "vsw-bp12q2vrqvko0ilg8****",
      "vsArea" : "cn-hangzhou-h",
      "type" : "vpc",
      "whiteIpGroupList" : [ {
        "groupName" : "default",
        "whiteIpType" : "PRIVATE_ES",
        "ips" : [ "0.0.0.0", "127.0.XX.XX" ]
      } ]
    },
    "createdAt" : "2019-08-28T07:48:59.736Z",
    "updatedAt" : "2019-08-28T08:11:33.229Z",
    "inited" : true,
    "dedicateMaster" : false,
    "advancedDedicateMaster" : false,
    "masterConfiguration" : { },
    "haveClientNode" : true,
    "warmNode" : true,
    "warmNodeConfiguration" : {
      "spec" : "elasticsearch.ic5.large",
      "amount" : 2,
      "diskType" : "cloud_efficiency",
      "disk" : 500,
      "diskEncryption" : true
    },
    "clientNodeConfiguration" : {
      "spec" : "elasticsearch.ic5.large",
      "amount" : 2,
      "diskType" : "cloud_efficiency",
      "disk" : 20
    },
    "kibanaConfiguration" : {
      "spec" : "elasticsearch.n4.small",
      "amount" : 1,
      "disk" : 0
    },
    "commodityCode" : "elasticsearch",
    "endTime" : 4722681600000,
    "dictList" : [ {
      "name" : "SYSTEM_MAIN.dic",
      "fileSize" : 2782602,
      "type" : "MAIN",
      "sourceType" : "ORIGIN"
    }, {
      "name" : "SYSTEM_STOPWORD.dic",
      "fileSize" : 132,
      "type" : "STOP",
      "sourceType" : "ORIGIN"
    } ],
    "synonymsDicts" : [ ],
    "ikHotDicts" : [ ],
    "aliwsDicts" : [ ],
    "clusterTasks" : [ ],
    "vpcInstanceId" : "es-cn-3h4k3axh33th9****-worker",
    "resourceGroupId" : "rg-acfm3ghp32r****",
    "zoneCount" : 1,
    "protocol" : "HTTP",
    "haveGrafana" : false,
    "haveCerebro" : false,
    "zoneInfos" : [ {
      "zoneId" : "cn-hangzhou-h",
      "status" : "NORMAL"
    } ],
    "enableKibanaPublicNetwork" : true,
    "advancedSetting" : {
      "gcName" : "CMS"
    }
  },
  "RequestId" : "68104CC2-DA27-446D-8049-A024F0D4EFEC"
}
```

## Error codes

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/elasticsearch).
