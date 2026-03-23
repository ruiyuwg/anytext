ALIYUN::ROS::CustomResource lets you create a custom resource.

In an ROS template, you can use the ALIYUN::ROS::CustomResource or Custom::_String_ resource type to define a custom resource.

Custom resources allow you to write custom configuration logic in an ROS template. ROS runs this logic during stack operations, such as when you create, update, or delete a stack. For more information, see [Overview of custom resources](/help/en/ros/user-guide/overview-11#reference-2354113).

A custom resource must send a response to a presigned response URL. If ROS does not receive a response, the stack operation fails. ResponseURL enables responses over the public network, and InnerResponseURL enables responses over the Alibaba Cloud private network.

## Syntax

```
{
  "Type": "ALIYUN::ROS::CustomResource",
  "Properties": {
    "ServiceToken": String,
    "Timeout": Number,
    "Parameters": Map
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Enable updates**

**Description**

**Constraints**

ServiceToken

String

Yes

No

The service token that the service provider gives to the template developer to access the service.

Currently, support is provided for Function Compute function, SMQ (

Simple Message Queue (formerly MNS)

) Topic, SMQ Queue, HTTP&HTTPS.

It can be up to 512 characters in length.

Valid values:

-   FC 2.0: `acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>`
    
-   FC 3.0: `acs:fc:<region_id>:<account_id>:functions/<function_name>`
    
-   SMQ queue: `acs:mns:<region_id>:<account_id>:queues/<queue_name>`
    
-   SMQ topic: `acs:mns:<region_id>:<account_id>:topics/<topic_name>`
    
-   HTTP & HTTPS: `web[options]:<url>`
    
    `options` is an optional parameter. Valid values are `sync` and `idempotent`. You can specify both values, separated by a comma (,).
    
    `sync`: Specifies a synchronous request. ROS uses the direct response from the request and does not wait for a callback to the presigned URL. By default, requests are asynchronous and wait for the presigned URL callback.
    
    `idempotent`: Makes the create request idempotent. If a network error or a 500 error occurs, ROS retries the request. By default, create requests are not idempotent. Update and delete requests must always be idempotent.
    

Examples:

-   acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
    
-   acs:mns:cn-hangzhou:123456789:queues/test-queue
    
-   acs:mns:cn-hangzhou:123456789:topics/test-topic
    
-   web:https://example.com
    
-   web\[sync\]:http://example.com
    
-   web\[sync,idempotent\]:https://example.com
    

Timeout

Number

Yes

Yes

The timeout period for the custom service provider to respond. Unit: seconds.

-   If `ServiceToken` specifies an FC function, an SMQ topic, an SMQ queue, or an asynchronous HTTP or HTTPS request, the default value of `Timeout` is 60. The value must be between 1 and 43200.
    
-   If `ServiceToken` specifies a synchronous HTTP or HTTPS request, `Timeout` is ignored. The timeout period is always 10 seconds.
    

Parameters

Map

No

Yes

The parameters to pass to the custom service provider. Specify this property according to the specifications from the custom service provider.

None.

## Return values

Fn::GetAtt

-   Outputs: The data returned by the custom service provider, which is a map object.
    
-   \*: A key in the Outputs map.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  CustomResource:
    Type: ALIYUN::ROS::CustomResource
    Properties:
      ServiceToken: acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
      Parameters:
        Key1: Value1
        Key2: Value2
      Timeout: 60
Parameters:
  Parameters:
    Type: Json
    Description: Parameters to be passed to service provider.
Outputs:
  Outputs:
    Description: Output data received from service provider.
    Value:
      Fn::GetAtt:
        - CustomResource
        - Outputs
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "CustomResource": {
      "Type": "ALIYUN::ROS::CustomResource",
      "Properties": {
        "ServiceToken": "acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function",
        "Parameters": {
          "Key1": "Value1",
          "Key2": "Value2"
        },
        "Timeout": 60
      }
    }
  },
  "Parameters": {
    "Parameters": {
      "Type": "Json",
      "Description": "Parameters to be passed to service provider."
    }
  },
  "Outputs": {
    "Outputs": {
      "Description": "Output data received from service provider.",
      "Value": {
        "Fn::GetAtt": [
          "CustomResource",
          "Outputs"
        ]
      }
    }
  }
}
```

## Remarks

-   Specify a name for a custom resource type
    
    For a custom resource, you can use ALIYUN::ROS::CustomResource as the resource type or specify your own resource type name. For example, you can use Custom::MyCustomResourceTypeName instead of ALIYUN::ROS::CustomResource.
    
    The name of a custom resource type can contain letters, numbers, and the following special characters: `_@-`. The name can be up to 68 characters in length. You cannot change the type during an update.
    
    Using your own resource type names helps you quickly distinguish the types of custom resources in your stack. For example, if you have two custom resources that perform two different ping tests, you can specify the resource type as Custom::PingTester instead of ALIYUN::ROS::CustomResource to easily identify them as ping testers.
    
-   Replacing custom resources during updates
    
    The PhysicalResourceId of a resource cannot be replaced during an update in ROS.
    
-   Retrieve return values
    
    For custom resources, the return values are defined by the custom service provider. You can retrieve these values from the provider-defined properties by calling Fn::GetAtt.
