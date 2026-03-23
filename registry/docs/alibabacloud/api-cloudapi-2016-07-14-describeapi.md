Queries the definition of a specified API.

## Operation description

-   This operation is intended for users who publish APIs.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/CloudAPI/2016-07-14/DescribeApi)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/CloudAPI/2016-07-14/DescribeApi)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

apigateway:DescribeApi

get

\*ApiGroup

`acs:apigateway:{#regionId}:{#accountId}:apigroup/{#GroupId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

GroupId

string

No

ID of the group that contains the API.

123

ApiId

string

Yes

ID of the API.

8afff6c8c4c6447abb035812e4d66b65

## Response elements

**Element**

**Type**

**Description**

**Example**

object

ApiId

string

ID of the API.

8afff6c8c4c6447abb035812e4d66b65

ResultType

string

Format of the response returned by the backend service. Valid values: JSON, TEXT, BINARY, XML, and HTML.

JSON

WebSocketApiType

string

Type of bidirectional communication API:

-   **COMMON**: Standard API.
    
-   **REGISTER**: Registration API.
    
-   **UNREGISTER**: Unregistration API.
    
-   **NOTIFY**: Downstream notification API.
    

COMMON

DisableInternet

boolean

Specifies whether the API supports only internal network calls. Valid values:

-   **true**: The API supports only internal network calls.
    
-   **false**: No restriction on call sources.
    

false

ResultBodyModel

string

Response body of the API.

{}

ResultSample

string

Example response returned by the backend service.

200

AppCodeAuthType

string

Valid only when **AuthType** is set to **APP**. Valid values:

-   **DEFAULT**: Default value. Uses the setting of the group.
    
-   **DISABLE**: Disabled.
    
-   **HEADER**: Enables AppCode authentication in the header.
    
-   **HEADER\_QUERY**: Enables AppCode authentication in both the header and query string.
    

HEADER

AllowSignatureMethod

string

Required when **AuthType** is set to **APP**. Specifies the signature algorithm. Valid values: HmacSHA256 and HmacSHA1,HmacSHA256. Default: HmacSHA256.

-   HmacSHA256
    
-   HmacSHA1,HmacSHA256
    

HmacSHA256

RegionId

string

ID of the region where the API resides.

cn-qingdao

ForceNonceCheck

boolean

Specifies whether the request header X-Ca-Nonce is required. This header is the unique ID of the request, typically a UUID. API Gateway validates this header to prevent replay attacks. Each value can be used only once within 15 minutes. Valid values:

-   **true**: Enforces validation of this header to prevent replay attacks.
    
-   **false**: Does not validate this header.
    

true

Visibility

string

Specifies whether the API is public. Valid values:

-   **PUBLIC**: Public. If selected, the API appears on the Discover APIs page in the console for all users.
    
-   **PRIVATE**: Private. If selected, the API does not appear in Alibaba Cloud Marketplace when the group is listed.
    

PUBLIC

FailResultSample

string

Example error response returned by the backend service.

400

AuthType

string

Security authentication type for the API. Valid values:

-   **APP**: Only authorized apps can call the API.
    
-   **ANONYMOUS**: Anonymous calls are allowed. Note the following:
    -   Anyone with access to the API endpoint can call it. API Gateway performs no identity verification and cannot apply per-user throttling. If you expose this API, configure throttling at the API level.
        
    -   We do not recommend listing ANONYMOUS APIs in Alibaba Cloud Marketplace. API Gateway cannot meter or limit anonymous calls. If your group is listed in Alibaba Cloud Marketplace, move this API to another group, set its visibility to PRIVATE, or use Alibaba Cloud APP authentication.
        
-   APPOPENID: Supports third-party OpenID Connect authentication and allows only authorized apps to call the API. When you select this option, **OpenIdConnectConfig** is required.
    

APP

ModifiedTime

string

Time when the API was last modified.

2016-07-28T13:13:12Z

RequestId

string

ID of the request.

D0FF585F-7966-40CF-BC60-75DB070B23D5<

Description

string

Description of the API.

Api description

GroupName

string

Name of the group that contains the API.

ApiTest

GroupId

string

ID of the group that contains the API.

08ae4aa0f95e4321849ee57f4e0b3077

Mock

string

Specifies whether mock mode is enabled. Valid values:

-   OPEN: Mock mode is enabled.
    
-   CLOSED: Mock mode is disabled.
    

CLOSED

MockResult

string

Mock response.

test result

CreatedTime

string

Time when the API was created.

2016-07-28T09:50:43Z

ApiName

string

Name of the API. Must be unique within the group.

ApiName

BackendEnable

boolean

Specifies whether the backend service is enabled.

true

BackendConfig

object

Backend configuration.

BackendId

string

ID of the backend service.

0038e00c3dca44fcba3a94015d8f5bbf

BackendType

string

Type of the backend service.

HTTP

BackendName

string

Name of the backend service.

testoss

RequestConfig

object

Configuration for requests sent from consumers to API Gateway.

BodyModel

string

Body model.

https://apigateway.aliyun.com/models/3a240a127dcc4afd9ab1bf7e947b4095/9e2df550e85b4121a79ec33e2619eaab

RequestPath

string

API path. For example, if the full URL is `http://api.a.com:8080/object/add?key1=value1&key2=value2`, the path is `/object/add`.

/api/billing/test/\[type\]

RequestHttpMethod

string

HTTP method. Valid values: GET, POST, DELETE, PUT, HEAD, TRACE, PATCH, CONNECT, and OPTIONS.

POST

BodyFormat

string

Valid only when **RequestMode** is **MAPPING**. Specifies how data is sent to the server for POST or PUT requests. Valid values: **FORM** (key-value pairs) and **STREAM** (byte stream).

When you send a POST or PUT request, this parameter specifies how data is sent to the server. Valid values are **FORM** and **STREAM**, which represent form format (key-value pairs) and byte stream format, respectively.

STREAM

RequestMode

string

Request mapping mode. Valid values: **MAPPING** (maps input parameters) and **PASSTHROUGH** (passes input parameters through unchanged).

MAPPING

PostBodyDescription

string

Description of the request body.

fwefwef

RequestProtocol

string

Supported protocols for the API. Multiple values are comma-separated, such as HTTP,HTTPS. Valid values: HTTP and HTTPS.

HTTP

EscapePathParam

boolean

Specifies whether to escape path parameters. If true, parameters like \[param\] in the path are treated as literal characters.

true

ServiceConfig

object

Configuration for requests sent from API Gateway to the backend service.

AoneAppName

string

Name of the Aone application.

ib-blank

MockStatusCode

integer

Status code returned by mock responses.

200

ContentTypeValue

string

Value of the Content-Type header when ContentTypeCatagory is DEFAULT or CUSTOM.

application/x-www-form-urlencoded; charset=UTF-8

ServiceProtocol

string

Protocol used to connect to the backend service. Valid values: HTTP and HTTPS.

HTTP

ServicePath

string

Path used to call the backend service. For example, if the full URL is `http://api.a.com:8080/object/add?key1=value1&key2=value2`, the path is `/object/add`.

/object/add

ContentTypeCatagory

string

Strategy for setting the Content-Type header when calling an HTTP backend service:

-   **DEFAULT**: Use the default value provided by API Gateway.
    
-   **CUSTOM**: Use a custom value.
    
-   **CLIENT**: Use the Content-Type header from the client request.
    

CUSTOM

ServiceAddress

string

Endpoint used to call the backend service. For example, if the full URL is `http://api.a.com:8080/object/add?key1=value1&key2=value2`, the endpoint is `http://api.a.com:8080`.

http://api.a.com:8080

Mock

string

Specifies whether mock mode is enabled. Valid values:

-   **TRUE**: Mock mode is enabled.
    
-   **FALSE**: Mock mode is disabled.
    

TRUE

ServiceVpcEnable

string

Specifies whether VPC channel is enabled. Valid values:

-   **TRUE**: VPC channel is enabled. You must first authorize the VPC before enabling this feature.
    
-   **FALSE**: VPC channel is disabled.
    

TRUE

MockResult

string

Response returned when mock mode is enabled.

test result

ServiceHttpMethod

string

HTTP method used to call the backend service. Valid values: GET, POST, DELETE, PUT, HEAD, TRACE, PATCH, CONNECT, and OPTIONS.

POST

ServiceTimeout

integer

Timeout period for the backend service, in milliseconds.

1000

MockHeaders

object

MockHeader

array<object>

Mock headers.

object

HeaderValue

string

Value of the HTTP header parameter.

86400

HeaderName

string

Name of the HTTP header parameter.

Content-Length

VpcConfig

object

VPC channel configuration.

VpcId

string

ID of the VPC.

vpc-2zeafsc3fygk1\*\*\*

VpcScheme

string

VPC protocol.

HTTP

InstanceId

string

ID of the instance (ECS or Server Load Balancer) in the VPC.

i-bp1h497hkijewv2\*\*\*

Port

integer

Port number of the instance.

8080

Name

string

Name of the VPC authorization.

glmall-app-test

FunctionComputeConfig

object

Backend configuration for Function Compute.

FcType

string

Function Compute service type.

HttpTrigger

RoleArn

string

ARN of the RAM role that grants API Gateway permission to access Function Compute.

acs:ram::111\*\*\*:role/aliyunserviceroleforsas

Method

string

HTTP method.

GET

FcBaseUrl

string

Root path of the Function Compute service.

https://1227\*\*\*\*64334133.ap-southeast-1-int\*\*\*al.fc.aliyuncs.com/201\*\*\*\*-15/proxy/test\*\*\*\*ice.LATEST/testHttp/

ContentTypeValue

string

Value of the Content-Type header when ContentTypeCatagory is DEFAULT or CUSTOM.

application/x-www-form-urlencoded; charset=UTF-8

RegionId

string

Region where Function Compute resides.

cn-qingdao

OnlyBusinessPath

boolean

Specifies whether only the business path is passed to the backend.

false

FunctionName

string

Name of the Function Compute function.

edge\_function

ContentTypeCatagory

string

Strategy for setting the Content-Type header when calling a Function Compute backend service:

-   **DEFAULT**: Use the default value provided by API Gateway.
    
-   **CUSTOM**: Use a custom value.
    
-   **CLIENT**: Use the Content-Type header from the client request.
    

DEFAULT

Path

string

API request path.

/api/offline/cacheData

ServiceName

string

Name of the Function Compute service.

fcservicename

Qualifier

string

Alias of the function.

2

TriggerName

string

FcVersion

string

OssConfig

object

OSS backend configuration.

Key

string

Path to the object or folder in OSS.

/folder/test.json

Action

string

OSS operation. Valid values:

-   GetObject
    
-   PostObject
    
-   DeleteObject
    
-   PutObject
    
-   HeadObject
    
-   GetObjectMeta
    
-   AppendObject
    

GetObject

OssRegionId

string

Region ID of the OSS service.

cn-hangzhou

BucketName

string

OSS bucket name.

cbg-db

EventBridgeConfig

object

EventBridge configuration.

EventBus

string

Event bus.

testBus

EventSource

string

Event source.

baas\_driver

EventBridgeRegionId

string

Region ID of the EventBridge service.

cn-beijing

RoleArn

string

ARN of the RAM role that grants EventBridge permission.

acs:ram::1933122015759\*\*\*:role/adminoidcaliyun

OpenIdConnectConfig

object

OpenID Connect configuration for third-party account authentication.

OpenIdApiType

string

OpenID Connect mode. Valid values:

-   IDTOKEN: Authorization API that issues tokens. When selected, PublicKeyId and **PublicKey** are required.
    
-   BUSINESS: Business API that validates tokens. When selected, **IdTokenParamName** is required.
    

IDTOKEN

IdTokenParamName

string

Name of the token parameter.

xxx

PublicKeyId

string

ID of the public key.

88483727556929326703309904351185815489

PublicKey

string

Public key.

EB1837F8693CCED0BF750B3AD48467BEB569E780A14591CF92

ErrorCodeSamples

object

ErrorCodeSample

array<object>

Example error codes returned by the backend service.

object

Code

string

Error code.

400

Model

string

Model.

\[\\"\*\\"\]

Message

string

Error message.

Missing the parameter UserId

Description

string

Description.

请求缺少参数 UserId

SystemParameters

object

SystemParameter

array<object>

System parameters sent from API Gateway to the backend service.

object

DemoValue

string

Example value.

192.168.1.1

Description

string

Description of the parameter.

客户端IP

ParameterName

string

Name of the system parameter. Valid values: CaClientIp, CaDomain, CaRequestHandleTime, CaAppId, CaRequestId, CaHttpSchema, and CaProxy.

CaClientIp

Location

string

Location of the parameter. Valid values: BODY, HEAD, QUERY, and PATH.

HEAD

ServiceParameterName

string

Name of the corresponding backend parameter.

clientIp

CustomSystemParameters

object

CustomSystemParameter

array<object>

List of custom system parameters.

object

DemoValue

string

Example value.

192.168.1.1

Description

string

Description of the parameter.

客户端IP

ParameterName

string

Name of the system parameter. Valid values: CaClientIp, CaDomain, CaRequestHandleTime, CaAppId, CaRequestId, CaHttpSchema, and CaProxy.

CaClientIp

Location

string

Location of the parameter. Valid values: BODY, HEAD, QUERY, and PATH.

HEAD

ServiceParameterName

string

Name of the corresponding backend parameter.

clientIp

ConstantParameters

object

ConstantParameter

array<object>

Constant parameters sent from API Gateway to the backend service.

object

Description

string

Description of the parameter.

constance

Location

string

Location of the parameter. Valid values: BODY, HEAD, QUERY, and PATH.

HEAD

ServiceParameterName

string

Name of the backend parameter.

constance

ConstantValue

string

Value of the constant parameter.

constance

RequestParameters

object

RequestParameter

array<object>

Parameters sent from consumers to API Gateway.

object

JsonScheme

string

JSON schema validation. Valid only when **ParameterType** is String.

JSON

MaxValue

integer

Maximum value. Valid only when **ParameterType** is Int, Long, Float, or Double.

123456

ArrayItemsType

string

Type of the array element.

String

MinValue

integer

Minimum value. Valid only when **ParameterType** is Int, Long, Float, or Double.

123456

DocShow

string

Visibility in the documentation. Valid values: **PUBLIC** and **PRIVATE**.

PUBLIC

MaxLength

integer

Maximum length of the parameter. Valid only when **ParameterType** is String.

123456

DefaultValue

string

Default value.

20

ApiParameterName

string

Parameter name.

age

EnumValue

string

Allowed discrete values. Valid only when **ParameterType** is Int, Long, Float, Double, or String. Separate multiple values with commas, such as 1,2,3,4,9 or A,B,C,E,F.

boy,girl

DemoValue

string

Example value.

20

Required

string

Specifies whether the parameter is required. Valid values: **REQUIRED** and **OPTIONAL**.

OPTIONAL

Description

string

Description of the parameter.

年龄

ParameterType

string

Type of the parameter. Valid values: String, Int, Long, Float, Double, and Boolean.

String

RegularExpression

string

Regular expression for parameter validation. Valid only when **ParameterType** is String.

xxx

MinLength

integer

Minimum length of the parameter. Valid only when **ParameterType** is String.

123456

DocOrder

integer

Order in the documentation.

0

Location

string

Location of the parameter. Valid values: BODY, HEAD, QUERY, and PATH.

HEAD

ServiceParameters

object

ServiceParameter

array<object>

Parameters that the gateway sends to the backend service in an API request.

object

Location

string

The location of the parameter. Valid values: BODY, HEAD, QUERY, PATH.

HEAD

ParameterType

string

Backend parameter data type. Values can be STRING, NUMBER, or BOOLEAN, representing character, number, and Boolean respectively.

String

ServiceParameterName

string

The name of the backend parameter.

clientIp

ServiceParametersMap

object

ServiceParameterMap

array<object>

Mapping between parameters that the consumer sends to the gateway and parameters that the gateway sends to the backend service.

object

RequestParameterName

string

Corresponds to the frontend request parameter name. This value must exist in RequestParametersObject and match RequestParam.ApiParameterName.

name

ServiceParameterName

string

Backend parameter name

name

DeployedInfos

object

DeployedInfo

array<object>

API publish status

object

StageName

string

The environment name can be RELEASE or TEST.

RELEASE

EffectiveVersion

string

The effective version.

xxx

DeployedStatus

string

The deployment status. Valid values: DEPLOYED and NONDEPLOYED. DEPLOYED indicates that the API is deployed. NONDEPLOYED indicates that the API is not deployed.

DEPLOYED

TagList

object

Tag

array<object>

Tag list

object

TagKey

string

Tag key

APP

TagValue

string

Tag value

value3

## Examples

Success response

`JSON` format

```
{
  "ApiId": "8afff6c8c4c6447abb035812e4d66b65",
  "ResultType": "JSON",
  "WebSocketApiType": "COMMON",
  "DisableInternet": false,
  "ResultBodyModel": "{}",
  "ResultSample": "200",
  "AppCodeAuthType": "HEADER",
  "AllowSignatureMethod": "HmacSHA256",
  "RegionId": "cn-qingdao",
  "ForceNonceCheck": true,
  "Visibility": "PUBLIC",
  "FailResultSample": "400",
  "AuthType": "APP",
  "ModifiedTime": "2016-07-28T13:13:12Z",
  "RequestId": "D0FF585F-7966-40CF-BC60-75DB070B23D5<",
  "Description": "Api description",
  "GroupName": "ApiTest",
  "GroupId": "08ae4aa0f95e4321849ee57f4e0b3077",
  "Mock": "CLOSED",
  "MockResult": "test result",
  "CreatedTime": "2016-07-28T09:50:43Z",
  "ApiName": "ApiName",
  "BackendEnable": true,
  "BackendConfig": {
    "BackendId": "0038e00c3dca44fcba3a94015d8f5bbf",
    "BackendType": "HTTP",
    "BackendName": "testoss"
  },
  "RequestConfig": {
    "BodyModel": "https://apigateway.aliyun.com/models/3a240a127dcc4afd9ab1bf7e947b4095/9e2df550e85b4121a79ec33e2619eaab",
    "RequestPath": "/api/billing/test/[type]",
    "RequestHttpMethod": "POST",
    "BodyFormat": "STREAM",
    "RequestMode": "MAPPING",
    "PostBodyDescription": "fwefwef",
    "RequestProtocol": "HTTP",
    "EscapePathParam": true
  },
  "ServiceConfig": {
    "AoneAppName": "ib-blank",
    "MockStatusCode": 200,
    "ContentTypeValue": "application/x-www-form-urlencoded; charset=UTF-8",
    "ServiceProtocol": "HTTP",
    "ServicePath": "/object/add",
    "ContentTypeCatagory": "CUSTOM",
    "ServiceAddress": "http://api.a.com:8080",
    "Mock": "TRUE",
    "ServiceVpcEnable": "TRUE",
    "MockResult": "test result",
    "ServiceHttpMethod": "POST",
    "ServiceTimeout": 1000,
    "MockHeaders": {
      "MockHeader": [
        {
          "HeaderValue": "86400",
          "HeaderName": "Content-Length"
        }
      ]
    },
    "VpcConfig": {
      "VpcId": "vpc-2zeafsc3fygk1***",
      "VpcScheme": "HTTP",
      "InstanceId": "i-bp1h497hkijewv2***",
      "Port": 8080,
      "Name": "glmall-app-test"
    },
    "FunctionComputeConfig": {
      "FcType": "HttpTrigger",
      "RoleArn": "acs:ram::111***:role/aliyunserviceroleforsas",
      "Method": "GET",
      "FcBaseUrl": "https://1227****64334133.ap-southeast-1-int***al.fc.aliyuncs.com/201****-15/proxy/test****ice.LATEST/testHttp/",
      "ContentTypeValue": "application/x-www-form-urlencoded; charset=UTF-8",
      "RegionId": "cn-qingdao",
      "OnlyBusinessPath": false,
      "FunctionName": "edge_function",
      "ContentTypeCatagory": "DEFAULT",
      "Path": "/api/offline/cacheData",
      "ServiceName": "fcservicename",
      "Qualifier": "2",
      "TriggerName": "",
      "FcVersion": ""
    },
    "OssConfig": {
      "Key": "/folder/test.json",
      "Action": "GetObject",
      "OssRegionId": "cn-hangzhou",
      "BucketName": "cbg-db"
    },
    "EventBridgeConfig": {
      "EventBus": "testBus",
      "EventSource": "baas_driver",
      "EventBridgeRegionId": "cn-beijing",
      "RoleArn": "acs:ram::1933122015759***:role/adminoidcaliyun"
    }
  },
  "OpenIdConnectConfig": {
    "OpenIdApiType": "IDTOKEN",
    "IdTokenParamName": "xxx",
    "PublicKeyId": "88483727556929326703309904351185815489",
    "PublicKey": "EB1837F8693CCED0BF750B3AD48467BEB569E780A14591CF92"
  },
  "ErrorCodeSamples": {
    "ErrorCodeSample": [
      {
        "Code": "400",
        "Model": "[\\\"*\\\"]",
        "Message": "Missing the parameter UserId",
        "Description": "请求缺少参数 UserId"
      }
    ]
  },
  "SystemParameters": {
    "SystemParameter": [
      {
        "DemoValue": "192.168.1.1",
        "Description": "客户端IP",
        "ParameterName": "CaClientIp",
        "Location": "HEAD",
        "ServiceParameterName": "clientIp"
      }
    ]
  },
  "CustomSystemParameters": {
    "CustomSystemParameter": [
      {
        "DemoValue": "192.168.1.1",
        "Description": "客户端IP",
        "ParameterName": "CaClientIp",
        "Location": "HEAD",
        "ServiceParameterName": "clientIp"
      }
    ]
  },
  "ConstantParameters": {
    "ConstantParameter": [
      {
        "Description": "constance",
        "Location": "HEAD",
        "ServiceParameterName": "constance",
        "ConstantValue": "constance"
      }
    ]
  },
  "RequestParameters": {
    "RequestParameter": [
      {
        "JsonScheme": "JSON",
        "MaxValue": 123456,
        "ArrayItemsType": "String",
        "MinValue": 123456,
        "DocShow": "PUBLIC",
        "MaxLength": 123456,
        "DefaultValue": "20",
        "ApiParameterName": "age",
        "EnumValue": "boy,girl",
        "DemoValue": "20",
        "Required": "OPTIONAL",
        "Description": "年龄",
        "ParameterType": "String",
        "RegularExpression": "xxx",
        "MinLength": 123456,
        "DocOrder": 0,
        "Location": "HEAD"
      }
    ]
  },
  "ServiceParameters": {
    "ServiceParameter": [
      {
        "Location": "HEAD",
        "ParameterType": "String",
        "ServiceParameterName": "clientIp"
      }
    ]
  },
  "ServiceParametersMap": {
    "ServiceParameterMap": [
      {
        "RequestParameterName": "name",
        "ServiceParameterName": "name"
      }
    ]
  },
  "DeployedInfos": {
    "DeployedInfo": [
      {
        "StageName": "RELEASE",
        "EffectiveVersion": "xxx",
        "DeployedStatus": "DEPLOYED"
      }
    ]
  },
  "TagList": {
    "Tag": [
      {
        "TagKey": "APP",
        "TagValue": "value3"
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/CloudAPI/2016-07-14/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/CloudAPI/2016-07-14/DescribeApi#workbench-doc-change-demo) for a complete list.
