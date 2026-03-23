Purging the cache by hostname clears all cached resources that match the specified hostnames. You can purge the cache for multiple hostnames in batches.

## **Use cases**

-   Batch updating all cached content for multiple domain names on your website.
    
-   Quickly purging all cached content for a specific hostname.
    

## **Procedure**

1.  In the ESA console, navigate to [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **Caching** > **Purge Cache**.
    
3.  On the **Purge Cache** tab, configure the purge rule.
    
    -   Set **Type** to **By Hostname**.
        
    -   **Purge Method**: Select **Mark as Expired** or **Delete**.
        
        **Method**
        
        **Description**
        
        **Mark as Expired**
        
        If a user requests content that matches a resource to be purged, the ESA POP first performs an origin fetch to get the resource's Last-Modified information. If it matches the cached resource, the cached resource is returned. If not, the POP pulls the new resource from the origin, returns it to the user, and caches the new resource.
        
        **Delete**
        
        If a user requests content that matches a resource to be purged, the ESA POP directly performs an origin fetch to pull the new resource, returns it to the user, and caches the content.
        
    -   For **Purge Content**, enter the hostnames to purge in the text box. Separate multiple hostnames with commas. Wildcard characters are not supported. For example:
        
        ```
        www.example.com,blog.example.com,shop.example.com
        ```
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6041455571/p903022.png)
    
4.  Click **Submit**.
    
5.  View the purge progress.
    
    After submitting the purge task, you can view detailed records and progress of resource purging on the **Purge Records** tab. The purge task is complete when the progress reaches 100%. The progress varies with the number of objects that you want to purge. The purge task may require some time to complete.
    

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
