This document describes how to upload files using the OSS iOS SDK.

An object is the basic unit of data in OSS. The OSS iOS SDK provides four methods to upload files:

-   [Simple upload (iOS SDK)](/help/en/oss/developer-reference/simple-upload-5#concept-vp1-tbg-4fb): Uploads a file from memory or a local file. The maximum file size is 5 GB.
    
-   [Multipart upload (iOS SDK)](/help/en/oss/developer-reference/multipart-upload-7#concept-ch3-ffg-4fb): Uploads large files. The maximum file size is 48.8 TB.
    
-   [Append upload (iOS SDK)](/help/en/oss/developer-reference/append-upload-7#concept-svd-kfg-4fb): The maximum file size is 5 GB.
    
-   [Resumable upload (iOS SDK)](/help/en/oss/developer-reference/resumable-upload-3#concept-32063-zh): Supports concurrent uploads and custom shard sizes. Resumable upload is recommended for large files. The maximum file size is 48.8 TB.
    

**Note**

For more information about the scenarios for each upload method, see [Upload files](/help/en/oss/user-guide/upload-objects-to-oss/).

You can monitor the upload progress with a [progress bar chart (iOS SDK)](/help/en/oss/developer-reference/progress-bar-3) and configure an [upload callback (iOS SDK)](/help/en/oss/developer-reference/upload-callbacks-7#concept-crq-tfg-4fb).
