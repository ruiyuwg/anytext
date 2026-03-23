This topic describes how to list objects in a bucket. For example, you can list all objects, a specific number of objects, and objects whose names contain a specific prefix in a bucket.

## Usage notes

-   Before you run the sample code in this topic, you must create an OSSClient instance using methods such as using a custom domain name or Security Token Service (STS). For more information, see [Initialization](/help/en/oss/developer-reference/initialization-8#concept-32057-zh).
    
    **Note**
    
    When you initialize an OSSClient instance, specify an endpoint that maps to the region of the bucket.
    
-   To list files, you need the `ossGetObject` permission. For more information, see [Grant custom access policies to RAM users](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## List a specific number of objects

The following sample code provides an example on how to list up to 20 objects in a bucket named examplebucket:

```
OSSGetBucketRequest * getBucket = [OSSGetBucketRequest new];
// Specify the name of the bucket. Example: examplebucket. 
getBucket.bucketName = @"examplebucket";
// Specify the maximum number of returned objects. By default, the value of this parameter is 100. The maximum value you can specify is 1000. 
getBucket.maxKeys = 20;

OSSTask * getBucketTask = [client getBucket:getBucket];
[getBucketTask continueWithBlock:^id(OSSTask *task) {
    if (!task.error) {
        OSSGetBucketResult * result = task.result;
        NSLog(@"get bucket success!");
        for (NSDictionary * objectInfo in result.contents) {
            NSLog(@"list object: %@", objectInfo);
        }
    } else {
        NSLog(@"get bucket failed, error: %@", task.error);
    }
    return nil;
}];
// Implement synchronous blocking to wait for the task to complete. 
// [getBucketTask waitUntilFinished];
```

## List objects whose names contain a specific prefix

The following sample code provides an example on how to list objects whose names contain the "file" prefix in a bucket named examplebucket:

```
OSSGetBucketRequest * getBucket = [OSSGetBucketRequest new];
// Specify the name of the bucket. Example: examplebucket. 
getBucket.bucketName = @"examplebucket";
// Specify the prefix. 
getBucket.prefix = @"file";

OSSTask * getBucketTask = [client getBucket:getBucket];
[getBucketTask continueWithBlock:^id(OSSTask *task) {
    if (!task.error) {
        OSSGetBucketResult * result = task.result;
        NSLog(@"get bucket success!");
        for (NSDictionary * objectInfo in result.contents) {
            NSLog(@"list object: %@", objectInfo);
        }
    } else {
        NSLog(@"get bucket failed, error: %@", task.error);
    }
    return nil;
}];
// Implement synchronous blocking to wait for the task to complete. 
// [getBucketTask waitUntilFinished]
```

## List objects whose names are alphabetically after the value of marker

The following sample code provides an example on how to list the objects whose names are alphabetically after the exampleobject.txt marker in a bucket named examplebucket:

```
OSSGetBucketRequest * getBucket = [OSSGetBucketRequest new];
// Specify the name of the bucket. Example: examplebucket. 
getBucket.bucketName = @"examplebucket";
// Specify the marker. Objects whose names are alphabetically after the marker are returned. 
// If the object specified by marker does not exist in the bucket, the objects whose names are alphabetically after the value of marker are returned. 
getBucket.marker = @"exampleobject.txt";

OSSTask * getBucketTask = [client getBucket:getBucket];
[getBucketTask continueWithBlock:^id(OSSTask *task) {
    if (!task.error) {
        OSSGetBucketResult * result = task.result;
        NSLog(@"get bucket success!");
        for (NSDictionary * objectInfo in result.contents) {
            NSLog(@"list object: %@", objectInfo);
        }
    } else {
        NSLog(@"get bucket failed, error: %@", task.error);
    }
    return nil;
}];
// Implement synchronous blocking to wait for the task to complete. 
// [getBucketTask waitUntilFinished]
```

## List objects by page

First, declare global variables that are related to the list operation.

```
@interface ... {
    NSString *_marker;
    BOOL _isCompleted;
}
@end
```

The following sample code provides an example on how to list objects in the examplebucket bucket by page. In this example, up to 20 objects are returned per page.

```
 do {
    OSSGetBucketRequest *getBucket = [OSSGetBucketRequest new];
    getBucket.bucketName = @"examplebucket";
    getBucket.marker = _marker;  // Accessing the _marker instance variable
    getBucket.maxKeys = 20;

    OSSTask *getBucketTask = [client getBucket:getBucket];
    [getBucketTask continueWithBlock:^id(OSSTask *task) {
        if (!task.error) {
            OSSGetBucketResult *result = task.result;
            NSLog(@"Get bucket success!");
            NSLog(@"objects: %@", result.contents);
            if (result.isTruncated) {
                _marker = result.nextMarker;  // Update the _marker instance variable
                _isCompleted = NO;
            } else {
                _isCompleted = YES;
            }
        } else {
            _isCompleted = YES;
            NSLog(@"Get bucket failed, error: %@", task.error);
        }
        return nil;
    }];
    // Implement synchronous blocking to wait for the task to complete. 
    [getBucketTask waitUntilFinished];
} while (!_isCompleted);
```

## List objects whose names contain the specified prefix by page

First, declare global variables that are related to the list operation.

```
@interface ... {
    NSString *_marker;
    BOOL _isCompleted;
}
@end
```

The following sample code provides an example on how to list objects with name prefix "file" in the examplebucket bucket. In this example, up to 20 objects are returned per page.

```
do {
    OSSGetBucketRequest *getBucket = [OSSGetBucketRequest new];
    getBucket.bucketName = @"examplebucket";
    getBucket.marker = _marker;  // Accessing the _marker instance variable
    getBucket.maxKeys = 20;
    getBucket.prefix = @"file";

    OSSTask *getBucketTask = [client getBucket:getBucket];
    [getBucketTask continueWithBlock:^id(OSSTask *task) {
        if (!task.error) {
            OSSGetBucketResult *result = task.result;
            NSLog(@"Get bucket success!");
            NSLog(@"objects: %@", result.contents);

            if (result.isTruncated) {
                _marker = result.nextMarker;  // Update the _marker instance variable
                _isCompleted = NO;
            } else {
                _isCompleted = YES;
            }
        } else {
            _isCompleted = YES;
            NSLog(@"Get bucket failed, error: %@", task.error);
        }
        return nil;
    }];
    // Implement synchronous blocking to wait for the task to complete. 
    [getBucketTask waitUntilFinished];
} while (!_isCompleted);
```

## References

-   For more information about the API operation that you can call to list objects, see [GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects#reference-iwr-xlv-tdb).
    
-   For more information about how to initialize an OSSClient instance, see [Initialization](/help/en/oss/developer-reference/initialization-8#concept-32057-zh).
