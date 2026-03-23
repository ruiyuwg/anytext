You can call the ModifyClusterNodePool operation to scale a node pool.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=CS&api=ModifyCluster&type=ROA&version=2015-12-15)

## Request syntax

```
PUT /clusters/ClusterId/nodepools/NodepoolId HTTP/1.1
Content-Type:application/json
{
    "scaling_group": {
        "desired_size": Long
    }
}
```

## Request parameters

Table 1. Request path parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

ClusterId

String

Yes

c23421cfa74454bc8b37163fd19af\*\*\*\*

The ID of the cluster that you want to manage.

NodepoolId

String

Yes

np31da1b38983f4511b490fc62108a\*\*\*\*

The ID of the node pool that you want to scale.

Table 2. Request body parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

desired\_size

Long

No

1

The expected number of nodes in the node pool. You can scale the node pool by modifying the expected number of nodes in the node pool. You can add at most 500 nodes in one API call. The maximum number of nodes that can be added is limited by the quota of nodes in the cluster.

## Response syntax

```
HTTP/1.1 200 
Content-Type:application/json 
{
  "task_id" : "String" 
}
```

## Response parameters

Table 3. Response body parameters

**Parameter**

**Type**

**Example**

**Description**

task\_id

String

T-5faa48fb31b6b8078d00\*\*\*\*

The ID of the task.

## Examples

Sample requests

```
PUT /clusters/c23421cfa74454bc8b37163fd19af****/nodepools/np31da1b38983f4511b490fc62108a**** HTTP/1.1  
Content-Type:application/json 
{
  "scaling_group":{"desired_size":1}
}
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK 
Content-Type:application/xml 

<task_id>T-5faa48fb31b6b8078d00****</task_id>
```

`JSON` format

```
HTTP/1.1 200 OK 
Content-Type:application/json 

{  
  "task_id" : "T-5faa48fb31b6b8078d00****" 
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/CS).
