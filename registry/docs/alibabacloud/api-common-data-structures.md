## AccelerationInfo

The information about the acceleration of the custom container.

Parameter

Type

Example

Description

status

String

Preparing

The status of the acceleration for function invocations. Valid values:

-   **Preparing**: The acceleration is being prepared. When the acceleration is being prepared, an original image is used to invoke functions without acceleration.
    
-   **Ready**: Function invocations are accelerated.
    

## CertConfig

The configurations of the HTTPS certificate.

Parameter

Type

Example

Description

certName

String

/login/

The name of the certificate. You can enter a custom name.

certificate

String

\-----BEGIN CERTIFICATE----- xxxxx -----END CERTIFICATE-----

The certificate. To configure a certificate chain, you must enter multiple certificates in sequence.

privateKey

String

\-----BEGIN RSA PRIVATE KEY----- xxxxx -----END RSA PRIVATE KEY-----

The private key.

## Code

**Function code packages** can be provided with the following two methods. You must use only one of the methods in a single request.

-   Specify the names of the **Object Storage Service (OSS) bucket** and **object** where the code package is stored.
    
-   Set the **zipFile** parameter to the Base64-encoded content of the ZIP file.
    

Parameter

Type

Example

Description

ossBucketName

String

test-bucket

The name of the OSS bucket that stores the ZIP package of the function code.

ossObjectName

String

test-object

The name of the OSS object that stores the ZIP package of the function code.

zipFile

String

samplecode

The ZIP package of the function code. The ZIP package is encoded in Base64.

## CustomContainerConfig

The configurations of the custom container. After you configure the custom container, Function Compute can execute functions in a container created from a custom image.

Parameter

Type

Example

Description

args

String

\["-arg1", "value1"\]

The startup parameter of the container.

command

String

\["/code/myserver"\]

The startup command of the container.

image

String

registry-vpc.cn-hangzhou.aliyuncs.com/fc-demo/helloworld:v1beta1

The endpoint of the image from which the container is created.

accelerationType

String

Default

Specifies whether to enable image acceleration. Valid values:

-   **Default**: enables image acceleration.
    
-   **None**: disables image acceleration. This is the default value.
    

instanceID

String

cri-xxxxxx

The ID of the Container Registry Enterprise Edition instance. If you pull an image from a Container Registry Enterprise Edition instance, you must specify the instance ID.

## CustomContainerConfigInfo

The response for a custom container.

Parameter

Type

Example

Description

args

String

\["-arg1", "value1"\]

The startup parameter of the container.

command

String

\["/code/myserver"\]

The startup command of the container.

image

String

registry-vpc.cn-hangzhou.aliyuncs.com/fc-demo/helloworld:v1beta1

The endpoint of the image from which the container is created.

accelerationType

String

Default

Indicates whether image acceleration is enabled. Valid values:

-   **Default**: Image acceleration is enabled.
    
-   **None**: Image acceleration is disabled. This is the default value.
    

accelerationInfo

[AccelerationInfo](#AccelerationInfo)

The information about the acceleration of the custom container.

instanceID

String

cri-xxxxxx

The ID of the Container Registry Enterprise Edition instance. If you pull an image from a Container Registry Enterprise Edition instance, you must add the instance ID.

## DestinationConfig

The configurations of the destination for an asynchronous invocation.

Parameter

Type

Example

Description

onFailure

Object

The destination service for a failed asynchronous invocation.

destination

String

acs:fc:cn-hangzhou:1986\*\*\*\*43:services/service\_name.alias/functions/testHelloWorld

The Alibaba Cloud resource name (ARN) of the destination service.

onSuccess

Object

The destination service for a successful asynchronous invocation.

destination

String

acs:mns:cn-shanghai:1986\*\*\*\*43:/queues/queue\_name/messages

The ARN of the destination service.

## Error

The error information.

Parameter

Type

Example

Description

errorCode

String

InvalidArgument

The error code that is returned by Function Compute. For more information, see [Error codes](/help/en/functioncompute/fc-2-0/developer-reference/error-codes).

errorMessage

String

%s

The error message that is returned by Function Compute. For more information, see [Error codes](/help/en/functioncompute/fc-2-0/developer-reference/error-codes).

## Layer

The information about the layer in the response.

Parameter

Type

Example

Description

layerName

String

Layer-name

The name of the layer.

version

Integer

1

The version of the layer.

description

String

Layer-description

The description of the layer.

code

[LayerCode](#LayerCode)

The code for the layer. The code must be packaged into a ZIP file.

codeSize

Long

421

The size of the function code package that is returned by the system. Unit: bytes.

codeChecksum

String

2825179536350\*\*\*\*

The checksum of the layer code.

createTime

String

2020-11-11T11:08:00Z

The time when the layer was created.

acl

Integer

0

The access mode of the layer.

compatibleRuntime

Array of String

python3

The runtime environment that is compatible with the layer.

arn

String

02f81d283888f5ec63442a88fe82b260#Layer-name#1

The ARN of the layer.

## LayerCode

The information about the layer code.

Parameter

Type

Example

Description

repositoryType

String

OSS

The type of the layer code.

location

String

https://xyz.oss-cnxxx.aliyuncs.com/xxx/xxx/xxx

The location of the layer code.

## LogConfig

The log configurations. Function execution logs are stored in the Logstore specified in the log configuration.

Parameter

Type

Example

Description

logstore

String

test\_logstore

The name of the Logstore in Log Service.

project

String

test\_project

The name of the project in Log Service.

enableRequestMetrics

Boolean

true

Specifies whether to enable request-level metrics. If you enable this feature, you can view the amount of time and memory consumed for a specific invocation of each function in the service. Valid values:

-   **false**: disables the collection of request-level metrics.
    
-   **true**: enables the collection of request-level metrics. This is the default value.
    

logBeginRule

String

DefaultRegex

The log segmentation rule. Logs are segmented based on the log segmentation rule. The log blocks that are obtained after the segmentation are written to Log Service. Valid values:

**None**: disables the log segmentation rule. This is the default value.

**DefaultRegex**: sets the log segmentation rule to the **default regular expression rule**. If you set this parameter to `DefaultRegex`, logs are segmented based on the date in a log. For example, the line that contains `2021-10-10` in the log is considered as the first line of a log block. The first line and the subsequent lines that do not contain dates in the log are written to Log Service as a whole.

enableInstanceMetrics

Boolean

true

Specifies whether to enable the collection of instance-level metrics. If you enable this feature, you can view core metrics, such as CPU utilization, memory usage, network conditions of instances, and the number of requests that an instance concurrently processes. Valid values:

-   **false**: disables the collection of instance-level metrics. This is the default value.
    
-   **true**: enables the collection of instance-level metrics.
    

## NASConfig

The configuration of the File Storage NAS file system. The configuration allows functions in the specified service in Function Compute to access the NAS file system.

Parameter

Type

Example

Description

groupId

String

100

The ID of the group.

mountPoints

Array

The mount targets.

mountDir

String

/home/test

The local mount directory.

serverAddr

String

\*\*\*-uni85.cn-hangzhou.nas.aliyuncs.com:/

The address of a NAS server.

userId

String

100

The ID of the Alibaba Cloud account.

## PathConfig

The single routing rule for a custom domain name.

Parameter

Type

Example

Description

functionName

String

function\_name

The function name that corresponds to the domain name.

methods

Array of String

GET

The request method of the domain name.

path

String

/login/\*

The request path of the domain name.

qualifier

String

test

The version or alias of the service.

serviceName

String

service\_name

The name of the service to which the function that corresponds to the domain name belongs.

## RouteConfig

The configuration of the route table. The route table maps paths to functions when the functions are invoked by using custom domain names.

Parameter

Type

Example

Description

routes

Array of [PathConfig](#PathConfig)

The array of routes.

## TracingConfig

The configurations of Tracing Analysis. After you configure Tracing Analysis for a service in Function Compute, you can record the execution duration of a request, view the amount of cold start time for a function, and record the execution duration of a function. For more information, see [Overview](/help/en/functioncompute/fc-2-0/user-guide/overview-32).

Parameter

Type

Example

Description

type

String

Jaeger

The type of the tracing system.

params

Map

The parameters of Tracing Analysis. Example: `{"endpoint": "tracing_analysis_jaeger_endpoint"}`.

## VPCConfig

The VPC configuration. The configuration allows a function to access the specified VPC.

Parameter

Type

Example

Description

securityGroupId

String

sg\_bp18hj1wtxgy3\*\*\*

The ID of the security group.

vSwitchIds

Array of String

vsw\_\*\*\*

The ID of the vSwitch.

vpcId

String

vpc\_\*\*\*

The ID of the VPC.
