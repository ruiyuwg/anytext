Some Alibaba Cloud services let you upgrade the specifications of a subscription instance if they no longer meet your business needs. You can do so in the console of each service.

## Calculation logic for upgrade fees

The upgrade fee is calculated based on the price difference between the new and original specifications for the relevant subscription term. The formula is as follows:

Upgrade fee = (List price of new specifications × Remaining duration of new order - List price of original specifications × Remaining duration of original order) × Discount factor

Where:

-   **Remaining duration of new order**: The period from the time the upgrade order is placed to the expiration time of the new order.
    
-   **Remaining duration of original order**: The period from the time the upgrade order is placed to the expiration time of the original order.
    
-   **Discount factor**: The system automatically calculates the optimal discount based on the new specifications and the subscription duration.
    

**Note**

The service validity period following an upgrade depends on the service. For most services, the expiration date does not change. For others, you must select a new service duration during the upgrade. The terms, validity period, and costs shown on the upgrade page are final.

**Example**

**Step**

**Formula logic**

**Numerical calculation and result**

On January 1, 2026, you purchase a one-year subscription for an Elastic Compute Service (ECS) instance with 4 vCPUs and 8 GB of memory. The list price is USD 120 per month, with no discount applied.

On July 1, 2026, you upgrade the instance to 8 vCPUs and 16 GB of memory. The expiration date remains the same. The list price for the new specifications is USD 300 per month, and a 15% discount is applied (discount factor of 0.85).

New specs

List price × Remaining duration

USD 300 / (30 days × 24 hours) × (184 days × 24 hours) = USD 1,840

Original specs

List price × Remaining duration

USD 120 / (30 days × 24 hours) × (184 days × 24 hours) = USD 736

Final fee

(New total - Original total) × Discount factor

(USD 1,840 - USD 736) × 0.85 = USD 938.40

On May 1, 2026, you purchase a one-year Object Storage Service (OSS) Resource Plan for 500 GB in the China (Hangzhou) Region. The list price is USD 365 per year, with no discount applied.

On August 1, 2026, you upgrade the resource plan to 1 TB and renew the validity period for one year (365 days) from the upgrade date. The list price for the new specifications is USD 730 per year, with no discount applied.

New specs

List price × Remaining duration

USD 730 / (365 days × 24 hours) × (365 days × 24 hours) = USD 730

Original specs

List price × Remaining duration

USD 365 / (365 days × 24 hours) × (273 days × 24 hours) = USD 273

Final fee

(New total - Original total) × Discount factor

(USD 730 - USD 273) × 1 = USD 457

## **Payment rules for upgrade orders**

The upgrade fee is calculated from the time you place the order, but the validity period of the upgraded instance starts only after you complete the payment.

To start using the upgraded service as early as possible, complete the payment immediately after placing the order.

**Example:**

You have an instance that expires on January 30. You place an upgrade order on January 10 and pay for it on January 11. The fee and service period are as follows:

-   The upgrade fee is calculated for the period from January 10 to January 30.
    
-   The validity period of the upgraded instance is from January 11 to January 30.
    

If you're not able to pay right away, consider canceling the order and placing a new one later to avoid unnecessary charges.

## **Services that support resource upgrades**

For services not listed below, refer to their product documentation to determine if upgrades are available.

**Service category**

**Service/Item**

**Related documentation**

Elastic Compute

-   ECS (Subscription)
    
-   Simple Application Server
    

-   [Change the instance types of subscription instances](/help/en/ecs/user-guide/change-the-instance-types-of-subscription-instances)
    
-   [Upgrade a Simple Application Server](/help/en/simple-application-server/user-guide/upgrade-a-simple-application-server)
    

Databases

-   ApsaraDB RDS (Subscription)
    

-   [Change the specifications of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance)
    

Networking

-   Elastic IP Address (EIP) (Subscription)
    

-   [Modify the configuration of a subscription EIP](/help/en/eip/modify-the-configuration-of-a-subscription-eip)
    

Storage

-   OSS Resource Plan
    
-   File Storage NAS Resource Plan
    

-   [Upgrade an OSS resource plan](/help/en/oss/upgrade-resource-plans)
    
-   [Upgrade a NAS resource plan](/help/en/nas/product-overview/upgrade-a-resource-plan)
