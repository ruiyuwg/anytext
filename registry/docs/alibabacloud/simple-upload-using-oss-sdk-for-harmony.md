This topic describes the simple upload method, which is a straightforward way to quickly upload a single file to OSS.

## **Precautions**

For more information about the regions and endpoints that OSS supports, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

## **Permissions**

By default, an Alibaba Cloud account has full permissions. RAM users or RAM roles under an Alibaba Cloud account do not have any permissions by default. The Alibaba Cloud account or account administrator must grant operation permissions through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Definition**

PutObject

`oss:PutObject`

Uploads an object.

`oss:PutObjectTagging`

When uploading an object, if you specify object tags through `x-oss-tagging`, this permission is required.

`kms:GenerateDataKey`

When uploading an object, if the object metadata contains `X-Oss-Server-Side-Encryption: KMS`, these two permissions are required.

`kms:Decrypt`

## **Sample code**

You can use the following code to upload a string as a file to the destination bucket.

**Important**

If you upload an object to a bucket that already contains an object with the same name, the new object overwrites the existing object if you have the required access permissions.

```
import Client, { RequestError } from '@aliyun/oss';

// Create an OSS client instance.
const client = new Client({
  // Replace with the Access Key ID of the STS temporary access credential.
  accessKeyId: 'yourAccessKeyId',
  // Replace with the Access Key Secret of the STS temporary access credential.
  accessKeySecret: 'yourAccessKeySecret',
  // Replace with the security token of the STS temporary access credential.
  securityToken: 'yourSecurityToken',
  // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
  region: 'oss-cn-hangzhou',
});

const bucket = 'yourBucketName'; // Replace with the name of the bucket you want to use.

const key = 'yourObjectName'; // Replace with the name of the object (file) you want to upload.

const putObject = async () => {
  try {
    // Call the putObject method to upload data to the specified bucket and key, passing the data as a parameter.
    const res = await client.putObject({
      bucket, // The bucket name.
      key, // The object (file) name.
      data: 'hello world' // The data to upload. In this case, a simple string.
    });

    // Print the upload result.
    console.log(JSON.stringify(res));
  } catch (err) {
    // Catch exceptions that occur during the request.
    if (err instanceof RequestError) {
      // If the error is a known type, print the error code, message, request ID, status code, EC code, and other information.
      console.log('code: ', err.code);
      console.log('message: ', err.message);
      console.log('requestId: ', err.requestId);
      console.log('status: ', err.status);
      console.log('ec: ', err.ec);
    } else {
      // Print other unknown types of errors.
      console.log('unknown error: ', err);
    }
  }
}

// Call the putObject function to perform the upload operation.
putObject();
```

## **Scenarios**

### **Upload a local file**

You can use the following code to upload a local file to the destination bucket.

```
import Client, { RequestError } from '@aliyun/oss';
import { fileIo as fs } from '@kit.CoreFileKit';

// Create an OSS client instance.
const client = new Client({
  // Replace with the Access Key ID of the STS temporary access credential.
  accessKeyId: 'yourAccessKeyId',
  // Replace with the Access Key Secret of the STS temporary access credential.
  accessKeySecret: 'yourAccessKeySecret',
  // Replace with the security token of the STS temporary access credential.
  securityToken: 'yourSecurityToken',
  // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
  region: 'oss-cn-hangzhou',
});

// Specify the name of the bucket to operate on. Replace with your actual bucket name.
const bucket = 'yourBucketName';
// Specify the name of the object (file) to upload. Replace with your actual object name.
const key = 'yourObjectName';

/**
 * Upload an object to OSS from a file path.
 * Use the putObject method to upload a local file to the specified bucket and key.
 */
const putObjectByFile = async () => {
  // Open the local file for reading.
  const file = await fs.open('yourFilePath', fs.OpenMode.READ_ONLY); // Replace with the actual file path.

  try {
    // Call the putObject method to upload the file to the specified bucket and key.
    const res = await client.putObject({
      bucket, // The bucket name.
      key,    // The object (file) name.
      data: file, // The file data to upload.
    });

    // Print the upload result.
    console.log(JSON.stringify(res));
  } catch (err) {
    // Catch exceptions that occur during the request.
    if (err instanceof RequestError) {
      // If the error is a known type, print the error code, message, request ID, status code, EC code, and other information.
      console.log('code: ', err.code); // Error code
      console.log('message: ', err.message); // Error message
      console.log('requestId: ', err.requestId); // Request ID
      console.log('status: ', err.status); // HTTP status code
      console.log('ec: ', err.ec); // Error code
    } else {
      // Print other unknown types of errors.
      console.log('unknown error: ', err);
    }
  } finally {
    // Make sure to close the file after the operation is complete.
    await fs.close(file);
  }
};

// Call the putObjectByFile function to perform the file upload operation.
putObjectByFile();
```

### **Upload a file and specify its storage class**

You can use the following code to upload a file to the destination bucket and specify its storage class.

```
import Client, { EStorageClass, RequestError } from '@aliyun/oss';

// Create an OSS client instance.
const client = new Client({
  // Replace with the Access Key ID of the STS temporary access credential.
  accessKeyId: 'yourAccessKeyId',
  // Replace with the Access Key Secret of the STS temporary access credential.
  accessKeySecret: 'yourAccessKeySecret',
  // Replace with the security token of the STS temporary access credential.
  securityToken: 'yourSecurityToken',
  // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
  region: 'oss-cn-hangzhou',
});

// Specify the name of the bucket to operate on. Replace with your actual bucket name.
const bucket = 'yourBucketName';
// Specify the name of the object (file) to upload. Replace with your actual object name.
const key = 'yourObjectName';

/**
 * Upload an object and specify its storage class.
 * Use the putObject method to upload data to the specified bucket and key, and set the storage class to ARCHIVE.
 */
const putObjectWithStorageClass = async () => {
  try {
    // Call the putObject method to upload data and specify the storage class as ARCHIVE.
    const res = await client.putObject({
      bucket, // The bucket name.
      key,    // The object (file) name.
      data: 'hello world', // The data to upload. In this case, a simple string.
      storageClass: EStorageClass.ARCHIVE, // Specify the storage class as ARCHIVE.
    });

    // Print the upload result.
    console.log(JSON.stringify(res));
  } catch (err) {
    // Catch exceptions that occur during the request.
    if (err instanceof RequestError) {
      // If the error is a known type, print the error code, message, request ID, status code, EC code, and other information.
      console.log('code: ', err.code); // Error code
      console.log('message: ', err.message); // Error message
      console.log('requestId: ', err.requestId); // Request ID
      console.log('status: ', err.status); // HTTP status code
      console.log('ec: ', err.ec); // Error code
    } else {
      // Print other unknown types of errors.
      console.log('unknown error: ', err);
    }
  }
};

// Call the putObjectWithStorageClass function to perform the upload operation.
putObjectWithStorageClass();
```

### **Upload a file and specify its access permissions**

You can use the following code to upload a file to the destination bucket and specify its access permissions.

```
import Client, { EObjectAcl, RequestError } from '@aliyun/oss';

// Create an OSS client instance.
const client = new Client({
  // Replace with the Access Key ID of the STS temporary access credential.
  accessKeyId: 'yourAccessKeyId',
  // Replace with the Access Key Secret of the STS temporary access credential.
  accessKeySecret: 'yourAccessKeySecret',
  // Replace with the security token of the STS temporary access credential.
  securityToken: 'yourSecurityToken',
  // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to oss-cn-hangzhou.
  region: 'oss-cn-hangzhou',
});

// Specify the name of the bucket to operate on. Replace with your actual bucket name.
const bucket = 'yourBucketName';
// Specify the name of the object (file) to upload. Replace with your actual object name.
const key = 'yourObjectName';

/**
 * Upload an object and set its access permissions.
 * Use the putObject method to upload data to the specified bucket and key, and set the object's access permissions to PRIVATE.
 */
const putObjectWithObjectAcl = async () => {
  try {
    // Call the putObject method to upload data and set the object's access permissions to PRIVATE.
    const res = await client.putObject({
      bucket, // The bucket name.
      key,    // The object (file) name.
      data: 'hello world', // The data to upload. In this case, a simple string.
      objectAcl: EObjectAcl.PRIVATE, // Set the object's access permissions to PRIVATE.
    });

    // Print the upload result.
    console.log(JSON.stringify(res));
  } catch (err) {
    // Catch exceptions that occur during the request.
    if (err instanceof RequestError) {
      // If the error is a known type, print the error code, message, request ID, status code, EC code, and other information.
      console.log('code: ', err.code); // Error code
      console.log('message: ', err.message); // Error message
      console.log('requestId: ', err.requestId); // Request ID
      console.log('status: ', err.status); // HTTP status code
      console.log('ec: ', err.ec); // Error code
    } else {
      // Print other unknown types of errors.
      console.log('unknown error: ', err);
    }
  }
};

// Call the putObjectWithObjectAcl function to perform the upload operation.
putObjectWithObjectAcl();
```
