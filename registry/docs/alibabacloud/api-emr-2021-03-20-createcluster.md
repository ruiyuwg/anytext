Creates a pay-as-you-go or subscription cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Emr/2021-03-20/CreateCluster)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Emr/2021-03-20/CreateCluster)

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

emr:CreateCluster

create

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The region ID.

cn-hangzhou

ResourceGroupId

string

No

The resource group ID.

rg-acfmzabjyop\*\*\*\*

PaymentType

string

No

The billing method. Valid values:

-   PayAsYouGo: pay-as-you-go.
    
-   Subscription: subscription.
    

Default value: PayAsYouGo.

PayAsYouGo

SubscriptionConfig

[SubscriptionConfig](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-struct-subscriptionconfig)

No

The subscription configurations. This parameter is required if you set PaymentType to Subscription.

ClusterType

string

Yes

The cluster type. Valid values:

-   DATALAKE: new data lake.
    
-   OLAP: data analytics.
    
-   DATAFLOW: real-time data stream.
    
-   DATASERVING: data serving.
    
-   CUSTOM: custom cluster.
    
-   HADOOP: earlier-version data lake. We recommend that you use the new data lake.
    

If you create an EMR cluster for the first time after 17:00 (UTC+8) on December 19, 2022, you cannot select HADOOP, DATA\_SCIENCE, PRESTO, or ZOOKEEPER as the cluster type.

DATALAKE

ReleaseVersion

string

Yes

The EMR release version. You can find the EMR release versions on the EMR cluster purchase page.

EMR-5.16.0

ClusterName

string

Yes

The cluster name. The name must be 1 to 128 characters in length. It must start with a letter or a Chinese character. It cannot start with http:// or https://. It can contain letters, digits, Chinese characters, colons (:), underscores (\_), periods (.), and hyphens (-).

emrtest

DeployMode

string

No

The deployment mode of applications in the cluster. Valid values:

-   NORMAL (default): non-high availability (HA) deployment. The cluster has one master node.
    
-   HA: HA deployment. An HA deployment requires at least three master nodes.
    

HA

SecurityMode

string

No

The Kerberos security mode of the cluster. Valid values:

-   NORMAL (default): normal mode. Kerberos is disabled.
    
-   KERBEROS: Kerberos mode. Kerberos is enabled.
    

NORMAL

Applications

array

Yes

The list of applications. The number of array elements N must be in the range of 1 to 100.

[Application](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-struct-application)

No

The application.

ApplicationConfigs

array

No

The application configurations. The number of array elements N must be in the range of 1 to 1000.

[ApplicationConfig](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-struct-applicationconfig)

No

The application configuration.

NodeAttributes

[NodeAttributes](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-struct-nodeattributes)

Yes

The node attributes. This parameter specifies the basic attributes of all Elastic Compute Service (ECS) nodes in the cluster.

NodeGroups

array

Yes

The array of node group configurations. The number of array elements N must be in the range of 1 to 100.

NORMAL

[NodeGroupConfig](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-struct-nodegroupconfig)

No

The node group configuration.

BootstrapScripts

array

No

The array of bootstrap scripts. The number of array elements N must be in the range of 1 to 10.

[Script](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-struct-script)

No

The bootstrap script.

Tags

array

No

The tags. The number of array elements N must be in the range of 0 to 20.

A7D960FA-6DBA-5E07-8746-A63E3E4D\*\*\*\*

[Tag](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-struct-tag)

No

The tag.

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. The results of multiple calls that use the same client token are the same. A maximum of one cluster can be created with the same client token.

A7D960FA-6DBA-5E07-8746-A63E3E4D\*\*\*\*

Description

string

No

The description of the cluster.

Emr cluster for ETL

DeletionProtection

boolean

No

Specifies whether to enable deletion protection for the cluster. Valid values:

-   true: enables deletion protection.
    
-   false: disables deletion protection.
    

Default value: false.

false

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The data returned.

ClusterId

string

The cluster ID.

c-b933c5aac7f7\*\*\*

OperationId

string

The operation ID.

op-13c37a77c505\*\*\*\*

RequestId

string

The request ID.

DD6B1B2A-5837-5237-ABE4-FF0C8944\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "ClusterId": "c-b933c5aac7f7***",
  "OperationId": "op-13c37a77c505****",
  "RequestId": "DD6B1B2A-5837-5237-ABE4-FF0C8944****"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationDenied

The operation is invalid. %s

400

OutOfStock

The requested resource is sold out in the specified zone, try other types of resources or other regions and zones.

400

QuotaExceeded

Request fail due to quota exceed. %s

400

AccountException

Account exception. %s

400

ConflictParameters

Parameters that must not be used together. %s

400

IncompleteSignature

The request signature is invalid.

400

InvalidAction

The action %s requested is invalid.

400

InvalidParameter

The specified parameter %s is not valid.

400

InvalidParameterValue

The input parameter %s is invalid or out of range.

400

MissingAction

The action %s requested is missing.

400

MissingParameter

The input parameter %s that is mandatory for processing this request is not supplied.

400

NotAuthorized

You do not have permission to perform this action. %s

400

ThrottlingException

The request was denied due to request throttling. %s

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

404

ResourceNotFound

The resource not found by %s.

503

ServiceFailure

The request has failed due to a temporary failure of %s service.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Emr/2021-03-20/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Emr/2021-03-20/CreateCluster#workbench-doc-change-demo) for a complete list.
