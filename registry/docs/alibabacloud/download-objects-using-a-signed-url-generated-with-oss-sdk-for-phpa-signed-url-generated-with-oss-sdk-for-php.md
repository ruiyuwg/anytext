By default, objects in an Object Storage Service (OSS) bucket are private. Generate a signed URL to grant temporary, time-limited download access without sharing your credentials. The URL remains valid for multiple requests until it expires, after which you must generate a new one.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket with at least one object to download
    
-   The `oss:GetObject` permission on the target object. For more information, see [Grant custom access policies to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   OSS PHP SDK V1 installed
    

## Usage notes

-   The examples in this topic use the public endpoint of the China (Hangzhou) region (`https://oss-cn-hangzhou.aliyuncs.com`). To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   Access credentials in the examples are read from environment variables (`OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET`). For configuration details, see [Configure access credentials (PHP SDK V1)](/help/en/oss/developer-reference/oss-php-configure-access-credentials).
    
-   These examples use Signature Version 4, which supports a maximum validity period of 7 days. For details, see [Signature Version 4 (recommended)](/help/en/oss/developer-reference/add-signatures-to-urls).
    
-   If the generated signed URL contains a plus sign (`+`), replace it with `%2B` before use.
    
-   To generate a signed URL that uses HTTPS, set the endpoint to an HTTPS address.
    

## How it works

Generating and using a signed URL for download involves two parties:

1.  **The object owner** generates a signed URL for a GET request using the PHP SDK. The URL embeds credentials and an expiration time, so recipients can download the object without needing their own OSS credentials.
    
2.  **The recipient** uses the signed URL directly—via a browser, curl, or any HTTP client—to download the object.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7169534671/CAEQPxiBgMDc97LDtxkiIGYxMzdiNjNmMjRmZDRhZjdhZGIzM2ZkNGMxNGJmNmMx4751395_20241112152822.507.svg)

### **Generate a signed URL**

Use `signUrl()` to generate a signed URL for a GET request. Set the expiration time in seconds.

```
<?php
if (is_file(__DIR__ . '/../autoload.php')) {
    require_once __DIR__ . '/../autoload.php';
}
if (is_file(__DIR__ . '/../vendor/autoload.php')) {
    require_once __DIR__ . '/../vendor/autoload.php';
}

use OSS\OssClient;
use OSS\Core\OssException;
use OSS\Http\RequestCore;
use OSS\Http\ResponseCore;
use OSS\Credentials\EnvironmentVariableCredentialsProvider;

// Read access credentials from environment variables.
// Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code.
$provider = new EnvironmentVariableCredentialsProvider();

$config = array(
    'provider'         => $provider,
    'endpoint'         => 'https://oss-cn-hangzhou.aliyuncs.com', // Replace with your bucket's endpoint
    'signatureVersion' => OssClient::OSS_SIGNATURE_VERSION_V4,
    'region'           => 'cn-hangzhou',                          // Replace with your bucket's region
);

$ossClient = new OssClient($config);

$bucket  = 'examplebucket';       // Replace with your bucket name
$object  = 'exampleobject.txt';   // Replace with the full object path (no bucket name)
$timeout = 600;                   // Expiration time in seconds (maximum: 32400)

try {
    $signedUrl = $ossClient->signUrl($bucket, $object, $timeout, 'GET');
    echo $signedUrl . PHP_EOL;
} catch (OssException $e) {
    echo 'Error: ' . $e->getMessage() . PHP_EOL;
}
```

The output is a URL similar to:

```
https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI5************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a939feb8d79a389572719f7e2939939936d0**********
```

The key query parameters are:

**Parameter**

**Description**

`x-oss-date`

Timestamp when the URL was signed

`x-oss-expires`

Validity period in seconds from the signing time

`x-oss-signature-version`

Signing algorithm (`OSS4-HMAC-SHA256`)

`x-oss-credential`

Credential scope (access key ID, date, region, service)

`x-oss-signature`

HMAC-SHA256 signature over the request parameters

**Important**

Do not modify any query parameter. Changing any value invalidates the signature and causes a `SignatureDoesNotMatch` error.

Share this URL with recipients. They can use it until it expires.

## Download with the signed URL

Recipients can download the object using any HTTP client. No OSS credentials are required.

Replace the URL in each example below with the one generated in the previous step.

### curl

```
curl -SO "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI5************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a939feb8d79a389572719f7e2939939936d0**********"
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
        // Replace with your signed URL
        String fileURL = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI5************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a939feb8d79a389572719f7e2939939936d0**********";
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

const fileURL = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI5************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a939feb8d79a389572719f7e2939939936d0**********";
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

file_url = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI5************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a939feb8d79a389572719f7e2939939936d0**********"
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
    fileURL := "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI5************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a939feb8d79a389572719f7e2939939936d0**********"
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
const fileURL = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI5************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a939feb8d79a389572719f7e2939939936d0**********";
const fileName = "myfile.txt";

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
        link.download = fileName;
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
        NSString *fileURL = @"https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T092756Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI5************/20241112/cn-hangzhou/oss/aliyun_v4_request&x-oss-signature=ed5a939feb8d79a389572719f7e2939939936d0**********";
        NSString *savePath = @"/Users/<your_username>/Desktop/myfile.txt";

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

## More operations

### Generate a signed URL for a specific object version

For versioned buckets, include the `versionId` to generate a signed URL that points to a specific version of an object.

```
<?php
if (is_file(__DIR__ . '/../autoload.php')) {
    require_once __DIR__ . '/../autoload.php';
}
if (is_file(__DIR__ . '/../vendor/autoload.php')) {
    require_once __DIR__ . '/../vendor/autoload.php';
}

use OSS\OssClient;
use OSS\Core\OssException;
use OSS\Http\RequestCore;
use OSS\Http\ResponseCore;
use OSS\Credentials\EnvironmentVariableCredentialsProvider;

$provider = new EnvironmentVariableCredentialsProvider();

$config = array(
    'provider'         => $provider,
    'endpoint'         => 'https://oss-cn-hangzhou.aliyuncs.com',
    'signatureVersion' => OssClient::OSS_SIGNATURE_VERSION_V4,
    'region'           => 'cn-hangzhou',
);

$ossClient = new OssClient($config);

$bucket  = 'examplebucket';
$object  = 'exampleobject.txt';
$timeout = 600;

$options = array(
    // Specify the version ID of the object
    $ossClient::OSS_VERSION_ID => 'CAEQEhiBgIDmgPf8mxgiIDA1YjZlNDIxY2ZmMzQ1MmU5MTM1Y2M4Yzk4NjIx****',
);

try {
    $signedUrl = $ossClient->signUrl($bucket, $object, $timeout, 'GET', $options);
    echo $signedUrl . PHP_EOL;
} catch (OssException $e) {
    echo 'Error: ' . $e->getMessage() . PHP_EOL;
}
```

### **Generate a signed URL using a custom domain name**

If your bucket is bound to a custom domain name (CNAME), set the endpoint to the custom domain and enable the `cname` option.

```
<?php
if (is_file(__DIR__ . '/../autoload.php')) {
    require_once __DIR__ . '/../autoload.php';
}
if (is_file(__DIR__ . '/../vendor/autoload.php')) {
    require_once __DIR__ . '/../vendor/autoload.php';
}

use OSS\OssClient;
use OSS\Core\OssException;
use OSS\Http\RequestCore;
use OSS\Http\ResponseCore;
use OSS\Credentials\EnvironmentVariableCredentialsProvider;

$provider = new EnvironmentVariableCredentialsProvider();

$config = array(
    'provider'         => $provider,
    'endpoint'         => 'http://static.example.com', // Replace with your custom domain
    'signatureVersion' => OssClient::OSS_SIGNATURE_VERSION_V4,
    'cname'            => true,
    'region'           => 'cn-hangzhou',
);

$ossClient = new OssClient($config);

$bucket  = 'examplebucket';
$object  = 'exampleobject.txt';
$timeout = 600;

try {
    $signedUrl = $ossClient->signUrl($bucket, $object, $timeout, 'GET');
    echo $signedUrl . PHP_EOL;
} catch (OssException $e) {
    echo 'Error: ' . $e->getMessage() . PHP_EOL;
}
```

## FAQ

**Why do I get a 403 error when accessing a signed URL?**

The most common cause is a modified URL. Any change to the query parameters invalidates the signature and causes a `SignatureDoesNotMatch` error. Check that the URL is transmitted without modification. Another cause is an expired URL; generate a new signed URL if the expiration time has passed.

**Why does the URL fail when it contains a \`+\` sign?**

Some HTTP clients interpret `+` as a space in URLs. Replace every `+` in the signed URL with `%2B` before sharing or using it.

## What's next

-   [Upload an object by using a signed URL (PHP SDK V1)](https://www.alibabacloud.com/help/en/oss/developer-reference/upload-objects-using-presigned-urls-php-sdk-v1)
    
-   [Signature Version 4 (recommended)](/help/en/oss/developer-reference/add-signatures-to-urls)
    
-   [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints)
