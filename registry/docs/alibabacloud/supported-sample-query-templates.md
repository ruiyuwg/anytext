This topic describes the sample query templates provided by the advanced search feature.

**Name**

**Description**

**SQL statement**

Counting of Alibaba Cloud Resources

Queries the total number of resources on which you have permissions.

```
-- The COUNT() function is used to query the total number of resources. 
-- The resources table stores information about resource properties. 
SELECT
 COUNT(*)
FROM
 resources;
```

Counting of ECS Instance Resources

Queries the total number of ECS instance resources on which you have permissions.

```
-- You can replace resource_type = 'ACS::ECS::Instance' with another condition to query the number of resources that meet the condition. 
-- You can click a resource type or resource property displayed in the left-side navigation tree of the Advanced Search page in the Resource Management console. The system creates a query condition and includes the condition in a query statement. 
SELECT
 COUNT(*)
FROM
 resources
WHERE
 resource_type = 'ACS::ECS::Instance';
```

Query of All Alibaba Cloud Resources

Queries all resources on which you have permissions and sorts the resources by resource type and resource ID.

```
-- The sample code shows all core properties of a resource. You can add or remove a property or configure the properties parameter to specify extended properties of a resource. 
-- The ORDER BY clause is used to specify the rule based on which resources are sorted. You can configure the DESC or ASC parameter to change the order in which resources are sorted. If you do not specify an order, resources are automatically sorted in ascending order. 
-- Sorting data based on resource_type and resource_id can help accelerate queries. 
SELECT
 resource_id,
 resource_name,
 region_id,
 zone_id,
 resource_type,
 account_id,
 create_time,
 resource_group_id,
 tags,
 ip_addresses,
 vpc_id,
 v_switch_id
FROM
 resources
ORDER BY
 resource_type,
 resource_id
LIMIT
 1000 OFFSET 0;
```

Query of All ECS Instance Resources

Queries all ECS instance resources on which you have permissions and sorts the resources in ascending order by name.

```
-- You can change the properties based on which you want to sort resources and the order in which you want to sort resources. If you do not specify an order, resources are automatically sorted in ascending order. 
-- We recommend that you do not use properties that have NULL values for resource sorting. If you use such properties, perform special processing. If you do not perform special processing on such properties, resources cannot be correctly sorted based on the properties. 
SELECT
 resource_id,
 resource_name,
 region_id,
 zone_id,
 resource_type,
 account_id,
 create_time,
 resource_group_id,
 tags,
 ip_addresses,
 vpc_id,
 v_switch_id
FROM
 resources
WHERE
 resource_type = 'ACS::ECS::Instance'
ORDER BY
 resource_name
LIMIT
 1000 OFFSET 0;
```

Query of First 20 Resources Sorted by Resource Type and Resource ID

Queries the first 20 resources sorted by resource type and resource ID.

```
-- The LIMIT condition is used to specify the maximum number of entries that can be returned. The number of entries that can be returned ranges from 1 to 1,000. If you do not configure the LIMIT condition, a maximum of 1,000 entries can be returned by default. 
-- If the values of some properties based on which resources are sorted are duplicate, different results may be returned for multiple queries. In this case, you can add properties for sorting to ensure the consistency of the results. 
SELECT
 resource_id,
 resource_name,
 region_id,
 resource_type,
 account_id
FROM
 resources
ORDER BY
 resource_type,
 resource_id
LIMIT
 20;
```

Query of 11th to 30th Resources Sorted by Resource Type and Resource ID

Queries the 11th to 30th resources sorted by resource type and resource ID.

```
-- The LIMIT OFFSET condition is used to limit the scope of the returned result. LIMIT specifies the maximum number of entries that can be returned, and OFFSET specifies the location from which entries start to be returned. 
-- You can use the LIMIT OFFSET condition in paged queries. For each query, you can use LIMIT to limit the maximum number of entries that can be returned and use OFFSET to obtain the next page of entries. To ensure that consecutive entries can be returned, you need to use the ORDER BY clause to specify the sorting method. 
-- If the values of some properties based on which resources are sorted are duplicate, different results may be returned for multiple queries. In this case, you can add properties for sorting to ensure the consistency of the results. 
SELECT
 resource_id,
 resource_name,
 region_id,
 zone_id,
 resource_type,
 account_id,
 create_time,
 resource_group_id,
 tags,
 ip_addresses,
 vpc_id,
 v_switch_id
FROM
 resources
ORDER BY
 resource_type, 
 resource_id
LIMIT
 20 OFFSET 10;
```

Counting of Resources of Different Types

Queries the numbers of resources of different types and sorts the resources by quantity in descending order.

```
-- The GROUP BY clause is used to categorize and group resources based on a specific property. 
-- If the query result contains a string column and a numeric value column, you can view the query result in a chart. 
SELECT
 resource_type,
 COUNT(*) AS cnt
FROM
 resources
GROUP BY
 resource_type
ORDER BY
 cnt DESC;
```

Counting of Resources in Different Regions

Queries the numbers of resources in different regions and sorts the resources by quantity in descending order.

```
-- If the query result contains a string column and a numeric value column, you can view the query result in a chart. 
SELECT
 region_id,
 COUNT(*) AS cnt
FROM
 resources
GROUP BY
 region_id
ORDER BY
 cnt DESC;
```

Counting of Resources in Different Resource Groups

Queries the numbers of resources in different resource groups and sorts the resources by quantity in descending order.

```
-- If the query result contains a string column and a numeric value column, you can view the query result in a chart. 
SELECT
 CASE
 WHEN resource_group_id IS NULL THEN 'Not connected to resource group'
 ELSE resource_group_id
 END AS resource_group_id,
 COUNT(*) AS cnt
FROM
 resources
GROUP BY
 resource_group_id
ORDER BY
 cnt DESC;
```

Counting of Resources of Different Types in Specified Resource Group

Queries the numbers of resources of all types in a specified resource group and sorts the resources by quantity in descending order.

```
-- If the query result contains a string column and a numeric value column, you can view the query result in a chart. 
SELECT
 resource_type,
 COUNT(*) AS cnt
FROM
 resources
WHERE
 resource_group_id = 'rg-xxx'
GROUP BY
 resource_type
ORDER BY
 cnt DESC;
```

Query of All Types of ECS Resources

Queries all types of ECS resources and sorts the resources by resource type and creation time.

```
-- ACS::ECS::% is used to match the resource type code that starts with ACS::ECS::. The query result contains all types of ECS resources. 
-- In the sample code, resources are first sorted by type in ascending order. Then, resources of the same type are sorted by creation time in ascending order. 
SELECT
 resource_id,
 resource_name,
 region_id,
 zone_id,
 resource_type,
 account_id,
 create_time,
 resource_group_id,
 tags,
 ip_addresses,
 vpc_id,
 v_switch_id
FROM
 resources
WHERE
 resource_type LIKE 'ACS::ECS::%'
ORDER BY
 resource_type,
 create_time;
```

Query of Resources with Specified Tag

Queries all resources that have a specified tag.

```
-- You can replace KEY and VALUE based on your business requirements. 
SELECT
 resource_id,
 resource_name,
 region_id,
 zone_id,
 resource_type,
 account_id,
 create_time,
 resource_group_id,
 tags,
 ip_addresses,
 vpc_id,
 v_switch_id
FROM
 resources
WHERE
 tags ->> 'KEY' = 'VALUE';
```

Query of Resources Whose Tag Keys Contain test

Queries all resources whose tag keys contain the keyword test.

```
-- In the sample code, a nested query is performed. The inner query is first executed, and the query result is used as a temporary table. The outer query is executed in the temporary table. 
-- The JSONB_OBJECT_KEYS() function is used to expand map-type objects into a collection of keys. The query is performed on the collection. 
-- In the sample code, %test% is used to match all tags whose key contain the keyword test. 
SELECT
 *
FROM
 (
 SELECT
 resource_id,
 resource_name,
 region_id,
 zone_id,
 resource_type,
 account_id,
 create_time,
 resource_group_id,
 tags,
 ip_addresses,
 vpc_id,
 v_switch_id,
 JSONB_OBJECT_KEYS(tags) AS tag_key
 FROM
 resources
 ) AS r
WHERE
 r.tag_key LIKE '%test%'
ORDER BY
 r.resource_type,
 r.resource_id;
```

Query of All Resources with Specified IP Address

Queries all resources that have a specified IP address.

```
-- The JSONB_ARRAY_ELEMENTS_TEXT() function is used to expand an array into a collection of text values. The query is performed on the collection. 
SELECT
 *
FROM
 (
 SELECT
 resource_id,
 resource_name,
 region_id,
 zone_id,
 resource_type,
 account_id,
 create_time,
 resource_group_id,
 tags,
 ip_addresses,
 vpc_id,
 v_switch_id,
 JSONB_ARRAY_ELEMENTS_TEXT(ip_addresses) AS ip
 FROM
 resources
 ) AS r
WHERE
 r.ip = 'xxx.xxx.xxx.xxx'
ORDER BY
 r.resource_type,
 r.resource_id;
```

Query of ECS Instance Resources Created After Specified Date

Queries ECS instance resources created after a specified date.

```
-- The AND operator is used to connect multiple query conditions. Only resources that meet all query conditions can be returned.
SELECT
 resource_id,
 resource_name,
 region_id,
 zone_id,
 resource_type,
 account_id,
 create_time,
 resource_group_id,
 tags,
 ip_addresses,
 vpc_id,
 v_switch_id
FROM
 resources
WHERE
 resource_type = 'ACS::ECS::Instance'
 AND create_time > '2023-08-07'
ORDER BY
 create_time;
```

Query of Resources Created Within Last 30 Days

Queries resources created within the last 30 days and sorts the resources by creation time in ascending order.

```
-- You can specify a calculation formula in the query condition to perform an exact query. 
SELECT
 resource_id,
 resource_name,
 region_id,
 zone_id,
 resource_type,
 account_id,
 create_time,
 resource_group_id,
 tags,
 ip_addresses,
 vpc_id,
 v_switch_id
FROM
 resources
WHERE
 create_time > TO_CHAR(NOW() - interval '30 day', 'YYYY-MM-DD')
ORDER BY
 create_time;
```

Query of Resources in Specified VPC

Queries resources deployed in a specified VPC and sorts the resources by type in ascending order.

```
SELECT
 resource_id,
 resource_name,
 region_id,
 zone_id,
 resource_type,
 account_id,
 create_time,
 resource_group_id,
 tags,
 ip_addresses,
 vpc_id,
 v_switch_id
FROM
 resources
WHERE
 vpc_id = 'vpc-xxx'
ORDER BY
 resource_type,
 resource_id;
```

Query of Extended Properties of ECS Instances

Queries the extended properties of ECS instances, such as the status, memory, specifications, and billing method.

```
-- You can specify the properties field for resources of different types to query the extended properties of the resources. 
-- You can click a resource type or resource property displayed in the left-side navigation tree of the Advanced Search page in the Resource Management console. The system creates a query condition and includes the condition in a query statement. 
-- The CASE clause is used to define different values for the same property, which helps you easily understand the query result. 
SELECT
 resource_id,
 resource_name,
 properties ->> 'Status' AS "Instance status",
 properties ->> 'InstanceNetworkType' AS "Network type",
 properties ->> 'Memory' AS "Memory",
 properties ->> 'Cpu' AS Cpu,
 properties ->> 'InstanceType' AS "Specifications",
 CASE
 properties ->> 'InstanceChargeType'
 WHEN 'PrePaid' THEN 'Subscription'
 WHEN 'PostPaid' THEN 'Pay-as--you-go'
 ELSE properties ->> 'InstanceChargeType'
 END AS "Billing method",
 region_id,
 zone_id,
 resource_type,
 account_id,
 create_time,
 resource_group_id,
 ip_addresses
FROM
 resources
WHERE
 resource_type = 'ACS::ECS::Instance'
ORDER BY
 resource_id;
```

Counting of ECS Instances Categorized by Operating System

Queries the numbers of ECS instances categorized by operating system.

```
-- If the query result contains a string column and a numeric value column, you can view the query result in a chart. 
SELECT
 properties ->> 'OSType' AS OSType,
 COUNT(*) AS num
FROM
 resources
WHERE
 resource_type = 'ACS::ECS::Instance'
GROUP BY
 properties ->> 'OSType';
```

Query of Stopped ECS Instance Resources

Queries the stopped ECS instance resources.

```
-- The CASE clause is used to define different values for the same property, which helps you easily understand the query result. 
-- The CONCAT() function is used to combine multiple properties into one column, which helps you easily view the query result. In the sample code, forward slashes (/) are used as delimiters. 
SELECT
 resource_id,
 resource_name,
 CONCAT(region_id, '/', zone_id) AS "Region/Zone",
 CASE
 properties ->> 'Status'
 WHEN 'Pending' THEN 'Creating'
 WHEN 'Running' THEN 'Running'
 WHEN 'Starting' THEN 'Starting'
 WHEN 'Stopping' THEN 'Stopping'
 WHEN 'Stopped' THEN 'Stopped'
 END AS "Status",
 CONCAT(
 properties ->> 'Cpu',
 ' vCPU ',
 (properties -> 'Memory') :: int / 1024,
 ' GiB ',
 properties ->> 'InstanceType'
 ) AS "Configuration",
 properties ->> 'InstanceChargeType' AS "Billing method",
 resource_type,
 account_id,
 create_time,
 resource_group_id,
 tags,
 ip_addresses,
 properties
FROM
 resources
WHERE
 resource_type = 'ACS::ECS::Instance'
 AND properties ->> 'Status' = 'Stopped'
ORDER BY
 resource_id;
```

Query of Disks Attached to ECS Instances

Queries disks attached to ECS instances.

```
-- The JOIN keyword is specified to perform a joint query on multiple tables. The query result is returned based on the join conditions and filter conditions. 
SELECT
 a.resource_type AS resource_type_disk,
 b.resource_type AS resource_type_instance,
 a.resource_id AS disk_id,
 a.region_id AS instance_region_id,
 b.resource_id AS instance_id,
 b.region_id AS disk_region_id
FROM
 resources a
 LEFT JOIN resources b ON a.properties ->> 'InstanceId' = b.resource_id
WHERE
 a.resource_type = 'ACS::ECS::Disk'
 AND b.resource_type = 'ACS::ECS::Instance';
```

Query of Unattached Disks

Queries unattached disks.

```
SELECT
 resource_id,
 resource_name,
 properties ->> 'Status' AS "Disk status",
 CASE
 properties ->> 'Type'
 WHEN 'system' THEN 'System disk'
 WHEN 'data' THEN 'Data disk'
 ELSE properties ->> 'Type'
 END AS "Disk type",
 properties ->> 'DiskChargeType' AS "Billing method of a disk",
 CASE
 properties ->> 'Portable'
 WHEN 'true' THEN 'Supported'
 ELSE 'Not supported'
 END AS "Detachable",
 CASE
 properties ->> 'DeleteWithInstance'
 WHEN 'true' THEN 'Disk released with instance, but automatic snapshot not deleted with disk'
 ELSE 'Disk not released with instance, and automatic snapshot not deleted with disk'
 END AS "Release mode",
 region_id,
 zone_id,
 resource_type,
 account_id,
 create_time,
 resource_group_id,
 tags
FROM
 resources
WHERE
 properties ->> 'Status' = 'Available'
 AND resource_type = 'ACS::ECS::Disk'
ORDER BY
 resource_id;
```

Query of ECS Disks with Capacity Greater Than 40 GB

Queries the ECS disks whose capacity is greater than 40 GB and sorts the disks by capacity.

```
SELECT
 resource_id,
 resource_name,
 region_id,
 zone_id,
 resource_type,
 account_id,
 create_time,
 resource_group_id,
 tags,
 ip_addresses,
 vpc_id,
 v_switch_id,
 (properties ->> 'Size') :: int AS disk_size
FROM
 resources
WHERE
 resource_type = 'ACS::ECS::Disk'
 AND (properties ->> 'Size') :: int > 40
order by
 disk_size;
```

Query of Subscription ApsaraDB RDS Instances That Are About to Expire

Queries the subscription ApsaraDB RDS instances that are about to expire.

```
-- The sample code defines that the resources that will expire in less than 30 days are the resources that are about to expire. You can change the condition based on your business requirements. 
-- The TO_TIMESTAMP() function is used to convert time strings into formatted timestamps for related computing. 
SELECT
 *
FROM
 (
 SELECT
 resource_id,
 resource_name,
 account_id,
 resource_type,
 region_id,
 zone_id,
 create_time,
 to_timestamp(
 (properties ->> 'ExpireTime') :: varchar,
 'YYYY-MM-DD HH24:MI:SS'
 ) AS "Expiration time",
 properties ->> 'DBInstanceStatus' AS "Instance status",
 properties ->> 'DBInstanceType' AS "Instance type",
 CONCAT(
 properties ->> 'Engine',
 ' ',
 properties ->> 'EngineVersion'
 ) AS "Database type",
 vpc_id,
 tags
 FROM
 resources
 WHERE
 resource_type = 'ACS::RDS::DBInstance'
 and properties ->> 'PayType' = 'Prepaid'
 order by
 create_time
 ) AS t
WHERE
 t."Expiration time" < NOW() + interval '30 day'
ORDER BY
 t.resource_id;
```
