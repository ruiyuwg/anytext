You can use resumable upload to upload files larger than 5 GB to OSS. This method prevents upload failures that are caused by network interruptions or program errors. It works by splitting a large file into multiple shards and uploading them concurrently, which speeds up the process. If a shard fails to upload, the process can resume from a breakpoint recorded in a checkpoint file. You do not need to re-upload all shards. After all shards are uploaded, OSS automatically merges them into a single file.

## Notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/go-configure-access-credentials).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configure OSSClient instances](/help/en/oss/initialization-9#concept-52931-zh).
    
-   To use resumable upload, you must have the `oss:PutObject` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   The SDK records the upload status in a checkpoint file. Ensure that the program has write permissions for the checkpoint file.
    
-   Do not modify the verification information in the checkpoint file. If the checkpoint file is corrupted, all shards are re-uploaded.
    
-   If the local file changes during the upload, all shards are re-uploaded.
    

## Implementation method

Call the Bucket.UploadFile method to perform a resumable upload. You can set the following parameters and options:

**Parameter**

**Description**

objectKey

The name of the file to upload to OSS. This is the same as objectName.

filePath

The path of the local file to upload.

partSize

The size of each shard. The value must be in the range of 100 KB to 5 GB. The default value is 100 KB.

options

Includes the following options:

-   Routines: Specifies the number of concurrent upload shards. The default value is 1, which means concurrent upload is not used.
    
-   Checkpoint: Specifies whether to enable resumable upload and sets the checkpoint file. Resumable upload is disabled by default.
    
    For example, `oss.Checkpoint(true, "")` enables resumable upload and sets the checkpoint file to `file.cp` in the same folder as the local file. In this case, `file` is the name of the local file. You can also use `oss.Checkpoint(true, "your-cp-file.cp")` to specify the checkpoint file.
    

**Note**

For more information, see [Set file metadata](/help/en/oss/developer-reference/manage-object-metadata-6#concept-88638-zh).

## Sample code

The following code provides an example of how to perform a resumable upload.

```
package main

import (
	"log"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the Endpoint of the bucket. For example, for the China (Hangzhou) region, set the Endpoint to https://oss-cn-hangzhou.aliyuncs.com. For other regions, set the Endpoint as needed.
	// Set yourRegion to the region where the bucket is located. For example, for the China (Hangzhou) region, set the value to cn-hangzhou. For other regions, set the value as needed.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Specify the bucket name, for example, examplebucket.
	bucket, err := client.Bucket("examplebucket")
	if err != nil {
		log.Fatalf("Failed to get bucket: %v", err)
	}

	// When you use UploadFile to perform a resumable upload, the number of shards cannot exceed 10,000.
	// You need to set the size of each shard based on the size of the file you want to upload. The size of each shard can range from 100 KB to 5 GB. The default value is 100 KB (100 * 1024 bytes).
	// Use oss.Routines to specify three concurrent upload shards.
	// Set yourObjectName to the full path of the object. The full path cannot contain the bucket name. For example, exampledir/exampleobject.txt.
	// Set yourLocalFile to the full path of the local file, for example, D:\\localpath\\examplefile.txt. If a local path is not specified, the file is uploaded from the default path of the sample program's project.
	err = bucket.UploadFile("exampledir/exampleobject.txt", "D:\\localpath\\examplefile.txt", 100*1024, oss.Routines(3), oss.Checkpoint(true, ""))
	if err != nil {
		log.Fatalf("Failed to upload file: %v", err)
	}

	log.Println("File uploaded successfully.")
}
```

## **FAQ**

[What do I do if the "Too many parts, Please increase part size." error occurs during a resumable upload?](/help/en/oss/what-should-i-do-if-encountering-the-error-too-many-parts-please-increase-part-size-during-during-resumable-upload)

## References

-   For the complete sample code for resumable upload, see [GitHub sample](https://github.com/aliyun/aliyun-oss-go-sdk/blob/master/sample/put_object.go).
    
-   For more information about the API operation for resumable upload, see [UploadFile](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.UploadFile).
