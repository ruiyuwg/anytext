By default, objects in an OSS bucket are private. Use the OSS SDK for Node.js to generate a presigned URL for a GET request, then share that URL so others can download the object without needing credentials. The URL can be used multiple times until it expires; after that, generate a new one.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket with at least one object to download
    
-   The `oss:GetObject` permission on your RAM user or role. For details, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` set as environment variables
    

## How it works

Downloading an object with a presigned URL is a two-step process:

1.  The object owner generates a presigned URL using the Node.js SDK. The URL embeds the signature, expiry, and permissions — no credentials are exposed to the downloader.
    
2.  Anyone with the URL sends a standard HTTP GET request to download the object. No SDK or Alibaba Cloud account is required.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4818534671/CAEQPxiBgMDc97LDtxkiIGYxMzdiNjNmMjRmZDRhZjdhZGIzM2ZkNGMxNGJmNmMx4751395_20241112152822.507.svg)

## Generate a presigned URL

The following example uses Signature V4 (`authorizationV4: true`), which supports a maximum validity period of 7 days. The URL in this example is valid for 3,600 seconds (1 hour).

> Set `secure: true` to use HTTPS. This prevents browsers from blocking the download link.

```
const OSS = require("ali-oss");

async function generatePresignedUrl(fileName) {
  const client = new OSS({
    // Read credentials from environment variables — never hardcode them.
    accessKeyId: process.env.OSS_ACCESS_KEY_ID,
    accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
    bucket: "examplebucket",
    // Replace with the region where your bucket is located.
    // Example: oss-cn-hangzhou for China (Hangzhou).
    region: "oss-cn-hangzhou",
    secure: true,       // Use HTTPS to avoid browser blocking
    authorizationV4: true
  });

  return client.signatureUrlV4("GET", 3600, {
    headers: {}  // Include any request headers used during the actual download.
  }, fileName);
}

generatePresignedUrl("exampleobject.txt")
  .then(url => console.log("Presigned URL:", url))
  .catch(err => console.error("Error:", err));
```

### Understanding the presigned URL

The generated URL looks like this:

```
https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt
  ?x-oss-date=20241112T092756Z
  &x-oss-expires=3599
  &x-oss-signature-version=OSS4-HMAC-SHA256
  &x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request
  &x-oss-signature=ed5a******************************************************
```

Key parameters:

**Parameter**

**Description**

`x-oss-date`

When the signature was created (ISO 8601 format)

`x-oss-expires`

Validity period in seconds, counted from `x-oss-date`

`x-oss-signature-version`

Signing algorithm: `OSS4-HMAC-SHA256` for Signature V4

`x-oss-credential`

Identifies the credential and scope used to sign the URL

`x-oss-signature`

The HMAC-SHA256 signature proving the URL is authentic

### URL expiration behavior

The maximum validity period for V4 presigned URLs is **7 days**.

## Download the object

Once you have the presigned URL, use any HTTP client to download the object. No authentication headers are needed.

### curl

```
curl -SO "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************"
```

### Node.js

```
const https = require("https");
const fs = require("fs");

const fileURL = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************";
const savePath = "C:/downloads/myfile.txt";

https.get(fileURL, (response) => {
  if (response.statusCode === 200) {
    const fileStream = fs.createWriteStream(savePath);
    response.pipe(fileStream);
    fileStream.on("finish", () => {
      fileStream.close();
      console.log("Download completed.");
    });
  } else {
    console.error(`Download failed. HTTP status code: ${response.statusCode}`);
  }
}).on("error", (err) => {
  console.error("Error during download:", err.message);
});
```

### JavaScript (browser)

```
const fileURL = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************";
const savePath = "myfile.txt";

fetch(fileURL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP status code: ${response.status}`);
    }
    return response.blob();
  })
  .then(blob => {
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = savePath;
    document.body.appendChild(link);  // Required for the link to work in some browsers.
    link.click();
    link.remove();
    console.log("Download completed.");
  })
  .catch(error => console.error("Error during download:", error));
```

### Python

```
import requests

file_url = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a******************************************************"
save_path = "C:/downloads/myfile.txt"

try:
    response = requests.get(file_url, stream=True)
    if response.status_code == 200:
        with open(save_path, "wb") as f:
            for chunk in response.iter_content(4096):
                f.write(chunk)
        print("Download completed.")
    else:
        print(f"Download failed. HTTP status code: {response.status_code}")
except Exception as e:
    print("Error during download:", e)
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
            System.out.println("Download completed.");
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
            System.out.println("Download failed. HTTP status code: " + responseCode);
        }
        httpConn.disconnect();
    }
}
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
        println("Download completed.")
    } else {
        println("Download failed. HTTP status code:", response.StatusCode)
    }
}
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
        String savePath = Environment.getExternalStoragePublicDirectory(
            Environment.DIRECTORY_DOWNLOADS) + "/myfile.txt";
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
                return "Download completed.";
            } else {
                return "Download failed. HTTP status code: " + responseCode;
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
        // Replace your_username with your actual username.
        NSString *savePath = @"/Users/your_username/Desktop/myfile.txt";

        NSURL *url = [NSURL URLWithString:fileURL];
        NSURLSessionDataTask *task = [[NSURLSession sharedSession]
            dataTaskWithURL:url
            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
                if (error) {
                    NSLog(@"Error during download: %@", error.localizedDescription);
                    return;
                }
                if (!data) {
                    NSLog(@"No data received.");
                    return;
                }
                NSError *writeError = nil;
                BOOL success = [data writeToURL:[NSURL fileURLWithPath:savePath]
                                        options:NSDataWritingAtomic
                                          error:&writeError];
                if (success) {
                    NSLog(@"Download completed.");
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

## More scenarios

### Generate a presigned URL with image processing parameters

Embed image processing parameters directly in the presigned URL using the `x-oss-process` query parameter.

```
const OSS = require("ali-oss");

async function generatePresignedUrl(fileName) {
  const client = new OSS({
    accessKeyId: process.env.OSS_ACCESS_KEY_ID,
    accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
    bucket: "examplebucket",
    region: "oss-cn-hangzhou",
    authorizationV4: true,
    cname: true
  });

  return client.signatureUrlV4("GET", 3600, {
    headers: {},
    queries: {
      "x-oss-process": "image/resize,m_fixed,w_100,h_100"  // Resize to 100x100 pixels.
    }
  }, fileName);
}

generatePresignedUrl("test.jpg")
  .then(url => console.log("Presigned URL:", url))
  .catch(err => console.error("Error:", err));
```

### Generate a presigned URL for a specific object version

Pass the `versionId` query parameter to pin the URL to a specific object version.

```
const OSS = require("ali-oss");

const client = new OSS({
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  bucket: "examplebucket",
  region: "oss-cn-hangzhou",
  secure: true,
  authorizationV4: true
});

const signedUrl = await client.signatureUrlV4("GET", 3600, {
  queries: {
    versionId: "yourVersionId"  // Replace with the actual version ID.
  }
}, "demo.pdf");
```

### Generate a presigned URL using a custom domain name

Set `cname: true` and use your custom domain name as the endpoint.

```
const OSS = require("ali-oss");

async function generatePresignedUrl(fileName) {
  const client = new OSS({
    endpoint: "http://static.example.com",  // Your custom domain name.
    accessKeyId: process.env.OSS_ACCESS_KEY_ID,
    accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
    bucket: "examplebucket",
    region: "oss-cn-hangzhou",
    authorizationV4: true,
    cname: true
  });

  return client.signatureUrlV4("GET", 3600, {
    headers: {}
  }, fileName);
}

generatePresignedUrl("exampleobject.txt")
  .then(url => console.log("Presigned URL:", url))
  .catch(err => console.error("Error:", err));
```

## Usage notes

-   **Endpoint:** The examples in this topic use the public endpoint for the China (Hangzhou) region (`oss-cn-hangzhou`). To access OSS from other Alibaba Cloud services in the same region, use the internal endpoint. For a full list of regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   **Signature version:** V4 presigned URLs are recommended. For background on OSS signature versions, see [Signature V4 (Recommended)](/help/en/oss/developer-reference/add-signatures-to-urls).
    
-   **Access credentials:** The examples read credentials from environment variables (`OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET`). For other credential options, see [Configure access credentials (Node.js SDK)](/help/en/oss/node-js-configure-access-credentials).
    

## References

-   [GeneratePresignedUrlRequest API reference](https://javadoc.io/doc/com.aliyun.oss/aliyun-sdk-oss/3.14.0/com/aliyun/oss/model/GeneratePresignedUrlRequest.html)
