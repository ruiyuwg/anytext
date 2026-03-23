ALIYUN::FC::Function is used to create a function. A function must belong to a service. All functions of a service share the same attributes as the service, such as the service authorization and log configurations.

## Syntax

```
{
  "Type": "ALIYUN::FC::Function",
  "Properties": {
    "Code": Map,
    "FunctionName": String,
    "ServiceName": String,
    "InstanceType": String,
    "MemorySize": Integer,
    "InstanceConcurrency": Integer,
    "EnvironmentVariables": Map,
    "Initializer": String,
    "Handler": String,
    "Timeout": Integer,
    "InitializationTimeout": Integer,
    "CustomContainerConfig": Map,
    "AsyncConfiguration": Map,
    "CAPort": Integer,
    "Runtime": String,
    "Description": String,
    "Cpu": Number,
    "CustomRuntimeConfig": Map,
    "GpuMemorySize": Integer,
    "InstanceSoftConcurrency": Integer,
    "DiskSize": Integer,
    "InstanceLifecycleConfig": Map,
    "CustomDNS": Map,
    "CustomHealthCheckConfig": Map
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Initializer

String

No

Yes

The handler of the initializer function.

The format of the value varies based on the programming language.

InitializationTimeout

Integer

No

Yes

The timeout period for the execution of the initializer function.

Valid values: 1 to 300.

Unit: seconds.

Default value: 3.

When the timeout period ends, Function Compute terminates the execution of the initializer function.

Code

Map

No

Yes

The ZIP package of the function code.

For more information, see [Code properties](#section-ojd-4je-97q).

InstanceType

String

No

Yes

The type of the function instance.

Valid values:

-   e1: elastic instance
    
-   c1: performance instance
    
-   fc.gpu.tesla.1: GPU-accelerated instance with Tesla series GPUs
    
-   fc.gpu.ampere.1: GPU-accelerated instance with Ampere series GPUs
    
-   fc.gpu.ada.1: GPU-accelerated instance with Ada series GPUs
    
-   g1: GPU-accelerated instance with Tesla series GPUs
    

Default value: e1.

Description

String

No

Yes

The description of the function.

None.

ServiceName

String

Yes

No

The name of the service in Function Compute.

The name must be 1 to 128 characters in length.

MemorySize

Integer

No

Yes

The memory size of the function.

Valid values:

-   Valid values when InstanceType is set to e1: multiples of 64 that range from 128 to 3072.
    
-   Valid values when InstanceType is set to c1: 4096, 8192, 16384, and 32768.
    
-   Valid values when InstanceType is set to fc.gpu.tesla.1: multiples of 64 that range from 128 to X. X is calculated by using the following formula: X = GPU memory (GB) × 2048.
    
-   Valid value when InstanceType is set to fc.gpu.ada.1: 65536. 65536 MB is equivalent to 64 GB.
    

Unit: MB.

For more information, see [Instance types and usage modes](/help/en/functioncompute/fc-2-0/user-guide/instance-types-and-instance-modes).

InstanceConcurrency

Integer

No

Yes

The instance concurrency value.

Valid values: 1 to 100.

EnvironmentVariables

Map

No

Yes

The environment variables that you want to configure for the function.

None.

Handler

String

Yes

Yes

The handler of the function.

For example, if you set Handler to index.handler when you create a Python function, the file name is index.py and the function name is handler. The format of the value varies based on the programming language.

Timeout

Integer

No

Yes

The timeout period for the execution of the function.

Valid values: 1 to 600.

Default value: 3.

Unit: seconds.

When the timeout period ends, Function Compute terminates the execution of the function.

Runtime

String

Yes

Yes

The runtime of the function.

Valid values: nodejs6, nodejs8, nodejs10, nodejs12, python3, java8, custom, and custom-container. For more information, see [Runtimes that are supported by Function Compute](/help/en/functioncompute/fc-2-0/user-guide/manage-functions#13b1cf902c6de).

FunctionName

String

Yes

No

The name of the function.

The name must be 1 to 128 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). It must start with a letter or an underscore (\_).

CustomContainerConfig

Map

No

Yes

The configurations of the Custom Container runtime if you set Runtime to custom-container. After you specify the configurations, you can use a custom container image to invoke the function.

For more information, see [CustomContainerConfig properties](#section-w57-3u4-khz).

CAPort

Integer

No

Yes

The port on which the custom HTTP server listens.

Default value: 9000.

**Note**

This property takes effect when Runtime is set to custom or custom-container.

AsyncConfiguration

Map

No

Yes

The asynchronous invocation configurations.

For more information, see [AsyncConfiguration properties](#section-8lq-7us-2xe).

Cpu

Number

No

Yes

The number of vCPUs of the function.

None.

CustomRuntimeConfig

Map

No

Yes

The configurations of the custom runtime of the function.

None.

GpuMemorySize

Integer

No

Yes

The GPU memory size of the function.

Valid values: multiples of 1024. Unit: MB.

InstanceSoftConcurrency

Integer

No

Yes

The instance soft concurrency value. You can use this property to implement graceful scale-ups for instances.

When the instance concurrency value is greater than the instance soft concurrency value, an instance scale-up is triggered. For example, if your instance requires a long period of time to start, you can specify an appropriate soft concurrency value to start the instance in advance.

The value of InstanceSoftConcurrency must be less than or equal to the value of InstanceConcurrency.

DiskSize

Integer

No

Yes

The disk size of the function.

Unit: MB.

Valid values: 512 and 10240.

InstanceLifecycleConfig

Map

No

Yes

The instance lifecycle configurations of the function.

For more information, see [InstanceLifecycleConfig properties](#ebeafb42fegs3).

CustomDNS

Map

No

Yes

The custom Domain Name System (DNS) configurations of the function.

For more information, see [CustomDNS properties](#ebebe5c9fej6h).

CustomHealthCheckConfig

Map

No

Yes

The health check configurations of the custom and Custom Container runtimes.

For more information, see [CustomHealthCheckConfig properties](#ebeb708efex6q).

## Code syntax

```
"Code": {
  "OssBucketName": String,
  "OssObjectName": String,
  "ZipFile": String,
  "SourceCode": String
}
```

## Code properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

OssBucketName

String

No

Yes

The name of the Object Storage Service (OSS) bucket in which the ZIP package is stored.

None.

OssObjectName

String

No

Yes

The name of the ZIP package that is used as an OSS object.

None.

ZipFile

String

No

Yes

The Base64-encoded content of the ZIP package.

None.

SourceCode

String

No

Yes

The source code of the function.

The source code can be up to 4,096 characters in length. Node.js, PHP, and Python are supported.

Resource Orchestration Service (ROS) writes the value of this property to a UTF-8 encoded file named index.

When you specify the ZipFile, SourceCode, OssBucketName, and OssObjectName properties, the properties are in descending order of priority.

## CustomContainerConfig syntax

```
"CustomContainerConfig": {
  "Command": String,
  "Args": String,
  "Image": String,
  "AccelerationType": String,
  "InstanceId": String,
  "WebServerMode": Boolean
}
```

## CustomContainerConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Command

String

No

Yes

The startup commands of containers.

Example: `["/code/myserver"]`.

Args

String

No

Yes

The startup parameters of containers.

Example: `["-arg1", "value1"]`.

Image

String

Yes

Yes

The address of the container image.

Example: `registry-vpc.cn-hangzhou.aliyuncs.com/fc-demo/helloworld:v1beta1`.

AccelerationType

String

No

Yes

Specifies whether to enable image acceleration.

Valid values:

-   Default: enables image acceleration.
    
-   None (default): disables image acceleration.
    

InstanceId

String

No

Yes

The ID of the Container Registry Enterprise Edition instance.

You must specify this property when you use a Container Registry Enterprise Edition instance. The default resolved IP address of the instance must be the IP address of a virtual private cloud (VPC) in which Container Registry resides.

**Note**

You cannot use Alibaba Cloud DNS PrivateZone to define domain name resolution.

WebServerMode

Boolean

No

Yes

Specifies whether to use the web server mode to run images.

Valid values:

-   true (default): uses the web server mode to run images. In this case, a web server is implemented in your container image to listen on ports and process requests.
    
-   false: does not use the web server mode to run images. In this case, your container must actively exit from the process after the container runs. The exit code must be 0.
    

## AsyncConfiguration syntax

```
"AsyncConfiguration": {
  "Destination": Map
  "MaxAsyncRetryAttempts": Integer,
  "MaxAsyncEventAgeInSeconds": Integer,
  "StatefulInvocation": Boolean
}
```

## AsyncConfiguration properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Destination

Map

No

No

The destination of the asynchronous invocation.

For more information, see [Destination properties](#section-hbk-zbm-yp1).

MaxAsyncRetryAttempts

Integer

No

Yes

The maximum number of retries.

None.

MaxAsyncEventAgeInSeconds

Integer

No

Yes

The maximum validity period of messages.

None.

StatefulInvocation

Boolean

No

Yes

Specifies whether to enable stateful asynchronous invocations.

Valid values:

-   true
    
-   false (default)
    

For more information, see [Overview](/help/en/functioncompute/fc-2-0/user-guide/overview-25#task-2159491).

## Destination syntax

```
"Destination": {
  "OnSuccess": String,
  "OnFailure": String
}
```

## Destination properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

OnSuccess

String

No

Yes

The destination that Function Compute invokes if the function execution is successful.

None.

OnFailure

String

No

Yes

The destination that Function Compute invokes if the function execution fails due to a system error or a built-in function error.

None.

## InstanceLifecycleConfig syntax

```
"InstanceLifecycleConfig":{
  "PreFreeze": Map,
  "PreStop": Map
}
```

## InstanceLifecycleConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

PreFreeze

Map

No

Yes

The configurations of the PreFreeze hook.

For more information, see [PreFreeze properties](#ebeb497ffeq97).

PreStop

Map

No

Yes

The configurations of the PreStop hook.

For more information, see [PreStop properties](#ebeb2276fepa2).

## PreStop syntax

```
"PreStop":{
  "Handler": String,
  "Timeout": Integer
}
```

## PreStop properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Handler

String

No

Yes

The handler of the function.

For more information, see [Basics](/help/en/functioncompute/fc-2-0/user-guide/basics).

Timeout

Integer

No

Yes

The timeout period for the execution.

Unit: seconds.

## PreFreeze syntax

```
"PreFreeze":{
  "Handler": String,
  "Timeout": Integer
}
```

## PreFreeze properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Handler

String

No

Yes

The handler of the function.

For more information, see [Basics](/help/en/functioncompute/fc-2-0/user-guide/basics).

Timeout

Integer

No

Yes

The timeout period for the execution.

Unit: seconds.

## CustomHealthCheckConfig syntax

```
"CustomHealthCheckConfig":{
  "SuccessThreshold": Integer,
  "InitialDelaySeconds": Integer,
  "PeriodSeconds": Integer,
  "HttpGetUrl": String,
  "TimeoutSeconds": Integer,
  "FailureThreshold": Integer
}
```

## CustomHealthCheckConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

SuccessThreshold

Integer

No

Yes

The number of times that a container must consecutively pass health checks before it is declared healthy.

Valid values: 1 to 120.

Default value: 1.

InitialDelaySeconds

Integer

No

Yes

The duration after the container is started before health checks are initiated.

Valid values: 0 to 120.

Default value: 0.

PeriodSeconds

Integer

No

Yes

The health check interval.

Valid values: 1 to 120.

Default value: 3.

HttpGetUrl

String

No

Yes

The custom health check URL of the container.

The URL can be up to 2,048 characters in length.

TimeoutSeconds

Integer

No

Yes

The timeout period of a health check.

Valid values: 1 to 3.

Default value: 1.

FailureThreshold

Integer

No

Yes

The number of times that a container must consecutively fail health checks before it is declared unhealthy.

Valid values: 1 to 120.

Default value: 3.

## CustomRuntimeConfig syntax

```
"CustomRuntimeConfig":{
  "Args": List,
  "Command": List,
}
```

## CustomRuntimeConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Args

List

No

Yes

The parameters received by the startup commands.

Example:

```
["-arg1", "value1"]
```

Command

List

No

Yes

The startup commands.

Example:

```
["/code/myserver"]
```

## CustomDNS syntax

```
"CustomDNS":{
  "NameServers": List,
  "DnsOptions": List,
  "Searches": List
}
```

## CustomDNS properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

NameServers

List

No

Yes

The IP addresses of the DNS servers.

None.

DnsOptions

List

No

Yes

The configuration items in the `resolv.conf` file.

None.

Searches

List

No

Yes

The DNS search domains.

None.

## DnsOptions syntax

```
"DnsOptions":{
  "Value": String,
  "Name": String,
}
```

## DnsOptions properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Value

String

No

Yes

The value of the configuration item.

Example: 2.

Name

String

Yes

Yes

The name of the configuration item.

Example: ndots.

## Return values

Fn::GetAtt

-   FunctionId: the unique ID that is generated by the system for the function.
    
-   ServiceName: the name of the service in Function Compute.
    
-   ARN: the Alibaba Cloud Resource Name (ARN) of the function.
    
-   FunctionName: the name of the function.
    
-   ServiceId: the ID of the service in Function Compute.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ServiceName:
    Type: String
    Default: test-service
  FunctionName:
    Type: String
    Default: test-function
  Timeout:
    Type: Number
    Default: 60
  X:
    Type: Number
  Y:
    Type: Number
Resources:
  Service:
    Type: ALIYUN::FC::Service
    Properties:
      ServiceName:
        Ref: ServiceName
  Function:
    Type: ALIYUN::FC::Function
    Properties:
      ServiceName:
        Fn::GetAtt: [Service, ServiceName]
      FunctionName: 
        Ref: FunctionName
      Handler: index.handler
      Runtime: python3.10
      Code:
        SourceCode: |
          import time
          import json
          import requests
          import logging
          def handler(event, context):
              logger = logging.getLogger()
              event = json.loads(event)
              logger.info('receive request: %s', event)
              res_props = event['ResourceProperties']
              result = dict(
                  RequestId=event['RequestId'],
                  LogicalResourceId=event['LogicalResourceId'],
                  StackId=event['StackId'],
                  Status='SUCCESS',
                  PhysicalResourceId='dummy'
              )
              if event['RequestType'] != 'Delete':
                  result['Data'] = dict(Z=res_props['X'] + res_props['Y'])
              headers = {
                  'Content-type': 'application/json',
                  'Accept': 'application/json',
                  'Date': time.strftime('%a, %d %b %Y %X GMT', time.gmtime())
              }
            
              resp = requests.post(event['ResponseURL'], json=result, headers=headers)
              resp_content = resp.json()
              logger.info('response: %s', resp_content)

  SimpleTest:
    Type: Custom::Add
    Properties:
      ServiceToken:
        Fn::GetAtt: [Function, ARN]
      Parameters:
        X:
          Ref: X
        Y:
          Ref: Y
      Timeout:
        Ref: Timeout
Outputs:
  Result:
    Value:
      Fn::GetAtt: [SimpleTest, Z]
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ServiceName": {
      "Type": "String",
      "Default": "test-service"
    },
    "FunctionName": {
      "Type": "String",
      "Default": "test-function"
    },
    "Timeout": {
      "Type": "Number",
      "Default": 60
    },
    "X": {
      "Type": "Number"
    },
    "Y": {
      "Type": "Number"
    }
  },
  "Resources": {
    "Service": {
      "Type": "ALIYUN::FC::Service",
      "Properties": {
        "ServiceName": {
          "Ref": "ServiceName"
        }
      }
    },
    "Function": {
      "Type": "ALIYUN::FC::Function",
      "Properties": {
        "ServiceName": {
          "Fn::GetAtt": [
            "Service",
            "ServiceName"
          ]
        },
        "FunctionName": {
          "Ref": "FunctionName"
        },
        "Handler": "index.handler",
        "Runtime": "python3.10",
        "Code": {
          "SourceCode": "import time\nimport json\nimport requests\nimport logging\ndef handler(event, context):\n    logger = logging.getLogger()\n    event = json.loads(event)\n    logger.info('receive request: %s', event)\n    res_props = event['ResourceProperties']\n    result = dict(\n        RequestId=event['RequestId'],\n        LogicalResourceId=event['LogicalResourceId'],\n        StackId=event['StackId'],\n        Status='SUCCESS',\n        PhysicalResourceId='dummy'\n    )\n    if event['RequestType'] != 'Delete':\n        result['Data'] = dict(Z=res_props['X'] + res_props['Y'])\n    headers = {\n        'Content-type': 'application/json',\n        'Accept': 'application/json',\n        'Date': time.strftime('%a, %d %b %Y %X GMT', time.gmtime())\n    }\n  \n    resp = requests.post(event['ResponseURL'], json=result, headers=headers)\n    resp_content = resp.json()\n    logger.info('response: %s', resp_content)\n"
        }
      }
    },
    "SimpleTest": {
      "Type": "Custom::Add",
      "Properties": {
        "ServiceToken": {
          "Fn::GetAtt": [
            "Function",
            "ARN"
          ]
        },
        "Parameters": {
          "X": {
            "Ref": "X"
          },
          "Y": {
            "Ref": "Y"
          }
        },
        "Timeout": {
          "Ref": "Timeout"
        }
      }
    }
  },
  "Outputs": {
    "Result": {
      "Value": {
        "Fn::GetAtt": [
          "SimpleTest",
          "Z"
        ]
      }
    }
  }
}
```

For more examples, visit [function-invoker.yml](https://github.com/aliyun/ros-templates/blob/master/resources/fc/function-invoker.yml). In the examples, the following resource types are used:

-   ALIYUN::FC::Service: creates a service in Function Compute.
    
-   ALIYUN::FC::Function: creates a function.
    
-   ALIYUN::FC::FunctionInvoker: invokes a function.
    
-   ALIYUN::FC::Trigger: triggers a function.
    
-   ALIYUN::FC::Version: releases a service version.
    
-   ALIYUN::FC::Alias: creates an alias.
    
-   ALIYUN::FC::ProvisionConfig: creates a provisioned instance.
