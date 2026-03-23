Returns a list of custom clusters.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeAIDBClusters)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeAIDBClusters)

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

polardb:DescribeAIDBClusters

get

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

DBClusterIds

string

No

The cluster ID. To specify multiple cluster IDs, separate them with commas (,).

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

PageSize

integer

No

The number of entries to return on each page. Valid values: **30**, **50**, and **100**.

Default value: **30**.

30

PageNumber

integer

No

The page number.

1

DBClusterDescription

string

No

The description of the cluster. This parameter supports fuzzy queries.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBClusterStatus

string

No

The cluster status. Valid values:

-   **Creating**: The cluster is being created.
    
-   **Running**: The cluster is running.
    
-   **Deleting**: The cluster is being released.
    
-   **Rebooting**: The cluster is being restarted.
    
-   **DBNodeCreating**: Nodes are being added.
    
-   **DBNodeDeleting**: Nodes are being deleted.
    
-   **ClassChanging**: The node specifications are being changed.
    
-   **NetAddressCreating**: Network connections are being created.
    
-   **NetAddressDeleting**: Network connections are being deleted.
    
-   **NetAddressModifying**: Network connections are being modified.
    
-   **Deleted**: The cluster is released.
    

-   **ClassChanged**: Resources are being reclaimed after an upgrade or downgrade.
    

Running

PayType

string

No

The billing method. Valid values:

-   **Postpaid**: pay-as-you-go
    
-   **Prepaid**: subscription
    

Prepaid

RegionId

string

Yes

The region ID.

cn-hangzhou

AiNodeType

string

No

The node type. You can specify multiple types. Separate them with a comma (,).

-   vnode: A node managed by Kubernetes.
    
-   container: A container that you can log on to.
    
-   maas: A model service.
    

vnode,container

Tag

array<object>

No

object

No

Key

string

No

Value

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

RequestId

string

Id of the request

9D6CE7C6-1C52-5BF6-B3D7-10977D44542C

TotalRecordCount

integer

The total number of entries.

5

PageRecordCount

integer

The number of entries on the current page.

7

PageNumber

integer

The page number of the returned page. Default value: 1.

1

Items

object

DBCluster

array<object>

The list of AI cluster instances.

array<object>

The properties of the AI cluster instance.

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RegionId

string

The region ID.

cn-hangzhou

ZoneId

string

The zone ID.

cn-hangzhou-j

PayType

string

The billing method. Valid values:

-   **Postpaid**: pay-as-you-go.
    
-   **Prepaid**: subscription.
    

Postpaid

DBClusterStatus

string

The cluster status.

Creating

DBClusterDescription

string

The cluster description.

ocpx

VpcId

string

The ID of the virtual private cloud (VPC) where the endpoint is located.

vpc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBNodeClass

string

The node specifications.

polar.pg.g8.8xlarge.gu30

StorageType

string

The storage class. Valid values:

-   **essdpl0**
    
-   **essdpl1**
    
-   **essdpl2**
    
-   **essdpl3**
    

essdpl0

StorageSpace

integer

The storage space after the change. Unit: GB.

10

ExpireTime

string

The expiration time.

**Note**

This parameter is returned only for subscription clusters. For pay-as-you-go clusters, an empty value is returned.

2028-09-01T16:00:00Z

Expired

boolean

Indicates whether the cluster has expired. Valid values:

-   **true**
    
-   **false**
    

False

LockMode

string

The lock state of the cluster. Valid values:

-   **Unlock**: Normal.
    
-   **ManualLock**: The cluster is manually locked.
    
-   **LockByExpiration**: The cluster is automatically locked upon expiration.
    

Unlock

CreateTime

string

The time when the cluster was created.

2021-09-13T15:45:27Z

KubeClusterId

string

The ACK cluster ID.

xxxxxxxxxxxx

RunType

string

The run type. Valid values:

-   container: A container.
    
-   default: A node.
    

container

DBType

string

The database engine type. Only **polardb\_ai** is supported.

polardb\_ai

AiNodeType

string

The node type. Valid values:

vnode: A node managed by Kubernetes. container: A container that you can log on to. maas: A model service.

vnode

Tags

object

Tag

array<object>

object

Key

string

Value

string

VswitchId

string

RelativeDBClusterId

string

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ModelType

string

## Examples

Success response

`JSON` format

```
{
  "RequestId": "9D6CE7C6-1C52-5BF6-B3D7-10977D44542C",
  "TotalRecordCount": 5,
  "PageRecordCount": 7,
  "PageNumber": 1,
  "Items": {
    "DBCluster": [
      {
        "DBClusterId": "pc-**************",
        "RegionId": "cn-hangzhou",
        "ZoneId": "cn-hangzhou-j",
        "PayType": "Postpaid",
        "DBClusterStatus": "Creating",
        "DBClusterDescription": "ocpx",
        "VpcId": "vpc-***************",
        "DBNodeClass": "\npolar.pg.g8.8xlarge.gu30",
        "StorageType": "essdpl0",
        "StorageSpace": 10,
        "ExpireTime": "2028-09-01T16:00:00Z",
        "Expired": true,
        "LockMode": "Unlock",
        "CreateTime": "2021-09-13T15:45:27Z",
        "KubeClusterId": "xxxxxxxxxxxx",
        "RunType": "container",
        "DBType": "polardb_ai",
        "AiNodeType": "vnode",
        "Tags": {
          "Tag": [
            {
              "Key": "",
              "Value": ""
            }
          ]
        },
        "VswitchId": "",
        "RelativeDBClusterId": "pc-**************",
        "ModelType": ""
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeAIDBClusters#workbench-doc-change-demo) for a complete list.
