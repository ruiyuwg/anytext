Direct client upload lets you upload files from a client directly to Object Storage Service (OSS). Unlike server-side proxy uploads, this method does not route files through your application server, which improves upload speed and conserves server resources. This topic describes the benefits, security implementations, and best practices for direct client uploads.

## Why use direct client upload

In a typical server-client architecture, a common method for file uploads is using a server-side proxy. The client uploads a file to the application server, and the application server then uploads the file to OSS. In this process, data is transmitted over the network twice. This consumes unnecessary network resources and increases the resource overhead on the server. To address this issue, you can connect the client directly to OSS to upload files, bypassing the application server.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3659872771/CAEQUxiBgMC4jMb73RkiIDA3YzdhNGQ2ZDA5OTRlMmU5MDI2ZGMzMGJhNzUyYTRj4075211_20231109114557.035.svg)

## **How to implement direct client upload**

To implement direct client upload, you must address the following two main issues:

### **Cross-origin access**

If your client is a web application or a mini program, you must address cross-origin access restrictions. For security reasons, browsers and mini program containers typically restrict cross-origin access. This restriction prevents your client-side code from connecting directly to OSS. You can configure cross-origin access rules for your OSS bucket to allow web applications or mini programs from specified domains to access OSS directly. For more information, see [Cross-origin settings](/help/en/oss/user-guide/cors-settings).

### **Secure authorization**

Uploading files to OSS requires an AccessKey pair from a Resource Access Management (RAM) user to complete signature authentication. However, storing a long-term AccessKey pair on the client can lead to its exposure and create security risks. To address this issue, you can choose one of the following solutions to ensure secure uploads:

-   **Generate STS temporary access credentials on the server**
    
    For most file upload scenarios, we recommend using the Security Token Service (STS) SDK on your server to obtain STS temporary access credentials. The client can then use these temporary credentials and the OSS SDK to upload files directly. The client can reuse the server-generated STS temporary access credentials to create signatures. This method is suitable for scenarios that involve multipart uploads of large files and resumable uploads. Note that frequent calls to the STS service can trigger throttling. Therefore, we recommend that you cache the STS temporary credentials and refresh them before they expire. To prevent the client from misusing the STS temporary access credentials, we recommend adding an access policy to further restrict their permissions. For more information, see [What is STS](/help/en/ram/user-guide/what-is-sts).
    
-   **Generate the signature and Post Policy required for PostObject on the server**
    
    For scenarios that require restricting the attributes of uploaded files, you can generate the Post signature, PostPolicy, and other information required for PostObject on the server. The client can then use this information to upload files directly under specific restrictions, without relying on the OSS SDK. You can use the server-generated PostPolicy to restrict the files uploaded by the client, such as by limiting the file size or file type. This solution is suitable for uploading files through an HTML form. Note that this solution does not support multipart uploads of large files or resumable uploads. For more information, see [PostObject](/help/en/oss/developer-reference/postobject#t4705.html).
    
-   **Generate the signed URL required for PutObject on the server**
    
    For simple file upload scenarios, you can use the OSS SDK on the server to generate the signed URL required for PutObject. The client can then use the signed URL to upload files directly without relying on the OSS SDK. Note that this solution is not suitable for multipart uploads of large files or resumable uploads. Generating a signed URL for each part on the server and returning it to the client increases the number of server interactions and the complexity of network requests. In addition, the client might modify the content or order of the parts, which can result in an incorrectly merged file. For more information, see [Signature V1](/help/en/oss/developer-reference/ddd-signatures-to-urls).
    

## Generate STS temporary access credentials on the server

The following process describes how a server authorizes a client to upload files to OSS using STS temporary access credentials.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3659872771/CAEQUxiBgIC9h8r73RkiIDg4MDViYjc3OTBmMzRkMWJiMDg0MWU4MjA2NGFjNDJi3963382_20230830144006.372.svg)

1.  The client requests temporary access credentials from the application server.
    
2.  The application server uses the STS SDK to call the AssumeRole operation and obtain temporary access credentials.
    
3.  STS generates and returns the temporary access credentials to the application server.
    
4.  The application server returns the temporary access credentials to the client.
    
5.  The client uses the OSS SDK and the temporary access credentials to upload the file to OSS.
    
6.  OSS returns a success response to the client.
    

#### **Sample code**

The following examples show core code snippets. For the complete code, see the sample project: [sts.zip](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20240513/ucvpyi/sts.zip).

Server-side sample code

The following sample code shows how to generate temporary access credentials on the server:

**Note**

This code supports one-click deployment. You can deploy this code to Function Compute (FC) with a single click.oss-upload-sts-app

## Python

```
import json
from alibabacloud_tea_openapi.models import Config
from alibabacloud_sts20150401.client import Client as Sts20150401Client
from alibabacloud_sts20150401 import models as sts_20150401_models
from alibabacloud_credentials.client import Client as CredentialClient

# Replace <YOUR_ROLE_ARN> with the ARN of the RAM role that has permissions to upload files to the specified OSS bucket.
role_arn_for_oss_upload = '<YOUR_ROLE_ARN>'
# Set <YOUR_REGION_ID> to the region of the STS service, such as cn-hangzhou.
region_id = '<YOUR_REGION_ID>'

def get_sts_token():
    # When you initialize CredentialClient without specifying any parameters, the default credential chain is used.
    # When you run the program locally, you can specify the AccessKey pair using the ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variables.
    # When you run the program on an ECS instance, ECI instance, or in Container Service, you can specify the attached instance RAM role using the ALIBABA_CLOUD_ECS_METADATA environment variable. The SDK automatically retrieves the STS temporary credentials.
    config = Config(region_id=region_id, credential=CredentialClient())
    sts_client = Sts20150401Client(config=config)
    assume_role_request = sts_20150401_models.AssumeRoleRequest(
        role_arn=role_arn_for_oss_upload,
        # Set <YOUR_ROLE_SESSION_NAME> to a custom session name, such as oss-role-session.
        role_session_name='<YOUR_ROLE_SESSION_NAME>'
    )
    response = sts_client.assume_role(assume_role_request)
    token = json.dumps(response.body.credentials.to_map())
    return token
```

## Java

```
import com.aliyun.sts20150401.Client;
import com.aliyun.sts20150401.models.AssumeRoleRequest;
import com.aliyun.sts20150401.models.AssumeRoleResponse;
import com.aliyun.sts20150401.models.AssumeRoleResponseBody;
import com.aliyun.tea.TeaException;
import com.aliyun.teautil.models.RuntimeOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.aliyun.teaopenapi.models.Config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import static com.aliyun.teautil.Common.assertAsString;

@RestController
public class StsController {

    @Autowired
    private Client stsClient;

    @GetMapping("/get_sts_token_for_oss_upload")
    public AssumeRoleResponseBody.AssumeRoleResponseBodyCredentials generateStsToken() {
        AssumeRoleRequest assumeRoleRequest = new AssumeRoleRequest()
            .setDurationSeconds(3600L)
            // Set <YOUR_ROLE_SESSION_NAME> to a custom session name, such as my-website-server.
            .setRoleSessionName("<YOUR_ROLE_SESSION_NAME>")
            // Replace <YOUR_ROLE_ARN> with the ARN of the RAM role that has permissions to upload files to the specified OSS bucket. You can obtain the role ARN from the RAM role details.
            .setRoleArn("<YOUR_ROLE_ARN>");
        RuntimeOptions runtime = new RuntimeOptions();
        try {
            AssumeRoleResponse response = stsClient.assumeRoleWithOptions(assumeRoleRequest, runtime);
            return response.body.credentials;
        } catch (TeaException error) {
            // Print the error if needed.
            assertAsString(error.message);
            return null;
        } catch (Exception error) {
            assertAsString(error.getMessage());
            return null;
        }
    }
}

@Configuration
public class StsClientConfiguration {

    @Bean
    public Client stsClient() {
        // When you initialize the credential client without passing any parameters, the Credentials tool uses the default credential chain to initialize the client.
        Config config = new Config();
        config.endpoint = "sts.cn-hangzhou.aliyuncs.com";
        try {
            com.aliyun.credentials.Client credentials = new com.aliyun.credentials.Client();
            config.setCredential(credentials);
            return new Client(config);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
```

## Go

```
package main

import (
    "encoding/json"
    "net/http"
    "os"

    openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
    sts20150401 "github.com/alibabacloud-go/sts-20150401/v2/client"
    util "github.com/alibabacloud-go/tea-utils/v2/service"
    "github.com/alibabacloud-go/tea/tea"
)

/**
 * Initialize the client with an AccessKey pair.
 * @param accessKeyId
 * @param accessKeySecret
 * @return Client
 * @throws Exception
 */
func CreateClient(accessKeyId *string, accessKeySecret *string) (*sts20150401.Client, error) {
    config := &openapi.Config{
    // Required. Your AccessKey ID.
    AccessKeyId: accessKeyId,
    // Required. Your AccessKey secret.
    AccessKeySecret: accessKeySecret,
    }
    // For more information about endpoints, see https://api.aliyun.com/product/Sts.
    config.Endpoint = tea.String("sts.cn-hangzhou.aliyuncs.com")
    return sts20150401.NewClient(config)
}

func AssumeRole(client *sts20150401.Client) (*sts20150401.AssumeRoleResponse, error) {
    assumeRoleRequest := &sts20150401.AssumeRoleRequest{
    DurationSeconds: tea.Int64(3600),
    RoleArn:         tea.String("acs:ram::1379186349531844:role/admin-oss"),
    RoleSessionName: tea.String("peiyu-demo"),
    }
    return client.AssumeRoleWithOptions(assumeRoleRequest, &util.RuntimeOptions{})
}

func handler(w http.ResponseWriter, r *http.Request) {
    if r.URL.Path == "/" {
    http.ServeFile(w, r, "templates/index.html")
    return
    } else if r.URL.Path == "/get_sts_token_for_oss_upload" {
    client, err := CreateClient(tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")), tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")))
    if err != nil {
    panic(err)
    }
    assumeRoleResponse, err := AssumeRole(client)
    if err != nil {
    panic(err)
    }
    responseBytes, err := json.Marshal(assumeRoleResponse)
    if err != nil {
    panic(err)
    }
    w.Header().Set("Content-Type", "application/json")
    w.Write(responseBytes)
    return
    }
    http.NotFound(w, r)
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
```

## PHP

```
<?php
require_once 'vendor/autoload.php';
use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;
use AlibabaCloud\Sts\Sts;
// Initialize the Alibaba Cloud client.
AlibabaCloud::accessKeyClient(getenv('ALIBABA_CLOUD_ACCESS_KEY_ID'), getenv('ALIBABA_CLOUD_ACCESS_KEY_SECRET'))
    ->regionId('cn-hangzhou')
    ->asDefaultClient();
// Create an STS request.
$request = Sts::v20150401()->assumeRole();
// Initiate the STS request and get the result.
// Set <YOUR_ROLE_SESSION_NAME> to a custom session name, such as oss-role-session.
// Replace <YOUR_ROLE_ARN> with the ARN of the RAM role that has permissions to upload files to the specified OSS bucket.
$result = $request
    ->withRoleSessionName("<YOUR_ROLE_SESSION_NAME>")
    ->withDurationSeconds(3600)
    ->withRoleArn("<YOUR_ROLE_ARN>")
    ->request();
// Get the credential information from the STS request result.
$credentials = $result->get('Credentials');
// Build the JSON data to return.
$response = [
    'AccessKeyId' => $credentials['AccessKeyId'],
    'AccessKeySecret' => $credentials['AccessKeySecret'],
    'SecurityToken' => $credentials['SecurityToken'],
];
// Set the response header to application/json.
header('Content-Type: application/json');
// Convert the result to JSON format and print it.
echo json_encode(['Credentials' => $response]);
?>
```

## Node.js

```
const express = require("express");
const { STS } = require('ali-oss');

const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "templates")));
// Configure the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable.
const accessKeyId = process.env.ALIBABA_CLOUD_ACCESS_KEY_ID;
// Configure the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable.
const accessKeySecret = process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET;

app.get('/get_sts_token_for_oss_upload', (req, res) => {
  let sts = new STS({
   accessKeyId: accessKeyId,
   accessKeySecret: accessKeySecret
 });
   // Set roleArn to the ARN of the role obtained in Step 2, for example, acs:ram::175708322470****:role/ramtest.
   // Set policy to a custom access policy to further restrict the permissions of the STS temporary access credentials. If you do not specify a policy, the returned STS temporary access credentials have all the permissions of the specified role by default.
   // 3000 is the expiration time in seconds.
   // Use sessionName to specify a custom role session name to distinguish different tokens, for example, sessiontest.
   sts.assumeRole('<YOUR_ROLE_ARN>', ``, '3000', 'sessiontest').then((result) => {
     console.log(result);
     res.json({
       AccessKeyId: result.credentials.AccessKeyId,
       AccessKeySecret: result.credentials.AccessKeySecret,
       SecurityToken: result.credentials.SecurityToken,
     });
   }).catch((err) => {
     console.log(err);
     res.status(400).json(err.message);
   });
 });

app.listen(8000, () => {
  console.log("http://127.0.0.1:8000");
});
```

## Ruby

```
require 'sinatra'
require 'base64'
require 'open-uri'
require 'cgi'
require 'openssl'
require 'json'
require 'sinatra/reloader'
require 'sinatra/content_for'
require 'aliyunsdkcore'

# Set the public folder path to the templates folder in the current directory.
set :public_folder, File.dirname(__FILE__) + '/templates'

def get_sts_token_for_oss_upload()
  client = RPCClient.new(
    # Configure the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable.
    access_key_id: ENV['ALIBABA_CLOUD_ACCESS_KEY_ID'],
    # Configure the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable.
    access_key_secret: ENV['ALIBABA_CLOUD_ACCESS_KEY_SECRET'],
    endpoint: 'https://sts.cn-hangzhou.aliyuncs.com',
    api_version: '2015-04-01'
  )
  response = client.request(
    action: 'AssumeRole',
    params: {
      # Set RoleArn to the ARN of the role obtained in Step 2, for example, acs:ram::175708322470****:role/ramtest.
      "RoleArn": "acs:ram::175708322470****:role/ramtest",
      # 3600 is the expiration time in seconds.
      "DurationSeconds": 3600,
      # Use RoleSessionName to specify a custom role session name to distinguish different tokens, for example, sessiontest.
      "RoleSessionName": "sessiontest"
    },
    opts: {
      method: 'POST',
      format_params: true
    }
  )
end

if ARGV.length == 1 
  $server_port = ARGV[0]
elsif ARGV.length == 2
  $server_ip = ARGV[0]
  $server_port = ARGV[1]
end

$server_ip = "0.0.0.0"
$server_port = 8000

puts "App server is running on: http://#{$server_ip}:#{$server_port}"

set :bind, $server_ip
set :port, $server_port

get '/get_sts_token_for_oss_upload' do
  token = get_sts_token_for_oss_upload()
  response = {
    "AccessKeyId" => token["Credentials"]["AccessKeyId"],
    "AccessKeySecret" => token["Credentials"]["AccessKeySecret"],
    "SecurityToken" => token["Credentials"]["SecurityToken"]
  }
  response.to_json
end

get '/*' do
  puts "********************* GET "
  send_file File.join(settings.public_folder, 'index.html')
end
```

## C#

```
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Aliyun.OSS;
using System;
using System.IO;
using AlibabaCloud.SDK.Sts20150401;
using System.Text.Json;
namespace YourNamespace
{
    public class Program
    {
        private ILogger<Program> _logger;
        public static AlibabaCloud.SDK.Sts20150401.Client CreateClient(string accessKeyId, string accessKeySecret)
        {
            var config = new AlibabaCloud.OpenApiClient.Models.Config
            {
                AccessKeyId = accessKeyId,
                AccessKeySecret = accessKeySecret,
                Endpoint = "sts.cn-hangzhou.aliyuncs.com"
            };
            return new AlibabaCloud.SDK.Sts20150401.Client(config);
        }
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var app = builder.Build();
            builder.Logging.AddConsole();
            var serviceProvider = builder.Services.BuildServiceProvider();
            var logger = serviceProvider.GetRequiredService<ILogger<Program>>();
            app.UseStaticFiles();
            app.MapGet("/", async (context) =>
            {
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "templates/index.html");
                var htmlContent = await File.ReadAllTextAsync(filePath);
                await context.Response.WriteAsync(htmlContent);
                logger.LogInformation("GET request to root path");
            });
            app.MapGet("/get_sts_token_for_oss_upload", async (context) =>
            {
                var program = new Program(logger);
                var client = CreateClient(Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_ID"), Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
                var assumeRoleRequest = new AlibabaCloud.SDK.Sts20150401.Models.AssumeRoleRequest();
                // Set <YOUR_ROLE_SESSION_NAME> to a custom session name, such as oss-role-session.
                assumeRoleRequest.RoleSessionName = "<YOUR_ROLE_SESSION_NAME>";
                // Replace <YOUR_ROLE_ARN> with the ARN of the RAM role that has permissions to upload files to the specified OSS bucket.
                assumeRoleRequest.RoleArn = "<YOUR_ROLE_ARN>";
                assumeRoleRequest.DurationSeconds = 3600;
                var runtime = new AlibabaCloud.TeaUtil.Models.RuntimeOptions();
                var response = client.AssumeRoleWithOptions(assumeRoleRequest, runtime);
                var credentials = response.Body.Credentials;
                var jsonResponse = JsonSerializer.Serialize(new
                {
                    AccessKeyId = credentials.AccessKeyId,
                    AccessKeySecret = credentials.AccessKeySecret,
                    Expiration = credentials.Expiration,
                    SecurityToken = credentials.SecurityToken
                });
                context.Response.ContentType = "application/json";
                await context.Response.WriteAsync(jsonResponse);
            });
            app.Run();
        }
        public Program(ILogger<Program> logger)
        {
            _logger = logger;
        }
    }
}
```

Client-side sample code

The following sample code shows how a web client uses temporary access credentials to upload a file to OSS:

JavaScript

```
let credentials = null;
const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  // To reduce calls to the STS service, retrieve credentials again only when the current ones expire.
  if (isCredentialsExpired(credentials)) {
    const response = await fetch("/get_sts_token_for_oss_upload", {
      method: "GET",
    });
    if (!response.ok) {
      // Handle the error HTTP status code.
      throw new Error(
        `Failed to obtain STS token: ${response.status} ${response.statusText}`
      );
    }
    credentials = await response.json();
  }
  const client = new OSS({
    // Set <YOUR_BUCKET> to your OSS bucket name.
    bucket: "<YOUR_BUCKET>",
    // Set <YOUR_REGION> to the region where the OSS bucket is located, for example, region: 'oss-cn-hangzhou'.
    region: "oss-<YOUR_REGION>",
    accessKeyId: credentials.AccessKeyId,
    accessKeySecret: credentials.AccessKeySecret,
    stsToken: credentials.SecurityToken,
  });

  const fileInput = document.querySelector("#file");
  const file = fileInput.files[0];
  const result = await client.put(file.name, file);
  console.log(result);
});

/**
 * Check whether the temporary credentials have expired.
 **/
function isCredentialsExpired(credentials) {
  if (!credentials) {
    return true;
  }
  const expireDate = new Date(credentials.Expiration);
  const now = new Date();
  // If the validity period is less than one minute, the credentials are considered expired.
  return expireDate.getTime() - now.getTime() <= 60000;
}
```

## Generate the signature and Post Policy required for PostObject on the server

The following process describes how a server authorizes a client to upload a file to OSS using a Post signature and Post Policy.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3659872771/CAEQUxiCgMCBpM373RkiIDA0NmI5OWQ3NWI2YjQ0ZDBiZjBlYjM1MjljYzgwZjZh3963382_20230830144006.372.svg)

1.  The client requests the Post signature, Post Policy, and other information from the application server.
    
2.  The application server generates and returns the Post signature, Post Policy, and other information to the client.
    
3.  The client uses the Post signature, Post Policy, and other information to call the PostObject operation and upload the file to OSS through an HTML form.
    
4.  OSS returns a success response to the client.
    

#### **Sample code**

The following examples show core code snippets. For the complete code, see the sample project: [postsignature.zip](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20240513/xsabzb/postsignature.zip).

Server-side sample code

The following sample code shows how to generate the Post signature, Post Policy, and other information on the server:

**Note**

This code supports one-click deployment. You can deploy this code to Function Compute (FC) with a single click.oss-upload-post-signature-app

## Python

```
import os
from hashlib import sha1 as sha
import json
import base64
import hmac
import datetime
import time

# Configure the OSS_ACCESS_KEY_ID environment variable.
access_key_id = os.environ.get('OSS_ACCESS_KEY_ID')
# Configure the OSS_ACCESS_KEY_SECRET environment variable.
access_key_secret = os.environ.get('OSS_ACCESS_KEY_SECRET')
# Replace <YOUR_BUCKET> with your bucket name.
bucket = '<YOUR_BUCKET>'
# The host format is bucketname.endpoint. Replace <YOUR_BUCKET> with your bucket name. Replace <YOUR_ENDPOINT> with the OSS endpoint, such as oss-cn-hangzhou.aliyuncs.com.
host = 'https://<YOUR_BUCKET>.<YOUR_ENDPOINT>'
# Specify the prefix for files to upload to OSS.
upload_dir = 'user-dir-prefix/'
# Specify the expiration time in seconds.
expire_time = 3600


def generate_expiration(seconds):
    """
    Generate an expiration time by specifying a validity period in seconds.
    :param seconds: The validity period in seconds.
    :return: An ISO 8601 time string, such as "2014-12-01T12:00:00.000Z".
    """
    now = int(time.time())
    expiration_time = now + seconds
    gmt = datetime.datetime.utcfromtimestamp(expiration_time).isoformat()
    gmt += 'Z'
    return gmt


def generate_signature(access_key_secret, expiration, conditions, policy_extra_props=None):
    """
    Generate a signature string.
    :param access_key_secret: The AccessKey secret of an account that has permissions to access the destination bucket.
    :param expiration: The signature expiration time, in ISO 8601 format and UTC. Example: "2014-12-01T12:00:00.000Z".
    :param conditions: Policy conditions used to limit the allowed values when uploading a form.
    :param policy_extra_props: Additional policy parameters. If new parameters are added to the policy, you can pass them as a dictionary.
    :return: signature, the signature string.
    """
    policy_dict = {
        'expiration': expiration,
        'conditions': conditions
    }
    if policy_extra_props is not None:
        policy_dict.update(policy_extra_props)
    policy = json.dumps(policy_dict).strip()
    policy_encode = base64.b64encode(policy.encode())
    h = hmac.new(access_key_secret.encode(), policy_encode, sha)
    sign_result = base64.b64encode(h.digest()).strip()
    return sign_result.decode()

def generate_upload_params():
    policy = {
        # Validity period.
        "expiration": generate_expiration(expire_time),
        # Constraints.
        "conditions": [
            # The status code to return after a successful upload if success_action_redirect is not specified. The default value is 204.
            ["eq", "$success_action_status", "200"],
            # The value of the form field must start with the specified prefix. For example, to specify that the value of key must start with user/user1, you can write ["starts-with", "$key", "user/user1"].
            ["starts-with", "$key", upload_dir],
            # Limit the minimum and maximum allowed size of the uploaded object in bytes.
            ["content-length-range", 1, 1000000],
            # Limit the uploaded file to specified image types.
            ["in", "$content-type", ["image/jpeg", "image/png"]]
        ]
    }
    signature = generate_signature(access_key_secret, policy.get('expiration'), policy.get('conditions'))
    response = {
        'policy': base64.b64encode(json.dumps(policy).encode('utf-8')).decode(),
        'ossAccessKeyId': access_key_id,
        'signature': signature,
        'host': host,
        'dir': upload_dir
        # You can add other parameters here.
    }
    return json.dumps(response)
```

## Java

```
package com.aliyun.sample;

import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.common.utils.BinaryUtil;
import com.aliyun.oss.model.MatchMode;
import com.aliyun.oss.model.PolicyConditions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.codehaus.jettison.json.JSONObject;
import java.util.Date;

@Controller
public class PostSignatureController {
    @Autowired
    private OSS ossClient;

    @Autowired
    private OssConfig ossConfig;

    @GetMapping("/get_post_signature_for_oss_upload")
    @ResponseBody
    public String generatePostSignature() {
        JSONObject response = new JSONObject();
        try {
            long expireEndTime = System.currentTimeMillis() + ossConfig.getExpireTime() * 1000;
            Date expiration = new Date(expireEndTime);
            PolicyConditions policyConds = new PolicyConditions();
            policyConds.addConditionItem(PolicyConditions.COND_CONTENT_LENGTH_RANGE, 0, 1048576000);
            policyConds.addConditionItem(MatchMode.StartWith, PolicyConditions.COND_KEY, ossConfig.getDir());
            String postPolicy = ossClient.generatePostPolicy(expiration, policyConds);
            byte[] binaryData = postPolicy.getBytes("utf-8");
            String encodedPolicy = BinaryUtil.toBase64String(binaryData);
            String postSignature = ossClient.calculatePostSignature(postPolicy);
            response.put("ossAccessKeyId", ossConfig.getAccessKeyId());
            response.put("policy", encodedPolicy);
            response.put("signature", postSignature);
            response.put("dir", ossConfig.getDir());
            response.put("host", ossConfig.getHost());
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("HTTP Status Code: " + oe.getRawResponseError());
            System.out.println("Error Message: " + oe.getErrorMessage());
            System.out.println("Error Code:       " + oe.getErrorCode());
            System.out.println("Request ID:      " + oe.getRequestId());
            System.out.println("Host ID:           " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message: " + ce.getMessage());
        } catch (Exception e) {
            System.out.println("Caught an unexpected exception: " + e.getMessage());
        }
        return response.toString();
    }
}
```

## Go

```
package main

import (
	"crypto/hmac"
	"crypto/sha1"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"time"
)

var (
	// Configure the OSS_ACCESS_KEY_ID environment variable.
	accessKeyId = os.Getenv("OSS_ACCESS_KEY_ID")
	// Configure the OSS_ACCESS_KEY_SECRET environment variable.
	accessKeySecret = os.Getenv("OSS_ACCESS_KEY_SECRET")
	// The host format is bucketname.endpoint. Replace ${your-bucket} with your bucket name. Replace ${your-endpoint} with the OSS endpoint, such as oss-cn-hangzhou.aliyuncs.com.
	host = "http://${your-bucket}.${your-endpoint}"
	// Specify the prefix for files to upload to OSS.
	uploadDir = "user-dir-prefix/"
	// Specify the expiration time in seconds.
	expireTime = int64(3600)
)

type ConfigStruct struct {
	Expiration string          `json:"expiration"`
	Conditions [][]interface{} `json:"conditions"`
}

type PolicyToken struct {
	AccessKeyId string `json:"ossAccessKeyId"`
	Host        string `json:"host"`
	Signature   string `json:"signature"`
	Policy      string `json:"policy"`
	Directory   string `json:"dir"`
}

func getGMTISO8601(expireEnd int64) string {
	return time.Unix(expireEnd, 0).UTC().Format("2006-01-02T15:04:05Z")
}

func getPolicyToken() string {
	now := time.Now().Unix()
	expireEnd := now + expireTime
	tokenExpire := getGMTISO8601(expireEnd)

	var config ConfigStruct
	config.Expiration = tokenExpire

	// Add a file prefix restriction.
	config.Conditions = append(config.Conditions, []interface{}{"starts-with", "$key", uploadDir})

	// Add a file size restriction, for example, from 1 KB to 10 MB.
	minSize := int64(1024)
	maxSize := int64(10 * 1024 * 1024)
	config.Conditions = append(config.Conditions, []interface{}{"content-length-range", minSize, maxSize})

	result, err := json.Marshal(config)
	if err != nil {
		fmt.Println("callback json err:", err)
		return ""
	}

	encodedResult := base64.StdEncoding.EncodeToString(result)
	h := hmac.New(sha1.New, []byte(accessKeySecret))
	io.WriteString(h, encodedResult)
	signedStr := base64.StdEncoding.EncodeToString(h.Sum(nil))

	policyToken := PolicyToken{
		AccessKeyId: accessKeyId,
		Host:        host,
		Signature:   signedStr,
		Policy:      encodedResult,
		Directory:   uploadDir,
	}

	response, err := json.Marshal(policyToken)
	if err != nil {
		fmt.Println("json err:", err)
		return ""
	}

	return string(response)
}

func handler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path == "/" {
		http.ServeFile(w, r, "templates/index.html")
		return
	} else if r.URL.Path == "/get_post_signature_for_oss_upload" {
		policyToken := getPolicyToken()
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(policyToken))
		return
	}
	http.NotFound(w, r)
}

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}
```

## PHP

```
<?php
function gmt_iso8601($time)
{
    return str_replace('+00:00', '.000Z', gmdate('c', $time));
}

// Obtain access credentials from environment variables. Before you run this sample code, make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variables are configured.
$accessKeyId = getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
$accessKeySecret = getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
// The format of $host is '<YOUR-BUCKET>.<YOUR-ENDPOINT>'. Replace the variables with your actual information.
$host = 'http://<YOUR-BUCKET>.<YOUR-ENDPOINT>';
// The prefix specified by the user when uploading a file.
$dir = 'user-dir-prefix/';          

$now = time();
// Set the policy to expire in 10 seconds. After this period, the policy becomes invalid.
$expire = 30;  
$end = $now + $expire;
$expiration = gmt_iso8601($end);

// Maximum file size. You can set this yourself.
$condition = array(0 => 'content-length-range', 1 => 0, 2 => 1048576000);
$conditions[] = $condition;

// The uploaded data must start with $dir, otherwise the upload will fail. This step is not required but is recommended for security to prevent users from uploading to other directories through the policy.
$start = array(0 => 'starts-with', 1 => '$key', 2 => $dir);
$conditions[] = $start;


$arr = array('expiration' => $expiration, 'conditions' => $conditions);
$policy = json_encode($arr);
$base64_policy = base64_encode($policy);
$string_to_sign = $base64_policy;
$signature = base64_encode(hash_hmac('sha1', $string_to_sign, $accessKeySecret, true));

$response = array();
$response['ossAccessKeyId'] = $accessKeyId;
$response['host'] = $host;
$response['policy'] = $base64_policy;
$response['signature'] = $signature;
$response['dir'] = $dir;  
echo json_encode($response);
```

## Node.js

```
const express = require("express");
const { Buffer } = require("buffer");
const OSS = require("ali-oss");
const app = express();
const path = require("path");
const config = {
  // Configure the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable.
  accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
  // Configure the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable.
  accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
  // Replace <YOUR-BUCKET> with your bucket name.
  bucket: "<YOUR-BUCKET>",
  // Specify the prefix for files to upload to OSS.
  dir: "prefix/",
};

app.use(express.static(path.join(__dirname, "templates")));

app.get("/get_post_signature_for_oss_upload", async (req, res) => {
  const client = new OSS(config);
  const date = new Date();
  // Set the validity period of the signature in seconds.
  date.setSeconds(date.getSeconds() + 3600);
  const policy = {
    expiration: date.toISOString(),
    conditions: [
      // Set the size limit for the uploaded file.
      ["content-length-range", 0, 1048576000],
      // Restrict the bucket to which files can be uploaded.
      { bucket: client.options.bucket },
    ],
  };
  const formData = await client.calculatePostSignature(policy);
  const host = `http://${config.bucket}.${
    (await client.getBucketLocation()).location
  }.aliyuncs.com`.toString();
  const params = {
    policy: formData.policy,
    signature: formData.Signature,
    ossAccessKeyId: formData.OSSAccessKeyId,
    host,
    dir: config.dir,
  };
  res.json(params);
});

app.get(/^(.+)*\.(html|js)$/i, async (req, res) => {
  res.sendFile(path.join(__dirname, "./templates", req.originalUrl));
});

app.listen(8000, () => {
  console.log("http://127.0.0.1:8000");
});
```

## Ruby

```
require 'sinatra'
require 'base64'
require 'open-uri'
require 'cgi'
require 'openssl'
require 'json'
require 'sinatra/reloader'
require 'sinatra/content_for'

# Set the path of the public folder to the templates folder in the current directory.
set :public_folder, File.dirname(__FILE__) + '/templates'

# Configure the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable.
$access_key_id = ENV['ALIBABA_CLOUD_ACCESS_ID']
# Configure the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable.
$access_key_secret = ENV['ALIBABA_CLOUD_ACCESS_SECRET']

# The format of $host is <bucketname>.<endpoint>. Replace <bucketname> and <endpoint> with your actual information.
$host = 'http://<bucketname>.<endpoint>';

# The prefix for user-uploaded files.
$upload_dir = 'user-dir-prefix/'
# The expiration time in seconds.
$expire_time = 30
$server_ip = "0.0.0.0"
$server_port = 8000

if ARGV.length == 1 
  $server_port = ARGV[0]
elsif ARGV.length == 2
  $server_ip = ARGV[0]
  $server_port = ARGV[1]
end

puts "App server is running on: http://#{$server_ip}:#{$server_port}"

def hash_to_jason(source_hash)
  jason_string = source_hash.to_json;    

  jason_string.gsub!("\":[", "\": [")
  jason_string.gsub!("\",\"", "\", \"")
  jason_string.gsub!("],\"", "], \"")
  jason_string.gsub!("\":\"", "\": \"")

  jason_string
end


def get_token()
  expire_syncpoint = Time.now.to_i + $expire_time
  expire = Time.at(expire_syncpoint).utc.iso8601()
  response.headers['expire'] = expire
  policy_dict = {}
  condition_arrary = Array.new
  array_item = Array.new
  array_item.push('starts-with')
  array_item.push('$key')
  array_item.push($upload_dir)
  condition_arrary.push(array_item)
  policy_dict["conditions"] = condition_arrary
  policy_dict["expiration"] = expire
  policy = hash_to_jason(policy_dict)
  policy_encode = Base64.strict_encode64(policy).chomp;
  h = OpenSSL::HMAC.digest('sha1', $access_key_secret, policy_encode)
  hs = Digest::MD5.hexdigest(h)
  sign_result = Base64.strict_encode64(h).strip()
  token_dict = {}
  token_dict['ossAccessKeyId'] = $access_key_id
  token_dict['host'] = $host
  token_dict['policy'] = policy_encode
  token_dict['signature'] = sign_result 
  token_dict['expire'] = expire_syncpoint
  token_dict['dir'] = $upload_dir
  result = hash_to_jason(token_dict)
  result
end

set :bind, $server_ip
set :port, $server_port

get '/get_post_signature_for_oss_upload' do
  token = get_token()
  puts "Token: #{token}"
  token
end

get '/*' do
  puts "********************* GET "
  send_file File.join(settings.public_folder, 'index.html')
end

end

if ARGV.length == 1 
  $server_port = ARGV[0]
elsif ARGV.length == 2
  $server_ip = ARGV[0]
  $server_port = ARGV[1]
end

$server_ip = "0.0.0.0"
$server_port = 8000

puts "App server is running on: http://#{$server_ip}:#{$server_port}"

set :bind, $server_ip
set :port, $server_port

get '/get_sts_token_for_oss_upload' do
  token = get_sts_token_for_oss_upload()
  response = {
    "AccessKeyId" => token["Credentials"]["AccessKeyId"],
    "AccessKeySecret" => token["Credentials"]["AccessKeySecret"],
    "SecurityToken" => token["Credentials"]["SecurityToken"]
  }
  response.to_json
end

get '/*' do
  puts "********************* GET "
  send_file File.join(settings.public_folder, 'index.html')
end
```

## C#

```
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Collections.Generic;
using System;
using System.Globalization;
using System.Text;
using System.Security.Cryptography;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace YourNamespace
{
    public class Program
    {
        private ILogger<Program> _logger;
        // Configure the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable.
        public string AccessKeyId { get; set; } = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_ID");
        // Configure the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable.
        public string AccessKeySecret { get; set; } = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
        // The host format is bucketname.endpoint. Replace <YOUR-BUCKET> with your bucket name. Replace <YOUR-ENDPOINT> with the OSS endpoint, such as oss-cn-hangzhou.aliyuncs.com.
        public string Host { get; set; } = "<YOUR-BUCKET>.<YOUR-ENDPOINT>";
        // Specify the prefix for files to upload to OSS.
        public string UploadDir { get; set; } = "user-dir-prefix/";
        // Specify the expiration time in seconds.
        public int ExpireTime { get; set; } = 3600;
        public class PolicyConfig
        {
            public string expiration { get; set; }
            public List<List<object>> conditions { get; set; }
        }
        public class PolicyToken
        {
            public string Accessid { get; set; }
            public string Policy { get; set; }
            public string Signature { get; set; }
            public string Dir { get; set; }
            public string Host { get; set; }
            public string Expire { get; set; }
        }
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var app = builder.Build();

            builder.Logging.AddConsole();
            var logger = builder.Services.BuildServiceProvider().GetRequiredService<ILogger<Program>>();

            app.UseStaticFiles(); 

            app.MapGet("/", async (context) =>
            {
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "templates/index.html");
                var htmlContent = await File.ReadAllTextAsync(filePath);
                await context.Response.WriteAsync(htmlContent);
                logger.LogInformation("GET request to root path");
            });

            app.MapGet("/get_post_signature_for_oss_upload", async (context) =>
            {
                var program = new Program(logger);
                var token = program.GetPolicyToken();

                logger.LogInformation($"Token: {token}");

                context.Response.ContentType = "application/json";
                await context.Response.WriteAsync(token);
            });

            app.Run();
        }

        public Program(ILogger<Program> logger)
        {
            _logger = logger;
        }

        private string ToUnixTime(DateTime dateTime)
        {
            return ((DateTimeOffset)dateTime).ToUnixTimeSeconds().ToString();
        }

        private string GetPolicyToken()
        {
            var expireDateTime = DateTime.Now.AddSeconds(ExpireTime);
            var config = new PolicyConfig
            {
                expiration = FormatIso8601Date(expireDateTime),
                conditions = new List<List<object>>()
            };
            config.conditions.Add(new List<object>
            {
                "content-length-range", 0, 1048576000
            });
            var policy = JsonConvert.SerializeObject(config);
            var policyBase64 = EncodeBase64("utf-8", policy);
            var signature = ComputeSignature(AccessKeySecret, policyBase64);
            var policyToken = new PolicyToken
            {
                Accessid = AccessKeyId,
                Host = Host,
                Policy = policyBase64,
                Signature = signature,
                Expire = ToUnixTime(expireDateTime),
                Dir = UploadDir
            };
            return JsonConvert.SerializeObject(policyToken);
        }

        private string FormatIso8601Date(DateTime dtime)
        {
            return dtime.ToUniversalTime().ToString("yyyy-MM-dd'T'HH:mm:ss.fff'Z'",
                                    CultureInfo.CurrentCulture);
        }

        private string EncodeBase64(string codeType, string code)
        {
            string encode = "";
            byte[] bytes = Encoding.GetEncoding(codeType).GetBytes(code);
            try
            {
                encode = Convert.ToBase64String(bytes);
            }
            catch
            {
                encode = code;
            }
            return encode;
        }

        private string ComputeSignature(string key, string data)
        {
            using (var algorithm = new HMACSHA1(Encoding.UTF8.GetBytes(key)))
            {
                return Convert.ToBase64String(algorithm.ComputeHash(Encoding.UTF8.GetBytes(data)));
            }
        }
    }
}
```

Client-side sample code

The following sample code shows how a web client uses the Post signature, Post Policy, and other information to upload a file to OSS:

JavaScript

```
const form = document.querySelector("form");
const fileInput = document.querySelector("#file");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const file = fileInput.files[0];
  if (!fileInput.files[0]) {
    alert('Please select a file to upload.');
    return;
  }
  const filename = fileInput.files[0].name;
  fetch("/get_post_signature_for_oss_upload", { method: "GET" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to obtain the signature.");
      }
      return response.json();
    })
    .then((data) => {
      const formData = new FormData();
      formData.append("name", filename);
      formData.append("policy", data.policy);
      formData.append("OSSAccessKeyId", data.ossAccessKeyId);
      formData.append("success_action_status", "200");
      formData.append("signature", data.signature);
      formData.append("key", data.dir + filename);
      formData.append("file", file);

      return fetch(data.host, { method: "POST", body: formData });
    })
    .then((response) => {
      if (response.ok) {
        console.log("Upload successful");
        alert("File uploaded.");
      } else {
        console.log("Upload failed", response);
        alert("Upload failed. Please try again later.");
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
});
```

## Generate the signed URL required for PutObject on the server

The following process describes how a server authorizes a client to upload a file to OSS using a signed URL.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3659872771/CAEQUxiBgICNy8_73RkiIDEyNjQ4YTkxMTM2NzQ4M2Q5NDhmMWEzYTZkYTQ1ZGY43963382_20230830144006.372.svg)

1.  The client requests a signed URL from the application server.
    
2.  The application server uses the OSS SDK to generate a PUT signed URL and returns it to the client.
    
3.  The client uses the PUT signed URL to call the PutObject operation and upload the file to OSS.
    
4.  OSS returns a success response to the client.
    

#### **Sample code**

The following examples show core code snippets. For the complete code, see the sample project: [presignedurl.zip](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20240606/udatpb/presignedurl.zip).

Server-side sample code

The following sample code shows how to generate a signed URL on the server:

**Note**

This code supports one-click deployment. You can deploy this code to Function Compute (FC) with a single click.oss-upload-presigned-url-app

## Python

```
import oss2
from oss2.credentials import EnvironmentVariableCredentialsProvider

# Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
auth = oss2.ProviderAuth(EnvironmentVariableCredentialsProvider())
# Replace <YOUR_ENDPOINT> with the endpoint of the region where your bucket is located. For example, if your bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
# Replace <YOUR_BUCKET> with your bucket name.
bucket = oss2.Bucket(auth, '<YOUR_ENDPOINT>', '<YOUR_BUCKET>')
# Specify the expiration time in seconds.
expire_time = 3600
# Specify the full path of the object, for example, exampledir/exampleobject.png. The full path cannot contain the bucket name.
object_name = 'exampledir/exampleobject.png'

def generate_presigned_url():
    # Specify headers.
    headers = dict()
    # Specify Content-Type.
    headers['Content-Type'] = 'image/png'
    # Specify the storage class.
    # headers["x-oss-storage-class"] = "Standard"
    # When generating a signed URL, OSS escapes the forward slashes (/) in the object's full path by default. This makes the generated signed URL unusable.
    # Set slash_safe to True. OSS will not escape the forward slashes (/) in the object's full path. The generated signed URL can then be used directly.
    url = bucket.sign_url('PUT', object_name, expire_time, slash_safe=True, headers=headers)
    return url
```

## Java

```
import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import com.aliyun.oss.HttpMethod;
import com.aliyun.oss.model.GeneratePresignedUrlRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.net.URL;
import java.util.Date;
import javax.annotation.PreDestroy;

@Configuration
public class OssConfig {

    /**
     * Replace <your-endpoint> with the OSS endpoint, for example, oss-cn-hangzhou.aliyuncs.com.
     */
    private static final String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";

    /**
     * Set accessKeyId using the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable.
     */
    @Value("${ALIBABA_CLOUD_ACCESS_KEY_ID}")
    private String accessKeyId;

    /**
     * Set accessKeySecret using the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable.
     */
    @Value("${ALIBABA_CLOUD_ACCESS_KEY_SECRET}")
    private String accessKeySecret;

    private OSS ossClient;


    @Bean
    public OSS getSssClient() {
        ossClient = new OSSClientBuilder().build(endpoint, accessKeyId, accessKeySecret);
        return ossClient;
    }

    @PreDestroy
    public void onDestroy() {
        ossClient.shutdown();
    }
}

@Controller
public class PresignedURLController {

    /**
     * Replace <your-bucket> with your bucket name.
     * Specify the prefix for files to upload to OSS.
     * Replace <your-object> with the full path of the object, for example, exampleobject.txt. The full path cannot contain the bucket name.
     * Specify the expiration time in milliseconds.
     */
    private static final String BUCKET_NAME = "<your-bucket>";
    private static final String OBJECT_NAME = "<your-object>";
    private static final long EXPIRE_TIME = 3600 * 1000L;

    @Autowired
    private OSS ossClient;

    @GetMapping("/get_presigned_url_for_oss_upload")
    @ResponseBody
    public String generatePresignedURL() {

        try {
            GeneratePresignedUrlRequest request = new GeneratePresignedUrlRequest(BUCKET_NAME, OBJECT_NAME, HttpMethod.PUT);
            Date expiration = new Date(System.currentTimeMillis() + EXPIRE_TIME);
            request.setExpiration(expiration);
            request.setContentType("image/png");
            URL signedUrl = ossClient.generatePresignedUrl(request);
            return signedUrl.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
```

## Go

```
package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

func getURL() string {
	// Set yourEndpoint to the endpoint of your bucket. For example, if your bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. For other regions, set the endpoint accordingly.
	endpoint := "https://oss-cn-beijing.aliyuncs.com"
	// Specify the bucket name, for example, examplebucket.
	bucketName := "examplebucket"
	// Specify the full path of the file, for example, exampledir/exampleobject.txt. The full path cannot contain the bucket name.
	objectName := "exampledir/exampleobject.txt"
	// Obtain access credentials from environment variables. Before you run this sample code, make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variables are configured.
	accessKeyID := os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")
	accessKeySecret := os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")

	client, err := oss.New(endpoint, accessKeyID, accessKeySecret)
	if err != nil {
		fmt.Println("json err:", err)
	}
	bucket, err := client.Bucket(bucketName)
	if err != nil {
		fmt.Println("json err:", err)
	}
	options := []oss.Option{
		oss.ContentType("image/png"),
	}
	signedURL, err := bucket.SignURL(objectName, oss.HTTPPut, 60, options...)
	if err != nil {
		fmt.Println("json err:", err)
	}

	return signedURL
}

func handler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path == "/" {
		http.ServeFile(w, r, "templates/index.html")
		return
	} else if r.URL.Path == "/get_presigned_url_for_oss_upload" {
		url := getURL()
		fmt.Fprintf(w, "%s", url)
		return
	}
	http.NotFound(w, r)
}
func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}
```

## PHP

```
<?php
require_once __DIR__ . '/vendor/autoload.php';
use OSS\OssClient;
use OSS\Core\OssException;
use OSS\Http\RequestCore;
use OSS\Http\ResponseCore;
// Before you run this sample code, make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variables are configured.
$accessKeyId = getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
$accessKeySecret = getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
// Set yourEndpoint to the endpoint of the region where your bucket is located. For example, if your bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
$endpoint = "<YOUR-ENDPOINT>";
// Specify the bucket name.
$bucket= "<YOUR-BUCKET>";
// Specify the full path of the object, not including the bucket name.
$object = "test.png";
// Set the validity period of the signed URL to 3600 seconds.
$timeout = 3600;
try {
    $ossClient = new OssClient($accessKeyId, $accessKeySecret, $endpoint, false);
    // Generate a signed URL.
    $signedUrl = $ossClient->signUrl($bucket, $object, $timeout, "PUT", array('Content-Type' => 'image/png'));
    // Print the returned data.
    echo $signedUrl;
} catch (OssException $e) {
    printf($e->getMessage() . "\n");
    return;
}
```

## Node.js

```
const express = require("express");
const { Buffer } = require("buffer");
const OSS = require("ali-oss");
const app = express();
const path = require("path");
const fs = require("fs");
const axios = require("axios");

const config = {
  // Set <YOURREGION> to the region where your bucket is located. For example, if your bucket is in the China (Hangzhou) region, set the region to oss-cn-hangzhou.
  region: '<YOURREGION>',
  // Configure the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable.
  accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
  // Configure the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable.
  accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
  // Replace <YOUR-BUCKET> with your bucket name.
  bucket: "<YOUR-BUCKET>",
}
const object = "examplefile.png";

app.use(express.static(path.join(__dirname, "templates")));

app.get("/get_presigned_url_for_oss_upload", async (req, res) => {
    const client = new OSS(config);
    const url = client.signatureUrl(object, {
        method: "PUT",
        "Content-Type": "application/x-www-form-urlencoded",
    });
    res.send(url); 
    console.log(url);
  });

app.listen(8000, () => {
  console.log("http://127.0.0.1:8000");
});
```

## Ruby

```
require 'sinatra'
require 'base64'
require 'open-uri'
require 'cgi'
require 'openssl'
require 'json'
require 'sinatra/reloader'
require 'sinatra/content_for'
require 'aliyun/oss'
include Aliyun::OSS

# Set the public folder path to the templates folder in the current directory.
set :public_folder, File.dirname(__FILE__) + '/templates'

# Configure the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable.
$access_key_id = ENV['ALIBABA_CLOUD_ACCESS_KEY_ID']
# Configure the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable.
$access_key_secret = ENV['ALIBABA_CLOUD_ACCESS_KEY_SECRET']

# Specify the full path of the object, for example, exampledir/exampleobject.png. The full path cannot contain the bucket name.
object_key = 'exampledir/exampleobject.png'

def get_presigned_url(client, object_key)
  # Replace <YOUR-BUCKET> with your bucket name.
  bucket = client.get_bucket('<YOUR-BUCKET>')
  # Generate a signed URL and specify that it is valid for 1 hour (3600 seconds).
  bucket.object_url(object_key, 3600)
end

client = Aliyun::OSS::Client.new(
  # Replace <YOUR-ENDPOINT> with the endpoint of the region where your bucket is located. For example, if your bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
  endpoint: '<YOUR-ENDPOINT>',
  # Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
  access_key_id: $access_key_id,
  access_key_secret: $access_key_secret
)


if ARGV.length == 1 
  $server_port = ARGV[0]
elsif ARGV.length == 2
  $server_ip = ARGV[0]
  $server_port = ARGV[1]
end

$server_ip = "0.0.0.0"
$server_port = 8000

puts "App server is running on: http://#{$server_ip}:#{$server_port}"

set :bind, $server_ip
set :port, $server_port

get '/get_presigned_url_for_oss_upload' do
  url = get_presigned_url(client, object_key.to_s)
  puts "Token: #{url}"
  url
end

get '/*' do
  puts "********************* GET "
  send_file File.join(settings.public_folder, 'index.html')
end
```

## C#

```
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using System.IO;
using System;
using Microsoft.Extensions.Logging;
using Aliyun.OSS;

namespace YourNamespace
{
    public class Program
    {
        private ILogger<Program> _logger;

        // Configure the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable.
        public string AccessKeyId { get; set; } = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_ID");
        // Configure the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable.
        public string AccessKeySecret { get; set; } = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
        // Replace <YOUR-ENDPOINT> with the endpoint of the region where your bucket is located. For example, if your bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
        private string EndPoint { get; set; } = "<YOUR-ENDPOINT>";
        // Replace <YOUR-BUCKET> with your bucket name.
        private string BucketName { get; set; } = "<YOUR-BUCKET>";
        private string ObjectName { get; set; } = "exampledir/exampleobject2.png";

        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var app = builder.Build();

            // Add logging.
            builder.Logging.AddConsole();
            var logger = builder.Services.BuildServiceProvider().GetRequiredService<ILogger<Program>>();

            app.UseStaticFiles(); // Add this line to enable the static file middleware.

            app.MapGet("/", async (context) =>
            {
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "templates/index.html");
                var htmlContent = await File.ReadAllTextAsync(filePath);
                await context.Response.WriteAsync(htmlContent);

                // Print logs.
                logger.LogInformation("GET request to root path");
            });

            app.MapGet("/get_presigned_url_for_oss_upload", async (context) =>
            {
                var program = new Program(logger);
                var signedUrl = program.GetSignedUrl();

                logger.LogInformation($"SignedUrl: {signedUrl}"); // Print the value of the token.
                await context.Response.WriteAsync(signedUrl);
            });

            app.Run();
        }

        // Constructor for ILogger injection.
        public Program(ILogger<Program> logger)
        {
            _logger = logger;
        }

        private string GetSignedUrl()
        {
            // Create an OSSClient instance.
            var ossClient = new OssClient(EndPoint, AccessKeyId, AccessKeySecret);

            // Generate a signed URL.
            var generatePresignedUriRequest = new GeneratePresignedUriRequest(BucketName, ObjectName, SignHttpMethod.Put)
            {
                Expiration = DateTime.Now.AddHours(1),
                ContentType = "image/png"
            };
            var signedUrl = ossClient.GeneratePresignedUri(generatePresignedUriRequest);

            return signedUrl.ToString();
        }
    }
}
```

Client-side sample code

The following sample code shows how a web client uses a signed URL to upload a file to OSS:

JavaScript

```
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fileInput = document.querySelector("#file");
  const file = fileInput.files[0];
  fetch("/get_presigned_url_for_oss_upload", { method: "GET" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to obtain the presigned URL.");
      }
      return response.text();
    })
    .then((url) => {
      fetch(url, {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "image/png",
        }),
        body: file,
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Failed to upload the file to OSS.");
        }
        console.log(response);
        alert("File uploaded.");
      });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      alert(error.message);
    });
});
```

## **References for direct client upload practices**

The following topics provide references for direct upload practices for different client types:

-   [Direct upload practices for web clients](/help/en/oss/use-postobject-to-upload-objects-by-using-web-clients)
    
-   [Direct upload practices for mobile apps](/help/en/oss/user-guide/set-up-direct-data-transfer-for-mobile-apps)
