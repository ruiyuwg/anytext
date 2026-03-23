This topic describes how to view, delete, move, and clone APIs, perform batch operations, and search API code.

## View an API

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Analysis and Service** > **DataService Studio**. On the page that appears, select the desired workspace from the drop-down list and click **Go to DataService Studio**.
    
2.  On the **Service Development** page, expand the **Business Flow** > **API** folder where the target API is located.
    
3.  Right-click the name of the API and select **Details**.
    
    **Note**
    
    You can right-click an API and select **Details** only if the API is published. If the API is not published, you can click **Properties** in the right-side pane of the API configuration page to view its basic information.
    

## Clone an API

You can create a copy of an API and save it to a specified path in the directory tree.

1.  On the **Service Development** page, expand the **Business Flow** > **API** folder where the target API is located.
    
2.  Right-click the name of the API and select **Clone**.
    
3.  In the **Clone API** dialog box, configure the parameters.
    
    ![Clone API](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5309673371/p132526.png)
    
    **Parameter**
    
    **Description**
    
    **API Name**
    
    The name can contain Chinese characters, letters, digits, and underscores (\_). It must start with a Chinese character or a letter. The name must be 4 to 50 characters in length.
    
    **API Path**
    
    The path where the API is stored, such as /user.
    
    The API path can contain letters, digits, underscores (\_), and hyphens (-). It must start with a forward slash (/) and be no more than 200 characters in length.
    
    **Description**
    
    Add a description for the cloned API.
    
    **Destination Folder**
    
    The folder where the API is stored.
    
4.  Click **Confirm**.
    

## Delete an API

You can delete only unpublished APIs. If an API is published, you must unpublish it before you can delete it.

1.  Unpublish the API if it is published. This step is optional.
    
    If your API is not published, you can skip this step.
    
    1.  On the **Service Development** page, click **Service Management** in the top menu bar. The **API Management** page appears by default.
        
        ![Service Management](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5309673371/p132530.png)
        
    2.  On the **Published APIs** tab, click **Unpublish** in the Management column for the API.
        
    3.  After the API is unpublished, click **Service Development** in the top menu bar to return to the **Service Development** page.
        
2.  On the **Service Development** page, expand the **Business Flow** > **API** folder where the target API is located.
    
3.  Right-click the API that you want to delete and select Delete.
    
    **Important**
    
    This operation cannot be undone. To ensure data security, proceed with caution.
    

## Mobile API

You can move only unpublished APIs. If an API is published, you must unpublish it before you can move it.

1.  Unpublish the API if it is published. This step is optional.
    
    If your API is not published, you can skip this step.
    
    1.  On the **Service Development** page, click **Service Management** in the top menu bar. The **API Management** page appears by default.
        
        ![Service Management](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5309673371/p132530.png)
        
    2.  On the **Published APIs** tab, click **Unpublish** in the Management column for the API.
        
    3.  After the API is unpublished, click **Service Development** in the top menu bar to return to the **Service Development** page.
        
2.  On the **Service Development** page, expand the **Business Flow** > **API** folder where the target API is located.
    
3.  Right-click the API that you want to move and select Move.
    
4.  In the **Modify File Path** dialog box, select a **Destination Folder** and click **Confirm** to move the API.
    
5.  **Important**
    
    Moving an API may change the group to which the API belongs. This affects the invocation URL of the API after it is published. Therefore, move published APIs with caution.
    

## **Batch operations for APIs**

DataWorks supports batch operations for APIs, such as modifying service resource groups, submitting APIs, and publishing APIs. This feature lets you quickly switch resource groups for multiple APIs and republish them.

1.  On the Service Development page, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5456085961/p713943.png) icon at the top of the directory tree on the left to open the batch operations page.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5309673371/p713941.png)
    
2.  At the top of the batch operations page, you can filter APIs by conditions such as **Business Flow** and **Owner**.
    
3.  From the filtered list, select the APIs on which you want to perform batch operations.
    
4.  After selecting the APIs, choose a batch operation from the bottom of the page to apply to them.
    
    The following describes the relationship between batch operations and API statuses:
    
    **Batch operation**
    
    **Unpublished & Unsubmitted**
    
    **Unpublished & Submitted**
    
    **Published & Unsubmitted**
    
    **Published & Submitted**
    
    Modify service resource group
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5603949471/p713935.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5603949471/p713935.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5603949471/p713935.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5603949471/p713935.png)
    
    Submit
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5603949471/p713935.png)
    
    You cannot submit the API again. Go to the API editing page and discard the previously submitted version in **Version Control** on the right.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5603949471/p713935.png)
    
    You cannot submit the API again. Go to the API editing page and discard the previously submitted version in **Version Control** on the right.
    
    Publish
    
    An API must be submitted before it can be published. For an unsubmitted API, submit it before you publish it.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5603949471/p713935.png)
    
    An API must be submitted before it can be published. For an unsubmitted API, submit it before you publish it.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5603949471/p713935.png)
    
    **Note**
    
    After you modify the service resource group for a published API, you must test, submit, and publish the API again for the changes to take effect.
    

## **Search for APIs by code**

You can search for code within APIs that were created in the code editor of the current workspace.

1.  In the navigation pane on the left, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5391418961/p723595.png) icon to open the code search page.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6919888671/p723597.png)
    
2.  Click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5309673371/p723600.png) icon to the right of the search box to expand the filter conditions.
    
    You can enter keywords in the search box, such as an API name, API path, API description, table name, or field name. You can also filter the search results by conditions such as owner, business flow, and modification time.
    
3.  View the search results.
    
    The results that match the search conditions are displayed below the search box. The results include the following information:
    
    **Note**
    
    Only published APIs are displayed.
    
    -   API name: Click an API name to open the configuration page for that API in the right-side pane.
        
    -   Code content: Displays the matched keyword, its line number, and a brief context. You can copy the matched code content.
        
    -   Basic information: Displays the API ID, owner, business flow, and last modification time.
