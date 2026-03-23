This topic describes how to release an ApsaraDB for MongoDB instance.

## **Prerequisites**

-   The billing method of the instance is pay-as-you-go.
    
-   The instance is in the Running state.
    

## Usage notes

-   In most cases, after you release an instance, the instance is retained in the recycle bin for seven days before it is permanently deleted. After the instance is permanently deleted, instance data cannot be restored. Exercise caution when you release an instance. The following released instances cannot be recovered from the **Recycle Bin**:
    
    -   Released standalone instances
        
    -   Released sharded cluster instances that use local disks
        
    -   Released instances for which Transparent Data Encryption (TDE) is enabled
        
    
-   To recover an instance that has disk encryption enabled from the recycle bin, ensure that the Key Management Service (KMS) key of the instance is available. Otherwise, the recovery task fails.
    

## Procedure

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Replica Set Instances** or **Sharded Cluster Instances**.
    
3.  In the upper-left corner of the page, select the resource group and region to which the desired instance belongs.
    
4.  Find the instance and click **More** in the **Actions** column. Then, select **Release** from the drop-down list.
    
    **Note**
    
    If the "**The operation cannot be performed because release protection is enabled for the instance. To release the instance, disable release protection for the instance first."** prompt is displayed, disable release protection for the instance. For more information, see [Enable or disable the release protection feature for an instance](/help/en/mongodb/user-guide/enable-or-disable-the-release-protection-feature-for-instances).
    
5.  In the **Release Instance** message, click **OK**.
    
    When you release an instance, the instance is in the **Releasing** state.
    

## References

For more information about how to release a node from a sharded cluster instance, see [Release a mongos or shard node](/help/en/mongodb/user-guide/release-a-mongos-or-shard-node#task-2103666).
