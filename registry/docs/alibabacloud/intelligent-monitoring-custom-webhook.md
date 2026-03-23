You can configure alert rules in Operation Center. This topic describes the formats of alert messages sent by using a custom webhook.

## **Connectivity test**

```
{
 "message":{
 "content": "DataWorks Workbench Alarm Connectivity Test"
 }
}
```

## **Custom alerts**

### **Message body**

### Alerts for auto triggered instances

```
{
 "message": {
 "title": "DataWorks_Remind",
 "remind_name": "webhookTest",
 "remind_unit": "Task"
 "occur_time": "2021-07-13 16:16:20",
 "remind_type": "uncompleted",
 "task_size": 1,
 "node_id_list": "220167523",
 "node_name_list": "nodeName",
 "node_owner_list": "123123123",
 "remind_founder": "jingyan20182222",
 "number_of_alerts": 3,
 "more_information": "http://..."
 }
} 
```

### Alerts for resource groups

```
{
 "message": {
 "title": "DataWorks_Remind",
 "remind_name": "Alert rule name",
 "remind_unit": "ScheduleResourceGroup",
 "occur_time": "2021-07-13 16:16:20",
 "remind_type": "resGroup use ratio",
 "resource_group_name": "Resource group name",
 "threshold": 99,
 "duration": 30,
 "remind_founder": "jingyan20182222"
 }
}
```

### **Fields**

**Field**

**Description**

**Example**

title

The title of the alert.

DataWorks\_Remind

task\_size

The number of tasks.

1

remind\_name

The name of the alert rule.

webhookTest

occur\_time

The time when the alert was triggered.

2021-07-13 16:16:20

remind\_type

The trigger condition.

Valid values:

-   **completed**
    
-   **uncompleted**
    
-   **error**
    
-   **cycle uncompleted**
    
-   **run over time**
    
-   **exhausted error**
    
-   **resGroup use ratio**
    
-   **the number of waiting task in resGroup**
    

completed

node\_id\_list

The node IDs. Separate multiple IDs with commas (,). A maximum of five node IDs are supported.

220167523

node\_name\_list

The node names. Separate multiple names with commas (,). A maximum of five node names are supported.

nodeName

node\_owner\_list

The node owners. Separate multiple owners with commas (,). A maximum of five node owners are supported.

123123

remind\_founder

The creator of the alert rule.

jingyan20182222

remind\_unit

The monitoring granularity of the alert rule.

Valid values:

-   **Task**
    
-   **Baseline**
    
-   **Project**
    
-   **BizProcess**
    
-   **ScheduleResourceGroup**
    
-   **DiResourceGroup**
    

Task

number\_of\_alerts

The nth trigger of the alert.

3

more\_information

The URL of the desired auto triggered instance in Operation Center.

http://XXXX

threshold

The threshold. This parameter is available only for resource groups.

-   If the **remind\_type** parameter is set to `resGroup use ratio`, this parameter specifies the upper limit of the resource group usage.
    
-   If the **remind\_type** parameter is set to `the number of waiting task in resGroup`, this parameter specifies the upper limit of instances that are waiting for resources.
    

99

duration

The duration. Unit: minutes. This parameter is available only for resource groups.

30

## **Baseline alerts**

### **Message body**

```
{
 "message": {
 "cycle_number": 1,
 "occur_time": "2024-07-31 11:29:43",
 "baseline_owners": "dp3base",
 "baseline_name": "Baseline test",
 "key_instance": 10590018690,
 "sla_time": "2024-07-30 17:30:00",
 "buffer": -1081,
 "title": "DataWorks_Baseline_Alert",
 "status": "overSla"
 }
}
```

### **Fields**

**Field**

**Description**

**Example**

cycle\_number

The ID of the cycle of the baseline instance. The ID of a day-level cycle is `1`.

1

occur\_time

The time when the alert was triggered.

2024-07-31 11:29:43

baseline\_owners

The baseline owner.

dp3base

baseline\_name

The name of the baseline.

baseline\_test

key\_instance

The current key instance.

10590018690

sla\_time

The committed completion time.

2024-07-30 17:30:00

buffer

The alert margin threshold for a baseline. Unit: minutes.

\-1081

title

The title that specifies the alert type.

DataWorks\_Baseline\_Alert

status

The status of the baseline. Valid values:

-   **dangerous**
    
-   **overSla**
    

overSla

## **Event alerts**

### **Message body**

```
{
 "message": {
 "task_name": "Name of a failed task",
 "event_type": "ERROR",
 "task_owner_name": "dp3base",
 "occur_time": "2024-07-30 23:06:06",
 "event_name": "20240729-10000213793(Failed hour-level baseline)(24)-[project:lwt_test_hongkong]Error",
 "title": "DataWorks_Event_Remind"
 }
}
```

### **Fields**

**Field**

**Description**

**Example**

task\_name

The name of the abnormal task.

failed\_task

event\_type

The type of the event. Valid values:

-   **ERROR**
    
-   **SLOW**
    

ERROR

task\_owner\_name

The owner of the task.

dp3base

occur\_time

The time when the alert was triggered.

2024-07-30 23:06:06

event\_name

The name of the event. Format:

`Data timestamp-Node ID(node name)(cycle ID)-[project:Workspace name]`

`20240729-10000213793(failed_task)(1)-[project:lwt_test_hongkong]Error`

title

The title that specifies the alert type.

DataWorks\_Event\_Remind
