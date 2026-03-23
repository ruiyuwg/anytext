Object Storage Service (OSS) provides the multipart upload feature. Multipart upload allows you to split a large object into multiple parts to upload. After these parts are uploaded, you can call the CompleteMultipartUpload operation to combine the parts into a complete object.

## Notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   To complete the multipart upload process, which includes the InitiateMultipartUpload, UploadPart, and CompleteMultipartUpload operations, you must have the `oss:PutObject` permission. For more information, see [Grant custom access policies to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Multipart upload process

A multipart upload consists of the following three steps:

1.  Initialize a multipart upload event.
    
    Call the ossClient.initiateMultipartUpload method. OSS returns a globally unique upload ID in the response.
    
2.  Upload parts.
    
    Call the ossClient.uploadPart method to upload part data.
    
    **Note**
    
    -   For the same upload ID, the part number identifies the position of the part in the entire file. If you upload new data with the same part number, the existing part data in OSS is overwritten.
        
    -   OSS returns the MD5 hash of the received part data in the ETag header of the response.
        
    -   OSS calculates the MD5 hash of the uploaded data and compares it with the MD5 hash calculated by the SDK. If the two MD5 hashes do not match, the InvalidDigest error code is returned.
        
    
3.  Complete the multipart upload.
    
    After all parts are uploaded, call the ossClient.completeMultipartUpload method to merge the parts into a complete file.
    

## Example code

The following sample code provides an example on how to implement a multipart upload task by following the multipart upload process:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.internal.Mimetypes;
import com.aliyun.oss.model.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The Endpoint of the China (Hangzhou) region is used as an example. Specify the actual Endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object, for example, exampledir/exampleobject.txt. The full path cannot contain the bucket name.
        String objectName = "exampledir/exampleobject.txt";
        // The path of the local file to upload.
        String filePath = "D:\\localpath\\examplefile.txt";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Create an InitiateMultipartUploadRequest object.
            InitiateMultipartUploadRequest request = new InitiateMultipartUploadRequest(bucketName, objectName);

            // Create an ObjectMetadata object and set the Content-Type.
            ObjectMetadata metadata = new ObjectMetadata();
            if (metadata.getContentType() == null) {
                metadata.setContentType(Mimetypes.getInstance().getMimetype(new File(filePath), objectName));
            }
            System.out.println("Content-Type: " + metadata.getContentType());

            // Bind the metadata to the upload request.
            request.setObjectMetadata(metadata);

            // Initialize the multipart upload.
            InitiateMultipartUploadResult upresult = ossClient.initiateMultipartUpload(request);
            // Return the upload ID.
            String uploadId = upresult.getUploadId();

            // partETags is a collection of PartETag objects. A PartETag object consists of the ETag and part number of a part.
            List<PartETag> partETags = new ArrayList<PartETag>();
            // The size of each part. This is used to calculate the number of parts. Unit: bytes.
            // The minimum part size is 100 KB, and the maximum part size is 5 GB. The size of the last part can be smaller than 100 KB.
            // Set the part size to 1 MB.
            final long partSize = 1 * 1024 * 1024L;   

            // Calculate the number of parts based on the size of the data to upload. The following code provides an example of how to obtain the size of the data to upload from a local file using File.length().
            final File sampleFile = new File(filePath);
            long fileLength = sampleFile.length();
            int partCount = (int) (fileLength / partSize);
            if (fileLength % partSize != 0) {
                partCount++;
            }
            // Traverse the parts and upload them.
            for (int i = 0; i < partCount; i++) {
                long startPos = i * partSize;
                long curPartSize = (i + 1 == partCount) ? (fileLength - startPos) : partSize;
                UploadPartRequest uploadPartRequest = new UploadPartRequest();
                uploadPartRequest.setBucketName(bucketName);
                uploadPartRequest.setKey(objectName);
                uploadPartRequest.setUploadId(uploadId);
                // Set the stream of the part to upload.
                // The following code provides an example of how to create a FileInputStream object from a local file and skip the specified data using the InputStream.skip() method.
                InputStream instream = new FileInputStream(sampleFile);
                instream.skip(startPos);
                uploadPartRequest.setInputStream(instream);
                // Set the part size.
                uploadPartRequest.setPartSize(curPartSize);
                // Set the part number. Each uploaded part has a part number that ranges from 1 to 10,000. If the part number is not in the range, OSS returns the InvalidArgument error code.
                uploadPartRequest.setPartNumber(i + 1);
                // Parts do not need to be uploaded in sequence. They can even be uploaded from different clients. OSS sorts the parts by part number to create a complete file.
                UploadPartResult uploadPartResult = ossClient.uploadPart(uploadPartRequest);
                // After each part is uploaded, the OSS response includes a PartETag. The PartETag is saved in partETags.
                partETags.add(uploadPartResult.getPartETag());

                // Close the stream.
                instream.close();
            }

            // Create a CompleteMultipartUploadRequest object.
            // When you complete the multipart upload, you must provide all valid partETags. After OSS receives the submitted partETags, it verifies the validity of each part. After all parts are verified, OSS combines these parts into a complete file.
            CompleteMultipartUploadRequest completeMultipartUploadRequest =
                    new CompleteMultipartUploadRequest(bucketName, objectName, uploadId, partETags);

            // Complete the multipart upload.
            CompleteMultipartUploadResult completeMultipartUploadResult = ossClient.completeMultipartUpload(completeMultipartUploadRequest);
            System.out.println("Upload successful, ETag: " + completeMultipartUploadResult.getETag());

        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught a ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## **Common scenarios**

### **Set metadata when you initialize a multipart upload**

The following code snippet shows how to set metadata when you initialize a multipart upload.

```
// Create an InitiateMultipartUploadRequest object.
InitiateMultipartUploadRequest request = new InitiateMultipartUploadRequest(bucketName, objectName);

ObjectMetadata metadata = new ObjectMetadata();
metadata.setHeader(OSSHeaders.OSS_STORAGE_CLASS, StorageClass.Standard.toString());
// Specify the web page caching behavior of the object.
metadata.setCacheControl("no-cache");
// Specify the name of the object when it is downloaded.
metadata.setContentDisposition("attachment;filename=oss_MultipartUpload.txt");
// Specify the content encoding format of the object.
metadata.setContentEncoding(OSSConstants.DEFAULT_CHARSET_NAME);
// Specify whether to overwrite an object that has the same name when you initialize the multipart upload. In this example, this parameter is set to true, which indicates that the object that has the same name is not overwritten.
metadata.setHeader("x-oss-forbid-overwrite", "true");
// Specify the server-side encryption method used to upload each part of the object.
metadata.setHeader(OSSHeaders.OSS_SERVER_SIDE_ENCRYPTION, ObjectMetadata.KMS_SERVER_SIDE_ENCRYPTION);
// Specify the encryption algorithm of the object. If this option is not specified, the AES256 encryption algorithm is used.
metadata.setHeader(OSSHeaders.OSS_SERVER_SIDE_DATA_ENCRYPTION, ObjectMetadata.KMS_SERVER_SIDE_ENCRYPTION);
// Specify the customer master key (CMK) managed by KMS.
metadata.setHeader(OSSHeaders.OSS_SERVER_SIDE_ENCRYPTION_KEY_ID, "9468da86-3509-4f8d-a61e-6eab1eac****");
// Specify the storage class of the object.
metadata.setHeader(OSSHeaders.OSS_STORAGE_CLASS, StorageClass.Standard);
// Specify the object tags. You can specify multiple tags at the same time.
metadata.setHeader(OSSHeaders.OSS_TAGGING, "a:1");
request.setObjectMetadata(metadata);

// Automatically set the Content-Type based on the file. If this parameter is not set, the default Content-Type is application/octet-stream.
if (metadata.getContentType() == null) {
    metadata.setContentType(Mimetypes.getInstance().getMimetype(new File(filePath), objectName));
}

// Bind the metadata to the upload request.
request.setObjectMetadata(metadata);
// Initialize the multipart upload.
InitiateMultipartUploadResult upresult = ossClient.initiateMultipartUpload(request);
```

### **Set file access permissions when you complete a multipart upload**

The following code snippet shows how to set file access permissions when you complete a multipart upload.

```
completeMultipartUploadRequest.setObjectACL(CannedAccessControlList.Private);
```

### **Automatically process part ETags when you complete a multipart upload**

The following code snippet shows how to automatically process part ETags when you complete a multipart upload.

```
// Specify whether to list all parts that have been uploaded for the current upload ID. You can set partETags in CompleteMultipartUploadRequest to null to merge parts into a complete file by listing the parts on the server only if you use Java SDK 3.14.0 or later.
Map<String, String> headers = new HashMap<String, String>();
// If you specify x-oss-complete-all:yes, OSS lists all parts that have been uploaded for the current upload ID, sorts the parts by part number, and then runs the CompleteMultipartUpload operation.
// If you specify x-oss-complete-all:yes, you cannot specify the body. Otherwise, an error is reported.
headers.put("x-oss-complete-all","yes");
completeMultipartUploadRequest.setHeaders(headers);
```

### **Cancel a multipart upload event**

To cancel a multipart upload event, obtain the upload ID that is returned after you call InitiateMultipartUpload. Then, use the upload ID to call the abortMultipartUpload method to cancel the multipart upload event. After a multipart upload event is canceled, you cannot use the upload ID for any operations. The parts that are already uploaded are deleted. The following code snippet shows how to cancel a multipart upload event.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The Endpoint of the China (Hangzhou) region is used as an example. Specify the actual Endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object, for example, exampledir/exampleobject.txt. The full path cannot contain the bucket name.
        String objectName = "exampledir/exampleobject.txt";
        // Specify the upload ID, for example, 0004B999EF518A1FE585B0C9360D****. The upload ID is returned after the InitiateMultipartUpload operation is called to initialize the multipart upload.
        String uploadId = "0004B999EF518A1FE585B0C9360D****";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();
        
        try {
            // Cancel the multipart upload.
            AbortMultipartUploadRequest abortMultipartUploadRequest =
                    new AbortMultipartUploadRequest(bucketName, objectName, uploadId);
            ossClient.abortMultipartUpload(abortMultipartUploadRequest);
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

### **List uploaded parts**

To list uploaded parts, obtain the upload ID that is returned after you call InitiateMultipartUpload and before you call CompleteMultipartUpload. Then, use the upload ID to call the listParts method to list all successfully uploaded parts for the specified upload ID.

#### **List uploaded parts**

The following code snippet shows how to list uploaded parts.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The Endpoint of the China (Hangzhou) region is used as an example. Specify the actual Endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object, for example, exampledir/exampleobject.txt. The full path cannot contain the bucket name.
        String objectName = "exampledir/exampleobject.txt";
        // Specify the upload ID, for example, 0004B999EF518A1FE585B0C9360D****. The upload ID is returned after the InitiateMultipartUpload operation is called to initialize the multipart upload and before the CompleteMultipartUpload operation is called to complete the multipart upload.
        String uploadId = "0004B999EF518A1FE585B0C9360D****";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();
        
        try {
            // List the uploaded parts.
            ListPartsRequest listPartsRequest = new ListPartsRequest(bucketName, objectName, uploadId);
            // Set the upload ID.
            //listPartsRequest.setUploadId(uploadId);
            // Set the number of parts on each page to 100 for paging. By default, 1,000 parts are listed.
            listPartsRequest.setMaxParts(100);
            // Specify the start position for the list operation. Only parts whose part numbers are greater than this parameter value are listed.
            listPartsRequest.setPartNumberMarker(2);
            PartListing partListing = ossClient.listParts(listPartsRequest);

            for (PartSummary part : partListing.getParts()) {
                // Obtain the part number.
                System.out.println(part.getPartNumber());
                // Obtain the part data size.
                System.out.println(part.getSize());
                // Obtain the ETag of the part.
                System.out.println(part.getETag());
                // Obtain the last modified time of the part.
                System.out.println(part.getLastModified());
            }
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

#### **List all uploaded parts**

By default, you can list a maximum of 1,000 parts at a time by calling the listParts method. If the number of parts is greater than 1,000, use the following code snippet to list all uploaded parts.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The Endpoint of the China (Hangzhou) region is used as an example. Specify the actual Endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object, for example, exampledir/exampleobject.txt. The full path cannot contain the bucket name.
        String objectName = "exampledir/exampleobject.txt";
        // Specify the upload ID, for example, 0004B999EF518A1FE585B0C9360D****. The upload ID is returned after the InitiateMultipartUpload operation is called to initialize the multipart upload and before the CompleteMultipartUpload operation is called to complete the multipart upload.
        String uploadId = "0004B999EF518A1FE585B0C9360D****";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();
        
        try {
            // List all uploaded parts.
            PartListing partListing;
            ListPartsRequest listPartsRequest = new ListPartsRequest(bucketName, objectName, uploadId);

            do {
                partListing = ossClient.listParts(listPartsRequest);

                for (PartSummary part : partListing.getParts()) {
                    // Obtain the part number.
                    System.out.println(part.getPartNumber());
                    // Obtain the part data size.
                    System.out.println(part.getSize());
                    // Obtain the ETag of the part.
                    System.out.println(part.getETag());
                    // Obtain the last modified time of the part.
                    System.out.println(part.getLastModified());
                }
                // Specify the start position for the list operation. Only parts whose part numbers are greater than this parameter value are listed.
                listPartsRequest.setPartNumberMarker(partListing.getNextPartNumberMarker());
            } while (partListing.isTruncated());
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

#### **List all uploaded parts by page**

The following code snippet shows how to specify the number of parts on each page and list all parts by page.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The Endpoint of the China (Hangzhou) region is used as an example. Specify the actual Endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object, for example, exampledir/exampleobject.txt. The full path cannot contain the bucket name.
        String objectName = "exampledir/exampleobject.txt";
        // Specify the upload ID, for example, 0004B999EF518A1FE585B0C9360D****. The upload ID is returned after the InitiateMultipartUpload operation is called to initialize the multipart upload and before the CompleteMultipartUpload operation is called to complete the multipart upload.
        String uploadId = "0004B999EF518A1FE585B0C9360D****";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();
        
        try {
            // List the uploaded parts by page.
            PartListing partListing;
            ListPartsRequest listPartsRequest = new ListPartsRequest(bucketName, objectName, uploadId);
            // Set the number of parts to list on each page to 100 for paginated listing.
            listPartsRequest.setMaxParts(100);

            do {
                partListing = ossClient.listParts(listPartsRequest);

                for (PartSummary part : partListing.getParts()) {
                    // Obtain the part number.
                    System.out.println(part.getPartNumber());
                    // Obtain the part data size.
                    System.out.println(part.getSize());
                    // Obtain the ETag of the part.
                    System.out.println(part.getETag());
                    // Obtain the last modified time of the part.
                    System.out.println(part.getLastModified());
                }

                listPartsRequest.setPartNumberMarker(partListing.getNextPartNumberMarker());

            } while (partListing.isTruncated());
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}                    
```

### **List multipart upload events**

You can call the listMultipartUploads method to list all in-progress multipart upload events. In-progress multipart upload events are events that are initialized but not yet completed or canceled. The configurable parameters are described in the following table.

**Parameter**

**Function**

**Method**

prefix

Specifies that the returned file names must have the specified prefix. Note that when you query by prefix, the returned file names still contain the prefix.

ListMultipartUploadsRequest.setPrefix(String prefix)

delimiter

A character used to group file names. All file names that contain the specified prefix and appear for the first time between the delimiter characters are treated as a group of elements.

ListMultipartUploadsRequest.setDelimiter(String delimiter)

maxUploads

The maximum number of multipart upload events to return. The default and maximum value is 1,000.

ListMultipartUploadsRequest.setMaxUploads(Integer maxUploads)

keyMarker

The multipart upload events for files whose names are lexicographically greater than the value of the keyMarker parameter. This parameter is used with the uploadIdMarker parameter to specify the start position of the returned results.

ListMultipartUploadsRequest.setKeyMarker(String keyMarker)

uploadIdMarker

Used with the keyMarker parameter to specify the start position of the returned results. If the keyMarker parameter is not set, this parameter is invalid. If the keyMarker parameter is set, the query results include the following:

-   All files whose names are lexicographically greater than the value of the keyMarker parameter.
    
-   All multipart upload events for files whose names are the same as the value of the keyMarker parameter and whose upload IDs are greater than the value of the uploadIdMarker parameter.
    

ListMultipartUploadsRequest.setUploadIdMarker(String uploadIdMarker)

#### **List multipart upload events**

The following code snippet shows how to list multipart upload events.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The Endpoint of the China (Hangzhou) region is used as an example. Specify the actual Endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();
        
        try {
            // List multipart upload events. By default, 1,000 parts are listed.
            ListMultipartUploadsRequest listMultipartUploadsRequest = new ListMultipartUploadsRequest(bucketName);
            MultipartUploadListing multipartUploadListing = ossClient.listMultipartUploads(listMultipartUploadsRequest);

            for (MultipartUpload multipartUpload : multipartUploadListing.getMultipartUploads()) {
                // Obtain the upload ID.
                System.out.println(multipartUpload.getUploadId());
                // Obtain the key.
                System.out.println(multipartUpload.getKey());
                // Obtain the initialization time of the multipart upload.
                System.out.println(multipartUpload.getInitiated());
            }
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

If the value of isTruncated in the response is true, nextKeyMarker and nextUploadIdMarker are returned to indicate the starting point for the next list operation. If you cannot retrieve all upload events at once, you can list them by page.

#### **List all multipart upload events**

By default, you can list a maximum of 1,000 multipart upload events at a time by calling the listMultipartUploads method. If the number of events is greater than 1,000, use the following code snippet to list all multipart upload events.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The Endpoint of the China (Hangzhou) region is used as an example. Specify the actual Endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();
        
        try {
            // List multipart upload events.
            MultipartUploadListing multipartUploadListing;
            ListMultipartUploadsRequest listMultipartUploadsRequest = new ListMultipartUploadsRequest(bucketName);

            do {
                multipartUploadListing = ossClient.listMultipartUploads(listMultipartUploadsRequest);

                for (MultipartUpload multipartUpload : multipartUploadListing.getMultipartUploads()) {
                    // Obtain the upload ID.
                    System.out.println(multipartUpload.getUploadId());
                    // Obtain the file name.
                    System.out.println(multipartUpload.getKey());
                    // Obtain the initialization time of the multipart upload.
                    System.out.println(multipartUpload.getInitiated());
                }

                listMultipartUploadsRequest.setKeyMarker(multipartUploadListing.getNextKeyMarker());

                listMultipartUploadsRequest.setUploadIdMarker(multipartUploadListing.getNextUploadIdMarker());
            } while (multipartUploadListing.isTruncated());
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

#### **List all upload events by page**

The following code snippet shows how to list all upload events by page.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The Endpoint of the China (Hangzhou) region is used as an example. Specify the actual Endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();
        
        try {
            // List multipart upload events.
            MultipartUploadListing multipartUploadListing;
            ListMultipartUploadsRequest listMultipartUploadsRequest = new ListMultipartUploadsRequest(bucketName);
            // Set the number of multipart upload events to list on each page.
            listMultipartUploadsRequest.setMaxUploads(50);

            do {
                multipartUploadListing = ossClient.listMultipartUploads(listMultipartUploadsRequest);

                for (MultipartUpload multipartUpload : multipartUploadListing.getMultipartUploads()) {
                    // Obtain the upload ID.
                    System.out.println(multipartUpload.getUploadId());
                    // Obtain the key.
                    System.out.println(multipartUpload.getKey());
                    // Obtain the initialization time of the multipart upload.
                    System.out.println(multipartUpload.getInitiated());
                }

                listMultipartUploadsRequest.setKeyMarker(multipartUploadListing.getNextKeyMarker());
                listMultipartUploadsRequest.setUploadIdMarker(multipartUploadListing.getNextUploadIdMarker());

            } while (multipartUploadListing.isTruncated());
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

### **Perform multipart upload for network streams or data streams**

This topic provides an example of how to perform a multipart upload of a local file. For more information about how to perform a multipart upload for a network stream or data stream, see [Multipart upload of a data stream](/help/en/oss/sample-code-for-implementing-multipart-upload-for-dataflow-sdk).

## References

-   For the complete sample code for multipart upload, see [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/MultipartUploadSample.java).
    
-   A multipart upload involves three API operations. For more information about the operations, see the following topics:
    
    -   [InitiateMultipartUpload](/help/en/oss/developer-reference/initiatemultipartupload#reference-zgh-cnx-wdb)
        
    -   [UploadPart](/help/en/oss/developer-reference/uploadpart#reference-pnq-2px-wdb)
        
    -   [CompleteMultipartUpload](/help/en/oss/developer-reference/completemultipartupload#reference-lq1-dtx-wdb)
        
-   For more information about the API operation used to cancel a multipart upload event, see [AbortMultipartUpload](/help/en/oss/developer-reference/abortmultipartupload#reference-txp-bvx-wdb).
    
-   For more information about the API operation used to list uploaded parts, see [ListParts](/help/en/oss/developer-reference/listparts#reference-hzm-1zx-wdb).
    
-   For more information about the API operation used to list all in-progress multipart upload events, see [ListMultipartUploads](/help/en/oss/developer-reference/listmultipartuploads#reference-hj2-3wx-wdb).
