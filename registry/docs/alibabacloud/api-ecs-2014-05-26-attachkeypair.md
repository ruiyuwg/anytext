Binds an SSH key pair to one or more Linux instances.

## Operation description

Take note of the following items:

-   SSH key pairs are not supported on Windows instances.
-   If an SSH key pair is bound to an instance, authentication by using the username and password is disabled for the instance.
-   If you bind an SSH key pair to an instance in the **running** state, you must call the [RebootInstance](/help/en/ecs/api-rebootinstance) operation to restart the instance for the key pair to take effect.
-   If you bind an SSH key pair to an instance in the **stopped** state, you must call the [StartInstance](/help/en/ecs/api-startinstance) operation to start the instance for the key pair to take effect.
-   If an instance is already bound to an SSH key pair, the new SSH key pair will replace the original one.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/AttachKeyPair)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/AttachKeyPair)

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

ecs:AttachKeyPair

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

The IDs of instances to which you want to bind the SSH key pair. The value can be a JSON array that consists of up to 50 instance IDs. Separate multiple instance IDs with commas (,).

\["i-bp1gtjxuuvwj17zr\*\*\*\*", "i-bp17b7zrsbjwvmfy\*\*\*\*", … "i-bp1h6jmbefj1ytos\*\*\*\*"\]

## Response parameters

Parameter

Type

Description

Example

object

KeyPairName

string

The name of the SSH key pair.

testKeyPairName

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TotalCount

string

The total number of instances to which the SSH key pair is bound.

2

FailCount

string

The number of instances to which the SSH key pair fails to be bound.

0

Results

array<object>

An array that contains the results of the operation.

Result

object

Code

string

The operation status code returned. 200 indicates that the operation was successful.

200

Message

string

The operation information returned. When the value of Code is 200, the value of Message is successful.

successful

InstanceId

string

The instance ID.

i-m5eg7be9ndloji64\*\*\*\*

Success

string

Indicates whether the request was successful.

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
        "InstanceId": "i-m5eg7be9ndloji64****",
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

400

DependencyViolation.IoOptimize

The specified parameter InstanceIds is not valid.

The specified instance ID is invalid. The specified instance is not an I/O optimized instance.

403

DependencyViolation.WindowsInstance

The instance creating is windows, cannot use ssh key pair to login

The specified instance is a Windows instance and does not support logons using SSH key pairs.

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachKeyPair?updateTime=2024-12-17#workbench-doc-change-demo)

2023-07-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachKeyPair?updateTime=2023-07-17#workbench-doc-change-demo)
