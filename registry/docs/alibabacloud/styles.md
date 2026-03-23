You can add multiple processing parameters to a style to perform complex operations on media, documents, or images that are stored in an Object Storage Service (OSS) bucket.

**Note**

You can use the data processing features of OSS in the regions supported by [Intelligent Media Management (IMM) endpoints](/help/en/imm/developer-reference/api-imm-2020-09-30-endpoint) by calling API operations or using SDKs.

## Use a custom style

### **Create a style**

**Note**

You can create up to 50 styles for a bucket. You can use the styles only for the objects stored in the bucket. If your business requires more styles, contact OSS [technical support](https://smartservice.console.alibabacloud.com/#/ticket/createIndex).

1.  Log on to the [OSS](https://oss.console.alibabacloud.com/overview) console.
    
2.  In the left-side navigation pane, click **Buckets**. On the Buckets page, click the name of the bucket for which you want to create a style.
    
3.  In the left-side navigation tree, click **Data Processing**.
    
4.  In the left-side navigation tree, click **IMG**, **Document Processing**, **Media Processing**, or other data processing features based on the type of the object that you want to process.
    
5.  Click the **Style Management** tab and then click **Create Style**.
    
6.  In the **Create Style** panel, configure the parameters to create a style.
    
7.  Click **OK**.
    

### **Use a style**

After you create a style for a bucket, you can use the style when you process objects in the bucket by using object URLs or asynchronous requests.

#### **Use object URLs for synchronous processing**

You can add the style to the URL of an object for synchronous processing. After you add the style, the object URL is in the `http(s)://BucketName.Endpoint/ObjectName?x-oss-process=style/StyleName` format. The following table describes the parameters in the format.

**Parameter**

**Description**

**Example**

`http(s)://BucketName.Endpoint/ObjectName`

The URL of the object. For more information, see [Using presigned URLs to download objects](/help/en/oss/user-guide/how-to-obtain-the-url-of-a-single-object-or-the-urls-of-multiple-objects).

[https://oss-console-img-demo-cn-hangzhou-3az.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=style/small](https://oss-console-img-demo-cn-hangzhou-3az.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=style/small)

`x-oss-process=style/`

Specifies that the object is processed by using style parameters. This parameter is a fixed parameter.

`StyleName`

The name of the style.

You can also specify custom delimiters and map a custom domain name to the bucket to simplify the object URL. Example:

-   Use an exclamation point (`!`) to replace `x-oss-process=style/`.
    
-   Map a custom domain name to the bucket to further simplify the object URL. For more information, see [Map a custom domain name to the default domain name of a bucket](/help/en/oss/user-guide/access-buckets-via-custom-domain-names#concept-rz2-xg5-tdb).
    

For example, if you map the custom domain name `example.com` to the bucket, you can use `https://example.com/example.jpg!small` to process the object.

**Note**

Starting from 00:00:00 on October 9, 2022, you can no longer preview objects in a created bucket in the OSS console or by calling API operations. To use the online preview feature, you must map a custom domain name to a bucket. Otherwise, the online preview feature cannot be used. For more information, see [Alibaba Cloud OSS Update - Response Header upgrade when objects stored in buckets are accessed](https://www.alibabacloud.com/en/notice/alibaba_cloud_oss_update_response_header_upgrade_when_objects_stored_in_buckets_are_accessed_17e?spm=a3c0i.29367734.6737026690.5.41876e9b6bYSHT&_p_lc=1).

#### **Use a style for asynchronous processing**

Below is the sample code for asynchronously processing an object using x-oss-async-process=style/StyleName:

```
POST /ObjectName?x-oss-async-process HTTP/1.1
Host: video-demo.oss-cn-hangzhou.aliyuncs.com
Date: Fri, 28 Oct 2022 06:40:10 GMT
Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
 
 // Use the StyleName style to asynchronously process the example.avi object and save the processed object as oss://outbucket/outobjprefix.mp4. 
x-oss-async-process=style/StyleName|sys/saveas,b_b3V0YnVja2V0,o_b3V0b2JqcHJlZml4LnthdXRvZXh0fQ
```

The following table describes the parameters in the preceding sample code.

**Parameter**

**Description**

`/ObjectName`

The name of the object.

`x-oss-async-process=style/`

Specifies that the object is processed by using style parameters. This parameter is a fixed parameter.

`StyleName`

The name of the style.

## Use built-in styles

In addition to custom styles, you can also use built-in styles for processing.

#### **Use a style for** asynchronous processing

Below is the sample code for asynchronously processing an object using x-oss-async-process=style/::systemStyleName:

```
POST /ObjectName?x-oss-async-process HTTP/1.1
Host: video-demo.oss-cn-hangzhou.aliyuncs.com
Date: Fri, 28 Oct 2022 06:40:10 GMT
Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
 
// Process example.avi asynchronously using the built-in style named h264-mp4-1080p, and save the processed object as oss://outbucket/outobjprefix.mp4.
x-oss-async-process=style/::h264-mp4-1080p|sys/saveas,b_b3V0YnVja2V0,o_b3V0b2JqcHJlZml4LnthdXRvZXh0fQ
```

The following table describes the parameters in the preceding sample code.

**Parameter**

**Description**

`ObjectName`

The name of the object.

`x-oss-async-process=style/`

Specifies that the object is processed by using style parameters. This parameter is a fixed parameter.

`::` 

Specifies that a built-in style is used.

`systemStyleName`

The name of the built-in style.

**Note**

You can view all built-in style parameters that are supported on the **Data Processing****\>****Media Processing** page.

## **Import styles from a source bucket to a destination bucket**

**Note**

Only image processing (IMG) allows you to import styles from a source bucket to a destination bucket.

You can import styles that are created in a source bucket to a destination bucket. This way, you can use the styles to process image objects in the destination bucket.

1.  Export styles from the source bucket.
    
    1.  In the left-side navigation tree of the source bucket, choose **Data Processing** > **IMG**.
        
    2.  On the **IMG** page, click **Export Style**.
        
    3.  In the Save As dialog box, select the path to which you want to save the styles and click **Save**.
        
2.  Import the styles to the destination bucket.
    
    1.  In the left-side navigation tree of the destination bucket, choose **Data Processing** > **IMG**.
        
    2.  On the **IMG** page, click **Import Style**.
        
    3.  In the Open dialog box, select the exported styles and click **Open**.
        
        After you import the styles to the destination bucket, you can use the styles to process images in the destination bucket.
        

## **References**

-   For information about how to use parameters to process objects, see [Synchronous processing](/help/en/oss/user-guide/synchronous-processing).
    
-   For information about how to store processed objects in OSS, see [sys/saveas](/help/en/oss/user-guide/sys-or-saveas).
