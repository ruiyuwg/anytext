Use Alibaba Cloud Function Compute to automatically and periodically store offline logs from Content Delivery Network (CDN) in Object Storage Service (OSS). This enables long-term log archiving and analysis.

## **Background information**

CDN provides detailed access logs for your accelerated domain names. These offline logs are important for user behavior analysis, service troubleshooting, and analyzing operational data. According to the CDN service policy, offline log files are kept on CDN servers for only **30 days** and are automatically deleted after this period.

You may need to save these logs permanently to meet requirements for data compliance, long-term audits, or historical data analysis. Object Storage Service (OSS) provides a high-availability, low-cost, and durable storage solution, making it an ideal choice for long-term log archiving. Function Compute (FC) listens for events that generate CDN logs and invokes a task function to store the offline logs from CDN in OSS. With this solution, you can build an automated workflow to seamlessly store your CDN logs in your OSS bucket.

## **Workflow**

The core of this automated storage solution is to use FC as a scheduler and executor to connect CDN and OSS. The workflow is as follows:

1.  **Event trigger**: A trigger is configured in Function Compute. The trigger is activated whenever CDN generates a log.
    
2.  **Function execution**: When the event trigger is activated, it automatically executes the associated function code.
    
3.  **Pull logs**: The function code calculates the log file name for the previous day based on the current date and generates a download URL for the CDN offline log. The function then sends a request to this URL to download the log file to the FC temporary environment.
    
4.  **Store in OSS**: After the function successfully downloads the log file, it calls the OSS API to upload the file to a specified directory in your designated OSS bucket.
    

The entire process is fully automated and integrates three Alibaba Cloud services: CDN, FC, and OSS. This improves the efficiency of cloud service management.

## **Billing**

This solution involves billing for the following products:

-   **CDN**: The feature to generate and provide downloads for offline logs is **free**.
    
-   **FC**: FC is billed based on the number of function executions, resources consumed (vCPU and memory), and execution duration. For lightweight log storage tasks that run only a few times a day, the cost is typically very low. For more information, see [Function Compute Billing overview](/help/en/functioncompute/fc/product-overview/billing-overview-of-fc).
    
-   **OSS**: OSS is billed based on the storage space you use, the number of API requests, and any outbound traffic over the internet. For more information, see [Object Storage Service (OSS) Billing overview](/help/en/oss/billing-overview).
    

## **Prerequisites**

-   Ensure that your CDN, FC, and OSS are activated under the **same Alibaba Cloud account**.
    
-   Follow the instructions in [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4) to create a bucket in OSS to store log files. Record the **bucket name**, the **endpoint value for internet access**, and the **name of the directory** where log files will be stored.
    

## **Configuration steps**

### **1\. Get bucket configuration**

When you create the task function in FC, you must provide OSS information for log storage. Therefore, you must first obtain the **bucket name**, the **endpoint value for internet access**, and the **name of the directory** for storing log files. Follow these steps to retrieve this information:

**Obtain bucket configuration**

1.  Go to the [Bucket List](https://oss.console.alibabacloud.com/bucket) tab in the OSS console. Select the bucket for log storage.
    
2.  Click the bucket name to go to the bucket details page.
    
3.  On the bucket details page, select the **Overview** tab. From the Basic Information section, obtain the **Bucket Name**. From the Access Port section, obtain the **Endpoint** value for **Access Over Internet**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0236394571/p993207.png)
    
4.  Click **Object Management,** then **Objects**. In the file list, click **Create Directory** and enter a directory name. We recommend that you use `cdn_log`.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9136394571/p993217.png)
    

### **2\. Create a Function Compute task**

The core of this automated storage solution is to use FC as a scheduler and executor. Therefore, you must configure the corresponding trigger and task function in FC.

1.  Go to the [Function Compute 3.0 console](https://fc.console.alibabacloud.com/overview). In the navigation pane on the left, select **Functions**.
    
2.  On the **Functions** tab, click **Create Function**, select **Event Function**, and then click **Create Event Function**.
    
3.  When you create the event function, configure only the key parameters that affect the proper execution of the function.
    
    -   **Basic Configurations** - **Function Name**: You will use this function name in subsequent steps. We recommend that you use `cdn-log-dump`.
        
    -   **Code** - **Runtime**: Because the task function is Python code, select **Built-in Runtime**, **Python**, and **Python 3.10**.
        
    -   **More Configurations** - **Environment Variables**: The task function needs to obtain bucket information. Therefore, you must pass the bucket configuration information in the environment variables. Create three environment variables and enter the corresponding parameters:
        
        -   `target_oss_bucket`: **Bucket Name**
            
        -   `target_oss_endpoint`: **Endpoint value for internet access**
            
        -   `target_oss_prefix`: **Name of the directory for storing log files**
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9136394571/p993265.png)
        
4.  After you configure the parameters, click **Create** to create the function.
    
5.  On the **Function Details** page, click the **Triggers** tab, and then click **Create Trigger**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9136394571/p993293.png)
    
6.  Follow these instructions to configure the key parameters for the trigger. Click OK.
    
    -   **Trigger Type**: Select **Alibaba Cloud CDN**(Sync invocation).
        
    -   **Name**: Enter a trigger name. We recommend that you use `cdn-logs-triggers`.
        
    -   **Triggering Event**: Select **LogFileCreated**.
        
    -   **Domain Name**: You must enter a CDN-accelerated domain name that is under the same Alibaba Cloud account and is running properly.
        
    -   **Description**: Enter a description for the trigger. We recommend that you use: CDN offline log file creation trigger.
        
    -   **Role Name**: Select **AliyunCDNEventNotificationRole**.
        
7.  After you configure the trigger parameters, click **OK**. If the message **No Default Role Is Created for CDN Trigger** appears, click **Authorize Now** and follow the instructions to create the default role. If this message does not appear, the trigger is created directly.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9136394571/p993314.png)
    
8.  On the **Function Details** page, click the **Code** tab. In the online compiler, enter the following code to pull offline logs from CDN and store them in OSS.
    
    **Storage task code**
    
    ```
    # coding=utf-8
    
    import os, time, json, requests, traceback, oss2, fc2
    from requests.exceptions import *
    from fc2.fc_exceptions import *
    from oss2.models import PartInfo
    from oss2.exceptions import *
    from multiprocessing import Pool
    from contextlib import closing
    
    MAX_PROCCESSES = 20 # The number of worker processes in each subtask
    BLOCK_SIZE = 6 * 1024 * 1024 # The size of each part
    BLOCK_NUM_INTERNAL = 18 # The default number of blocks in each subtask in case of internal url
    BLOCK_NUM = 10 # The default number of blocks in each subtask
    MAX_SUBTASKS = 49 # The number of worker processes to do subtasks
    CHUNK_SIZE = 8 * 1024 # The size of each chunk
    SLEEP_TIME = 0.1 # The initial seconds to wait for retrying
    MAX_RETRY_TIME = 10 # The maximum retry times
    
    def retry(func):
        """
        Return the result of the lambda function func with retry.
        :param func: (required, lambda) the function.
        :return: The result of func.
        """
        wait_time = SLEEP_TIME
        retry_cnt = 1
        while True:
            if retry_cnt > MAX_RETRY_TIME:
                return func()
            try:
                return func()
            except (ConnectionError, SSLError, ConnectTimeout, Timeout) as e:
                print(traceback.format_exc())
            except (OssError) as e:
                if 500 <= e.status < 600:
                    print(traceback.format_exc())
                else:
                    raise Exception(e)
            except (FcError) as e:
                if (500 <= e.status_code < 600) or (e.status_code == 429):
                    print(traceback.format_exc())
                else:
                    raise Exception(e)
            print('Retry %d times...' % retry_cnt)
            time.sleep(wait_time)
            wait_time *= 2
            retry_cnt += 1
    
    def get_info(url):
        """
        Get the CRC64 and total length of the file.
        :param url: (required, string) the url address of the file.
        :return: CRC64, length
        """
        with retry(lambda : requests.get(url, {}, stream = True)) as r:
            return r.headers['x-oss-hash-crc64ecma'], int(r.headers['content-length'])
    
    class Response(object):
        """
        The response class to support reading by chunks.
        """
        def __init__(self, response):
            self.response = response
            self.status = response.status_code
            self.headers = response.headers
    
        def read(self, amt = None):
            if amt is None:
                content = b''
                for chunk in self.response.iter_content(CHUNK_SIZE):
                    content += chunk
                return content
            else:
                try:
                    return next(self.response.iter_content(amt))
                except StopIteration:
                    return b''
    
        def __iter__(self):
            return self.response.iter_content(CHUNK_SIZE)
    
    def migrate_part(args):
        """
        Download a part from url and then upload it to OSS.
        :param args: (bucket, object_name, upload_id, part_number, url, st, en)
        :bucket: (required, Bucket) the goal OSS bucket.
        :object_name: (required, string) the goal object_name.
        :upload_id: (required, integer) the upload_id of this upload task.
        :part_number: (integer) the part_number of this part.
        :url: (required, string) the url address of the file.
        :st, en: (required, integer) the byte range of this part, denoting [st, en].
        :return: (part_number, etag)
        :part_number: (integer) the part_number of this part.
        :etag: (string) the etag of the upload_part result.
        """
        bucket = args[0]
        object_name = args[1]
        upload_id = args[2]
        part_number = args[3]
        url = args[4]
        st = args[5]
        en = args[6]
        try:
            headers = {'Range' : 'bytes=%d-%d' % (st, en)}
            resp = Response(retry(lambda : requests.get(url, headers = headers, stream = True)))
            result = retry(lambda : bucket.upload_part(object_name, upload_id, part_number, resp))
            return (part_number, result.etag)
        except Exception as e:
            print(traceback.format_exc())
            raise Exception(e)
    
    def do_subtask(event, context):
        """
        Download a range of the file from url and then upload it to OSS.
        :param event: (required, json) the json format of event.
        :param context: (required, FCContext) the context of handler.
        :return: parts
        :parts: ([(integer, string)]) the part_number and etag of each process.
        """
        oss_endpoint = os.environ.get('target_oss_endpoint')
        oss_bucket_name = os.environ.get('target_oss_bucket')
        access_key_id = context.credentials.access_key_id
        access_key_secret = context.credentials.access_key_secret
        security_token = context.credentials.security_token
        auth = oss2.StsAuth(access_key_id, access_key_secret, security_token)
        bucket = oss2.Bucket(auth, oss_endpoint, oss_bucket_name)
        object_name = event['object_name']
        upload_id = event['upload_id']
        part_number = event['part_number']
        url = event['url']
        st = event['st']
        en = event['en']
        if part_number == 1:
            return [migrate_part((bucket, object_name, upload_id, part_number, url, st, en))]
        pool = Pool(MAX_PROCCESSES)
        tasks = []
        while st <= en:
            nxt = min(en, st + BLOCK_SIZE - 1)
            tasks.append((bucket, object_name, upload_id, part_number, url, st, nxt))
            part_number += 1
            st = nxt + 1
        parts = pool.map(migrate_part, tasks)
        pool.close()
        pool.join()
        return parts
    
    def invoke_subtask(args):
        """
        Invoke the same function synchronously to start a subtask.
        :param args: (object_name, upload_id, part_number, url, st, en, context)
        :object_name: (required, string) the goal object_name.
        :upload_id: (required, integer) the upload_id of this upload task.
        :part_number: (integer) the part_number of the first part in this subtask.
        :url: (required, string) the url address of the file.
        :st, en: (required, integer) the byte range of this subtask, denoting [st, en].
        :context: (required, FCContext) the context of handler.
        :return: the return of the invoked function.
        """
        object_name = args[0]
        upload_id = args[1]
        part_number = args[2]
        url = args[3]
        st = args[4]
        en = args[5]
        context = args[6]
        account_id = context.account_id
        access_key_id = context.credentials.access_key_id
        access_key_secret = context.credentials.access_key_secret
        security_token = context.credentials.security_token
        region = context.region
        service_name = context.service.name
        function_name = context.function.name
        endpoint = 'http://%s.%s-internal.fc.aliyuncs.com' % (account_id, region)
        client = fc2.Client(
            endpoint = endpoint,
            accessKeyID = access_key_id,
            accessKeySecret = access_key_secret,
            securityToken = security_token
        )
        payload = {
            'object_name' : object_name,
            'upload_id' : upload_id,
            'part_number' : part_number,
            'url' : url,
            'st' : st,
            'en' : en,
            'is_children' : True
        }
        if part_number == 1:
            return json.dumps(do_subtask(payload, context))
        ret = retry(lambda : client.invoke_function(service_name, function_name, payload = json.dumps(payload)))
        return ret.data
    
    def divide(n, m):
        """
        Calculate ceil(n / m) without floating point arithmetic.
        :param n, m: (integer)
        :return: (integer) ceil(n / m).
        """
        ret = n // m
        if n % m > 0:
            ret += 1
        return ret
    
    def migrate_file(url, oss_object_name, context):
        """
        Download the file from url and then upload it to OSS.
        :param url: (required, string) the url address of the file.
        :param oss_object_name: (required, string) the goal object_name.
        :param context: (required, FCContext) the context of handler.
        :return: actual_crc64, expect_crc64
        :actual_crc64: (string) the CRC64 of upload.
        :expect_crc64: (string) the CRC64 of source file.
        """
        crc64, total_size = get_info(url)
        oss_endpoint = os.environ.get('target_oss_endpoint')
        oss_bucket_name = os.environ.get('target_oss_bucket')
        access_key_id = context.credentials.access_key_id
        access_key_secret = context.credentials.access_key_secret
        security_token = context.credentials.security_token
        auth = oss2.StsAuth(access_key_id, access_key_secret, security_token)
        bucket = oss2.Bucket(auth, oss_endpoint, oss_bucket_name)
        upload_id = retry(lambda : bucket.init_multipart_upload(oss_object_name)).upload_id
        pool = Pool(MAX_SUBTASKS)
        st = 0
        part_number = 1
        tasks = []
        block_num = BLOCK_NUM_INTERNAL if '-internal.aliyuncs.com' in oss_endpoint else BLOCK_NUM
        block_num = min(block_num, divide(divide(total_size, BLOCK_SIZE), MAX_SUBTASKS + 1))
        while st < total_size:
            en = min(total_size - 1, st + block_num * BLOCK_SIZE - 1)
            tasks.append((oss_object_name, upload_id, part_number, url, st, en, context))
            size = en - st + 1
            cnt = divide(size, BLOCK_SIZE)
            part_number += cnt
            st = en + 1
        subtasks = pool.map(invoke_subtask, tasks)
        pool.close()
        pool.join()
        parts = []
        for it in subtasks:
            for part in json.loads(it):
                parts.append(PartInfo(part[0], part[1]))
        res = retry(lambda : bucket.complete_multipart_upload(oss_object_name, upload_id, parts))
        return str(res.crc), str(crc64)
    
    def get_oss_object_name(url):
        """
        Get the OSS object name.
        :param url: (required, string) the url address of the file.
        :return: (string) the OSS object name.
        """
        prefix = os.environ.get('target_oss_prefix')
        tmps = url.split('?')
        if len(tmps) != 2:
            raise Exception('Invalid url : %s' % url)
        urlObject = tmps[0]
        if urlObject.count('/') < 3:
            raise Exception('Invalid url : %s' % url)
        objectParts = urlObject.split('/')
        objectParts = [prefix] + objectParts[len(objectParts) - 3 : len(objectParts)]
        return '/'.join(objectParts)
    
    def handler(event, context):
        evt = json.loads(event)
        if list(evt.keys()).count('is_children'):
            return json.dumps(do_subtask(evt, context))
        url = evt['events'][0]['eventParameter']['filePath']
        if not (url.startswith('http://') or url.startswith('https://')):
            url = 'https://' + url
        oss_object_name = get_oss_object_name(url)
        st_time = int(time.time())
        wait_time = SLEEP_TIME
        retry_cnt = 1
        while True:
            actual_crc64, expect_crc64 = migrate_file(url, oss_object_name, context)
            if actual_crc64 == expect_crc64:
                break
            print('Migration object CRC64 not matched, expected: %s, actual: %s' % (expect_crc64, actual_crc64))
            if retry_cnt > MAX_RETRY_TIME:
                raise Exception('Maximum retry time exceeded.')
            print('Retry %d times...' % retry_cnt)
            time.sleep(wait_time)
            wait_time *= 2
            retry_cnt += 1
        print('Success! Total time: %d s.' % (int(time.time()) - st_time))
    ```
    
9.  Click **Deploy** to complete the function configuration.
    

### **3\. Create a dedicated role and access policy**

FC requires permissions to access OSS. To simplify the authorization process, FC supports role association. Follow these steps to configure a role that allows the offline log storage function to access OSS.

1.  Open the [Resource Access Management (RAM)](https://ram.console.alibabacloud.com/overview) console. In the navigation pane on the left, choose **Permissions** > **Policies**.
    
2.  Click **Create Policy**. On the Create Policy page, click the **JSON** tab.
    
3.  In the following policy, replace `BucketName` with your **bucket name**, and replace all three instances of `FC-NAME` with the function name from Step 2. We recommend that you use `cdn-log-dump`.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": "oss:PutObject",
          "Resource": "acs:oss:*:*:BucketName/*"
        },
        {
          "Effect": "Allow",
          "Action": "fc:InvokeFunction",
          "Resource": [
            "acs:fc:*:*:services/FC-NAME/functions/FC-NAME",
            "acs:fc:*:*:services/FC-NAME.*/functions/*"
          ]
        }
      ]
    }
    ```
    
4.  Click **OK**. Enter a **Policy Name** and a **Description**, and then click **OK** again to complete the **Create Policy** process. (We recommend using `AliyunCDNLogDumpAccess` as the Policy Name and `Manage permissions for CDN log storage` as the Description).
    
5.  In the navigation pane on the left, choose **Identities** > **Roles**. On the Roles page, click **Create Role**.
    
6.  For **Principal Type**, select **Cloud Account**. For **Principal Name**, select **Current Alibaba Cloud Account**. Then, click **OK**.
    
7.  In the **Create Role** panel, enter a **Role Name**. We recommend that you use `AliyunCDNLogDumpRole`. Then, click **OK** to create the role.
    
8.  On the details page of the role, click the **Permissions** tab, and then click **Precise Permission**. Set **Policy Type** to **Custom Policy**. For **Policy Name**, enter the name of the policy you created in Step 4. We recommend that you use `AliyunCDNLogDumpAccess`. Then, click **OK**.
    
9.  Click the **Trust Policy** tab, and then click **Edit Trust Policy**. In the **JSON** editor, enter the following trust policy, and then click **OK**.
    
    ```
    {
      "Statement": [
        {
          "Action": "sts:AssumeRole",
          "Effect": "Allow",
          "Principal": {
            "Service": [
              "fc.aliyuncs.com"
            ]
          }
        }
      ],
      "Version": "1"
    }
    ```
    

At this point, you have completed the role and permission configuration. Next, you need to bind this role to the FC task.

### **4\. Bind the role to the Function Compute task**

1.  In the FC console, on the [Functions](https://fc.console.alibabacloud.com/ap-southeast-1/functions) tab, select the function you created in Step 2, and then click **Configure**.
    
2.  On the **Configurations** tab, select **Advanced Settings**, and then click the corresponding **Modify** button.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9136394571/p993353.png)
    
3.  In the **Advanced Settings**, find the **Permissions** - **Function Role** option. Select the role you created in Step 3. We recommend that you use `AliyunCDNLogDumpRole`. Then, click **Deploy** to bind the role to the FC task.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9136394571/p993355.png)
    

### **5\. Test the Function Compute task (optional)**

After you complete the first four steps, the entire process for storing CDN offline logs in OSS is configured. However, because there is a delay of about 24 hours in generating offline logs, you cannot immediately verify that the configured FC task is running correctly. You can test the configured FC task by following these steps.

1.  In the FC console, on the [Functions](https://fc.console.alibabacloud.com/ap-southeast-1/functions) tab, select the function you created in Step 2, and then click **Configure**.
    
2.  On the **Tests** tab, for **Test Event**, select **Create New Test Event**. For **Event Templates**, select **CDN (LogFileCreated)**. For **Event Name**, enter **Test\_cdn\_log\_dump**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9136394571/p993386.png)
    
3.  Use the parameter retrieved in the following steps to replace the `filePath` parameter in the event template.
    
    **How to obtain the** `**filePath**` **parameter for testing**
    
    1.  Go to the CDN [Offline Log Download](https://cdn.console.alibabacloud.com/log/offline/download) console.
        
    2.  Select the accelerated domain name configured in the trigger. Select the day before the current date, and then click Query.
        
    3.  Select a file. To copy the download link, hover over the **Download** button, right-click, and select Copy Link.
        
    
4.  Click **Test Function**. After the execution is complete, you can see that the return value is `null` and the status is successful.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9136394571/p993399.png)
    
5.  In the OSS [bucket console](https://oss.console.alibabacloud.com/bucket), select the bucket used to store CDN logs.
    
6.  Select **Objects** and go to the directory configured to store CDN logs. You can see a folder named after the accelerated domain name. Inside this folder, there is a subfolder named after the date, which contains the file specified in the test. This indicates that the FC task has successfully processed the CDN offline log storage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9136394571/p993405.png)
