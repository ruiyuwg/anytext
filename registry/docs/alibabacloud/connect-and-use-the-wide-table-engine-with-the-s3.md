This topic describes how to use the Amazon Simple Storage Service (S3) API for Java to connect to and use LindormTable and provides examples.

## Prerequisites

-   Java Development Kit (JDK) V1.8 or later is installed.
    
-   An endpoint that corresponds to **S3 Compatibility Address** on the Wide Table Engine tab in the Lindorm console is obtained. For more information, see [View endpoints](/help/en/lindorm/user-guide/view-endpoints#task-2143195).
    
-   The IP address of your client is added to the whitelist of your Lindorm instance. For more information, see [Configure whitelists](/help/en/lindorm/getting-started/configure-a-whitelist#task-2045184).
    

## Procedure

1.  Install the S3 SDK for Java. Open the Eclipse client, create a project, and then configure the Maven dependency for Java in the _pom.xml_ file.
    
    -   For Java SDK V1.x, add the following Maven dependency to the configuration file:
        
        ```
        <dependency>
          <groupId>com.amazonaws</groupId>
          <artifactId>aws-java-sdk-s3</artifactId>
          <version>1.11.655</version>
        </dependency>
        ```
        
    -   For Java SDK V2.x, add the following Maven dependency to the configuration file:
        
        ```
        <dependency>
          <groupId>software.amazon.awssdk</groupId>
          <artifactId>aws-sdk-java</artifactId>
          <version>2.17.32</version>
        </dependency>
        ```
        
2.  Use the following sample code in the project based on your requirements to connect to LindormTable.
    

### Sample code for Java SDK V1.x

-   Create a connection.
    
    ```
    String s3Endpoint = "http://ld-bp17j28j2y7pm****-proxy-blob.lindorm.rds.aliyuncs.com:9053"; // Specify the endpoint that is required to connect to LindormTable by using the S3 protocol.
    String bucketName = "testbucket";
    
    // Establish a connection.
    AmazonS3 client = AmazonS3ClientBuilder.standard()
            .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(s3Endpoint, null))
            .withPathStyleAccessEnabled(true)
            .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials("AK", "SK")))
            .build();
    ```
    
    **Note**
    
    Replace the AK and SK fields in the sample code with the AccessKey ID and AccessKey secret that you actually use to connect LindormTable. We recommend that you configure the AccessKey ID and AccessKey secret as environment variables or specify them in the configuration file rather than hardcoding them.
    
-   Perform operations on buckets.
    
    ```
    // Create a bucket.
    Bucket bucket = client.createBucket(bucketName);
    
    // Check whether the bucket exists.
    HeadBucketResult result = client.headBucket(new HeadBucketRequest(bucketName));
    
    // List all buckets.
    List<Bucket> buckets = client.listBuckets(new ListBucketsRequest());
    ```
    
    **Note**
    
    To create a new user and grant the user permissions to manage buckets, see [Manage users](/help/en/doc-detail/174671.html#section-mkn-bt4-cb9) and [Manage permissions in S3 protocol compatibility](/help/en/lindorm/user-guide/s3-compatible-protocol-access-rights-management).
    
-   Perform operations on objects.
    
    ```
    String content = "content";
    // Upload an object.
    client.putObject(bucketName, key_name, content);
    
    // Read data from an object.
    S3Object object = client.getObject(bucketName, keyName);
    
    // List all objects in a bucket.
    // list v1
    ObjectListing objects = client.listObjects(bucketName);
    // list v2
    ListObjectsV2Result results = client.listObjectsV2(bucketName);
    
    // Delete an object.
    client.deleteObject(bucketName, keyName);
    
    // Delete multiple objects at a time.
    client.deleteObjects(new DeleteObjectsRequest(bucketName).withKeys(keyName));
    ```
    
-   Perform a multipart upload task.
    
    ```
    // Configure the file that you want to upload.
    File file = new File(filePath);
    long contentLength = file.length();
    long partSize = 5 * 1024 * 1024; // Set the size of each part to 5 MB.
    
    List<PartETag> partETags = new ArrayList<PartETag>();
    
    // Initialize the multipart upload task.
    InitiateMultipartUploadRequest initRequest = new InitiateMultipartUploadRequest(bucketName, keyName);
    InitiateMultipartUploadResult initResponse = client.initiateMultipartUpload(initRequest);
    
    // Upload parts.
    long filePosition = 0;
    for (int i = 1; filePosition < contentLength; i++) {
        partSize = Math.min(partSize, (contentLength - filePosition));
    
        // Send the multipart upload request.
        UploadPartRequest uploadRequest = new UploadPartRequest()
            .withBucketName(bucketName)
            .withKey(keyName)
            .withUploadId(initResponse.getUploadId())
            .withPartNumber(i)
            .withFileOffset(filePosition)
            .withFile(file)
            .withPartSize(partSize);
    
        UploadPartResult uploadResult = client.uploadPart(uploadRequest);
        partETags.add(uploadResult.getPartETag());
    
        filePosition += partSize;
    }
    
    // Complete the multipart upload task. After the task is complete, the object is visible.
    CompleteMultipartUploadRequest compRequest = new CompleteMultipartUploadRequest(bucketName, keyName,
                                                                                    initResponse.getUploadId(), partETags);
    client.completeMultipartUpload(compRequest);
    ```
    

### Sample code for Java SDK V2.x

-   Create a connection.
    
    ```
    String s3Endpoint = "http://ld-bp17j28j2y7pm****-proxy-blob.lindorm.rds.aliyuncs.com:9053"; // Specify the endpoint that is required to connect to LindormTable by using the S3 protocol.
    String bucketName = "testbucket";
    
    // Create a connection.
    AwsBasicCredentials creds = AwsBasicCredentials.create("AK", "SK");
    
    S3Client client = S3Client.builder()
        .serviceConfiguration(b -> b.checksumValidationEnabled(false))
        .region(Region.AP_EAST_1)
        .credentialsProvider(StaticCredentialsProvider.create(creds))
        .endpointOverride(new URI(s3Endpoint))
        .build();
    
    // Close the connection.
    client.close();
    ```
    
    **Note**
    
    Replace the AK and SK fields in the sample code with the AccessKey ID and AccessKey secret that you actually use to connect LindormTable. We recommend that you configure the AccessKey ID and AccessKey secret as environment variables or specify them in the configuration file rather than hardcoding them.
    
-   Perform operations on buckets.
    
    ```
    // Create a bucket.
    S3Waiter s3Waiter = client.waiter();
    CreateBucketRequest bucketRequest = CreateBucketRequest.builder()
        .bucket(bucketName)
        .build();
    
    // Check whether the bucket exists.
    client.createBucket(bucketRequest);
    HeadBucketRequest bucketRequestWait = HeadBucketRequest.builder()
        .bucket(bucketName)
        .build();
    
    WaiterResponse<HeadBucketResponse> waiterResponse = s3Waiter.waitUntilBucketExists(bucketRequestWait);
    waiterResponse.matched().response().ifPresent(System.out::println);
    ```
    
    **Note**
    
    To create a new user and grant the user permissions to manage buckets, see [Manage users](/help/en/doc-detail/174671.html#section-mkn-bt4-cb9) and [Manage permissions in S3 protocol compatibility](/help/en/lindorm/user-guide/s3-compatible-protocol-access-rights-management).
    
-   Perform operations on objects.
    
    ```
    // Write data to an object.
    PutObjectRequest putOb = PutObjectRequest.builder()
            .bucket(bucketName)
            .key(keyName)
            .build();
    
    PutObjectResponse response = client.putObject(putOb,
            RequestBody.fromString("content"));
    
    // Read data from an object.
    GetObjectRequest objectRequest = GetObjectRequest
            .builder()
            .key(keyName)
            .bucket(bucketName)
            .build();
    
    ResponseBytes<GetObjectResponse> objectBytes = client.getObjectAsBytes(objectRequest);
        byte[] data = objectBytes.asByteArray();
    
    // List objects.
    ListObjectsRequest listObjects = ListObjectsRequest
                        .builder()
                        .bucket(bucketName)
                        .build();
    
    ListObjectsResponse res = client.listObjects(listObjects);
    List<S3Object> objects = res.contents();
    ```
    
-   Perform a multipart upload task.
    
    ```
    // Initialize the multipart upload task.
    CreateMultipartUploadRequest createMultipartUploadRequest = CreateMultipartUploadRequest.builder()
        .bucket(bucketName)
        .key(keyName)
        .build();
    
    CreateMultipartUploadResponse response = client.createMultipartUpload(createMultipartUploadRequest);
    String uploadId = response.uploadId();
    System.out.println(uploadId);
    
    // Upload part 1 of the object.
    UploadPartRequest uploadPartRequest1 = UploadPartRequest.builder().bucket(bucketName).key(keyName)
        .uploadId(uploadId)
        .partNumber(1).build();
    String etag1 = client.uploadPart(uploadPartRequest1, RequestBody.fromString("content1")).eTag();
    CompletedPart part1 = CompletedPart.builder().partNumber(1).eTag(etag1).build();
    
    // Upload part 2 of the object.
    UploadPartRequest uploadPartRequest2 = UploadPartRequest.builder().bucket(bucketName).key(keyName)
        .uploadId(uploadId)
        .partNumber(2).build();
    String etag2 = client.uploadPart(uploadPartRequest2, RequestBody.fromString("content2")).eTag();
    CompletedPart part2 = CompletedPart.builder().partNumber(2).eTag(etag2).build();
    
    // Complete the multipart upload task. After the task is complete, the object is visible.
    CompletedMultipartUpload completedMultipartUpload = CompletedMultipartUpload.builder()
        .parts(part1, part2)
        .build();
    
    CompleteMultipartUploadRequest completeMultipartUploadRequest =
        CompleteMultipartUploadRequest.builder()
        .bucket(bucketName)
        .key(keyName)
        .uploadId(uploadId)
        .multipartUpload(completedMultipartUpload)
        .build();
    
    client.completeMultipartUpload(completeMultipartUploadRequest);
    ```
