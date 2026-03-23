Queries connection information about an ApsaraDB for HBase instance.

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

DescribeEndpoints

The operation that you want to perform. Set the value to **DescribeEndpoints**.

ClusterId

String

Yes

ld-bp150tns0sjxs\*\*\*\*

The ID of the instance whose connection information you want to query. You can call the [DescribeInstances](/help/en/hbase/developer-reference/api-describeinstances) operation to query the instance ID.

## Response parameters

   

Parameter

Type

Example

Description

VpcId

String

vpc-bp15s22y1a7sff5gj\*\*\*\*

The ID of the virtual private cloud (VPC). This parameter is returned only when NetType is **VPC**.

VSwitchId

String

vsw-bp1foll427ze3d4ps\*\*\*\*

The ID of the vSwitch. This parameter is returned only when NetType is **VPC**.

Engine

String

hbaseue

The type of the database engine. Valid values:

-   **hbaseue**
-   **hbase**
-   **spark**
-   **geomesa**

RequestId

String

F072593C-5234-5B56-9F63-3C7A3AD85D66

The ID of the request.

NetType

String

VPC

The network type of the instance. Valid values:

-   **VPC**: VPC
-   **CLASSIC**: classic network

ConnAddrs

Array of ConnAddrInfo

Connection information about the instance.

ConnAddrInfo

ConnAddr

String

\*\*\*\*

The endpoint of the instance.

ConnAddrPort

String

\*\*\*\*

The port that is used to connect to the instance.

ConnType

String

zkConn

The type of the connection. Valid values:

-   **uiProxyConn**: web console connection
-   **zkConn**: Zookeeper connection
-   **thriftConn**: Thrift connection
-   **slbConn\_thrift**: Thrift connection from a Server Load Balancer (SLB) instance
-   **serviceConn\_LivyConnAddr**: Livy connection

NetType

String

2

The type of the network over which the connection is established. Valid values:

-   **PUBLIC** or **0**: indicates that the connection is established over the Internet.
-   **PRIVATE** or **1**: indicates that the connection is established over an internal network.
-   **VPC** or **2**: indicates that the connection is established over a VPC.

## Examples

Sample requests

```
http(s)://hbase.aliyuncs.com/?Action=DescribeEndpoints
&ClusterId=ld-bp150tns0sjxs****
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<DescribeEndpointsResponse>
<RequestId>F072593C-5234-5B56-9F63-3C7A3AD85D66</RequestId>
<VpcId>vpc-bp15s22y1a7sff5gj****</VpcId>
<ConnAddrs>
    <ConnAddrInfo>
        <ConnAddrPort>2181</ConnAddrPort>
        <ConnAddr>ld-bp150tns0sjx****</ConnAddr>
        <ConnType>zkConn</ConnType>
        <NetType>2</NetType>
    </ConnAddrInfo>
    <ConnAddrInfo>
        <ConnAddrPort>9042</ConnAddrPort>
        <ConnAddr>ld-bp150tns0sjx****</ConnAddr>
        <ConnType>slbConn_hbaseue</ConnType>
        <NetType>0</NetType>
    </ConnAddrInfo>
</ConnAddrs>
<VSwitchId>vsw-bp1foll427ze3d4ps****</VSwitchId>
<NetType>VPC</NetType>
<Engine>hbaseue</Engine>
</DescribeEndpointsResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "F072593C-5234-5B56-9F63-3C7A3AD85D66",
  "VpcId" : "vpc-bp15s22y1a7sff5gj****",
  "ConnAddrs" : {
    "ConnAddrInfo" : [ {
      "ConnAddrPort" : 2181,
      "ConnAddr" : "ld-bp150tns0sjx****",
      "ConnType" : "zkConn",
      "NetType" : "2"
    }, {
      "ConnAddrPort" : 9042,
      "ConnAddr" : "ld-bp150tns0sjx****",
      "ConnType" : "slbConn_hbaseue",
      "NetType" : "0"
    } ]
  },
  "VSwitchId" : "vsw-bp1foll427ze3d4ps****",
  "NetType" : "VPC",
  "Engine" : "hbaseue"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/HBase).
