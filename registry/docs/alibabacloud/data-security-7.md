Object Storage Service (OSS) SDK for iOS provides data integrity checks to ensure data security in uploads and downloads.

## Data integrity checks in uploads

Due to the complexity of mobile networks, an error may occur when data is transferred between the client and server. OSS provides end-to-end data integrity checks based on the MD5 and CRC-64 algorithms.

-   MD5 verification
    
    If you specify the Content-MD5 header in the request when you upload an object, OSS performs MD5 verification on the object to ensure data integrity. The object is uploaded only when the MD5 hash of the received object is consistent with the Content-MD5 value specified in the request.
    
    ```
    OSSPutObjectRequest * put = [OSSPutObjectRequest new];
    // Specify the name of the bucket. Example: examplebucket. 
    put.bucketName = @"examplebucket";
    // Specify the full path of the object. Example: exampledir/exampleobject.txt. Do not include the bucket name in the full path. 
    put.objectKey = @"exampledir/exampleobject.txt";
    put.uploadingFileURL = [NSURL fileURLWithPath:@"<filePath>"];
    // put.uploadingData = <NSData *>; // Directly upload NSData. 
    // Specify Content-MD5. 
    put.contentMd5 = [OSSUtil base64Md5ForFilePath:@"<filePath>"]; 
    OSSTask * putTask = [client putObject:put];
    [putTask continueWithBlock:^id(OSSTask *task) {
        if (!task.error) {
            NSLog(@"upload object success!");
        } else {
            NSLog(@"upload object failed, error: %@" , task.error);
        }
        return nil;
    }];
    // waitUntilFinished blocks execution of the current thread but does not block the task progress. 
    // [putTask waitUntilFinished];     
    ```
    
-   CRC verification
    
    The 64-bit CRC value of an object can be calculated when the object is being uploaded. The following sample code provides an example on how to perform CRC when you upload an object:
    
    ```
    OSSPutObjectRequest * put = [OSSPutObjectRequest new];
    // Specify the name of the bucket. Example: examplebucket. 
    put.bucketName = @"examplebucket";
    // Specify the full path of the object. Example: exampledir/exampleobject.txt. Do not include the bucket name in the full path. 
    put.objectKey = @"exampledir/exampleobject.txt";
    put.uploadingFileURL = [NSURL fileURLWithPath:@"<filePath>"];
    // put.uploadingData = <NSData *>; // Directly upload NSData. 
    // Enable CRC verification. 
    put.crcFlag = OSSRequestCRCOpen;
    OSSTask * putTask = [client putObject:put];
    [putTask continueWithBlock:^id(OSSTask *task) {
        if (!task.error) {
            NSLog(@"upload object success!");
        } else {
            NSLog(@"upload object failed, error: %@" , task.error);
        }
        return nil;
    }];
    // waitUntilFinished blocks execution of the current thread but does not block the task progress. 
    // [putTask waitUntilFinished];
    ```
    

## Data integrity checks in downloads

OSS SDK for iOS provides end-to-end data integrity checks based on 64-bit CRC values in downloads.

If CRC verification is enabled, OSS automatically checks data integrity after it reads data from a stream.

The following sample code provides an example on how to enable CRC verification in downloads:

```
OSSGetObjectRequest * request = [OSSGetObjectRequest new];
request.bucketName = @"examplebucket";
request.objectKey = @"exampledir/exampleobject.txt";
// Specify the local path to which the object is downloaded.
request.downloadToFileURL = [NSURL fileURLWithPath:@"<filePath>"];
// Enable CRC verification. 
request.crcFlag = OSSRequestCRCOpen;
OSSTask * task = [client getObject:request];
[task continueWithBlock:^id(OSSTask *task) {
    if (!task.error) {
        NSLog(@"download object success!");
    } else {
        NSLog(@"download object failed, error: %@" ,task.error);
    }
    return nil;
}];
// [task waitUntilFinished];
```

If the onReceiveData block is set, you must check whether the CRC value is the same.

```
OSSGetObjectRequest * request = [OSSGetObjectRequest new];
request.bucketName = @"examplebucket";
request.objectKey = @"exampledir/exampleobject.txt";
// Specify the local path to which the object is downloaded.
request.downloadToFileURL = [NSURL fileURLWithPath:@"<filePath>"];
// Enable CRC verification.
request.crcFlag = OSSRequestCRCOpen;
__block uint64_t localCrc64 = 0;
NSMutableData *receivedData = [NSMutableData data];
request.onRecieveData = ^(NSData *data) {
    if (data)
    {
        NSMutableData *mutableData = [data mutableCopy];
        void *bytes = mutableData.mutableBytes;
        localCrc64 = [OSSUtil crc64ecma:localCrc64 buffer:bytes length:data.length];
        [receivedData appendData:data];
    }
};
__block uint64_t remoteCrc64 = 0;
OSSTask * task = [client getObject:request];
[task continueWithBlock:^id(OSSTask *task) {
    OSSGetObjectResult *result = task.result;
    if (result.remoteCRC64ecma)
    {
        NSScanner *scanner = [NSScanner scannerWithString:result.remoteCRC64ecma];
        [scanner scanUnsignedLongLong:&remoteCrc64];
        if (remoteCrc64 == localCrc64)
        {
            NSLog(@"CRC-64 verification successful!");
        }
        else
        {
            NSLog(@"CRC-64 verification failed!!");
        }
   }
   return nil;
}];
// waitUntilFinished blocks execution of the current thread but does not block the task progress. 
// [task waitUntilFinished];
```
