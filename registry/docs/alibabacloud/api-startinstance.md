You must purchase and deploy an ApsaraMQ for Kafka instance before you can send and receive messages. This topic describes how to deploy an instance by calling the StartInstance operation.

## Operation description

**Note**

The request frequency is limited to 2 queries per second (QPS) for each user.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/alikafka/2019-09-16/StartInstance)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/alikafka/2019-09-16/StartInstance)

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

alikafka:StartInstance

update

\*Instance

`acs:alikafka:{#regionId}:{#accountId}:{#InstanceId}`

-   alikafka:DeployModule
-   alikafka:SpecType
-   alikafka:Acl
-   alikafka:DiskEncryption

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

InstanceId

string

Yes

The ID of the instance.

alikafka\_post-cn-v0h1fgs2\*\*\*\*

RegionId

string

Yes

The region ID of the instance.

cn-hangzhou

VpcId

string

Yes

The ID of the VPC in which the instance is deployed.

vpc-bp1r4eg3yrxmygv\*\*\*\*

VSwitchId

string

Yes

The ID of the vSwitch to which the instance is deployed.

vsw-bp1j3sg5979fstnpl\*\*\*\*

DeployModule

string

No

The deployment mode of the instance. This parameter is required for provisioned instances. This parameter is not required for Serverless and Confluent instances. Valid values:

-   **vpc**: VPC instance
    
-   **eip**: Internet/VPC instance
    

The deployment mode of the instance must be consistent with the instance type. If the instance is a VPC instance, set this parameter to **vpc**. If the instance is an Internet/VPC instance, set this parameter to **eip**.

vpc

ZoneId

string

No

The ID of the zone in which the instance is deployed.

-   The value must be the zone ID of the vSwitch.
    
-   The value can be in the zoneX or RegionId-X format. For example, you can set the value to zonea or cn-hangzhou-k.
    

**Note**

If resources in the specified zone are insufficient, the instance may be deployed in another zone.

cn-hangzhou-k

IsEipInner

boolean

No

Specifies whether to enable elastic IP addresses (EIPs). Valid values:

-   **true**: The instance is an Internet/VPC instance.
    
-   **false**: The instance is a VPC instance.
    

The value of this parameter must be consistent with the instance type. For example, if the instance is a VPC instance, you must set this parameter to **false**.

false

IsSetUserAndPassword

boolean

No

Specifies whether to set a new username and password. Valid values:

-   **true**: Set a new username and password.
    
-   **false**: Do not set a new username and password.
    

This parameter is supported only for Internet/VPC instances.

false

Username

string

No

The username.

-   For provisioned and Serverless instances, this parameter is supported only for Internet/VPC instances.
    
-   For Confluent instances, you can set this parameter only to root or leave it empty.
    

Default value: For provisioned and Serverless instances, the default value is username. For Confluent instances, the default value is root.

username

Password

string

No

The password.

-   For provisioned and Serverless instances, this parameter is supported only for Internet/VPC instances.
    
-   This parameter is required for Confluent instances. The password must be 8 to 32 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters are !@#$%^&\*()\_+-=.
    

password

Name

string

No

The name of the instance.

This parameter is not supported for Serverless and Confluent instances.

**Note**

If you specify this parameter, make sure that the value is unique in the same region.

newInstanceName

CrossZone

boolean

No

Specifies whether to deploy the instance across zones.

-   true: Deploy the instance across zones.
    
-   false: Do not deploy the instance across zones.
    

Default value: true.

false

SecurityGroup

string

No

The security group of the instance.

If you do not specify this parameter, ApsaraMQ for Kafka automatically configures a security group for your instance. If you want to specify this parameter, you must create a security group for the instance in advance. For more information, see [Create a security group](/help/en/ecs/user-guide/create-a-security-group-1).

sg-bp13wfx7kz9pko\*\*\*\*

ServiceVersion

string

No

The version of the ApsaraMQ for Kafka instance that you want to deploy.

-   For provisioned instances, valid values are 2.2.0 and 2.6.2.
    
-   For Serverless instances, the valid value is 3.3.1.
    
-   For Confluent instances, the valid value is 7.4.0.
    

Default value:

-   Provisioned instances: 2.2.0
    
-   Serverless instances: 3.3.1
    
-   Confluent instances: 7.4.0
    

预留实例系列：2.2.0 Serverless实例系列：3.3.1 Confluent系列：7.4.0

Config

string

No

The initial configurations of the ApsaraMQ for Kafka instance. The value must be a valid JSON string. If you do not specify this parameter, the default value is empty.

**Note**

-   You cannot specify the Config parameter when you deploy a Confluent instance.
    
-   The enable.acl configuration is not supported for instances of versions earlier than 2.2.0. Only Professional Edition and Serverless instances support access control lists (ACLs).
    

The following parameters of **Config** are supported for reserved instances:

-   **enable.vpc\_sasl\_ssl**
    
-   **enable.acl**
    
-   **kafka.log.retention.hours**
    
-   **kafka.message.max.bytes**
    

The following parameters of **Config** are supported for Serverless instances:

-   **enable.vpc\_sasl\_ssl**
    
-   **enable.acl**
    
-   **log.retention.hours**
    
-   **offsets.retention.minutes**
    
-   **message.max.bytes**
    
-   **auto.create.topics.enable**
    
-   **num.partitions**
    

For more information, see [UpdateInstanceConfig](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/developer-reference/api-alikafka-2019-09-16-updateinstanceconfig).

{"kafka.log.retention.hours":"33"}

KMSKeyId

string

No

The ID of the key that is used for disk encryption in the same region. You can view the key ID in the [Key Management Service (KMS) console](https://yundun.console.alibabacloud.com/?p=kms/?spm=a2c4g.11186623.2.5.336745b8hfiU21) or create a key. For more information, see [Manage keys](/help/en/kms/key-management-service/support/create-a-cmk-1).

If you specify this parameter, disk encryption is enabled. You cannot disable disk encryption after it is enabled. When you call this operation, the system checks whether the AliyunServiceRoleForAlikafkaInstanceEncryption service-linked role is created. If the role is not created, the system automatically creates the role. For more information, see [Service-linked Role](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/security-and-compliance/service-linked-roles).

**Note**

-   You cannot specify the KMSKeyId parameter when you deploy a Serverless instance.
    

0d24xxxx-da7b-4786-b981-9a164dxxxxxx

Notifier

string

No

The alert contact.

王先生

UserPhoneNum

string

No

The mobile phone number of the alert contact.

1581234\*\*\*\*

SelectedZones

string

No

A two-dimensional array that consists of the candidate set of the primary zone and the candidate set of the secondary zone. The values can be custom codes (`zone{zone}`) or standard codes (`cn-RegionID-{zone}`).

-   If you want to deploy the instance across zones (isCrossZone=true), the candidate set of the primary zone is Zone H or Zone F, and the candidate set of the secondary zone is Zone K, set this parameter to `[[\"zoneh\",\"zonef\"],[\"zonek\"]]`. This example uses custom codes.
    
    **Note**
    
    If you specify multiple zones for the primary or secondary zone, the system selects one of the zones for deployment without a priority. For example, if you set the parameter to `[[\"zoneh\",\"zonef\"],[\"zonek\"]]`, the primary zone of the deployed instance is Zone H or Zone F, and the secondary zone is Zone K.
    
-   If you do not want to deploy the instance across zones (isCrossZone=false) and want to deploy the instance in Zone K, set this parameter to `[[\"zonek\"],[]]`. This example uses a custom code. Note that you must still specify two arrays. The second array, which represents the candidate set of the secondary zone, can be empty \[\].
    

**Note**

Relationship between the SelectedZones and VSwitchIds parameters for provisioned instances

-   If you specify only VSwitchIds and do not specify SelectedZones, the system preferentially selects the zones that correspond to the vSwitches in VSwitchIds.
    

\[\[\\"zonel\\"\],\[\\"zonek\\"\]\]

IsForceSelectedZones

boolean

No

Specifies whether to forcibly deploy the instance in the selected zones.

false

VSwitchIds

array

No

The list of vSwitch IDs. This parameter is required for provisioned and Serverless instances. This parameter is supported for Confluent instances. You must specify at least one of VSwitchIds and VSwitchId. If you specify both, VSwitchIds takes precedence.

string

No

The vSwitch ID.

\["vsw-bp1j3sg5979fstnpl\*\*\*\*", "vsw-2ze8rwvzn7yi3r88\*\*\*\*"\]

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

integer

The return code. A value of 200 indicates that the request was successful.

200

Message

string

The returned message.

operation success.

RequestId

string

The request ID.

ABA4A7FD-E10F-45C7-9774-A5236015\*\*\*\*

Success

boolean

Indicates whether the call was successful.

true

## Examples

Success response

`JSON` format

```
{
  "Code": 200,
  "Message": "operation success.",
  "RequestId": "ABA4A7FD-E10F-45C7-9774-A5236015****",
  "Success": true
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ONS\_SYSTEM\_ERROR

%s. Please check and try again later.

400

BIZ.INSTANCE.NOT.FOUND

%s. Please check and try again later.

400

BIZ.INSTANCE.STATUS.ERROR

%s. Please check and try again later.

400

BIZ\_ASSUME\_ROLE\_ENTITY\_NOT\_EXIST

Role does not exist.

400

BIZ\_ASSUME\_ROLE\_NO\_PERMISSION

Assume role no permission.

400

BIZ\_FIELD\_CHECK\_INVALID

%s. Please check and try again later.

400

BIZ\_INSTANCE\_BASIC\_INFO\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_CREATE\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_NOT\_FOUND

%s. Please check and try again later.

400

BIZ\_INSTANCE\_OWNER\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_STATUS\_ERROR

%s. Please check and try again later.

400

BIZ\_PARAM\_EMPTY

param is blank.

The input parameter cannot be empty.

400

BIZ\_SERVERLESS\_NOT\_SUPPORT

can not deploy old serverless type.

400

BIZ\_TAG\_RESOURCE\_NUM\_EXCEED

%s. Please check and try again later.

400

AgentBusinessError

Internal error, please try again, if invalid, please submit the work order.

Internal error, please try again, if invalid, please submit the work order.

400

BIZ\_TOPIC\_CREATE\_INTERNAL\_ERROR

%s. Please check and try again later.

400

MISSING\_PARAMETER

Missing parameter% s.

400

ONS\_INTERNAL\_ERROR

%s. Please check and try again later.

400

INSTANCE\_STATUS\_NOT\_WAIT\_DEPLOY

The instance is not in the pending deployment state.

400

INVALID\_PARAMETER

Validation of parameter% s fails.

400

INVALID\_PARAMETER\_DATA\_ALREADY\_EXIST

Data already exists for parameter% s.

400

INVALID\_PARAMETER\_FORMAT

Format verification for parameter% s fails.

400

INVALID\_PARAMETER\_NOT\_SUPPORT

Parameter% s is not currently supported.

400

INVALID\_PARAMETER\_RANGE

Range check for parameter% s fails.

400

INVALID\_PARAMETER\_SIZE

Parameter% s length size check fails.

400

Acl.AddSasl.Error

Failed to add a user. Please refer to the document and try again. If in doubt, submit a work order.

Failed to add a user. Please refer to the document and try again. If in doubt, submit a work order.

400

Acl.DelSasl.Error

Failed to delete the user. Check the request parameters and try again.

Failed to delete the user. Check the request parameters and try again.

400

Acl.Disable.Error

The Acl function is disabled. Enable it by referring to the documentation and try again.

The Acl function is disabled. Enable it by referring to the documentation and try again.

400

Acl.DuplicatedAuth.Error

The authorization has already been granted, please do not repeat the authorization.

The authorization has already been granted, please do not repeat the authorization.

400

ADMIN\_GET\_BROKER\_CONFIG\_ERROR

%s. Please check and try again later.

400

ADMIN\_UPDATE\_BROKER\_CONFIG\_ERROR

%s. Please check and try again later.

400

ADMIN\_UPDATE\_SUB\_PERM\_ERROR

%s. Please check and try again later.

400

ADMIN\_UPDATE\_TOPIC\_PERM\_ERROR

%s. Please check and try again later.

400

AgentError

A system exception occurred. Please submit a ticket.

A system exception occurred. Please submit a ticket.

400

AsyncTask.DeleteTopic

Topic has not been deleted. Please try again later.

Topic has not been deleted. Please try again later.

400

AsyncTask.ExecuteTimeNotSupport

The async task is approaching its execution time and modification is not allowed.

400

AsyncTask.Ignored

The task is ignored.

The task is ignored.

400

AsyncTask.NotMeetCondition

The task does not meet the user-defined conditions.

The task does not meet the user-defined conditions.

400

AsyncTask.RetryLater

Task Please try again later.

Task Please try again later.

400

AsyncTask.TypeAlreadyExist

The task already exists.

The task already exists.

400

AsyncTaskSlave.NotCompleted

The task is not completed. Please check and try again.

The task is not completed. Please check and try again.

400

AUTH\_CAL\_SIGNATURE\_ERROR

%s. Please check and try again later.

400

AUTH\_CSRF\_CHECK\_ERROR

%s. Please check and try again later.

400

AUTH\_LOGIN\_CHECK\_ERROR

%s. Please check and try again later.

400

AUTH\_ONS\_CHANNEL\_INVALID

%s. Please check and try again later.

400

AUTH\_PERMISSION\_CHECK\_ERROR

%s. Please check and try again later.

400

AUTH\_REQUEST\_NOT\_ALLOWED

%s. Please check and try again later.

400

AUTH\_RESOURCE\_EMPOWER\_CHECK\_ERROR

%s. Please check and try again later.

400

AUTH\_SERVICE\_CHECK\_ERROR

%s. Please check and try again later.

400

AUTH\_SIGNATURE\_CHECK\_ERROR

%s. Please check and try again later.

400

AUTH\_SYSTEM\_PERMISSION\_CHECK\_ERROR

%s. Please check and try again later.

400

AUTH\_TOPIC\_CREATE\_ERROR

%s. Please check and try again later.

400

AUTH\_USER\_IN\_BLACK\_LIST

%s. Please check and try again later.

400

BIZ.GET.TOPIC.STATUS.ERROR

AccessKeyId is required to get topic status.

400

BIZ.LIMIT.PUBNETWORK

EipMax is invalid.

400

BIZ.LIMIT.QUOTA.DOWN

Invalid.%s

400

BIZ.LIMIT.QUOTA.DOWN.1

Invalid.%s

400

BIZ.LIMIT.QUOTA.DOWN.2

Invalid.%s

400

BIZ.TagResource.NotSupported

%s. Please check and try again later.

400

BIZ\_ACL\_NOT\_ENABLED

%s. Please check and try again later.

400

BIZ\_AONE\_CHECK\_ERROR

%s. Please check and try again later.

400

BIZ\_BROADCASTING\_PULL\_UNSUPPORT

%s. Please check and try again later.

400

BIZ\_BROKER\_NOT\_FOUND

%s. Please check and try again later.

400

BIZ\_CAN\_NOT\_ENABLE\_ACL

%s. Please check and try again later.

400

BIZ\_CLUSTER\_IS\_EMPTY

%s. Please check and try again later.

400

BIZ\_CONSUMER\_GROUP\_ACTIVE\_ERROR

%s. Please check and try again later.

400

BIZ\_CONSUMER\_ID\_BELONG\_TO\_OTHER\_USER

%s. Please check and try again later.

400

BIZ\_CONSUMER\_NEVER\_RUNNING

%s. Please check and try again later.

400

BIZ\_CONSUMER\_NOT\_ONLINE

%s. Please check and try again later.

400

BIZ\_CREATE\_ORDER\_CONFIG\_ERROR

%s. Please check and try again later.

400

BIZ\_CREATE\_PUBLISH\_ERROR

%s. Please check and try again later.

400

BIZ\_CREATE\_SUBSCRIPTION\_ERROR

%s. Please check and try again later.

400

BIZ\_CREATE\_TOPIC\_ERROR

%s. Please check and try again later.

400

BIZ\_CREATE\_TOPIC\_NUM\_LESS\_THAN\_BEFORE\_ERROR

%s. Please check and try again later.

400

BIZ\_DELETE\_ORDER\_CONFIG\_ERROR

%s. Please check and try again later.

400

BIZ\_DELETE\_SUBSCRIPTION\_ERROR

%s. Please check and try again later.

400

BIZ\_DELETE\_TOPIC\_ERROR

%s. Please check and try again later.

400

BIZ\_DOWNLOAD\_MESSAGE\_ERROR

%s. Please check and try again later.

400

BIZ\_FIND\_CONSUMER\_GROUP\_INFO\_ERROR

%s. Please check and try again later.

400

BIZ\_GET\_APPKEY\_LIST\_ERROR

%s. Please check and try again later.

400

BIZ\_GET\_CLUSTER\_INFO\_ERROR

%s. Please check and try again later.

400

BIZ\_GET\_CONSUMER\_CONNECTION\_ERROR

%s. Please check and try again later.

400

BIZ\_GET\_CONSUMER\_RUNNING\_INFO\_ERROR

%s. Please check and try again later.

400

BIZ\_GET\_CONSUME\_ACCUMULATE\_ERROR

%s. Please check and try again later.

400

BIZ\_GET\_CONSUME\_STATUS\_ERROR

%s. Please check and try again later.

400

BIZ\_GET\_TOPIC\_ROUTE\_INFO\_ERROR

%s. Please check and try again later.

400

BIZ\_GET\_TOPIC\_STATUS\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_ALREADY\_EXISTS

%s. Please check and try again later.

400

BIZ\_INSTANCE\_CREATE\_ORDER\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_DELETE\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_LOCATION\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_ONLY\_PROFESSIONAL\_SUPPORT

%s. Please check and try again later.

400

BIZ\_INSTANCE\_PAIDTYPE\_NOT\_SUPPORT

%s. Please check and try again later.

400

BIZ\_INSTANCE\_PERMISSION\_CHECK\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_REFUND\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_RELEASE\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_RELEASE\_EXIST\_CONSUMER\_GROUP\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_RELEASE\_EXIST\_TOPIC\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_RELEASE\_LESSHOUR\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_UPDATE\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_UPGRADE\_ORDER\_ERROR

%s. Please check and try again later.

400

BIZ\_MESSAGE\_TRACK\_ERROR

%s. Please check and try again later.

400

BIZ\_NO\_MESSAGE

%s. Please check and try again later.

400

BIZ\_PRODUCER\_ID\_BELONG\_TO\_OTHER\_USER

%s. Please check and try again later.

400

BIZ\_PUBLISHER\_EXISTED

%s. Please check and try again later.

400

BIZ\_PUBLISH\_INFO\_NOT\_FOUND

%s. Please check and try again later.

400

BIZ\_PUSH\_MESSAGE\_TO\_CONSUMER\_ERROR

%s. Please check and try again later.

400

BIZ\_QUERY\_CONSUME\_TIMESPAN\_ERROR

%s. Please check and try again later.

400

BIZ\_QUERY\_MESSAGE\_ERROR

%s. Please check and try again later.

400

BIZ\_RESET\_OFFSET\_ERROR

%s. Please check and try again later.

400

BIZ\_SASL\_USER\_NOT\_EXIST

%s. Please check and try again later.

400

BIZ\_SASL\_USER\_NUM\_EXCEED

%s. Please check and try again later.

400

BIZ\_SEND\_MESSAGE\_ERROR

%s. Please check and try again later.

400

BIZ\_SLR\_CREATE\_NO\_PERMISSION

%s. Please check and try again later.

400

BIZ\_SUBSCRIPTION\_ALREADY\_EXISTS

%s. Please check and try again later.

400

BIZ\_SUBSCRIPTION\_CREATE\_ERROR

%s. Please check and try again later.

400

BIZ\_SUBSCRIPTION\_DELETE\_ERROR

%s. Please check and try again later.

400

BIZ\_SUBSCRIPTION\_EXISTED

%s. Please check and try again later.

400

BIZ\_SUBSCRIPTION\_NOT\_FOUND

%s. Please check and try again later.

400

BIZ\_SUBSCRIPTION\_PERMISSION\_CHECK\_ERROR

%s. Please check and try again later.

400

BIZ\_SUBSCRIPTION\_STATUS\_ERROR

%s. Please check and try again later.

400

BIZ\_SUBSCRIPTION\_TOO\_MUCH

%s. Please check and try again later.

400

BIZ\_SUBSCRIPTION\_UPDATE\_ERROR

%s. Please check and try again later.

400

BIZ\_TAG\_DUPLICATE\_TAG\_KEY

%s. Please check and try again later.

400

BIZ\_TAG\_ONLY\_SERVICE\_ACCOUNT\_HAS\_PERMISSION

%s. Please check and try again later.

400

BIZ\_TAG\_REQUEST\_RESOURCE\_NUM\_EXCEED

%s. Please check and try again later.

400

BIZ\_TAG\_REQUEST\_TAG\_NUM\_EXCEED

%s. Please check and try again later.

400

BIZ\_TAG\_RESOURCE\_NOT\_EXIST

%s. Please check and try again later.

400

BIZ\_TAG\_TAGKEY\_NOT\_VALID

%s. Please check and try again later.

400

BIZ\_TAG\_TAGVALUE\_NOT\_VALID

%s. Please check and try again later.

400

BIZ\_TAG\_TAG\_NUM\_EXCEED

%s. Please check and try again later.

400

BIZ\_TIME\_SPAN\_EMPTY

%s. Please check and try again later.

400

BIZ\_TOPIC\_ALREADY\_EXISTS

%s. Please check and try again later.

400

BIZ\_TOPIC\_COMPACT\_TOPIC\_NOT\_SUPPORT

%s. Please check and try again later.

400

BIZ\_TOPIC\_CREATE\_ERROR

%s. Please check and try again later.

400

BIZ\_TOPIC\_DELETE\_ERROR

%s. Please check and try again later.

400

BIZ\_TOPIC\_EXISTED

%s. Please check and try again later.

400

BIZ\_TOPIC\_LOCAL\_TOPIC\_NOT\_SUPPORT

%s. Please check and try again later.

400

BIZ\_TOPIC\_NOT\_FOUND

%s. Please check and try again later.

400

BIZ\_TOPIC\_OFFSET\_ERROR

%s. Please check and try again later.

400

BIZ\_TOPIC\_PARTITION\_ADD\_ERROR

%s. Please check and try again later.

400

BIZ\_TOPIC\_PARTITION\_ERROR

%s. Please check and try again later.

400

BIZ\_TOPIC\_PARTITION\_NUM\_EXCEED

%s. Please check and try again later.

400

BIZ\_TOPIC\_STATUS\_ERROR

%s. Please check and try again later.

400

BIZ\_TOPIC\_TOO\_MUCH

%s. Please check and try again later.

400

BIZ\_TOPIC\_UPDATE\_CONFIG\_ERROR

%s. Please check and try again later.

400

BIZ\_TOPIC\_UPDATE\_ERROR

%s. Please check and try again later.

400

BIZ\_UPDATE\_ACL\_FAILED

%s. Please check and try again later.

400

BIZ\_UPDATE\_SUBSCRIPTION\_ERROR

%s. Please check and try again later.

400

BIZ\_UPDATE\_TOPIC\_ERROR

%s. Please check and try again later.

400

BIZ\_UPDATE\_TOPIC\_PERM\_ERROR

%s. Please check and try again later.

400

DataExceedMaxLimit

The maximum number of %s is exceeded.

400

DB.Update.Failed

Failed to update data, please try again, if invalid, please submit a work order.

Failed to update data, please try again, if invalid, please submit a work order.

400

Deploy.Callback.Illegal

Message data does not match, please submit work order.

Message data does not match, please submit work order.

400

Deploy.NotRetriableError

Deployment error, please submit work order.

Deployment error, please submit work order.

400

Deploy.ResourceNotEnough

Insufficient resources, please submit work order.

Insufficient resources, please submit work order.

400

Deploy.RetriableError

A retry error occurred during deployment. If the retry still fails, submit a work order.

A retry error occurred during deployment. If the retry still fails, submit a work order.

400

DeployError

Deployment error, please try again, if invalid, please submit a work order.

Deployment error, please try again, if invalid, please submit a work order.

400

DeployPreCheckError

Deployment pre-check failed. Please submit work order.

The deployment pre-check failed. Please try again. If the retry still fails, please submit a ticket.

400

DeployType.NotSupport

deployType is not supported. Refer to the document and retry. If in doubt, submit a work order.

deployType is not supported. Refer to the document and retry. If in doubt, submit a work order.

400

FlowControl

Request was denied due to flow control.

400

GET.CONSUMER.MISSING.ACCESS.KEY.ID

AccessKeyId is required to get consumer group info.

400

Group.Active

Group is active and cannot perform this operation.

Group is active and cannot perform this operation.

400

Instance.CaclulateChange.time

Example Failed to obtain the expected change time. Please try again later.

Example Failed to obtain the expected change time. Please try again later.

400

Instance.Change.NotAllowed

This instance does not allow change operations.

This instance does not allow change operations.

400

Instance.ExceedMaxLimit

The maximum number of instance is exceeded.

400

Instance.InsertComponent.fail

Failed to insert the instance component, please try again later.

Failed to insert the instance component, please try again later.

400

Instance.ResourceNotSufficient

Insufficient resources, unable to operate, please submit a work order.

Insufficient resources, unable to operate, please submit a work order.

400

Instance.StatusNotRunning

The instance is not running and cannot operate this function. Please try again later.

The instance is not running and cannot operate this function. Please try again later.

400

Instance.UpdateComponent.fail

Failed to update the instance component, please try again later.

Failed to update the instance component, please try again later.

400

Instance.UpgradeService.version

Upgrade version failed, please try again later.

Upgrade version failed, please try again later.

400

InstanceStatus.Change.NotAllowed

There was an error in the instance status switch verification. Please try again. If you have any questions, please submit the work order.

There was an error in the instance status switch verification. Please try again. If you have any questions, please submit the work order.

400

InstanceStatus.NotAllowed

The current status of the instance cannot be changed. This function cannot be performed. Please try again later.

The current status of the instance cannot be changed. This function cannot be performed. Please try again later.

400

InstanceStatus.NotReleased

The instance is not in the released state and cannot perform this function. Please try again later.

The instance is not in the released state and cannot perform this function. Please try again later.

400

InstanceStatus.NotWaitChange

The instance is not waiting for change status, cannot operate this function, please try again later.

The instance is not waiting for change status, cannot operate this function, please try again later.

400

InstanceStatus.Released

The instance has been released.

The instance has been released.

400

InstanceStatus.Stopped

Instance stopped serving.

Instance stopped serving.

400

Invalid.%s

Invalid.%s

400

Invalid.Partition.%s

Invalid.%s

400

InvalidParameter.DataNotChange

There is no change in the parameters. Please adjust and try again.

There is no change in the parameters. Please adjust and try again.

400

InvalidParameter.OtherParam

Parameter %s is incorrect because %s.

Parameter %s is incorrect because %s.

400

InvalidParameter.VersionNotSupport

Current version does not support the %s parameter.

400

Ldap.CreateAdminError

Administrative accounts cannot be added or modified.

Administrative accounts cannot be added or modified.

400

Ldap.DeleteAdminError

The management account cannot be deleted.

The management account cannot be deleted.

400

Manager.configRuleExistError

Manager an existing configuration rule is inserted, adjust and try again.

Manager an existing configuration rule is inserted, adjust and try again.

400

Manager.configRuleNotExistError

Manager a configuration rule that does not exist is changed, please adjust it and try again.

Manager a configuration rule that does not exist is changed, please adjust it and try again.

400

Manager.NotCommit

Manager operation is not submitted, please adjust and try again.

Manager operation is not submitted, please adjust and try again.

400

Manager.recoverTaskNotFound

Manager the resumed scheduling task does not exist, please adjust and try again.

Manager the resumed scheduling task does not exist, please adjust and try again.

400

Manager.recoverTaskNotMatch

The id of the restored scheduling task does not match that of the instance.

Manager the resumed scheduling task does not match the instance ID, adjust the task and try again.

400

Manager.scheduledTaskStatusError

Manager the status of the asynchronous task fails to be changed, check whether the source status is consistent with the current status, and then try again.

Manager the status of the asynchronous task fails to be changed, check whether the source status is consistent with the current status, and then try again.

400

Manager.scheduledTaskStatusNotSupport

The manager operation task status is unknown.

Manager action task status is unknown.

400

NotSupport

The current operation is not supported, please check and try again later.

The current operation is not supported, please check and try again later.

400

NotSupport.DataStatus

Current status %s does not support this operation.

400

ONS.LOGIN.CHECK.ERROR

%s. Please check and try again later.

400

ONS\_INIT\_ENV\_ERROR

%s. Please check and try again later.

400

ONS\_INVOKE\_ERROR

%s. Please check and try again later.

400

ONS\_LOGIN\_CHECK\_ERROR

%s. Please check and try again later.

400

ONS\_SERVICE\_UNSUPPORTED

%s. Please check and try again later.

400

ONS\_SYSTEM\_FLOW\_CONTROL

%s. Please check and try again later.

400

Order.Create.Error

Failed to create order.

Failed to create order.

400

Order.Insufficient.balance

The available gold is not enough, please recharge and try again.

The available gold is not enough, please recharge and try again.

400

Oss.NotFound

Failed to download message, please try again later.

Failed to download message, please try again later.

400

Oss.PublishFailed

Failed to download message, please try again later.

Failed to download message, please try again later.

400

RAM.USER.NOT.FOUND.BY.ACCESSKEY

The specified access key is not found.

400

RAM\_CREATE\_RESOURCE\_OWNER\_ERROR

%s. Please check and try again later.

400

RAM\_CREATE\_RESOURCE\_PERMISSION\_ERROR

%s. Please check and try again later.

400

RAM\_DELETE\_RESOURCE\_OWNER\_ERROR

%s. Please check and try again later.

400

RAM\_DELETE\_RESOURCE\_PERMISSION\_ERROR

%s. Please check and try again later.

400

RAM\_GET\_USER\_BY\_AK\_ERROR

%s. Please check and try again later.

400

RAM\_USER\_NOT\_FOUND\_BY\_ACCESSKEY

%s. Please check and try again later.

400

ScheduledTask.AlreadyHasSameTaskType

has same task waiting for schedule.

The same task is waiting to be scheduled, please try again later.

400

ScheduledTask.ExecuteTimeGapTooShort

execute time gap too close to an existed task.

The execution time interval is too close to the existing task. Please adjust and try again.

400

ServerlessPlan.InstanceNotMatch

The timing policy execution plan does not match the instance ID.

The timing policy execution plan does not match the instance ID.

400

ServerlessPlan.IntervalInvalid

If a periodic policy execution plan is smaller than the target size, delete it.

If a periodic policy execution plan is smaller than the target size, delete it.

400

ServerlessPlan.NameExist

The name of the periodic policy execution plan is the same. Please modify the name and try again.

The name of the periodic policy execution plan is the same. Please modify the name and try again.

400

ServerlessPlan.NotSupport.EnabledRuleExist

If a periodic policy is in effect, it does not support the current operation. Set all periodic policies to invalid.

If a periodic policy is in effect, it does not support the current operation. Set all periodic policies to invalid.

400

ServerlessPlan.NotSupport.StatusEnabled

A periodic policy can be deleted only after it is disabled.

A periodic policy can be deleted only after it is disabled.

400

ServerlessPlan.TaskStatusNotSupport

A periodic policy task cannot be modified or cancelled when it is being executed or when a single execution is completed.

A scheduled policy task cannot be modified or canceled when it is being executed or a single execution is completed.

400

Sls.Query.Error

Data query failed. Please try again later.

Data query failed. Please try again later.

400

Sts.NotFound

Unable to find the whitelist information, please try again later, if in doubt, please submit the work order.

Unable to find the whitelist information, please try again later, if in doubt, please submit the work order.

400

Topic.DownloadMessageFail

Failed to download message, please try again later.

Failed to download message, please try again later.

400

Topic.Exist

The topic already exists.

400

Topic.NotFound

The Topic does not exist. Please check and try again.

The Topic does not exist. Please check and try again.

400

Topic.QueryMessageFail

Failed to query the message, please try again later.

Failed to query the message, please try again later.

400

Topic.SendFail

Topic failed to send a message. Please try again later.

Topic failed to send a message. Please try again later.

400

Topic.StatusNotRunning

The Topic status is not in the service and cannot be operated. Please try again later. If in doubt, please submit the work order.

The Topic status is not in the service and cannot be operated. Please try again later. If in doubt, please submit the work order.

400

TopicStatus.NotAllowed

The current status of the Topic cannot be changed.

The current status of the Topic cannot be changed.

400

VPC\_ASSUMEROLE\_ERROR

%s. Please check and try again later.

400

VPC\_VSW\_ZONE\_MAPPING\_ERROR

%s. Please check and try again later.

400

WHITE.DELETE.ERROR

%s. Please check and try again later.

400

WHITE.IP.ALREADY.EXISTS.ERROR

%s. Please check and try again later.

400

WHITE.IP.ILLEGAL.ERROR

%s. Please check and try again later.

400

WHITE.IPLIST.OVERLONG.ERROR

%s. Please check and try again later.

400

WHITE.OVER.LENGTH.ERROR

%s. Please check and try again later.

400

WHITE.PARAM.ERROR

%s. Please check and try again later.

400

Order.InstHasUnpaidOrder

There is an unpaid order for the resource you selected, please pay or void it before placing the order.

There is an unpaid order for the resource you selected, please pay or void it before placing the order!

400

Topic.RebalanceOperationForbidden

This operation is not allowed during instance drainage. Please try again after the drainage is completed.

This operation is not allowed during instance drainage. Please try again after the drainage is completed.

400

AUTH\_USER\_CHECK\_ERROR

Network jitter timed out, try refreshing and retry.

Network jitter timed out, try refreshing and retry.

400

WHITE\_IP\_LIST\_OVERLONG\_ERROR

KafkaInstanceBiz updateWhiteList allIpList is overlong.

400

BIZ\_GET\_TOPIC\_OFFSET\_ERROR

getTopicOffset error.

400

BIZ\_INSTANCE\_CANNOT\_OPERATE

Unable to operate during instance maintenance.

400

RemoteCallError

An internal service invocation error occurred. Please try again later.

500

INTERNAL.ERROR

An internal error occurred. Please try again later.

500

InternalError

An internal error occurred. Please try again later.

500

InternalUnknownCodeError

Internal error, please try again, if still failed, please submit a work order to contact us.

Internal error, please try again, if still failed, please submit a work order to contact us.

500

ONS.GET.ALLOWEDIP.INTERNAL.ERROR

The request for obtaining the IP address whitelist timed out. Please try again later.

500

ONS.INTERNAL.ERROR

An internal error occurred. Please try again later.

500

ONS.UPDATE.ALLOWEDIP.INTERNAL.ERROR

The request for changing the IP address whitelist timed out. Please try again later.

500

RmqClusterEmpty

A system exception occurred. Please submit a ticket.

A system exception occurred. Please submit a ticket.

403

NoPermission

No permissions.

403

AUTH\_RESOURCE\_OWNER\_ERROR

%s. Please check and try again later.

404

AsyncTaskGroup.NotFound

The task group does not exist. Please check and try again.

The task group does not exist. Please check and try again.

404

AsyncTaskHandler.NotFound

The task does not exist. Please check and try again.

The task does not exist. Please check and try again.

404

AsyncTaskType.NotFound

The task type does not exist. Please check and try again.

The task type does not exist. Please check and try again.

404

Group.NotFound

GroupId does not exist. Please check and try again.

GroupId does not exist. Please check and try again.

404

Instance.NotFound

No instance found for the %s parameter.

404

InstanceAgent.NotFound

Instance does not exist. Please check the entry and try again.

Instance does not exist. Please check the entry and try again.

404

InvalidData.FieldsIncomplete

Data is incomplete, %s data is missing, please check and try again later.

Data is incomplete, %s data is missing, please check and try again later.

404

InvalidParameter.DataNotFound

No data found for the %s parameter.

404

Topic.NotFound

No topic found for the %s parameter.

404

VpcVSwitch.NotFound

The private network and switch do not exist. Please refer to the document and try again. If in doubt, submit a work order.

The private network and switch do not exist. Please refer to the document and try again. If in doubt, submit a work order.

404

SG\_ERROR

find sgInfo error, please retry later.

Failed to find the security group. Make sure that the information is correct and try again.

See [Error Codes](https://api.alibabacloud.com/document/alikafka/2019-09-16/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/alikafka/2019-09-16/StartInstance#workbench-doc-change-demo) for a complete list.
