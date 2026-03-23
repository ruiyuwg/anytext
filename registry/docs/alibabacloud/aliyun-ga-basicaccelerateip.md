ALIYUN::GA::BasicAccelerateIp is used to create an accelerated IP address for a basic Global Accelerator (GA) instance.

## Syntax

```
{
  "Type": "ALIYUN::GA::BasicAccelerateIp",
  "Properties": {
    "AcceleratorId": String,
    "IpSetId": String
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

AcceleratorId

String

Yes

No

The ID of the basic GA instance.

None.

IpSetId

String

Yes

No

The ID of the acceleration region to which the basic GA instance belongs.

You can call the [GetBasicAccelerator](/help/en/ga/developer-reference/api-ga-2019-11-20-getbasicaccelerator) operation to query the ID of the acceleration region.

## Return values

Fn::GetAtt

AccelerateIpId: the ID of the accelerated IP address of the basic GA instance.

## Examples

**Note**

You need to change the properties, such as IpSetId and AcceleratorId, whose values are masked in the following template based on your actual business scenarios.

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ExtensionResource:
    Type: ALIYUN::GA::BasicAccelerateIp
    Properties:
      IpSetId: ips-bp11r5jb8ogp122xl****
      AcceleratorId: ga-bp17frjjh0udz4qz****
Outputs:
  AccelerateIpId:
    Description: The ID of the accelerated IP address.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AccelerateIpId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GA::BasicAccelerateIp",
      "Properties": {
        "IpSetId": "ips-bp11r5jb8ogp122xl****",
        "AcceleratorId": "ga-bp17frjjh0udz4qz****"
      }
    }
  },
  "Outputs": {
    "AccelerateIpId": {
      "Description": "The ID of the accelerated IP address.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AccelerateIpId"
        ]
      }
    }
  }
}
                        
```
