Changes the source or destination database of a data synchronization or migration task in Data Transmission Service (DTS).

**Note**

After the database is changed, DTS rolls back the incremental write offset for 10 seconds. If the synchronized or migrated data does not have a primary key, make sure that no data is written to the source database while the source or destination database is being replaced. Otherwise, duplicate data may exist.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Dts&api=ModifyDtsJobEndpoint&type=RPC&version=2020-01-01)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

ModifyDtsJobEndpoint

The operation that you want to perform. Set the value to ModifyDtsJobEndpoint.

RegionId

String

No

cn-hangzhou

The region ID of the DTS instance.

DtsJobId

String

No

m4312mab158\*\*\*\*

The ID of the data synchronization or migration task. You can call the [DescribeDtsJobs](/help/en/dts/developer-reference/api-describedtsjobs) operation to query the task ID.

**Note**

DtsInstanceId is required if you leave this parameter empty.

DtsInstanceId

String

No

dtsaw012y2g15q\*\*\*\*

The ID of the data synchronization or migration instance.

**Note**

DtsJobId is required if you leave this parameter empty.

SynchronizationDirection

String

No

Forward

The synchronization direction. Valid values:

-   Forward (default): Data is synchronized from the source database to the destination database.
    
-   Reverse: Data is synchronized from the destination database to the source database.
    

Endpoint

String

Yes

src

The database that you want to change. Valid values:

-   src: the source database.
    
-   dest: the destination database.
    

EndpointRegionId

String

No

cn-hangzhou

The region in which the database resides.

EndpointInstanceType

String

Yes

rds

The type of the database. Valid values:

-   rds: ApsaraDB RDS for MySQL or ApsaraDB RDS for PostgreSQL instance.
    
-   polardb: PolarDB for MySQL or PolarDB for PostgreSQL cluster.
    
-   mongodb: The source ApsaraDB for MongoDB replica set instances and the destination ApsaraDB for MongoDB replica set or sharded cluster instances.
    
-   distributed\_mongodb: The source ApsaraDB for MongoDB sharded cluster distributed instances.
    

**Note**

To synchronize and migrate incremental data tasks of distributed instances, you must first use the oplog to record data changes in the source database.

-   greenplum: AnalyticDB for PostgreSQL instance.
    
-   kafka: ApsaraMQ for Kafka instance.
    
-   ecs: self-managed database that is hosted on an Elastic Compute Service (ECS) instance.
    
-   express: database that is connected over Express Connect.
    
-   other: database that is connected over the Internet.
    

**Note**

-   The following types of databases are supported: MySQL, PolarDB for MySQL, PostgreSQL, PolarDB for PostgreSQL, MongoDB, Kafka, and AnalyticDB for PostgreSQL.
    
-   If the database that you want to change is a MongoDB database of the sharded cluster architecture, the new MongoDB database must have the same number of shards as the original MongoDB database.
    
-   If the database that you want to change is a source PostgreSQL database, you must make sure that the latency of the DTS instance is less than 30 seconds and that no data is written to the source database during the change. Otherwise, data inconsistency may occur.
    
-   The value of this parameter is case-insensitive.
    

EndpointInstanceId

String

No

rm-bp10k50h8374w\*\*\*\*

The database ID.

EndpointIp

String

No

172.168.XX.XXX

The IP address of the database.

EndpointPort

String

No

3306

The port number of the database.

ModifyAccount

Boolean

No

false

Specifies whether to change the password of the database account. Valid values:

-   true: Yes.
    
-   false (default): No.
    

Username

String

No

dtstest

The database account of the instance.

**Note**

This parameter is valid only if ModifyAccount is set to true.

Password

String

No

DTStest\*\*\*\*

The password of the database account.

**Note**

This parameter is valid only if ModifyAccount is set to true.

Database

String

No

admin

If the type of the database to be changed is PostgreSQL, PolarDB for PostgreSQL, or AnalyticDB for PostgreSQL, set this parameter to the name of the database. If the type of the database to be changed is MongoDB, set this parameter to the name of the authentication database.

**Note**

This parameter is valid and required only if the database type is PostgreSQL, PolarDB for PostgreSQL, AnalyticDB for PostgreSQL, or MongoDB.

ShardUsername

String

No

shard

The username of the account that is used to log on to the ApsaraDB for MongoDB sharded cluster instance.

**Note**

-   This parameter is valid and required only if the source database is an ApsaraDB for MongoDB sharded cluster instance.
    
-   This parameter is valid only if ModifyAccount is set to true.
    

ShardPassword

String

No

DTStest\*\*\*\*

The password of the account that is used to log on to the ApsaraDB for MongoDB sharded cluster instance.

**Note**

-   This parameter is valid and required only if the source database is an ApsaraDB for MongoDB sharded cluster instance.
    
-   This parameter is valid only if ModifyAccount is set to true.
    

RoleName

String

No

ram-for-dts

The name of the Resource Access Management (RAM) role that you specify to access resources across Alibaba Cloud accounts.

**Note**

This parameter is required if you synchronize or migrate data across Alibaba Cloud accounts. For more information, see [Configure RAM authorization for cross-account DTS tasks](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization).

AliyunUid

String

No

150780020300\*\*\*\*

The ID of the Alibaba Cloud account to which the database instance belongs.

**Note**

If you specify this parameter, data is synchronized or migrated across Alibaba Cloud accounts. You must also specify RoleName.

DryRun

Boolean

No

true

Specifies whether to perform only a precheck. Valid values:

-   true: Yes. After the precheck is passed, the database is not changed.
    
-   false (default): No. After the precheck is passed, the database is changed and the DTS task is run.
    

ResourceGroupId

String

No

rg-acfmzawhxxc\*\*\*\*

The resource group ID.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

HttpStatusCode

String

200

The HTTP status code.

RequestId

String

3FA98DF2-2F81-51FF-8A38-AA5112DD\*\*\*\*

The request ID.

Success

Boolean

true

Indicates whether the request was successful. Valid values:

ErrCode

String

DTS.Msg.InvalidEndpoint

The error code returned if the request failed.

ErrMessage

String

The endpoint is invalid.

The error message returned if the request failed.

## Examples

Sample requests

```
http(s)://dts.aliyuncs.com/?Action=ModifyDtsJobEndpoint
&RegionId=cn-hangzhou
&DtsInstanceId=dtsaw012y2g15q****
&SynchronizationDirection=Forward
&Endpoint=src
&EndpointInstanceType=rds
&EndpointInstanceId=rm-bp10k50h8374w****
&Username=dtstest
&Password=DTStest****
&DryRun=true
& Common request parameters
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<ModifyDtsJobEndpointResponse>
    <HttpStatusCode>200</HttpStatusCode>
    <RequestId>3FA98DF2-2F81-51FF-8A38-AA5112DD****</RequestId>
    <Success>true</Success>
</ModifyDtsJobEndpointResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "HttpStatusCode" : "200",
  "RequestId" : "3FA98DF2-2F81-51FF-8A38-AA5112DD****",
  "Success" : true
}
```

## Error codes

**HttpCode**

**Error code**

**Error message**

**Description**

400

InvalidParameter.TagKey

The Tag.N.Key parameter is invalid.

The specified tag key is invalid. Enter a valid tag key.

400

InvalidParameter.TagValue

The Tag.N.Value parameter is invalid.

The specified tag value is invalid. Enter a valid tag value.

400

InvalidParameter.Tags

The specified value of parameter Tags is not valid.

The specified tag key or tag value is invalid. Enter a valid tag key or tag value.

400

Missing.TagKey

You must specify the key for value %s in Tag.N.Key.

The tag key is not specified.

400

MissingParameter.TagOrResourceId

Either Tags or ResourceIds must be specified.

The tag or instance ID is not specified.

400

NumberExceed.Tags

The maximum number of Tags is exceeded. The maximum value is 20.

The maximum number of tags is reached, which is 20. Delete unnecessary tags.

400

NumberExceed.ResourceIds

The maximum number of ResourceIds is exceeded. The maximum value is 50.

The maximum number of instance IDs is reached, which is 20. Delete unnecessary instance IDs.

400

InvalidParameter.Category

The specified Category is invalid. Valid values are Custom and System.

The value of Category is invalid. Valid values: Custom and System.

400

InvalidParameter.NextToken

The parameter NextToken is invalid.

The value of NextToken is invalid. Enter a valid token.

400

InvalidParameter.ResourceType

The ResourceType parameter is invalid.

The value of ResourceType is invalid. Set the value to ALIYUN::DTS::INSTANCE.

400

InvalidParameter.Scope

The specified Scope is invalid. Valid value: public, private.

The specified scope that is allowed to view the tag is invalid. Valid values: public and private.

400

Throttling.User

Request was denied due to user flow control.

The number of requests reached the limit and the request was rejected. Try again later.

403

Duplicate.TagKey

The Tag.N.Key contains duplicate keys.

The specified tag key already exists. Delete the redundant tag key.

403

NoPermission.SystemTag

You are not authorized to operate system tag because the product code is invalid.

You are not authorized to perform operations on tag values due to invalid code.

403

QuotaExceed.TagsPerResource

The maximum number of tags for each resource is exceeded.

The maximum number of tags is reached. Delete unnecessary tags.

403

NoPermission.Operator

The user is not authorized to operate on the specified resource.

You are not authorized to perform operations on the specified resource.

403

InvalidSecurityToken.Expired

Specified SecurityToken is expired.

The signature expired. Use a new signature.

500

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The response of the server timed out or the server was unavailable. Try again. If the error persists, contact technical support.

For a list of error codes, see [Error Codes](https://error-center.alibabacloud.com/status/product/Dts).
