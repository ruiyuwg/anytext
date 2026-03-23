This topic describes the types of Elastic Block Storage (EBS) events that CloudMonitor or Cloud Config monitors and can be published to EventBridge.

## Event types

The following table describes the types of EBS events that can be published to EventBridge.

**Event type**

**Value of the type** **parameter**

[A disk requires to be expanded because the bits per second (BPS) of the disk reaches the upper limit specified for the disk](#bbab90a055rb2)

ebs:Disk:DiskBPSExceedDiskMaxLimit

[A disk requires to be expanded because the BPS of the disk reaches the upper limit specified for the instance](#a683099055gw2)

ebs:Disk:DiskBPSExceedInstanceMaxLimit

[An I/O hang occurs on a disk](#e877f7d055x1h)

ebs:Disk:DiskIOHang

[A disk requires to be expanded because the input/output operations per second (IOPS) of the disk reaches the upper limit specified for the disk](#3ebb1b405574u)

ebs:Disk:DiskIOPSExceedDiskMaxLimit

[A disk requires to be expanded because the IOPS of the disk reaches the upper limit specified for the instance](#ed244e90555oq)

ebs:Disk:DiskIOPSExceedInstanceMaxLimit

[Slow I/O occurs on a disk](#78a5c670558op)

ebs:Disk:DiskSlowIOTriggerred

[The BPS of an instance reaches the upper limit](#d0997de0556kr)

ebs:Disk:InstanceBPSExceedInstanceMaxLimit

[The IOPS of an instance reaches the upper limit](#014c1dc0552is)

ebs:Disk:InstanceIOPSExceedInstanceMaxLimit

[The I/O behavior of a disk is not 4K-aligned](#1122c13bbcpa3)

ebs:Disk:DiskIONo4kAligned

[Snapshot protection is detected for a disk](#128e1d5bc6xww)

ebs:Disk:NoSnapshot

[The performance of a disk reaches the upper limit specified for the instance](#9a9e4256fesru)

ebs:Disk:DiskSpecNotMatchedWithInstance

An operation is performed on a resource

ebs:ActionTrail:AliyunServiceEvent

An API operation is called

ebs:ActionTrail:ApiCall

An operation is performed in the console

ebs:ActionTrail:ConsoleOperation

For more information about the parameters defined in the CloudEvents specification, see [Overview](/help/en/eventbridge/user-guide/event-overview#concept-1938024).

## **A disk requires to be expanded because the BPS of the disk reaches the upper limit specified for the disk**

The following example shows the event that EventBridge receives when a disk requires to be expanded because the BPS of the disk reaches the upper limit specified for the disk:

```
{
    "id": "45ef4dewdwe1-7c35-447a-bd93-fab****",
    "source": "acs.ebs",
    "specversion": "1.0",
    "subject": "acs.ebs:cn-hangzhou:123456789098****:215672",
    "time": "2020-11-19T21:04:41+08:00",
    "type": "ebs:Disk:DiskBPSExceedDiskMaxLimit",
    "aliyunaccountid": "123456789098****",
    "aliyunpublishtime": "2020-11-19T21:04:42Z",
    "aliyuneventbusname": "default",
    "aliyunregionid": "cn-hangzhou",
    "aliyunpublishaddr": "172.25.XX.XX",
    "data": {
        "eventId": "e-2zec86*******",
        "resourceId": "d-2zef8thfnbx*****",
        "eventLevel": "INFO",
        "eventCategory": "Disk",
        "eventStatus": "WillExecute",
        "eventName": "DiskBPSExceedDiskMaxLimit",
        "startTime": 1694507354000,
        "extraAttributes": {
            "EcsInstanceId": "i-bp1dj*****",
            "TotalMinutes": 1390
        },
        "resourceType": "Disk"
    }
}
```

The following table describes the parameters contained in data.

**Parameter**

**Type**

**Example**

**Description**

eventId

String

e-2zec86\*\*\*\*

The event ID.

resourceId

String

d-2zef8thfnbx\*\*\*\*

The resource ID.

**eventCategory**

String

Disk

The event category.

eventLevel

String

INFO

The event level.

eventName

String

DiskBPSExceedDiskMaxLimit

The event name.

extraAttributes

String

The additional information.

EcsInstanceId

String

i-bp1dj\*\*\*\*

The ID of the Elastic Compute Service (ECS) instance to which the disk is attached.

resourceType

String

Disk

The resource type.

**eventStatus**

String

WillExecute

The event status.

**startTime**

Number

1694507354000

The time when the event started.

**endTime**

Number

1694507354001

The time when the event ended.

**TotalMinutes**

Int

1390

The duration of the event.

## **A disk requires to be expanded because the BPS of the disk reaches the upper limit specified for the instance**

The following example shows the event that EventBridge receives when a disk requires to be expanded because the BPS of the disk reaches the upper limit specified for the instance:

```
{
    "id": "45ef4dewdwe1-7c35-447a-bd93-fab****",
    "source": "acs.ebs",
    "specversion": "1.0",
    "subject": "acs.ebs:cn-hangzhou:123456789098****:215672",
    "time": "2020-11-19T21:04:41+08:00",
    "type": "ebs:Disk:DiskBPSExceedInstanceMaxLimit",
    "aliyunaccountid": "123456789098****",
    "aliyunpublishtime": "2020-11-19T21:04:42Z",
    "aliyuneventbusname": "default",
    "aliyunregionid": "cn-hangzhou",
    "aliyunpublishaddr": "172.25.XX.XX",
    "data": {
        "eventId": "e-2zec86*******",
        "resourceId": "d-2zef8thfnbx*****",
        "eventLevel": "INFO",
        "eventCategory": "Disk",
        "eventStatus": "WillExecute",
        "eventName": "DiskBPSExceedInstanceMaxLimit",
        "startTime": 1694507354000,
        "extraAttributes": {
            "EcsInstanceId": "i-bp1dj*****",
            "TotalMinutes": 1390
        },
        "resourceType": "Disk"
    }
}
```

For information about the parameters in data, see the [field description table](#table-19w-zk2-wa6).

## **An I/O hang occurs on a disk**

The following example shows the event that EventBridge receives when an I/O hang occurs on a disk:

```
{
    "id": "45ef4dewdwe1-7c35-447a-bd93-fab****",
    "source": "acs.ebs",
    "specversion": "1.0",
    "subject": "acs.ebs:cn-hangzhou:123456789098****:215672",
    "time": "2020-11-19T21:04:41+08:00",
    "type": "ebs:Disk:DiskIOHang",
    "aliyunaccountid": "123456789098****",
    "aliyunpublishtime": "2020-11-19T21:04:42Z",
    "aliyuneventbusname": "default",
    "aliyunregionid": "cn-hangzhou",
    "aliyunpublishaddr": "172.25.XX.XX",
    "data": {
        "eventId": "e-2zec86*******",
        "resourceId": "d-2zef8thfnbx*****",
        "eventLevel": "INFO",
        "eventCategory": "Disk",
        "eventStatus": "WillExecute",
        "eventName": "DiskIOHang",
        "startTime": 1694507354000,
        "extraAttributes": {
            "EcsInstanceId": "i-bp1dj*****"
        },
        "resourceType": "Disk"
    }
}
```

For information about the parameters in data, see the [field description table](#table-19w-zk2-wa6).

## **A disk requires to be expanded because the IOPS of the disk reaches the upper limit specified for the disk**

The following example shows the event that EventBridge receives when a disk requires to be expanded because the IOPS of the disk reaches the upper limit specified for the disk:

```
{
    "id": "45ef4dewdwe1-7c35-447a-bd93-fab****",
    "source": "acs.ebs",
    "specversion": "1.0",
    "subject": "acs.ebs:cn-hangzhou:123456789098****:215672",
    "time": "2020-11-19T21:04:41+08:00",
    "type": "ebs:Disk:DiskIOPSExceedDiskMaxLimit",
    "aliyunaccountid": "123456789098****",
    "aliyunpublishtime": "2020-11-19T21:04:42Z",
    "aliyuneventbusname": "default",
    "aliyunregionid": "cn-hangzhou",
    "aliyunpublishaddr": "172.25.XX.XX",
    "data": {
        "eventId": "e-2zec86*******",
        "resourceId": "d-2zef8thfnbx*****",
        "eventLevel": "INFO",
        "eventCategory": "Disk",
        "eventStatus": "WillExecute",
        "eventName": "DiskIOPSExceedDiskMaxLimit",
        "startTime": 1694507354000,
        "extraAttributes": {
            "EcsInstanceId": "i-bp1dj*****",
            "TotalMinutes": 1390
        },
        "resourceType": "Disk"
    }
}
```

For information about the parameters in data, see the [field description table](#table-19w-zk2-wa6).

## **A disk requires to be expanded because the IOPS of the disk reaches the upper limit specified for the instance**

The following example shows the event that EventBridge receives when a disk requires to be expanded because the IOPS of the disk reaches the upper limit specified for the instance:

```
{
    "id": "45ef4dewdwe1-7c35-447a-bd93-fab****",
    "source": "acs.ebs",
    "specversion": "1.0",
    "subject": "acs.ebs:cn-hangzhou:123456789098****:215672",
    "time": "2020-11-19T21:04:41+08:00",
    "type": "ebs:Disk:DiskIOPSExceedInstanceMaxLimit",
    "aliyunaccountid": "123456789098****",
    "aliyunpublishtime": "2020-11-19T21:04:42Z",
    "aliyuneventbusname": "default",
    "aliyunregionid": "cn-hangzhou",
    "aliyunpublishaddr": "172.25.XX.XX",
    "data": {
        "eventId": "e-2zec86*******",
        "resourceId": "d-2zef8thfnbx*****",
        "eventLevel": "INFO",
        "eventCategory": "Disk",
        "eventStatus": "WillExecute",
        "eventName": "DiskIOPSExceedInstanceMaxLimit",
        "startTime": 1694507354000,
        "extraAttributes": {
            "EcsInstanceId": "i-bp1dj*****",
            "TotalMinutes": 1390
        },
        "resourceType": "Disk"
    }
}
```

For information about the parameters in data, see the [field description table](#table-19w-zk2-wa6).

## **Slow I/O occurs on a disk**

The following example shows the event that EventBridge receives when slow I/O occurs on a disk:

```
{
    "id": "45ef4dewdwe1-7c35-447a-bd93-fab****",
    "source": "acs.ebs",
    "specversion": "1.0",
    "subject": "acs.ebs:cn-hangzhou:123456789098****:215672",
    "time": "2020-11-19T21:04:41+08:00",
    "type": "ebs:Disk:DiskSlowIOTriggerred",
    "aliyunaccountid": "123456789098****",
    "aliyunpublishtime": "2020-11-19T21:04:42Z",
    "aliyuneventbusname": "default",
    "aliyunregionid": "cn-hangzhou",
    "aliyunpublishaddr": "172.25.XX.XX",
    "data": {
        "eventId": "e-2zec86*******",
        "resourceId": "d-2zef8thfnbx*****",
        "eventLevel": "INFO",
        "eventCategory": "Disk",
        "eventStatus": "WillExecute",
        "eventName": "DiskSlowIOTriggerred",
        "startTime": 1694507354000,
        "extraAttributes": {
            "EcsInstanceId": "i-bp1dj*****"
        },
        "resourceType": "Disk"
    }
}
```

For information about the parameters in data, see the [field description table](#table-19w-zk2-wa6).

## **The BPS of an instance reaches the upper limit**

The following example shows the event that EventBridge receives when the BPS of an instance reaches the upper limit:

```
{
    "id": "e-2zec86*******",
    "source": "acs.ebs",
    "specversion": "1.0",
    "subject": "acs.ebs:cn-hangzhou:123456789098****:215672",
    "time": "2020-11-19T21:04:41+08:00",
    "type": "ebs:Disk:InstanceBPSExceedInstanceMaxLimit",
    "aliyunaccountid": "123456789098****",
    "aliyunpublishtime": "2020-11-19T21:04:42Z",
    "aliyuneventbusname": "default",
    "aliyunregionid": "cn-hangzhou",
    "aliyunpublishaddr": "172.25.XX.XX",
    "data": {
        "eventId": "e-2zec86*******",
        "resourceId": "d-2zef8thfnbx*****",
        "eventLevel": "INFO",
        "eventCategory": "Disk",
        "eventStatus": "WillExecute",
        "eventName": "InstanceBPSExceedInstanceMaxLimit",
        "startTime": 1694507354000,
        "extraAttributes": {
            "EcsInstanceId": "i-bp1dj*****",
            "TotalMinutes": 1390
        },
        "resourceType": "Disk"
    }
}
```

For information about the parameters in data, see the [field description table](#table-19w-zk2-wa6).

## **The IOPS of an instance reaches the upper limit**

The following example shows the event that EventBridge receives when the IOPS of an instance reaches the upper limit:

```
{
    "id": "e-2zec86*******",
    "source": "acs.ebs",
    "specversion": "1.0",
    "subject": "acs.ebs:cn-hangzhou:123456789098****:215672",
    "time": "2020-11-19T21:04:41+08:00",
    "type": "ebs:Disk:InstanceIOPSExceedInstanceMaxLimit",
    "aliyunaccountid": "123456789098****",
    "aliyunpublishtime": "2020-11-19T21:04:42Z",
    "aliyuneventbusname": "default",
    "aliyunregionid": "cn-hangzhou",
    "aliyunpublishaddr": "172.25.XX.XX",
    "data": {
        "eventId": "e-2zec86*******",
        "resourceId": "d-2zef8thfnbx*****",
        "eventLevel": "INFO",
        "eventCategory": "Disk",
        "eventStatus": "WillExecute",
        "eventName": "InstanceIOPSExceedInstanceMaxLimit",
        "startTime": 1694507354000,
        "extraAttributes": {
            "EcsInstanceId": "i-bp1dj*****",
            "TotalMinutes": 1390
        },
        "resourceType": "Disk"
    }
}
```

For information about the parameters in data, see the [field description table](#table-19w-zk2-wa6).

## **The I/O behavior of a disk is not 4K-aligned**

If the I/O behavior of a disk is not 4K-aligned, the performance of the disk may be affected. The following example shows the event that EventBridge receives when the I/O behavior of a disk is not 4K-aligned:

```
{
    "id": "e-2zec86*******",
    "source": "acs.ebs",
    "specversion": "1.0",
    "subject": "acs.ebs:cn-hangzhou:123456789098****:215672",
    "time": "2020-11-19T21:04:41+08:00",
    "type": "ebs:Disk:DiskIONo4kAligned",
    "aliyunaccountid": "123456789098****",
    "aliyunpublishtime": "2020-11-19T21:04:42Z",
    "aliyuneventbusname": "default",
    "aliyunregionid": "cn-hangzhou",
    "aliyunpublishaddr": "172.25.XX.XX",
    "data": {
        "eventId": "e-2zec86*******",
        "resourceId": "d-2zef8thfnbx*****",
        "eventLevel": "INFO",
        "eventCategory": "Disk",
        "eventStatus": "WillExecute",
        "eventName": "DiskIONo4kAligned",
        "startTime": 1694507354000,
        "extraAttributes": {
            "EcsInstanceId": "i-bp1dj*****"
        },
        "resourceType": "Disk"
    }
```

For information about the parameters in data, see the [field description table](#table-19w-zk2-wa6).

## **Snapshot protection is detected for a disk**

The following example shows the event that EventBridge receives when snapshot protection is detected for a disk:

```
{
    "id": "45ef4dewdwe1-7c35-447a-bd93-fab****",
    "source": "acs.ebs",
    "specversion": "1.0",
    "subject": "acs.ebs:cn-hangzhou:123456789098****:215672",
    "time": "2020-11-19T21:04:41+08:00",
    "type": "ebs:Disk:NoSnapshot",
    "aliyunaccountid": "123456789098****",
    "aliyunpublishtime": "2020-11-19T21:04:42Z",
    "aliyuneventbusname": "default",
    "aliyunregionid": "cn-hangzhou",
    "aliyunpublishaddr": "172.25.XX.XX",
    "data": {
        "eventId": "e-2zec86*******",
        "resourceId": "d-2zef8thfnbx*****",
        "eventLevel": "INFO",
        "eventCategory": "Disk",
        "eventStatus": "WillExecute",
        "eventName": "NoSnapshot",
        "startTime": 1694507354000,
        "extraAttributes": {
            "EcsInstanceId": "i-bp1dj*****"
        },
        "resourceType": "Disk"
    }
}
```

## **The performance of a disk reaches the upper limit specified for the instance**

The following example shows the event that EventBridge receives when the performance of a disk reaches the upper limit specified for the instance:

```
{
    "id": "45ef4dewdwe1-7c35-447a-bd93-fab****",
    "source": "acs.ebs",
    "specversion": "1.0",
    "subject": "acs.ebs:cn-hangzhou:123456789098****:215672",
    "time": "2020-11-19T21:04:41+08:00",
    "type": "ebs:Disk:DiskSpecNotMatchedWithInstance",
    "aliyunaccountid": "123456789098****",
    "aliyunpublishtime": "2020-11-19T21:04:42Z",
    "aliyuneventbusname": "default",
    "aliyunregionid": "cn-hangzhou",
    "aliyunpublishaddr": "172.25.XX.XX",
    "data": {
        "eventId": "e-2zec86*******",
        "resourceId": "d-2zef8thfnbx*****",
        "eventLevel": "INFO",
        "eventCategory": "Disk",
        "eventStatus": "WillExecute",
        "eventName": "DiskSpecNotMatchedWithInstance",
        "startTime": 1694507354000,
        "extraAttributes": {
            "EcsInstanceId": "i-bp1dj*****"
        },
        "resourceType": "Disk"
    }
}
```
