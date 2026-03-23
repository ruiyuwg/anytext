You can call the DescribeAvailableResource operation to query the resources that are available to a region.

The DescribeAvailableResource operation is no longer available. You can use the [DescribeAvailableZones](/help/en/rds/api-query-available-zones-and-resources) and [DescribeAvailableClasses](/help/en/rds/api-query-available-specifications) operations instead.

**Note** You can call the DescribeAvailableResource operation up to 20 times within 1 minute.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=DescribeAvailableResource&type=RPC&version=2014-08-15)

## Request parameters

Parameter

Type

Required

Example

Description

Action

String

Yes

DescribeAvailableResource

The operation that you want to perform. Set the value to **DescribeAvailableResource**.

RegionId

String

No

cn-hangzhou

The region ID of the instance. You can call the [DescribeRegions](/help/en/rds/api-query-regions) operation to query the most recent region list.

ZoneId

String

No

cn-hangzhou-b

The zone ID of the instance.

InstanceChargeType

String

Yes

Postpaid

The billing method of the instance. Valid values:

-   **Prepaid**: subscription
-   **Postpaid**: pay-as-you-go

Engine

String

No

MySQL

The database engine of the instance. Valid values:

-   **MySQL**
-   **SQLServer**
-   **PostgreSQL**
-   **MariaDB**

EngineVersion

String

No

5.7

The database engine version of the instance. Valid values:

-   Valid values when you set the Engine parameter to MySQL: **5.5, 5.6, 5.7, and 8.0**
-   Valid values when you set the Engine parameter to SQLServer: **2008r2, 2012, 2012\_ent\_ha, 2012\_std\_ha, 2012\_web, 2014\_std\_ha, 2016\_ent\_ha, 2016\_std\_ha, 2016\_web, 2017\_ent, and 2019\_ent**
-   Valid values when you set the Engine parameter to PostgreSQL: **10.0, 11.0, 12.0, 13.0, 14.0, and 15.0**
-   Valid values when you set the Engine parameter to MariaDB: **10.3**

DBInstanceClass

String

No

rds.mysql.s1.small

The instance type of the instance. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).

OrderType

String

No

BUY

The type of the order. Set the value to **BUY**.

DBInstanceStorageType

String

No

local\_ssd

The storage type of the instance. Valid values:

-   **local\_ssd**: local SSD
-   **cloud\_ssd**: standard SSD
-   **cloud\_essd**: enhanced SSDs (ESSD) of performance level 1 (PL1)
-   **cloud\_essd2**: ESSD of PL2
-   **cloud\_essd3**: ESSD of PL3

Category

String

No

Basic

The RDS edition of the instance. Valid values:

-   **Basic**: RDS Basic Edition
-   **HighAvailability**: RDS High-availability Edition
-   **AlwaysOn**: RDS Cluster Edition
-   **Finance**: RDS Enterprise Edition

DispenseMode

Integer

No

0

Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values:

-   **1**: returns the zones.
-   **0**: does not return the zones.

Default value: **0**.

**Note** The single-zone deployment method allows you to deploy an instance that runs RDS Enterprise Edition in a single zone.

## Response parameters

Parameter

Type

Example

Description

RequestId

String

A32E046E-2643-4B65-828D-23FEED4853A3

The ID of the request.

AvailableZones

Array of AvailableZone

An array that consists of zones in which resources are available.

AvailableZone

ZoneId

String

cn-hangzhou-b

The zone ID of the instance.

Status

String

Enable

Indicates whether the resources in the region can be purchased. Valid values:

-   **Enable**: The resources in the region can be purchased.
-   **Disable**: The resources in the region cannot be purchased.

RegionId

String

cn-hangzhou

The region ID of the instance.

SupportedEngines

Array of SupportedEngine

An array that consists of the database engines available in the zone.

SupportedEngine

Engine

String

MySQL

The database engine that the instance runs.

SupportedEngineVersions

Array of SupportedEngineVersion

An array that consists of the database engine versions available in the zone.

SupportedEngineVersion

Version

String

5.7

The version of the database engine that is run by the instance.

SupportedCategorys

Array of SupportedCategory

An array that consists of available RDS editions.

SupportedCategory

Category

String

HighAvailability

The RDS edition of the instance.

SupportedStorageTypes

Array of SupportedStorageType

An array that consists of available storage types.

SupportedStorageType

StorageType

String

local\_ssd

The storage type of the instance.

AvailableResources

Array of AvailableResource

An array that consists of available resources.

AvailableResource

StorageRange

String

"{\\"values\\":\[{\\"max\\":2000,\\"min\\":5,\\"step\\":5}\]}"

The range of the storage capacity. The value consists of the maximum storage capacity, the minimum storage capacity, and the increment to increase the storage capacity.

DBInstanceClass

String

rds.mysql.s1.small

The instance type of the instance.

DBInstanceStorageRange

Object

An array that consists of the ranges of storage capacity.

Step

Integer

5

The increment at which the storage capacity increases. Unit: GB.

Max

Integer

2000

The maximum storage capacity that you can purchase. Unit: GB.

Min

Integer

5

The minimum storage capacity that you must purchase. Unit: GB.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/?Action=DescribeAvailableResource
&InstanceChargeType=Postpaid
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<DescribeAvailableResourceResponse>
    <RequestId>A32E046E-2643-4B65-828D-23FEED4853A3</RequestId>
    <AvailableZones>
        <ZoneId>cn-hangzhou-b</ZoneId>
        <Status>Enable</Status>
        <RegionId>cn-hangzhou</RegionId>
        <SupportedEngines>
            <Engine>MySQL</Engine>
            <SupportedEngineVersions>
                <Version>5.7</Version>
                <SupportedCategorys>
                    <Category>HighAvailability</Category>
                    <SupportedStorageTypes>
                        <StorageType>local_ssd</StorageType>
                        <AvailableResources>
                            <StorageRange>"{\"values\":[{\"max\":2000,\"min\":5,\"step\":5}]}"</StorageRange>
                            <DBInstanceClass>rds.mysql.s1.small</DBInstanceClass>
                            <DBInstanceStorageRange>
                                <Step>5</Step>
                                <Max>2000</Max>
                                <Min>5</Min>
                            </DBInstanceStorageRange>
                        </AvailableResources>
                    </SupportedStorageTypes>
                </SupportedCategorys>
            </SupportedEngineVersions>
        </SupportedEngines>
    </AvailableZones>
</DescribeAvailableResourceResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "A32E046E-2643-4B65-828D-23FEED4853A3",
  "AvailableZones" : [ {
    "ZoneId" : "cn-hangzhou-b",
    "Status" : "Enable",
    "RegionId" : "cn-hangzhou",
    "SupportedEngines" : [ {
      "Engine" : "MySQL",
      "SupportedEngineVersions" : [ {
        "Version" : "5.7",
        "SupportedCategorys" : [ {
          "Category" : "HighAvailability",
          "SupportedStorageTypes" : [ {
            "StorageType" : "local_ssd",
            "AvailableResources" : [ {
              "StorageRange" : "\"{\\\"values\\\":[{\\\"max\\\":2000,\\\"min\\\":5,\\\"step\\\":5}]}\"",
              "DBInstanceClass" : "rds.mysql.s1.small",
              "DBInstanceStorageRange" : {
                "Step" : 5,
                "Max" : 2000,
                "Min" : 5
              }
            } ]
          } ]
        } ]
      } ]
    } ]
  } ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

ArticleNotFound

Article not found

The error message returned because no relevant articles are found.

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/Rds).
