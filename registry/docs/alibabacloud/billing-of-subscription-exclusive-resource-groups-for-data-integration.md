If your data integration tasks have high concurrency requirements and cannot be staggered, you can use an exclusive resource group for Data Integration from DataWorks. These resource groups provide dedicated computing resources to ensure fast and stable data transmission.

## Exclusive resource groups for Data Integration are not recommended

DataWorks no longer recommends exclusive resource groups for Data Integration. [Use serverless resource groups](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) instead. Serverless resource groups cover the core features of legacy resource groups, such as exclusive resource groups for scheduling, exclusive resource groups for Data Integration, exclusive resource groups for DataService Studio, and shared resource groups. A single serverless resource group lets you perform operations such as data synchronization, task scheduling and execution, and API operation calls and management.

## Function Introduction

The features of exclusive resource groups for Data Integration are as follows:

-   They support data synchronization in complex network environments, such as cross-cloud platforms like Alibaba Finance Cloud and Alibaba Gov Cloud, across different Alibaba Cloud accounts, or with on-premises data centers.
    
-   Data Integration provides fast and stable data movement and synchronization between various disparate data sources. It supports a wide range of synchronization requirements, such as offline to real-time, single table to entire database, and full and incremental data. For more information, see [Supported data sources and synchronization solutions](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations).
    

**Note**

Exclusive resource groups for Data Integration guarantee the total number of concurrent threads for data synchronization instances, but not the number of concurrent data synchronization instances. To guarantee the latter, you must also purchase an exclusive resource group for scheduling.

## Limitations

-   The billing method for exclusive resource groups for Data Integration is **subscription**. You cannot delete or release resource groups before their subscriptions expire. After a subscription expires, the service is suspended and the resource group is released after a specific period.
    
-   Exclusive resource groups for Data Integration do not support cross-region use. For example, an exclusive resource group for Data Integration in the China (Shanghai) region can be used only by workspaces in the China (Shanghai) region.
    
-   Exclusive resource groups for Data Integration do not support access to Alibaba Cloud classic networks. If your data source is in a classic network, you must migrate the data source to a virtual private cloud (VPC) or enable public network access.
    

## Performance metrics

**Specifications**

**Maximum number of concurrent threads for offline synchronization**

4 vCPU 8 GiB

8

**Note**

-   If distributed processing is disabled, you can set the number of concurrent threads to 8.
    
-   If distributed processing is enabled, you cannot set the number of concurrent threads to 8.
    

8 vCPU 16 GiB

16

12 vCPU 24 GiB

24

16 vCPU 32 GiB

32

24 vCPU 48 GiB

48

**Specifications**

**Recommended resource specifications per task**

1 MySQL source database for real-time synchronization

4 vCPU 8 GiB

2 to 5 MySQL source databases for real-time synchronization

8 vCPU 16 GiB

6 or more MySQL source databases for real-time synchronization

12 vCPU 24 GiB

PolarDB-X source for real-time synchronization

12 vCPU 24 GiB

Kafka source for real-time synchronization

4 vCPU 8 GiB

Other types of single-table real-time tasks

4 vCPU 8 GiB

## Billing standards

The billing method for exclusive resource groups for Data Integration is **subscription**. You can purchase specifications that meet your business needs.

**Region**

**Specifications**

**Unit Price (USD/Month)**

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

Exclusive resource groups for Data Integration are essentially a group of Alibaba Cloud ECS instances, similar to other types of exclusive resource groups. When a data integration task runs, you must ensure that the resource group and the data source are connected over the network. You must also ensure that security settings, such as whitelists, do not block the network connection between the resource group and the data source.

After you purchase an exclusive resource group for Data Integration, you must attach it to a VPC. You can then choose a network connectivity solution based on the network environment of your data source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).

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
