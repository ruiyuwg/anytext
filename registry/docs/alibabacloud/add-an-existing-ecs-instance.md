Add existing Elastic Compute Service (ECS) instances to a Container Service for Kubernetes (ACK) cluster as worker nodes.

## Request syntax

```
POST /clusters/<cluster_id>/attach
```

Replace `<cluster_id>` with the ID of the target ACK cluster.

### CLI example

```
aliyun cs POST /clusters/<cluster_id>/attach \
  --header "Content-Type=application/json" \
  --body "$(cat attach.json)"
```

### Headers

**Header**

**Required**

**Value**

`Content-Type`

Yes

`application/json`

## Request body

Define the request body in a JSON file (for example, `attach.json`).

### Parameters

**Parameter**

**Type**

**Required**

**Description**

`instances`

Array of strings

Yes

ECS instance IDs to add to the cluster.

`password`

String

No

Password of the ECS instance. Must be 8 to 30 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Cannot contain backslashes (`\`) or double quotation marks (`"`). You must specify this parameter or `key_pair`.

`key_pair`

String

No

Name of the key pair for login. You must specify this parameter or `password`.

`format_disk`

Boolean

No

Specifies whether to store container data and images on data disks. Default value: `false`. If you set this parameter to `true` and a data disk is attached to the instance, the original data on the disk is cleared.

`tags`

Array

No

Tags to apply to the nodes.

> Specify `password` or `key_pair` for instance authentication.

### Example

```
{
    "password": "ECSpassword1234",
    "instances": ["i-2zee3oiwcyoz7kwd****", "i-2ze0lgm3y6iylcbt****"],
    "format_disk": false,
    "key_pair": "",
    "tags": []
}
```

## Response

A successful request returns a JSON object that contains a `list` array with the result for each instance and a `task_id` for tracking the operation.

### Response parameters

**Parameter**

**Type**

**Description**

`list`

Array

Results for each ECS instance.

`list[].code`

String

Status code. `"200"` indicates success.

`list[].instanceId`

String

ECS instance ID.

`list[].message`

String

Result description.

`task_id`

String

ID of the asynchronous task. Use this ID to track task progress.

### Example

```
{
    "list": [
        {
            "code": "200",
            "instanceId": "i-2zee3oiwcyoz7kwd****",
            "message": "successful"
        },
        {
            "code": "200",
            "instanceId": "i-2ze0lgm3y6iylcbt****",
            "message": "successful"
        }
    ],
    "task_id": "T-5a544aff80282e39ea000039"
}
```
