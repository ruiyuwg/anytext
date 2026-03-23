This chapter uses the **WebSite Data Dashboard** as an example to demonstrate how to develop a visualization application project using the DataV blank template.

## Background information

-   The example uses **Static Data**, so you can directly paste the prepared data in the data configuration area of the component. If your data source is a **CSV File**, **Database**, or other types, you need to [add a data source](/help/en/datav/datav-6-0/user-guide/add-data-sources/) first.
    
-   If you need to use an **API** data source, you can directly enter the API address in the data configuration bar. When configuring, if you need to enable operations such as **Server Proxy Request**, see [Configure cross-domain data](/help/en/datav/datav-6-0/user-guide/how-to-configure-cross-domain-data#concept-k5l-ckz-q2b).
    

## **Effect display**

After completing the configuration provided in this article, you will generate a data dashboard with the following effect.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3295120571/p551484.png)

**Note**

Visualization applications involve many configurations, and different configurations generate different styles. This example is only used to understand the relevant features and operation flow. The actual effect depends on your operation.

## **Component information**

The following figure shows the component checklist used in the example, including the name and corresponding quantity of each component.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3295120571/p554085.png)

## **Procedure**

You can build a visualization application on a blank canvas and quickly experience the related features of DataV-Board through the following operations.

### **Step 1: Create a visualization application**

1.  Log on to the [DataV console](https://datav.alibabacloud.com/).
    
2.  On the ****Projects**** page, click ****PC Creation.****. On the page, select **Blank Canvas** and click **Create Project**.
    
3.  In the **Create Project** dialog box, enter the visualization application name and select a [project group](/help/en/datav/datav-6-0/user-guide/group-function-and-move-function/#e0e555ac04gch). If no group has been created, you can select **Ungrouped**.
    
    After the application is created successfully, you will be redirected to the application editor page. You can connect to data sources and configure canvas information as needed.
    
    **Note**
    
    The default canvas size is 1920×1080. You can adjust it as needed in the **Page Setting** area on the right side of the canvas editor.
    

### **Step 2: Add and configure components**

**Note**

-   **Multiple selection operation**: In Windows, hold down the Ctrl key (Command key on Mac) and click components to select multiple components.
    
-   **Move components**: You can adjust the position of components in the canvas by dragging them or modifying their coordinates in the configuration panel.
    
-   **Layer adjustment**: In the layer panel on the left, you can drag components up or down to change their layer levels. When [moving layers](/help/en/datav/datav-6-0/user-guide/manage-layers/#a461d0259fo7b), when two components overlap, the component in the front position will cover the one in the back position.
    

#### **Business indicator trend**

1.  In the **All Assets** panel on the left side of the canvas, click **Information** > **Business Metric Trend** to add the component to the canvas.
    
2.  Click the component, and in the **Configuration** panel on the right side of the visualization application, configure the **Title**, **Icon**, and **Value** in the bottom panel according to the effect diagram.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4295120571/p973793.png)
    
3.  Repeat the above steps to complete the configuration of all business indicator trend components.
    

#### **General title**

1.  In the All Assets panel on the left side of the canvas, click **Info** > **General Titles** to add the general title component to the canvas.
    
2.  Click the component, and in the **Configuration** panel on the right side of the visualization application, configure the style of the **Common Title**.![通用标题-样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4295120571/p327604.png)
    
3.  In the **Configure** panel of the **Common Title** tab, modify the name of the title. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4295120571/p551212.png)
    
4.  Repeat the above operations to continue adding other **General Title** components.
    

#### **Ticker board**

1.  In the **All Assets** panel on the left side of the canvas, click the **Info** > **Trader** component.
    
2.  Click the component, and in the **Configuration** panel on the right side of the visualization application, configure the style of the **Ticker Board**.
    
    ![数字翻牌器-样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4039283661/p327679.png)
    
3.  In the **Ticker Board**'s **Data Panel**, change the value to the data you want to display.
    
    ![配置数字翻牌器组件数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2829646061/p10362.png)
    
4.  Repeat the above operations to continue adding other **Ticker Board** components.
    

#### **Timer**

1.  In the **All Assets** panel on the left side of the canvas, click the **Info** > **Timer** component.
    
2.  Configure the style of the **Timer**, modify the **Icon Style**, **Timer**, and other configurations.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4295120571/p551218.png)
    

#### **Custom background block**

1.  In the **All Assets** panel on the left side of the canvas, click the **Media** > **Customized Background** component.
    
2.  Configure the style of the **Customized Background**, modify the **Custom Style** and **Custom Background Style**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3295120571/p551515.png)
    

#### **Dashboard**

1.  In the **All Assets** panel on the left side of the canvas, click the **Chart** > **Pie Chart** > **Dashboard** component.
    
2.  Configure the style of the **Dashboard**, modify fields such as **Dashboard Pointer** under **Series**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4295120571/p551541.png)
    
3.  Modify the data item JSON file as needed.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3295120571/p551542.png)
    

#### **Annotated bubble bar chart**

1.  In the **All Assets** panel on the left side of the canvas, click the **Chart** > **Column Chart** > ****Label Bubble Column Chart**.** component.
    
2.  Configure the style of the ****Label Bubble Column Chart**,**, modify the **Element Style** under **Series** and modify the data source and other configurations.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3295120571/p551551.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3295120571/p551553.png)
    

#### **Area chart**

1.  In the **All Assets** panel on the left side of the canvas, click the **Charts** > **Area Chart** component.
    
2.  Configure the style of the **Area Chart**, modify the **Line Style** and **Set Data Source**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4295120571/p551560.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3295120571/p551561.png)
    
3.  Repeat the above operations to continue adding other **Area Chart** components.
    

#### **Single image**

1.  In the **All Assets** panel on the left side of the canvas, click the **Media** > **Image** component.
    
2.  Modify the **Background Image** of the single image as needed.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4295120571/p551524.png)
    
3.  Repeat the above operations to continue adding other **Single Image** components.
    

### **Step 3: Preview and publish the visualization application**

After configuring the style and data source of the components, you can preview and publish the visualization application to achieve online playback and demonstration of the dashboard. This step introduces how to preview and publish a visualization application.

1.  Click the ![{FA4AF138-6B6B-4DF3-AA90-521D2359AFB3}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1962120571/p973550.png) icon in the upper right corner of the canvas editor to jump to a new page to preview the visualization application.
    
    After the preview is successful, you can publish the visualization application by following these steps.
    
2.  Click the ![{F18FCB2F-9D3E-4A35-9995-D9A7EFEA0EF6}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1962120571/p973551.png) icon in the upper right corner of the canvas editor, and in the dialog box that appears, click **Publish Project** to open the publish page.
    
3.  On the publish page, click the icon to the right of **Sharing URL** ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6578428471/p960080.png) to copy the link.
    
    **Note**
    
    On the publish page, you can perform [publish information and snapshot management](/help/en/datav/datav-6-0/user-guide/use-a-template-to-create-a-pc-side-visual-application#d6096c2851ggr) as needed.
    
4.  Copy and paste the URL to the address bar of a browser to view the published project.
    

## **References**

-   For more creation methods, see [Create a visualization application from a template](/help/en/datav/datav-6-0/user-guide/use-a-template-to-create-a-pc-side-visual-application#0a0ccb98baplq).
    
-   For more configuration operations (such as component configuration and blueprint application), see [Component configuration](/help/en/datav/datav-6-0/user-guide/configure-item-description), [Blueprint cases](/help/en/datav/datav-6-0/user-guide/primary-case/).
