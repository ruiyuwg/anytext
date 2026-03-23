An Object FC Access Point allows `GetObject` requests to automatically trigger Function Compute services that implement custom processing of data stored on Object Storage Service (OSS).

## Process overview

The following figure illustrates how an Object FC Access Point works.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3042272571/CAEQQhiBgICApOPJwBkiIDM5M2UyMDIyMDA0YzQ1ZDk4MmMxNGQ2Yzc2NmJjZDA23963382_20230830144006.372.svg)

1.  The bucket owner creates an Object FC Access Point that is associated with a function created in Function Compute.
    
2.  The Object FC Access Point is automatically created based on the specified settings.
    
3.  The user sends a GetObject request to OSS by using the Object FC Access Point. OSS invokes the defined function to process and return requested data to the user.
    

## Limits

Limit

Description

Creation methods

You can create an Object FC Access Point only by using the OSS console or OSS API. You cannot create an Object FC Access Point by using OSS SDKs or ossutil.

Number of Object FC Access Points

-   You can create up to 1,000 Object FC Access Points for an Alibaba Cloud account.
    
-   You can create up to 100 Object FC Access Points for a bucket.
    

Modification rule

After you create an Object FC Access Point, you can modify only its policy. You cannot modify the basic information about the Object FC Access Point, such as its name and alias.

Access methods

An Object FC Access Point does not support anonymous access.

## Get started with Object FC Access Points

-   [Create Object FC Access Points](/help/en/oss/user-guide/create-object-fc-access-point)
    
-   [Compile a function that is used to process GetObject requests](/help/en/oss/user-guide/use-function-compute-to-process-get-object-requests)
    
-   [Use Object FC Access Points](/help/en/oss/user-guide/use-object-fc-access-point)
