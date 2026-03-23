-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Storage](https://docs.cloud.google.com/docs/storage)
-   [Cloud Storage](https://docs.cloud.google.com/storage/docs)
-   [Guides](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)

Send feedback

# About Cloud Storage buckets Stay organized with collections Save and categorize content based on your preferences.

This page describes buckets, a resource in Cloud Storage. For a general overview of how Cloud Storage works, see the [Cloud Storage product overview](/storage/docs/introduction).

## Buckets

Buckets are the basic containers that hold your data as [objects](/storage/docs/objects). Everything that you store in Cloud Storage must be contained in a bucket. You can use buckets to organize your data and control access to your data, but unlike directories and folders, you cannot nest buckets.

-   There is no limit to the number of buckets you can have in a project or [location](/storage/docs/locations).
    
    -   There are, however, [limits to the rate you can create or delete buckets](/storage/quotas).
-   When you [create a bucket](/storage/docs/creating-buckets), you give it a [globally-unique name](#naming) and a [geographic location](/storage/docs/locations) where the bucket and its contents are stored.
    
    -   You cannot change the name of an existing bucket. Instead, you can create a new bucket with the name you want and move the contents from the old bucket to the new bucket. See [Move and rename buckets](/storage/docs/moving-buckets) for a step-by-step guide.

-   Pricing (such as charges for data storage, data processing, and network outbound data transfer) depends on factors such as the bucket's location and the storage classes of objects within it. For more details, see [Cloud Storage pricing](/storage/pricing).

-   You can use [Identity and Access Management (IAM)](/storage/docs/access-control/iam) to control access to individual buckets.

## Bucket names

Your bucket names must meet the following requirements:

-   Bucket names can only contain lowercase letters, numeric characters, dashes (`-`), underscores (`_`), and dots (`.`). Spaces are not allowed. Names containing dots require [verification](/storage/docs/domain-name-verification).
-   Bucket names must start and end with a number or letter.
-   Bucket names must contain 3-63 characters. Names containing dots can contain up to 222 characters, but each dot-separated component can be no longer than 63 characters.
-   Bucket names cannot be represented as an IP address in dotted-decimal notation (for example, 192.168.5.4).
-   Bucket names cannot begin with the "goog" prefix.
-   Bucket names cannot contain "google" or close misspellings, such as "g00gle".

### Example bucket names

The following are examples of valid bucket names:

-   `my-travel-maps`
-   `0f75d593-8e7b-4418-a5ba-cb2970f0b91e`
-   `test.example.com` (Requires [verification of ownership for `example.com`](/storage/docs/domain-name-verification))

The following are examples of invalid bucket names:

-   `My-Travel-Maps` (contains uppercase letters)
-   `my_google_bucket` (contains "google")
-   `test bucket` (contains a space)

### Bucket name considerations

-   Bucket names reside in a single namespace that is shared by all Cloud Storage users. This means that:
    
    -   Every bucket name must be globally unique.
        
        If you try to create a bucket with a name that already belongs to an existing bucket, such as `example-bucket`, Cloud Storage responds with an error message.
        
    -   Bucket names are publicly visible.
        
        Don't use user IDs, email addresses, project names, project numbers, or any personally identifiable information (PII) in bucket names because anyone can probe for the existence of a bucket.
        
-   Once you delete a bucket, anyone can reuse its name for a new bucket.
    
    -   The time it takes a deleted bucket's name to become available again is typically on the order of seconds; however, keep in mind the following:
        
        -   If you delete the project that contains the bucket, which effectively deletes the bucket as well, the bucket name may not be released for weeks or longer.
            
        -   If someone reuses your bucket's name, you cannot restore your deleted bucket even if the bucket has soft delete enabled.
            
        -   If a new bucket with the same name is created in a different location and within 10 minutes of the old bucket's deletion, requests made to the new bucket during this 10 minute timeframe might fail with a `404-Bucket Not Found` error.
            
        -   If your requests go through the [XML API](/storage/docs/xml-api), attempts to create a bucket that reuses a name in a new location might fail with a `404-Bucket Not Found` error for up to 10 minutes after the old bucket's deletion.
            
    -   If someone reuses your bucket's name, they could inadvertently receive data or requests intended for your original deleted bucket. To mitigate this risk, consider the following best practices:
        
        -   When creating buckets, use a strong naming convention that's not easy to guess or predict.
            
        -   When deleting buckets, make sure to remove all references of the deleted bucket's name, such as from external documentation or open source repositories.
            
        -   If you no longer need a bucket, consider emptying all objects from the bucket and keeping the bucket instead of deleting it.
            
-   You can use a bucket name in a DNS record as part of a `CNAME` or `A` redirect.
    
    In order to do so, your bucket name should conform to standard DNS naming conventions. This means that your bucket name shouldn't use underscores (`_`) or have a period next to another period or dash. For example, `..`, `-.`, and `.-` are invalid character combinations within DNS names.
    

## Access data in buckets by using folders or directories

Although Cloud Storage stores unstructured data in the form of objects, some features let you access and manage your data using folders or directories.

### Hierarchical namespace

When you create buckets, you can optionally enable [hierarchical namespace](/storage/docs/hns-overview) for the bucket, which lets you use [folders](/storage/docs/folders-overview) to store your objects in a file system manner. Organizing your objects into folders makes it easier to run operations on large scales of data, improving performance, consistency, and ease of management. Using buckets with hierarchical namespace enabled is especially beneficial when working with data-intensive and file-oriented workloads.

To get started using hierarchical namespace, see [Create buckets with hierarchical namespace enabled](/storage/docs/create-hns-bucket).

### Cloud Storage FUSE

[Cloud Storage FUSE](/storage/docs/cloud-storage-fuse/overview) is a FUSE adapter that lets you mount and access buckets as local file systems, so applications can read and write objects in your bucket using standard file system semantics. Cloud Storage FUSE lets you store your data in Cloud Storage with all the service's benefits, all while retaining the ability to access that data using your application's code without needing changes.

To learn how to use Cloud Storage FUSE, see the [Cloud Storage FUSE quickstart](/storage/docs/cloud-storage-fuse/quickstart-mount-bucket).

## What's next

-   [Create Cloud Storage buckets](/storage/docs/creating-buckets).
-   [Rename an existing bucket](/storage/docs/moving-buckets).
-   Learn about the [metadata associated with a bucket](/storage/docs/bucket-metadata).
-   [Upload an object](/storage/docs/uploading-objects).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
