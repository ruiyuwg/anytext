This topic describes how a management account can view detailed information about a member, and how a member account can view information about the resource directory to which it belongs.

## View member information (management account)

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) with a management account.
    
2.  In the left-side navigation pane, choose **Resource Directory** > **Management**.
    
3.  On the page that appears, click **Resource Organization View** or **Member List View** in the upper-right corner. Then, click the ID of a member.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2120843471/p934207.png)
    
4.  On the member details page, you can view the following information:
    
    -   In the **Basic Information** section, view the following information: display name, status, account name, real-name information, Alibaba Cloud account ID, billing account, the time a member joined the directory, member type, RDPath, tag, and logon account.
        
        **Note**
        
        Logon Account is displayed only when you use a RAM user of the management account for a resource directory to view the detailed information about a member in the resource directory. A RAM user of a management account can assume a RAM role of a member and log on to the Alibaba Cloud Management Console through the URL indicated by Logon Account. For more information, see [Log on as a RAM role](/help/en/resource-management/resource-directory/user-guide/use-a-member-to-log-on-to-the-alibaba-cloud-management-console#section-b2g-jvz-8ow).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2468806571/p1000630.png)
        
    -   On the **Policy** tab, view the access control policies attached to the member
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2468806571/p1000631.png)
        
    -   On the **Contact** tab, view the contacts bound to the member. For more information about the contacts of a member, see [Manage contacts for a member](/help/en/resource-management/resource-directory/user-guide/manage-contacts-for-a-member).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2468806571/p1000632.png)
        
    

## **View resource directory information (member account)**

### **View basic resource directory information**

All members can view information about the resource directory to which they belong and their own member information within that directory.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) as a member.
    
    For more information about how to log on, see [Use a member to log on to the console](/help/en/resource-management/resource-directory/user-guide/use-a-member-to-log-on-to-the-alibaba-cloud-management-console).
    
2.  In the left-side navigation pane, choose **Resource Directory** > **Member Information**.
    
3.  On the **Member Information** page, view your resource directory and member information.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3120843471/p934516.png)
    
    -   In the **Resource Directory Information** section, view basic information about the resource directory to which you belong, including the directory ID, creation time, management account name, management account ID, and enterprise name.
        
    -   In the **Member Information** section, view your basic information as a member of the resource directory, including your location in the folder structure, RDPath, display name, and the time you joined the directory.
        
    

### **View trusted service information**

If a member is designated as a [delegated administrator](/help/en/resource-management/resource-directory/user-guide/manage-a-delegated-administrator-account) for a [trusted service](/help/en/resource-management/resource-directory/user-guide/overview-1), the member can view information about that service.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) as a member.
    
    For more information about how to log on, see [Use a member to log on to the console](/help/en/resource-management/resource-directory/user-guide/use-a-member-to-log-on-to-the-alibaba-cloud-management-console).
    
2.  In the left-side navigation pane, choose **Resource Directory** > **Trusted Services** to view information about trusted services.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3120843471/p934534.png)
    

### **View the resource directory structure**

If a member is designated as a [delegated administrator](/help/en/resource-management/resource-directory/user-guide/manage-a-delegated-administrator-account) for a [trusted service](/help/en/resource-management/resource-directory/user-guide/overview-1), the member can view the organizational structure of the resource directory.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) as a member.
    
    For more information about how to log on, see [Use a member to log on to the console](/help/en/resource-management/resource-directory/user-guide/use-a-member-to-log-on-to-the-alibaba-cloud-management-console).
    
2.  In the left-side navigation pane, choose **Resource Directory** > **Management** to view the resource directory structure.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3120843471/p934528.png)
    

## **FAQ**

### How do I export a list of member accounts from the Resource Directory?

A direct export option for the member account list is not available on the **Resource Directory** > **Management** page. However, you can use the following workaround:

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) with your management account.
    
2.  In the left-side navigation pane, choose **Resource Center** > **Resource Search**.
    
3.  Click the **Select resource types** filter drop-down list and enter account in the search box.
    
4.  From the search results, select the checkboxes for **Resource Management** and **Account**.
    
5.  Click the Download button in the upper-right corner of the page to export the filtered results as a .csv file.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4465234671/p1030135.png)
    

## References

For more information about basic concepts such as members, RDPath, trusted services, and delegated administrator accounts, see [What is Resource Directory?](/help/en/resource-management/resource-directory/product-overview/resource-directory-overview#section-o5w-14l-nah)
