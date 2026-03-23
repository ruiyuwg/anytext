The OSS Java SDK supports various operations on objects. You can select an operation based on your business scenario:

-   [Upload objects (Java SDK V1)](/help/en/oss/developer-reference/overview-13/): Supports multiple upload methods, such as simple, append, resumable, and multipart uploads, to suit different scenarios. For large files or unstable network connections, use resumable and multipart uploads to ensure data integrity. The SDK also provides an upload progress bar for real-time monitoring.
    
-   [Download objects (Java SDK V1)](/help/en/oss/developer-reference/overview-10/): Supports various download methods, such as streaming, downloading to a local file, range downloads, resumable downloads, conditional downloads, and using a signed URL. For large files or unstable networks, resumable downloads can resume from the last breakpoint to improve efficiency. A download progress bar is also available for real-time monitoring.
    
-   [Manage objects (Java SDK V1)](/help/en/oss/developer-reference/manage-objects-4/): You can perform various management operations on objects, such as changing the storage class, setting metadata, renaming, deleting, and adding tags for classification. You can also configure lifecycle rules to automatically delete expired content, which allows for flexible management.
    
-   [Manage folders (Java SDK V1)](/help/en/oss/developer-reference/manage-directories): You can use a forward slash (/) to simulate a folder hierarchy to organize objects for group management.
    
-   [Scalar retrieval (Java SDK V1)](/help/en/oss/developer-reference/data-indexing-2): The SDK provides a powerful data indexing feature to efficiently retrieve large-scale data stored in OSS. By creating a suitable index policy, you can quickly locate the objects you need from petabytes of data and significantly improve retrieval efficiency.
    
-   [LiveChannel management (Java SDK V1)](/help/en/oss/developer-reference/common-operations-of-oss-sdk-for-java-on-livechannels): You can use the Java SDK to perform common LiveChannel operations, such as creating, listing, and deleting LiveChannels.
