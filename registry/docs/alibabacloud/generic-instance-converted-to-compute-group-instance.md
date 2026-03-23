Compared with general-purpose instances in Hologres, virtual warehouse instances allow you to isolate loads in a finer-grained manner, manage permissions more flexibly, and manage connections in a more convenient way. You can separately configure parameters for each virtual warehouse. You can change the instance type from general-purpose to virtual warehouse for a Hologres instance based on your business requirements to improve system performance and management efficiency.

## **Limitations**

-   You can change the instance type from general-purpose to virtual warehouse only for Hologres instances of V2.0.40 or later.
    
    **Note**
    
    If the version of your Hologres instance is earlier than V2.0.40, manually upgrade your Hologres instance in the Hologres console or join the DingTalk group for Hologres to contact technical support. For more information about how to manually upgrade your Hologres instance in the Hologres console, see the "Manual upgrade" section of the [Instance upgrades](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) topic. For more information about how to obtain technical support, see [Obtain online support for Hologres](/help/en/hologres/support/obtain-online-support-for-hologres#concept-2379947).
    
-   You cannot change the instance type to virtual warehouse for a general-purpose Hologres instance with 8 CPU cores.
    
    **Note**
    
    If your Hologres instance is a general-purpose instance with 8 CPU cores, you can change the specifications of the instance. For more information, see [Instance configurations](/help/en/hologres/user-guide/instance-configurations).
    
-   You cannot change the instance type to virtual warehouse for read-only secondary instances. For more information about how to change the instance type for a primary general-purpose instance that is associated with read-only secondary instances, see the [Change the instance type](#7a08550d9chwq) section of this topic.
    
-   You cannot change the instance type from virtual warehouse to general-purpose for an instance.
    

## Conversion methods

Two methods are available: normal conversion or hot conversion:

**Important**

Service downtime may occur during normal instance conversion. The duration of the downtime can vary based on the data volume and is not covered by our SLA.

**Conversion method**

**Conversion duration**

**Instance status**

**Impact on jobs**

**Notes**

Normal conversion

(with service downtime)

Typically 10 to 20 minutes

The service is stopped and unavailable during the conversion.

-   **Stop Flink data ingestion jobs,** and restart them after the conversion to avoid data losses. For more information, see [Stop a job](/help/en/flink/realtime-flink/user-guide/cancel-a-deployment).
    
-   **You do not need to pause DataWorks data integration tasks or Blink jobs.** Failovers are automatically triggered, recovering the tasks or jobs based on the failover policy. Set the number of failover retries to 10 or more. For more information, see [O&M for real-time sync tasks](/help/en/dataworks/user-guide/maintenance-for-real-time-synchronization-nodes#task-2473945) and [Write data to Hologres from real-time computing (Blink)](/help/en/hologres/user-guide/hologres-result-table).
    

To convert the instance type, submit a ticket or contact technical support as illustrated in [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).

Note:

-   The conversion duration depends on the instance type, data volume, and number of tables. The duration may be longer in special cases. Perform the conversion during off-peak hours to minimize the impact on your business.
    
-   The instance type conversion does not change the instance endpoint. However, the IP address of the endpoint might change.
    

Hot conversion

Typically 10 to 30 minutes

During the conversion, the service is in a read-only state. The query service is not affected, but the write service is unavailable.

## **Change the instance type**

### General-purpose instances

A general-purpose instance has only one endpoint. After converting it to a virtual warehouse instance, the endpoint will remain unchanged, and metadata information such as user permissions within the instance will also remain the same.

To convert a general-purpose instance to a virtual warehouse instance, you only need to submit a ticket or [join the Hologres DingTalk group](/help/en/hologres/support/obtain-online-support-for-hologres) to apply for a conversion and provide the instance ID and operation time. Hologres O&M engineers will convert the instance to a virtual warehouse instance in the background. For more information about the subsequent business isolation operations, see [(Recommended) Load isolation](#7cc9aa6668mr3).

### **Primary/Secondary instances (with the primary instance as a general-purpose instance)**

Hologres primary/secondary instances adopt a multi-endpoint load isolation architecture, while virtual warehouse instances use a single-endpoint load isolation architecture.

To convert a primary instance to a virtual warehouse instance, you must first migrate the query traffic of the associated read-only secondary instances to the primary instance and then disassociate or release the read-only secondary instances. For more information, see [Instances](/help/en/hologres/user-guide/instance-list). This way, the primary instance becomes a regular general-purpose instance. Then, you can submit a ticket or [join the Hologres DingTalk group](/help/en/hologres/support/obtain-online-support-for-hologres) to apply for a conversion and provide the instance ID and operation time. Hologres O&M engineers will convert the instance to a virtual warehouse instance in the background.

**Note**

We recommend that you perform the following steps before changing the instance type.

A primary instance associated with two read-only secondary instances is used as an example. The primary instance has 64 CUs, and each of the read-only secondary instance has 32 CUs.

1.  Increase the computing resources of the primary instance to 128 CUs, equivalent to the total amount of computing resources of the primary instance and read-only secondary instances.
    
2.  Migrate the query traffic of the read-only secondary instances to the primary instance.
    
3.  Disassociate or release the read-only secondary instances. This way, the primary instance becomes a regular general-purpose instance. For more information about the subsequent business isolation operations, see [(Recommended) Load isolation](#7cc9aa6668mr3).
    

### **Instance parameter changes**

The following table describes the impacts on core parameters after the instance type is changed.

**Parameter**

**Before the change**

**After the change**

**Instance Type**

General-purpose

Virtual warehouse

**Number of Gateway Nodes**

N/A

Supported. The default value is calculated based on the following formula: Number of gateways = Number of compute units (CUs)/32. Valid values: 2 to 8.

You can change the number of gateway nodes based on your business requirements. For more information, see [Manage virtual warehouses](/help/en/hologres/user-guide/manage-virtual-warehouses).

**Computing Resources**

Supported

Supported. The amount of computing resources remains unchanged. By default, all computing resources are allocated to the virtual warehouse `init_warehouse`.

**Note**

The endpoint of an instance remains unchanged after the instance type is changed. However, the IP address of the endpoint may be changed.

## **What to do next**

After the instance type is changed, you can perform the following operations:

### **(Important) Alert rule configuration**

If you change the instance type from general-purpose to virtual warehouse for an instance, the instance in the CloudMonitor console is moved from the **Hologres standard instance** tab to the **Hologres warehouse instance** tab. The directory update latency in the CloudMonitor console is approximately 10 minutes.

-   If no alert rules are configured for the instance, we recommend that you configure alert rules for key business metrics of the instance. For more information about how to configure alert rules, see the [Configure alert rules](/help/en/hologres/user-guide/cloudmonitor#fcc875072cdga) section of the "CloudMonitor" topic.
    
-   If alert rules have been configured for the instance, reconfigure alert rules for the instance after the instance type change on the **Hologres warehouse instance** tab in the CloudMonitor console. You can also configure new alert rules based on the metrics of the virtual warehouse instance, such as gateway-related metrics.
    

### **(Recommended) Load isolation**

-   Identify business scenarios and isolate loads. For more information, see [Manage virtual warehouses](/help/en/hologres/user-guide/manage-virtual-warehouses).
    
-   Grant permissions to users and allocate resources. For more information, see [Manage permissions on virtual warehouses](/help/en/hologres/user-guide/grant-permissions-on-virtual-warehouses).
    
-   Grant permissions on table groups that are loaded to virtual warehouses. For more information, see [Manage data permissions](/help/en/hologres/user-guide/grant-permissions-on-table-groups-that-are-loaded-to-virtual-warehouses).
    

To prevent impacts on your business during the change, we recommend that you scale up and then scale down your Hologres instance to isolate your loads. In this example, a general-purpose instance with 128 CUs is used. To change the instance type and isolate loads for the instance, perform the following operations:

1.  Contact O&M engineers of Hologres to change the instance type.
    
    After the instance type is changed, the amount of reserved computing resources of the virtual warehouse instance is 128 CUs. All 128 CUs are allocated to the default `init_warehouse` virtual warehouse.
    
2.  Scale up the instance based on your business requirements. For more information, see the [Scale up a virtual warehouse](/help/en/hologres/user-guide/manage-virtual-warehouses#7271c2d0f4rs3) section of the "Manage virtual warehouses" topic.
    
    For example, you increase the reserved computing resources of the instance to 192 CUs, and the amount of unallocated computing resources is 64 CUs. During the scale-up, you can use the default virtual warehouse `init_warehouse` as expected.
    
3.  Create multiple virtual warehouses based on your business requirements. For more information, see the [Create a virtual warehouse](/help/en/hologres/user-guide/manage-virtual-warehouses#50646a30f4wxd) section of the "Manage virtual warehouses" topic.
    
    For example, you can create a virtual warehouse named `warehouse_olap` that has 32 CUs for online analytical processing (OLAP) and a virtual warehouse named `warehouse_serving` that has 32 CUs for online services.
    
4.  Perform operations such as [granting permissions to users](/help/en/hologres/user-guide/grant-permissions-on-virtual-warehouses) and [granting permissions on table groups that are loaded to virtual warehouses](/help/en/hologres/user-guide/grant-permissions-on-table-groups-that-are-loaded-to-virtual-warehouses), and switch the related business traffic to the created virtual warehouses.
    
5.  Scale down the instance based on your business requirements. For more information, see the [Scale down a virtual warehouse](/help/en/hologres/user-guide/manage-virtual-warehouses#7930e740f49tn) section of the "Manage virtual warehouses" topic.
    
    For example, you can decrease the computing resources of the virtual warehouse `init_warehouse` to 64 CUs. During the scale-down, you can use other two virtual warehouses as expected. Then, you can decrease the reserved computing resources of the instance from 192 CUs to 128 CUs. During the scale-down, you can use all virtual warehouses as expected.
    
6.  Complete the load isolation.
    

### **(Optional) Enable features**

You can separately enable the following features for a single virtual warehouse based on your business requirements:

-   Time-specific scaling of virtual warehouses. For more information, see [Scheduled scaling (beta)](/help/en/hologres/user-guide/scheduled-scaling-of-virtual-warehouses).
    
-   Serverless Computing. For more information, see [Serverless Computing](/help/en/hologres/user-guide/serverless-computing-overview/).
    

## **References**

For information about the architecture of virtual warehouse instances, see [Architecture](/help/en/hologres/user-guide/architecture-of-virtual-warehouses).
