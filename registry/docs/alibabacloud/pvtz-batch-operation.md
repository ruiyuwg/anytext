The **Private Zone** service provides batch import and download features to help you efficiently manage many DNS records.

## **Batch delete** **Private Zone** **domain names**

1.  Go to [Alibaba Cloud DNS - Private DNS](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  Click **Private Zone** > **User Defined Zones**.
    
3.  Select the domain names (Zones) to delete, and then click **Batch Delete**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7900271571/p982591.png)
    
4.  In the **Delete Zone Confirmation** dialog box, confirm the deletion to complete the operation.
    

## **Batch import DNS records**

1.  Go to [Alibaba Cloud DNS - Private DNS](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  Click **Private Zone** > **User Defined Zones**.
    
3.  Find the target domain name and click the **Settings** button in the Actions column.
    
4.  On the **Settings** page, click the **Import/Export** button.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9573798671/p1047251.png)
    
5.  On the **Import Record** page, click **Download Template**.
    
6.  Add the DNS records that you want to import to the template file. Then, click **Upload File** and select the updated file.
    
7.  The system automatically creates an asynchronous task. To check the task result, click **Asynchronous Task** at the top of the console.
    

## **Batch pause, enable, or delete DNS records**

1.  Go to [Alibaba Cloud DNS - Private DNS](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  Click **Private Zone** > **User Defined Zones**.
    
3.  Find the target domain name and click the **Settings** button in the Actions column.
    
4.  On the **Settings** page, select the DNS records that you want to manage. Then, click **Batch Disable**, **Batch Enable**, or **Batch Delete**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7900271571/p982594.png)
    
5.  The system automatically creates an asynchronous task. To check the task result, click **Asynchronous Task** at the top of the console.
    

## **Download DNS records**

1.  Go to [Alibaba Cloud DNS - Private DNS](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  Click **Private Zone** > **User Defined Zones**.
    
3.  Find the target domain name and click the **Settings** button in the Actions column.
    
4.  On the **Settings** page, click the download icon in the upper-right corner.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7900271571/p982595.png)
    
5.  In the dialog box that appears, select a file format. The supported formats are **xlsx** and **Zone**.
    
6.  Click **Asynchronous Task** at the top of the console. In the dialog box that appears, find the corresponding task and click Download.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1687329961/p719518.png)
    

## **Limits**

**Operation type**

**Scope**

**Description**

Batch import domain names

Not applicable

Batch import of domain names is not supported.

Batch delete domain names

1 to 100 records

The console displays up to 50 records per page, so you can delete a maximum of 50 records at a time. You can delete up to 100 records at a time by calling an API operation.

Batch import DNS records

xls, xlsx, or zone

The supported file formats are xls, xlsx, and zone.

1 to 1,000 records per operation

You can import up to 1,000 DNS records at a time. Records that exceed this limit are not imported.

2 MB per operation

The size of the imported file cannot exceed 2 MB.

Batch delete DNS records

1 to 100 records

The number of records that can be deleted in a single batch operation.

Batch pause/enable DNS records

1 to 100 records

The number of records that can be paused or enabled in a single batch operation.
