DataWorks allows you to configure scheduling dependencies between tasks that are scheduled by [minute](/help/en/dataworks/user-guide/schedule-a-node-by-minute#task-2119754), [hour](/help/en/dataworks/user-guide/schedule-a-node-by-hour#task-2119755), [day](/help/en/dataworks/user-guide/schedule-a-node-by-day#task-2119756), [week](/help/en/dataworks/user-guide/schedule-a-node-by-week#task-2119757), [month](/help/en/dataworks/user-guide/schedule-a-node-by-month#task-2119758), or [year](/help/en/dataworks/user-guide/schedule-a-node-by-year#task-2119759). The number of scheduling cycles of a task varies based on the scheduling frequency of the task. An instance is generated for a task in each scheduling cycle. This topic describes the dependencies between auto triggered task instances that are generated for ancestor and descendant tasks with different scheduling frequencies.

## Background information

-   In DataWorks, an auto triggered task generates instances based on the scheduling frequency and the number of scheduling cycles of the task. For example, a task scheduled by hour generates the same number of instances as the number of scheduling cycles of the task every day. The task is run as an instance. In essence, dependencies between auto triggered tasks are dependencies between instances that are generated for the tasks. The number of instances generated for ancestor and descendant auto triggered tasks and dependencies between the instances vary based on the scheduling frequencies of the ancestor and descendant tasks.
    
-   DataWorks supports various scheduling dependency scenarios. You can configure same-cycle or previous-cycle scheduling dependencies between tasks in a specific scenario. For more information about same-cycle scheduling dependencies between tasks and previous-cycle scheduling dependencies between tasks, see [Configure same-cycle scheduling dependencies](/help/en/dataworks/user-guide/configure-same-cycle-scheduling-dependencies#concept-gbk-lxx-p2b) and [Configure cross-cycle scheduling dependencies](/help/en/dataworks/user-guide/configure-cross-cycle-scheduling-dependencies#concept-2118352).
    

Before you configure scheduling dependencies, you must take note of the items that are described in the following table.

**No.**

**Description**

**References**

1

DataWorks supports the following scheduling frequencies: minute, hour, day, week, month, and year. If the scheduling frequencies of ancestor and descendant tasks are different, DataWorks allows you to configure scheduling dependencies between the ancestor and descendant tasks based on the principle of scheduling time proximity.

**Note**

-   If a task scheduled by hour depends on another task scheduled by hour, and the scheduling cycles of the tasks are the same on the current day, the dependencies between the tasks do not conform to the principle of scheduling time proximity. This indicates that the scheduling dependencies between the tasks are irrelevant to the scheduling time of the tasks.
    
-   By default, if a task scheduled by day depends on a task scheduled by hour or minute, the instance generated for the task scheduled by day depends on all instances generated for the task scheduled by hour or minute on the current day. This indicates that after data of all instances generated for the task scheduled by hour or minute on the current day is generated, the task scheduled by day starts to cleanse the generated data on the current day.
    

[Principle of scheduling time proximity for scheduling dependencies](#section-oak-8w0-mq8)

2

After you configure scheduling dependencies between tasks in DataWorks, the dependencies between data of the tasks are established. Regardless of the scheduling time of a task, the task meets the conditions to run only after all its ancestor tasks finish running.

[Impacts of dependencies between tasks on the running of the tasks](#section-h93-893-h54)

3

You can understand the principle of scheduling time proximity for scheduling dependencies based on sample scenarios.

[Complex dependency scenarios](#section-85m-jv4-1is):

-   Dependencies for tasks scheduled by day
    
-   Dependencies for tasks scheduled by hour
    
-   Dependencies for tasks scheduled by minute
    
-   Dependencies on tasks scheduled by week, month, or year
    

## Principle of scheduling time proximity for scheduling dependencies

In DataWorks, an instance is generated for an auto triggered task each time the task is scheduled to run. Therefore, multiple instances are generated. A descendant instance depends on an ancestor instance. Therefore, the ancestor instance must be generated before the scheduling time of the descendant instance arrives.

In most cases, if you do not specify an instance on which the current instance depends, the dependencies for the current instance conform to the principle of scheduling time proximity. This indicates that the current instance depends on the instance whose scheduling time is the closest to but not later than that of the current instance and that is not an ancestor instance of other instances. The following table describes the dependency principles in different scenarios.

**Note**

-   If the scheduling time of a task is earlier than that of its ancestor task, the task is not run at the scheduling time. The task can be scheduled to run only after the ancestor task finishes running.
    
-   Based on the principle of scheduling time proximity, if the ancestor task of a task does not have an instance whose scheduling time is earlier than that of the first instance that is generated for the task on the current day, the first instance of the task depends on the first instance that is generated for the ancestor task on the current day by default.
    

**Scenario**

**Description**

**Diagram**

**Dependency scenarios for tasks scheduled by hour and tasks scheduled by minute**

**Dependencies between tasks are relevant to the scheduling time of the instances generated for the tasks.**

-   **Default scenario**: The dependencies for the current instance conform to the principle of scheduling time proximity. This indicates that DataWorks allows the current instance to depend on an instance **whose scheduling time is earlier than or consistent with that of the current instance** and that is not an ancestor instance of other instances.
    
    **Note**
    
    If the number of instances generated for a task is greater than that for its descendant task, a descendant instance may depend on multiple ancestor instances.
    
    For more information, see the diagrams for the dependencies between a task scheduled by hour and a task scheduled by minute for both of which the self-dependency is not configured.
    
-   **Special scenario**: If the self-dependency is configured for both the task scheduled by hour and the task scheduled by minute, the current descendant instance depends on the ancestor instance **whose scheduling time is earlier than or consistent with that of the current descendant instance**. For more information about how to configure the self-dependency, see [Dependency on the instance generated for the current node in the previous cycle](/help/en/dataworks/user-guide/configure-cross-cycle-scheduling-dependencies#section-eve-ofl-iul).
    
    **Note**
    
    For more information, see the diagrams for the dependencies between a task scheduled by hour and a task scheduled by minute for both of which the self-dependency is configured.
    

The following diagrams show scheduling dependencies between a task scheduled by hour and a task scheduled by minute in various scenarios.![小时、分钟任务互相依赖](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1817190761/p521401.png)

**Dependencies between tasks are irrelevant to the scheduling time of the instances generated for the tasks.**

In the scenario where a task scheduled by hour depends on another task scheduled by hour or a task scheduled by minute depends on another task scheduled by minute, one-to-one mappings are established between the ancestor and descendant instances if the numbers of the scheduling cycles (instances generated on the current day) for both the ancestor and descendant tasks are the same.

**Scenario where a task scheduled by day depends on a task scheduled by hour or minute**

-   **Default scenario**: By default, if a task scheduled by day depends on a task scheduled by hour or minute, the instance generated for the task scheduled by day depends on all instances generated for the task scheduled by hour or minute on the current day. This indicates that after data of all instances generated for the task scheduled by hour or minute on the current day is generated, the task scheduled by day starts to cleanse the generated data on the current day.
    
-   **Other scenarios**: If you want the instance generated for a task scheduled by day to depend on the instance that is generated for a task scheduled by hour or minute and whose scheduling time is the closest to that of the task scheduled by day, you can configure the self-dependency for the task scheduled by hour or minute. After the self-dependency is configured, the instance generated for the task scheduled by day starts to run after the instance generated for the task scheduled by hour or minute finishes running. For more information about how to configure the self-dependency, see [Dependency on the instance generated for the current node in the previous cycle](/help/en/dataworks/user-guide/configure-cross-cycle-scheduling-dependencies#section-eve-ofl-iul).
    

![天任务依赖当天小时任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1817190761/p523968.png)

For more information about the dependencies and running situations of tasks in various dependency scenarios, see [Appendix: Complex dependency scenarios](#section-85m-jv4-1is).

## Impacts of dependencies between tasks on the running of the tasks

After you configure dependencies between tasks, the descendant task cannot start to run even at the scheduling time of the descendant task if the ancestor task is not in the Successful state.

For example, Task B scheduled by hour depends on Task A scheduled by day.

-   Task A: The scheduling time is `07:00`.
    
-   Task B: The scheduling time is `00:00`, `08:00`, and `16:00`.
    

If Task A does not finish running, Task B is not scheduled to run when the scheduling time `00:00` of Task B arrives. The earliest time at which Task B is actually run is `07:00`.![依赖关系对任务执行的影响](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1817190761/p518120.png)

## Appendix: Complex dependency scenarios

The following tables describe the dependencies and running situations of tasks with different scheduling frequencies in various dependency scenarios.

**Note**

-   If the scheduling time of a task is earlier than that of its ancestor task, the task is not run at the scheduling time. The task can be scheduled to run only after the ancestor task finishes running.
    
-   Based on the principle of scheduling time proximity, if the ancestor task of a task does not have an instance whose scheduling time is earlier than that of the first instance that is generated for the task on the current day, the first instance of the task depends on the first instance that is generated for the ancestor task on the current day by default.
    

### Dependencies for tasks scheduled by hour

**Dependency scenario**

**Description**

**Diagram**

**Scenario where a task scheduled by hour depends on another task scheduled by hour**

-   **Number of scheduling cycles (instances) of the ancestor task = Number of scheduling cycles (instances) of the descendant task**
    
    One-to-one mappings are established between the instances generated for the ancestor task and the instances generated for the descendant task on the current day. This indicates that the first descendant instance depends on the first ancestor instance, the second descendant instance depends on the second ancestor instance, and subsequent descendant instances depend on subsequent ancestor instances.
    
-   **Number of scheduling cycles (instances) of the ancestor task ≠ Number of scheduling cycles (instances) of the descendant task**
    
    Dependencies between the instances generated for the ancestor task and the instances generated for the descendant task on the current day conform to the principle of scheduling time proximity. A descendant instance depends on an ancestor instance whose scheduling time is the closest to but not later than that of the descendant instance.
    
    **Note**
    
    If the number of instances generated for a task is less than that for its descendant task, multiple descendant instances may depend on the same ancestor instance.
    

![小时任务依赖小时任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1817190761/p520840.png)

**Scenario where a task scheduled by hour depends on a task scheduled by day**

-   **The self-dependency is not configured for the task scheduled by hour.**
    
    All instances generated for the task scheduled by hour on the current day depend on the instance generated for the task scheduled by day. After the task scheduled by day finishes running, all instances generated for the task scheduled by hour start to run. In this case, instances that are generated for the task scheduled by hour and whose scheduling time arrives are run in parallel.
    
    **Note**
    
    -   To prevent the instances from being run in parallel, you can configure the self-dependency for the task scheduled by hour. For more information about how to configure the self-dependency, see [Dependency on the instance generated for the current node in the previous cycle](/help/en/dataworks/user-guide/configure-cross-cycle-scheduling-dependencies#section-eve-ofl-iul).
        
    -   The running of the instances that are generated for the task scheduled by hour is independent of one another.
        
    
-   **The self-dependency is configured for the task scheduled by hour.**
    
    -   Only the first instance generated for the task scheduled by hour depends on the task scheduled by day. Each of the rest of instances generated for the task scheduled by hour in the current cycle depends on the instance of the task in the previous cycle.
        
    -   The instance of the task scheduled by hour in the current cycle starts to run only after the task scheduled by day and the instance of the task scheduled by hour in the previous cycle finish running. In this case, even if the scheduling time of the instances generated for the task scheduled by hour arrives, the instances are not run in parallel.
        
    
    **Note**
    
    If you configure the self-dependency for the task scheduled by hour, the first instance generated on the current day may depend on the last instance generated on the previous day. If the last instance generated on the previous day does not finish running, the task scheduled by hour cannot be scheduled on the current day. For more information about how to configure the self-dependency, see [Dependency on the instance generated for the current node in the previous cycle](/help/en/dataworks/user-guide/configure-cross-cycle-scheduling-dependencies#section-eve-ofl-iul).
    

![小时任务依赖天任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1817190761/p521052.png)

**Scenario where a task scheduled by hour depends on a task scheduled by minute**

-   **The self-dependency is not configured for the task scheduled by minute.**
    
    The instance generated in a specific hour for the task scheduled by hour depends on all instances generated for the task scheduled by minute within the same hour.
    
-   **The self-dependency is configured for both the task scheduled by minute and the task scheduled by hour.**
    
    An instance generated in a specific hour for the task scheduled by hour depends on the instance that is generated for the task scheduled by minute and whose scheduling time is the closest to but not later than that of the current instance within the same hour.
    

![小时任务依赖分钟任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1817190761/p521064.png)

### Dependencies for tasks scheduled by day

**Dependency scenario**

**Description**

**Diagram**

**Scenario where a task scheduled by day depends on another task scheduled by day in the same scheduling cycle**

-   **The self-dependency is not configured for the task scheduled by day.**
    
    By default, the instance generated for a task scheduled by day depends on the instance generated for another task scheduled by day in the same scheduling cycle.
    
-   **The self-dependency is configured for the task scheduled by day.**
    
    If a task scheduled by day depends on another task scheduled by day for which the self-dependency is configured, a cross-dependency exists.
    
    **Note**
    
    If you configure the self-dependency for the task scheduled by day, the first instance generated on the current day may depend on the last instance generated on the previous day. If the last instance generated on the previous day does not finish running, the task scheduled by day cannot be scheduled on the current day. For more information about how to configure the self-dependency, see [Dependency on the instance generated for the current node in the previous cycle](/help/en/dataworks/user-guide/configure-cross-cycle-scheduling-dependencies#section-eve-ofl-iul).
    

![天任务依赖同周期天任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1817190761/p521077.png)

**Scenario where a task scheduled by day depends on a task scheduled by hour of the current day**

-   **The self-dependency is not configured for the task scheduled by hour.**
    
    The instance generated for the task scheduled by day depends on all instances generated for the task scheduled by hour on the current day. After data of all instances generated for the task scheduled by hour on the current day is generated, the task scheduled by day starts to cleanse the generated data on the current day.
    
    **Note**
    
    If you want the instance generated for the task scheduled by day to depend on a specific instance generated for the task scheduled by hour, you can configure the self-dependency for the task scheduled by hour. After the specific instance finishes running, the instance generated for the task scheduled by day is automatically scheduled at the scheduling time. For more information about how to configure the self-dependency, see [Dependency on the instance generated for the current node in the previous cycle](/help/en/dataworks/user-guide/configure-cross-cycle-scheduling-dependencies#section-eve-ofl-iul).
    
-   **The self-dependency is configured for the task scheduled by hour.**
    
    The task scheduled by day depends on the instance that is generated for the task scheduled by hour and whose scheduling time is the closest to but not later than that of the task scheduled by day.
    

![天任务依赖当天小时任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1817190761/p521081.png)

**Scenario where a task scheduled by day depends on a task scheduled by hour or minute on the previous day**

-   **The self-dependency is not configured for the task scheduled by hour or minute.**
    
    The task scheduled by day on the current day depends on all instances generated for the task scheduled by hour or minute on the previous day.
    
-   **The self-dependency is configured for the task scheduled by hour or minute.**
    
    The task scheduled by day on the current day depends on the last instance generated for the task scheduled by hour or minute on the previous day.
    

The following diagram provides examples on how a task scheduled by day depends on a task scheduled by hour on the previous day.![天任务依赖昨天的小时任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1817190761/p521086.png)

### Dependencies for tasks scheduled by minute

**Dependency scenario**

**Description**

**Diagram**

**Scenario where a task scheduled by minute depends on a task scheduled by hour**

-   **The self-dependency is not configured for the task scheduled by minute.**
    
    Instances generated for the task scheduled by minute depend on the instance that is generated for the task scheduled by hour and whose scheduling time is the closest to but not later than that of the current instances.
    
    **Note**
    
    In this case, multiple instances generated for the task scheduled by minute may depend on the same instance generated for the task scheduled by hour.
    
-   **The self-dependency is configured for both the task scheduled by minute and the task scheduled by hour.**
    
    The instance of the task scheduled by minute in the current cycle depends on the instance of the task in the previous cycle, and also depends on the instance that is generated for the task scheduled by hour and whose scheduling time is the closest to but not later than that of the current instance based on the principle of scheduling time proximity.
    

![分钟任务依赖小时任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1817190761/p521144.png)

**Scenario where a task scheduled by minute depends on a task scheduled by day**

-   **The self-dependency is not configured for the task scheduled by minute.**
    
    All instances generated for the task scheduled by minute on the current day depend on the instance generated for the task scheduled by day. When the scheduling time of the task scheduled by day arrives and the task finishes running, the task scheduled by minute can start to run.
    
    **Note**
    
    -   After the task scheduled by day finishes running, instances that are generated for the task scheduled by minute and whose scheduling time arrives can be run in parallel. To prevent the instances from being run in parallel, you can configure the self-dependency for the task scheduled by minute. For more information about how to configure the self-dependency, see [Dependency on the instance generated for the current node in the previous cycle](/help/en/dataworks/user-guide/configure-cross-cycle-scheduling-dependencies#section-eve-ofl-iul).
        
    -   The running of the instances that are generated for the task scheduled by minute is independent of one another.
        
    
-   **The self-dependency is configured for the task scheduled by minute.**
    
    -   Only the first instance generated for the task scheduled by minute depends on the task scheduled by day. Each of the rest instances generated for the task scheduled by minute in the current cycle depends on the instance of the task in the previous cycle.
        
    -   The instance of the task scheduled by minute in the current cycle starts to run only after the task scheduled by day and the instance of the task scheduled by minute in the previous cycle finish running. In this case, even if the scheduling time of the instances generated for the task scheduled by minute arrives, the instances are not run in parallel.
        
    
    **Note**
    
    If you configure the self-dependency for the task scheduled by minute, the first instance generated on the current day may depend on the last instance generated on the previous day. If the last instance generated on the previous day does not finish running, the task scheduled by minute cannot be scheduled on the current day. For more information about how to configure the self-dependency, see [Dependency on the instance generated for the current node in the previous cycle](/help/en/dataworks/user-guide/configure-cross-cycle-scheduling-dependencies#section-eve-ofl-iul).
    

![分钟任务依赖天任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1817190761/p521141.png)

### Dependencies on tasks scheduled by week, month, or year

If a task scheduled by day, hour, or minute depends on a task scheduled by week, month, or year, dry-run instances are generated for the task scheduled by week, month, or year in a period of time that falls out of the scheduling time. The dry-run instances do not generate data, occupy resources, or block descendant tasks from running.

Sample scenario in which a task scheduled by day depends on a task that is scheduled by week and for which the self-dependency is not configured:

-   The task scheduled by week is scheduled to run every Monday and Friday. Dry-run instances are generated for the task every Tuesday, Wednesday, Thursday, Saturday, and Sunday. When the scheduling time of the dry-run instances arrives, the status of the instances is directly set to successful, but the code of the instances is not run. Dry-run instances do not affect the normal running of descendant instances.
    
-   Instances are generated for the task scheduled by day every day and depend on the instances that are generated for the task scheduled by week every day, including the dry-run instances. The instances that are generated for the task scheduled by day can be scheduled to run after the instances that are generated for the task scheduled by week are successfully run every day.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2263856071/p756576.png)
