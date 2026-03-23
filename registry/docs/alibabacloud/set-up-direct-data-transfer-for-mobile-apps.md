Set up a direct data transfer service for your Android or iOS app in under 30 minutes. Instead of routing uploads through your application server, your app uploads files directly to Object Storage Service (OSS) using short-lived credentials issued by Security Token Service (STS). Your application server handles only the credential flow—not the data.

## How it works

Direct data transfer uses STS temporary credentials to let mobile apps upload to or download from OSS without embedding permanent AccessKeys in the app binary.

```
Mobile app → App server: request temporary credentials
App server → STS: call AssumeRole
STS → App server: return security token
App server → Mobile app: return security token
Mobile app → OSS: upload object using security token
OSS → Mobile app: return success
```

**Token expiry behavior:** The security token is valid for a configurable period (for example, 30 minutes). When it expires, the app must request a new security token to continue uploading or downloading data.

## Security constraints

Embedding permanent AccessKey pairs in Android or iOS apps is a security risk: anyone who decompiles the app binary can extract the credentials. STS temporary credentials mitigate this:

-   **Least-privilege scope:** Issue tokens that grant only `oss:PutObject` on a specific bucket, not broad account access.
    
-   **Short validity period:** Tokens expire automatically; a leaked token has limited exposure.
    
-   **No credential storage on device:** The app requests a token on demand and discards it after use.
    

If a token expires while the app cannot reach the token endpoint, uploads fail until connectivity is restored—implement exponential backoff and surface a user-facing retry prompt.

## Prerequisites

Before you begin, ensure that you have:

-   An activated OSS account. See [Activate OSS](/help/en/oss/getting-started/activate-oss#task-njz-hf4-tdb).
    
-   A bucket. See [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4#concept-ntj-wx1-5db).
    

## Step 1: Set up the application server

The application server holds the RAM user AccessKey pair and exchanges it for short-lived STS tokens on behalf of the mobile app.

### 1.1 Create a RAM user

Create a RAM user and generate an AccessKey pair for it. The app server uses this pair to call STS.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) using your Alibaba Cloud account or as an account administrator.
    
2.  In the left-side navigation pane, choose **Identities > Users**.
    
3.  Click **Create User**.
    
4.  Set **Logon Name** and **Display Name**.
    
5.  Under **Access Mode**, select **Using permanent AccessKey to access**, then click **OK**.
    
    **Important**
    
    The AccessKey secret is shown only once, at creation. Copy and store it securely before closing the page.
    
6.  Click **Copy** in the **Actions** column to save the AccessKey pair.
    

### 1.2 Grant the RAM user permission to call AssumeRole

1.  In the left-side navigation pane, choose **Identities > Users**.
    
2.  Find the RAM user and click **Add Permissions** in the **Actions** column.
    
3.  In the **Grant Permission** panel, select the **AliyunSTSAssumeRoleAccess** system policy.
    
    > **AliyunSTSAssumeRoleAccess** grants the user permission to call `AssumeRole`. It is independent of the permissions that the resulting token will carry—those come from the RAM role.
    
4.  Click **Grant permissions**.
    

### 1.3 Create a RAM role

Create a RAM role for the Alibaba Cloud account. The app server assumes this role to obtain scoped tokens for OSS upload.

1.  In the left-side navigation pane, choose **Identities > Roles**.
    
2.  Click **Create Role**. Set **Select Trusted Entity** to **Alibaba Cloud Account**, then click **Next**.
    
3.  In the **Configure Role** step, enter a name in the **RAM Role Name** field (for example, `oss-web-upload`). Set **Select Trusted Alibaba Cloud Account** to **Current Alibaba Cloud Account**.
    
4.  Click **OK**, then click **Close**.
    
5.  On the Roles page, search for the role by name and click it.
    
6.  In the **Basic Information** section, click **Copy** next to the ARN field to record the Alibaba Cloud Resource Name (ARN) of the role.
    

### 1.4 Create an upload policy

Create a custom policy that grants the RAM role write access to a specific bucket only.

1.  In the left-side navigation pane, choose **Permissions > Policies**.
    
2.  Click **Create Policy**.
    
3.  On the **Create Policy** page, click **JSON**. Paste the following policy, replacing `<BucketName>` with your bucket name (for example, `web-direct-upload`):
    
    ```
       {
         "Version": "1",
         "Statement": [
           {
             "Effect": "Allow",
             "Action": "oss:PutObject",
             "Resource": "acs:oss:*:*:<BucketName>/*"
           }
         ]
       }
    ```
    
    The policy permits `PutObject` on all objects in the specified bucket. It does not grant read, delete, or bucket-level permissions.
    
4.  Click **Next to edit policy information**.
    
5.  In the **Basic Information** section, enter a policy name, then click **OK**.
    

### 1.5 Attach the policy to the RAM role

1.  In the left-side navigation pane, choose **Identities > Roles**.
    
2.  Find the RAM role and click **Grant Permission** in the **Actions** column.
    
3.  In the **Grant Permission** panel, select **Custom Policy** from the drop-down list and select the policy you created.
    
4.  Click **OK**.
    

### 1.6 Create an ECS instance (for this tutorial)

For this tutorial, use an ECS instance as the app server. In production, integrate the STS calls into your existing backend instead.

**Parameter**

**Value**

Billing method

Pay-as-you-go

Region

China (Hangzhou)

Public IP address

Assign Public IPv4 Address

Security group

HTTP-TCP:80-open

For setup instructions, see [Create an ECS instance](/help/en/ecs/user-guide/use-the-ecs-instance-in-the-console#07af7ebc77si3).

### 1.7 Deploy the token endpoint

Deploy a Flask app on the ECS instance that exposes `/get_sts_token`. The mobile app calls this endpoint to get temporary credentials.

1.  [Connect to the ECS instance](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console#title-gij-sca-5n7).
    
2.  Install [Python 3](https://www.python.org/downloads/).
    
3.  Create a project directory:
    
    ```
       mkdir my_web_sample
       cd my_web_sample
    ```
    
4.  Install dependencies:
    
    ```
       pip3 install Flask
       pip3 install attr
       pip3 install yarl
       pip3 install async_timeout
       pip3 install idna_ssl
       pip3 install attrs
       pip3 install aiosignal
       pip3 install charset_normalizer
       pip3 install alibabacloud_tea_openapi
       pip3 install alibabacloud_sts20150401
       pip3 install alibabacloud_credentials
    ```
    
5.  Create `main.py` with the following content:
    
    ```
       import json
       from flask import Flask, render_template
       from alibabacloud_tea_openapi.models import Config
       from alibabacloud_sts20150401.client import Client as Sts20150401Client
       from alibabacloud_sts20150401 import models as sts_20150401_models
       from alibabacloud_credentials.client import Client as CredentialClient
    
       app = Flask(__name__)
    
       # Replace <YOUR_ROLE_ARN> with the ARN you copied in step 1.3.
       role_arn_for_oss_upload = '<YOUR_ROLE_ARN>'
       # Set to the STS region. Example: cn-hangzhou
       region_id = 'cn-hangzhou'
    
       @app.route("/")
       def hello_world():
           return render_template('index.html')
    
       @app.route('/get_sts_token', methods=['GET'])
       def get_sts_token():
           # CredentialClient with no arguments uses the default credential chain:
           # - On a local machine: reads ALIBABA_CLOUD_ACCESS_KEY_ID and
           #   ALIBABA_CLOUD_ACCESS_KEY_SECRET from environment variables.
           # - On ECS or Elastic Container Instance: uses the instance RAM role via
           #   ALIBABA_CLOUD_ECS_METADATA; the SDK fetches credentials from STS
           #   automatically.
           config = Config(region_id=region_id, credential=CredentialClient())
           sts_client = Sts20150401Client(config=config)
           assume_role_request = sts_20150401_models.AssumeRoleRequest(
               role_arn=role_arn_for_oss_upload,
               # Replace <YOUR_ROLE_SESSION_NAME> with a name for this session.
               role_session_name='<YOUR_ROLE_SESSION_NAME>'
           )
           response = sts_client.assume_role(assume_role_request)
           token = json.dumps(response.body.credentials.to_map())
           return token
    
       # To listen on all interfaces (e.g., 0.0.0.0), add authentication first.
       app.run(host="127.0.0.1", port=8000)
    ```
    
6.  Replace `<YOUR_ROLE_ARN>` with the ARN from step 1.3 and `<YOUR_ROLE_SESSION_NAME>` with a session identifier.
    
7.  Start the app using the RAM user AccessKey pair from step 1.1:
    
    ```
       ALIBABA_CLOUD_ACCESS_KEY_ID=<YOUR_AK_ID> ALIBABA_CLOUD_ACCESS_KEY_SECRET=<YOUR_AK_SECRET> python3 main.py
    ```
    
8.  Verify the endpoint by opening `http://<ECS-public-IP-address>/get_sts_token` in a browser. A successful response returns a JSON object containing `AccessKeyId`, `AccessKeySecret`, `SecurityToken`, and `Expiration`.
    
9.  Press `Ctrl+C` to stop the app.
    

## Step 2: Configure the mobile app

### Android

1.  Download the [Android SDK source code](https://github.com/aliyun/aliyun-oss-android-sdk).
    
2.  Open the app and set the following parameters:
    
    **Parameter**
    
    **Value**
    
    STS authentication server
    
    The `/get_sts_token` endpoint URL from step 1.7
    
    Destination bucket
    
    The bucket you created
    
    Region
    
    The region where the bucket is located
    
3.  Click **Configure**.
    

### iOS

1.  Download the [iOS SDK source code](https://github.com/aliyun/aliyun-oss-ios-sdk).
    
2.  In the [OSSTestMacros.h](https://github.com/aliyun/aliyun-oss-ios-sdk/blob/master/AliyunOSSiOSTests/OSSTestMacros.h) file, set the following parameters before running the app:
    
    **Parameter**
    
    **Value**
    
    `OSS_BUCKET_PRIVATE`
    
    The bucket you created
    
    `OSS_ENDPOINT`
    
    The OSS endpoint for the bucket's region
    
    `OSS_STSTOKEN_URL`
    
    The `/get_sts_token` endpoint URL from step 1.7
    
3.  Run the app.
    

## Step 3: Upload an image

Both Android and iOS apps support two upload modes:

**Upload mode**

**When to use**

Simple upload

Stable network conditions

Resumable upload

Poor or unstable connections—resumes from the last checkpoint rather than restarting

1.  In the app, specify the OSS object name.
    
2.  Click **Upload** and select an image.
    
3.  After the upload completes, verify the result in the OSS console.
    

## What's next

-   To process uploaded images—resize, generate thumbnails, or add watermarks—use [Image Processing (IMG)](/help/en/oss/user-guide/img-implementation-modes).
    
-   To transcode uploaded videos, use OSS video transcoding.
    
-   To restrict STS token validity or scope further, see [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole) in the STS API reference.
