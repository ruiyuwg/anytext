DataService Studio develops APIs by business process. DataService Studio also organizes and manages APIs, functions, and workflows based on business processes. Before you can create an API, you must create a business process. This topic describes how to create and manage business processes.

## Prerequisites

The [API Gateway](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A%2F%2Fcommon-buy-intl.alibabacloud.com%2F%3FcommodityCode%3Dapigateway_intl#/open) service is activated, and an API group is created.

## Background information

DataWorks allows you to organize different types of resources in a business process. This helps you analyze data by business. Each business process contains APIs, functions, and workflows.

## Create a business process

1.  Go to the DataService Studio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Analysis and Service** > **DataService Studio**. On the page that appears, select the desired workspace from the drop-down list and click **Go to DataService Studio**.
    
2.  In the **Service Development** pane, move the pointer over the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8871135071/p698185.png) icon and select **Create Business Process**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3896583371/p698186.png)
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    The name of the business process.
    
    -   The name must be unique in the workspace to which the business process belongs.
        
    -   The name can contain letters, digits, and underscores (\_).
        
    -   The name must start with a letter.
        
    -   The name must be 4 to 50 characters in length.
        
    
    **API Group**
    
    The API group to which the APIs in the business process belong. An API group is the unit of API management in API Gateway. Each API group maps an API product in Alibaba Cloud Marketplace.
    
    You can create an API group in the [API Gateway](https://apigateway.console.alibabacloud.com/#/cn-shanghai/groups/list) console.
    
    **Description**
    
    The description of the business process, which can be up to 180 characters in length.
    
3.  Click **OK**.
    
    After the business process is created, you can view it in the business process list.
    

## Modify a business process

1.  In the **Service Development** panel, right-click the business process that you want to modify and select **Modify attributes**.
    
    ![修改属性](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3896583371/p132517.png)
    
2.  In the **Edit business process** dialog box, modify the **Name** and **Description** parameters based on your requirements.
    
    ![编辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3896583371/p134219.png)
    
    **Note**
    
    You cannot modify the **Creator** or **API Group** parameter of a business process.
    
3.  Click **OK**.
    

## Delete a business process

1.  In the **Service Development** panel, right-click the business process that you want to delete and select **Delete**.
    
    ![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3896583371/p134211.png)
    
2.  In the **Notes** message, click **OK**.
    
    **Note**
    
    -   You can delete only business processes that do not contain objects such as folders, APIs, functions, or workflows.
        
    -   If you want to delete a business process that contains such objects, delete the objects before you delete the business process.
