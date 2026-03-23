Unbinds an SSH key pair from Linux Elastic Compute Service (ECS) instances.

## Operation description

When you call this operation, take note of the following items:

-   After you unbind an SSH key pair from an instance, you must call the [RebootInstance](/help/en/ecs/api-rebootinstance) operation to restart the instance to allow the unbind operation to take effect.
-   After you unbind an SSH key pair from an instance, the username and password authentication method is selected for the instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DetachKeyPair)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DetachKeyPair)

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

ecs:DetachKeyPair

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/{#keypairName}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the SSH key pair. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

KeyPairName

string

Yes

The name of the SSH key pair.

testKeyPairName

InstanceIds

string

Yes

The IDs of instances from which you want to unbind the SSH key pair. The value can be a JSON array that consists of up to 50 instance IDs. Separate multiple instance IDs with commas (,).

\["i-bp1d6tsvznfghy7y\*\*\*\*", "i-bp1ippxbaql9zet7\*\*\*\*", … "i-bp1ib7bcz07l\*\*\*\*"\]

## Response parameters

Parameter

Type

Description

Example

object

KeyPairName

string

The name of the key pair.

testKeyPairName

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TotalCount

string

The total number of instances from which you want to unbind the SSH key pair.

2

FailCount

string

The number of instances from which the SSH key pair failed to be unbound.

0

Results

array<object>

The result set of the unbind operation.

Result

object

Code

string

The operation status code that is returned. 200 indicates that the operation is successful.

200

Message

string

The result of the operation. For example, if the value of `Code` is 200, the value of `Message` is `successful`.

successful

InstanceId

string

The ID of the instance.

i-bp1d6tsvznfghy7y\*\*\*\*

Success

string

Indicates whether the operation is successful.

true

## Examples

Sample success responses

`JSON`format

```
{
  "KeyPairName": "testKeyPairName",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TotalCount": 2,
  "FailCount": 0,
  "Results": {
    "Result": [
      {
        "Code": 200,
        "Message": "successful",
        "InstanceId": "i-bp1d6tsvznfghy7y****",
        "Success": true
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidKeyPairName.NotFound

The specified KeyPairName does not exist in our records.

The specified KeyPairName parameter does not exist.

400

InvalidInstanceIds.ValueNotSupported

The specified parameter InstanceIds is not valid.

The specified InstanceIds parameter is invalid.

403

DependencyViolation.WindowsInstance

The instance creating is windows, cannot use ssh key pair to login.

\-

403

InstanceKeyPairLimitExceeded

The specified instances are beyond the permitted range.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DetachKeyPair?updateTime=2024-12-17#workbench-doc-change-demo)

2023-07-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DetachKeyPair?updateTime=2023-07-10#workbench-doc-change-demo)
