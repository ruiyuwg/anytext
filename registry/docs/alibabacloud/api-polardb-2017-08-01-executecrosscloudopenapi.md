Calls a cross-cloud OpenAPI.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ExecuteCrossCloudOpenAPI)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ExecuteCrossCloudOpenAPI)

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

polardb:ExecuteCrossCloudOpenAPI

none

\*All Resource

`*`

None

None

## Request syntax

```
GET  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ProxyInfo

string

No

The information required to call the cross-cloud OpenAPI.

{"Action":"DescribeDBClusters"}

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

E56531A4-E552-40BA-9C58-137B80\*\*\*\*\*\*

ProxyData

string

The result of the request.

{"ProxyData": "{\\"DBCluster\\":\[{\\"AliyunRegionId\\":\\"cn-beijing\\",\\"CloudProvider\\":\\"huawei\\",\\"CreateTime\\":\\"2024-11-25T14:49:10Z\\",\\"CrossCloudRegionId\\":\\"cn-east-3\\",\\"DBClusterDescription\\":\\"\\",\\"DBClusterId\\":\\"pc-2zej3qvf5fg\*\*\*\*\*\*\\",\\"DBClusterStatus\\":\\"Creating\\",\\"DBType\\":\\"polardb\_mysql\\",\\"DBVersion\\":\\"8.0\\",\\"ProjectId\\":\\"pj-bp1m8oh1k68\*\*\*\*\*\*\\"},{\\"AliyunRegionId\\":\\"cn-beijing\\",\\"CloudProvider\\":\\"huawei\\",\\"CreateTime\\":\\"2024-11-25T14:59:10Z\\",\\"CrossCloudRegionId\\":\\"cn-east-3\\",\\"DBClusterDescription\\":\\"\\",\\"DBClusterId\\":\\"pc-2ze29994l17\*\*\*\*\*\*\\",\\"DBClusterStatus\\":\\"Running\\",\\"DBType\\":\\"polardb\_mysql\\",\\"DBVersion\\":\\"8.0\\",\\"ProjectId\\":\\"pj-bp1m8oh1k68\*\*\*\*\*\*\\"}\]}","RequestId": "E56531A4-E552-40BA-9C58-137B80\*\*\*\*\*\*"}

## Examples

Success response

`JSON` format

```
{
  "RequestId": "E56531A4-E552-40BA-9C58-137B80******",
  "ProxyData": "{\"ProxyData\": \"{\\\"DBCluster\\\":[{\\\"AliyunRegionId\\\":\\\"cn-beijing\\\",\\\"CloudProvider\\\":\\\"huawei\\\",\\\"CreateTime\\\":\\\"2024-11-25T14:49:10Z\\\",\\\"CrossCloudRegionId\\\":\\\"cn-east-3\\\",\\\"DBClusterDescription\\\":\\\"\\\",\\\"DBClusterId\\\":\\\"pc-2zej3qvf5fg******\\\",\\\"DBClusterStatus\\\":\\\"Creating\\\",\\\"DBType\\\":\\\"polardb_mysql\\\",\\\"DBVersion\\\":\\\"8.0\\\",\\\"ProjectId\\\":\\\"pj-bp1m8oh1k68******\\\"},{\\\"AliyunRegionId\\\":\\\"cn-beijing\\\",\\\"CloudProvider\\\":\\\"huawei\\\",\\\"CreateTime\\\":\\\"2024-11-25T14:59:10Z\\\",\\\"CrossCloudRegionId\\\":\\\"cn-east-3\\\",\\\"DBClusterDescription\\\":\\\"\\\",\\\"DBClusterId\\\":\\\"pc-2ze29994l17******\\\",\\\"DBClusterStatus\\\":\\\"Running\\\",\\\"DBType\\\":\\\"polardb_mysql\\\",\\\"DBVersion\\\":\\\"8.0\\\",\\\"ProjectId\\\":\\\"pj-bp1m8oh1k68******\\\"}]}\",\"RequestId\": \"E56531A4-E552-40BA-9C58-137B80******\"}"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ExecuteCrossCloudOpenAPI#workbench-doc-change-demo) for a complete list.
