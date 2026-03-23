On the Resource Pool page in the Platform for AI (PAI) console, you can create a resource group, purchase cloud-native resources, and use the resource group to manage the purchased resources in a centralized manner.

## Features

### **Create a resource group and purchase resources**

You can create a resource group and purchase the following types of cloud-native resources:

-   [Create resource group and purchase Lingjun resources](/help/en/pai/user-guide/create-resource-quotas#7bada0b07dl8g)
    
-   [Create resource group and purchase general computing resources](/help/en/pai/user-guide/create-and-manage-general-training-resources/)
    

### **Manage resources**

Log on to the PAI console and go to the [Resource Pool](https://pai.console.alibabacloud.com/?regionId=cn-shanghai&spm=5176.14066474.J_5834642020.4.449b754cIkol94#/computing-resource/group/ECS) page. Click the name of a resource group to view and manage your purchased resources. The system splits orders based on the node instances that you purchased to facilitate order management (such as renewal and unsubscription operations) for each node.

You can also add tags to node orders to implement cost allocation based on order tags, see [View billing details](/help/en/pai/view-bills-and-usage-details#93774b32c6zsx).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8087579471/p802724.png)

## **Billing description**

AI computing resources use the subscription method (pay before use). When you purchase resources, the system charges fees based on the node specifications, number of nodes, and subscription duration. For more information, see [Billing of AI computing resources](/help/en/pai/ai-computing-resource-billing-description).

## **What to do next**

After you create a resource group and purchase resources, you can allocate the resources to one or more resource quotas for AI development and training. For more information, see [Overview](/help/en/pai/user-guide/resource-quota-overview).
