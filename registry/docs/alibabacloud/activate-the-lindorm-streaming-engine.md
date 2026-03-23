This topic describes how to activate the streaming engine in the Lindorm console.

## **Prerequisites**

You have [created a Lindorm instance](/help/en/lindorm/user-guide/create-an-instance-1).

## **Procedure**

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster).
    
2.  In the upper-left corner of the page, select the region where the instance is deployed.
    
3.  On the **Instances** page, click the ID of the target instance or click **View Instance Details** in the **Actions** column for the instance.
    
4.  In the navigation pane on the left, choose **Stream Engine**.
    
5.  Click **Activate Now**.
    
6.  In the Create Resource Group dialog box, configure **Resource Group Name**, stream engine node specifications (**Worker CU**), and the number of nodes (**Worker NUM**), and then click **Create**.
    
    **Note**
    
    The stream engine supports multi-resource group isolation. After you activate the engine, you can create more resource groups on the **Cluster Management** tab.
    

After the stream engine is activated, check the instance status in the [Lindorm console](https://lindorm.console.alibabacloud.com/cluster). The instance is ready for use when its status changes to **Running**.
