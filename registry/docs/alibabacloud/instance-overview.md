An instance is the smallest unit that provides compute services for your business. Different instance types offer different compute capabilities. This topic describes the ENS-supported instance families, their features, available instance types, and scenarios.

## ENS instance families

**Family**

**Definition**

**Specifications**

**Supported storage**

**Supported networks**

**Supported billing methods**

**Scenarios**

X86 Compute

Offers high performance, stable compute capabilities, and balanced network performance. Suitable for enterprise scenarios requiring high business stability.

General-purpose X86 virtual machine instance types:

-   Compute-optimized: Processor-to-memory ratio of 1:2
    
-   General-purpose: Processor-to-memory ratio of 1:4
    
-   Memory-optimized: Processor-to-memory ratio of 1:8
    

-   ultra disk
    
-   All-flash cloud disk
    
-   Local disk
    

-   VPC
    
-   classic network
    

-   subscription
    
-   pay-as-you-go
    

-   General enterprise applications
    
-   Audio and video transcoding applications
    
-   Game servers
    
-   Scenarios with high packet forwarding rates
    

X86 Bare Metal

Combines the advantages of physical servers and cloud servers. It offers powerful and stable compute capabilities without virtualization overhead. Suitable for deploying traditional non-virtualized applications to the cloud.

General-purpose X86 bare metal instance types

Local disk

VPC network

subscription

-   Requires direct access to physical resources
    
-   Compatible with third-party hypervisors
    
-   High packet forwarding rate scenarios
    

Heterogeneous Computing

Heterogeneous computing primarily includes Elastic GPU Service instances. These instances use specialized hardware to serve specific business scenarios, offering significantly higher cost-effectiveness and efficiency than standard cloud servers.

Heterogeneous computing instance types

-   Ultra Disk
    
-   All-flash cloud disk
    

VPC

-   subscription
    
-   pay-as-you-go
    

-   Cloud gaming
    
-   Graphic Computing Service
    

## Instance specifications and metrics

**Note**

-   Instance specification metrics are verified in a pure forwarding test environment. In actual business scenarios, instance performance may vary due to factors such as instance load type, packet length, long-lived and short-lived connections, image version, and networking model. Perform stress testing to understand instance performance and select the appropriate instance type.
    
-   C refers to vCPU, and G refers to memory. For example, Compute-optimized 1C2G means 1 vCPU core and 2 GB of memory.
    
-   Network bandwidth capability and packet forwarding refer to the total capability of all network interface controllers (NICs) for that instance type.
    

**Specifications**

**Name**

**Network bandwidth capability (Gbps)**

**Packet forwarding (PPS)**

**Queue count**

ens.sn1.tiny

Compute-optimized 2C4G

Up to 1

Up to 300,000

2

ens.sn1.small

Compute-optimized 4C8G

Up to 1.5

Up to 500,000

4

ens.sn1.medium

Compute-optimized 8C16G

Up to 2

Up to 800,000

8

ens.sn1.xmedium

Compute-optimized 12C24G

Up to 2.5

Up to 900,000

12

ens.sn1.large

Compute-optimized 16C32G

Up to 3

Up to 1,000,000

16

ens.sn1.mlarge

Compute-optimized 24C48G

Up to 4.5

Up to 1,500,000

16

ens.sn1.xlarge

Compute-optimized 32C64G

Up to 6

Up to 2,000,000

16

ens.sm1.tiny

General-purpose 2C8G

Up to 1

Up to 300,000

2

ens.sm1.small

General-purpose 4C16G

Up to 1.5

Up to 500,000

4

ens.sm1.medium

General-purpose 8C32G

Up to 2

Up to 800,000

8

ens.sm1.large

General-purpose 16C64G

Up to 3

Up to 1,000,000

16

ens.sm1.mlarge

General-purpose 24C96G

Up to 4.5

Up to 1,500,000

16

ens.sm1.xlarge

General-purpose 32C128G

Up to 6

Up to 2,000,000

16

ens.se1.tiny

Memory-optimized 2C16G

Up to 1

Up to 300,000

2

ens.se1.small

Memory-optimized 4C32G

Up to 1.5

Up to 500,000

4

ens.se1.medium

Memory-optimized 8C64G

Up to 2

Up to 800,000

8

ens.se1.large

Memory-optimized 16C128G

Up to 3

Up to 1,000,000

16

## Instance statuses

You can query instance status using the ENS console or by calling the [DescribeInstances](/help/en/ens/developer-reference/api-ens-2017-11-10-describeinstances) API. Instance statuses are categorized as stable or intermediate. An intermediate status is a temporary state an instance is in before reaching a stable state. If an instance remains in an intermediate state for an extended period, it indicates an exception.

The following table lists possible instance statuses during an instance's lifecycle:

**Instance console status**

**Instance API status**

**Status**

**Status description**

Creating

Creating

Intermediate

A newly created instance is about to start.

Running

Running

Steady state

The instance is running.

Stopped

Stopped

Stable state

The instance is stopped.

Expired

Expired

Steady State

A subscription instance has expired, or a pay-as-you-go instance is stopped due to overdue payment. The instance will be released soon.

Starting

Starting

Intermediate

An existing instance is starting or restarting and will soon enter the Running state.

Stopping

Stopping

Intermediate

The instance is stopping and will soon enter the Stopped state.

Releasing

Releasing

Intermediate

The instance is being released and will soon be released.

Image downloading

ImageDownloading

Intermediate

When creating or resetting an instance, if the node does not have the specified image file, this status indicates that the image is being downloaded to the node. After the download completes, the instance enters the Creating state.

Transferring

Transferring

Intermediate

The instance is being migrated. After migration, it enters the Running state.

Resetting

Resetting

Intermediate

The instance is being reset.

Instance status changes during instance management:

-   Create an instance: The instance first enters the Starting state, then the Running state. At this point, the instance can accept access. For example, connect to the instance to manage operating system settings, or access a website deployed on the instance using a browser.
    
-   Stop an instance: The instance first enters the Stopping state, then the Stopped state. Before performing some operations, stop the instance, such as changing the operating system or upgrading/downgrading the instance type.
    
-   Start an instance: The instance first enters the Starting state, then the Running state.
    
-   Restart an instance: The instance first enters the Stopping state, then the Starting state, and finally the Running state. After performing some operations, restart the instance for them to take effect.
    
-   Release an instance: You can only release instances in the Stopped state. Directly releasing unexpired subscription instances is not supported. To release a subscription instance before its expiration, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex). After an instance is released, its instance ID, static public IP address, system disk, and data disks configured to be released with the instance are also released and cannot be recovered. Independent resources, such as elastic IP addresses (EIPs) and data disks not configured to be released with the instance, are automatically detached. Exercise caution when releasing instances. To prevent accidental instance release, enable release protection for the instance.
