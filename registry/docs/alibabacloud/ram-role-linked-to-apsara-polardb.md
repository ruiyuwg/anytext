AliyunServiceRoleForPolarDB is the RAM role that is linked to the Apsara PolarDB service. This topic describes the application scenarios of the RAM role, and provides the details about how to delete the RAM role.

## Background information

Apsara PolarDB may need to access other cloud services to implement functions. To meet this need, Alibaba Cloud provides the AliyunServiceRoleForPolarDB RAM role that allows Apsara PolarDB to access other cloud services.

## Scenarios

If you want to bind a private domain name to a private IP address of Apsara PolarDB, Apsara PolarDB must access the resources of Alibaba Cloud DNS PrivateZone. In this case, Apsara PolarDB can assume the AliyunServiceRoleForPolarDB role to obtain the required access permissions.

## AliyunServiceRoleForPolarDB

The name of the RAM role is AliyunServiceRoleForPolarDB.

The permission policy that is attached to the RAM role is AliyunServiceRolePolicyForPolarDB.

The permissions of the RAM role are described as follows:

```
{
    "Action": [
      "pvtz:DescribeUserServiceStatus",
      "pvtz:DescribeZones",
      "pvtz:DescribeZoneInfo",
      "pvtz:DescribeZoneRecords",
      "pvtz:CheckZoneName",
      "pvtz:AddZone",
      "pvtz:BindZoneVpc",
      "pvtz:DeleteZone",
      "pvtz:AddZoneRecord",
      "pvtz:UpdateZoneRecord",
      "pvtz:DeleteZoneRecord"
    ],
    "Resource": "*",
    "Effect": "Allow"
  }
```

## Delete the AliyunServiceRoleForPolarDB RAM role

Before you delete the AliyunServiceRoleForPolarDB RAM role, you must release the Apsara PolarDB cluster that is dependent on this RAM role.

-   For more information about how to release an Apsara PolarDB cluster, see [Release a cluster](/help/en/polardb/polardb-for-oracle/release-a-cluster-1#task-1580301 "You can manually release a pay-as-you-go cluster based on your business requirements. If you use the pay-as-you-go method, you are charged on an hourly basis.").
