To apply certain changes, you need to restart an Elastic Compute Service (ECS) instance from the console or using an API. These changes include updating resource specifications, modifying the hostname, or completing system maintenance events. Restarting an instance interrupts your services and may result in data loss.

## Impacts and risks

**Service interruption:** Restarting an instance will interrupt your services.

**In-memory data loss (force restart):** When an instance is force-restarted, cached data in memory that has not been flushed to the storage device in time will be lost.

## Procedure

### Step 1: Perform pre-restart checks

-   Evaluate the restart time: Perform this operation during off-peak hours to minimize service disruption.
    
-   Stop applications: To ensure all in-flight requests and data writes are complete, manually stop application services within the operating system (OS).
    
    > To quickly restore services after the restart, check whether your critical business applications are configured to start automatically on boot.
    
-   Back up data: To protect your data against unexpected issues during the restart, [create a snapshot](/help/en/ecs/user-guide/create-a-snapshot) before you begin.
    
    > Snapshots are a paid feature. Refer to [Snapshots](/help/en/ecs/snapshots-1).
    

### Step 2: Restart an instance

## Console

1.  Go to [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region). In the top-left corner, select the target region and resource group.
    
2.  Click the instance ID to open its details page. In the upper-right corner of the page, click **Restart**.
    
3.  In the dialog box that appears, select a restart mode.
    
    -   **Normal restart (default)**: Leave the **Force Restart** checkbox unselected. The OS attempts to shut down all processes gracefully before restarting.
        
    -   **Select** **Force Restart**: This is equivalent to a power-off operation. It risks in-memory data loss and file system corruption. Use this option only when the instance is unresponsive.
        
4.  Restart the instance:
    
    -   **Restart immediately:** Click **Confirm**.
        
    -   **Schedule the restart:** You can also schedule the restart for a specific time. Check the box **Set Timed Execution** to enable scheduling, configure the time and required role. Then click **Confirm** to create the scheduled restart task. After the task is created, you can go to [CloudOps Orchestration Service (OOS) console - Timed Task](https://oos.console.alibabacloud.com/cn-hangzhou/trigger/time) to modify the task configuration.
        

> When you restart an instance, the OS must release resources such as processes, CPU, and memory. The virtualization layer also releases related resources. This operation takes 3 to 5 minutes on average but can last up to 20 minutes.

## API

Use the following API operations to restart one or more ECS instances.

-   To restart a single ECS instance in the **Running** state, call [RebootInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-rebootinstance).
    
-   To restart one or more ECS instances in the **Running** state, call [RebootInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-rebootinstances).
    
-   To reactivate and restart an expired or overdue ECS instance, call [ReActivateInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-reactivateinstances).
    

To schedule an instance restart, refer to [Scheduled Restart Task public template in CloudOps Orchestration Service (OOS)](https://oos.console.alibabacloud.com/cn-hangzhou/template/public/detail/ACS-ECS-ScheduleToRebootInstances).

## FAQ

#### Why do my changes not take effect after I restart an instance using the `reboot` command?

You can use the console or an API to apply certain changes, such as modifying instance resources, updating the hostname, or resizing a cloud disk. Restarting in this way reloads the instance's complete configuration from the underlying virtualization platform. In contrast, the `reboot` command runs inside the OS and is unaware of these external configuration changes, which is why it is ineffective for applying them.

#### What permissions are required for a RAM user to restart an ECS instance?

A Resource Access Management (RAM) user must have the `ecs:DescribeInstances` and `ecs:RebootInstance` permissions.

## References

-   [Stop or restart an instance using a Cloud Assistant command](/help/en/ecs/user-guide/use-a-specified-exit-code-to-stop-or-restart-instances)
    
-   [Modify the scheduled restart time](/help/en/ecs/user-guide/modify-the-scheduled-restart-time)
