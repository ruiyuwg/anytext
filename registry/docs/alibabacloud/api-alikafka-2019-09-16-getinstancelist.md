Queries information about instances in a specified region.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/alikafka/2019-09-16/GetInstanceList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/alikafka/2019-09-16/GetInstanceList)

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

alikafka:ListInstance

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

RegionId

string

Yes

The region ID of the instance.

cn-hangzhou

OrderId

string

No

The order ID. You can obtain the order ID in [Order Management](https://usercenter2-intl.console.alibabacloud.com/order/list?pageIndex=1&pageSize=20&spm=5176.12818093.top-nav.ditem-ord.36f016d0OQFmJa).

**Important** You cannot query Serverless instances by order ID.

6072673\*\*\*\*

InstanceId

array

No

A list of instance IDs.

alikafka\_post-cn-mp91gnw0p\*\*\*

string

No

The instance ID.

alikafka\_post-cn-mp91gnw0\*\*\*\*

Tag

array<object>

No

A list of tags.

object

No

Key

string

No

The tag key of the resource.

-   If you leave this parameter empty, all tag keys are matched.
    
-   The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain `http://` or `https://`.
    

test

Value

string

No

The tag value of the resource.

-   If you set Key to an empty string, you must also set this parameter to an empty string. If you leave this parameter empty, all tag values are matched.
    
-   The tag value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain `http://` or `https://`.
    

test

ResourceGroupId

string

No

The ID of the resource group. You can query the ID in the resource group console.

rg-ac\*\*\*\*\*\*\*\*\*\*\*7q

Series

string

No

The instance edition. You can use this parameter to filter instances of different editions. Valid values:

-   v2
    
-   v3
    
-   confluent
    

v3

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

integer

The return code. A value of 200 indicates that the call is successful.

200

Message

string

The returned message.

operation success.

RequestId

string

The request ID.

4B6D821D-7F67-4CAA-9E13-A5A997C3\*\*\*\*

Success

boolean

Indicates whether the call was successful.

true

InstanceList

object

InstanceVO

array<object>

The details of the instance.

array<object>

VpcId

string

The VPC ID.

vpc-bp1ojac7bv448nifj\*\*\*\*

SpecType

string

The instance type. Valid values:

-   **professional**: Professional Edition (High-write)
    
-   **professionalForHighRead**: Professional Edition (High-read)
    
-   **normal**: Standard Edition
    

professional

DeployType

integer

The deployment type. Valid values:

-   **4**: Internet and VPC
    
-   **5**: VPC
    

5

CreateTime

integer

The time when the instance was created. The value is a timestamp in milliseconds.

1577961819000

DiskSize

integer

The disk capacity. Unit: GB.

3600

DiskType

integer

The disk type. Valid values:

-   **0**: ultra disk
    
-   **1**: SSD
    

1

SecurityGroup

string

The security group of the instance.

-   If the instance is deployed using the ApsaraMQ for Kafka console or by calling the [StartInstance](/help/en/apsaramq-for-kafka/api-startinstance) operation without a security group configured, the return value is empty.
    
-   If the instance is deployed by calling the [StartInstance](/help/en/apsaramq-for-kafka/api-startinstance) operation with a security group configured, the return value is the configured security group.
    

sg-bp13wfx7kz9pkow\*\*\*\*

SslEndPoint

string

The IP endpoint for SSL access. ApsaraMQ for Kafka instances support domain name-based endpoints and IP address-based endpoints.

-   Domain name-based endpoint: consists of the domain name of the ApsaraMQ for Kafka instance and a port number. The format is `{Instance domain name}:{Port number}`.
    
-   IP address-based endpoint: consists of the IP address of a broker and a port number. The format is `{Broker IP address}:{Port number}`.
    

192.0.XX.XX:9093,198.51.XX.XX:9093,203.0.XX.XX:9093

InstanceId

string

The instance ID.

alikafka\_pre-cn-mp919o4v\*\*\*\*

AllConfig

string

The current configurations of the deployed ApsaraMQ for Kafka instance.

{\\"enable.vpc\_sasl\_ssl\\":\\"false\\",\\"kafka.log.retention.hours\\":\\"66\\",\\"enable.acl\\":\\"false\\",\\"kafka.message.max.bytes\\":\\"6291456\\"}

ServiceStatus

integer

**Note**

This parameter is deprecated. We recommend that you use ViewInstanceStatusCode.

The instance status. Valid values:

-   **0**: Pending Deployment
    
-   **1**: Preparing Hardware Resources
    
-   **2**: Initializing
    
-   **3**: Starting
    
-   **5**: In Service
    
-   **6**: Migrating
    
-   **7**: Ready for Upgrade
    
-   **8**: Upgrading
    
-   **9**: Ready for Change
    
-   **10**: Released
    
-   **11**: Changing
    
-   **15**: Expired
    
-   **30**: Scaling
    

5

EipMax

integer

The peak Internet traffic.

20

RegionId

string

The region ID of the instance.

cn-hangzhou

MsgRetain

integer

The message retention period. Unit: hours.

72

VSwitchId

string

The vSwitch ID.

vsw-bp1fvuw0ljd7vzmo3\*\*\*\*

ExpiredTime

integer

The expiration time. The value is a timestamp in milliseconds.

1893581018000

TopicNumLimit

integer

The maximum number of topics.

180

ZoneId

string

The zone ID.

zonei

IoMaxRead

integer

The peak read traffic. Unit: MB/s.

1000

IoMaxWrite

integer

The peak write traffic. Unit: MB/s.

1000

IoMax

integer

The peak traffic.

20

PaidType

integer

The billing method. Valid values:

-   **0**: subscription
    
-   **1**: pay-as-you-go
    
-   **3**: pay-as-you-go for Serverless instances
    
-   **4**: subscription for Confluent editions
    

1

Name

string

The instance name.

alikafka\_post-cn-mp91gnw0\*\*\*\*

EndPoint

string

The IP endpoint for default access. ApsaraMQ for Kafka instances support domain name-based endpoints and IP address-based endpoints.

-   Domain name-based endpoint: consists of the domain name of the ApsaraMQ for Kafka instance and a port number. The format is `{Instance domain name}:{Port number}`.
    
-   IP address-based endpoint: consists of the IP address of a broker and a port number. The format is `{Broker IP address}:{Port number}`.
    

192.168.XX.XX:9092,192.168.XX.XX:9092,192.168.XX.XX:9092

Tags

object

TagVO

array<object>

The tags.

object

Key

string

The tag key.

test

Value

string

The tag value.

test

UpgradeServiceDetailInfo

object

The upgrade information of the instance.

Current2OpenSourceVersion

string

The open source version of the instance.

2.2.0

DomainEndpoint

string

The domain name endpoint for default access. ApsaraMQ for Kafka instances support domain name-based endpoints and IP address-based endpoints.

-   Domain name-based endpoint: consists of the domain name of the ApsaraMQ for Kafka instance and a port number. The format is `{Instance domain name}:{Port number}`.
    
-   IP address-based endpoint: consists of the IP address of a broker and a port number. The format is `{Broker IP address}:{Port number}`.
    

alikafka-pre-cn-zv\*\*\*\*\*\*\*\*\*\*-1-vpc.alikafka.aliyuncs.com:9092,alikafka-pre-cn-zv\*\*\*\*\*\*\*\*\*\*-2-vpc.alikafka.aliyuncs.com:9092,alikafka-pre-cn-zv\*\*\*\*\*\*\*\*\*\*-3-vpc.alikafka.aliyuncs.com:9092

VpcSaslEndPoint

string

The IP endpoint for SSL access over a VPC. ApsaraMQ for Kafka instances support domain name-based endpoints and IP address-based endpoints.

-   Domain name-based endpoint: consists of the domain name of the ApsaraMQ for Kafka instance and a port number. The format is `{Instance domain name}:{Port number}`.
    
-   IP address-based endpoint: consists of the IP address of a broker and a port number. The format is `{Broker IP address}:{Port number}`.
    

172.16.3.XX:9095,172.16.3.XX:9095,172.16.3.XX:9095

SaslEndPoint

string

The IP endpoint for SASL access. ApsaraMQ for Kafka instances support domain name-based endpoints and IP address-based endpoints.

-   Domain name-based endpoint: consists of the domain name of the ApsaraMQ for Kafka instance and a port number. The format is `{Instance domain name}:{Port number}`.
    
-   IP address-based endpoint: consists of the IP address of a broker and a port number. The format is `{Broker IP address}:{Port number}`.
    

172.16.3.XX:9094,172.16.3.XX:9094,172.16.3.XX:9094

SslDomainEndpoint

string

The domain name endpoint for SSL access. ApsaraMQ for Kafka instances support domain name-based endpoints and IP address-based endpoints.

-   Domain name-based endpoint: consists of the domain name of the ApsaraMQ for Kafka instance and a port number. The format is `{Instance domain name}:{Port number}`.
    
-   IP address-based endpoint: consists of the IP address of a broker and a port number. The format is `{Broker IP address}:{Port number}`.
    

alikafka-pre-cn-zv\*\*\*\*\*\*\*\*\*\*-1.alikafka.aliyuncs.com:9093,alikafka-pre-cn-zv\*\*\*\*\*\*\*\*\*\*-2.alikafka.aliyuncs.com:9093,alikafka-pre-cn-zv\*\*\*\*\*\*\*\*\*\*-3.alikafka.aliyuncs.com:9093

SaslDomainEndpoint

string

The domain name endpoint for SASL access. ApsaraMQ for Kafka instances support domain name-based endpoints and IP address-based endpoints.

-   Domain name-based endpoint: consists of the domain name of the ApsaraMQ for Kafka instance and a port number. The format is `{Instance domain name}:{Port number}`.
    
-   IP address-based endpoint: consists of the IP address of a broker and a port number. The format is `{Broker IP address}:{Port number}`.
    

alikafka-pre-cn-zv\*\*\*\*\*\*\*\*\*\*-1-vpc.alikafka.aliyuncs.com:9094,alikafka-pre-cn-zv\*\*\*\*\*\*\*\*\*\*-2-vpc.alikafka.aliyuncs.com:9094,alikafka-pre-cn-zv\*\*\*\*\*\*\*\*\*\*-3-vpc.alikafka.aliyuncs.com:9094

VpcSaslDomainEndpoint

string

The domain name endpoint for SSL access over a VPC. ApsaraMQ for Kafka instances support domain name-based endpoints and IP address-based endpoints.

-   Domain name-based endpoint: consists of the domain name of the ApsaraMQ for Kafka instance and a port number. The format is `{Instance domain name}:{Port number}`.
    
-   IP address-based endpoint: consists of the IP address of a broker and a port number. The format is `{Broker IP address}:{Port number}`.
    

alikafka-post-cn-\*\*\*\*\*\*-1-vpc.alikafka.aliyuncs.com:9095,alikafka-post-cn-\*\*\*\*\*\*-2-vpc.alikafka.aliyuncs.com:9095,alikafka-post-cn-\*\*\*\*\*\*-3-vpc.alikafka.aliyuncs.com:9095

ResourceGroupId

string

The resource group ID.

rg-ac\*\*\*\*\*\*\*\*\*\*\*7q

UsedTopicCount

integer

The number of topics in use.

3

UsedGroupCount

integer

The number of consumer groups in use.

10

UsedPartitionCount

integer

The number of partitions in use.

25

KmsKeyId

string

The ID of the key that is used for disk encryption in the same region.

0d24xxxx-da7b-4786-b981-9a164dxxxxxx

StandardZoneId

string

The standard zone ID.

cn-hangzhou-k

IoMaxSpec

string

The traffic specification.

alikafka.hw.2xlarge

ReservedPublishCapacity

integer

The reserved production traffic. Unit: MB/s.

**Note**

This parameter is returned only if the instance is a Serverless instance.

60

ReservedSubscribeCapacity

integer

The reserved consumption traffic. Unit: MB/s.

**Note**

This parameter is returned only if the instance is a Serverless instance.

60

ViewInstanceStatusCode

integer

The instance status (new). This status is synchronized with the status in the console.

Valid values:

-   **0**: Pending Deployment
    
-   **1**: Deploying
    
-   **2**: In Service
    
-   **3**: Stopped
    
-   **4**: Expiring
    
-   **5**: Expired
    
-   **6**: Released
    
-   **7**: Upgrading
    
-   **8**: Migrating
    
-   **21**: Stopping
    
-   **22**: Starting
    
-   **23**: Releasing
    
-   **30**: Auto Scaling
    
-   **101**: Deployment Failed
    
-   **102**: Upgrade Failed
    
-   **103**: Migration Failed
    

2

ConfluentConfig

object

This parameter is returned only if the instance is a Confluent edition instance.

KafkaCU

integer

The number of CPU cores for the Kafka broker.

4

KafkaStorage

integer

The disk capacity of the Kafka broker. Unit: GB.

800

KafkaReplica

integer

The number of replicas for the Kafka broker.

3

ZooKeeperCU

integer

The number of CPU cores for the ZooKeeper component.

2

ZooKeeperStorage

integer

The disk capacity of the ZooKeeper component. Unit: GB.

100

ZooKeeperReplica

integer

The number of replicas for the ZooKeeper component.

3

ControlCenterCU

integer

The number of CPU cores for the Control Center component.

4

ControlCenterStorage

integer

The disk capacity of the Control Center component. Unit: GB.

300

ControlCenterReplica

integer

The number of replicas for the Control Center component.

1

SchemaRegistryCU

integer

The number of CPU cores for the Schema Registry component.

4

SchemaRegistryReplica

integer

The number of replicas for the Schema Registry component.

2

ConnectCU

integer

The number of CPU cores for the Connect component.

4

ConnectReplica

integer

The number of replicas for the Connect component.

2

KsqlCU

integer

The number of CPU cores for the KsqlDB component.

2

KsqlStorage

integer

The disk capacity of the KsqlDB component. Unit: GB.

100

KsqlReplica

integer

The number of replicas for the KsqlDB component.

2

KafkaRestProxyCU

integer

The number of CPU cores for the Kafka Rest Proxy component.

4

KafkaRestProxyReplica

integer

The number of replicas for the Kafka Rest Proxy component.

2

ConfluentInstanceComponents

object

ConfluentInstanceComponentVO

array<object>

The details of the Confluent components. This parameter is returned only if the instance is a Confluent edition instance.

object

ComponentType

string

The component type.

CONNECTOR

DeployModule

string

The deployment type.

-   **vpc**: VPC
    
-   **eip**: Internet/VPC
    

vpc

VpcEndpoint

string

The VPC endpoint of the component.

vpc-connect-\*\*\*\*\*\*.csp.aliyuncs.com:8083

PubEndpoint

string

The Internet endpoint of the component.

**Note**

If the deployment type is VPC, the Internet endpoint is null.

pub-controlcenter-\*\*\*\*\*\*.csp.aliyuncs.com:443

Series

string

The instance edition. Valid values: v2, v3, and confluent.

v3

AutoCreateGroupEnable

boolean

Indicates whether consumer groups can be automatically created.

true

AutoCreateTopicEnable

boolean

Indicates whether topics can be automatically created.

true

VSwitchIds

object

VSwitchIds

array

A list of vSwitch IDs.

string

The vSwitch ID.

vsw-2zeiaqw75olqygldpcjst

DefaultPartitionNum

integer

The number of partitions for automatically created topics.

12

RecommendedPartitionCount

integer

The recommended number of partitions.

12

BackupZoneId

string

The ID of the backup zone.

cn-hangzhou-a

ScheduledRetirement

boolean

Indicates whether the instance is about to be unpublished.

false

### AllConfig metric description

Name

Type

Value range

Example

Description

enable.vpc\_sasl\_ssl

Boolean

\- true  
\- false  

false

Indicates whether to enable VPC transmission encryption. If you want to enable this feature, you must also enable ACL.

kafka.log.retention.hours

Integer

24 to 480

66

The message retention period in hours.

enable.acl

Boolean

\- true  
\- false  

false

Indicates whether to enable ACL. This feature is not supported for instances of versions earlier than 2.2.0. Only Professional Edition and Serverless instances support ACL.

kafka.message.max.bytes

Integer

1048576 to 10485760

6291456

The maximum message size in bytes.

## Examples

Success response

`JSON` format

```
{
  "Code": 200,
  "Message": "operation success.",
  "RequestId": "4B6D821D-7F67-4CAA-9E13-A5A997C3****",
  "Success": true,
  "InstanceList": {
    "InstanceVO": [
      {
        "VpcId": "vpc-bp1ojac7bv448nifj****",
        "SpecType": "professional",
        "DeployType": 5,
        "CreateTime": 1577961819000,
        "DiskSize": 3600,
        "DiskType": 1,
        "SecurityGroup": "sg-bp13wfx7kz9pkow****",
        "SslEndPoint": "192.0.XX.XX:9093,198.51.XX.XX:9093,203.0.XX.XX:9093",
        "InstanceId": "alikafka_pre-cn-mp919o4v****",
        "AllConfig": "{\\\"enable.vpc_sasl_ssl\\\":\\\"false\\\",\\\"kafka.log.retention.hours\\\":\\\"66\\\",\\\"enable.acl\\\":\\\"false\\\",\\\"kafka.message.max.bytes\\\":\\\"6291456\\\"}",
        "ServiceStatus": 5,
        "EipMax": 20,
        "RegionId": "cn-hangzhou",
        "MsgRetain": 72,
        "VSwitchId": "vsw-bp1fvuw0ljd7vzmo3****",
        "ExpiredTime": 1893581018000,
        "TopicNumLimit": 180,
        "ZoneId": "zonei",
        "IoMaxRead": 1000,
        "IoMaxWrite": 1000,
        "IoMax": 20,
        "PaidType": 1,
        "Name": "alikafka_post-cn-mp91gnw0****",
        "EndPoint": "192.168.XX.XX:9092,192.168.XX.XX:9092,192.168.XX.XX:9092",
        "Tags": {
          "TagVO": [
            {
              "Key": "test",
              "Value": "test"
            }
          ]
        },
        "UpgradeServiceDetailInfo": {
          "Current2OpenSourceVersion": "2.2.0"
        },
        "DomainEndpoint": "alikafka-pre-cn-zv**********-1-vpc.alikafka.aliyuncs.com:9092,alikafka-pre-cn-zv**********-2-vpc.alikafka.aliyuncs.com:9092,alikafka-pre-cn-zv**********-3-vpc.alikafka.aliyuncs.com:9092",
        "VpcSaslEndPoint": "172.16.3.XX:9095,172.16.3.XX:9095,172.16.3.XX:9095",
        "SaslEndPoint": "172.16.3.XX:9094,172.16.3.XX:9094,172.16.3.XX:9094",
        "SslDomainEndpoint": "alikafka-pre-cn-zv**********-1.alikafka.aliyuncs.com:9093,alikafka-pre-cn-zv**********-2.alikafka.aliyuncs.com:9093,alikafka-pre-cn-zv**********-3.alikafka.aliyuncs.com:9093",
        "SaslDomainEndpoint": "alikafka-pre-cn-zv**********-1-vpc.alikafka.aliyuncs.com:9094,alikafka-pre-cn-zv**********-2-vpc.alikafka.aliyuncs.com:9094,alikafka-pre-cn-zv**********-3-vpc.alikafka.aliyuncs.com:9094",
        "VpcSaslDomainEndpoint": "alikafka-post-cn-******-1-vpc.alikafka.aliyuncs.com:9095,alikafka-post-cn-******-2-vpc.alikafka.aliyuncs.com:9095,alikafka-post-cn-******-3-vpc.alikafka.aliyuncs.com:9095",
        "ResourceGroupId": "rg-ac***********7q\n",
        "UsedTopicCount": 3,
        "UsedGroupCount": 10,
        "UsedPartitionCount": 25,
        "KmsKeyId": "0d24xxxx-da7b-4786-b981-9a164dxxxxxx",
        "StandardZoneId": "cn-hangzhou-k",
        "IoMaxSpec": "alikafka.hw.2xlarge",
        "ReservedPublishCapacity": 60,
        "ReservedSubscribeCapacity": 60,
        "ViewInstanceStatusCode": 2,
        "ConfluentConfig": {
          "KafkaCU": 4,
          "KafkaStorage": 800,
          "KafkaReplica": 3,
          "ZooKeeperCU": 2,
          "ZooKeeperStorage": 100,
          "ZooKeeperReplica": 3,
          "ControlCenterCU": 4,
          "ControlCenterStorage": 300,
          "ControlCenterReplica": 1,
          "SchemaRegistryCU": 4,
          "SchemaRegistryReplica": 2,
          "ConnectCU": 4,
          "ConnectReplica": 2,
          "KsqlCU": 2,
          "KsqlStorage": 100,
          "KsqlReplica": 2,
          "KafkaRestProxyCU": 4,
          "KafkaRestProxyReplica": 2
        },
        "ConfluentInstanceComponents": {
          "ConfluentInstanceComponentVO": [
            {
              "ComponentType": "CONNECTOR",
              "DeployModule": "vpc",
              "VpcEndpoint": "vpc-connect-******.csp.aliyuncs.com:8083",
              "PubEndpoint": "pub-controlcenter-******.csp.aliyuncs.com:443"
            }
          ]
        },
        "Series": "v3",
        "AutoCreateGroupEnable": true,
        "AutoCreateTopicEnable": true,
        "VSwitchIds": {
          "VSwitchIds": [
            "vsw-2zeiaqw75olqygldpcjst"
          ]
        },
        "DefaultPartitionNum": 12,
        "RecommendedPartitionCount": 12,
        "BackupZoneId": "cn-hangzhou-a",
        "ScheduledRetirement": false
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

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

AgentBusinessError

Internal error, please try again, if invalid, please submit the work order.

Internal error, please try again, if invalid, please submit the work order.

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

BIZ.INSTANCE.NOT.FOUND

%s. Please check and try again later.

400

BIZ.INSTANCE.STATUS.ERROR

%s. Please check and try again later.

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

BIZ\_FIELD\_CHECK\_INVALID

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

BIZ\_INSTANCE\_BASIC\_INFO\_ERROR

%s. Please check and try again later.

400

BIZ\_INSTANCE\_CREATE\_ERROR

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

BIZ\_INSTANCE\_NOT\_FOUND

%s. Please check and try again later.

400

BIZ\_INSTANCE\_ONLY\_PROFESSIONAL\_SUPPORT

%s. Please check and try again later.

400

BIZ\_INSTANCE\_OWNER\_ERROR

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

BIZ\_INSTANCE\_STATUS\_ERROR

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

BIZ\_TAG\_RESOURCE\_NUM\_EXCEED

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

BIZ\_TOPIC\_CREATE\_INTERNAL\_ERROR

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

InstanceStatus.NotWaitDeploy

This function cannot be performed because the instance is not in the state to be deployed. Please try again later.

This function cannot be performed because the instance is not in the state to be deployed. Please try again later.

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

InvalidParameter

The %s parameter is invalid.

400

InvalidParameter.DataAlreadyExist

The data already exists for the %s parameter.

400

InvalidParameter.DataNotChange

There is no change in the parameters. Please adjust and try again.

There is no change in the parameters. Please adjust and try again.

400

InvalidParameter.NotSupport

The %s parameter is not supported.

400

InvalidParameter.OtherParam

Parameter %s is incorrect because %s.

Parameter %s is incorrect because %s.

400

InvalidParameter.Range

The value of the %s parameter is not within the specified range.

400

InvalidParameter.Size

The size of the %s parameter is not within the specified range.

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

MissingParameter

The %s parameter is required.

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

ONS\_INTERNAL\_ERROR

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

ONS\_SYSTEM\_ERROR

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

BIZ\_PARAM\_EMPTY

param is blank.

The input parameter cannot be empty.

400

BIZ\_INSTANCE\_CANNOT\_OPERATE

Unable to operate during instance maintenance.

400

RemoteCallError

An internal service invocation error occurred. Please try again later.

400

InvalidParameter.Format

The %s format is invalid.

400

Inner.Owner.notAllowed

inner account not allowed.

Internal users cannot purchase

500

GET.CONSUMER.PROGRESS.ERROR

An instance status error occurred.

500

INTERNAL.ERROR

An internal error occurred. Please try again later.

500

InternalError

A system exception occurred. Please submit a ticket.

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

See [Release Notes](https://api.alibabacloud.com/document/alikafka/2019-09-16/GetInstanceList#workbench-doc-change-demo) for a complete list.
