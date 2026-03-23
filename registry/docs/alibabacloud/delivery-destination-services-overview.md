Cloud Config continuously and automatically evaluates the compliance of your resources in the cloud. You can specify an Alibaba Cloud service to receive the resource-related events at regular intervals. This allows you to monitor resource changes and perform operations on resources.

## Billing

Cloud Config offers a free-of-charge delivery service of resource-related events. However, you are charged by the Alibaba Cloud services that receive these events. The following list provides the topics that describe the pricing of the related Alibaba Cloud services:

-   For information about the pricing of Simple Log Service, see [Billable items](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   For information about the pricing of Object Storage Service (OSS), see [Overview](/help/en/oss/billing-overview#concept-n4t-mwg-tdb).
    
-   For information about the pricing of Simple Message Queue (formerly MNS), see [Billing](/help/en/mns/product-overview/billing-overview#concept-2028746).
    

## Scenarios

The delivery service is applicable to the following scenarios:

-   Query and analyze data of your resources.
    
    You can specify a Simple Log Service Logstore to which you want to deliver scheduled resource snapshots, resource change logs, compliance snapshots, and resource non-compliance events.
    
-   View and download data in the JSON format.
    
    You can specify an OSS bucket to which you want to deliver the scheduled snapshots and configuration change logs of resources.
    
-   Send event notifications.
    
    You can specify an SMQ topic to which notifications of resource change events and resource non-compliance events are sent.
    

## Limits

-   In single-account mode, you can add up to five deliveries.
    
-   In multi-account mode, you can create up to five deliveries for each account group.
