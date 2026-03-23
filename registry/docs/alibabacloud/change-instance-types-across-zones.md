Migrate an ECS instance to another zone in the same region while simultaneously changing its instance type within the same instance family. Use this to scale resources when the desired type is unavailable in the current zone or to improve availability by distributing instances across zones.

## Quick decision guide

**Your situation**

**Your goal**

**Recommended approach**

Current zone has inventory of desired instance type

Scale up instance resources

Same‑zone instance type change ([subscription](/help/en/ecs/user-guide/upgrade-the-instance-types-of-subscription-instances) or [pay-as-you-go](/help/en/ecs/user-guide/change-the-instance-type-of-a-pay-as-you-go-instance#DAS))

Current zone has no inventory of desired instance type

Scale up instance resources

Cross-zone instance type change (this document)

Need to distribute instances across zones

Improve system availability and resilience

Cross-zone instance type change (this document)

Need to move instances between regions

Change region for compliance or performance

[Use Server Migration Center (SMC)](/help/en/smc/user-guide/migrate-servers-between-ecs-instances#DAS) or create custom images and copy them to the target region

## How cross-zone migration works

The migration process includes four phases:

1.  Instance stop: The instance shuts down to prepare for migration. The **duration varies** depending on the operating system's shutdown process.
    
2.  Compute and network migration: Computing resources are moved to the target zone. It typically takes **~15 minutes** (reference only; actual duration varies).
    
3.  Instance restart: The instance boots up in the new zone. The **startup time varies** based on the OS and configured services.
    
4.  Disk data migration: Disk data continues to migrate in the background after the instance is **Running**.
    
    -   Duration: **~4 hours per 100 GiB on average** (reference only; actual duration varies).
        
    -   Impact: During this phase, disk I/O performance is degraded.
        

## Limitations

-   Cross-zone migration does not apply to spot instances.
    
-   Instance type changes are limited to the same instance family. To change to a different instance family, complete the migration first, then upgrade the subscription instance or change the instance type of the pay‑as‑you‑go instance.
    
-   Each batch operation supports up to 5 instances by default. Contact technical support to request a higher limit.
    
-   The following instance families are unsupported:
    
    -   Heterogeneous computing families
        
    -   ECS Bare Metal families
        
    -   Super Computing Cluster (SCC) families
        
    -   Universal: All u2a instances
        
    -   Economy (e): All e series except e-c1m1, e-c1m2, and e-c1m4.
        
    -   Big data (d series): All d series families
        
    -   Local SSD (i series): All i series families
        
    -   Security-enhanced (trusted): All trusted instance families
        
    -   8th generation: All 8th generation families except hfr8i, hfc8i, hfg8i, r8ae, g8ae, c8ae, r8y, c8y, g8y, r8a, g8a, c8a, g8i, r8i, and c8i
        
    -   9th generation: All 9th generation families except r9i, g9i, and c9i
        

## Migration impacts

**Important**

-   The instance must be stopped during part of the migration, which causes service interruption.
    
-   The primary private IP address will change after migration.
    
-   During disk data migration, disk I/O performance is degraded and snapshot‑related and disk‑related operations are unavailable.
    

### What changes

**Instance attribute**

**After migration**

**Action required**

Private IP address

Changes to a new IP from the destination vSwitch CIDR block.

Modify after migration if needed.

Software authorization codes

May change.

Contact your software vendor for re-authorization if needed.

SLB association

Detached from Server Load Balancer (SLB) vServer groups.

Re-add the instance to the vServer group of your SLB.

### What stays the same

-   Instance ID
    
-   Elastic IP address (EIP)
    
-   Public IP address
    
-   MAC address
    
-   Security groups
    
-   Disk serial numbers and IDs
    
-   Username and password
    

### **Billing impact**

-   Migration without instance type change: No fee change.
    
-   Subscription downgrade: Refund = Remaining amount (old config) - Price (new config).
    
-   Subscription upgrade: Pay the price difference for the remaining billing cycle.
    
-   Pay-as-you-go change: Pay based on the new instance type.
    

## Prerequisites

Complete these checks before starting the migration:

-   Schedule a maintenance window during off-peak hours. The instance **must be stopped** during migration, which will result in service interruption.
    
-   Create snapshots for all disks to back up your data. See [Create a snapshot](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).
    
-   Ensure applications do not rely on the current private IP address, as it will change after migration.
    
-   Disable server security software like Safedog, Huweishen, Yunsuo, or similar. You can re-enable them after migration.
    
-   Ensure there is at least 500 MiB free space available on the system disk.
    
-   Detach or disable Global Accelerator, IPv6 addresses, HaVips, secondary ENIs, reverse proxies, and custom route tables associated with the instance.
    

## Procedure

**Warning**

This operation triggers an instance restart. Ensure you are within a maintenance window.

### Step 1: Initiate the migration

1.  Go to the [ECS console](https://ecs.console.alibabacloud.com/server/region) and select the region.
    
2.  Click the instance ID to open the details page.
    
3.  Choose **All Actions** > **Network and Security Group** > **Migrate Instance Across Zones**.
    
    **Note**
    
    For batch operations, select up to 5 instances (or your approved higher limit) on the Instances page, choose **More** > **Upgrade/Downgrade** > **Change Configurations**, then select **Change Instance Type Across Zones**.
    
4.  Configure the migration:
    
    **Parameter**
    
    **Description**
    
    **Preferred Destination Zone**
    
    Select the target zone
    
    **Preferred Network Settings**
    
    Select the destination vSwitch. After migration, a new private IP address from the vSwitch CIDR block is randomly assigned. Create VPC and vSwitch in advance if needed. See [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc).
    
    **Important**
    
    Original private IP address is not retained—ensure applications don't depend on it. You can modify the IP address after migration.
    
    **Instance to Be Migrated**
    
    Select a new instance type within the same family. If not listed, inventory may be insufficient.
    
5.  Select the **I have backed up data** checkbox and click **OK**.
    
6.  Complete payment if required.
    

### Step 2: Verify the result

You can check the status in either of the following ways:

**Option 1: ECS Console**

1.  Return to the **Instances** page in the ECS console.
    
2.  Wait for the instance status to change from **Migrating** to **Running.**
    
3.  Check the **Zone** column. If it displays the destination zone, compute and network migration is completed.
    
    **Note**
    
    Disk data migration **continues** in the background even after the instance enters the **Running** state. During this phase, disk I/O performance is degraded, and disk-related operations (such as creating snapshots) are unavailable.
    

**Option 2: SMC console**

If you need to track specific migration phases:

1.  Open the [SMC console](https://smc.console.alibabacloud.com/).
    
2.  Go to **Cloud Migration** > **Cross-zone Migration**.
    
3.  Check the **Real-Time Migration Status** column. **Completed** indicates that disk data migration is also finished and the migration workflow is fully completed.
    

### Step 3: Post-migration configuration

After confirming the instance is running in the new zone, complete the following configurations to restore full service connectivity:

-   If applicable, re-add the instance to the vServer groups of your SLB instance to resume traffic forwarding. See [Create a vServer group](/help/en/slb/classic-load-balancer/user-guide/backend-server-overview).
    
-   Update the new private IP address in application configurations, DNS records, and IP whitelists as needed. See [Modify the primary private IPv4 address of an existing instance's primary ENI](/help/en/ecs/user-guide/modify-a-private-ip-address#bf60f728d0p4m).
    
-   Restart any security agents that were disabled in the prerequisites.
    

## FAQ

### Migration fails with "The private IP address of the current instance has reverse dependencies..."

#### Error message

When you try to start the migration, you may see an error similar to:

> The private IP address of the current instance has reverse dependencies or routing dependencies, such as Workbench and DTS. Workbench can be found and deleted under Workbench-instance-private link.

#### Root causes

The instance has dependencies that conflict with cross-zone migration, such as:

-   Active Workbench private links
    
-   Custom route entries pointing to the instance
    
-   Ongoing DTS migration tasks
    
-   Associated VPC resources (DHCP options sets, network ACLs, route tables, IPv4 gateways)
    

#### Solution

Check and resolve these dependencies in order:

1.  **Workbench private links**
    
    1.  Open the [Workbench console](https://ecs-workbench.alibabacloud.com/).
        
    2.  Choose **Instance** > **Private Links**.
        
    3.  Release any active private links for the instance.
        
2.  **Custom route entries**
    
    1.  Open the [VPC Console](https://vpc.console.alibabacloud.com/vpc/route-tables).
        
    2.  Find the route table used by the instance.
        
    3.  Delete custom route entries where the next hop is the ECS instance.
        
3.  **DTS migration tasks**
    
    1.  Open the [DTS console](https://dts.console.alibabacloud.com/overview).
        
    2.  Check for tasks where source is **Self-managed Database on ECS**.
        
    3.  Ensure data transfer is complete and backed up, then delete the task.
        
    
    **Important**
    
    Before deleting a DTS task, make sure that the data transfer is complete and backups are made.
    
4.  **Associated VPC resources**
    
    Check for and delete these associated VPC resources before retrying:
    
    -   [Remove DHCP options sets](/help/en/vpc/dhcp-option-set-and-dns-hostname#f913dc8054tky)
        
    -   [Remove network ACLs](/help/en/vpc/work-with-network-acls#f313a87f1141v)
        
    -   [Delete the custom route table](/help/en/vpc/network-traffic-management-using-custom-routing-tables#dbb8ca75ccpcb)
        
    -   [Delete an IPv4 gateway](/help/en/vpc/user-guide/create-and-manage-an-ipv4-gateway#b6582c0d6fog6)
        

#### Verification

After resolving dependencies, retry the migration operation.
