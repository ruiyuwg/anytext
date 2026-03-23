This topic describes how to use the simple upload method to upload local files to OSS. This method provides a straightforward way to quickly upload local files.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/go-configure-access-credentials).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configure OSSClient instances](/help/en/oss/initialization-9#concept-52931-zh).
    

## Sample code

The following code shows how to upload a local file to an object named exampleobject.txt in the exampledir folder of the examplebucket bucket.

```
package main

import (
	"log"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. For other regions, specify the actual endpoint.
	// Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. For other regions, specify the actual region.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Specify the bucket name, for example, examplebucket.
	bucketName := "examplebucket" // Replace the value with the actual bucket name.
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket: %v", err)
	}

	// Specify the full path of the object, such as exampledir/exampleobject.txt, and the full path of the local file, such as D:\\localpath\\examplefile.txt.
	objectKey := "exampledir/exampleobject.txt"       // Replace the value with the actual object key.
	localFilePath := "D:\\localpath\\examplefile.txt" // Replace the value with the actual local file path.
	err = bucket.PutObjectFromFile(objectKey, localFilePath)
	if err != nil {
		log.Fatalf("Failed to put object from file: %v", err)
	}

	log.Println("File uploaded successfully.")
}
```

## **Common scenarios**

### **Upload a string**

The following code shows how to upload a string to an object named exampleobject.txt in the exampledir folder of the examplebucket bucket.

```
package main

import (
	"log"
	"strings"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. For other regions, specify the actual endpoint.
	// Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. For other regions, specify the actual region.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Specify the bucket name, for example, examplebucket.
	bucketName := "examplebucket" // Replace the value with the actual bucket name.
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket: %v", err)
	}

	objectKey := "exampledir/exampleobject.txt" // Replace the value with the actual object key.
	content := "Hello OSS"
	err = bucket.PutObject(objectKey, strings.NewReader(content))
	if err != nil {
		log.Fatalf("Failed to put object: %v", err)
	}

	log.Println("File uploaded successfully.")
}
```

### **Upload a byte array**

The following code shows how to upload a byte array to an object named exampleobject.txt in the exampledir folder of the examplebucket bucket.

```
package main

import (
	"bytes"
	"log"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. For other regions, specify the actual endpoint.
	// Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. For other regions, specify the actual region.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Specify the bucket name, for example, examplebucket.
	bucketName := "examplebucket" // Replace the value with the actual bucket name.
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket: %v", err)
	}

	err = bucket.PutObject("exampledir/exampleobject.txt", bytes.NewReader([]byte("yourObjectValueByteArrary")))
	if err != nil {
		log.Fatalf("Failed to put object: %v", err)
	}

	log.Println("File uploaded successfully.")
}
```

### **Upload a network stream**

The following code shows how to upload a network stream to an object named exampleobject.txt in the exampledir folder of the examplebucket bucket.

```
package main

import (
	"io"
	"log"
	"net/http"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. For other regions, specify the actual endpoint.
	// Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. For other regions, specify the actual region.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Specify the bucket name, for example, examplebucket.
	bucketName := "examplebucket" // Replace the value with the actual bucket name.
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket: %v", err)
	}

	// Specify the full path of the object, such as exampledir/exampleobject.txt.
	objectName := "exampledir/exampleobject.txt"

	// Specify the network stream to upload.
	resp, err := http.Get("https://www.aliyun.com/")
	if err != nil {
		log.Fatalf("Failed to fetch URL: %v", err)
	}
	defer resp.Body.Close()

	// Upload the network stream to OSS.
	err = bucket.PutObject(objectName, io.Reader(resp.Body))
	if err != nil {
		log.Fatalf("Failed to put object: %v", err)
	}

	log.Println("File uploaded successfully.")
}
```

### **Create a folder**

Unlike traditional file systems, OSS uses a flat structure to store data. All data is stored as objects in buckets. To facilitate data management, the OSS console displays objects that end with a forward slash (/) as folders. This lets you use a hierarchy to organize files, create groups, and simplify permission management.

The following code shows how to create a folder.

```
package main

import (
	"bytes"
	"log"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. For other regions, specify the actual endpoint.
	// Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. For other regions, specify the actual region.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Specify the bucket name, for example, examplebucket.
	bucketName := "examplebucket"
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket '%s': %v", bucketName, err)
	}

	// Specify the folder name. The folder name must end with a forward slash (/).
	dirName := "exampledir/"
	err = bucket.PutObject(dirName, bytes.NewReader([]byte("")))
	if err != nil {
		log.Fatalf("Failed to create directory '%s': %v", dirName, err)
	}

	log.Printf("Directory '%s' created successfully", dirName)
}
```

To delete a folder and all the files it contains, use the following code.

```
package main

import (
	"log"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. For other regions, specify the actual endpoint.
	// Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. For other regions, specify the actual region.
	client, err := oss.New("yourEndpoint", "", "", oss.SetCredentialsProvider(&provider), oss.Region("yourRegion"), oss.AuthVersion(oss.AuthV4))
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Specify the bucket name.
	bucketName := "examplebucket"
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket '%s': %v", bucketName, err)
	}

	// Specify the full path of the folder to delete. The full path does not include the bucket name.
	prefix := oss.Prefix("log/")
	marker := oss.Marker("")
	count := 0

	for {
		// List all objects that have the specified prefix.
		lor, err := bucket.ListObjects(marker, prefix)
		if err != nil {
			log.Fatalf("Failed to list objects in bucket '%s' with prefix '%s': %v", bucketName, prefix, err)
		}

		objects := []string{}
		for _, object := range lor.Objects {
			objects = append(objects, object.Key)
		}

		if len(objects) == 0 {
			break
		}

		// Delete the folder and all files in it.
		// Set oss.DeleteObjectsQuiet to true. This indicates that no deletion result is returned.
		delRes, err := bucket.DeleteObjects(objects, oss.DeleteObjectsQuiet(true))
		if err != nil {
			log.Fatalf("Failed to delete objects in bucket '%s': %v", bucketName, err)
		}

		if len(delRes.DeletedObjects) > 0 {
			log.Fatalf("Some objects failed to delete: %v", delRes.DeletedObjects)
		}

		count += len(objects)

		// Update the paging parameters.
		marker = oss.Marker(lor.NextMarker)
		if !lor.IsTruncated {
			break
		}
	}

	log.Printf("Success, total delete object count: %d", count)
}
```

### **How to use a progress bar?**

You can use a progress bar to monitor the upload progress of a file. The following code shows how to use a progress bar with the Bucket.PutObjectFromFile method.

```
package main

import (
	"log"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

// Define the progress bar listener.
type OssProgressListener struct{}

// Define the handler for progress change events.
func (listener *OssProgressListener) ProgressChanged(event *oss.ProgressEvent) {
	switch event.EventType {
	case oss.TransferStartedEvent:
		log.Printf("Transfer Started, ConsumedBytes: %d, TotalBytes: %d.\n", event.ConsumedBytes, event.TotalBytes)
	case oss.TransferDataEvent:
		log.Printf("\rTransfer Data, ConsumedBytes: %d, TotalBytes: %d, %d%%.", event.ConsumedBytes, event.TotalBytes, event.ConsumedBytes*100/event.TotalBytes)
	case oss.TransferCompletedEvent:
		log.Printf("\nTransfer Completed, ConsumedBytes: %d, TotalBytes: %d.\n", event.ConsumedBytes, event.TotalBytes)
	case oss.TransferFailedEvent:
		log.Printf("\nTransfer Failed, ConsumedBytes: %d, TotalBytes: %d.\n", event.ConsumedBytes, event.TotalBytes)
	default:
		log.Printf("Unknown Event Type: %d\n", event.EventType)
	}
}

func main() {
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Error: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. For other regions, specify the actual endpoint.
	// Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. For other regions, specify the actual region.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Error: %v", err)
	}

	// Specify the bucket name.
	bucketName := "yourBucketName"
	// Specify the full path of the object. Do not include the bucket name.
	objectName := "yourObjectName"
	// Specify the full path of the local file.
	localFile := "yourLocalFile"

	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Error: %v", err)
	}

	// Upload with a progress bar.
	err = bucket.PutObjectFromFile(objectName, localFile, oss.Progress(&OssProgressListener{}))
	if err != nil {
		log.Fatalf("Error: %v", err)
	}

	log.Println("Upload completed successfully!")
}
```

## References

-   For the complete sample code for simple upload, see [GitHub examples](https://github.com/aliyun/aliyun-oss-go-sdk/blob/master/sample/put_object.go).
    
-   For more information about the API operation for simple upload, see [PutObject](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.PutObject).
