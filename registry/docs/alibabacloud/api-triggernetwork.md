You can call this operation to enable or disable public or private network access for a Elasticsearch or Kibana cluster.

Due to the network architecture upgrade, call [EnableKibanaPvlNetwork](/help/en/es/developer-reference/api-enablekibanapvlnetwork) to enable the private network connection for Kibana and call [DisableKibanaPvlNetwork](/help/en/es/developer-reference/api-disablekibanapvlnetwork) to disable the private network connection for the cloud-native architecture instance.

## Debug

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code for different SDKs.](https://api.aliyun.com/#product=elasticsearch&api=TriggerNetwork&type=ROA&version=2017-06-13)

## Request headers

This operation does not have operation-specific request headers and uses only common request headers. For more information, see Common request parameters.

## Request syntax

```
POST /openapi/instances/{InstanceId}/actions/network-trigger HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Position**

**Required**

**Sample value**

**Description**

InstanceId

String

Path

Yes

es-cn-n6w1o1x0w001c\*\*\*\*

The instance ID.

clientToken

String

Query

No

407d02b74c49beb5bfdac7ec8bde2488

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

Object

Body

No

The request parameters.

nodeType

String

Body

Yes

KIBANA

The mitigation plan of the instance. Valid values:

-   KIBANA
-   WORKER

networkType

String

Body

Yes

PUBLIC

The network type of the instance. Valid values:

-   PUBLIC
-   PRIVATE

actionType

String

Body

Yes

OPEN

The action. Valid values:

-   CLOSE
-   OPEN

## Response parameters

**Parameter**

**Type**

**Sample value**

**Description**

Result

Boolean

true

The following result is returned:

-   true: The operation is successful.
-   false: The operation failed.

RequestId

String

5A5D8E74-565C-43DC-B031-29289FA\*\*\*\*

The ID of the request.

## Examples

Sample requests

```
POST /openapi/instances/es-cn-n6w1o1x0w001c****/actions/network-trigger?clientToken=407d02b74c49beb5bfdac7ec8bde2488 HTTP/1.1
Host:elasticsearch.aliyuncs.com
Content-Type:application/json

{
  "nodeType" : "KIBANA",
  "networkType" : "PUBLIC",
  "actionType" : "OPEN"
}
```

Sample success responses

`JSON format`

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "Result" : true,
  "RequestId" : "5A5D8E74-565C-43DC-B031-29289F****"
}
```

## Common error codes

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/elasticsearch).
