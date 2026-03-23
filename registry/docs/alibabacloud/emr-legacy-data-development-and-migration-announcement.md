E-MapReduce (EMR) Data Platform entered maintenance state at 21:00 on February 21, 2022 (UTC+8). Data development features in Data Platform are no longer updated. Migrate your workflows and tasks from Data Platform to EMR Workflow at the earliest opportunity.

**Important**

The migration does not affect running workflows. Export and import operations have no impact on task scheduling in the old EMR console.

## Why migrate to EMR Workflow

EMR Workflow is a fully managed workflow and task scheduling service, fully compatible with open source Apache DolphinScheduler. Capabilities include:

-   **Open source compatibility** -- fully compatible with open source Apache DolphinScheduler
    
-   **Visual workflow management** -- build and manage workflows through a drag-and-drop interface
    
-   **Production scheduling** -- stable task execution backed by managed infrastructure
    
-   **Data warehouse development** -- streamlined workflow creation and scheduling for building data warehouses
    

For details, see [What is EMR Workflow?](/help/en/emr/emr-on-ecs/user-guide/what-is-emr-workflow)

## Choose your migration target

EMR supports two migration paths from Data Platform. Choose the one that fits your requirements:

**Migration target**

**Best for**

**Advantage**

**EMR Workflow** (this guide)

Teams that want DolphinScheduler-based scheduling with EMR cluster integration

Open source compatibility, visual workflow management

**DataWorks**

Teams that need a broader data integration and governance platform

Data development across multiple compute engines

To migrate to DataWorks instead, see [End of updates for data development features in EMR Data Platform](/help/en/emr/emr-on-ecs/product-overview/end-of-updates-for-data-development-features-in-emr-data-platform).

## What you need to do

1.  Evaluate whether EMR Workflow meets your requirements.
    
2.  Register for migration support and join the coordination group.
    
3.  Export your Data Platform workflows and import them into EMR Workflow.
    
4.  Validate imported workflows, then switch over.
    

The process takes approximately 2 to 5 weeks, depending on workflow complexity.

## Migration process

Export workflows and tasks from Data Platform in the old EMR console as a JSON file compatible with Apache DolphinScheduler. Then import these workflows and tasks into EMR Workflow.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2196822771/CAEQTxiBgIDFkKGZ2BkiIGNkNjI2NTYzYTNmYzQ1NGE4NWFmM2NjNjYyNTMyMDRh3768287_20230630100842.738.svg)

### Phase 1: Preparations (estimated: 1 day)

**Step**

**Action**

1

Review [What is EMR Workflow](/help/en/emr/emr-on-ecs/user-guide/what-is-emr-workflow) to confirm it meets your requirements.

2

Fill in the [registration form for migration to EMR Workflow](https://survey.aliyun.com/apps/zhiliao/Rc_JT55D2).

3

Join the Data Platform DingTalk group. Group ID: **34405021286**.

4

Work with Alibaba Cloud EMR engineers to review your cluster configurations, resource usage, and migration schedule.

### Phase 2: Migration (estimated: 1 hour)

1.  Export workflows and tasks from Data Platform in the old EMR console as a DolphinScheduler-compatible JSON file.
    
2.  Import the JSON file into EMR Workflow.
    

**Note**

These export and import operations do not affect task scheduling in Data Platform. Your existing workflows continue to run normally during this phase.

### Phase 3: Validation (estimated: 1 to 4 weeks)

Imported workflows are in the **offline** state by default. To validate them:

1.  Manually run each workflow, or set up time-based scheduling.
    
2.  Observe the running results to confirm workflows execute correctly.
    
3.  If issues occur, contact the Alibaba Cloud EMR team for troubleshooting support.
    

### Phase 4: Switchover (estimated: 1 to 3 days)

1.  Suspend your workflows in the old Data Platform console.
    
2.  Switch all production scheduling to EMR Workflow.
    

## Contact support

The Alibaba Cloud EMR team provides end-to-end technical support throughout the migration:

1.  Fill in the [registration form for migration to EMR Workflow](https://survey.aliyun.com/apps/zhiliao/Rc_JT55D2).
    
2.  Join the DingTalk group for data migration. Group ID: **34405021286**.
    

After you register, EMR engineers contact you to formulate a migration plan.
