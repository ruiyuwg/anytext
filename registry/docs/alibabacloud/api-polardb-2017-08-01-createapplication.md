Creates an application in a PolarDB instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateApplication)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateApplication)

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

polardb:CreateApplication

get

\*All Resource

`*`

None

None

## Request syntax

```
POST  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Description

string

No

The description of the application.

myapp

ApplicationType

string

Yes

The type of application to create. Valid values:

-   supabase: Creates a managed Supabase application.
    
-   raycluster: Creates a managed Ray Cluster application.
    
-   polarclaw: Creates a managed PolarClaw application.
    

supabase

DBClusterId

string

No

The ID of the PolarDB instance that the application depends on.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RegionId

string

No

The region of the application. Defaults to the region of the instance.

cn-beijing

ZoneId

string

No

The zone of the application. Defaults to the primary zone of the instance.

cn-beijing-k

VSwitchId

string

No

The ID of the vSwitch. Defaults to the vSwitch in the primary zone of the instance.

vsw-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Architecture

string

Yes

The CPU architecture. Valid value:

-   x86
    

x86

Endpoints

array<object>

No

A list of custom service endpoints. By default, the system creates a VPC Endpoint.

object

No

The service endpoint.

Description

string

No

The description of the service endpoint.

my\_endpoint

EndpointType

string

No

The type of the service endpoint. The value must be Primary.

Primary

Components

array<object>

No

A list of custom subcomponents for the application.

object

No

Configuration for an application subcomponent.

ComponentType

string

No

The type of the application subcomponent.

If ApplicationType is supabase, valid values are:

-   gateway
    
-   backend
    

If ApplicationType is raycluster, valid values are:

-   head
    
-   worker
    
-   gpuworker
    

gateway

ComponentClass

string

No

The specifications of the application subcomponent.

polar.app.g2.medium

ComponentReplica

integer

No

The number of replicas for the application subcomponent. Defaults to 1.

1

SecurityIPList

string

No

The IP whitelist for the application subcomponent. Separate multiple IP addresses with commas (,).

127.0.0.1

SecurityIPType

string

No

The type of the IP addresses in the IP whitelist for the application subcomponent. Defaults to ipv4.

ipv4

SecurityIPArrayName

string

No

The name of the IP whitelist group for the application subcomponent. Defaults to default.

default

SecurityGroups

string

No

A comma-separated list of security group IDs for the application subcomponent.

sg-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ComponentMaxReplica

integer

No

The maximum number of replicas for an application subcomponent with the same specifications. Defaults to the value of ComponentReplica.

-   This parameter is supported only when ApplicationType is set to raycluster.
    

1

ScaleMin

string

No

ScaleMax

string

No

PayType

string

No

The billing method.

Postpaid

AutoRenew

boolean

No

Specifies whether to enable auto-renewal.

true

Period

string

No

The subscription period unit.

Year

UsedTime

string

No

The subscription duration.

1

ResourceGroupId

string

No

The resource group ID.

rg-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. If set to true, the system validates the request but does not create the application. The default value is false.

false

PolarFSInstanceId

string

No

The ID of the Polarlakebase Cold Storage or High-Performance instance. If this parameter is specified, the system mounts the corresponding storage to the application. If this parameter is not specified, no storage is mounted.

This parameter applies only to the following application types:

-   supabase
    
-   raycluster
    

pcs-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

VpcId

string

No

The ID of the VPC.

AutoCreatePolarFs

boolean

No

Specifies whether to automatically create a Polarlakebase Cold Storage instance. Valid values:

-   true: automatically creates an instance.
    
-   false (default): does not automatically create an instance.
    

false

AutoUseCoupon

boolean

No

Specifies whether to automatically use a coupon. Valid values:

-   true (default): uses a coupon.
    
-   false: does not use a coupon.
    

true

PromotionCode

string

No

The coupon code. If this parameter is not specified, the system uses an available coupon by default.

727xxxxxx934

SecurityGroupId

string

No

The security group ID.

MemApplicationSpec

object

No

The specifications for a mem0 application. This parameter is required when ApplicationType is mem0.

LlmModel

string

No

The name of the large language model (LLM). This parameter is required for mem0 applications. Example: qwen3-max.

EmbedderModel

string

No

The name of the embedder model. This parameter is required for mem0 applications. Example: text-embedding-v4.

RerankerModel

string

No

The name of the reranker model. This parameter is required for mem0 applications. Example: qwen3-rerank.

ProjectName

string

No

The project name. This name corresponds to the database schema where project data is stored.

DbName

string

No

The database name.

DbUser

string

No

The database username.

DbPassword

string

No

The password for the database user.

GraphLlmModel

string

No

The name of the graph large language model (LLM).

EmbedderModelDimension

integer

No

The vector dimension.

Shard

integer

No

The number of table shards.

ModelFrom

string

No

The source of the model. Valid values:

-   bailian: A model from Model Studio.
    
-   custom: A custom model.
    
-   maas: A PolarDB model operator.
    

bailian

AIDBClusterId

string

No

The ID of the associated model operator instance. This parameter applies only when ApplicationType is set to polarclaw.

pm-xxxxxx

ModelApiKey

string

No

The API key for the model. This parameter applies only when ApplicationType is set to polarclaw.

sk-xxxxxx

ModelBaseUrl

string

No

The base URL of the model service. This parameter applies only when ApplicationType is set to polarclaw.

https://dashscope.aliyuncs.com/compatible-mode/v1

ModelApi

string

No

The model API. This parameter applies only when ApplicationType is set to polarclaw.

openai-completions

ModelName

string

No

The name of the model. This parameter applies only when ApplicationType is set to polarclaw.

qwen3-max

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response schema.

ResourceAvailable

boolean

Indicates whether the required resources are available. This parameter is returned only when `DryRun` is set to `true`.

true

ApplicationId

string

The application ID.

pa-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Description

string

The description of the application.

myapp

Components

array<object>

A list of components.

object

A component object.

ComponentId

string

The component ID.

pac-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

OrderId

string

The order ID.

2148126708\*\*\*\*\*

RequestId

string

The request ID.

3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF

ResourceGroupId

string

The resource group ID.

rg-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "ResourceAvailable": true,
  "ApplicationId": "pa-********************",
  "Description": "myapp",
  "Components": [
    {
      "ComponentId": "pac-********************"
    }
  ],
  "OrderId": "2148126708*****",
  "RequestId": "3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF",
  "ResourceGroupId": "rg-********************"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/CreateApplication#workbench-doc-change-demo) for a complete list.
