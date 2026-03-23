By default, objects in an OSS bucket are private and accessible only to the object owner. Use the OSS SDK for C# to generate a presigned URL for the GET method with an expiration time, allowing anyone with the URL to download the object without credentials. The URL can be reused until it expires, and can be accessed multiple times before it expires.

**Warning**

Treat presigned URLs as bearer tokens. Anyone with a valid URL can download the object until it expires. Share presigned URLs only with intended recipients, and use short expiration times for sensitive objects.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket with at least one object to download
    
-   The `oss:GetObject` permission on the target object. For details, see [Common examples of RAM policies](/help/en/oss/user-guide/common-examples-of-ram-policies)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables configured with valid credentials. For details, see [Configure access credentials using OSS SDK for PHP 1.0](/help/en/oss/developer-reference/oss-php-configure-access-credentials)
    

## Usage notes

-   The examples use the public endpoint for the China (Hangzhou) region. To access OSS from another Alibaba Cloud service in the same region, use the internal endpoint instead. For a full list of regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples use the Signature Version 4 algorithm, which supports a maximum validity period of 7 days. For details, see [Signature Version 4 (recommended)](/help/en/oss/developer-reference/add-signatures-to-urls).
    
-   If a generated presigned URL contains a plus sign (`+`), the URL may be inaccessible. Replace `+` with `%2B` before sharing the URL.
    
-   To generate a presigned URL that uses HTTPS, set the protocol in the endpoint to `https`.
    

## How it works

The following flowchart shows the download process.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2797445671/CAEQUBiBgIDpmcmz2BkiIDViOWY4M2FhMmE5NzQ3ODU4NjI4OTJhZmU0MjMwZjQw4751395_20241112152822.507.svg)

1.  Use the OSS SDK for C# to generate a presigned URL for the target object.
    
2.  Share the URL. Recipients use any HTTP client to send a GET request to the URL and download the object — no OSS credentials required.
    

### **Generate a presigned URL**

The following example initializes an `OssClient` with Signature Version 4 and generates a presigned URL with a 1-hour validity period.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Specify the endpoint for the region where the bucket is located.
// Example: https://oss-cn-hangzhou.aliyuncs.com for China (Hangzhou).
var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";

// Load credentials from environment variables.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

// Specify the bucket name and object path.
var bucketName = "examplebucket";
var objectName = "exampledir/exampleobject.txt";

// Specify the region where the bucket is located. Example: cn-hangzhou.
const string region = "cn-hangzhou";

// Configure the client to use Signature Version 4.
var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

// Create the OSSClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    var metadata = client.GetObjectMetadata(bucketName, objectName);
    var etag = metadata.ETag;

    // Generate a presigned URL valid for 1 hour.
    // Default validity: 3600 seconds. Maximum validity (V4): 7 days.
    var req = new GeneratePresignedUriRequest(bucketName, objectName, SignHttpMethod.Get)
    {
        Expiration = DateTime.UtcNow.AddHours(1),
    };
    var uri = client.GeneratePresignedUri(req);

    Console.WriteLine("Presigned URL: " + uri);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}; Error info: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

## Download using the presigned URL

A presigned URL is a standard HTTP endpoint — no authentication headers are required. Pass the URL to any HTTP client or share it with users who need to download the object.

The following examples show how to send a GET request to the presigned URL using different languages and tools. All examples use the same pattern: send a GET request to the URL and save the response body to a local file.

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
        // Replace with the generated presigned URL for the GET request.
        String fileURL = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************";
        // Enter the destination path to save the file, including the file name and extension.
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

        // Check the response code.
        int responseCode = httpConn.getResponseCode();
        if (responseCode == HttpURLConnection.HTTP_OK) {
            // Input stream.
            InputStream inputStream = new BufferedInputStream(httpConn.getInputStream());
            // Output stream.
            FileOutputStream outputStream = new FileOutputStream(savePath);

            byte[] buffer = new byte[4096]; // Buffer.
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

### JavaScript

```
const fileURL = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************";
const savePath = "C:/downloads/myfile.txt"; // The file name to use for the download.

fetch(fileURL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server replied HTTP code: ${response.status}`);
        }
        return response.blob(); // Convert the response to a blob.
    })
    .then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = savePath; // Set the name of the downloaded file.
        document.body.appendChild(link); // This step ensures that the link exists in the document.
        link.click(); // Simulate a click on the download link.
        link.remove(); // Remove the link after completion.
        console.log("Download completed!");
    })
    .catch(error => {
        console.error("Error during download:", error);
    });
```

### Android-Java

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
        String savePath = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS) + "/myfile.txt"; // The modified save path.
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
        // Define the file URL and save path (change to a valid path).
        NSString *fileURL = @"https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************";
        NSString *savePath = @"/Users/your_username/Desktop/myfile.txt"; // Replace with your username.
        
        // Create a URL object.
        NSURL *url = [NSURL URLWithString:fileURL];
        
        // Create a download task.
        NSURLSessionDataTask *task = [[NSURLSession sharedSession] dataTaskWithURL:url completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
            // Error handling.
            if (error) {
                NSLog(@"Error during download: %@", error.localizedDescription);
                return;
            }
            
            // Check the data.
            if (!data) {
                NSLog(@"No data received.");
                return;
            }
            
            // Save the file.
            NSError *writeError = nil;
            BOOL success = [data writeToURL:[NSURL fileURLWithPath:savePath] options:NSDataWritingAtomic error:&writeError];
            if (success) {
                NSLog(@"Download completed!");
            } else {
                NSLog(@"Error saving file: %@", writeError.localizedDescription);
            }
        }];
        
        // Start the task.
        [task resume];
        
        // Keep the main thread running so that the asynchronous request can be completed.
        [[NSRunLoop currentRunLoop] run];
    }
    return 0;
}
```

## What's next

-   To generate a presigned URL for uploading an object instead of downloading, see the upload presigned URL documentation for the OSS SDK for C#.
    
-   To learn more about Signature Version 4 parameters, see [Signature Version 4 (recommended)](/help/en/oss/developer-reference/add-signatures-to-urls).
    
-   To control which RAM users or roles can generate presigned URLs or access objects, see [Common examples of RAM policies](/help/en/oss/user-guide/common-examples-of-ram-policies).
