By default, the access control list (ACL) of an OSS object is private — only the object owner can access it. A presigned URL embeds temporary credentials directly in the URL, so anyone with the link can download the object via an HTTP GET request without needing their own OSS credentials. The URL remains valid for a specified period and can be used multiple times. After it expires, a new presigned URL must be generated.

## Prerequisites

Before you begin, make sure you have:

-   An OSS bucket with at least one object to download
    
-   The `oss:GetObject` RAM policy permission — required to allow others to download via the presigned URL (no specific permission is needed to generate the URL itself)
    
-   Access credentials configured as environment variables — see [Configure access credentials](/help/en/oss/developer-reference/configure-access-credentials-by-using-oss-sdk-for-go-v2)
    

## How it works

![Flowchart showing how to download an object using a presigned URL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3617704571/CAEQPxiBgMDc97LDtxkiIGYxMzdiNjNmMjRmZDRhZjdhZGIzM2ZkNGMxNGJmNmMx4751395_20241112152822.507.svg)

1.  The object owner calls `client.Presign()` with a `GetObjectRequest` to generate a presigned URL.
    
2.  OSS signs the URL using the V4 signature algorithm and returns the URL with embedded credentials and an expiration time.
    
3.  Any user with the URL sends an HTTP GET request directly to OSS — no OSS credentials required.
    

> This topic uses V4 presigned URLs, which have a maximum validity period of seven days. For details, see [(Recommended) Include a V4 signature in a URL](/help/en/oss/developer-reference/add-signatures-to-urls).

### **Generate a presigned URL**

### Method signature

```
func (c *Client) Presign(ctx context.Context, request any, optFns ...func(*PresignOptions)) (result *PresignResult, err error)
```

**Request parameters**

**Parameter**

**Type**

**Description**

`ctx`

`context.Context`

The request context.

`request`

`*GetObjectRequest`

The API operation used to generate the URL. Pass `&oss.GetObjectRequest{}` for downloads.

`optFns`

`...func(*PresignOptions)`

(Optional) Validity period options. Defaults to 15 minutes if not set.

**PresignOptions**

**Option**

**Type**

**Description**

`Expires`

`time.Duration`

Relative validity period from the time of generation. For example, `30 * time.Minute` for 30 minutes.

`Expiration`

`time.Time`

Absolute expiration time. If both `Expiration` and `Expires` are set, `Expiration` takes precedence.

**Response: PresignResult**

**Field**

**Type**

**Description**

`Method`

`string`

The HTTP method. For `GetObject`, this is `GET`.

`URL`

`string`

The presigned URL to share with the requester.

`Expiration`

`time.Time`

The absolute time at which the URL expires.

`SignedHeaders`

`map[string]string`

Request headers included in the signature. If this map is non-empty, the same headers must be sent with every GET request using this URL.

### Basic example

The following example generates a presigned URL that grants temporary GET access to an object. The URL is valid for 10 minutes.

```
package main

import (
	"context"
	"flag"
	"log"
	"time"

	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"
)

var (
	region     string
	bucketName string
	objectName string
)

func init() {
	flag.StringVar(&region, "region", "", "The region where the bucket is located.")
	flag.StringVar(&bucketName, "bucket", "", "The name of the bucket.")
	flag.StringVar(&objectName, "object", "", "The name of the object.")
}

func main() {
	flag.Parse()

	if len(bucketName) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, bucket name required")
	}
	if len(region) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, region required")
	}
	if len(objectName) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, object name required")
	}

	// Load credentials from environment variables and configure the region.
	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	client := oss.NewClient(cfg)

	// Generate a presigned URL for HTTP GET. Valid for 10 minutes.
	result, err := client.Presign(context.TODO(), &oss.GetObjectRequest{
		Bucket: oss.Ptr(bucketName),
		Key:    oss.Ptr(objectName),
	},
		oss.PresignExpires(10*time.Minute),
	)
	if err != nil {
		log.Fatalf("failed to presign GetObject request: %v", err)
	}

	log.Printf("Method: %v\n", result.Method)
	log.Printf("Expiration: %v\n", result.Expiration)
	log.Printf("URL: %v\n", result.URL)

	// If SignedHeaders is non-empty, the same headers must accompany every
	// GET request that uses this URL — otherwise OSS returns a signature error.
	if len(result.SignedHeaders) > 0 {
		log.Printf("Signed headers (must be included in GET requests):\n")
		for k, v := range result.SignedHeaders {
			log.Printf("  %v: %v\n", k, v)
		}
	}
}
```

### Understanding the presigned URL

A generated URL looks like this:

```
https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt
  ?x-oss-date=20241112T092756Z
  &x-oss-expires=599
  &x-oss-signature-version=OSS4-HMAC-SHA256
  &x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request
  &x-oss-signature=ed5a******
```

**Parameter**

**Description**

`x-oss-date`

The date and time (ISO 8601) when the signature was created.

`x-oss-expires`

The validity period in seconds, counted from `x-oss-date`.

`x-oss-signature-version`

The signature algorithm — `OSS4-HMAC-SHA256` for V4 signatures.

`x-oss-credential`

The AccessKey ID and scope information used to calculate the signature.

`x-oss-signature`

The HMAC-SHA256 signature that proves the URL was signed with the correct AccessKey Secret.

> The sample code in this topic uses the region ID `cn-hangzhou`. By default, a public endpoint is used. If you access OSS from another Alibaba Cloud service in the same region, use an internal endpoint to avoid data transfer costs. See [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

## Download an object using the presigned URL

Share the URL with the requester. They can download the object using any HTTP client — no OSS SDK or credentials required.

All examples below use the same presigned URL format. Replace the placeholder URL with the one generated by your application.

### curl

```
curl -SO "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************"
```

### Java

```
import java.io.BufferedInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class Demo {
    public static void main(String[] args) {
        String fileURL = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************";
        String savePath = "C:/downloads/myfile.txt";

        try {
            downloadFile(fileURL, savePath);
            System.out.println("Download completed!");
        } catch (IOException e) {
            System.err.println("Error during download: " + e.getMessage());
        }
    }

    private static void downloadFile(String fileURL, String savePath) throws IOException {
        URL url = new URL(fileURL);
        HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
        httpConn.setRequestMethod("GET");

        int responseCode = httpConn.getResponseCode();
        if (responseCode == HttpURLConnection.HTTP_OK) {
            InputStream inputStream = new BufferedInputStream(httpConn.getInputStream());
            FileOutputStream outputStream = new FileOutputStream(savePath);

            byte[] buffer = new byte[4096];
            int bytesRead;
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }

            outputStream.close();
            inputStream.close();
        } else {
            System.out.println("No file to download. Server replied HTTP code: " + responseCode);
        }
        httpConn.disconnect();
    }
}
```

### Node.js

```
const https = require('https');
const fs = require('fs');

const fileURL = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************";
const savePath = "C:/downloads/myfile.txt";

https.get(fileURL, (response) => {
    if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(savePath);
        response.pipe(fileStream);

        fileStream.on('finish', () => {
            fileStream.close();
            console.log("Download completed!");
        });
    } else {
        console.error(`Download failed. Server responded with code: ${response.statusCode}`);
    }
}).on('error', (err) => {
    console.error("Error during download:", err.message);
});
```

### Python

```
import requests

file_url = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************"
save_path = "C:/downloads/myfile.txt"

try:
    response = requests.get(file_url, stream=True)
    if response.status_code == 200:
        with open(save_path, 'wb') as f:
            for chunk in response.iter_content(4096):
                f.write(chunk)
        print("Download completed!")
    else:
        print(f"No file to download. Server replied HTTP code: {response.status_code}")
except Exception as e:
    print("Error during download:", e)
```

### Go

```
package main

import (
    "io"
    "net/http"
    "os"
)

func main() {
    fileURL := "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************"
    savePath := "C:/downloads/myfile.txt"

    response, err := http.Get(fileURL)
    if err != nil {
        panic(err)
    }
    defer response.Body.Close()

    if response.StatusCode == http.StatusOK {
        outFile, err := os.Create(savePath)
        if err != nil {
            panic(err)
        }
        defer outFile.Close()

        _, err = io.Copy(outFile, response.Body)
        if err != nil {
            panic(err)
        }
        println("Download completed!")
    } else {
        println("No file to download. Server replied HTTP code:", response.StatusCode)
    }
}
```

### JavaScript (browser)

```
const fileURL = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************";
const savePath = "C:/downloads/myfile.txt";

fetch(fileURL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server replied HTTP code: ${response.status}`);
        }
        return response.blob();
    })
    .then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = savePath;
        document.body.appendChild(link);
        link.click();
        link.remove();
        console.log("Download completed!");
    })
    .catch(error => {
        console.error("Error during download:", error);
    });
```

### Android (Java)

```
import android.os.AsyncTask;
import android.os.Environment;
import java.io.BufferedInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class DownloadTask extends AsyncTask<String, String, String> {
    @Override
    protected String doInBackground(String... params) {
        String fileURL = params[0];
        String savePath = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS) + "/myfile.txt";
        try {
            URL url = new URL(fileURL);
            HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
            httpConn.setRequestMethod("GET");
            int responseCode = httpConn.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                InputStream inputStream = new BufferedInputStream(httpConn.getInputStream());
                FileOutputStream outputStream = new FileOutputStream(savePath);
                byte[] buffer = new byte[4096];
                int bytesRead;
                while ((bytesRead = inputStream.read(buffer)) != -1) {
                    outputStream.write(buffer, 0, bytesRead);
                }
                outputStream.close();
                inputStream.close();
                return "Download completed!";
            } else {
                return "No file to download. Server replied HTTP code: " + responseCode;
            }
        } catch (Exception e) {
            return "Error during download: " + e.getMessage();
        }
    }
}
```

### Objective-C

```
#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSString *fileURL = @"https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************";
        NSString *savePath = @"/Users/your_username/Desktop/myfile.txt";

        NSURL *url = [NSURL URLWithString:fileURL];

        NSURLSessionDataTask *task = [[NSURLSession sharedSession] dataTaskWithURL:url completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
            if (error) {
                NSLog(@"Error during download: %@", error.localizedDescription);
                return;
            }
            if (!data) {
                NSLog(@"No data received.");
                return;
            }

            NSError *writeError = nil;
            BOOL success = [data writeToURL:[NSURL fileURLWithPath:savePath] options:NSDataWritingAtomic error:&writeError];
            if (success) {
                NSLog(@"Download completed!");
            } else {
                NSLog(@"Error saving file: %@", writeError.localizedDescription);
            }
        }];

        [task resume];
        [[NSRunLoop currentRunLoop] run];
    }
    return 0;
}
```

## Common scenarios

### **Download a specific version of an object**

To download a versioned object, include the `VersionId` field in `GetObjectRequest`.

```
result, err := client.Presign(context.TODO(), &oss.GetObjectRequest{
    Bucket:    oss.Ptr(bucketName),
    Key:       oss.Ptr(objectName),
    VersionId: oss.Ptr("yourVersionId"), // Specify the version ID.
},
    oss.PresignExpires(10*time.Minute),
)
if err != nil {
    log.Fatalf("failed to presign GetObject request: %v", err)
}
log.Printf("Presign result: %#v\n", result)
log.Printf("URL: %#v\n", result.URL)
```

### **Force a browser to download instead of preview**

By default, browsers may render objects such as images or HTML files inline. To force a download prompt, set the `response-content-disposition` parameter when generating the URL.

**Step 1: Generate the URL with \`ResponseContentDisposition\`.**

```
result, err := client.Presign(context.TODO(), &oss.GetObjectRequest{
    Bucket:                     oss.Ptr(bucketName),
    Key:                        oss.Ptr(objectName),
    ResponseContentDisposition: oss.Ptr("attachment;filename=test.txt"),
},
)
if err != nil {
    log.Fatalf("failed to presign GetObject request: %v", err)
}
log.Printf("Method: %v\n", result.Method)
log.Printf("Expiration: %v\n", result.Expiration)
log.Printf("URL: %v\n", result.URL)
```

**Step 2: Download using the URL — no additional headers required.**

curl:

```
curl -X GET "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?response-content-disposition=attachment%3B%20filename%3Dtest.txt&x-oss-date=20241113T093321Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************&x-oss-signature=ed5a******************************************************" \
-o "myfile.txt"
```

Go:

```
package main

import (
	"io"
	"log"
	"net/http"
	"os"
)

func main() {
	url := "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?response-content-disposition=attachment%3B%20filename%3Dtest.txt&x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************"

	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		log.Fatalf("failed to create GET request: %v", err)
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatalf("request failed: %v", err)
	}
	defer resp.Body.Close()

	filePath := "C:/downloads/myfile.txt"
	file, err := os.Create(filePath)
	if err != nil {
		log.Fatalf("failed to create file: %v", err)
	}
	defer file.Close()

	n, err := io.Copy(file, resp.Body)
	if err != nil {
		log.Fatalf("failed to write object content: %v", err)
	}
	log.Printf("wrote %d bytes to %s\n", n, filePath)
}
```

### **Download using a URL that contains signed request headers**

When you include non-standard request headers in `GetObjectRequest` (such as `RangeBehavior` or `RequestPayer`), those headers become part of the signature. The requester must send the same headers with every GET request — otherwise OSS rejects the request with a signature error.

**Step 1: Generate the URL with signed headers.**

```
result, err := client.Presign(context.TODO(), &oss.GetObjectRequest{
    Bucket:        oss.Ptr(bucketName),
    Key:           oss.Ptr(objectName),
    RangeBehavior: oss.Ptr("standard"),
    RequestPayer:  oss.Ptr("requestpayer"),
},
)
if err != nil {
    log.Fatalf("failed to presign GetObject request: %v", err)
}
log.Printf("Method: %v\n", result.Method)
log.Printf("Expiration: %v\n", result.Expiration)
log.Printf("URL: %v\n", result.URL)

// Print signed headers so the requester knows which headers to include.
if len(result.SignedHeaders) > 0 {
    log.Printf("Signed headers (must be included in GET requests):\n")
    for k, v := range result.SignedHeaders {
        log.Printf("  %v: %v\n", k, v)
    }
}
```

**Step 2: Download using the URL and the same signed headers.**

curl:

```
curl -X GET "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241113T093321Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************&x-oss-signature=ed5a******************************************************" \
-H "x-oss-range-behavior: standard" \
-H "x-oss-request-payer: requester" \
-o "myfile.txt"
```

Go:

```
package main

import (
	"io"
	"log"
	"net/http"
	"os"
)

func main() {
	url := "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************"

	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		log.Fatalf("failed to create GET request: %v", err)
	}

	// These headers were signed into the URL — omitting them causes a signature error.
	req.Header.Set("X-Oss-Range-Behavior", "standard")
	req.Header.Set("X-Oss-Request-Payer", "requester")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatalf("request failed: %v", err)
	}
	defer resp.Body.Close()

	filePath := "C:/downloads/myfile.txt"
	file, err := os.Create(filePath)
	if err != nil {
		log.Fatalf("failed to create file: %v", err)
	}
	defer file.Close()

	n, err := io.Copy(file, resp.Body)
	if err != nil {
		log.Fatalf("failed to write object content: %v", err)
	}
	log.Printf("wrote %d bytes to %s\n", n, filePath)
}
```

### **Generate a URL using a custom domain name**

To use a custom domain name (CNAME) in the presigned URL, set the endpoint to your custom domain and enable CNAME mode when creating the client.

```
cfg := oss.LoadDefaultConfig().
    WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
    WithRegion(region).
    WithEndpoint("http://static.example.com").
    WithUseCName(true)

client := oss.NewClient(cfg)

result, err := client.Presign(context.TODO(), &oss.GetObjectRequest{
    Bucket: oss.Ptr(bucketName),
    Key:    oss.Ptr(objectName),
},
    oss.PresignExpires(10*time.Minute),
)
if err != nil {
    log.Fatalf("failed to presign GetObject request: %v", err)
}
log.Printf("Method: %v\n", result.Method)
log.Printf("Expiration: %v\n", result.Expiration)
log.Printf("URL: %v\n", result.URL)
```

## Usage notes

-   **Treat presigned URLs as bearer tokens.** Anyone with the URL can download the object until it expires. Share URLs only with intended recipients and use the shortest validity period that meets your needs.
    
-   **Signed headers must travel with the URL.** If `result.SignedHeaders` is non-empty, every GET request using that URL must include those headers. Missing them causes OSS to return a signature error.
    
-   **Maximum validity period is seven days** when using the V4 signature algorithm. For expiration using an absolute time, set `Expiration`; for a relative duration, set `Expires`. If both are set, `Expiration` takes precedence.
    
-   **After the URL expires, a new presigned URL must be obtained.** Only requests initiated before the URL expires are accepted.
    

## What's next

-   For the complete sample code, see the [GitHub example](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/sample/presign.go).
    
-   For the full API reference, see [Presign](https://pkg.go.dev/github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss#Client.Presign).
