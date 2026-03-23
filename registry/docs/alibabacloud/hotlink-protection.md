Configuring Referer blacklist or whitelist for an OSS bucket prevents unauthorized resource hotlinking, thereby reducing unnecessary data transfer costs.

## How it works

When a browser requests a file from OSS, the `Referer` header in the HTTP request identifies the URL of the page that initiated the request. OSS validates this `Referer` value to determine if the request source is legitimate, and then allows or denies access based on your predefined rules.

After you enable hotlink protection, OSS evaluates access requests in the following order:

1.  **Empty Referer check**
    
    -   OSS first checks if the request's `Referer` header is empty.
        
    -   **If the Referer is empty**:
        
        -   If you **allow** empty `Referer`requests, OSS allows the request.
            
        -   If you **do not allow** empty `Referer` requests, OSS **allows** the request only if the **whitelist is also empty**; otherwise, OSS **denies** the request.
            
2.  **Blacklist check**
    
    -   For requests with a non-empty `Referer`, OSS checks the blacklist.
        
    -   If the `Referer` matches an entry in the blacklist, OSS **immediately denies** the request and skips the whitelist check.
        
3.  **Whitelist check**
    
    -   If the request's `Referer` is not empty and does not match the blacklist, OSS then checks the whitelist.
        
    -   If the request's `Referer` matches an entry in the whitelist, OSS **allows** the request.
        
    -   If the `Referer` does not match any entry in the whitelist, OSS **denies** the request.
        

## **Allow access only from trusted websites**

Allow only trusted websites to access your OSS resources. This configuration also supports direct access from a browser and ensures that the OSS console functions correctly.

#### **Step 1:** Get the request Referer

To ensure the rule is effective, first identify the exact `Referer` from requests that access your OSS resources.

-   **Use real-time log query**
    
    1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, click **Buckets**, then click the name of the target bucket.
        
    3.  In the left-side navigation pane, choose **Logging** > **Real-time Log Query**.
        
    4.  Find the `referer` field in the log records. If this field shows a hyphen (`-`), it indicates an empty Referer request.
        
-   **Use browser developer tools**
    
    1.  Use a modern browser like Chrome to visit the webpage that references your OSS resources.
        
    2.  Press F12 to open **Developer Tools** and switch to the **Network** panel.
        
    3.  Refresh the page and find the request for the OSS resource.
        
    4.  Select the request and find the value of the `Referer` field in the **Headers** section.
        

#### **Step 2:** Configure the hotlink protection rule

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**, then click the name of the target bucket.
    
3.  In the left-side navigation pane, choose **Content Security** > **Hotlink Protection**.
    
4.  Turn on the **Hotlink Protection** switch and configure the parameters as follows:
    
    -   **Referer Whitelist**: Enter the domains you want to allow, one per line. Because users may access your website via both HTTP and HTTPS, add entries for both protocol versions. Also, add the `OSS Console` domain to ensure full console functionality.
        
        ```
        https://www.aliyun.com
        http://www.aliyun.com
        *.console.aliyun.com
        ```
        
        Referer rules support the wildcard characters asterisk (`*`) and question mark (`?`). For example, `*.aliyun.com` matches all subdomains of `aliyun.com`.
        
    -   **Referer Blacklist**: Leave this field empty. When both a whitelist and a blacklist are configured, the blacklist takes precedence.
        
    -   **Allow Empty Referer**: Select **Yes**. This setting allows users to access files by entering the URL directly into their browser's address bar and enables access from clients that do not send a Referer header, such as desktop applications.
        
    -   **Truncate QueryString**: Select **Yes** (default). For greater flexibility, OSS ignores the part of the URL after the question mark (?)—the query string—when matching the Referer.
        
5.  Click **Save**.
    

#### **Step 3:** Verify the configuration

Use the `curl` command to simulate requests from different sources to verify that the hotlink protection configuration works as expected.

-   **Simulate access from a whitelisted Referer (expected to succeed)**
    
    ```
    curl -e "http://www.aliyun.com" http://your-bucket-name.oss-cn-hangzhou.aliyuncs.com/demo.txt
    ```
    
    Expected result: The content of the `demo.txt` file is returned.
    
-   **Simulate access from a non-whitelisted Referer (expected to be denied)**
    
    ```
    curl -e "http://www.example.com" http://your-bucket-name.oss-cn-hangzhou.aliyuncs.com/demo.txt
    ```
    
    Expected result: The command returns an error message containing `AccessDenied` and `You are denied by bucket referer policy.`
    
-   **Simulate access with an empty Referer (expected to succeed)**
    
    ```
    curl http://your-bucket-name.oss-cn-hangzhou.aliyuncs.com/demo.txt
    ```
    
    Expected result: The file content is returned because the configuration allows empty Referers.
    

## Block specific malicious websites from hotlinking

Allow access from most sources while explicitly blocking specific malicious websites. To precisely block malicious sources while keeping access open for all other legitimate sources, use a blacklist.

#### **Step 1:** Get the Referer of the malicious website

Before configuring the rule, accurately identify the `Referer` value of the malicious website. Analyze abnormal traffic by querying real-time logs to identify the sources that are hotlinking your resources.

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**, then click the name of the target bucket.
    
3.  In the left-side navigation pane, choose **Logging** > **Real-time Log Query**.
    
4.  Filter for abnormal traffic records and check the `referer` field to identify the domain pattern of the malicious website.
    

#### **Step 2:** Configure the hotlink protection rule

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**, then click the name of the target bucket.
    
3.  In the left-side navigation pane, choose **Data Security** > **Hotlink Protection**.
    
4.  Turn on the **Hotlink Protection** switch and configure the parameters as follows:
    
    -   **Referer Whitelist**: Enter the wildcard character `*` to allow access from all sources.
        
        ```
        *
        ```
        
    -   **Referer Blacklist**: Enter the domains of the malicious websites you want to block, one per line.
        
        ```
        *bad-site.example
        http://malicious-site.example
        https://malicious-site.example
        ```
        
        Using a wildcard character is an effective way to block an entire domain and its subdomains.
        
    -   **Allow Empty Referer**: Select **Yes**. This ensures that direct access and requests from legitimate clients that do not send a Referer header can proceed.
        
    -   **Truncate QueryString**: Select **Yes** (default). For greater flexibility, OSS ignores the part of the URL after the question mark (?)—the query string—when matching the Referer.
        
5.  Click **Save**.
    

#### **Step 3:** Verify the configuration

-   **Simulate a request from a normal website (expected to succeed)**
    
    ```
    curl -e "http://www.example.com" http://your-bucket-name.oss-cn-hangzhou.aliyuncs.com/demo.txt
    ```
    
    Expected result: The file content is returned.
    
-   **Simulate a request from a blacklisted website (expected to be denied)**
    
    ```
    curl -e "http://bad-site.example" http://your-bucket-name.oss-cn-hangzhou.aliyuncs.com/demo.txt
    ```
    
    Expected result: An `AccessDenied` error message is returned.
    
-   **Simulate access with an empty Referer (expected to succeed)**
    
    ```
    curl http://your-bucket-name.oss-cn-hangzhou.aliyuncs.com/demo.txt
    ```
    
    Expected result: The file content is returned.
    

## Allow access from WeChat mini programs

To use OSS resources in a WeChat mini program, you must configure the Hotlink Protection rule to allow the specific `Referer` format sent by WeChat. Requests from WeChat mini programs have a fixed `Referer` format: `https://servicewechat.com/{appid}/{version}/page-frame.html`.

#### **Step 1:** Understand the WeChat mini program Referer format

The `Referer` format for WeChat mini programs is consistent, so you can configure it directly with a wildcard character without needing to capture it first. To confirm the exact format, follow these steps:

1.  Access an OSS resource from within your mini program.
    
2.  Use real-time query to confirm the `Referer` format.
    
3.  Check the `referer` field in the logs. It should look similar to `https://servicewechat.com/wx1234567890abcdef/1/page-frame.html`.
    

#### **Step 2:** Configure the hotlink protection rule

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**, then click the name of the target bucket.
    
3.  In the left-side navigation pane, choose **Data Security** > **Hotlink Protection**.
    
4.  Turn on the **Hotlink Protection** switch and configure the parameters as follows:
    
    -   **Referer Whitelist**: Enter the wildcard rule for WeChat mini programs and the domain for the OSS Console.
        
        ```
        *servicewechat.com
        *.console.aliyun.com
        ```
        
        Using a wildcard accommodates all WeChat mini program AppIDs and versions, which simplifies configuration. Adding the console domain ensures that management functions continue to work.
        
    -   **Referer Blacklist**: Leave this field empty.
        
    -   **Allow Empty Referer**: Select **Yes**. In some cases, a mini program may not send a Referer, so allowing empty Referers ensures compatibility.
        
    -   **Truncate QueryString**: Select **Yes** (default). For greater flexibility, OSS ignores the part of the URL after the question mark (?)—the query string—when matching the Referer.
        
5.  Click **Save**.
    

#### **Step 3:** Verify the configuration

-   **Simulate a request from a WeChat mini program (expected to succeed)**
    
    ```
    curl -e "https://servicewechat.com/wx1234567890abcdef/1/page-frame.html" http://your-bucket-name.oss-cn-hangzhou.aliyuncs.com/demo.txt
    ```
    
    Expected result: The file content is returned.
    
-   **Simulate a request from another source (expected to be denied)**
    
    ```
    curl -e "http://www.example.com" http://your-bucket-name.oss-cn-hangzhou.aliyuncs.com/demo.txt
    ```
    
    Expected result: An `AccessDenied` error message is returned.
    
-   **Simulate access with an empty Referer (expected to succeed)**
    
    ```
    curl http://your-bucket-name.oss-cn-hangzhou.aliyuncs.com/demo.txt
    ```
    
    Expected result: The file content is returned.
    

## Enable console access for previews and downloads

After setting up hotlink protection, you must add `*.console.aliyun.com` to your Referer whitelist to allow downloading and previewing files from the OSS Console. This ensures that your hotlink protection policy does not block requests originating from the OSS Console.

#### **Step 1:** Configure the hotlink protection rule

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**, then click the name of the target bucket.
    
3.  In the left-side navigation pane, choose **Data Security** > **Hotlink Protection**.
    
4.  Turn on the **Hotlink Protection** switch and configure the parameters as follows:
    
    -   **Referer Whitelist**: Enter the OSS console domain.
        
        ```
        *.console.aliyun.com
        ```
        
        Using the wildcard `*.console.aliyun.com` ensures compatibility with all subdomains of the OSS console, allowing previews to work correctly across different regions and console versions.
        
    -   **Referer Blacklist**: Leave this field empty.
        
    -   **Allow Empty Referer**: Select **Yes**. This ensures that both direct access and console preview functions work correctly.
        
    -   **Truncate QueryString**: Select **Yes** (default). For greater flexibility, OSS ignores the part of the URL after the question mark (?)—the query string—when matching the Referer.
        
5.  Click **Save**.
    

#### **Step 2:** Verify the configuration

-   **Simulate access from the console (expected to succeed)**
    
    ```
    curl -e "https://oss.console.alibabacloud.com" http://your-bucket-name.oss-cn-hangzhou.aliyuncs.com/demo.txt
    ```
    
    Expected result: The file content is returned.
    
-   **Verify preview and download via the console (expected to succeed)**
    
    1.  Log on to the OSS console.
        
    2.  Navigate to the target bucket.
        
    3.  Attempt to preview and download an object.
        

## Block direct access via URL

Enforce that all requests must originate from a specific website. To effectively prevent users from accessing resources directly via a URL and provide stricter access control, disallow empty Referers.

**Note**:

-   This configuration blocks all direct access methods, including from bookmarks and links in emails.
    
-   Some browser plugins or download managers may not function correctly.
    
-   Media players may not function correctly because their segment requests often omit the `Referer` header.
    

#### **Step 1:** Determine your website's Referer

Identify all possible domain and protocol combinations for your website to ensure the configuration covers all legitimate access scenarios:

1.  Use browser developer tools to confirm the actual `Referer` value when your website accesses OSS resources.
    
2.  Consider all possible domain variations (with and without a `www` prefix, different subdomains).
    
3.  Confirm support for both HTTP and HTTPS protocols.
    

#### **Step 2: Configure hotlink protection rules**

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**, then click the name of the target bucket.
    
3.  In the left-side navigation pane, choose **Data Security** > **Hotlink Protection**.
    
4.  Turn on the **Hotlink Protection** switch and configure the parameters as follows:
    
    -   **Referer Whitelist**: Include your website's domains and the OSS console domain.
        
        ```
        https://www.example.com
        http://www.example.com
        *.console.aliyun.com
        ```
        
        Add all required domain and protocol combinations based on your actual needs. Add the console domain to ensure management functions work correctly.
        
    -   **Referer Blacklist**: Leave this field empty.
        
    -   **Allow Empty Referer**: Select **No**. This is the key setting that blocks direct access to resources.
        
    -   **Truncate QueryString**: Select **Yes** (default). For greater flexibility, OSS ignores the part of the URL after the question mark (?)—the query string—when matching the Referer.
        
5.  Click **Save**.
    

#### **Step 3:** Verify the configuration

-   **Simulate a request from the webpage (expected to succeed)**
    
    ```
    curl -e "http://www.example.com" http://your-bucket-name.oss-cn-hangzhou.aliyuncs.com/demo.txt
    ```
    
    Expected result: The file content is returned.
    
-   **Simulate direct access (expected to be denied)**
    
    ```
    curl http://your-bucket-name.oss-cn-hangzhou.aliyuncs.com/demo.txt
    ```
    
    Expected result: An `AccessDenied` error message is returned, indicating that direct access is blocked.
    
-   **Simulate a request from another website (expected to be denied)**
    
    ```
    curl -e "http://www.other-site.com" http://your-bucket-name.oss-cn-hangzhou.aliyuncs.com/demo.txt
    ```
    
    Expected result: An `AccessDenied` error message is returned.
    

## Apply in production

-   **CDN cache bypassing risk**: When CDN acceleration is configured for OSS resources, hotlinking requests might hit the CDN edge node cache and be served, bypassing OSS hotlink protection. To ensure complete and effective protection, you **must** [configure the same Referer-based hotlink protection rules on the CDN layer](/help/en/cdn/user-guide/configure-a-referer-whitelist-or-blacklist-to-enable-hotlink-protection) to implement multilayer protection.
    
-   **Impact of the browser Referrer-Policy**: Modern browsers support the `Referrer-Policy` header, which lets websites control how much Referer information is sent in cross-origin requests. Certain policies, such as `no-referrer`, cause the browser to omit the `Referer` header. OSS treats these as "empty `Referer`" requests, a factor to consider during configuration.
    
-   **Video playback compatibility**: When playing online video files with the native browser `<video>` tag, the browser typically sends two types of requests: an initial page loading request with a `Referer`, and subsequent media segment requests without a `Referer`. To ensure video playback works correctly, you must allow empty Referers.
    

## Referer configuration rules

When configuring a Referer whitelist or blacklist, follow these rules:

**Rule**

**Description**

Referer matching includes the URL scheme

A rule configured as `http://www.aliyun.com` matches `http://www.aliyun.com/123` and `http://www.aliyun.com.cn` (any address prefixed with `http://www.aliyun.com`), but it does not match `https://www.aliyun.com/123`, `https://www.aliyun.com.cn`, or `www.aliyun.com`.

The asterisk (`*`) wildcard replaces zero or more characters.

-   `*` matches all domains and IP addresses.
    
-   `*www.example.com` matches `http://www.example.com`, `https://www.example.com`, and `www.example.com`.
    
-   `*.example.com` matches `http://help.example.com`, `https://help.example.com`, `http://www.example.com`, and `https://www.example.com`.
    

The question mark (`?`) wildcard replaces a single character.

`http://www.aliyun?.com` matches `http://www.aliyunc.com`.

Referers can include domains or IP addresses with ports.

Examples include `http://www.example.com:8080` and `10.10.10.10:8080`.

## QueryString parsing rules

When QueryString truncation is disabled, OSS parses the QueryString according to the following rules:

**Rule**

**Description**

The QueryString is not URL-decoded.

For a request URL of `http://www.example.com/?job_id=task$01`, if the Referer list is set to `http://www.example.com/?job_id=task%2401`, the request URL does not match the Referer.

Parameters in the QueryString are case-insensitive.

For a request URL of `http://www.example.com/?ACTION=NOP`, if the Referer list is set to `http://www.example.com/?action=nop`, the request URL matches the Referer.

Parameters in the QueryString are not parsed.

For a request URL of `http://example.com/?b=c&a=b`, if the Referer list is set to `http://example.com/?a=b&b=c`, the request URL does not match the Referer.

## Quotas and limits

-   **Trigger conditions**: OSS performs hotlink protection validation only when a user or application accesses an object **anonymously or via a signed URL**. API calls signed using methods such as an AccessKey are not restricted by hotlink protection rules. These calls are requests that include the `Authorization` header.
    
-   **Size limit**: The total size of the Referer whitelist and blacklist combined cannot exceed 20 KB. If this limit is exceeded, attempting to save the configuration returns an `InlineDataTooLarge` error.
    
-   **Format specifications**: The rules support the asterisk (`*`) and question mark (`?`) wildcard characters for pattern matching. Matching includes the protocol name and supports domain or IP address formats with port numbers.
    
-   **Scope of effect**: Hotlink protection rules apply at the bucket level. You cannot configure different rules for specific objects or directories within a bucket.
    

## FAQ

#### Why is my hotlink protection configuration not working?

Check the following in order:

-   **Browser environment**: Certain browser environments, such as WeChat mini programs or iframes, may modify or set a specific `Referer` value. Use real-time query or browser developer tools to find the actual `Referer` of the request, then reconfigure your hotlink protection rule.
    
-   **Referer format**: Confirm that the `Referer` you entered is in the correct format. Requests from browsers typically include an `http://` or `https://` protocol prefix. If you omit the protocol prefix in your configuration, the request is not matched correctly. Follow the `Referer` configuration rules.
    
-   **CDN cache bypassing**: If you use a CDN to accelerate OSS access but have not configured hotlink protection on the CDN, requests may bypass the validation. For example, if an initial CDN request with a correct `Referer` caches a file, subsequent requests without a `Referer` might be served the cached file. Configure a consistent hotlink protection rule on your CDN.
    

#### How do I resolve access denied errors for OSS resources in a WeChat mini program?

Requests from a WeChat mini program have a fixed `Referer` format, typically starting with `https://servicewechat.com/`. You can add `*servicewechat.com` to your hotlink protection whitelist to accommodate access from all mini programs.

#### How do I resolve access denied errors when accessing a file directly from the browser's address bar?

Accessing a file directly from a browser's address bar generates an empty `Referer` request. If you have disallowed **empty Referers**, OSS denies this type of access. To support direct access, change the Empty Referer option in your hotlink protection settings to **Allow**.

#### What should I do if I get an "InlineDataTooLarge" error when saving the configuration?

This error indicates that the total size of your Referer lists (whitelist and blacklist combined) exceeds the 20 KB limit. Use wildcard characters to combine similar rules or delete unnecessary entries to reduce the size.
