Updates a policy in a specific Container Service for Kubernetes (ACK) cluster. You can modify the action of the policy such as alerting or denying and namespaces to which the policy applies.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/ModifyPolicyInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/ModifyPolicyInstance)

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

cs:ModifyPolicyInstance

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
PUT /clusters/{cluster_id}/policies/{policy_name} HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

cluster\_id

string

Yes

The cluster ID.

c8155823d057948c69a\*\*\*\*

policy\_name

string

Yes

The name of the policy.

ACKAllowedRepos

body

object

No

The request body.

action

string

No

The action of the policy. Valid values:

-   `deny`: Deployments that match the policy are denied.
-   `warn`: Alerts are generated for deployments that match the policy.

deny

instance\_name

string

No

The ID of the policy instance.

allowed-repos-cbhhb

namespaces

array

No

The namespaces to which the policy is applied. The policy is applied to all namespaces if this parameter is left empty.

string

No

The applicable scope of the policy instance.

A value of "" indicates all namespaces in the cluster. This is the default value.

\["test3","test4"\]

parameters

object

No

The parameters of the policy instance. For more information, see [Predefined security policies of ACK](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/predefined-security-policies-of-ack).

"restrictedNamespaces": \[ "test" \]

## Response parameters

Parameter

Type

Description

Example

object

instances

array

The list of policy instances that are updated.

instances

string

The policy instance that is updated.

\[ "allowed-repos-kqxnc" \]

## Examples

Sample success responses

`JSON`format

```
{
  "instances": [
    [
      "allowed-repos-kqxnc"
    ]
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2021-12-15

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyPolicyInstance?updateTime=2021-12-15#workbench-doc-change-demo)

2021-11-19

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyPolicyInstance?updateTime=2021-11-19#workbench-doc-change-demo)
