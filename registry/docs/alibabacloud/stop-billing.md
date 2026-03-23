After you activate Simple Log Service (SLS), you cannot deactivate it. To stop billing, delete all projects in your account.

**Warning**

After you delete a project or Logstore, all related logs and configurations are permanently deleted and cannot be restored, regardless of which deletion method is used. Back up any data you need before you proceed.

## Billing timeline after deletion

After you delete a project, billing follows this timeline:

**Day**

**Billing status**

Deletion day

Storage fees are still charged for that day.

Next day

Billing stops. No new charges are incurred.

Third day

You receive your final SLS bill.

## Reduce costs without deleting

Before you delete all projects, consider these alternatives:

-   **Shorten the log retention period.** Logs are automatically deleted when their retention period ends. A shorter retention period reduces storage fees. For more information, see [How do I delete logs?](/help/en/sls/how-do-i-delete-logs)
    
-   **Delete unused Logstores.** When you create a Logstore, two shards are automatically created. Active shards incur fees regardless of whether the Logstore is used. Delete unused Logstores to stop shard-related charges. For more information, see [Delete a Logstore](/help/en/sls/manage-a-logstore#sectiondiv-0x2-666-fo5). See also [Why am I charged for active shards?](/help/en/sls/why-am-i-charged-for-active-shards)
    
-   **Review storage usage.** Check per-project and per-Logstore storage to identify your highest-cost items. For more information, see [How do I view the storage usage and consumption records of Simple Log Service?](/help/en/sls/how-to-view-the-storage-capacity-and-consumption-records-of-log-service)
    
-   **Use a resource plan.** New-version resource plans offset fees for all billable items of SLS. A resource plan provides the same resource usage quota each month within its validity period. Usage that exceeds the monthly quota is charged on a pay-as-you-go basis. For more information, see [Overview of resource plans](/help/en/sls/overview-11).
    

## Delete projects and Logstores

The deletion steps depend on how the logs were created. Follow the instructions for each log type that applies to your account.

### Cloud service logs

When you enable the log analysis feature for Alibaba Cloud services such as elastic computing, storage, security, and database services, SLS automatically creates projects and Logstores. For more information, see [Alibaba Cloud service logs](/help/en/sls/alibaba-cloud-service-logs).

To delete cloud service logs:

1.  Disable the log analysis feature in the console of each cloud service.
    
2.  Delete the projects or Logstores in the SLS console.
    
    -   To delete a Logstore while keeping its project, see [Delete a Logstore](/help/en/sls/manage-a-logstore#section-ezq-vjx-ndb).
        
    -   To delete an entire project, see [Delete a project](/help/en/sls/manage-a-project/#entry-m7e-hhf-r4z).
        

### Log Audit Service logs

You have two options for Log Audit Service logs:

-   **Stop collection but keep existing logs.** Disable the log collection feature. Logs remain in storage until their retention period ends. For more information, see [Disable log collection](/help/en/sls/enable-log-collection-1#p-si8-s2a-b7n).
    
-   **Delete all audit resources.** Clear and delete all SLS resources related to Log Audit Service, including projects, Logstores, dashboards, and alerts. For more information, see [Delete audit resources](/help/en/sls/enable-log-collection-1#p-yen-feo-nfz).
    

### CloudLens service logs

CloudLens applications require at least one project in your Alibaba Cloud account. When you enable a CloudLens application, SLS checks whether a project exists:

-   **First enablement:** If no project exists, SLS creates a project named `aliyun-product-data-<Alibaba Cloud account ID>-cn-heyuan` in the China (Heyuan) region.
    
-   **Subsequent enablements:** If no project exists, SLS does not create one automatically. You must create a project manually. For more information, see [Manage a project](/help/en/sls/manage-a-project/#entry-m7e-hhf-r4z).
    

To delete CloudLens projects:

-   To delete the auto-created project (`aliyun-product-data-<Alibaba Cloud account ID>-cn-heyuan`), open [Cloud Shell](https://shell.alibabacloud.com/) and run the following command. Replace `<Alibaba Cloud account ID>` with your actual account ID.
    
    ```
      aliyunlog log delete_project --project_name=aliyun-product-data-<Alibaba Cloud account ID>-cn-heyuan --region-endpoint=cn-heyuan.log.aliyuncs.com
    ```
    
-   To delete other projects and Logstores, see [Manage a Logstore](/help/en/sls/manage-a-logstore#section-ezq-vjx-ndb) and [Manage a project](/help/en/sls/manage-a-project/#entry-m7e-hhf-r4z).
    

### Other logs

-   To delete a Logstore while keeping its project, see [Delete a Logstore](/help/en/sls/manage-a-logstore#section-ezq-vjx-ndb).
    
-   To delete an entire project, see [Delete a project](/help/en/sls/manage-a-project/#entry-m7e-hhf-r4z).
    

## References

-   [How do I view the storage usage and consumption records of Simple Log Service?](/help/en/sls/how-to-view-the-storage-capacity-and-consumption-records-of-log-service)
    
-   [Overview of resource plans](/help/en/sls/overview-11)
    
-   [DeleteProject](/help/en/sls/developer-reference/api-sls-2020-12-30-deleteproject) and [DeleteLogStore](/help/en/sls/developer-reference/api-sls-2020-12-30-deletelogstore) API operations
