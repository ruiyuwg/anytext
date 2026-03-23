You can call this operation to UpdatePublicWhiteIps the public endpoint access whitelist of a specified Elasticsearch instance.

## Usage notes

-   If the instance is in the Activating, Invalid, or Inactive state, the public endpoint whitelist of the instance cannot be updated.
-   You can update the whitelist in two ways: IP address whitelist list and IP address whitelist group. The two methods cannot be used at the same time. In addition to InstanceId and clientToken, the two methods support different parameters, as follows:
    -   IP address whitelist list: publicIpWhitelist
    -   IP address whitelist groups: modifyMode and whiteIpGroup
-   Public network access whitelists do not support configuring private IP addresses. Private network access whitelists do not support configuring public IP addresses.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=elasticsearch&api=UpdatePublicWhiteIps&type=ROA&version=2017-06-13)

## Request headers

This operation uses only common request headers. For more information, refer to the documentation of common request parameters.

## Request syntax

```
PATCHPOST /openapi/instances/{InstanceId}/public-white-ips HTTP/1.1
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

es-cn-tl329rbpc0001\*\*\*\*

The ID of the instance.

clientToken

String

Query

No

5A2CFF0E-5718-45B5-9D4D-70B3FF\*\*\*\*

The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

modifyMode

String

Query

No

Cover

The modification method. Valid values:

-   Cover (default): overwrites the original IP address whitelist with the value of the ips parameter.
-   Append: Add the IP addresses entered in the ips parameter to the original IP address whitelist.
-   Delete: Delete the IP addresses entered in the ips parameter from the original IP address whitelist. You must retain at least one IP address.

## RequestBody

    

Property

Type

Required

Example

Description

publicIpWhitelist

List<String>

Yes

\["0.0.0.0/0","0.0.0.0/1"\]

The list of IP address whitelists. This parameter is available if whiteIpGroup is left empty. The value of this parameter updates the IP address whitelist configurations in the Default whitelist group.

You cannot configure both publicIpWhitelist and whiteIpGroup.

whiteIpGroup

Object

No

You can update the whitelist configurations of an instance by using a whitelist group. You can update only one whitelist group.

You cannot configure both publicIpWhitelist and whiteIpGroup.

└ groupName

String

No

test\_group\_name

The group name of the whitelist group. This parameter is required if the whiteIpGroup parameter is optional.

└ ips

List<String>

No

\["0.0.0.0", "10.2.XX.XX"\]

The list of IP addresses in the whitelist group. This parameter is required if the whiteIpGroup parameter is optional.

**Notice** The addition and deletion of whitelist groups are implemented by calling modifyMode to Cover. Delete and Append cannot add or delete whitelist groups at the same time. You can only modify the IP address list in the whitelist group. Take note of the following items:

-   If the modifyMode parameter is set to Cover, the whitelist group is deleted if ips is empty. If groupName is not in the list of existing whitelist group names, a whitelist group is created.
-   If the modifyMode parameter is set to Delete, you must retain at least one IP address for the deleted ips.
-   If the modifyMode parameter is set to Append, make sure that the whitelist group name has been created. Otherwise, the NotFound error message appears.

## Response parameters

   

Parameter

Type

Example

Description

RequestId

String

C82758DD-282F-4D48-934F-92170A33\*\*\*\*

The ID of the request.

Result

Object

The results that are returned.

publicIpWhitelist

Array of String

\["0.0.0.0","10.2.XX.XX","110.0.XX.XX/8"\]

The IP addresses in the public network whitelist.

**Note** In the following example, only the parameters in the returned data list are guaranteed to be included. The parameters that are not mentioned are for reference only. For more information about the parameters, see [ListInstance](/help/en/es/developer-reference/api-listinstance). You cannot force a dependency in a program to get these parameters.

## Example

Sample request

```
PATCH /openapi/instances/es-cn-tl329rbpc0001****/public-white-ips HTTP/1.1
Host:elasticsearch.aliyuncs.com
Content-Type:application/json
{
    "publicIpWhitelist": [
        "110.0.XX.XX/8"
    ]
}
or
{
    "whiteIpGroup": {
        "groupName": "test_group_name", 
        "ips": [
            "0.0.0.0", 
            "10.2.XX.XX"
        ]
    }
}
```

Sample success responses

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "Result" : {
    "instanceId" : "es-cn-tl329rbpc0001****",
    "version" : "7.10.0_with_X-Pack",
    "description" : "test",
    "nodeAmount" : 0,
    "paymentType" : "postpaid",
    "status" : "active",
    "privateNetworkIpWhiteList" : [ "11.22.XX.XX", "0.0.XX.XX/0" ],
    "enablePublic" : true,
    "nodeSpec" : { },
    "dataNode" : false,
    "networkConfig" : {
      "vpcId" : "vpc-bp1jy348ibzulk6h***",
      "vswitchId" : "vsw-bp1a0mifpletdd1da****",
      "vsArea" : "cn-hangzhou-h",
      "whiteIpGroupList" : [ {
        "groupName" : "default",
        "ips" : [ "0.0.XX.XX/0", "11.22.XX.XX" ],
        "whiteIpType" : "PRIVATE_ES"
      }, {
        "groupName" : "default",
        "ips" : [ "110.0.XX.XX/9" ],
        "whiteIpType" : "PUBLIC_KIBANA"
      }, {
        "groupName" : "default",
        "ips" : [ "192.168.XX.XX/24" ],
        "whiteIpType" : "PRIVATE_KIBANA"
      }, {
        "groupName" : "default",
        "ips" : [ "110.0.XX.XX/8" ],
        "whiteIpType" : "PUBLIC_ES"
      }, {
        "groupName" : "test_group_name",
        "ips" : [ "0.0.0.0", "10.2.XX.XX" ],
        "whiteIpType" : "PUBLIC_ES"
      } ],
      "type" : "vpc"
    },
    "createdAt" : "2021-07-21T01:29:38.510Z",
    "updatedAt" : "2021-07-21T06:40:32.438Z",
    "commodityCode" : "elasticsearch",
    "extendConfigs" : [ {
      "configType" : "usageScenario",
      "value" : "log"
    }, {
      "configType" : "maintainTime",
      "maintainStartTime" : "02:00Z",
      "maintainEndTime" : "06:00Z"
    }, {
      "configType" : "aliVersion",
      "aliVersion" : "ali1.4.0"
    }, {
      "configType" : "followCube",
      "followClusterEnabled" : true
    } ],
    "endTime" : 4782556800000,
    "clusterTasks" : [ ],
    "vpcInstanceId" : "es-cn-tl329rbpc0001****-worker",
    "resourceGroupId" : "rg-acfmxxkk2p7****",
    "zoneCount" : 1,
    "protocol" : "HTTP",
    "zoneInfos" : [ {
      "zoneId" : "cn-hangzhou-h",
      "status" : "NORMAL"
    } ],
    "instanceType" : "elasticsearch",
    "inited" : true,
    "tags" : [ {
      "tagKey" : "acs:rm:rgId",
      "tagValue" : "rg-acfmxxkk2p7****"
    } ],
    "serviceVpc" : true,
    "domain" : "es-cn-tl329rbpc0001****.elasticsearch.aliyuncs.com",
    "port" : 9200,
    "esVersion" : "7.10.0_with_X-Pack",
    "esConfig" : {
      "action.destructive_requires_name" : "true",
      "xpack.watcher.enabled" : "false",
      "action.auto_create_index" : "+.*,-*"
    },
    "esIPWhitelist" : [ "11.22.XX.XX", "0.0.XX.XX/0" ],
    "esIPBlacklist" : [ ],
    "kibanaProtocol" : "HTTPS",
    "kibanaIPWhitelist" : [ "::1", "110.0.XX.XX/9" ],
    "kibanaPrivateIPWhitelist" : [ "192.168.XX.XX/24" ],
    "publicIpWhitelist" : [ "0.0.0.0", "10.2.XX.XX", "110.0.XX.XX/8" ],
    "kibanaDomain" : "es-cn-tl329rbpc0001****.kibana.elasticsearch.aliyuncs.com",
    "kibanaPort" : 5601,
    "kibanaPrivateDomain" : "es-cn-tl329rbpc0001****-kibana.internal.elasticsearch.aliyuncs.com",
    "kibanaPrivatePort" : 5601,
    "publicPort" : 9200,
    "publicDomain" : "es-cn-tl329rbpc0001****.public.elasticsearch.aliyuncs.com",
    "haveKibana" : true,
    "instanceCategory" : "IS",
    "dedicateMaster" : false,
    "advancedDedicateMaster" : false,
    "masterConfiguration" : { },
    "haveClientNode" : false,
    "warmNode" : true,
    "warmNodeConfiguration" : {
      "spec" : "elasticsearch.d1.2xlarge",
      "amount" : 3
    },
    "clientNodeConfiguration" : { },
    "kibanaConfiguration" : {
      "spec" : "elasticsearch.n4.small",
      "amount" : 1,
      "disk" : 0
    },
    "elasticDataNodeConfiguration" : { },
    "haveElasticDataNode" : false,
    "dictList" : [ {
      "name" : "SYSTEM_MAIN.dic",
      "fileSize" : 2782602,
      "sourceType" : "ORIGIN",
      "type" : "MAIN"
    }, {
      "name" : "SYSTEM_STOPWORD.dic",
      "fileSize" : 132,
      "sourceType" : "ORIGIN",
      "type" : "STOP"
    } ],
    "synonymsDicts" : [ ],
    "ikHotDicts" : [ ],
    "aliwsDicts" : [ ],
    "haveGrafana" : false,
    "haveCerebro" : false,
    "enableKibanaPublicNetwork" : true,
    "enableKibanaPrivateNetwork" : true,
    "advancedSetting" : {
      "gcName" : "CMS"
    },
    "enableMetrics" : true,
    "readWritePolicy" : {
      "writeHa" : false
    }
  },
  "RequestId" : "9E5466DE-E29A-4F87-9019-4AA7B80E60DE"
}
```

## Error codes

   

HttpCode

Error code

Error message

Description

400

InstanceActivating

Instance is activating.

The instance is currently in effect.

400

InstanceNotFound

The instanceId provided does not exist.

The error message returned because the instance cannot be found. Check the instance status.

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/elasticsearch).
