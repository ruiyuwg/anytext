Objects that are stored in Object Storage Service (OSS) consist of keys, data, and object metadata. Object metadata describes the object. Object metadata includes standard HTTP headers and user metadata. You can create custom HTTP request policies such as object cache policies and forced object download policies by configuring standard HTTP headers. You can configure user metadata for an object to identify the purposes or attributes of the object.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/go-configure-access-credentials).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configure OSSClient instances](/help/en/oss/initialization-9#concept-52931-zh).
    
-   To configure object metadata, you must have the `oss:PutObject` permission. To query object metadata, you must have the `oss:GetObject` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Sample code

### **Set metadata when you upload an object**

**Warning**

When you set metadata during an object upload, make sure that no object with the same name exists in the bucket. Otherwise, the existing object is overwritten. For more information about how to prevent an object from being overwritten, see [Prevent an object from being overwritten](#316be9b4aaxng).

```
package main

import (
	"log"
	"strings"
	"time"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Set yourEndpoint to the endpoint of the bucket. For example, for the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. For other regions, use the actual endpoint.
	// Set yourRegion to the region where the bucket is located. For example, for the China (Hangzhou) region, set the region to cn-hangzhou. For other regions, use the actual region.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Specify the bucket name. Example: examplebucket.
	bucketName := "examplebucket" // Replace with your actual bucket name.
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		log.Fatalf("Failed to get bucket: %v", err)
	}

	// Set the object metadata. For example, set the expiration time to 23:00:00 GMT on January 10, 2049, set the access permissions to public-read, and set the custom metadata MyProp to MyPropVal.
	expires := time.Date(2049, time.January, 10, 23, 0, 0, 0, time.UTC)
	options := []oss.Option{
		oss.Expires(expires),
		oss.ObjectACL(oss.ACLPublicRead),
		oss.Meta("MyProp", "MyPropVal"),
	}

	// Upload the object from a data stream.
	// Specify the full path of the object. The full path does not include the bucket name. Example: exampledir/exampleobject.txt.
	objectName := "exampledir/exampleobject.txt" // Replace with your actual object path.
	err = bucket.PutObject(objectName, strings.NewReader("MyObjectValue"), options...)
	if err != nil {
		log.Fatalf("Failed to upload object: %v", err)
	}

	// Get the object metadata.
	props, err := bucket.GetObjectDetailedMeta(objectName)
	if err != nil {
		log.Fatalf("Failed to get object detailed metadata: %v", err)
	}
	log.Printf("Object Meta: %+v\n", props)
}
```

### **Modify the metadata of an existing object**

```
...

// Modify one metadata entry at a time.
err = bucket.SetObjectMeta(objectName, oss.Meta("MyMeta", "MyMetaValue1"))
if err != nil {
	log.Fatalf("Failed to set single metadata: %v", err)
}

// Modify multiple metadata entries at a time.
options := []oss.Option{
	oss.Meta("MyMeta", "MyMetaValue2"),
	oss.Meta("MyObjectLocation", "HangZhou"),
}
err = bucket.SetObjectMeta(objectName, options...)
if err != nil {
	log.Fatalf("Failed to set multiple metadatas: %v", err)
}

// Get the object metadata.
props, err := bucket.GetObjectDetailedMeta(objectName)
if err != nil {
	log.Fatalf("Failed to get object detailed metadata: %v", err)
}
log.Printf("Object Meta: %+v\n", props)
```

### **Get object metadata**

```
...

// Get the object metadata.
props, err := bucket.GetObjectDetailedMeta(objectName)
if err != nil {
	log.Fatalf("Failed to get object detailed metadata: %v", err)
}
log.Printf("Object Meta: %+v\n", props)
```

## FAQ

#### How do I prevent an object from being overwritten by an object with the same name?

To prevent an object from being overwritten by an object with the same name, use one of the following methods:

-   Enable versioning
    
    After you enable versioning, if an object is overwritten, it is saved as a previous version in the bucket. You can restore the previous version at any time. For more information, see [Enable versioning](/help/en/oss/user-guide/overview-78/#section-fq2-gj7-4pw).
    
-   Include a parameter in the upload request to prevent overwriting
    
    Include the x-oss-forbid-overwrite parameter in the header of the upload request and set its value to true. If you upload an object that has the same name as an existing object in the bucket, the upload fails and a FileAlreadyExists error is returned. For more information, see [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb).
    

## References

-   For the complete sample code for object metadata, see the [GitHub example](https://github.com/aliyun/aliyun-oss-go-sdk/blob/master/sample/object_meta.go).
    
-   For more information about the API operation used to set object metadata during a simple upload, see [PutObject](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.PutObject).
    
-   For more information about the API operation used to modify the metadata of an existing object, see [CopyObject](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.CopyObject).
    
-   For more information about the API operation used to retrieve object metadata, see [GetObjectMeta](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.GetObjectMeta).
