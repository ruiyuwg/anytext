Purging by URL allows you to remove cached resources that exactly match the URLs you specify. This option is ideal for batch update of cache files and resolving cache issues for specific files.

## **Scenarios**

-   Resource updates, such as stylesheets, images, and script files
    
-   Fast fixing of content errors in specific files
    
-   Minor cache updates to avoid traffic spikes on the origin due to extensive purging
    

## Purge cache by URL

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target website.
    
2.  In the left navigation pane, choose **Caching** > **Purge Cache**.
    
3.  On the **Purge Cache** tab, configure the purge settings.
    
    -   **Type**: Select **By URL**.
        
    -   **Input Method**: Select **Manual Input** or **Upload File**.
        
        -   **Manual Input**
            
            Enter one or more URLs to be purged. The URLs must be full paths to the files. One URL per line. You can submit up to 1,000 URLs at a time. Example:
            
            ```
            https://www.example.com/cat.jpg
            https://www.example.com/image/cat.jpg?color=red
            ```
            
        -   **Upload File**
            
            If a large number of URLs need to be purged, you can specify the URLs in a TXT file and then upload the file for batch purging. The URLs must be full paths to the files. Enter one URL per line. The size of the TXT file cannot exceed 10 MB.
            
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1003822471/p905481.png)
    
4.  Click **Submit**.
    
5.  View the purge progress.
    
    -   You can view the progress and details of a purge task on the **Purge Records** tab. The purge task is complete when the progress reaches 100%. The duration varies based on the number of objects that you want to purge.
        
    -   If you select **Upload File** for purging, you can view the upload status on the **Upload Records** tab. After the file is uploaded, the purge task starts. You can view the purging status of each file on the **Purge Records** tab.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8261207371/p903011.png)
        

## **Availability**

**Quota**

**Entrance**

**Pro**

**Premium**

**Enterprise**

Purge tasks per day

1,000

50,000

100,000

500,000
