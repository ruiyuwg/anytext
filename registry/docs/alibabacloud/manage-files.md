Alibaba Cloud Object Storage Service(OSS) offers comprehensive management features designed to streamline data handling. These encompass fundamental operations, metadata management, search and querying tools, performance optimizations for uploads and downloads, as well as the mount feature.

**Basic Management**

-   [List objects](/help/en/oss/user-guide/list-objects-18): List objects within a bucket, with options to filter by prefix or limit the number of results.
    
-   [Copy objects](/help/en/oss/user-guide/copy-objects-16): Copy objects in the same or between different buckets within the same region, facilitating data backup and migration.
    
-   [Rename objects](/help/en/oss/user-guide/rename-objects): Rename objects for efficient management and organization.
    
-   [Restore objects](/help/en/oss/user-guide/restore-objects-for-access): Archive, Cold Archive, and Deep Cold Archive objects must be restored before you can access them.
    
-   [Delete objects](/help/en/oss/user-guide/delete-objects-18): Delete unnecessary objects to reclaim storage space.
    
-   [Delete parts](/help/en/oss/user-guide/delete-parts): Clean up unnecessary parts generated during multipart uploads to reclaim storage space.
    
-   [Symbolic Link](/help/en/oss/user-guide/configure-symbolic-links): Create shortcuts to provide quick access.
    

**Property Management**

-   [Object Tagging](/help/en/oss/user-guide/object-tagging-8): Tag objects for categorized management, enabling the application of lifecycle rules and access privileges based on these tags.
    
-   [Manage object metadata](/help/en/oss/user-guide/manage-object-metadata-10/): Configures HTTP request behaviors such as caching and forced download by setting standard HTTP properties, and employs custom metadata for additional file identification and attributes.
    

**Search Queries**

-   [Query objects](/help/en/oss/user-guide/query-objects): Executes SQL queries directly within OSS to analyze CSV or JSON files, eliminating the need to download them for analysis.
    
-   [Search objects](/help/en/oss/user-guide/search-for-objects): Rapidly locates files using the file name prefix, particularly effective in buckets containing many files.
    

**Upload and Download Optimization**

-   [Single-connection bandwidth throttling](/help/en/oss/user-guide/single-connection-bandwidth-throttling-4): Regulates the bandwidth for uploads and downloads to prevent the overuse of network resources.
    

**Mounting Features**

-   [Mount OSS through Cloud Storage Gateway](/help/en/oss/user-guide/use-csg-to-attach-oss-buckets-to-ecs-instances): Integrates OSS as a file storage system, allowing you to manage OSS data as though it were local files.
