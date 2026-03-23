OSS buckets are private by default. Use the OSS SDK for Node.js to generate a presigned URL that grants third parties upload access without sharing your credentials. The URL is valid for a configurable period—up to seven days for V4 presigned URLs—and can be used multiple times within that period. Each upload to the same URL overwrites the previous object. Once the URL expires, generate a new one.

> Signature generation happens entirely on the client. No network request is made to OSS during URL generation, so the caller needs no special OSS permissions. However, the identity used to generate the URL must have the `oss:PutObject` permission on the target resource.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket
    
-   The `oss:PutObject` permission on the bucket. See [Grant custom policies to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   Access credentials configured as environment variables. See [Configure access credentials (Node.js SDK)](/help/en/oss/node-js-configure-access-credentials)
    

## How it works

To upload an object using a presigned URL:

1.  The object owner generates a V4 presigned URL for a PUT request using the OSS Node.js SDK.
    
2.  The presigned URL is shared with the uploader.
    
3.  The uploader sends a PUT request to OSS using the presigned URL—no OSS credentials required.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0078534671/CAEQPxiBgIC50aHNthkiIGQzMzBiYWUxNGRlNTQzM2ZhZDYwOTQzZDNhNTE5MjJh4751395_20241112152822.507.svg)

### **Generate a presigned URL**

Use `signatureUrlV4` to generate a V4 presigned URL. Specify:

**Parameter**

**Description**

`method`

`PUT` for uploads

`expires`

Duration in seconds (maximum 604,800 seconds / 7 days)

`options.headers`

Request headers the uploader will send (must match at signing time)

`fileName`

Target object key in the bucket

```
const OSS = require("ali-oss");

async function generatePresignedUrl(objectName) {
  const client = await new OSS({
    accessKeyId: process.env.OSS_ACCESS_KEY_ID,
    accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
    bucket: "examplebucket",
    region: "oss-cn-hangzhou",
    authorizationV4: true, // Required for V4 presigned URLs
  });

  // Generate a presigned PUT URL valid for 1 hour (3600 seconds).
  return await client.signatureUrlV4("PUT", 3600, {
    headers: {}, // Set headers to match what the uploader will send.
  }, objectName);
}

generatePresignedUrl("example/demo.txt").then((url) => {
  console.log("Presigned URL:", url);
}).catch((err) => {
  console.error("Failed to generate presigned URL:", err);
});
```

**Important**

The examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use the internal endpoint. See [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).

## Upload using the presigned URL

Use any HTTP client to send a PUT request to the presigned URL. No OSS credentials are needed—the signature is embedded in the URL.

The following examples all use the same pattern: open the local file and send it as the body of a PUT request to the presigned URL.

### curl

```
curl -X PUT -T /path/to/local/file \
  "https://exampleobject.oss-cn-hangzhou.aliyuncs.com/exampleobject.txt?x-oss-date=20241112T083238Z&x-oss-expires=3599&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-credential=LTAI****************%2F20241112%2Fcn-hangzhou%2Foss%2Faliyun_v4_request&x-oss-signature=ed5a******************************************************"
```

The presigned URL contains the following query parameters:

**Parameter**

**Description**

`x-oss-date`

Timestamp when the signature was created (ISO 8601 format)

`x-oss-expires`

Remaining validity in seconds from `x-oss-date`

`x-oss-signature-version`

Signature algorithm (`OSS4-HMAC-SHA256` for V4)

`x-oss-credential`

Credential scope used to sign the URL

`x-oss-signature`

The computed signature

### Java

```
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.FileEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.*;
import java.net.URL;

public class SignUrlUpload {
    public static void main(String[] args) throws Throwable {
        CloseableHttpClient httpClient = null;
        CloseableHttpResponse response = null;

        // Replace <signedUrl> with the presigned URL.
        URL signedUrl = new URL("<signedUrl>");

        // Specify the full path of the local file to upload.
        String pathName = "C:\\Users\\demo.txt";

        try {
            HttpPut put = new HttpPut(signedUrl.toString());
            HttpEntity entity = new FileEntity(new File(pathName));
            put.setEntity(entity);
            httpClient = HttpClients.createDefault();
            response = httpClient.execute(put);

            System.out.println("Status code: " + response.getStatusLine().getStatusCode());
            if (response.getStatusLine().getStatusCode() == 200) {
                System.out.println("Object uploaded successfully.");
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (response != null) response.close();
            if (httpClient != null) httpClient.close();
        }
    }
}
```

### Go

```
package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func uploadFile(signedUrl, filePath string) error {
	// Open the local file.
	file, err := os.Open(filePath)
	if err != nil {
		return fmt.Errorf("unable to open file: %w", err)
	}
	defer file.Close()

	// Send a PUT request with the file as the request body.
	req, err := http.NewRequest("PUT", signedUrl, file)
	if err != nil {
		return fmt.Errorf("failed to create request: %w", err)
	}

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return fmt.Errorf("failed to send request: %w", err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)
	fmt.Printf("Status code: %d\n", resp.StatusCode)
	if resp.StatusCode == 200 {
		fmt.Println("Object uploaded successfully.")
	}
	fmt.Println(string(body))
	return nil
}

func main() {
	// Replace <signedUrl> with the presigned URL.
	signedUrl := "<signedUrl>"

	// Specify the full path of the local file to upload.
	filePath := "C:\\Users\\demo.txt"

	if err := uploadFile(signedUrl, filePath); err != nil {
		fmt.Println("Upload failed:", err)
	}
}
```

### Python

```
import requests

def upload_file(signed_url, file_path):
    try:
        with open(file_path, "rb") as file:
            # Send a PUT request with the file as the request body.
            response = requests.put(signed_url, data=file)

        print(f"Status code: {response.status_code}")
        if response.status_code == 200:
            print("Object uploaded successfully.")
        print(response.text)

    except Exception as e:
        print(f"Upload failed: {e}")

if __name__ == "__main__":
    # Replace <signedUrl> with the presigned URL.
    signed_url = "<signedUrl>"

    # Specify the full path of the local file to upload.
    file_path = "C:\\Users\\demo.txt"

    upload_file(signed_url, file_path)
```

### Node.js

```
const fs = require("fs");
const axios = require("axios");

async function uploadFile(signedUrl, filePath) {
  try {
    const fileStream = fs.createReadStream(filePath);

    // Send a PUT request with the file stream as the request body.
    const response = await axios.put(signedUrl, fileStream, {
      headers: {
        "Content-Type": "application/octet-stream",
      },
    });

    console.log(`Status code: ${response.status}`);
    if (response.status === 200) {
      console.log("Object uploaded successfully.");
    }
  } catch (error) {
    console.error(`Upload failed: ${error.message}`);
  }
}

(async () => {
  // Replace <signedUrl> with the presigned URL.
  const signedUrl = "<signedUrl>";

  // Specify the full path of the local file to upload.
  const filePath = "C:\\Users\\demo.txt";

  await uploadFile(signedUrl, filePath);
})();
```

### Browser.js

**Important**

Browsers automatically include a `Content-Type` header with upload requests. If `Content-Type` was not specified when generating the presigned URL, OSS returns a `403 SignatureNotMatch` error. Always specify `Content-Type` when calling `signatureUrlV4` for browser-based uploads.

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>File upload</title>
</head>
<body>
  <input type="file" id="fileInput" />
  <button id="uploadButton">Upload</button>

  <script>
    // Replace <signedUrl> with the presigned URL generated in the previous step.
    const signedUrl = "<signedUrl>";

    document.getElementById("uploadButton").addEventListener("click", async () => {
      const fileInput = document.getElementById("fileInput");
      const file = fileInput.files[0];

      if (!file) {
        alert("Select a file first.");
        return;
      }

      try {
        await upload(file, signedUrl);
        alert("File uploaded successfully.");
      } catch (error) {
        alert("Upload failed: " + error.message);
      }
    });

    async function upload(file, presignedUrl) {
      const response = await fetch(presignedUrl, {
        method: "PUT",
        body: file,
      });

      if (!response.ok) {
        throw new Error(`Upload failed with status: ${response.status}`);
      }
    }
  </script>
</body>
</html>
```

### C#

```
using System.Net.Http.Headers;

// Specify the full path of the local file to upload.
var filePath = "C:\\Users\\demo.txt";
// Replace <signedUrl> with the presigned URL.
var presignedUrl = "<signedUrl>";

using var httpClient = new HttpClient();
using var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
using var content = new StreamContent(fileStream);

var request = new HttpRequestMessage(HttpMethod.Put, presignedUrl)
{
    Content = content
};

var response = await httpClient.SendAsync(request);

if (response.IsSuccessStatusCode)
{
    Console.WriteLine($"Object uploaded. Status code: {response.StatusCode}");
}
else
{
    string responseContent = await response.Content.ReadAsStringAsync();
    Console.WriteLine($"Upload failed. Status code: {response.StatusCode}");
    Console.WriteLine("Response: " + responseContent);
}
```

### C++

```
#include <iostream>
#include <fstream>
#include <curl/curl.h>

void uploadFile(const std::string& signedUrl, const std::string& filePath) {
    CURL* curl = curl_easy_init();
    if (!curl) return;

    curl_global_init(CURL_GLOBAL_DEFAULT);

    // Open the local file.
    FILE* file = fopen(filePath.c_str(), "rb");
    if (!file) {
        std::cerr << "Cannot open file: " << filePath << std::endl;
        curl_easy_cleanup(curl);
        return;
    }

    // Get file size.
    fseek(file, 0, SEEK_END);
    long fileSize = ftell(file);
    fseek(file, 0, SEEK_SET);

    curl_easy_setopt(curl, CURLOPT_URL, signedUrl.c_str());
    curl_easy_setopt(curl, CURLOPT_UPLOAD, 1L);
    curl_easy_setopt(curl, CURLOPT_READDATA, file);
    curl_easy_setopt(curl, CURLOPT_INFILESIZE_LARGE, (curl_off_t)fileSize);

    CURLcode res = curl_easy_perform(curl);
    if (res != CURLE_OK) {
        std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
    } else {
        long httpCode = 0;
        curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &httpCode);
        std::cout << "Status code: " << httpCode << std::endl;
        if (httpCode == 200) {
            std::cout << "Object uploaded successfully." << std::endl;
        }
    }

    fclose(file);
    curl_easy_cleanup(curl);
    curl_global_cleanup();
}

int main() {
    // Replace <signedUrl> with the presigned URL.
    std::string signedUrl = "<signedUrl>";

    // Specify the full path of the local file to upload.
    std::string filePath = "C:\\Users\\demo.txt";

    uploadFile(signedUrl, filePath);
    return 0;
}
```

### Android

```
package com.example.signurlupload;

import android.os.AsyncTask;
import android.util.Log;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

public class SignUrlUploadActivity {

    private static final String TAG = "SignUrlUploadActivity";

    public void uploadFile(String signedUrl, String filePath) {
        new UploadTask().execute(signedUrl, filePath);
    }

    private class UploadTask extends AsyncTask<String, Void, String> {

        @Override
        protected String doInBackground(String... params) {
            String signedUrl = params[0];
            String filePath = params[1];

            HttpURLConnection connection = null;
            try {
                connection = (HttpURLConnection) new URL(signedUrl).openConnection();
                connection.setRequestMethod("PUT");
                connection.setDoOutput(true);
                connection.setRequestProperty("Content-Type", "application/octet-stream");

                try (FileInputStream fis = new FileInputStream(filePath);
                     DataOutputStream dos = new DataOutputStream(connection.getOutputStream())) {
                    byte[] buffer = new byte[1024];
                    int length;
                    while ((length = fis.read(buffer)) != -1) {
                        dos.write(buffer, 0, length);
                    }
                }

                int responseCode = connection.getResponseCode();
                Log.d(TAG, "Status code: " + responseCode);
                if (responseCode == 200) {
                    Log.d(TAG, "Object uploaded successfully.");
                }
                return "Status code: " + responseCode;

            } catch (IOException e) {
                e.printStackTrace();
                return "Upload failed: " + e.getMessage();
            } finally {
                if (connection != null) connection.disconnect();
            }
        }

        @Override
        protected void onPostExecute(String result) {
            Log.d(TAG, result);
        }
    }

    public static void main(String[] args) {
        SignUrlUploadActivity activity = new SignUrlUploadActivity();
        // Replace <signedUrl> with the presigned URL.
        String signedUrl = "<signedUrl>";
        // Specify the full path of the local file to upload.
        String filePath = "C:\\Users\\demo.txt";
        activity.uploadFile(signedUrl, filePath);
    }
}
```

## Supported methods

Presigned URLs support the following HTTP methods:

**Method**

**Use**

`PUT`

Upload an object

`GET`

Download an object

The POST method is not supported for presigned URLs. To upload using POST, use the [PostObject](/help/en/oss/developer-reference/postobject#reference-smp-nsw-wdb) API directly.

## Security considerations

Treat presigned URLs as bearer tokens. Anyone with the URL can upload to the specified object until the URL expires. Share presigned URLs only with intended recipients and set the shortest practical validity period for your use case.

## Other scenarios

### Generate a presigned URL with image processing parameters

```
const OSS = require("ali-oss");

const client = await new OSS({
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  stsToken: "yourSecurityToken",
  bucket: "examplebucket",
  region: "oss-cn-hangzhou",
  secure: true, // Use HTTPS to prevent browsers from blocking the URL.
});

// Generate a presigned URL with an image resize operation.
const signedUrl = await client.signatureUrlV4("GET", 3600, {
  queries: {
    "x-oss-process": "image/resize,w_200",
  },
}, "demo.pdf");
```

### **Generate a presigned URL with a version ID**

```
const OSS = require("ali-oss");

const client = await new OSS({
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  stsToken: "yourSecurityToken",
  bucket: "examplebucket",
  region: "oss-cn-hangzhou",
  secure: true,
});

// Generate a presigned URL for a specific object version.
const signedUrl = await client.signatureUrlV4("GET", 3600, {
  queries: {
    versionId: "yourVersionId",
  },
}, "demo.pdf");
```

## Troubleshooting

### 403 SignatureNotMatch error

If an upload returns a `403 SignatureNotMatch` error, check the following:

-   **Content-Type mismatch**: The `Content-Type` header in the upload request must match the value specified when the URL was generated. This is the most common cause, especially for browser-based uploads.
    

## FAQ

### If the presigned URL expires while an upload is in progress, does the upload fail?

The upload will succeed.

The effective validity period is the shorter of the presigned URL's validity period and the STS token's validity period (if you used temporary credentials to generate the URL).

## What's next

-   [Signature V4 (Recommended)](/help/en/oss/developer-reference/add-signatures-to-urls) — Learn how OSS constructs V4 signatures
    
-   [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints) — Find the correct endpoint for your region
    
-   [PostObject](/help/en/oss/developer-reference/postobject#reference-smp-nsw-wdb) — Upload objects using HTML form POST
