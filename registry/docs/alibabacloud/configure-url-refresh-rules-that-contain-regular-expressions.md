You can submit URLs that contain regular expressions in a purge task. Dynamic Content Delivery Network (DCDN) purges resources from all URLs that match the regular expressions. This improves the efficiency of URL purge.

On the Purge/Prefetch tab, if you set **Operation Method** to **Regular Expression** and enter one or more URLs that contain regular expressions in the URL field, you can purge all resources from URLs that match the specified regular expressions. When you configure URLs that contain regular expressions, take note of the following rules:

-   You can specify URLs that contain only the following regular expressions in the URL field: `[0-9]`, `[a-z]`, `[^/]*`, and `.*`.
    
-   Enter one URL per line. Example: `http://www.example.com/[0-9][a-z].*.jpg`.
    
-   By default, an account can submit up to 20 regular expression purge requests per day. If the daily bandwidth peak value of your Alibaba Cloud account exceeds 10 Gbps, you can [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex) to increase your daily quota.
    
-   URL purge, directory purge, and purge based on regular expressions support cache sharing. If cache sharing is configured for a domain name, you can submit a purge task with the root domain name or any associated domain name to purge the cache.
    
-   Ensure that the URL you submit is in encoded format. If the URL contains non-ASCII characters such as spaces, Chinese characters, or special characters, encode the URL or else the task cannot be processed.
    

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  Click **Tools** > ****Purge Cache**.**
    
3.  On the **Purge Cache** tab, set **Operation Method** to **Regular Expression**.
    
    ![Refresh resources based on regular expressions](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7054255861/p672915.png)
    
4.  Configure the rules and click **Submit**.
