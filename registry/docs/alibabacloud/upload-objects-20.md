This topic describes how to upload objects to a versioning-enabled bucket.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/go-configure-access-credentials).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configure OSSClient instances](/help/en/oss/initialization-9#concept-52931-zh).
    
-   To upload files, you must have the `oss:PutObject` permission. For more information, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## **Sample code**

### **Simple upload**

When you upload an object to a versioning-enabled bucket, OSS generates a unique version ID for the object and returns it in the x-oss-version-id response header. In a versioning-suspended bucket, the version ID of an uploaded object is null. If you upload an object with the same name as an existing object in a versioning-suspended bucket, the existing object is overwritten. As a result, each object has only a single version with a null version ID.

The following code shows how to perform a simple upload:

```
package main

import (
	"log"
	"net/http"
	"strings"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. For more information about other regions, see the actual documentation.
	// Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. For more information about other regions, see the actual documentation.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Set bucketName to the name of the bucket.
	bucketName := "yourBucketName"
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket '%s': %v", bucketName, err)
	}

	var retHeader http.Header
	// Upload a string. Use oss.GetResponseHeader to get the response header.
	// Set objectName to the full path of the object. Do not include the bucket name.
	objectName := "yourObjectName"
	objectValue := "yourObjectValue"
	err = bucket.PutObject(objectName, strings.NewReader(objectValue), oss.GetResponseHeader(&retHeader))
	if err != nil {
		log.Fatalf("Failed to put object '%s': %v", objectName, err)
	}

	// Print the x-oss-version-id.
	versionId := oss.GetVersionId(retHeader)
	log.Printf("x-oss-version-id: %s", versionId)
}
```

### **Append upload**

In a versioning-enabled bucket, you can perform an AppendObject operation only on the current version of an appendable object, not on a historical version.

**Note**

-   When you perform an AppendObject operation on the current version of an appendable object, OSS does not create a historical version for the object.
    
-   When you perform a PutObject or DeleteObject operation on the current version of an appendable object, OSS creates a historical version of the object. You can no longer append data to this historical version.
    
-   You cannot perform an AppendObject operation on the current version of a non-appendable object, such as a normal object or a delete marker.
    

The following code shows how to perform an append upload:

```
package main

import (
	"log"
	"net/http"
	"strings"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. For more information about other regions, see the actual documentation.
	// Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. For more information about other regions, see the actual documentation.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Set bucketName to the name of the bucket.
	bucketName := "yourBucketName"
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket '%s': %v", bucketName, err)
	}

	// The position for the first append operation is 0. The return value indicates the position for the next append operation. The position for subsequent append operations is the length of the file before the append operation.
	// Set objectName to the full path of the object. Do not include the bucket name.
	objectName := "yourObjectName"
	var retHeader http.Header
	var nextPos int64 = 0

	// Perform the first append operation.
	nextPos, err = bucket.AppendObject(objectName, strings.NewReader("YourObjectAppendValue1"), nextPos, oss.GetResponseHeader(&retHeader))
	if err != nil {
		log.Fatalf("Failed to append object '%s': %v", objectName, err)
	}
	log.Printf("x-oss-version-id: %s", retHeader.Get("x-oss-version-id"))

	// Perform the second append operation.
	nextPos, err = bucket.AppendObject(objectName, strings.NewReader("YourObjectAppendValue2"), nextPos, oss.GetResponseHeader(&retHeader))
	if err != nil {
		log.Fatalf("Failed to append object '%s': %v", objectName, err)
	}
	log.Printf("x-oss-version-id: %s", oss.GetVersionId(retHeader))

	// You can perform multiple append operations.
}
```

### **Multipart upload**

When you call the CompleteMultipartUpload operation for an object in a versioning-enabled bucket, OSS generates a unique version ID for the object. This version ID is returned in the x-oss-version-id response header.

The following code shows how to perform a multipart upload:

```
package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(-1)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. For more information about other regions, see the actual documentation.
	// Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. For more information about other regions, see the actual documentation.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(-1)
	}
	// Set the bucket name.
	bucketName := "examplebucket"
	// Set the full path of the object. Do not include the bucket name in the full path.
	objectName := "exampleobject.txt"
	// Set the full path of the local file. If you do not specify a local path, the file is uploaded from the project's local path.
	locaFilename := "D:\\localpath\\examplefile.txt"
	// Use oss.GetResponseHeader to get the response header.
	var retHeader http.Header

	bucket, err := client.Bucket(bucketName)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(-1)
	}
	chunks, err := oss.SplitFileByPartNum(locaFilename, 3)
	fd, err := os.Open(locaFilename)
	defer fd.Close()
	// Step 1: Initiate a multipart upload task.
	imur, err := bucket.InitiateMultipartUpload(objectName)
	// Step 2: Upload parts.
	var parts []oss.UploadPart
	for _, chunk := range chunks {
		fd.Seek(chunk.Offset, os.SEEK_SET)
		// Call the UploadPart method to upload each part.
		part, err := bucket.UploadPart(imur, fd, chunk.Size, chunk.Number)
		if err != nil {
			fmt.Println("Error:", err)
			os.Exit(-1)
		}
		parts = append(parts, part)
	}
	// Step 3: Complete the multipart upload.
	cmur, err := bucket.CompleteMultipartUpload(imur, parts, oss.GetResponseHeader(&retHeader))
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(-1)
	}
	fmt.Println("cmur:", cmur)
	// Print the x-oss-version-id.
	fmt.Println("x-oss-version-id:", oss.GetVersionId(retHeader))
}
```

## References

-   For more information about the simple upload operation, see [PutObject](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.PutObject).
    
-   For more information about the append upload operation, see [AppendObject](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.AppendObject).
    
-   For more information about the API operation to complete a multipart upload, see [CompleteMultipartUpload](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.CompleteMultipartUpload).
