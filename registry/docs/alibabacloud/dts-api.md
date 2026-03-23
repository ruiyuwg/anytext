The following table describes the API operations that are available for use in Data Transmission Service (DTS).

**API**

**Description**

[CreateDtsInstance](/help/en/dts/developer-reference/api-createdtsinstance#doc-api-Dts-CreateDtsInstance)

Purchases a DTS instance.

[ConfigureDtsJob](/help/en/dts/developer-reference/api-configuredtsjob#doc-api-Dts-ConfigureDtsJob)

Configures a data migration or synchronization task.

[ConfigureSubscription](/help/en/dts/developer-reference/api-configuresubscription#doc-api-Dts-ConfigureSubscription)

Configures a change tracking task.

[WhiteIpList](/help/en/dts/developer-reference/api-whiteiplist#doc-api-Dts-WhiteIpList)

Queries the CIDR blocks of DTS servers. After you call this operation, you can add the CIDR blocks of DTS servers to the security settings of the source or destination instance.

[StartDtsJob](/help/en/dts/developer-reference/api-startdtsjob#doc-api-Dts-StartDtsJob)

Starts a data migration, data synchronization, or change tracking task.

Operations that are used to manage consumer groups for a change tracking task:

-   [CreateConsumerChannel](/help/en/dts/developer-reference/api-createconsumerchannel#doc-api-Dts-CreateConsumerChannel)
    
-   [DescribeConsumerChannel](/help/en/dts/developer-reference/api-describeconsumerchannel#doc-api-Dts-DescribeConsumerChannel)
    
-   [ModifyConsumerChannel](/help/en/dts/developer-reference/api-modifyconsumerchannel#doc-api-Dts-ModifyConsumerChannel)
    
-   [DeleteConsumerChannel](/help/en/dts/developer-reference/api-deleteconsumerchannel#doc-api-Dts-DeleteConsumerChannel)
    

Manage consumer groups for a change tracking task. You can add a consumer group, query the information about a consumer group, modify the information about a consumer group, or delete a consumer group.

[SkipPreCheck](/help/en/dts/developer-reference/api-skipprecheck#doc-api-Dts-SkipPreCheck)

Skips one or more precheck items.

Operations that are used to query data synchronization, data migration, or change tracking tasks:

-   [DescribeDtsJobDetail](/help/en/dts/developer-reference/api-describedtsjobdetail#doc-api-Dts-DescribeDtsJobDetail)
    
-   [DescribeDtsJobs](/help/en/dts/developer-reference/api-describedtsjobs#doc-api-Dts-DescribeDtsJobs)
    
-   [DescribePreCheckStatus](/help/en/dts/developer-reference/api-describeprecheckstatus#doc-api-Dts-DescribePreCheckStatus)
    

Operations that are used to query data synchronization, data migration, or change tracking tasks:

-   Queries the details of a data migration, data synchronization, or change tracking task.
    
-   Queries the DTS tasks and the details of each task.
    
-   Queries the status of a DTS subtask that performs precheck, schema migration, initial schema synchronization, full data migration, initial full data synchronization, incremental data migration, or incremental data synchronization.
    

Operations that are used to query DTS verification tasks:

-   [DescribeDataCheckTableDetails](/help/en/dts/developer-reference/api-describedatachecktabledetails#doc-api-Dts-DescribeDataCheckTableDetails)
    
-   [DescribeDataCheckTableDiffDetails](/help/en/dts/developer-reference/api-describedatachecktablediffdetails#doc-api-Dts-DescribeDataCheckTableDiffDetails)
    

Operations that are used to query DTS verification tasks:

-   Queries the details of a data verification task.
    
-   Queries the information about inconsistent data in a table in a data verification task.
    

Operations that are used to modify the configurations of a DTS task:

-   [ModifyDtsJob](/help/en/dts/developer-reference/api-modifydtsjob#doc-api-Dts-ModifyDtsJob)
    
-   [ModifySubscription](/help/en/dts/developer-reference/api-modifysubscription#doc-api-Dts-ModifySubscription)
    
-   [ModifyDtsJobPassword](/help/en/dts/developer-reference/api-modifydtsjobpassword#doc-api-Dts-ModifyDtsJobPassword)
    
-   [ModifyDtsJobName](/help/en/dts/developer-reference/api-modifydtsjobname#doc-api-Dts-ModifyDtsJobName)
    
-   [UpgradeTwoWay](/help/en/dts/developer-reference/api-upgradetwoway#doc-api-Dts-UpgradeTwoWay)
    
-   [TransferPayType](/help/en/dts/developer-reference/api-transferpaytype#doc-api-Dts-TransferPayType)
    
-   [TransferInstanceClass](/help/en/dts/developer-reference/api-transferinstanceclass#doc-api-Dts-TransferInstanceClass)
    
-   [RenewInstance](/help/en/dts/developer-reference/api-renewinstance#doc-api-Dts-RenewInstance)
    

Operations that are used to modify the configurations of a DTS task:

-   Modifies the objects of a data synchronization task.
    
-   Modifies the objects of a change tracking task and the types of data changes to be tracked.
    
-   Changes the password of the source or destination database account.
    
-   Changes the name of a DTS task.
    
-   Upgrades the synchronization topology of a data synchronization instance from one-way synchronization to two-way synchronization.
    
-   Changes the billing method or instance class of a DTS task.
    
-   Upgrades or downgrades a DTS instance.
    
-   Renews a DTS instance. This API operation is applicable to only subscription instances.
    

[ResetDtsJob](/help/en/dts/developer-reference/api-resetdtsjob#doc-api-Dts-ResetDtsJob)

Resets a data synchronization or change tracking task.

[SuspendDtsJob](/help/en/dts/developer-reference/api-suspenddtsjob#doc-api-Dts-SuspendDtsJob)

Pauses a data migration, data synchronization, or change tracking task.

[StopDtsJob](/help/en/dts/developer-reference/api-stopdtsjob#doc-api-Dts-StopDtsJob)

Stops a data migration, data synchronization, or change tracking task.

[DeleteDtsJob](/help/en/dts/developer-reference/api-deletedtsjob#doc-api-Dts-DeleteDtsJob)

Deletes a data migration, data synchronization, or change tracking task.

Operations that are used to manage alert rules for a DTS task:

-   [CreateJobMonitorRule](/help/en/dts/developer-reference/api-createjobmonitorrule#doc-api-Dts-CreateJobMonitorRule)
    
-   [DescribeJobMonitorRule](/help/en/dts/developer-reference/api-describejobmonitorrule#doc-api-Dts-DescribeJobMonitorRule)
    

Creates an alert rule for a DTS task, modifies the alert rule of a DTS task, or queries the alert rules of a DTS task.

Operations that are used to manage tags:

-   [TagResources](/help/en/dts/developer-reference/api-tagresources-2#doc-api-Dts-TagResources)
    
-   [ListTagResources](/help/en/dts/developer-reference/api-listtagresources-2#doc-api-Dts-ListTagResources)
    
-   [UntagResources](/help/en/dts/developer-reference/api-untagresources-2#doc-api-Dts-UntagResources)
    

Operations that are used to manage tags:

-   Adds tags to one or more data migration, data synchronization, or change tracking instances.
    
-   Queries the tags that are added to specific data migration, data synchronization, or change tracking instances, or queries the instances to which specific tags are added.
    
-   Removes tags from one or more data migration, data synchronization, or change tracking instances.
    

Operations that are used to manage dedicated clusters:

-   [ListDedicatedCluster](/help/en/dts/developer-reference/api-query-the-cluster-list#doc-api-Dts-ListDedicatedCluster)
    
-   [DescribeDedicatedCluster](/help/en/dts/developer-reference/api-obtains-detailed-information-about-a-specified-cluster#doc-api-Dts-DescribeDedicatedCluster)
    
-   [DescribeClusterUsedUtilization](/help/en/dts/developer-reference/api-view-the-usage-of-a-cluster#doc-api-Dts-DescribeClusterUsedUtilization)
    
-   [DescribeClusterOperateLogs](/help/en/dts/developer-reference/api-query-cluster-log#doc-api-Dts-DescribeClusterOperateLogs)
    
-   [DescribeMetricList](/help/en/dts/developer-reference/api-view-cluster-monitoring-information#doc-api-Dts-DescribeMetricList)
    
-   [ModifyDedicatedCluster](/help/en/dts/developer-reference/api-modify-cluster-information#doc-api-Dts-ModifyDedicatedCluster)
    
-   [ModifyDtsJobDuLimit](/help/en/dts/developer-reference/api-modify-the-maximum-du-of-jobs#doc-api-Dts-ModifyDtsJobDuLimit)
    
-   [StopDedicatedCluster](/help/en/dts/developer-reference/api-release-a-cluster#doc-api-Dts-StopDedicatedCluster)
    
-   [ModifyDtsJobDedicatedCluster](/help/en/dts/developer-reference/api-migrate-dts-tasks#doc-api-Dts-ModifyDtsJobDedicatedCluster)
    
-   [CreateDedicatedClusterMonitorRule](/help/en/dts/developer-reference/api-create-alarm-rules#doc-api-Dts-CreateDedicatedClusterMonitorRule)
    
-   [DescribeDedicatedClusterMonitorRule](/help/en/dts/developer-reference/api-query-alarm-rules#doc-api-Dts-DescribeDedicatedClusterMonitorRule)
    

Operations that are used to manage dedicated clusters:

-   Queries a list of clusters.
    
-   Queries the details of a cluster.
    
-   Queries the resource usage of a cluster.
    
-   Queries the operation logs of a cluster.
    
-   Queries the monitoring information about a cluster.
    
-   Modifies the configurations of a cluster.
    
-   Modifies the upper limit of DTS units (DUs) for a DTS task.
    
-   Releases a cluster.
    
-   Migrates tasks from a dedicated cluster to a shared cluster.
    
-   Creates an alert rule.
    
-   Queries alert rules.
