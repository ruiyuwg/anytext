After you purchase a reserved instance, you can view its details, such as the instances eligible for discounts and its normalization factor, to determine whether it is a good match. You can also view the bill details, utilization, and coverage to assess the performance of the reserved instance.

## **View matching instances**

After you purchase a reserved instance, you can use the deduction prediction feature to determine which of your pay-as-you-go instances it can match.

1.  Go to [ECS console - Reserved Instances](https://ecs.console.alibabacloud.com/reservedInstance/region).
    
2.  In the upper-right corner of the **Reserved Instances** list, click **View Reserved Instances**.
    
3.  Select the **Region and Zone** of the reserved instance.
    
4.  Find the reserved instance and click **View the matching instances** in the column on the right.
    
    **Note**
    
    -   The deduction prediction feature shows instances that meet the matching requirements. This does not guarantee that their bills will be offset. The actual deduction is subject to the final bill.
        
    -   If a pay-as-you-go instance is created by E-MapReduce (EMR), Container Service for Kubernetes (ACK), or Elastic Container Instance (ECI), the deduction prediction feature cannot display the instance. However, this does not affect the actual deduction.
        
    

## **View the normalization factor**

The normalization factor represents the computing power of an instance and usually depends on the number of vCPUs. **Computing power of a reserved instance = Normalization factor of the instance type × Number of instances in the reserved instance.**

Viewing the computing power of a reserved instance is useful for the following reasons:

-   When you split or merge reserved instances, you must ensure that the total computing power remains the same. This helps you verify that the operation meets the requirements.
    
-   When you use a regional reserved instance to cover pay-as-you-go instances of different sizes, this helps you assess the usage of the reserved instance.
    

1.  Go to [ECS console - Reserved Instances](https://ecs.console.alibabacloud.com/reservedInstance/region).
    
2.  In the upper-right corner of the **Reserved Instances** list, click **View Normalization Factors**.
    
3.  You can filter by instance family to view the normalization factor for each instance type.
    
    You can also click **Download** to save the normalization factor table to your computer for offline viewing.
    

## View usage details

You can view the bill details of a reserved instance to understand how it covers the costs of your pay-as-you-go instances.

1.  Go to [ECS console - Reserved Instances](https://ecs.console.alibabacloud.com/reservedInstance/region).
    
2.  In the **Actions** column of the reserved instance list, click **View Bills**.
    
    **Note**
    
    You can also click **View Usage Details** in the upper-right corner of the reserved instance list to view the deduction details for all reserved instances in the current region.
    
3.  On the **Details** tab, you can view the deduction details for the current reserved instance, such as the offset factor, the account that benefits from the deduction, and the covered instance.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6067633671/p1027088.png)
    

## **View usage**

You can check the utilization of a reserved instance to determine if it is underused and the coverage to determine whether it effectively reduces your resource costs. Based on the utilization and coverage, you can optimize your reserved instances.

-   Utilization is the percentage of your purchased reserved instances that are applied to cover costs. Higher utilization indicates better performance.
    
-   Coverage is the percentage of your total instance usage that is covered by reserved instances. Higher coverage indicates that reserved instances are effectively helping you reduce costs.
    

1.  Go to [ECS console - Reserved Instances](https://ecs.console.alibabacloud.com/reservedInstance/region).
    
2.  In the reserved instance list, click **View Bills** in the **Actions** column.
    
3.  On the **Usage** and **Coverage** tabs, you can view the utilization and coverage of the current reserved instance.
    
    #### **Usage**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6067633671/p1027083.png)
    
    #### **Coverage**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5866283371/p862901.png)
    

## **References**

You can call the [DescribeReservedInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describereservedinstances) API operation to query the details of your purchased reserved instances.
