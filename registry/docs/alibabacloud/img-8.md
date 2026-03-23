OSS Image Processing (IMG) lets you resize, crop, rotate, and otherwise transform images stored in OSS buckets on the fly, using standard HTTP GET requests. IMG parameters are passed in the query string of an image object URL.

If the access control list (ACL) of an image object is private, only authorized users can access it.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket with at least one image object uploaded
    
-   The OSS iOS SDK installed and configured in your project
    

## Apply image processing when downloading an image

### Anonymous access

Use `presignPublicURLWithBucketName:withObjectKey:withParameters:` to generate a public URL that includes IMG parameters. This approach works only for objects with public-read ACL.

```
OSSTask *task = [client presignPublicURLWithBucketName:@"examplebucket"
                                         withObjectKey:@"exampledir/example.jpg"
                                        withParameters:@{@"x-oss-process": @"image/resize,w_50"}];

[task continueWithBlock:^id(OSSTask *task) {
    if (!task.error) {
        NSLog(@"download image success!");
        OSSGetObjectResult *getResult = task.result;
        NSLog(@"download image data: %@", getResult.downloadedData);
    } else {
        NSLog(@"download object failed, error: %@", task.error);
    }
    return nil;
}];
```

The `x-oss-process` parameter value follows the format `image/<action>,<key>_<value>`. For example, `image/resize,w_50` resizes the image to 50 pixels wide.

### Authorized access

For objects with private ACL, set `request.xOssProcess` on an `OSSGetObjectRequest` to apply IMG parameters when downloading.

```
OSSGetObjectRequest *request = [OSSGetObjectRequest new];
// Bucket that contains the image
request.bucketName = @"examplebucket";
// Full path to the image. If the image is in the bucket root, omit the directory prefix.
request.objectKey = @"exampledir/example.jpg";
// image/resize,m_lfit,w_100,h_100
//   m_lfit  → fit the image within the bounding box, preserving aspect ratio
//   w_100   → maximum width: 100 px
//   h_100   → maximum height: 100 px
request.xOssProcess = @"image/resize,m_lfit,w_100,h_100";

OSSTask *getTask = [client getObject:request];
[getTask continueWithBlock:^id(OSSTask *task) {
    if (!task.error) {
        NSLog(@"download image success!");
        OSSGetObjectResult *getResult = task.result;
        NSLog(@"download image data: %@", getResult.downloadedData);
    } else {
        NSLog(@"download object failed, error: %@", task.error);
    }
    return nil;
}];

// Block the calling thread until the download completes (optional):
// [getTask waitUntilFinished];

// Cancel an in-progress download (optional):
// [request cancel];
```

## Save a processed image to a bucket

Use `OSSImagePersistRequest` to apply an IMG operation and write the result directly to a destination bucket, without downloading the image locally.

> The destination bucket (`toBucket`) must be in the same region as the source bucket (`fromBucket`).

```
OSSImagePersistRequest *request = [OSSImagePersistRequest new];
// Source image
request.fromBucket = @"srcbucket";
request.fromObject = @"exampledir/src.jpg";  // Full path, or just "src.jpg" if in the bucket root

// Destination for the processed image (must be in the same region as fromBucket)
request.toBucket = @"destbucket";
request.toObject = @"exampledir/dest.jpg";

// image/resize,w_100 → resize to 100 px wide, preserving aspect ratio
request.action = @"image/resize,w_100";
// request.action = @"resize,w_100";

OSSTask *task = [client imageActionPersist:request];
[task continueWithBlock:^id _Nullable(OSSTask * _Nonnull task) {
    if (!task.error) {
        NSLog(@"image saved successfully");
    } else {
        NSLog(@"failed to save image, error: %@", task.error);
    }
    return nil;
}];
```

## Generate a signed URL with IMG parameters

For private image objects, IMG parameters must be included in the URL signature—you cannot append them to an already-signed URL. Use `presignConstrainURLWithBucketName:withObjectKey:withExpirationInterval:withParameters:` to generate a signed URL that embeds the processing parameters.

```
NSString *bucketName = @"examplebucket";
NSString *objectKey = @"exampledir/example.jpg";

// Generate a signed URL valid for 1,800 seconds (30 minutes)
// that resizes the image to 50 px wide (image/resize,w_50)
OSSTask *task = [_client presignConstrainURLWithBucketName:bucketName
                                             withObjectKey:objectKey
                                      withExpirationInterval:30 * 60
                                            withParameters:@{@"x-oss-process": @"image/resize,w_50"}];
NSLog(@"url: %@", task.result);
```

## What's next

For the full list of supported IMG operations and parameter syntax, see [IMG parameters](/help/en/oss/user-guide/overview-17/#section-tx1-qtj-ar8).
