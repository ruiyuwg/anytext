Edge Security Acceleration (ESA) creates different caches for request URLs that contain different query strings. If you select to purge the cache by URL with parameters ignored, ESA clears all cached resources that match the URLs you submitted, ignoring the request parameters in the URLs.

## **Scenarios**

### File version control

-   Description: Your website has a large number of static resources, such as images, CSS files, and JavaScript files. The URLs of these resources carry different query parameters that can be helpful with version and cache control. Each time you update the resources, you want to ensure that the related cache is invalidated immediately. This enables users to fetch the most recent version of the resources.
    
-   Example: The following URLs link to two different versions of the same file.
    
    -   https://www.example.com/assets/style.css?v=1
        
    -   https://www.example.com/assets/style.css?v=2
        
-   Solution: Submit the URL without query parameters, such as `https://www.example.com/assets/style.css`, to clear the cache of all versions of the file.
    

### **Image processing**

-   Description: Your website may generate various images in response to different query parameters, such as thumbnails and images in different sizes. To ensure these images are updated and served immediately after processing, you need to clear the related cache.
    
-   Example: The following URLs link to an image in two different sizes.
    
    -   https://www.example.com/images/photo.jpg?size=small
        
    -   https://www.example.com/images/photo.jpg?size=medium
        
-   Solution: Submit the URL without query parameters, such as `https://www.example.com/images/photo.jpg`, to clear the cache for all versions that are generated with different parameters.
    

## Purge cache by URL with parameters ignored

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target website.
    
2.  In the left navigation pane, choose **Caching** > **Purge Cache**.
    
3.  On the **Purge Cache** tab, configure the purge settings.
    
    -   **Type**: Select **By URL with Parameters Ignored**.
        
    -   **Input Method**: Select **Manual Input** or **Upload File**.
        
        -   **Manual Input**
            
            Enter one or more URLs that do not include request parameters. One URL per line. You can submit up to 100 URLs at a time. Example:
            
            ```
            https://www.example.com/cat.jpg
            https://www.example.com/image/cat.jpg
            ```
            
        -   **Upload File**
            
            If a large number of URLs need to be purged, you can specify the URLs in a TXT file and then upload the file for batch purging. One URL per line. The size of the TXT file cannot exceed 10 MB.
            
    -   **Purge Method**: You can choose between two methods: **Mark as Expired** and **Delete**.
        
        **Refresh method**
        
        **Description**
        
        **Mark as Expired**
        
        Nodes are processed according to the following flow:
        
        1.  The ESA POP sends an origin request with the `If-Modified-Since` request header.
            
        2.  The origin server compares the file modification time.
            
        3.  If the file is not modified, the origin server returns a 304 status code. The ESA POP can then use the existing cache file to respond to the client request.
            
        4.  If the file is modified, the origin server returns a 200 status code and the latest file. The ESA POP returns the latest file to the client and caches the resource.
            
        
        **Delete**
        
        If a user requests content that matches a resource to be refreshed, the ESA POP directly fetches the new resource from the origin, returns it to the user, and caches the new resource.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6318492271/p818220.png)
    
4.  Click **Submit**.
    
5.  View the purge progress.
    
    -   After submitting the purge task, you can view detailed records and progress of resource purging on the **Purge Records** tab. The purge task is complete when the progress reaches 100%. The progress varies with the number of objects that you want to purge. The purge task may require some time to complete.
        
    -   If you purge the cache by **Upload File**, you can view the file execution status on the **File Upload Records** tab. When the execution status is successful, it indicates that the file has been uploaded successfully and the purge task has started. You can view the purge status of individual files on the **Purge Records** tab.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8261207371/p903011.png)
        

## A**vailability**

**Quota**

**Entrance**

**Pro**

**Premium**

**Enterprise**

Purge tasks per day

N/A

N/A

N/A

500
