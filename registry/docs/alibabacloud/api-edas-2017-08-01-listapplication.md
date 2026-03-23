Queries a list of applications.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Edas/2017-08-01/ListApplication)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Edas/2017-08-01/ListApplication)

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

edas:ReadApplication

\*All Resources

`*`

none

none

## Request syntax

```
POST /pop/v5/app/app_list HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

ClusterId

string

No

The cluster ID. Specify this parameter if you want to filter applications by cluster.

c37aec2a-bcca-4ec1-\*\*\*\*-\*\*\*\*\*\*\*\*\*\*\*\*

LogicalRegionId

string

No

The namespace ID. Specify this parameter if you want to filter applications by namespace.

cn-beijing:test

AppName

string

No

The name of the application. Specify this parameter if you want to filter applications by application name.

testapp

ResourceGroupId

string

No

The ID of the resource group. Specify this parameter if you want to filter applications by resource group.

rg-aek24j4s4b\*\*\*\*\*

LogicalRegionIdFilter

string

No

The ID of the namespace that you use in the exact search to filter applications.

cn-beijing:test

AppIds

string

No

The application IDs.

\[ "5657d271-\*\*\*\*-4f03-9bb2-431f942886bb", "5657d271-\*\*\*\*-4f03-9bb2-431f942bbddd" \]

CurrentPage

integer

No

The page number. Default value: 1.

1

PageSize

integer

No

The number of entries per page.

20

## Response parameters

Parameter

Type

Description

Example

object

The content returned.

Code

integer

The HTTP status code that is returned.

200

Message

string

The message that is returned.

success

RequestId

string

The request ID.

5d6fa0bc-cc3\*\*\*\*\*\*\*\*\*\*

ApplicationList

array<object>

The information about applications.

Application

object

The information about the array object.

AppId

string

The ID of the application.

00ee517d-dd7d-4d4e-\*\*\*\*-\*\*\*\*\*\*\*\*\*\*\*\*

RegionId

string

The region ID of the application.

cn-beijing:docTes

Name

string

The name of the application.

doc-test-consumer

Instances

integer

The number of application instances.

5

Port

integer

The service port of the application.

8080

State

string

The state of the application. Valid values:

-   RUNNING: The application is running.
-   STOPPED: The application is stopped.
-   DEPLOYING: The application is being deployed.
-   DELETING: The application is being deleted.

RUNNING

CreateTime

long

The time when the application was created.

1664208000000

SlbIp

string

The IP address of the internal-facing Server Load Balancer (SLB) instance.

192.168.0.\*\*\*

SlbPort

integer

The port of the internal-facing SLB instance.

80

SlbListenerPort

integer

The listener port of the internal-facing SLB instance.

8088

ExtSlbListenerPort

integer

The listener port of the Internet-facing SLB instance.

8080

BuildPackageId

long

The build package number of Enterprise Distributed Application Service (EDAS) Container.

58

ExtSlbIp

string

The IP address of the Internet-facing SLB instance.

100.100.70.\*\*\*

ApplicationType

string

The deployment type of the application. Valid values:

-   War: The application is deployed by using a WAR package.
-   FatJar: The application is deployed by using a JAR package.
-   Image: The application is deployed by using an image.
-   If this parameter is empty, the application is not deployed.

FatJar

ClusterType

integer

The type of the cluster in which the application is deployed. Valid values:

-   **2**: Elastic Compute Service (ECS) cluster
-   **3**: self-managed Kubernetes cluster in EDAS
-   **5**: Container Service for Kubernetes (ACK) cluster

2

RunningInstanceCount

integer

The number of running application instances.

0

ClusterId

string

The ID of the cluster.

c37aec2a-bcca-4ec1-\*\*\*\*-\*\*\*\*\*\*\*\*\*\*\*\*

ResourceGroupId

string

The ID of the resource group.

rg-aek24j4s4b\*\*\*\*\*

K8sNamespace

string

The namespace of the Kubernetes cluster.

default

NamespaceId

string

The ID of the microservices namespace.

cn-hangzhou:test

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "success",
  "RequestId": "5d6fa0bc-cc3**********",
  "ApplicationList": {
    "Application": [
      {
        "AppId": "00ee517d-dd7d-4d4e-****-************",
        "RegionId": "cn-beijing:docTes",
        "Name": "doc-test-consumer",
        "Instances": 5,
        "Port": 8080,
        "State": "RUNNING",
        "CreateTime": 1664208000000,
        "SlbIp": "192.168.0.***",
        "SlbPort": 80,
        "SlbListenerPort": 8088,
        "ExtSlbListenerPort": 8080,
        "BuildPackageId": 58,
        "ExtSlbIp": "100.100.70.***",
        "ApplicationType": "FatJar",
        "ClusterType": 2,
        "RunningInstanceCount": 0,
        "ClusterId": "c37aec2a-bcca-4ec1-****-************",
        "ResourceGroupId": "rg-aek24j4s4b*****",
        "K8sNamespace": "default",
        "NamespaceId": "cn-hangzhou:test"
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Edas/2017-08-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-12

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Edas/2017-08-01/ListApplication?updateTime=2023-07-12#workbench-doc-change-demo)

2023-03-17

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Edas/2017-08-01/ListApplication?updateTime=2023-03-17#workbench-doc-change-demo)
