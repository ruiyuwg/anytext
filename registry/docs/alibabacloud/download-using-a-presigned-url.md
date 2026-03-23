By default, objects in an Object Storage Service (OSS) bucket are private — only the object owner can access them. A presigned URL embeds a time-limited signature in the URL itself, so anyone with the URL can download the object without OSS credentials. The URL is reusable within its validity period; once it expires, generate a new one.

## How it works

1.  The object owner generates a presigned URL for a GET request using the OSS SDK for Java.
    
2.  Share the URL with anyone who needs to download the object.
    
3.  The recipient downloads the object by sending a GET request to the URL — no OSS account required.
    

## Prerequisites

Before you begin, make sure you have:

-   The `oss:GetObject` permission on the target object (required to generate a presigned URL for third-party download)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set with valid access credentials
    

> No permission is needed to generate the URL itself. The permission check applies when a third party uses the URL to download the object.

### **Generate a presigned URL**

All examples use Signature Version 4 (V4), which supports a maximum validity period of seven days.

**Method signature:**

```
URL generatePresignedUrl(String bucketName, String key, Date expiration)
URL generatePresignedUrl(GeneratePresignedUrlRequest request)
```

**Parameters:**

**Parameter**

**Required**

**Description**

**Example**

`bucketName`

Yes

Name of the bucket that contains the object

`examplebucket`

`key` (object name)

Yes

Full path of the object, excluding the bucket name

`exampleobject.txt`

`expiration`

Yes

URL expiry time. V4 presigned URLs support a maximum of seven days from the time of generation

`new Date(new Date().getTime() + 3600 * 1000L)`

`method`

No

HTTP method. Defaults to GET for download

`HttpMethod.GET`

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

import java.net.URL;
import java.util.Date;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // Use the public endpoint for the region where your bucket is located.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load access credentials from environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider =
            CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String objectName = "exampleobject.txt";
        // Set the region that matches your bucket location.
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Set the expiry time. This example uses one hour.
            Date expiration = new Date(new Date().getTime() + 3600 * 1000L);
            // Generate a presigned URL for a GET request.
            // No additional request headers are added, so the URL works directly in a browser.
            URL url = ossClient.generatePresignedUrl(bucketName, objectName, expiration);
            System.out.println(url);
        } catch (OSSException oe) {
            System.out.println("Error Message: " + oe.getErrorMessage());
            System.out.println("Error Code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
            System.out.println("Host ID: " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

> When accessing OSS from another Alibaba Cloud service in the same region (for example, ECS), use the internal endpoint (for example, `oss-cn-hangzhou-internal.aliyuncs.com`) instead of the public endpoint to avoid data transfer costs.

## Download using a presigned URL

Send a GET request to the presigned URL using any HTTP client. The examples below use the URL generated in the previous section.

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
        String fileURL = "<presigned-url>";
        String savePath = "<local-save-path>";  // Example: /downloads/myfile.txt

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
            System.out.println("Download failed. Server replied HTTP code: " + responseCode);
        }
        httpConn.disconnect();
    }
}
```

### Node.js

```
const https = require('https');
const fs = require('fs');

const fileURL = "<presigned-url>";
const savePath = "<local-save-path>";  // Example: /downloads/myfile.txt

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

file_url = "<presigned-url>"
save_path = "<local-save-path>"  # Example: /downloads/myfile.txt

try:
    response = requests.get(file_url, stream=True)
    if response.status_code == 200:
        with open(save_path, 'wb') as f:
            for chunk in response.iter_content(4096):
                f.write(chunk)
        print("Download completed!")
    else:
        print(f"Download failed. Server replied HTTP code: {response.status_code}")
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
    fileURL := "<presigned-url>"
    savePath := "<local-save-path>"  // Example: /downloads/myfile.txt

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
        println("Download failed. Server replied HTTP code:", response.StatusCode)
    }
}
```

### JavaScript (browser)

```
const fileURL = "<presigned-url>";
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
                return "Download failed. Server replied HTTP code: " + responseCode;
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
        NSString *fileURL = @"<presigned-url>";
        NSString *savePath = @"<local-save-path>";  // Example: /Users/username/Desktop/myfile.txt

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

## Other scenarios

### Download a specific object version

To download a specific version of a versioned object, pass the `versionId` as a query parameter.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.GeneratePresignedUrlRequest;
import java.net.URL;
import java.util.*;
import java.util.Date;

public class Demo {
    public static void main(String[] args) throws Throwable {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider =
            CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String objectName = "exampleobject.txt";
        String versionId = "CAEQARiBgID8rumR2hYiIGUyOTAyZGY2MzU5MjQ5ZjlhYzQzZjNlYTAyZDE3****";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            GeneratePresignedUrlRequest generatePresignedUrlRequest =
                new GeneratePresignedUrlRequest(bucketName, objectName);
            generatePresignedUrlRequest.setMethod(HttpMethod.GET);

            Date expiration = new Date(new Date().getTime() + 3600 * 1000L);
            generatePresignedUrlRequest.setExpiration(expiration);

            // Pass the versionId as a query parameter.
            Map<String, String> queryParam = new HashMap<>();
            queryParam.put("versionId", versionId);
            generatePresignedUrlRequest.setQueryParameter(queryParam);

            URL url = ossClient.generatePresignedUrl(generatePresignedUrlRequest);
            System.out.println(url);
        } catch (OSSException oe) {
            System.out.println("Error Message: " + oe.getErrorMessage());
            System.out.println("Error Code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
            System.out.println("Host ID: " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

### Generate a presigned URL with a custom domain name

When using a custom domain name (CNAME), enable the CNAME option and explicitly declare V4 signing.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.GeneratePresignedUrlRequest;

import java.net.URL;
import java.util.Date;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // Replace with your custom domain name.
        String endpoint = "http://static.example.com";
        String region = "cn-hangzhou";
        String bucketName = "examplebucket";
        String objectName = "exampleobject.txt";

        EnvironmentVariableCredentialsProvider credentialsProvider =
            CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        // Enable CNAME support for custom domain names.
        clientBuilderConfiguration.setSupportCname(true);
        // Explicitly declare V4 signing when using a custom domain name.
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            Date expiration = new Date(new Date().getTime() + 3600 * 1000L);
            GeneratePresignedUrlRequest request =
                new GeneratePresignedUrlRequest(bucketName, objectName, HttpMethod.GET);
            request.setExpiration(expiration);

            URL signedUrl = ossClient.generatePresignedUrl(request);
            System.out.println("Presigned URL: " + signedUrl);
        } catch (OSSException oe) {
            System.out.println("Error Message: " + oe.getErrorMessage());
            System.out.println("Error Code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
            System.out.println("Host ID: " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

### Force a download instead of preview

By default, browsers preview objects (such as images or PDFs) when accessed through a URL. To force a download, add `Content-Disposition: attachment` to the response header. This applies when using a custom domain name, or when you enabled OSS before 00:00 on October 9, 2022.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.CredentialsProviderFactory;
import com.aliyun.oss.common.auth.EnvironmentVariableCredentialsProvider;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.GeneratePresignedUrlRequest;

import java.net.URL;
import java.net.URLEncoder;
import java.util.Date;

public class Demo {
    public static void main(String[] args) throws Throwable {
        String endpoint = "http://static.example.com";
        EnvironmentVariableCredentialsProvider credentialsProvider =
            CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String objectName = "exampleobject.txt";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSupportCname(true);
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            Date expiration = new Date(new Date().getTime() + 3600 * 1000L);

            // Set the filename shown in the browser's download dialog.
            String filename = "homework.txt";

            GeneratePresignedUrlRequest request =
                new GeneratePresignedUrlRequest(bucketName, objectName, HttpMethod.GET);

            // Force download and set the displayed filename.
            request.getResponseHeaders().setContentDisposition(
                "attachment;filename=" + URLEncoder.encode(filename, "UTF-8"));
            request.setExpiration(expiration);

            URL signedUrl = ossClient.generatePresignedUrl(request);
            System.out.println("Presigned URL: " + signedUrl);
        } catch (OSSException oe) {
            System.out.println("Error Message: " + oe.getErrorMessage());
            System.out.println("Error Code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
            System.out.println("Host ID: " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## References

-   [Complete sample code on GitHub](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/SignV4Sample.java) — a runnable end-to-end example using V4 signing
    
-   [GeneratePresignedUrlRequest API reference](https://javadoc.io/doc/com.aliyun.oss/aliyun-sdk-oss/3.14.0/com/aliyun/oss/model/GeneratePresignedUrlRequest.html) — full parameter reference
    
-   [Signature Version 4](/help/en/oss/developer-reference/add-signatures-to-urls) — signing algorithm details and validity period limits
    
-   [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints) — public and internal endpoint list by region
    
-   [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials) — set up environment variables and other credential methods
