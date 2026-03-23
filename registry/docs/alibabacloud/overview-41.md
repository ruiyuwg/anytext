In Object Storage Service (OSS), an object is the basic unit of data. The OSS SDK for C# provides several ways to upload objects:

-   [Simple upload (C# SDK V1)](/help/en/oss/developer-reference/simple-upload-9#concept-91093-zh): The maximum object size is 5 GB.
    
-   [Append upload (C# SDK V1)](/help/en/oss/developer-reference/append-upload-10#concept-91099-zh): The maximum object size is 5 GB.
    
-   [Resumable upload (C# SDK V1)](/help/en/oss/developer-reference/resumable-upload-8#concept-91101-zh): Supports resuming interrupted uploads, concurrent uploads, and custom part sizes. This method is recommended for large objects. The maximum object size is 48.8 TB.
    
-   [Multipart upload (C# SDK V1)](/help/en/oss/developer-reference/multipart-upload-10#concept-91103-zh): Use this method for large objects. The maximum object size is 48.8 TB.
    

During an upload, you can [set object metadata](/help/en/oss/developer-reference/manage-object-metadata-8#concept-91920-zh) and view the upload progress using the [progress bar chart (C# SDK V1)](/help/en/oss/developer-reference/progress-bars-6#concept-91108-zh). After the upload is complete, you can also configure an [upload callback (C# SDK V1)](/help/en/oss/developer-reference/upload-callbacks-9#concept-91107-zh).
