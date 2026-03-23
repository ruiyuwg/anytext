When you change the configurations of a cluster, the system calculates the related fees based on the billing method of the cluster and the configuration changes.

## **Usage notes**

After a [manual](/help/en/polardb/polardb-for-mysql/user-guide/manually-upgrade-or-downgrade-a-polardb-cluster#task-1580301) or [automatic](/help/en/polardb/polardb-for-mysql/user-guide/automatically-change-specifications/) configuration change, the billing for the cluster is adjusted accordingly to reflect the new configuration.

## Subscription

**Configuration change**

**Payment or refund**

Upgrade specifications or add nodes

Payment = Total fee of the new configuration for the remaining subscription period (Monthly price of the new configuration/30/24 × Unused hours) - Total fee of the original configuration for the remaining subscription period (Monthly price of the original configuration/30/24 × Unused hours).

For example, the monthly price of the new configuration is USD 14,400, the monthly price of the original configuration is USD 7,200, and the remaining subscription period is 50 days. The payment is calculated by using the following formula: (USD 14,400/30/24 × 50 × 24) - (USD 7,200/30/24 × 50 × 24) = USD 12,000.

Downgrade specifications or delete nodes

Refund = Total fee of the original configuration for the remaining subscription period (Monthly price of the original configuration/30/24 × Unused hours) - Total fee of the new configuration for the remaining subscription period (Monthly price of the new configuration/30/24 × Unused hours).

For example, the monthly price of the old configuration is USD 1,000, the monthly price of the new configuration is USD 800, and the remaining subscription period is 30 days. The refund is calculated by using the following formula: (USD 1000/30/24 × 30 × 24)-(800/30/24 × 30 × 24) = USD 200.

**Note**

You can receive a refund for a downgraded specification of a subscription cluster. However, fees for the entire cluster cannot be refunded. If you want to apply for a refund for the entire cluster, [submit a ticket](/help/en/cloud-migration-guide-for-beginners/latest/contact-us). If your application is approved, your subscription cluster is frozen and is deleted after 14 days.

## Pay-as-you-go

You are charged for pay-as-you-go clusters by hour. After you change the configurations of a pay-as-you-go cluster, you are charged for the cluster on an hourly basis based on the price of the new configurations.

## Serverless

You cannot manually change the configurations of a serverless cluster. The compute node resources of a serverless cluster are dynamically adjusted based on changes in system workloads.

**Note**

You can adjust the scaling policy for cluster resources by modifying the serverless settings. For more information, see [Set a scaling policy for serverless cluster resources](/help/en/polardb/polardb-for-mysql/user-guide/set-the-scale-up-strategy-of-serverless-cluster).

## FAQ

### **Why is the refund that I received less than the refund that I calculated for the downgraded specifications of my cluster?**

The preceding issue may be caused due to one of following reasons:

-   You are offered a discount for the original specifications of the cluster. For example, you are offered an annual discount of 15% when you purchase the cluster. This means that you actually pay USD 850 for the cluster whose original price is USD 1,000. The refund for the downgraded specifications of the cluster is calculated based on USD 850.
    
-   You use a voucher for the original specifications. For example, you use a voucher when you purchase the cluster and actually pay USD 500 for the cluster. The refund for the downgraded specifications of the cluster is calculated based on USD 500.
    

## References

-   ### **Manually change the cluster specifications**
    
    You can manually change the cluster specifications to meet your business requirements. For more information, see [Manually change the specifications of a cluster](/help/en/polardb/polardb-for-mysql/user-guide/manually-upgrade-or-downgrade-a-polardb-cluster#task-1580301) and [Add or remove read-only nodes](/help/en/polardb/polardb-for-mysql/user-guide/add-or-remove-read-only-nodes#task-1580301).
    
-   ### **Automatically change the cluster specifications**
    
    PolarDB for MySQL provides multiple automatic specifications change (auto scaling) methods. You can configure relevant scaling parameters to enable elastic scaling of cluster specifications. For more information, see [Automatically change the specifications of a cluster](/help/en/polardb/polardb-for-mysql/user-guide/automatically-change-specifications/).
    

.
