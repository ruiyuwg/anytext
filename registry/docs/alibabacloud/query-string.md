When a point of presence (POP) processes a user request to generate a cache key, you can configure it to remove the `?` and the query string that follows the `?`, such as user identity information and access channel source, from the request URL. This enables request URLs with different parameters to reference the same cache file, improving the cache hit ratio and reducing page load time.

## Introduction

How it works: Remove the `?` character and all parameters after the `?` from the request URL. This ensures that different users accessing the same file can hit the same cache file, even when using different URL parameters. As a result, the cache hit ratio improves, origin fetches decrease, and file delivery efficiency increases.

Use case: Ignore query strings when user request URLs contain parameters unrelated to resource content, such as user identity information or access channel source. For example:

A user: `http://example.com/1.jpg?uid=123`

B user: `http://example.com/1.jpg?uid=654`

If you do not ignore query strings, the POP treats the two URLs as different requests. This requires an origin fetch for each request. After you set to ignore query strings, the POP removes parameters after the `?` in the URL. It then uses only `http://example.com/1.jpg` to match cache files.

## **Procedure**

1.  In the ESA console, select [Site Management](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the name of the target site.
    
2.  In the navigation pane on the left, choose **Caching** > **Settings**.
    
3.  In the **Query String** area, click **Configure**, select a filtering mode and complete the configuration based on your requirements, and click **OK** to save.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6529542171/p770696.png)
    

## **Filtering modes**

Assume the original URL is `http://example.com/1.jpg?key1=1&key2=2&key3=3`. Depending on the rule settings, ESA processes the original URL as follows:

**Parameter**

**Description**

**Example**

**Ignore All**

Removes the `?` and all query strings after the `?` from the request URL.

The cache key is `http://example.com/1.jpg`.

**Retain All**

You can retain the `?` and all the query string that follows the `?` in the request URL.

The cache key is `http://example.com/1.jpg?key1=1&key2=2&key3=3`.

**Ignore Specific Parameters**

Deletes specified parameters after the `?` in the request URL. Enter the parameters to delete in the input box and press Enter to confirm.

If you enter `key1` and `key3` as the parameters to delete, the cache key is `http://example.com/1.jpg?key2=2`.

**Retain Specific Parameters**

To retain only specified query strings after the `?` in the request URL, enter the parameters to retain in the input box and press Enter to confirm.

If you enter `key1` and `key3` as the parameters to retain, the cache key is `http://example.com/1.jpg?key1=1&key3=3`.

## **Site-level and rule-based settings mapping**

Site-level feature configurations apply to all requests for the site. If you want to enable this feature for only specific requests, you can use rule-based features instead. Rule-based features use conditions to detect specific parameters in user requests. This lets you apply configurations with greater precision. The rule-based feature that corresponds to the site-wide query string feature is [Custom Cache Key](/help/en/edge-security-acceleration/esa/user-guide/custom-cachekey).
