If you have highly concurrent tasks that must run during peak hours, you need dedicated computing resources to ensure that your tasks are scheduled and run on time. In this case, you can use an exclusive resource group for scheduling in DataWorks. This topic describes exclusive resource groups for scheduling.

## DataWorks no longer recommends exclusive resource groups for scheduling

**DataWorks no longer recommends using exclusive resource groups for scheduling.** [Use Serverless resource groups](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) **instead.** Serverless resource groups include the core features of earlier resource group types, such as exclusive resource groups for scheduling, exclusive resource groups for Data Integration, exclusive resource groups for DataService Studio, and shared resource groups for scheduling. You can use a single serverless resource group to synchronize data, schedule and run tasks, and call and manage API services.

## Scenarios

-   Your tasks have strict timeliness requirements and you want to avoid delays caused by resource contention in shared resource groups.
    
-   You need the flexibility to adjust the size of the resource group.
    
-   You need to access the Internet, VPCs, or Internet Data Centers (IDCs).
    
-   You need to use IP address whitelists for access control.
    
-   Some DataWorks task types, such as EMR, CDH, and ADB tasks, support only exclusive resource groups.
    

## Limits

-   The billing method for exclusive resource groups for scheduling is **subscription**. You cannot delete or release a resource group before it expires. After the resource group expires, the service is suspended and the resource group is released after a specified period.
    
-   Exclusive resource groups for scheduling cannot be used across regions. For example, an exclusive resource group for scheduling in the China (Shanghai) region can be used only by workspaces in the China (Shanghai) region.
    
-   You cannot run the yum command in an exclusive resource group for scheduling.
    

## Performance metrics

**Specifications**

**Maximum number of concurrent instances**

4 vCPU 8 GiB

16

8 vCPU 16 GiB

32

12 vCPU 24 GiB

48

16 vCPU 32 GiB

64

24 vCPU 48 GiB

96

## Billing standards

**Note**

When a task runs on an exclusive resource group for scheduling, its runtime cost is included in the fees for the exclusive resource group and is not billed to shared resource groups for scheduling.

The billing method for exclusive resource groups for scheduling is **subscription**. You can purchase a resource group of a specific size based on your needs.

**Region**

**Specifications**

**Unit price (USD/month)**

China (Hangzhou)

4 vCPU 8 GiB

76.23

8 vCPU 16 GiB

152.45

12 vCPU 24 GiB

228.68

16 vCPU 32 GiB

304.91

24 vCPU 48 GiB

457.36

32 vCPU 64 GiB

609.82

China (Shanghai)

4 vCPU 8 GiB

76.23

8 vCPU 16 GiB

152.45

12 vCPU 24 GiB

228.68

16 vCPU 32 GiB

304.91

24 vCPU 48 GiB

457.36

32 vCPU 64 GiB

609.82

China (Shenzhen)

4 vCPU 8 GiB

76.23

8 vCPU 16 GiB

152.45

12 vCPU 24 GiB

228.68

16 vCPU 32 GiB

304.91

24 vCPU 48 GiB

457.36

32 vCPU 64 GiB

609.82

China (Beijing)

4 vCPU 8 GiB

76.23

8 vCPU 16 GiB

152.45

12 vCPU 24 GiB

228.68

16 vCPU 32 GiB

304.91

24 vCPU 48 GiB

457.36

32 vCPU 64 GiB

609.82

China (Zhangjiakou)

4 vCPU 8 GiB

57.27

8 vCPU 16 GiB

114.34

12 vCPU 24 GiB

171.61

16 vCPU 32 GiB

228.68

24 vCPU 48 GiB

343.02

32 vCPU 64 GiB

457.36

China (Chengdu)

4 vCPU 8 GiB

62.49

8 vCPU 16 GiB

124.79

12 vCPU 24 GiB

187.09

16 vCPU 32 GiB

249.38

24 vCPU 48 GiB

374.17

32 vCPU 64 GiB

498.77

US (Silicon Valley)

4 vCPU 8 GiB

149.26

8 vCPU 16 GiB

298.53

12 vCPU 24 GiB

447.77

16 vCPU 32 GiB

597.06

24 vCPU 48 GiB

895.55

32 vCPU 64 GiB

1,195.00

US (Virginia)

4 vCPU 8 GiB

110.63

8 vCPU 16 GiB

221.26

12 vCPU 24 GiB

331.89

16 vCPU 32 GiB

442.53

24 vCPU 48 GiB

663.78

32 vCPU 64 GiB

885.06

China (Hong Kong)

4 vCPU 8 GiB

138.73

8 vCPU 16 GiB

276.58

12 vCPU 24 GiB

416.18

16 vCPU 32 GiB

553.16

24 vCPU 48 GiB

832.35

32 vCPU 64 GiB

1,106.32

Singapore

4 vCPU 8 GiB

138.73

8 vCPU 16 GiB

276.58

12 vCPU 24 GiB

416.18

16 vCPU 32 GiB

553.16

24 vCPU 48 GiB

832.35

32 vCPU 64 GiB

1,106.32

Germany (Frankfurt)

4 vCPU 8 GiB

138.73

8 vCPU 16 GiB

276.58

12 vCPU 24 GiB

408.96

16 vCPU 32 GiB

553.16

24 vCPU 48 GiB

817.91

32 vCPU 64 GiB

1,106.32

Malaysia (Kuala Lumpur)

4 vCPU 8 GiB

130.01

8 vCPU 16 GiB

259.06

12 vCPU 24 GiB

390.05

16 vCPU 32 GiB

517.92

24 vCPU 48 GiB

780.07

32 vCPU 64 GiB

1,035.84

Indonesia (Jakarta)

4 vCPU 8 GiB

138.73

8 vCPU 16 GiB

276.58

12 vCPU 24 GiB

416.18

16 vCPU 32 GiB

553.16

24 vCPU 48 GiB

832.35

32 vCPU 64 GiB

1,106.32

Japan (Tokyo)

4 vCPU 8 GiB

158.92

8 vCPU 16 GiB

316.97

12 vCPU 24 GiB

474.14

16 vCPU 32 GiB

633.94

24 vCPU 48 GiB

948.27

32 vCPU 64 GiB

1,268.75

UK (London)

4 vCPU 8 GiB

104.67

8 vCPU 16 GiB

209.33

12 vCPU 24 GiB

314.00

16 vCPU 32 GiB

418.67

24 vCPU 48 GiB

628.00

32 vCPU 64 GiB

837.14

UAE (Dubai)

4 vCPU 8 GiB

166.38

8 vCPU 16 GiB

331.80

12 vCPU 24 GiB

498.38

16 vCPU 32 GiB

663.80

24 vCPU 48 GiB

996.76

32 vCPU 64 GiB

1,327.59

SAU (Riyadh - Partner Region)

4 vCPU 8 GiB

166.48

8 vCPU 16 GiB

331.90

12 vCPU 24 GiB

499.42

16 vCPU 32 GiB

663.79

24 vCPU 48 GiB

998.82

32 vCPU 64 GiB

1,327.58

## Billing details

### Scale-out and scale-in

You can purchase an exclusive resource group and specify the machine specifications and quantity as needed. After the purchase, you can scale out or scale in the resource group. For more information about the scaling procedure and important considerations, see [Scale out or scale in a resource group](/help/en/dataworks/user-guide/scale-out-or-in-a-resource-group#task-2207321).

### Change specifications (upgrade or downgrade)

If the current specifications of your exclusive resource group do not meet your needs, you can change the specifications. When you change the specifications of a resource group, the specifications of all machines in the group are changed. For more information about the procedure and important considerations for changing specifications, see [Change specifications](/help/en/dataworks/user-guide/change-the-specifications-of-a-resource-group#task-2207323).

### Renewal, service suspension, and release

You can renew an exclusive resource group before it expires, or wait for the service to be suspended and the resource group to be automatically released after it expires. For more information, see [Expiration and renewal](/help/en/dataworks/expiration-and-renewal#task-2209905).

**Important**

After a resource group is released, all tasks that rely on it can no longer run.

## Network connectivity solutions

An exclusive resource group for scheduling is essentially a group of Alibaba Cloud ECS instances, similar to other resource groups. When you perform tasks such as data development, you must ensure that the resource group can connect to the data source. You must also ensure that security settings, such as whitelists, do not block the network connection between the resource group and the data source.

**Note**

If the exclusive resource group for scheduling does not interact with a data source, you do not need to configure network connectivity. You can use the resource group immediately after purchase.

After you purchase an exclusive resource group for scheduling, you must attach it to a VPC. Then, you can choose a network connectivity solution based on the network environment of your data source.

-   Network connectivity solutions
    
    **Data source network environment**
    
    **Network connectivity solution**
    
    The data source is on the Internet.
    
    Connect the data source directly to the VPC that is attached to the exclusive resource group.
    
    The data source is in a VPC in the **same** region as the exclusive resource group.
    
    Attach the exclusive resource group to the same VPC as the data source. When you attach the resource group to a vSwitch in the VPC, the system automatically adds a route that allows the resource group and the data source to connect to each other.
    
    The data source is in a VPC in a **different** region from the exclusive resource group.
    
    Use a service such as Express Connect or VPN to connect the VPC of the data source to the VPC of the exclusive resource group. Add a route that points to the destination database IP address to ensure network connectivity.
    
    The data source is in an on-premises data center.
    
    Use a service such as Express Connect or VPN to connect the on-premises data center to the VPC of the exclusive resource group. Add a route that points to the destination database IP address to ensure network connectivity.
    
    The data source is in a classic network.
    
    Exclusive resource groups reside in a VPC and cannot connect to data sources in a classic network. You must migrate the data source to a VPC.
    
-   Whitelist configuration
    
    If the data source uses a whitelist to restrict access, you must add the endpoint of the exclusive resource group to the data source's whitelist to ensure proper access. For more information, see [Add a whitelist](/help/en/dataworks/user-guide/configure-an-ip-address-whitelist-1#section-zuv-cm3-igf).
    

## FAQ

For answers to common questions about DataWorks exclusive resource groups, see [Exclusive resource groups](/help/en/dataworks/exclusive-resource-groups#concept-2473511).
