ALIYUN::CEN::CenRouteService is used to access an Alibaba Cloud service.

For more information about services, see [ResolveAndRouteServiceInCen](/help/en/cen/developer-reference/api-cbn-2017-09-12-resolveandrouteserviceincen).

## Syntax

```
{
  "Type": "ALIYUN::CEN::CenRouteService",
  "Properties": {
    "Description": String,
    "HostRegionId": String,
    "CenId": String,
    "AccessRegionId": String,
    "Host": String,
    "HostVpcId": String, 
    "ConflictIgnore": Boolean
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AccessRegionId

String

Yes

No

The access region ID of the service.

You can call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-cbn-2017-09-12-describechildinstanceregions) operation to query the most recent region list.

CenId

String

Yes

No

The ID of the Cloud Enterprise Network (CEN) instance.

You can call the [CreateCen](/help/en/cen/developer-reference/api-cbn-2017-09-12-createcen) operation to query the ID of the CEN instance.

Host

String

Yes

No

The IP address or CIDR block of the service.

In most cases, multiple IP addresses or CIDR blocks are used for a cloud service. We recommend that you specify Host in ALIYUN::CEN::CenRouteService in multiple requests to add all IP addresses or CIDR blocks of the service.

HostRegionId

String

Yes

No

The region ID of the service.

None.

HostVpcId

String

Yes

No

The ID of the virtual private cloud (VPC) that is associated with the service.

None.

ConflictIgnore

Boolean

No

No

Specifies whether to ignore a conflict that occurs when you access the service from the CEN instance.

Valid values:

-   true
    
-   false (default)
    

Description

String

No

No

The description of the service.

The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, hyphens (-), periods (.), and underscores (\_).

## Return values

Fn::GetAtt

Id: the ID of the service. The ID is in the `{CenId}/{HostRegionId}/{Host}/{AccessRegionId}` format.

## Examples

**Note**

You must change the masked values of properties in the template based on your business requirements.

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  CenId:
    Type: String
    Description: The ID of the Cloud Enterprise Network (CEN) instance.
    Default: cen-2****
  HostVpcId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
Resources:
  CenRouteService:
    Type: ALIYUN::CEN::CenRouteService
    Properties:
      HostRegionId: cn-beijing
      CenId:
        Ref: CenId
      AccessRegionId: cn-hangzhou
      Host: 100.118.28.0/24
      HostVpcId:
        Ref: HostVpcId
Outputs:
  Id:
    Description: The ID of the cloud service. It is formatted to {CenId}/{HostRegionId}/{Host}/{AccessRegionId}
    Value:
      Fn::GetAtt:
        - CenRouteService
        - Id
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "CenId": {
      "Type": "String",
      "Description": "The ID of the Cloud Enterprise Network (CEN) instance.",
      "Default": "cen-2****"
    },
    "HostVpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    }
  },
  "Resources": {
    "CenRouteService": {
      "Type": "ALIYUN::CEN::CenRouteService",
      "Properties": {
        "HostRegionId": "cn-beijing",
        "CenId": {
          "Ref": "CenId"
        },
        "AccessRegionId": "cn-hangzhou",
        "Host": "100.118.28.0/24",
        "HostVpcId": {
          "Ref": "HostVpcId"
        }
      }
    }
  },
  "Outputs": {
    "Id": {
      "Description": "The ID of the cloud service. It is formatted to {CenId}/{HostRegionId}/{Host}/{AccessRegionId}",
      "Value": {
        "Fn::GetAtt": [
          "CenRouteService",
          "Id"
        ]
      }
    }
  }
}
```
