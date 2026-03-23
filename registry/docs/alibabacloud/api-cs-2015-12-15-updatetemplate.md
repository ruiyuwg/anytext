Updates the configurations of an orchestration template. An orchestration template defines and describes a group of Container Service for Kubernetes (ACK) resources. An orchestration template describes the configurations of an application or how an application runs in a declarative manner.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/UpdateTemplate)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/UpdateTemplate)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cs:UpdateTemplate

update

\*All Resources

`*`

none

none

## Request syntax

```
PUT /templates/{TemplateId} HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

TemplateId

string

Yes

The ID of the template.

72d20cf8-a533-4ea9-a10d-e7630d3d2708

body

object

No

The request body.

description

string

No

The description of the template.

web server cluster

name

string

No

The name of the template.

webserver01

tags

string

No

The label of the template.

web

template

string

No

The YAML content of the template.

apiVersion: apps/v1\\\\nkind: Deployment\\\\nmetadata:\\\\n name: nginx-deployment-basic\\\\n labels:\\\\n app: nginx\\\\nspec:\\\\n replicas: 2\\\\n selector:\\\\n matchLabels:\\\\n app: nginx\\\\n template:\\\\n metadata:\\\\n labels:\\\\n app: nginx\\\\n spec:\\\\n containers:\\\\n - name: nginx\\\\n image: busybox:latest\\\\n ports:\\\\n - containerPort: 8080

template\_type

string

No

The type of template. This parameter can be set to a custom value.

-   If the parameter is set to `kubernetes`, the template is displayed on the Templates page in the console.
-   If the parameter is set to `compose`, the template is displayed on the Container Service - Swarm page in the console. Container Service for Swarm is deprecated.

kubernetes

## Response parameters

Parameter

Type

Description

Example

The current API has no return parameters

## Examples

Sample success responses

`JSON`format

```
{}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
