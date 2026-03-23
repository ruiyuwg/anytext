Append upload lets you add content to the end of an appendable object using the `AppendObject` method. Unlike Normal objects created with simple upload, appendable objects are a distinct object type — you cannot switch between the two.

## Usage notes

-   The sample code uses the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint instead. For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   Access credentials are loaded from environment variables. For configuration instructions, see [Configure access credentials](/help/en/oss/go-configure-access-credentials).
    
-   The `OSSClient` instance is created using an OSS endpoint. To use a custom domain or Security Token Service (STS) instead, see [Configure OSSClient instances](/help/en/oss/initialization-9).
    
-   If the object doesn't exist, `AppendObject` creates a new appendable object automatically.
    
-   If the object exists:
    
    -   If it's an appendable object and the specified position matches the current object length, the content is appended to the end.
        
    -   If it's an appendable object but the position doesn't match the current length, a `PositionNotEqualToLength` exception is thrown.
        
    -   If it's not an appendable object (for example, a Normal object created with simple upload), an `ObjectNotAppendable` exception is thrown.
        

## Permissions

By default, an Alibaba Cloud account has full permissions. RAM users and RAM roles have no permissions by default and must be granted access via [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Description**

AppendObject

`oss:PutObject`

Required for append upload

AppendObject

`oss:PutObjectTagging`

Required when specifying object tags via the `x-oss-tagging` header

## Sample code

Each call to `AppendObject` returns the position for the next append. Pass this value directly to the next call.

```
package main

import (
	"log"
	"strings"
	"time"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func main() {
	// Obtain access credentials from environment variables.
	// Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code.
	provider, err := oss.NewEnvironmentVariableCredentialsProvider()
	if err != nil {
		log.Fatalf("Failed to create credentials provider: %v", err)
	}

	// Create an OSSClient instance.
	// Replace yourEndpoint with the endpoint for your bucket's region,
	// for example, https://oss-cn-hangzhou.aliyuncs.com for China (Hangzhou).
	// Replace yourRegion with the region ID, for example, cn-hangzhou.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		log.Fatalf("Failed to create OSS client: %v", err)
	}

	// Replace examplebucket with your bucket name.
	bucket, err := client.Bucket("examplebucket")
	if err != nil {
		log.Fatalf("Failed to get bucket: %v", err)
	}

	objectName := "appendobject.txt"
	var nextPos int64 = 0 // The first append always starts at position 0.

	// Set the object expiration time.
	expires := time.Date(2025, time.December, 10, 23, 0, 0, 0, time.UTC)
	options := []oss.Option{
		oss.Expires(expires),
	}

	// First append: starts at position 0. Returns the position for the next append.
	nextPos, err = bucket.AppendObject(objectName, strings.NewReader("YourObjectAppendValue1"), nextPos, options...)
	if err != nil {
		log.Fatalf("Failed to append first value: %v", err)
	}

	// Second append: uses the position returned by the first append.
	nextPos, err = bucket.AppendObject(objectName, strings.NewReader("YourObjectAppendValue2"), nextPos)
	if err != nil {
		log.Fatalf("Failed to append second value: %v", err)
	}

	log.Println("Append uploads completed successfully.")
}
```

## FAQ

**How do I get the correct starting position for a non-first append upload?**

Call `GetObjectDetailedMeta` to retrieve the object metadata, then read the `X-Oss-Next-Append-Position` header to get the correct starting position. This pattern applies whenever you need to resume appending — for example, after an application restart. Common use cases include:

-   **Application log collection**: Continuously add log data to the same object instead of creating a new object each time.
    
-   **Real-time data analytics**: Add data streams to the same object in real time to simplify subsequent batch or real-time processing.
    

```
// Retrieve the current append position from the object metadata.
props, err := bucket.GetObjectDetailedMeta(objectName)
if err != nil {
	log.Fatalf("Failed to get object metadata: %v", err)
}
nextPos, err = strconv.ParseInt(props.Get("X-Oss-Next-Append-Position"), 10, 64)
if err != nil {
	log.Fatalf("Failed to parse next position: %v", err)
}

// Resume appending from the retrieved position.
nextPos, err = bucket.AppendObject(objectName, strings.NewReader("YourObjectAppendValue2"), nextPos)
if err != nil {
	log.Fatalf("Failed to append value: %v", err)
}

log.Println("Append upload completed successfully.")
```

## References

-   For the complete sample code, see the [GitHub example](https://github.com/aliyun/aliyun-oss-go-sdk/blob/master/sample/append_object.go).
    
-   For API details, see [AppendObject](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.AppendObject).
