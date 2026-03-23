When you access an Object Storage Service (OSS) object in a browser, it may be forced to download instead of being previewed online. This topic describes how to identify the cause and configure the correct preview behavior for your objects.

## Troubleshooting

When an object is forced to download, use the `curl` command to check the response header of the object URL and quickly identify the root cause.

**Goal**: Check if the HTTP response header contains fields that force a download.

**Steps**: Open your terminal or command-line interface (CLI) and run the following command. Replace `<your-object-url>` with the actual URL of your object.

```
curl -I "<your object URL>"
```

**Result analysis**: After you run the command, check for the `x-oss-force-download` and `Content-Disposition` fields in the response.

-   **If the response header contains** `x-oss-force-download: true`: A security policy for the OSS default domain name is triggered. For the solution, see [Scenario 1: Forced download due to an OSS security policy](#214abaa858sis).
    
-   **If the response header does not contain** `x-oss-force-download` **but contains** `Content-Disposition: attachment`: The object's metadata is configured to download it as an attachment. For the solution, see [Scenario 2: Forced download due to object metadata settings](#63ad07c4a05w3).
    
-   **If the response header contains neither of the preceding fields but the object is still downloaded**: The browser likely cannot recognize the object's file type. For the solution, see [Scenario 3: Browser fails to preview the object due to an incorrect Content-Type](#e8b080ad3832r).
    

## Solutions

### Scenario 1: Forced download due to an OSS security policy

This scenario occurs when the response header contains `x-oss-force-download: true`.

-   **Cause**: To prevent security risks from certain file types (such as HTML) being executed directly in a browser, OSS enforces a security policy. This policy adds the `x-oss-force-download: true` and `Content-Disposition: attachment` headers to the response, forcing a download when you use an **OSS default domain name** or an **acceleration endpoint** to access objects in buckets created after a specific date.
    
    > For more information about the policies, see [Appendix: Quick reference for OSS forced download rules](#6309bcf0dfj1z) at the end of this topic.
    
-   **Solution: Use a custom domain name to access OSS resources**
    
-   **Procedure**:
    
    1.  **Map a custom domain**: Log on to the OSS console. On the bucket's **Domain Names** page, map your custom domain name that has an ICP filing.
        
    2.  **Configure a CNAME record**: At your domain name provider, such as Alibaba Cloud DNS, add a CNAME record that points your custom domain name to the CNAME address provided by OSS.
        
    3.  **Access the object with the new domain**: After the configuration is complete, use the URL of your custom domain name to access the object. The object can then be previewed online.
        

**Note**

-   If you require global acceleration, you can map your custom domain name to an **acceleration endpoint**. This bypasses the forced download policy and provides accelerated access.
    
-   For detailed instructions, see [Access OSS through a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names).
    

### Scenario 2: **Forced download due to object metadata settings**

This scenario occurs when the response header contains `Content-Disposition: attachment` but not `x-oss-force-download`.

-   **Cause**: The `Content-Disposition` field in the object's metadata is explicitly set to `attachment`. This setting instructs the browser to download the object as an attachment instead of displaying it inline. While this is useful for creating temporary download links, if the setting is not cleared, all subsequent requests for the object will trigger a download.
    
-   **Solution: Change the object's** `**Content-Disposition**` **metadata to** `**inline**`
    
    -   **Modify via the console**
        
        1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/) and navigate to the **Objects** page in the **Object Management** section of the target bucket.
            
        2.  Find the target object. Click the **┇** icon in the **Actions** column and select **Set Object Metadata**.
            
        3.  In the dialog box that appears, find the `**Content-Disposition**` field and change its value to `inline`.
            
        4.  Click **OK** to save the settings.
            
    -   **Modify in batches using ossutil**
        
        ```
        # Set the Content-Disposition of a specific object to inline.
        ossutil set-meta oss://your-bucket/your-object.pdf Content-Disposition:inline
        ```
        

### Scenario 3: **Browser fails to preview the object due to an incorrect Content-Type**

This scenario occurs when the response header is normal, but the browser still downloads the object.

-   **Cause**: The `Content-Type` (also known as MIME type) metadata of the object is missing or incorrect. For example, if the `Content-Type` of a JPG image is incorrectly set to `application/octet-stream`, the browser downloads the object because it cannot identify the actual file type.
    
-   **Solution: Set the correct** `**Content-Type**` **for the object**
    
    -   **Modify via the console**
        
        1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/) and navigate to the **Objects** page in the **Object Management** section of the target bucket.
            
        2.  Find the target object. Click the **┇** icon in the **Actions** column and select **Set Object Metadata**.
            
        3.  In the dialog box that appears, find the `**Content-Type**` field and change it to the correct value.
            
        4.  Click **OK** to save the settings.
            
        
        **Examples of correct Content-Type for common file types**:
        
        -   Images: `image/jpeg`, `image/png`, `image/gif`, `image/webp`
            
        -   Videos: `video/mp4`
            
        -   PDF documents: `application/pdf`
            
        -   HTML files: `text/html`
            
        -   Plain text: `text/plain`
            
    -   **Modify in batches using ossutil**
        
        ```
        # Set the Content-Type of a specific object to image/jpeg.
        ossutil set-meta oss://your-bucket/your-object.jpg Content-Type:image/jpeg
        ```
        

## Additional use cases and solutions

### Changes to metadata do not take effect: Check the CDN cache

If you use **Alibaba Cloud Content Delivery Network (CDN)** to accelerate access to OSS, changes to file metadata, such as `Content-Type` or `Content-Disposition`, may not take effect immediately. This is because CDN points of presence (PoPs) might still serve the cached version with the old configuration.

**Solution**: Log on to the CDN console and purge the cache for the modified file's URL. For more information, see [Refresh and prefetch resources](/help/en/cdn/user-guide/refresh-and-prefetch-resources).

### How to force an object to download instead of being previewed?

If you want to always force a download when a user accesses a file, you can use one of the following methods.

-   **Method 1 (Recommended): Configure in OSS**. As described in [Scenario 2](#63ad07c4a05w3), set the file's `Content-Disposition` metadata to `attachment`. This method is ideal for applying a permanent setting to a single file.
    
-   **Method 2: Configure in CDN**. If you use CDN, add the `Content-Disposition: attachment` header in the CDN console. Configure this as an outbound response header in the **Cache**. This method does not require changes to the source file in OSS and is useful for flexible, batch configurations based on specific paths or file types.
    

### Browser does not support the file format for preview

Mainstream browsers do not support online previews for some professional file formats, such as `.psd`, `.ai`, and `.sketch`. In this case, the browser downloads the file even if the OSS and CDN configurations are correct.

**Solution**: You can install a browser extension that supports previewing the file format. You can also use a professional document preview service, such as [WebOffice Online Preview](/help/en/oss/user-guide/online-object-preview).

## **Appendix:** **Quick reference for OSS forced download rules**

If an object is forced to download, check the value of the `x-oss-ec` field in the HTTP response header. Then, use the following tables to identify the cause.

-   **Error code (x-oss-ec)**: The unique ID of the rule that caused the download.
    
-   **Bucket creation time**: When you use a default domain name, the policy typically applies only to buckets created after this time. Legacy buckets created before this time are usually not affected.
    
-   **Transfer acceleration enabling time:** After you enable transfer acceleration, the policy typically applies only to buckets for which transfer acceleration is enabled after this time. Buckets for which transfer acceleration was enabled before this time are usually not affected.
    

You can bypass all forced download rules using a [custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names).

### **OSS default domain names**

**When the policy takes effect**

**Region**

**Affected resources**

**Affected file types**

**Error code**

08:00, September 28, 2018

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Shenzhen), China (Chengdu)

Buckets created after the policy takes effect

text/html

[0048-00000001](/help/en/oss/user-guide/0048-00000001#main-2280390)

12:00, September 25, 2019

China (Nanjing - Local Region - Phasing Out) China (Ulanqab), China (Heyuan), China (Guangzhou), US (Silicon Valley), US (Virginia), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok), UK (London), UAE (Dubai)

Buckets created after the policy takes effect

text/html

[0048-00000001](/help/en/oss/user-guide/0048-00000001#main-2280390)

14:00, November 25, 2019

China (Hong Kong)

Buckets created after the policy takes effect

text/html

[0048-00000001](/help/en/oss/user-guide/0048-00000001#main-2280390)

17:00, September 23, 2019

China (Hohhot)

Buckets created after the policy takes effect

image/jpeg, image/gif, image/tiff, image/png, image/webp, image/svg+xml, image/bmp, image/x-ms-bmp, image/x-cmu-raster, image/exr, image/x-icon, image/heic, text/html

[0048-00000100](/help/en/oss/user-guide/0048-00000100#main-2292854)

11:00, September 24, 2019

China (Qingdao), China (Chengdu)

Buckets created after the policy takes effect

image/jpeg, image/gif, image/tiff, image/png, image/webp, image/svg+xml, image/bmp, image/x-ms-bmp, image/x-cmu-raster, image/exr, image/x-icon, image/heic, text/html

[0048-00000101](/help/en/oss/user-guide/0048-00000101#main-2292861)

17:00, September 24, 2019

China (Zhangjiakou)

Buckets created after the policy takes effect

image/jpeg, image/gif, image/tiff, image/png, image/webp, image/svg+xml, image/bmp, image/x-ms-bmp, image/x-cmu-raster, image/exr, image/x-icon, image/heic, text/html

[0048-00000102](/help/en/oss/user-guide/0048-00000102#main-2292862)

17:00, September 29, 2019

China (Shanghai), China (Shenzhen)

Buckets created after the policy takes effect

image/jpeg, image/gif, image/tiff, image/png, image/webp, image/svg+xml, image/bmp, image/x-ms-bmp, image/x-cmu-raster, image/exr, image/x-icon, image/heic, text/html

[0048-00000103](/help/en/oss/user-guide/0048-00000103#main-2292863)

18:00, September 29, 2019

China (Beijing)

Buckets created after the policy takes effect

image/jpeg, image/gif, image/tiff, image/png, image/webp, image/svg+xml, image/bmp, image/x-ms-bmp, image/x-cmu-raster, image/exr, image/x-icon, image/heic, text/html

[0048-00000104](/help/en/oss/user-guide/0048-00000104#main-2292875)

15:00, September 30, 2019

China (Hangzhou)

Buckets created after the policy takes effect

image/jpeg, image/gif, image/tiff, image/png, image/webp, image/svg+xml, image/bmp, image/x-ms-bmp, image/x-cmu-raster, image/exr, image/x-icon, image/heic, text/html

[0048-00000105](/help/en/oss/user-guide/0048-00000105#main-2292876)

00:00, October 09, 2022

[All regions](/help/en/oss/user-guide/regions-and-endpoints)

Buckets created by users who activated OSS for the first time after 00:00 on October 9, 2022

[All](/help/en/oss/user-guide/configure-the-content-type-header#concept-5041)

[0048-00000113](/help/en/oss/user-guide/0048-00000113#main-2292898)

10:00, December 22, 2025

China (Ulanqab), China (Heyuan), China (Guangzhou), China (Nanjing - Local Region - Phasing Out)

Buckets created after the policy takes effect

image/jpeg, image/gif, image/tiff, image/png, image/webp, image/svg+xml, image/bmp, image/x-ms-bmp, image/x-cmu-raster, image/exr, image/x-icon, image/heic

[0048-00000114](/help/en/oss/user-guide/0048-00000114)

10:00, March 25, 2026

[All regions](/help/en/oss/user-guide/regions-and-endpoints)

Buckets created after the policy takes effect

Objects with filenames ending in .xml, or with Content-Type set to application/xml or text/xml

N/A

### **Acceleration endpoints**

**Effective time**

**Region**

**Affected resources**

**Affected file types**

**Error code**

00:00, December 31, 2020

[All regions](/help/en/oss/user-guide/regions-and-endpoints)

Buckets for which transfer acceleration is enabled after the policy takes effect

text/html

[0048-00000002](/help/en/oss/user-guide/0048-00000002#main-2292697)

12:00, January 07, 2021

UAE (Dubai)

Buckets for which transfer acceleration is enabled after the policy takes effect

[All](/help/en/oss/user-guide/configure-the-content-type-header#concept-5041)

[0048-00000107](/help/en/oss/user-guide/0048-00000107#main-2292886)

18:00, January 07, 2021

Malaysia (Kuala Lumpur), UK (London)

Buckets for which transfer acceleration is enabled after the policy takes effect

[All](/help/en/oss/user-guide/configure-the-content-type-header#concept-5041)

[0048-00000108](/help/en/oss/user-guide/0048-00000108#main-2292888)

18:00, January 08, 2021

Japan (Tokyo), Indonesia (Jakarta), Germany (Frankfurt)

Buckets for which transfer acceleration is enabled after the policy takes effect

[All](/help/en/oss/user-guide/configure-the-content-type-header#concept-5041)

[0048-00000109](/help/en/oss/user-guide/0048-00000109#main-2292890)

12:00, January 14, 2021

US (Silicon Valley), US (Virginia), Singapore

Buckets for which transfer acceleration is enabled after the policy takes effect

[All](/help/en/oss/user-guide/configure-the-content-type-header#concept-5041)

[0048-00000110](/help/en/oss/user-guide/0048-00000110#main-2292892)

00:00, January 16, 2021

China (Hong Kong)

Buckets for which transfer acceleration is enabled after the policy takes effect

[All](/help/en/oss/user-guide/configure-the-content-type-header#concept-5041)

[0048-00000111](/help/en/oss/user-guide/0048-00000111#main-2292893)

00:00, October 09, 2022

[All regions](/help/en/oss/user-guide/regions-and-endpoints)

Buckets created by users who activated OSS for the first time after 00:00 on October 9, 2022

[All](/help/en/oss/user-guide/configure-the-content-type-header#concept-5041)

[0048-00000113](/help/en/oss/user-guide/0048-00000113#main-2292898)

00:00, February 01, 2023

South Korea (Seoul), Philippines (Manila), Thailand (Bangkok)

Buckets for which transfer acceleration is enabled after the policy takes effect

[All](/help/en/oss/user-guide/configure-the-content-type-header#concept-5041)

[0048-00000112](/help/en/oss/user-guide/0048-00000112#main-2292895)
