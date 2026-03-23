Data Management (DMS) provides the sharing feature that allows you to share the SQLConsole tab and SQL statements of a database instance or historical data change tickets such as lock-free change and data import tickets with other users by using a share link. This topic describes how to enable the sharing feature.

## **Usage notes**

-   You cannot share the Schema Design tab of a database instance with other users.
    
-   Only valid users within DMS tenants are allowed to visit a share link. To view the valid users, perform the following operations: Log on to the DMS console as an administrator. In the top navigation bar, choose **O&M** > **Users**.
    
    **Note**
    
    A valid user is a user that is not disabled or deleted.
    

## Share the SQLConsole tab

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  In the top navigation bar, choose **SQL Console** > **SQL Console**.
    
    **Note**
    
    If you use the DMS console in simple mode, move the pointer over the ![2022-10-21_15-25-22.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6797900961/p696237.png) icon in the upper-left corner of the DMS console and choose **All functions** > **SQL Console** > **SQL Console**.
    
3.  In the **Please select the database first** dialog box, enter a keyword to search for a database instance, select the database instance from the search results, and then click **Confirm**.
    
4.  On the **SQLConsole** tab, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6502547961/p707834.png) icon in the upper-right corner.
    
5.  In the dialog box that appears, click **Open sharing**.
    
6.  In the **link sharing** dialog box, configure the parameters that are described in the following table and click **Copy Link**.
    
    **Parameter**
    
    **Description**
    
    **Turn off sharing**
    
    If you want to disable the sharing feature, turn off **Turn off sharing**. After that, the previously generated share link becomes invalid.
    
    **Sharing form**
    
    The content to be shared. Valid values: **Console only** and **Console + SQL**.
    
    -   **Console only**: the SQLConsole tab without SQL statements.
        
    -   **Console + SQL**: the SQLConsole tab including the SQL statements that you entered.
        
    
    **Sharing period**
    
    The validity period of the share link. Valid values: **7 Days**, **30 Days**, **180 Days**, **360 Days**, and 3 Years.
    

## Share a ticket

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  On the Home page of the DMS console, click **Submitted Tickets** in the **My Tickets** section.
    
3.  On the My Tickets page, find the ticket that you want to share and click its ID in the Ticket Number column. Then, in the panel that appears, click the ![5展开工单](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9252482561/p426328.png) icon in the upper-right corner.
    
4.  On the Ticket Details page, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7502547961/p707831.png) icon in the upper-right corner.
    
5.  In the dialog box that appears, click **Open sharing**.
    
6.  In the **link sharing** dialog box, configure the parameters that are described in the following table and click **Copy Link**.
    
    **Parameter**
    
    **Description**
    
    **Turn off sharing**
    
    If you want to disable the sharing feature, turn off **Turn off sharing**. After that, the previously generated share link becomes invalid.
    
    **Share object**
    
    The scope of users with whom you want to share the ticket. Valid values:
    
    -   **Everyone**: all the users of the current DMS tenant.
        
    -   **Designated**: users that you specify.
        
    
    **Sharing period**
    
    The validity period of the share link. Valid values: **7 Days**, **30 Days**, **180 Days**, **360 Days**, and 3 Years.
