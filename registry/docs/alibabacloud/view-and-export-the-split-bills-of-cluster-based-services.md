The fees of cluster-based services, such as Container Service for Kubernetes (ACK) and E-MapReduce (EMR), are mainly incurred by resources, such as Elastic Compute Service (ECS) instances, Server Load Balancer (SLB) instances, and elastic IP addresses (EIPs), that are associated with clusters. You can use cluster tags to identify the fees of different clusters in split bills. This topic describes how to view and export split bills.

## Prerequisites

Service costs are allocated based on instructions in [Use tags to allocate costs for cluster-based services](/help/en/resource-management/tag/use-cases/use-tags-to-allocate-costs-for-cluster-based-services#task-2025484).

## Background information

The method for viewing the split bills of ACK is slightly different from that for viewing the split bills of EMR. Resources in an ACK cluster cannot automatically inherit custom tags from the cluster. However, the system adds a tag with the cluster ID to the resources to identify the relationships between the resources and the cluster. You need to view the split bills of ACK based on custom tags and cluster IDs.

## View split bills

On the [Split Bill](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill) page in the Expenses and Costs console, view the fees of resources associated with clusters by cost center and tag.

## Export split bills

You can export split bills in the CSV format to directly view fees by cost center in an Excel file, which is more efficient.

1.  On the [Split Bill](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill) page in the Expenses and Costs console, click **Export Billing Overview (CSV)** in the upper-right corner of the list.
    
2.  In the **Export Billing Overview (CSV)** dialog box, select **Current List** or **All Items** and click **OK**.
    
3.  On the **Export Record** page, wait until the export is complete and click **Download**.
    
4.  On your on-premises device, use Excel to open the downloaded bills, and use filter conditions or a pivot table to view the split bills.
