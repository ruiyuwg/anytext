This topic demonstrates how to use DataV templates to develop visualization application projects by building a **Epidemic Situation Control** visualization application.

## Background information

-   This example uses **Static Data Source**, allowing you to directly paste prepared data in the widget's data configuration area. If your data source is **CSV File**, **Database**, or another type, you need to [add a data source](/help/en/datav/datav-6-0/user-guide/add-data-sources/) first.
    
-   If you need to use an **API** data source, you can directly enter the API address in the data configuration bar. When configuring, if you need to enable operations such as **Server Proxy Request**, see [Configure cross-domain data](/help/en/datav/datav-6-0/user-guide/how-to-configure-cross-domain-data#concept-k5l-ckz-q2b).
    

## **Effect display**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1962120571/p551416.png)

## **Operation flow**

You can quickly experience DataV-Board features by completing the following steps to create a template visualization application.

1.  [Step 1: Create a visualization application](#steps-qlz-1u9-jmy)
    
2.  [Step 2: Configure widget styles](#steps-63e-r43-zqm)
    
3.  [Step 3: Adapt widget data](#steps-dpf-zqs-xib)
    
4.  [Step 4: Preview and publish the visualization application](#steps-hvc-ijx-ung)
    

## Step 1: Create a visualization application

1.  Log on to the [DataV console](https://datav.alibabacloud.com/).
    
2.  On the **Projects** page, click **PC Creation**. Select a suitable template. This example uses the **Epidemic Situation Control** template. Click Create Project.
    
3.  In the **Create Project** dialog box, enter the visualization application name and select a [project group](/help/en/datav/datav-6-0/user-guide/group-function-and-move-function/#e0e555ac04gch). If no group has been created, you can select **Ungrouped**.
    
4.  Click **Create**.
    
    After the application is created successfully, you will be redirected to the canvas editor page, where you can see a well-designed template that meets the display requirements for enterprise new retail business data.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1962120571/p551406.png)
    

## Step 2: Configure widget styles

After creating the visualization application, you can modify widget styles through the following methods.

1.  Click to select a widget in the **Layers** panel on the left, and then adjust its style configuration through the style panel on the right.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1962120571/p551409.png)
    
    **Note**
    
    You can double-click the widget name in the canvas editor layer to rename the current widget.
    
2.  Use the same method to adjust the configuration of other widgets according to your requirements.
    

## Step 3: Adapt widget data

You can modify widget data content through the following methods according to your actual needs.

1.  In the Layers panel on the left, click to select a widget. For example: Double 11 bubble chart.
    
2.  Select the **Data** tab in the style panel on the right, and click **Configure Data Source**. In the **Data Source** dialog box, select **Static Data** for **Data Source Type**.
    
3.  In the data configuration area below, modify the existing data in the template according to your requirements, or paste the prepared JSON format data.
    
    **Note**
    
    The field names when adding data must be consistent with the system settings.
    
4.  After completing the data configuration, you can click the ![刷新](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8083746061/p95948.png) icon after **Data Response Result** on the **Set Data Source** page to refresh the data response result.
    
    After a successful data response, **Configuration Complete** and **Matched Successfully** will be displayed on the **Data** page.
    
5.  Use the same method to configure the data for all widgets in the visualization application.
    

## Step 4: Preview and publish the visualization application

After configuring widget styles and data sources, you can preview and publish the visualization application to enable online playback and demonstration of the dashboard. This step introduces how to preview and publish a visualization application.

1.  Click the ![{FA4AF138-6B6B-4DF3-AA90-521D2359AFB3}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1962120571/p973550.png) icon in the upper-right corner of the canvas editor to preview the visualization application in a new page.
    
    After successfully previewing, you can publish the visualization application by following these steps.
    
2.  Click the ![{F18FCB2F-9D3E-4A35-9995-D9A7EFEA0EF6}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1962120571/p973551.png) icon in the upper-right corner of the canvas editor, and then click **Publish Project** in the dialog box to open the publish page.
    
3.  On the publish page, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6578428471/p960080.png) icon to the right of **Sharing URL** to copy the link.
    
    **Note**
    
    On the publish page, you can perform [publication information and snapshot management](/help/en/datav/datav-6-0/user-guide/use-a-template-to-create-a-pc-side-visual-application#d6096c2851ggr) as needed.
    
4.  Copy and paste the URL to the address bar of a browser to view the published visualization application online.
