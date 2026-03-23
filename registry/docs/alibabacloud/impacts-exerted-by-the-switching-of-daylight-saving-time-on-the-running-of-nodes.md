This topic describes the impacts on instance generation for nodes and the scheduling time of the instances when daylight saving time begins or ends. If daylight saving time is used in the region where your workspace resides, you can view this topic to understand the policies for running nodes when daylight saving time begins or ends.

## Background information

In DataWorks, nodes can be run as expected on the day when daylight saving time begins or ends. For example, you create nodes that are scheduled to run by hour in the region of which the time zone is UTC-8. Daylight saving time is used in the region. The following descriptions show the policies for running nodes on the day when daylight saving time begins or ends:

-   [Daylight saving time begins](#section-1ir-wh4-vga):![Daylight saving time begins](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4368842861/p628648.png)
    
    -   **Number of instances**: Daylight saving time begins at `02:00`, and the time of the clock is set forward to `03:00`. For a node that is scheduled to run by hour, no instance is generated for the node at `02:00` on the day when daylight saving time begins, and 23 instances are generated on that day.
        
    -   **Scheduling time of instances**: A time offset occurs. As a result, the scheduling time of some instances is changed to a point in time that is one hour forward. For example, the scheduling time of the instance that is generated in the fourth scheduling cycle for a node that is scheduled to run by hour is `04:00`. On the day when daylight saving time begins, the scheduling time of the instance changes to `05:00`.
        
    
    **Important**
    
    -   If a node scheduled by day, week, or month is scheduled to run in the time range that is skipped when daylight saving time begins, the node is not run and DataWorks generates [dry-run](/help/en/dataworks/dry-run-instances#section-e96-l29-h2g) instances for the node.
        
    -   Ten minutes before `03:00` is `01:50`.
        
    
-   [Daylight saving time ends](#section-muu-3i0-4im):![Daylight saving time ends](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4368842861/p628649.png)
    
    **Number of instances**: A total number of 24 instances are generated for a node that is scheduled to run by hour. Two instances whose scheduling time is both `02:00` are generated. Only the second instance whose scheduling time is `02:00` is retained.
    
    **Important**
    
    Ten minutes before `02:00` is `02:50`.
    

## Limits

Only nodes in the region where daylight saving time is used are affected when daylight saving time begins or ends.

## Example: Impacts exerted when daylight saving time begins

### Impact 1: Instance generation

-   Scenario 1: Nodes scheduled to run by hour or minute
    
    The following figure shows the [scheduling cycle settings](/help/en/dataworks/user-guide/configure-time-properties-1#task-2119752) for an auto triggered node that is scheduled to run by hour. In this case, one instance is generated for the node each hour, and a total number of 24 instances are generated on one day. On the day when daylight saving time begins, only 23 instances are generated, and no instance is generated at `02:00`.
    
    **Note**
    
    Daylight saving time begins at `02:00`, and the time of the clock is set forward to `03:00`. Therefore, for a node that is scheduled to run by hour, no instance is generated for the node at `02:00` on the day when daylight saving time begins.
    
    ![Scheduling cycle settings](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6250842861/p624637.png)
    
-   Scenario 2: Nodes scheduled to run by day
    
    For a node that is scheduled to run by day, an instance is generated for the node on the day when daylight saving time begins. Whether the instance can be properly run depends on the scheduling time of the node.
    
    -   If the scheduling time of the node is in the time range from `02:00 to 03:00`, DataWorks delays the scheduling time of the node for one hour and generates a **dry-run** instance for the node.
        
    -   If the scheduling time of the node is out of the time range from `02:00 to 03:00`, the instance that is generated for the node can be properly run.
        
    
    The following figure shows the scheduling cycle settings for the node. ![Scheduling cycle settings](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6250842861/p624773.png)
    

### Impact 2: Parameter value replacement

-   Scenario 1: The scheduling time of a node is `03:00`, and a [scheduling parameter](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#concept-2185254) that is in the `$[hh24-1/24]` format is used. In most cases, the value of the scheduling parameter is `02:00`. When daylight saving time begins, the value of the scheduling parameter is `01:00`.
    
-   Scenario 2: The scheduling time of a node is `02:00`, and a scheduling parameter that is in the `$[hh24-1/24]` format is used. In most cases, the value of the scheduling parameter is `01:00`. When daylight saving time begins, the value of the scheduling parameter is `01:00`. If the node is scheduled to run by day, DataWorks generates a **dry-run** instance for the node on the day when daylight saving time begins.
    

## Example: Impacts exerted when daylight saving time ends

### Impact 1: Instance generation

The day when daylight saving time ends actually has 25 hours, including two occurrences of `02:00`. A total number of 24 instances are generated for a node that is scheduled to run by hour. Only the second instance whose scheduling time is `02:00` is retained.

### Impact 2: Replacement of scheduling parameters

The day when daylight saving time ends actually has 25 hours, including two occurrences of `02:00`. A total number of 24 instances are generated for a node that is scheduled to run by hour. Only the second instance whose scheduling time is `02:00` is retained. If the value of a scheduling parameter that is specified for the node is calculated based on the scheduling time, the value of the scheduling parameter may be affected, and a deviation may occur.

-   Scenario 1: The scheduling time of a node is `03:00`, and a scheduling parameter that is in the `$[hh24-2/24]` format is used. In most cases, the value of the scheduling parameter is `01:00`. When daylight saving time ends, the value of the scheduling parameter is `02:00`.
    
-   Scenario 2: The scheduling time of a node is `02:00`, and a scheduling parameter that is in the `$[hh24-1/24]` format is used. In most cases, the value of the scheduling parameter is `01:00`. When daylight saving time ends, the value of the scheduling parameter is `02:00`.
