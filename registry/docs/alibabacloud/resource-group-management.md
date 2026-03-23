Resource groups provide the computing power for your DataWorks tasks -- data integration, task scheduling, and DataService Studio workloads all run on them. Starting June 10, 2024, serverless resource groups became the standard for all new users, replacing the legacy model of separate resource groups for each feature.

**Important**

Legacy resource groups are being phased out and are no longer available to new users.

-   **New users:** Start with serverless resource groups directly.
    
-   **Existing users:** [Upgrade your legacy resource groups](/help/en/dataworks/user-guide/switch-the-legacy-resource-group-to-a-serverless-resource-group) to serverless to benefit from on-demand scaling, unified billing, and VPC-based networking.
    

## Serverless resource groups

Serverless resource groups are the default resource type in DataWorks. Unlike legacy resource groups, which required separate purchases for scheduling, data integration, and DataService Studio, a single serverless resource group handles all three.

### Capabilities

-   **Unified computing:** One resource group for data integration, task scheduling, and DataService Studio. No separate purchases required.
    
-   **On-demand scaling:** Add or remove Compute Units (CUs) without affecting running tasks. The minimum purchase is 2 CUs, and you can scale in increments of 1 CU.
    
-   **Flexible billing:** Both pay-as-you-go and subscription billing methods are supported. Choose pay-as-you-go for variable workloads or subscription for steady-state usage.
    
-   **VPC-based networking:** Each serverless resource group is bound to your VPC, giving you full control over network policies and security isolation.
    
-   **Custom runtime environments:** [Custom images](/help/en/dataworks/user-guide/custom-image) let you define custom runtime environments for your tasks.
    

### Billing

Serverless resource groups are billed in Compute Units (CUs). Each CU provides approximately 1-core CPU and 4 GiB memory.

**Example: serverless vs. legacy cost comparison**

Scenario: 20 daily MySQL-to-MaxCompute sync jobs, each running for 1 hour and consuming 1 CU.

**Approach**

**Calculation**

**Daily cost**

**Serverless (pay-as-you-go)**

20 tasks x 1 CU x 1 hour x USD 0.077399/CU-hour

USD 1.54798

**Legacy exclusive (subscription)**

Minimum spec: 4 vCPUs, 8 GB memory (runs 24/7)

~USD 2.541

With pay-as-you-go, no fees are incurred for the remaining 23 hours when no tasks are running. In this scenario, the serverless resource group saves approximately 40% on costs.

## Serverless vs. legacy resource groups

Legacy resource groups include exclusive and public options, each tied to a specific feature (data integration, scheduling, or DataService Studio).

**Feature**

**Serverless resource group**

**Legacy resource groups**

**Scope**

Works with all DataWorks features

Requires separate purchases per feature

**Billing**

Pay-as-you-go and subscription

Exclusive: subscription only. Public: pay-as-you-go only

**Scaling**

Scale CUs seamlessly -- running tasks are not affected

Scaling (upgrading/downgrading specs or adding/removing nodes) disrupts running tasks

**Minimum purchase**

2 CUs; scale in 1-CU increments

One node with 4 vCPUs and 8 GB memory; scale in full-node increments

**Network security**

Bound to your VPC with full network control

DataWorks-managed public endpoints shared across tenants

**Development status**

Actively developed as the standard resource type

Being phased out; no new features planned

## Legal and regulatory matters

You are responsible for all code that runs on your resource groups. Make sure your usage complies with applicable laws and regulations.

## Next steps

-   [Use a serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) -- Set up and start using serverless resource groups.
    
-   [Billing for serverless resource groups](/help/en/dataworks/new-resource-group-overview) -- Understand pricing details, CU pricing tiers, and billing periods.
    
-   [Network connectivity solutions](/help/en/dataworks/user-guide/network-connectivity-1/) -- Connect your serverless resource group to data sources across VPCs, regions, or on-premises networks.
