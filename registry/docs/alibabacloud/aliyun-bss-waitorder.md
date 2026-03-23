ALIYUN::BSS::WaitOrder is used to wait for orders to be completed.

## Syntax

```
{
  "Type": "ALIYUN::BSS::WaitOrder",
  "Properties": {
    "OrderIds": List,
    "CancelOnDelete": Boolean,
    "WaitForOrderProduced": Boolean
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

OrderIds

List

Yes

No

The list of order IDs.

The list must include at least one order ID.

CancelOnDelete

Boolean

No

No

Specifies whether to cancel the order of a resource when the resource is deleted. Default value: true.

Paid orders of the resource are ignored.

You cannot cancel orders by using a Resource Access Management (RAM) user.

WaitForOrderProduced

Boolean

No

No

Specifies whether to wait until all the Resource Orchestration Service (ROS) resources that are related to the order are produced. If you set this property to true, WaitOrder waits until all the ROS resources related to the order are produced after the order is paid. Default value: false.

The supported resources include ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::SLB::LoadBalancer, and ALIYUN::VPC::EIP.

## Return values

**Fn::GetAtt**

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  Queue:
    Type: ALIYUN::BSS::WaitOrder
    Properties:
      OrderIds:
        - <OrderId1>
        - <OrderId2>
      WaitForOrderProduced: 'true'
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "Queue": {
      "Type": "ALIYUN::BSS::WaitOrder",
      "Properties": {
        "OrderIds": ['<OrderId1>', '<OrderId2>'],
        "WaitForOrderProduced": "true"
      }
    }
  }
}
```
