OSS can send a callback to an application server after a simple upload (PutObject and PutObjectFromFile) or a multipart upload (UploadFile) is complete. To enable callbacks, include the callback parameters in your request to OSS.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/go-configure-access-credentials).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configure OSSClient instances](/help/en/oss/initialization-9#concept-52931-zh).
    

## Sample code

The following code shows how to use an upload callback when you upload a string. The destination bucket is examplebucket. The object to upload is exampleobject.txt in the examplefiles folder.

```
package main

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"os"
	"strings"

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
	// Set yourEndpoint to the endpoint of the bucket. For example, for the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. For other regions, set the endpoint as needed.
	// Set yourRegion to the region where the bucket is located. For example, for the China (Hangzhou) region, set the region to cn-hangzhou. For other regions, set the region as needed.
	clientOptions := []oss.ClientOption{oss.SetCredentialsProvider(&provider)}
	clientOptions = append(clientOptions, oss.Region("yourRegion"))
	// Set the signature version.
	clientOptions = append(clientOptions, oss.AuthVersion(oss.AuthV4))
	client, err := oss.New("yourEndpoint", "", "", clientOptions...)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(-1)
	}

	// Specify the bucket name, for example, examplebucket.
	bucket, err := client.Bucket("examplebucket")
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(-1)
	}

	// Define the callback parameters.
	callbackUrl := "http://your.callback.server.address" // Set the URL of the callback server.
	callbackMap := map[string]string{
		"callbackUrl":      callbackUrl,                         // Set the URL of the callback server.
		"callbackBody":     "bucket=${bucket}&object=${object}", // Set the request body for the callback.
		"callbackBodyType": "application/x-www-form-urlencoded", // Set the content type of the request body for the callback.
	}

	// Convert the callback parameters to a JSON string and perform Base64 encoding.
	callbackStr, err := json.Marshal(callbackMap)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(-1)
	}
	callbackBase64 := base64.StdEncoding.EncodeToString(callbackStr)

	// Set the upload callback parameters.
	options := []oss.Option{
		oss.Callback(callbackBase64),
	}

	// Create a string that consists of 1,024 × 1,024 'a' characters.
	content := strings.Repeat("a", 1024*1024)

	// Upload the string. Make sure that objectPath does not include the bucket name.
	objectPath := "examplefiles/exampleobject.txt"
	err = bucket.PutObject(objectPath, strings.NewReader(content), options...)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(-1)
	}

	// Print a success message.
	fmt.Println("Object uploaded with callback successfully.")
}
```

## References

-   For the complete sample code for upload callbacks, see [Github](https://github.com/aliyun/aliyun-oss-go-sdk/blob/master/sample/put_object.go).
    
-   For more information about the API operation for upload callbacks, see [Callback](/help/en/oss/developer-reference/callback#reference-zkm-311-hgb).
