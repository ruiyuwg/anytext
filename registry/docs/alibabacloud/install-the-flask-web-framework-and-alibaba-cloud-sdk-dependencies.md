WebTracking collects and analyzes user behavior in a browser, such as page views, purchase history, or session duration. It streams this activity data to Simple Log Service (SLS) for behavioral analysis and business optimization, requiring only minor changes to your application code.

WebTracking offers two ingestion methods:

-   [Authenticated ingestion (recommended)](#6139ea2e80upx)  
    Uses short-lived Security Token Service (STS) credentials for secure uploads. This method prevents security risks like log forgery and is the recommended approach for production environments.
    
-   [Unauthenticated ingestion (testing only)](#c4642e645a92d)  
    Allows public log writes to a logstore. This simplicity introduces a high risk of data contamination, restricting its use to testing environments only.
    

## Prepare cloud resources

Before you begin, create the required resources for log storage and management.

### **Step 1: Create a project**

A project is the primary resource management unit in SLS. It helps you isolate resources for different applications.

To create a project, log on to the [SLS console](https://sls.console.alibabacloud.com/) and click **Create Project**.

**Configuration:**

-   **Region**: Select the region closest to your log source or users to reduce latency (immutable).
    
-   **Project Name**: Must be globally unique within Alibaba Cloud (immutable).
    
-   Keep the default values for other parameters and click **Create**.
    

### **Step 2: Create a logstore**

A logstore is the basic unit for log storage. It serves as the destination for all uploaded client-side logs.

To create a logstore, go to the target project. In the left-side navigation pane, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8429651671/p1019135.png)**Log Storage**, then click **+**.

**Configuration:**

-   **Logstore Name**: Must be unique within the project (immutable). For example, `web-tracking-logstore`.
    
-   **Logstore Type**: Select **Standard** or **Query**. **Standard** is optimized for low-cost, long-term storage, while **Query** is designed for high-performance, real-time analysis.
    
-   **Billing Mode**:
    
    -   **Pay-by-feature**: Suitable for small log volumes or development and testing use cases.
        
    -   **Pay-by-ingested-data**: Suitable for use cases with stable log volumes that require long-term analysis.
        
-   **Data Retention Period**: Default is 30 days (supports 1 to 3650 days).
    
-   Keep the default values for other parameters and click **OK**.
    

## Authenticated ingestion (recommended)

The recommended approach for production environments is to use a backend service to issue temporary credentials. This avoids the security risk of exposing permanent keys on the client.

### **How it works**

The workflow is as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0016312671/CAEQThiBgMCMoZzN0RkiIGFmZmJiMjkyY2U5MzRmNWU4N2Y0OTc3M2RhZDkxYmVm4192457_20240126151602.125.svg)

1.  The frontend application asks the backend service for temporary credentials.
    
2.  The backend service calls the STS [AssumeRole API](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole), assuming a Resource Access Management (RAM) role with write permissions to SLS.
    
3.  STS validates the request and returns temporary credentials (AccessKeyId, AccessKeySecret, and SecurityToken), which automatically expire after a set duration (60 minutes by default).
    
4.  The backend service returns the temporary credentials to the frontend application.
    
5.  The WebTracking SDK, a client-side JavaScript library for collecting and sending logs, then uses the credentials to sign requests and uploads logs to SLS.
    

### **Step 1: Configure RAM permissions**

This step creates secure identities and permissions for the backend credential service and the frontend SDK, following the principle of least privilege.

#### **1\. Create a RAM role for the frontend application to assume**

This role is a virtual identity without long-term keys, which your application temporarily assumes to obtain permissions to upload logs.

##### **1.1 Create a RAM role**

Log on to the [RAM console](https://ram.console.alibabacloud.com/). In the left-side navigation pane, choose **Identities** > **Roles**, then click **Create Role**.

**Configuration:**

-   **Principal Type**: Select **Cloud Account**.
    
-   **Principal Name**: Select the current account or specify another account.
    
-   Click **OK** and enter the role name `sls-web-tracking`.
    

##### **1.2** Create a policy that grants write-only permissions

This policy restricts the role to writing logs only to the specified logstore.

In the left-side navigation pane, choose **Permissions** > **Policies**, and then click **Create Policy**.

**Configuration:**

-   On the **JSON** tab, paste the following script. Replace `<ProjectName>` and `<LogstoreName>` with your actual project name and logstore name.
    
    ```
    {
      "Version":"1",
      "Statement":[
        {
          "Effect":"Allow",
          "Action":[
            "log:PostLogStoreLogs",
            "log:PutLogs"
          ],
          "Resource":[
            "acs:log:*:*:project/<ProjectName>/logstore/<LogstoreName>"
          ]
        }
      ]
    }
    ```
    
-   Click **OK**. Enter the policy name post-logs-policy and click **OK**.
    

##### **1.3** Grant the RAM role permission to upload logs

Attach the write permission policy created in the previous step to the role that the frontend will assume.

In the left-side navigation pane, choose **Identities** > **Roles**. Click the target role name to go to the role details page. On the **Permissions** page, click **Grant Permission**.

**Configuration:**

-   In the **Grant Permission** panel, search for and select the custom policy created in the previous step (`post-logs-policy`).
    
-   Click **Grant Permissions**.
    

#### **2\. Create a RAM user for the backend service**

Your backend service will use this user's long-term AccessKey to call the STS service and assume a role.

##### **2.1 Create a RAM user**

Log on to the [RAM console](https://ram.console.alibabacloud.com/). In the left-side navigation pane, choose **Identities** > **Users**, then click **Create User**.

**Configuration:**

-   **Logon Name**: Supports only letters, numbers, periods (.), hyphens (-), and underscores (\_), up to 64 characters. For example, `sls-token-service`.
    
-   **Access Mode**: Select **Using permanent AccessKey to access**.
    
-   Keep the default values for other parameters. Click **OK** to create the user. Save the AccessKey ID and AccessKey Secret.
    
    > The AccessKey Secret is displayed only once upon creation and cannot be retrieved later. Be sure to save it to a secure location immediately.
    

##### **2.2 Grant the RAM user permission to assume a role**

Click the target username to go to the user details page. Switch to the **Permissions** tab and click **Grant Permission**.

**Configuration:**

-   In the **Policy** section, select the `AliyunSTSAssumeRoleAccess` policy.
    
-   Keep the default values for other parameters. Click **Grant Permissions**.
    

> **Summary:** The backend service uses the RAM user (with its AccessKey) to assume the `sls-web-tracking` role, generating a temporary security credential that is returned to the frontend application. The WebTracking SDK then uses this temporary credential to securely upload logs.

### **Step 2:** Build a backend STS temporary credential service

Build a backend API endpoint that receives credential requests from the frontend and securely returns temporary STS credentials. The following example uses Python and Flask.

> For implementations in other languages, such as Java or Node.js, see [Appendix 1: STS examples in multiple languages](#c4bbc260c89og).

#### **1\. Prepare the server environment**

In a production environment, the STS credential service can be either integrated into an existing application server or deployed as a standalone endpoint. Regardless of the approach, the host server must meet the following requirements:

-   The frontend application can access the server over HTTP or HTTPS.
    
-   Python 3 is installed. Version 3.8 or later is recommended.
    

Run the following command to install the dependencies required to call the Alibaba Cloud STS API.

```
# Install the Flask web framework and Alibaba Cloud SDK dependencies
pip3 install Flask==3.1.2
pip3 install aiohttp==3.8.4
pip3 install alibabacloud-credentials==0.3.2
pip3 install alibabacloud-sts20150401==1.1.3
pip3 install alibabacloud-tea==0.3.2
pip3 install alibabacloud-tea-openapi==0.3.7
pip3 install alibabacloud-tea-util==0.3.8
pip3 install alibabacloud-tea-xml==0.0.2
```

#### **2\. Write the backend STS service code**

Create an HTTP endpoint `/get_sts_token` to generate and return STS temporary credentials.

##### **2.1 Create the project directory and file**

```
# Create and enter the project directory
mkdir my_web_sample
cd my_web_sample
touch main.py
```

##### **2.2 Edit the main.py file**

Paste the following code into the `main.py` file. Replace `<YOUR_ROLE_ARN>` with the ARN of the RAM role `sls-web-tracking`. Replace `<YOUR_ROLE_SESSION_NAME>` with a custom session name, such as `role_session_test`.

```
import json
from flask import Flask, render_template
from alibabacloud_tea_openapi.models import Config
from alibabacloud_sts20150401.client import Client as Sts20150401Client
from alibabacloud_sts20150401 import models as sts_20150401_models
from alibabacloud_credentials.client import Client as CredentialClient

app = Flask(__name__)

# ================== User Configuration ==================
# Replace with your RAM role ARN. Format: acs:ram::${accountId}:role/${roleName}
role_arn_for_sls_upload = '<YOUR_ROLE_ARN>'

# Set the role session name. A unique identifier for the request source is recommended.
role_session_name = '<YOUR_ROLE_SESSION_NAME>'  # For example, sls-web-session-001

# The region where the STS service is located, for example, ap-southeast-1.
region_id = 'ap-southeast-1'
# ==============================================

@app.route("/")
def hello_world():
    return render_template('index.html')

@app.route('/get_sts_token', methods=['GET'])
def get_sts_token():
    """
    Endpoint: /get_sts_token
    Method: GET
    Function: Call the STS AssumeRole API to obtain a temporary security token
    Returns: A Credentials object in JSON format
    """
    # If you do not specify parameters when you initialize CredentialClient, the default credential chain is used.
    # When you run the program locally, specify the AccessKey pair using the ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variables.
    # When you run the program on ECS, ECI, or Container Service, specify the instance role using the ALIBABA_CLOUD_ECS_METADATA environment variable. The SDK automatically obtains the temporary STS credentials.
    config = Config(
        region_id=region_id,
        credential=CredentialClient()
    )
    sts_client = Sts20150401Client(config=config)

    # Construct the AssumeRole request
    assume_role_request = sts_20150401_models.AssumeRoleRequest(
        role_arn=role_arn_for_sls_upload,
        role_session_name=role_session_name,
    )
      
    # Call STS to obtain temporary credentials
    response = sts_client.assume_role(assume_role_request)
    
    token = json.dumps(response.body.credentials.to_map())
    return token


app.run(host="0.0.0.0", port=80)
```

#### **3\. Start the backend service**

Run the following command. Use the AccessKey pair of the [RAM user](#3033a1a9175vl) created earlier.

```
ALIBABA_CLOUD_ACCESS_KEY_ID=<YOUR_AK_ID> 
ALIBABA_CLOUD_ACCESS_KEY_SECRET=<YOUR_AK_SECRET> 
python3 main.py
```

#### **4\.** Verify that the endpoint is working

Send a test request:

```
curl http://<your_server_public_IP_address>/get_sts_token
```

Sample success response:

```
{
  "AccessKeyId": "STS.L4xxxxxx",
  "AccessKeySecret": "Dcyyyyyyyy",
  "Expiration": "2025-04-05T10:30:00Z",
  "SecurityToken": "CAISzxxxxxxxxxxx..."
}
```

Verification points:

-   The response includes the `AccessKeyId`, `AccessKeySecret`, and `SecurityToken` fields.
    
-   The `AccessKeyId` starts with `STS.`, which indicates a temporary credential.
    
-   The `Expiration` field indicates the expiration time, which should be within a reasonable range.
    

### **Step 3:** Integrate the WebTracking SDK into your frontend

Integrate the SDK into your frontend application and configure the STS plugin for secure authorization and log upload. For a complete sample project, see [Appendix II: Sample frontend application project](#81fd8d6e89h7c).

#### **1\. Install SDK dependencies**

Use npm to install the WebTracking SDK and its STS plugin:

```
npm install --save @aliyun-sls/web-track-browser
npm install --save @aliyun-sls/web-sts-plugin
```

#### **2\.** Initialize the SDK and configure STS authentication

In your frontend project (such as in `index.js`), initialize the `SlsTracker` instance and configure its STS plugin.

##### **2.1 Import core modules**

```
import SlsTracker from "@aliyun-sls/web-track-browser";
import createStsPlugin from "@aliyun-sls/web-sts-plugin";
```

##### **2.2 Configure basic SLS information**

Fill in the following parameters based on your actual resource information:

```
const opts = {
  host: "${endpoint}", // The endpoint of your service region. For example, ap-southeast-1.log.aliyuncs.com
  project: "${project}", // Project name
  logstore: "${logstore}", // Logstore name
  time: 10, // The interval for sending logs, in seconds. Default is 10.
  count: 10, // The number of logs to send in a batch. Default is 10.
  topic: "topic", // Custom log topic
  source: "source",
  tags: {
    tags: "tags",
  },
};
```

##### **2.3 Configure the STS plugin for secure authorization**

To avoid exposing long-term AccessKeys on the client, the application instead fetches STS credentials from a backend service. The provided STS plugin automates the process of dynamically refreshing these credentials before they expire.

```
const stsOpt = {
  accessKeyId: "",
  accessKeySecret: "",
  securityToken: "",
  
  // Asynchronous function to refresh the STS credentials
  refreshSTSToken: () =>
    new Promise((resolve, reject) => {
      const xhr = new window.XMLHttpRequest();
      xhr.open("GET", "http://<your_ECS_instance_public_IP_address>/get_sts_token", true);
      xhr.send();
      
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            let credential = JSON.parse(xhr.response);
            // Update the temporary credentials
            stsOpt.accessKeyId = credential.AccessKeyId;
            stsOpt.accessKeySecret = credential.AccessKeySecret;
            stsOpt.securityToken = credential.SecurityToken;
            resolve();
          } else {
            reject("Wrong status code.");
          }
        }
      };
    }),
   // (Optional) Custom refresh interval. Default is 5 minutes (300,000 ms).
  // refreshSTSTokenInterval: 300000,
  
  // (Optional) Set how long before token expiration to refresh (in milliseconds).
  // stsTokenFreshTime: undefined,
};
```

##### **2.4 Initialize the tracker instance and enable the STS plugin**

```
// Create a tracker instance
const tracker = new SlsTracker(opts);

// Create and register the STS plugin
const stsPlugin = createStsPlugin(stsOpt);
tracker.useStsPlugin(stsPlugin);
```

#### **3\.** Send logs from your application code

On your web page, use standard DOM event binding to capture user actions and call the `tracker.send()` method to send custom logs.

##### **3.1 Listen for user interaction events**

Example: Track a user login event

```
document.getElementById("loginButton").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  
  tracker.send({
    eventType: "login",
    username: username,
  });
  
  console.log("Login event tracked for:", username);
});
```

##### **3.2 Reference the script in HTML**

Ensure that the JavaScript file is loaded correctly. Import it as a module:

```
<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8" />
  <title>User Behavior Monitoring Example</title>
</head>
<body>
  <input type="text" id="username" placeholder="Enter username" />
  <button id="loginButton">Log On</button>

  <!-- Use a modular script -->
  <script type="module" src="/static/js/index.js"></script>
</body>
</html>
```

#### **4\. Run and test the application**

Start and access the frontend page, then trigger user behavior events to make the WebTracking SDK start collecting and uploading logs.

1.  Start the frontend service and access the frontend page at `http://<your_server_public_IP_address>`.
    
2.  Simulate a user action (for example, click the login button).
    
3.  Open the developer tools in your browser by pressing F12:
    
    -   On the Console tab, check whether the output displays `Login event tracked for: xxx`.
        
    -   On the Network tab, check for a successful POST request to `cn-xxx.log.aliyuncs.com`.
        

### **Step 4: Verify log ingestion**

Verify that client-side logs have been written to the logstore.

1.  Log on to the [SLS console](https://sls.console.alibabacloud.com).
    
2.  In the **Projects** section, click the target project.
    
3.  On the **Logstores** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8429651671/p1019027.png) icon next to the target logstore name to expand it.
    
4.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8429651671/p1019028.png) icon to go to the **Search & Analyze** page.
    
5.  Click **Enable**. In the panel that opens on the right, click **Automatic Index Generation**.
    
6.  The system automatically identifies the log structure and recommends field configurations. Confirm the settings and click **OK**.
    
7.  After the index is enabled, wait about 1 minute for it to take effect. Then query the logs.
    

## Unauthenticated ingestion (testing only)

Enable the WebTracking option for a logstore, which opens public write access to it. This lets clients upload log data directly using the WebTracking SDK, HTTP requests, and other methods.

**Important**

**Do not use unauthenticated ingestion in production.** This method opens the logstore to unauthenticated writes from the Internet. It is intended only for quickly verifying log pipelines in test environments.

### **Step 1: Enable WebTracking**

1.  Log on to the [SLS console](https://sls.console.alibabacloud.com).
    
2.  In the **Projects** section, click the target project.
    
3.  On the **Log Storage** > **Logstores** tab, find the target logstore and click **![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0423359951/p65765.png)** > **Modify**.
    
4.  On the **Logstore Attributes** page, click **Modify**.
    
5.  Enable **WebTracking**, then click **Save**.
    

### **Step 2:** Configure unauthenticated collection and upload logs

The following integration methods are supported:

-   **WebTracking SDK**: Import the WebTracking SDK into your frontend code and call the `send()` method to upload structured logs. This method is suitable for modern web applications.
    
-   **HTTP GET request**: Append log data to the URL parameters and upload it directly with a GET request. This method is simple to implement and suitable for debugging or lightweight collection of a small number of logs.
    
-   **HTML tag (img)**: Use the `src` attribute of an `<img>` tag to initiate the request, with log information encoded in the URL. This method requires no JavaScript, naturally supports cross-domain requests, and works well for static pages or email tracking in environments without JavaScript.
    
-   **OpenAPI batch write**: Call the SLS OpenAPI through a POST request. This method is suitable for centralized uploading of large amounts of data from a server.
    

## WebTracking SDK

In unauthenticated mode, you do not need to configure the STS plugin. Simply initialize the SDK directly.

### **Install dependencies**

```
# For browsers
npm install --save @aliyun-sls/web-track-browser

# For miniapps
npm install --save @aliyun-sls/web-track-mini
```

### **Configure basic SLS information**

```
import SlsTracker from '@aliyun-sls/web-track-browser'

const opts = {
  host: '${host}', // The endpoint of the service in your region. For example, ap-southeast-1.log.aliyuncs.com
  project: '${project}', // The project name.
  logstore: '${logstore}', // The logstore name.
  time: 10, // The interval for sending logs. The default is 10 seconds.
  count: 10, // The number of logs to send in a batch. The default is 10.
  topic: 'topic',// A custom log topic.
  source: 'source',
  tags: {
    tags: 'tags',
  },
}

const tracker = new SlsTracker(opts)  // Create an SlsTracker object
```

### **Upload logs**

When you upload a single log, each log is a single object. When you upload multiple logs, the data structure is an array of objects.

## Upload a single log

```
tracker.send({
  eventType: 'view_product',
  productName: 'Tablet',
  price: 500
})
```

Upload a single log immediately (the `time` and `count` parameters are ignored):

```
tracker.sendImmediate({
  eventType: 'view_product',
  productName: 'Tablet',
  price: 500
})
```

## **Upload a batch of logs**

```
tracker.sendBatchLogs([
  {
    eventType: 'view_product',
    productName: 'Tablet',
    price: 500
  },
  {
    eventType: 'view_product',
    productName: 'Laptop',
    price: 1200
  }
])
```

Upload a batch of logs immediately (the `time` and `count` parameters are ignored):

```
tracker.sendBatchLogsImmediate([
  {
    eventType: 'view_product',
    productName: 'Tablet',
    price: 500
  },
  {
    eventType: 'view_product',
    productName: 'Laptop',
    price: 1200
  }
])
```

## HTTP GET request

Send a GET request directly to the log service endpoint with the log data as URL parameters.

```
curl --request GET 'https://${project}.${host}/logstores/${logstore}/track?APIVersion=0.6.0&key1=val1&key2=val2'
```

-   `host`: The [endpoint](/help/en/sls/developer-reference/service-entrance#title-bqu-zsi-7nv) for SLS in your region.
    
-   `key1=val1&key2=val2`: The field names and values (key-value pairs) to upload to SLS. Multiple fields are supported. The total length must be less than 16 KB.
    

## HTML tag (img)

Embed an invisible `<img>` tag in the frontend page. The browser's mechanism for automatically loading images triggers the log upload.

```
<!-- Collect custom fields -->
<img src='https://${project}.${host}/logstores/${logstore}/track.gif?APIVersion=0.6.0&key1=val1&key2=val2'/>
<!-- Also collect User-Agent and Referer -->
<img src='https://${project}.${host}/logstores/${logstore}/track_ua.gif?APIVersion=0.6.0&key1=val1&key2=val2'/>
```

**Note**

Using `track_ua.gif` automatically collects User-Agent and Referer information. To prevent browser caching, add a timestamp parameter.

## **OpenAPI batch write**

Call the [PutWebtracking](/help/en/sls/developer-reference/api-sls-2020-12-30-putwebtracking) API to upload multiple logs.

### **Step 3:** Verify log ingestion

Verify that client-side logs have been written to the logstore.

1.  Log on to the [SLS console](https://sls.console.alibabacloud.com).
    
2.  In the **Projects** section, click the target project.
    
3.  On the **Logstores** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8429651671/p1019027.png) icon next to the target logstore name to expand it.
    
4.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8429651671/p1019028.png) icon to go to the **Search & Analyze** page.
    
5.  Click **Enable**. In the panel that opens on the right, click **Automatic Index Generation**.
    
6.  The system automatically identifies the log structure and recommends field configurations. Confirm the settings and click **OK**.
    
7.  After the index is enabled, wait about 1 minute for it to take effect. Then query the logs.
    

## **Usage notes**

To ensure service stability, SLS WebTracking has the following quotas for uploading logs from the browser:

-   Maximum data size per request: 3 MB
    
-   Maximum number of log entries per request: 4,096
    

## **Billing**

WebTracking itself is free of charge, but the resulting log write, storage, and query operations may incur charges.

#### **1\. Billing modes**

Logstores support the following billing modes:

-   Pay-by-ingested-data: Suitable for complex use cases that require long-term storage, analysis, processing, and consumption of logs.
    
-   Pay-by-feature: Suitable for lightweight or phased use cases where flexible cost control is needed.
    

#### **2\. Core billable items**

**Pay-by-ingested-data**

-   **Ingested raw data volume**: This is the primary cost driver, billed based on the uncompressed size (in GB) of your raw logs. This fee includes data writes, indexing, API calls, and the first month (30 days) of hot storage.
    
-   **Storage fees**: If logs are stored for more than 30 days, additional storage fees will apply.
    

**Pay-by-feature**

-   **Index traffic**: SLS charges this one-time fee when you write data, based on the uncompressed size of the raw logs. This is a prerequisite for making logs searchable.
    
-   **Storage fees**: Storage is billed from the first day, based on the actual space occupied by the compressed data.
    
-   **Read and write traffic**, **number of reads and writes**, and **active shards**.
    

## **FAQ**

#### **Can I** import the WebTracking SDK using a CDN?

Yes. This approach works well for lightweight frontend projects, static pages, or for quick validation if an npm-based build process is not available.

**Risk of outdated versions:** The latest version on the CDN is `0.3.5`. This version may have fewer features than the [latest version](https://www.npmjs.com/package/@aliyun-sls/web-track-browser) on npm.

**How to import:**

1.  Add the following script reference to the `<head>` or `<body>` tag of your HTML file.
    
    ```
    <script src="https://g.alicdn.com/sls/sls-js-sdk/0.3.5/web-track-browser.js"></script>
    ```
    
2.  After the SDK loads, initialize the tracker instance using the global object `window.SLS_Tracker`:
    
    ```
    if (window.SLS_Tracker) {
      const tracker = new SLS_Tracker({
        host: 'your-project.ap-southeast-1.log.aliyuncs.com',
        project: 'your-project',
        logstore: 'your-logstore',
        time: 10,
        count: 10
      });
    }
    ```
    

## **References**

-   [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540)
    
-   [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user)
    
-   [Create a RAM role for a trusted Alibaba Cloud account](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-account)
    
-   [Create custom policies](/help/en/ram/create-a-custom-policy#title-7x0-6hc-6p2)
    
-   [WebTracking JavaScript SDK for web](/help/en/sls/developer-reference/use-web-tracking-sdk-for-javascript-to-collect-browser-logs)
    
-   [Use the STS plugin for the WebTracking JavaScript SDK to upload logs](/help/en/sls/developer-reference/use-the-sts-plugin-of-the-webtracking-javascript-sdk-to-upload-logs)
    

## **Appendix 1:** STS examples in multiple languages

Alibaba Cloud provides open-source examples in multiple languages to help you quickly build a backend STS credential service. These examples use the `AssumeRole` API to securely issue temporary access tokens to frontend applications.

Example project address: [Java, Node.js, PHP, Ruby](https://github.com/xiongcw/aliyun_log_sts_server_example)

Modify the `config.json` file and start the service using the command for your chosen language.

**Language**

**Port**

Java

7080

Node.js

3000

PHP

8000

Ruby

4567

## **Appendix II:** Sample frontend application project

Browser: [simple-web-tracking-sts.zip](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20251029/dfdoic/simple-web-tracking-sts.zip).
