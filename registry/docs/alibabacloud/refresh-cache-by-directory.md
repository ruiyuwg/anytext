Purge the cache for a directory to remove all of its cached content. This ensures that users can view the latest versions of your files.

## **Scenarios**

-   Purge all cached files in a specific directory, such as the `/assets/images/` directory.
    
-   Update all content for a module or section on a large scale.
    
-   Purge all related resources for a specific project update or version release.
    

## **Procedure**

1.  In the ESA console, select [**Websites**](https://esa.console.alibabacloud.com/siteManage/list), and then click the target site in the **Website** column.
    
2.  In the navigation pane on the left, choose **Caching** > **Purge Cache**.
    
3.  On the **Purge Cache** tab, configure the purge rule.
    
    -   Set **Type** to **By Directory**.
        
    -   **Input Method**: **Manual Input** and **Upload File** are supported.
        
        **purge input method**
        
        **Description**
        
        **Manual Input**
        
        Enter the URLs to purge directly into the input box. The URLs must specify directory paths that end with `/`. Enter one URL per line. You can enter up to 100 URLs at a time. For example:
        
        ```
        https://www.example.com/ 
        https://www.example.com/image/ 
        https://www.example.com/image/cat/ 
        ```
        
        **Upload File**
        
        If you have many URLs to purge, add them to a TXT file and upload the file for a batch purge. The URLs must specify directory paths that end with `/`. Enter one URL per line. The TXT file cannot exceed 10 MB.
        
    -   **Purge Method**: Select **Mark as Expired** or **Delete**.
        
        -   **Mark as Expired**
            
            If the requested content is one of the resources that you submit to purge, the nearest POP checks the Last-Modified parameter of the resource on the origin server. If the parameter value is the same as that of the cached resource, the POP serves the cached resource. Otherwise, the cached resource is considered expired. In this case, the POP fetches the latest version from the origin server, delivers it to the client, and updates the cache with the new version.
            
        -   **Delete**
            
            If the requested content is one of the resources that you submit to purge, the nearest POP fetches the latest version from the origin server, delivers it to the client, and updates the cache with the new version.
            
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4264175571/p903017.png)
    
4.  Click **Submit**.
    
5.  View the purge progress.
    
    -   You can view the progress and details of a purge task on the **Purge Records** tab. The purge task is complete when the progress reaches 100%. The duration varies based on the number of objects that you want to purge.
        
    -   If you select **Upload File** for purging, you can view the upload status on the **Upload Records** tab. After the file is uploaded, the purge task starts. You can view the purging status of each file on the **Purge Records** tab.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8261207371/p903011.png)
        

## **Availability**

**Limit**

**Entrance**

**Pro**

**Premium**

**Enterprise**

Daily quota limit (items)

Not supported

100

1,000

2,000
