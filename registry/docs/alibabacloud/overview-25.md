When you invoke a function in asynchronous mode, requests are persisted to the internal queue of Function Compute before it is processed in a reliable manner. If you want to track and save the states of asynchronous invocations in each phase to obtain better task control and observability capabilities, you can enable the task mode to process asynchronous requests. This topic describes the background information, limits, and common features of asynchronous tasks.

## Background

After you enable the asynchronous task feature, you can obtain the following capabilities:

-   State transition information, such as invocation inputs, execution results, and error information, for each function invocation is recorded.
    
-   You can manage each invocation. For example, you can terminate an invocation.
    

Latency is increased for function invocations and executions if the asynchronous task feature is enabled because status information needs to be saved. The increased latency does not generate additional fees. For more information about the billing of Function Compute, see [Billing overview](/help/en/functioncompute/fc-2-0/product-overview/billing-overview#concept-2557114).

## Limits

-   Scenario limits
    
    Although the asynchronous task feature provides more capabilities, more system overheads are incurred. We recommend that you disable the asynchronous task feature in the following scenarios:
    
    -   Your business applications are sensitive to the latencies of request processing links and require the average latency to be less than 100 milliseconds.
        
    -   You need to initiate at least thousands of asynchronous invocations per second.
        
    
-   Supported regions
    
    Asynchronous tasks are supported in the following regions: China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Shenzhen), China (Chengdu), China (Hong Kong), Singapore, UK (London), US (Silicon Valley), US (Virginia), Germany (Frankfurt), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Thailand (Bangkok), Japan (Tokyo), and South Korea (Seoul).
    
-   Validity period
    
    You can query the task status information only within the last seven days.
    

## Feature comparison

If you want to build an asynchronous task processing platform or run simple scheduled tasks, you can use Kubernetes jobs. The following is a comparison between asynchronous tasks of Function Compute and Kubernetes jobs.

**Item**

**Asynchronous tasks of Function Compute**

**Kubernetes jobs**

Scenarios

Real-time tasks that last tens of milliseconds and offline tasks that last tens of hours.

Offline tasks with fixed loads and low requirements on task submission speeds and timeliness.

Observability

Supported. Metrics, such as logs and the number of queued tasks, and the observability capabilities, including the query of task link durations and task status, are provided.

You must integrate open source software to implement the observability capabilities.

Automatic scaling of task instances

Supported. Automatic scaling based on the number of queued tasks and instance resource usage can be performed.

You must use task queues to manually implement scaling and load balancing of instances, which is more complicated.

Scaling speed of task instances

In milliseconds.

In minutes.

Resource utilization of task instances

You need to only select the instance type. The instances are automatically scaled. You are charged based on the actual task-processing durations. The resource utilization is high.

You must determine the specifications and number of instances when Jobs are submitted. It is difficult to implement auto scaling and load balancing of instances. The resource utilization is low.

Task submission speed

A single user can submit tens of thousands of tasks per second.

Up to hundreds of Jobs can be started in a cluster per second.

Scheduled or deferred task submission

Supported.

Scheduled task submission is supported. Deferred task submission is not supported.

Task deduplication

Supported.

Not supported.

Task termination

Supported.

Supported under certain conditions. You can terminate a task by stopping a task instance.

Task throttling

Supported. Throttling can be performed at different granularities, such as at the user level or at the task-processing function level.

Not supported.

Automatic result callback for a task

Supported.

Not supported.

Development and O&M costs

You need to only implement the task processing logic.

You must maintain a Kubernetes cluster.

## Common features

See the following topics to learn about common features of asynchronous tasks:

-   [Manage tasks](/help/en/functioncompute/fc-2-0/user-guide/task-management#task-2203790)
    
-   [Task deduplication](/help/en/functioncompute/fc-2-0/user-guide/task-deduplication#task-2203804)
    
-   [Task monitoring](/help/en/functioncompute/fc-2-0/user-guide/task-monitoring#task-2203835)
    
-   [Retry policies](/help/en/functioncompute/fc-2-0/user-guide/retry-policy#task-2203696)
    
-   [Event triggering](/help/en/functioncompute/fc-2-0/user-guide/event-triggering#task-2203690)
    
-   [Result callback](/help/en/functioncompute/fc-2-0/user-guide/result-callback#task-2203700)
    
-   [Task orchestration](/help/en/functioncompute/fc-2-0/user-guide/task-orchestration#task-2203720)
