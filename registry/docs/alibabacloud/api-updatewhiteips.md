Updates the private IP address whitelist of a specified Elasticsearch cluster.

## Usage notes

-   If the instance is in the Activating, Invalid, or Inactive state, the information cannot be updated.
-   You can update the whitelist in two ways: IP address whitelist list and IP address whitelist group. The two methods cannot be used at the same time. In addition to InstanceId and clientToken, the two methods support different parameters, as follows:
    -   IP address whitelist: esIPWhitelist
    -   IP address whitelist groups: modifyMode and whiteIpGroup
-   Public network access whitelists do not support configuring private IP addresses. Private network access whitelists do not support configuring public IP addresses.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=elasticsearch&api=UpdateWhiteIps&type=ROA&version=2017-06-13)

## Request headers

This operation uses only common request headers. For more information, refer to the documentation of common request parameters.

## Request syntax

```
PATCHPOST /openapi/instances/{InstanceId}/white-ips HTTP/1.1
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

es-cn-npk2154oi000b\*\*\*\*

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

-   Cover (default): Use the value of the ips parameter to overwrite the IP addresses of the original whitelist.
-   Append: Add the IP address entered in the ips parameter to the IP address of the original whitelist.
-   Delete: deletes the IP addresses entered in the ips parameter from the IP addresses in the original whitelist. You must retain at least one IP address.

Object

Body

No

The information about the request body.

esIPWhitelist

Array of String

Body

No

\["10.61.xx.xx", "106.11.xx.xx”\]

The list of IP address whitelists. This parameter is available if whiteIpGroup is left empty. The value of this parameter updates the IP address whitelist configurations in the Default whitelist group.

**Notice** You cannot configure both esIPWhitelist and whiteIpGroup.

whiteIpGroup

Object

Body

No

You can update the whitelist configurations of an instance by using a whitelist group. You can update only one whitelist group.

**Notice** You cannot configure both esIPWhitelist and whiteIpGroup.

groupName

String

Body

No

test\_group

The group name of the whitelist group. This parameter is required if the whiteIpGroup parameter is optional.

ips

Array of String

Body

No

\["10.2.xx.xx", "10.3.xx.xx"\]

The list of IP addresses in the whitelist group. This parameter is required if the whiteIpGroup parameter is optional.

whiteIpType

String

Body

No

PRIVATE\_ES

The type of the IP address whitelist. The value is fixed to **PRIVATE\_ES**, that is, the private network access whitelist.

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

8D58B014-BBD7-4D80-B219-00B9D5C6860C

The ID of the request.

Result

Object

The results that are returned.

esIPWhitelist

Array of String

\["106.11.xx.xx", "10.61.xx.xx"\]

The updated whitelist list.

networkConfig

Object

The network configurations.

whiteIpGroupList

Array of whiteIpGroupList

The list of whitelists.

groupName

String

test\_group

The group name of the whitelist group. The default group is included by default.

ips

Array of String

\["10.2.xx.xx", "10.3.xx.xx"\]

The list of IP addresses in the whitelist group.

whiteIpType

String

PRIVATE\_ES

The type of the whitelist. This parameter is set to PRIVATE\_ES.

**Note** In the following return example, only the parameters in the return data list are guaranteed to be included. The parameters that are not mentioned are for reference only. For more information about the parameters, see [ListInstance](/help/en/es/developer-reference/api-listinstance). You cannot force a dependency in a program to get these parameters.

## Example

Sample request

```
PATCH /openapi/instances/es-cn-npk2154oi000b****/white-ips HTTP/1.1
Host:elasticsearch.aliyuncs.com
Content-Type:application/json
{
    "esIPWhitelist": [
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
        ],
        "whiteIpType" : "PRIVATE_ES"
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
    "instanceId" : "es-cn-xxx",
    "domain" : "es-cn-xxx.elasticsearch.aliyuncs.com",
    "description" : "aliyunes_name_test",
    "nodeAmount" : 3,
    "paymentType" : "postpaid",
    "status" : "active",
    "port" : 9200,
    "esVersion" : "5.5.3_with_X-Pack",
    "esConfig" : {
      "action.destructive_requires_name" : "true",
      "xpack.security.audit.outputs" : "index",
      "xpack.watcher.enabled" : "false",
      "xpack.security.audit.enabled" : "true",
      "action.auto_create_index" : "+.*,-*"
    },
    "esIPWhitelist" : [ "192.168.xx.xx/24" ],
    "esIPBlacklist" : [ ],
    "privateNetworkIpWhiteList" : [ "192.168.xx.xx/24" ],
    "kibanaIPWhitelist" : [ "0.0.0.0/0", "::/0" ],
    "publicIpWhitelist" : [ ],
    "kibanaDomain" : "es-cn-xxx.kibana.elasticsearch.aliyuncs.com",
    "kibanaPort" : 5601,
    "enablePublic" : false,
    "nodeSpec" : {
      "spec" : "elasticsearch.n4.small",
      "disk" : 20,
      "diskType" : "cloud_ssd"
    },
    "networkConfig" : {
      "vpcId" : "vpc-bp1uag5jj38ccmwn1****",
      "vswitchId" : "vsw-bp1knt7m4cyn5k3a7****",
      "vsArea" : "cn-hangzhou-b",
      "type" : "vpc",
      "whiteIpGroupList" : [ {
        "groupName" : "default",
        "ips" : [ "0.0.0.0", "10.2.xx.xx" ]
      }, {
        "groupName" : "test_group_name",
        "ips" : [ "10.2.xx.xx" ]
      } ]
    },
    "createdAt" : "2019-01-17T09:22:45.888Z",
    "updatedAt" : "2019-03-15T13:21:20.728Z",
    "inited" : true,
    "dedicateMaster" : false,
    "advancedDedicateMaster" : false,
    "masterConfiguration" : { },
    "haveClientNode" : false,
    "warmNode" : false,
    "warmNodeConfiguration" : { },
    "clientNodeConfiguration" : { },
    "kibanaConfiguration" : {
      "spec" : "elasticsearch.n4.small",
      "amount" : 1,
      "disk" : 0
    },
    "commodityCode" : "elasticsearch",
    "endTime" : 4703414400000,
    "dictList" : [ {
      "name" : "SYSTEM_MAIN",
      "fileSize" : 3058510,
      "type" : "MAIN",
      "sourceType" : "ORIGIN"
    }, {
      "name" : "SYSTEM_STOPWORD",
      "fileSize" : 164,
      "type" : "STOP",
      "sourceType" : "ORIGIN"
    } ],
    "synonymsDicts" : [ ],
    "ikHotDicts" : [ {
      "name" : "test",
      "fileSize" : 8,
      "type" : "MAIN",
      "sourceType" : "ORIGIN"
    } ],
    "clusterTasks" : [ ],
    "vpcInstanceId" : "es-cn-xxx-worker"
  },
  "RequestId" : "C82758DD-282F-4D48-934F-92170A3388FA"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/elasticsearch).
