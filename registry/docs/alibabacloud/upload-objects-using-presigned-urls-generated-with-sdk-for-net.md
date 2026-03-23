OSS bucket objects are private by default. To let other users upload a file without sharing your credentials, generate a presigned URL using the OSS C# SDK. The URL embeds a time-limited signature that authorizes a single upload destination—anyone with the URL can PUT a file to that path, multiple times, until the URL expires. Each upload to the same path overwrites the previous object.

## How it works

1.  Your server generates a presigned URL using the C# SDK and your AccessKey credentials.
    
2.  Share the URL with the uploader (a browser, a mobile app, or a third-party service).
    
3.  The uploader sends a PUT request directly to OSS using that URL—no OSS credentials required.
    
4.  Once the URL expires, it can no longer be used. Generate a new one as needed.
    

> Generating a presigned URL is a client-side operation—no network request is sent to OSS during generation. The SDK computes the signature locally using your stored key. The entity generating the URL must hold the `oss:PutObject` permission so that the actual upload succeeds.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket in a known region
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set with credentials that have the `oss:PutObject` permission
    
-   OSS SDK for C# (V1) installed in your project
    

For setup details, see [Configure access credentials](/help/en/oss/developer-reference/configure-access-credentials-using-oss-sdk-for-csharp-v1) and [Grant custom access policies to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region (`https://oss-cn-hangzhou.aliyuncs.com`). To access OSS from other Alibaba Cloud services in the same region, use the internal endpoint instead. For a full list, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   All examples use V4 signed URLs. The maximum validity period for a V4 signed URL is 7 days.
    
-   If your credentials are Security Token Service (STS) temporary tokens, the URL's effective validity period is the shorter of the token's remaining lifetime and the expiration time you set. For example, if your STS token expires in 2 hours but you set a 7-day URL expiration, the URL will stop working when the token expires.
    
-   If the generated URL contains a plus sign (`+`), replace it with `%2B` before sharing the URL. Some HTTP clients reject URLs with unescaped plus signs.
    
-   To generate a URL over HTTPS, set the Endpoint to an `https://` address.
    

## Generate a presigned URL and upload a file

### Step 1: Generate the presigned URL (C#)

Run this on your server. The URL is valid for one hour by default—adjust `AddHours(1)` as needed (maximum 7 days for V4).

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Specify the endpoint for the bucket's region.
var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";

// Read credentials from environment variables.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

// Specify the bucket and target object path (no bucket name in the path).
var bucketName = "examplebucket";
var objectName = "exampledir/exampleobject.txt";

// Set the region that matches the bucket's location.
const string region = "cn-hangzhou";

// Create a ClientConfiguration and enable Signature Version 4.
var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

// Initialize the OssClient.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // Build the presigned URL request for a PUT upload.
    var generatePresignedUriRequest = new GeneratePresignedUriRequest(bucketName, objectName, SignHttpMethod.Put)
    {
        // Set the expiration time. Default is 3600 seconds (1 hour).
        Expiration = DateTime.Now.AddHours(1),
    };

    var signedUrl = client.GeneratePresignedUri(generatePresignedUriRequest);
    Console.WriteLine("Presigned URL: " + signedUrl);
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

Replace `<presigned-url>` in the upload examples below with the URL printed by this step.

### Step 2: Upload using the presigned URL

Share the presigned URL with the uploader. The uploader sends a PUT request—no OSS credentials needed. The following examples show how to do this from different environments.

All examples use the presigned URL from Step 1. Replace `<presigned-url>` with the actual URL.

#### curl

```
curl -X PUT -T /path/to/local/file "<presigned-url>"
```

#### C#

```
using System.Net.Http.Headers;

var filePath = "C:\\Users\\demo.txt";
var presignedUrl = "<presigned-url>";

using var httpClient = new HttpClient();
using var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
using var content = new StreamContent(fileStream);

var request = new HttpRequestMessage(HttpMethod.Put, presignedUrl);
request.Content = content;

var response = await httpClient.SendAsync(request);

if (response.IsSuccessStatusCode)
{
    Console.WriteLine($"Upload successful. Status code: {response.StatusCode}");
    foreach (var header in response.Headers)
    {
        Console.WriteLine($"{header.Key}: {string.Join(", ", header.Value)}");
    }
}
else
{
    string responseContent = await response.Content.ReadAsStringAsync();
    Console.WriteLine($"Upload failed. Status code: {response.StatusCode}");
    Console.WriteLine("Response: " + responseContent);
}
```

#### Java

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

        URL signedUrl = new URL("<presigned-url>");
        String pathName = "C:\\Users\\demo.txt";

        try {
            HttpPut put = new HttpPut(signedUrl.toString());
            HttpEntity entity = new FileEntity(new File(pathName));
            put.setEntity(entity);
            httpClient = HttpClients.createDefault();
            response = httpClient.execute(put);

            System.out.println("Status code: " + response.getStatusLine().getStatusCode());
            if (response.getStatusLine().getStatusCode() == 200) {
                System.out.println("Upload successful.");
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

#### Go

```
package main

import (
    "fmt"
    "io"
    "net/http"
    "os"
)

func uploadFile(signedUrl, filePath string) error {
    file, err := os.Open(filePath)
    if err != nil {
        return fmt.Errorf("unable to open file: %w", err)
    }
    defer file.Close()

    client := &http.Client{}
    req, err := http.NewRequest("PUT", signedUrl, file)
    if err != nil {
        return fmt.Errorf("failed to create request: %w", err)
    }

    resp, err := client.Do(req)
    if err != nil {
        return fmt.Errorf("failed to send request: %w", err)
    }
    defer resp.Body.Close()

    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return fmt.Errorf("failed to read response: %w", err)
    }

    fmt.Printf("Status code: %d\n", resp.StatusCode)
    if resp.StatusCode == 200 {
        fmt.Println("Upload successful.")
    }
    fmt.Println(string(body))
    return nil
}

func main() {
    signedUrl := "<presigned-url>"
    filePath := "C:\\Users\\demo.txt"

    if err := uploadFile(signedUrl, filePath); err != nil {
        fmt.Println("Error:", err)
    }
}
```

#### Python

```
import requests

def upload_file(signed_url, file_path):
    try:
        with open(file_path, 'rb') as file:
            response = requests.put(signed_url, data=file)

        print(f"Status code: {response.status_code}")
        if response.status_code == 200:
            print("Upload successful.")
        print(response.text)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    signed_url = "<presigned-url>"
    file_path = "C:\\Users\\demo.txt"
    upload_file(signed_url, file_path)
```

#### Node.js

```
const fs = require('fs');
const axios = require('axios');

async function uploadFile(signedUrl, filePath) {
    try {
        const fileStream = fs.createReadStream(filePath);
        const response = await axios.put(signedUrl, fileStream, {
            headers: {
                'Content-Type': 'application/octet-stream'
            }
        });

        console.log(`Status code: ${response.status}`);
        if (response.status === 200) {
            console.log('Upload successful.');
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

(async () => {
    const signedUrl = '<presigned-url>';
    const filePath = 'C:\\Users\\demo.txt';
    await uploadFile(signedUrl, filePath);
})();
```

#### Browser.js

**Important**

If you get a 403 signature mismatch error when uploading from a browser, the browser has auto-added a `Content-Type` header that was not included when the presigned URL was generated. Fix this by specifying the `Content-Type` header explicitly when calling `GeneratePresignedUri` in Step 1.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File upload example</title>
</head>
<body>
    <h1>File upload example</h1>
    <input type="file" id="fileInput" />
    <button id="uploadButton">Upload file</button>

    <script>
        // Replace with the presigned URL from Step 1.
        const signedUrl = "<presigned-url>";

        document.getElementById('uploadButton').addEventListener('click', async () => {
            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];

            if (!file) {
                alert('Select a file to upload.');
                return;
            }

            try {
                await upload(file, signedUrl);
                alert('File uploaded successfully.');
            } catch (error) {
                console.error('Upload error:', error);
                alert('Upload failed: ' + error.message);
            }
        });

        /**
         * Uploads a file to OSS using the presigned URL.
         * @param {File} file - The file to upload.
         * @param {string} presignedUrl - The presigned URL.
         */
        const upload = async (file, presignedUrl) => {
            const response = await fetch(presignedUrl, {
                method: 'PUT',
                body: file,
            });

            if (!response.ok) {
                throw new Error(`Upload failed, status: ${response.status}`);
            }

            console.log('File uploaded successfully.');
        };
    </script>
</body>
</html>
```

#### Android

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
            DataOutputStream dos = null;
            FileInputStream fis = null;

            try {
                URL url = new URL(signedUrl);
                connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("PUT");
                connection.setDoOutput(true);
                connection.setRequestProperty("Content-Type", "application/octet-stream");

                fis = new FileInputStream(filePath);
                dos = new DataOutputStream(connection.getOutputStream());

                byte[] buffer = new byte[1024];
                int length;
                while ((length = fis.read(buffer)) != -1) {
                    dos.write(buffer, 0, length);
                }

                dos.flush();
                dos.close();
                fis.close();

                int responseCode = connection.getResponseCode();
                Log.d(TAG, "Status code: " + responseCode);
                if (responseCode == 200) {
                    Log.d(TAG, "Upload successful.");
                }
                return "Upload complete. Status code: " + responseCode;

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
        String signedUrl = "<presigned-url>";
        String filePath = "C:\\Users\\demo.txt";
        activity.uploadFile(signedUrl, filePath);
    }
}
```

#### C++

```
#include <iostream>
#include <fstream>
#include <curl/curl.h>

void uploadFile(const std::string& signedUrl, const std::string& filePath) {
    CURL *curl;
    CURLcode res;

    curl_global_init(CURL_GLOBAL_DEFAULT);
    curl = curl_easy_init();

    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, signedUrl.c_str());
        curl_easy_setopt(curl, CURLOPT_UPLOAD, 1L);

        FILE *file = fopen(filePath.c_str(), "rb");
        if (!file) {
            std::cerr << "Unable to open file: " << filePath << std::endl;
            return;
        }

        fseek(file, 0, SEEK_END);
        long fileSize = ftell(file);
        fseek(file, 0, SEEK_SET);

        curl_easy_setopt(curl, CURLOPT_INFILESIZE_LARGE, (curl_off_t)fileSize);
        curl_easy_setopt(curl, CURLOPT_READDATA, file);

        res = curl_easy_perform(curl);

        if (res != CURLE_OK) {
            std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
        } else {
            long httpCode = 0;
            curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &httpCode);
            std::cout << "Status code: " << httpCode << std::endl;
            if (httpCode == 200) {
                std::cout << "Upload successful." << std::endl;
            }
        }

        fclose(file);
        curl_easy_cleanup(curl);
    }

    curl_global_cleanup();
}

int main() {
    std::string signedUrl = "<presigned-url>";
    std::string filePath = "C:\\Users\\demo.txt";
    uploadFile(signedUrl, filePath);
    return 0;
}
```

## FAQ

### Does an upload fail if the STS token expires mid-upload?

No. The upload will succeed. The presigned URL is valid for the shorter of the token's validity period and the presigned URL's validity period—and once the PUT request starts, the upload completes regardless of whether the URL or the STS token expires during transfer.

### Can I use the POST method with a presigned URL?

No. Presigned URLs only support PUT and GET methods. To upload using POST, construct a PostObject request instead. See [PostObject](/help/en/oss/developer-reference/postobject#reference-smp-nsw-wdb).

## What's next

-   [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints)
    
-   [Configure access credentials](/help/en/oss/developer-reference/configure-access-credentials-using-oss-sdk-for-csharp-v1)
    
-   [Signature Version 4 (recommended)](/help/en/oss/developer-reference/add-signatures-to-urls)
    
-   [PostObject](/help/en/oss/developer-reference/postobject#reference-smp-nsw-wdb)
