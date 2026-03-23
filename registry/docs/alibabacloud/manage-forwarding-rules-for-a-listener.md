You can customize Application Load Balancer (ALB) listener forwarding rules to route client requests to backend servers in one or more server groups and return responses to clients based on your rules.

## Overview of forwarding rules

You can add multiple forwarding rules to a single listener of an Application Load Balancer (ALB) instance. Each rule applies to either inbound traffic (client requests) or outbound traffic (backend responses). Basic ALB instances support only inbound forwarding rules. Standard and WAF-enabled ALB instances support both inbound and outbound forwarding rules. Each forwarding rule consists of conditions that match incoming packets and actions that define how the matched traffic is forwarded. You can specify one or more conditions and one or more actions in a single rule.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2767203771/CAEQLhiBgMC29NLykBkiIGQxYzNiMzFlZGQ4ZTRiMjFiZDQ0ZDMyY2YwYTNlMmIx3963382_20230830144006.372.svg)

-   For standard and WAF-enabled ALB instances, when a client sends a request to the ALB, the ALB processes the request using an **Inbound forwarding rule** before sending it to a backend server. The response from the backend server is then processed by the ALB using an **Outbound forwarding rule** before it is returned to the client.
    
    -   Inbound forwarding rules support only inbound conditions and actions.
        
    -   Outbound forwarding rules support outbound conditions and actions, and optionally inbound conditions.
        
-   Each forwarding rule must include at least one **Forward**, **Redirect**, or **Return Fixed Responses** action. This ensures that client requests are not dropped during forwarding.
    
    Table 1. Forwarding rules supported by Basic ALB instances
    
    **Classification**
    
    **Forwarding Rules**
    
    **Forward action**
    
    Inbound
    
    **Domain Name**, **Path**, **HTTP Header**
    
    **Forward**, **Redirect**
    
    Table 2. Forwarding rules supported by Standard and WAF-enabled ALB instances
    
    **Classification**
    
    **Forwarding conditions**
    
    **Forwarding Action**
    
    Inbound
    
    **Domain Name**, **Path**, **HTTP Header**, **Query String**, **HTTP Request Method**, **Cookie**, **Source IP**
    
    **Forward**, **Redirect**, **Return Fixed Responses**, **Rewrite**, **Add Header**, **Remove Header**, **Throttle Traffic**, **Mirror Traffic**, **CORS**
    
    Response direction
    
    -   Inbound conditions (optional): **Domain Name**, **Path**, **HTTP Header**, **Query String**, **HTTP Request Method**, **Cookie**, **Source IP**
        
    -   Outbound conditions: **Response Status Code**, **Response Header**
        
    
    **Return Fixed Response, Add Header** and **Remove Header**
    

## Matching logic

**Matching policy**: ALB matches each client request against forwarding rules based on priority. A smaller rule number indicates a higher priority. When a request matches a rule, ALB forwards the traffic and stops evaluating subsequent rules.

-   If no custom inbound rule matches, ALB uses the default inbound rule.
    
-   If no outbound forwarding rule is matched, ALB returns the response directly to the client.
    

**Note**

If you set the path to `/*`, the rule matches all paths. To handle unexpected requests, you can create a rule with the path condition set to `/*` and the action set to Return Fixed Responses with a status code of 404 or 403. Then, move this rule to the second-to-last position in the list.

**Logical Relationships Between Forwarding Conditions**: You can configure multiple conditions in a forwarding rule. Conditions of different types have an **AND** relationship. Multiple values for the same condition type have an **OR** relationship.

-   **AND between different conditions**: For example, if a rule includes the domain name `*.example.com` and the path `/api/*`, a request must match both conditions to trigger the rule. If a request matches only one condition, the rule is not triggered.
    
-   **OR between multiple values of the same condition**: For example, if you add `www.example.com` and www.test.com as domain name values, a request matches the condition if its domain is either www.example.com or `www.test.com`.
    

**Forwarding rule priority**: Rules are evaluated in order of priority, from highest to lowest. A smaller number indicates a higher priority.

The following example shows how ALB matches multiple rules:

**Priority**

**Forwarding conditions**

**Action**

**Description**

1

Domain: `api.example.com`, Path: `/v2/*`

Forward to Server Group A

Exact domain + wildcard path. Highest priority.

2

Domain: `api.example.com`, Path: `/*`

Forward to Server Group B

Exact domain + all paths. Second-highest priority.

3

Domain: `*.example.com`

Forward to Server Group C

Wildcard domain. Third-highest priority.

Default

\- (matches all requests)

Forward to Server Group D

Fallback rule. Lowest priority.

-   Request `api.example.com/v2/users` matches Rule 1. The request is forwarded to Server Group A.
    
-   Request `api.example.com/v1/users` does not match Rule 1 because the path does not match `/v2/*`. However, it matches Rule 2 and is forwarded to Server Group B.
    
-   Request `web.example.com/index` does not match Rule 1 or Rule 2 because the domain name does not match. However, it matches Rule 3 and is forwarded to Server Group C.
    
-   Request `other.com/page` does not match any custom rule. It is forwarded to Server Group D by the default rule.
    

**Note**

ALB processes forwarding rules based on their priority numbers and does not automatically sort them by the precision of domain names or paths. To prioritize exact-match domain names, you must manually place the exact-match domain name rules before wildcard or regular expression rules by assigning them a higher priority (a smaller number). This matching behavior is different from Nginx's longest prefix match and CLB's automatic sorting based on domain name precision.

**Default forwarding rule**: After you create a listener, ALB automatically creates a default inbound rule. The condition for this rule is `-`, which means it matches all client requests. The action is to **Forward** requests to the server group associated with the listener.

**Note**

-   You cannot delete the default rule. You can change its destination server group.
    
-   The default rule has the lowest priority and its priority cannot be changed.
    

## Limits

-   Basic Edition ALB instances support only inbound forwarding rules. Standard Edition and WAF-enabled ALB instances support both inbound and outbound forwarding rules.
    
-   Basic Edition ALB instances support only **Domain Name**, **Path**, and **HTTP Header** as forwarding conditions, and only **Forward To** and **Redirect To** as forwarding actions. To use other forwarding rules, you must [upgrade](/help/en/slb/application-load-balancer/user-guide/modify-the-configurations-of-alb-instances#section-p8v-pdp-o1p) to a Standard Edition or WAF-enabled ALB instance.
    
    For more information about the features of Basic, Standard, and WAF-enabled ALB instances, see [Features](/help/en/slb/application-load-balancer/product-overview/functional-characteristics#concept-2021067).
    
-   Maximum number of forwarding rules per ALB instance (excluding the default rule):
    
    **Instance Edition**
    
    **Default**
    
    **Upgradable to**
    
    **Quota increase available**
    
    Basic
    
    40
    
    100
    
    Yes
    
    Standard
    
    100
    
    200
    
    Yes
    
    WAF-enabled
    
    100
    
    200
    
    Yes
    
    If you are approaching or have reached the quota:
    
    -   Request a quota increase in the [Quota Center](https://quotas.console.alibabacloud.com/products/alb/quotas).
        
    -   Merge similar rules. You can use the OR logic for multiple values of the same condition to reduce the total number of rules.
        
    -   Upgrade your Basic Edition instance to a Standard Edition or WAF-enabled instance to increase the quota. For more information, see [upgrade](/help/en/slb/application-load-balancer/user-guide/modify-the-configurations-of-alb-instances#section-p8v-pdp-o1p).
        
-   For more information about the per-rule limits for actions, conditions, and wildcard entries, see [Quotas](/help/en/slb/application-load-balancer/product-overview/quotas-and-limits#09e0fbe078605).
    

## Prerequisites

-   You have [created a server group](/help/en/slb/application-load-balancer/user-guide/create-and-manage-a-server-group#task-2022054) and added backend servers to it.
    
-   You have [created an ALB instance](/help/en/slb/application-load-balancer/user-guide/create-and-manage-alb-instances#task-1999195).
    
-   You have configured a listener for your ALB instance and associated it with your server group. For more information, see [Add an HTTP listener](/help/en/slb/application-load-balancer/user-guide/add-an-http-listener), [Add an HTTPS listener](/help/en/slb/application-load-balancer/user-guide/add-an-https-listener), or [Add a QUIC listener](/help/en/slb/application-load-balancer/user-guide/add-a-quic-listener).
    

## Add a forwarding rule

The default forwarding rule is defined when you create the listener. You can add more forwarding rules after the listener is created.

1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
    
2.  In the top navigation bar, select the region where your ALB instance is deployed.
    
3.  On the **Instances** page, click the ID of the instance that you want to manage.
    
4.  Click the **Listener** tab. Find the listener that you want to manage, click **Actions** in the Actions column, and then click **View/Modify Forwarding Rules**.
    
5.  On the **Forwarding Rules** tab, select the **Inbound Forwarding Rules** or **Outbound Forwarding Rules** tab, and then click **Add New Rule**.
    
6.  In the **Add Forwarding Rule** panel, configure the parameters described in the following table and click **OK**.
    
    **Note**
    
    -   When a forwarding condition has multiple forwarding actions, they are evaluated using an OR relationship. This means that request traffic matching any one of these actions will be forwarded.
        
    -   The AND logic applies to different conditions. If a rule has multiple conditions, a request must match all the conditions to trigger the rule.
        
    
    -   Inbound forwarding rules
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        Enter a custom name. If left blank, ALB generates one automatically.
        
        A rule can have only one name.
        
        **Forwarding Conditions**
        
        Select a condition type. You can also click **\+ Add Condition** to add more conditions:
        
        -   **Domain Name**: Add one or more domain names. Domain names must be 3–128 characters long. Use asterisks (\*) and question marks (?) as wildcards (\* matches any string; ? matches one character). Supported types: exact-match, wildcard, and regular expression domains. For details, see [Domain name-based forwarding rules](/help/en/slb/application-load-balancer/user-guide/create-a-domain-name-based-or-url-based-forwarding-rule#section-v6e-lp1-klk).
            
            -   **Exact match**: The request domain must exactly match the configured domain. Example: `www.example.com`.
                
            -   **Wildcard match**: Use `*` to match any string (including `.`), and `?` to match one character. Example: `*.example.com` matches `api.example.com` and `www.example.com`.
                
            -   **Regular expression match**: Use a regular expression. Case-insensitive. Example: `^www\.example\.(com|cn)$` matches domains ending in `.com` or `.cn`.
                
        -   **Path**: Add one or more paths. Supports both literal and regular expression paths. For details, see [Path-based forwarding rules](/help/en/slb/application-load-balancer/user-guide/create-a-domain-name-based-or-url-based-forwarding-rule#section-v6k-rn7-27t).
            
            -   **Exact match**: Example: `/api/v1/users` matches only that exact path.
                
            -   **Wildcard match**: Example: `/api/*` matches all paths starting with `/api/` (including subpaths). `/*` matches all paths. Path matching is case-sensitive.
                
            -   **Regular expression match**: Example: `^/api/(.*)/list$` matches paths starting with `/api/` and ending with `/list`. You can choose case-sensitive or case-insensitive matching.
                
            
            Example: For URL `www.example.com/test/test1?x=1&y=2`, set path to `/test/*`.
            
        -   **HTTP Header**: Enter the header name in the **Key** field and the value in the **Value** field. You can add multiple headers. Keys must be 1–40 characters long and contain only letters, digits, underscores (\_), and hyphens (-). Values must be 1–128 characters long and contain printable characters. Values cannot start or end with spaces. Values support \* and ? wildcards. Key matching is case-insensitive.
            
            Example: Key `user-agent`, Value `*Mozilla/4.0*` (matches all requests containing `Mozilla/4.0`).
            
        -   **Query String**: Add one or more key-value pairs. Keys must be 1–100 characters long. Values must be 1–128 characters long. Supported characters: lowercase letters (case-insensitive matching), asterisks (\*), and question marks (?). Unsupported: spaces and special characters `#[]{}\|<>&`.
            
            Example: For URL `www.example.com/test/test1?x=1&y=2`, set query string to `x:1` or `y:2`.
            
        -   **HTTP Request Method**: Add one or more methods. Options: **HEAD**, **GET**, **POST**, **OPTIONS**, **PUT**, **PATCH**, **DELETE**.
            
        -   **Cookie**: Add one or more cookies. Keys must be 1–100 characters long. Values must be 1–128 characters long. Supported characters: lowercase letters (case-insensitive matching), asterisks (\*), and question marks (?). Unsupported: spaces and special characters \[\]{}<>\\#|&.
            
            Example: Key `key`, Value `value`.
            
        -   **Source IP**: Add one or more IP addresses or CIDR blocks. Blocks like 0.0.0.0/x are not supported.
            
            Example: `192.168.1.1/32`
            
        
        **Forwarding Action**
        
        Select an action type. You can also click **\+ Add Action** to add more actions.
        
        -   **Forward To**: Select a target server group from the server group list. The supported server group types include Server, IP, and Function Compute. You can add multiple server groups and set a **Weight** from 0 to 100 for each group to control the traffic distribution ratio. When you add multiple server groups, you can also enable **Group-level Session Persistence**. This feature requires that session persistence is also enabled on every individual server group that you have added.
            
            **Note**
            
            -   You can add both HTTP and HTTPS server groups.
                
            -   The maximum weight per server group can be increased to 10000. Contact your account manager to request this.
                
            
        -   **Redirect To**: Select a protocol and a status code from the **Protocol** and **Status Code** lists, and enter the destination **Domain Name**, **Port**, **Path**, and **Query** string. In this forwarding action, the **Protocol**, **Domain Name**, **Port**, **Path**, and **Query** values cannot all be default values or empty.
            
            **Note**
            
            -   For the advanced configuration rules for **Path** in **Redirect To**, see [Advanced configuration rules for paths in rewrites and redirections](/help/en/slb/application-load-balancer/user-guide/create-a-domain-name-based-or-url-based-forwarding-rule#section-zch-7la-wwh).
                
            -   ${x} references the corresponding value from the request. Leaving it blank uses the request’s default value.
                
            -   For more information about status codes, see [HTTP status codes](/help/en/cms/cloudmonitor-1-0/user-guide/error-codes-and-status-codes#concept-nvf-32b-h2b).
                
            
        -   **Return Fixed Responses**: Enter a **Response Status Code**, then select a **Response Content Type** and enter **Response Content**. The status code must be a numeric string in the format 2xx, 4xx, or 5xx (where x is any digit).
            
        -   **Rewrite**: Modify the request’s domain, path, or query string internally before forwarding to the backend. The client’s browser URL remains unchanged. Supports rewriting **Domain Name**, **Path**, and **Query** strings.
            
            **Note**
            
            -   The **Rewrite** action must be used with the **Forward To** action to take effect.
                
            -   **Rewrite** and **Redirect To** differ as follows: Rewrite is server-side internal processing, and the client URL remains unchanged. Redirect To returns an HTTP 3xx status code to the client, and the client browser navigates to the new URL. If you only need to change the path received by the backend without changing the URL displayed to the user, use Rewrite. If you need the user's browser to navigate to a new address, use Redirect To.
                
            -   Simple example: To rewrite `/app/page` to `/v2/page`, set the path condition to `/app/page` (exact match) and the rewrite path to `/v2/page`. To match all subpaths under `/app/`, use regular expressions. See [Advanced path-based forwarding rule settings for rewrites and redirects](/help/en/slb/application-load-balancer/user-guide/create-a-domain-name-based-or-url-based-forwarding-rule#section-zch-7la-wwh).
                
            
        -   **Add Header**: Enter a header key and value. This overwrites existing headers. Keys must be 1–40 characters long and contain only letters, digits, underscores (\_), and hyphens (-). Values must be 1–128 characters long and contain printable characters. Values cannot start or end with spaces.
            
        -   **Remove Header**: Enter a header key to remove that key-value pair from the request.
            
            **Note**
            
            For inbound **Add Header** and **Remove Header**, the following keys are not allowed (case-insensitive): `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `x-forwarded-host`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, `authority`. These are reserved or critical HTTP fields. Modifying them may break forwarding or connections.
            
        -   **Throttle Traffic**: Configure the following parameters as needed.
            
            -   **QPS (Total)**: Enter queries per second. Valid range: **1–1000000**.
                
            -   **QPS (IP-based Rate Limiting)**: Specify the IP-based rate limiting value. Valid values range from **1 to 1,000,000**. If you configure both **QPS (total Rate Limiting)** and **QPS (IP-based Rate Limiting)**, the IP-based rate limiting value must be less than the total rate limiting value.
                
            
            **Note**
            
            -   When the forwarding action is **Rate Limiting**, it must be used in combination with the **Forward To** forwarding action targeting the target server group to take effect.
                
                -   **Rate Limit** + **Forward To**: Requests that are within the rate limit are forwarded to the target server group. If the number of requests per second (QPS) exceeds the rate limit, a 503 status code is returned to the client.
                    
                -   **Rate Limiting** + **Redirect To** + **Forward To**: Requests within the rate limit are forwarded to the target server group. If queries per second (QPS) exceed the rate limit, requests are redirected to a new address.
                    
                -   **Rate Limiting** + **Return Fixed Response** + **Forward To**: Requests within the rate limit will be forwarded to the target server group. If the queries per second (QPS) exceeds the rate limit, the predefined fixed response is returned to the client.
                    
            -   When the X-Forwarded-For request header contains multiple IP addresses, such as `X-Forwarded-For: <client-ip-address>, <proxy1>, <proxy2>, …`, the leftmost address is the real client IP. If you want to use the **SourceIp** matching and **QPS (IP-based Rate Limiting)** features in ALB forwarding rules, you must enable the **Find Real Client Source IP** setting in the listener so that ALB can retrieve the real client source IP from the X-Forwarded-For header field. For more information, see [Adding an HTTP Listener](/help/en/slb/application-load-balancer/user-guide/add-an-http-listener) and [Adding an HTTPS Listener](/help/en/slb/application-load-balancer/user-guide/add-an-https-listener).
                
            
        -   **Mirror Traffic**: Select a target server group from the list. Supports **Server** and **IP** server groups.
            
        -   **CORS**: A request is cross-origin if its protocol, domain, or port differs from the origin of the page returning the response. Requests include simple requests and preflight requests. CORS is used in frontend-backend separation scenarios—for example, when the frontend is hosted at `www.example.com` and the API backend is at `api.example.com`. Browser calls to the API trigger CORS restrictions.
            
            **Note**
            
            -   After you configure CORS, ALB handles browser-sent OPTIONS preflight requests and returns required CORS headers. No backend changes are needed.
                
            -   We recommend that you use the cross-domain action instead of manually setting individual CORS response headers, such as `Access-Control-Allow-Origin`, using the **Write Header** action. The cross-domain action simplifies configuration and automatically handles preflight requests.
                
            
            -   **Trusted Origins**: Specify websites allowed to access your resources via browser.
                
            -   **Allowed Methods**: Select HTTP methods allowed for cross-origin access. Options: **GET**, **POST**, **PUT**, **DELETE**, **HEAD**, **OPTIONS**, **PATCH**.
                
            -   **Trusted Request Headers**: Specify headers allowed in cross-origin requests beyond browser-built-in headers.
                
            -   **Trusted Response Headers**: Specify response headers accessible to browsers and JavaScript.
                
            -   **Trusted Credentials**: Specify whether credentials are allowed in cross-origin requests. Options: **Allow** or **Deny**. Default: **Allow**.
                
            -   **Browser Cache Time**: Set the maximum time (in seconds) to cache an OPTIONS preflight request. Valid range: **\-1–172800**.
                
        
    -   Outbound forwarding rules
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        Enter a custom name. If left blank, ALB generates one automatically.
        
        A rule can have only one name.
        
        **Inbound Conditions (Optional)**
        
        Select an inbound condition. Click **\+ Add Inbound Condition** to add more. For details, see the condition configuration steps in [Add a forwarding rule](#section-3s7-nkp-65x).
        
        **And the following response direction conditions are met**
        
        Select an outbound condition. Click **\+ Add Outbound Condition** to add more.
        
        -   **Response Status Code**: The status code returned to the client. Valid range: 100–599.
            
            Enter ranges. Separate multiple codes or ranges with commas (,). Example: 200-233,301.
            
        -   **Response Header**: An HTTP header in the response. Enter the header name in the **Key** field and the value in the **Value** field. You can add multiple headers.
            
        
        **Forwarding Action**
        
        Select an outbound action. Click **\+ Add Action** to add more.
        
        -   **Return Fixed Responses**: Enter a **Response Status Code**, then select a **Response Content Type** and enter **Response Content**. The status code must be a numeric string in the format 2xx, 4xx, or 5xx (where x is any digit).
            
        -   **Add Header**: Enter a header key and value. This overwrites existing headers in the response.
            
        -   **Remove Header**: Enter a header key to remove that key-value pair from the response.
            
            **Note**
            
            For outbound **Add Header** and **Remove Header**, the following keys are not allowed (case-insensitive): `connection`, `upgrade`, `content-length`, `transfer-encoding`. These are critical HTTP fields. Modifying them may break response transmission.
            
        
    -   Add AScript programmable rules
        
        Click **\+ Add Script After Forwarding Rule Is Applied** to add an AScript rule. For more information, see [Step 2: Add AScript programmable rules](/help/en/slb/application-load-balancer/user-guide/add-and-manage-scripts#section-6kd-wk0-4zj).
        
        **Note**
        
        Only standard and WAF-enabled ALB instances support AScript. Basic ALB instances do not support AScript.
        

## **More Operations**

**Warning**

Editing, deleting, or changing the priority of a forwarding rule may affect your services. We recommend that you perform these operations during off-peak hours. Before you apply the changes, you must test and evaluate them to prevent service disruptions.

### **Modify a forwarding rule**

1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
    
2.  In the top navigation bar, select the region where your ALB instance is deployed.
    
3.  On the **Instances** page, click the ID of the instance that you want to manage.
    
4.  Click the **Listener** tab. Find the listener that you want to manage, click **Actions** in the Actions column, and then click **View/Modify Forwarding Rules**.
    
5.  On the **Forwarding Rules** tab, select the **Inbound Forwarding Rules** or **Outbound Forwarding Rules** tab. Find the rule that you want to modify and click **Edit** in the upper-right corner.
    
6.  After you modify the rule, click **Save**.
    

### **Change forwarding rule priority**

Rules are matched based on priority, from highest to lowest. A smaller number indicates a higher priority. You can change the priority of any custom rule. You cannot change the priority of the default rule.

1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
    
2.  In the top navigation bar, select the region where your ALB instance is deployed.
    
3.  On the **Instances** page, click the ID of the instance that you want to manage.
    
4.  Click the **Listener** tab. Find the listener that you want to manage, click **Actions** in the Actions column, and then click **View/Modify Forwarding Rules**.
    
5.  On the **Forwarding Rules** tab, select the **Inbound Forwarding Rules** or **Outbound Forwarding Rules** tab. Drag the rule to the desired position in the list and click **Save Priority**.
    

### **Delete a forwarding rule**

You can delete any custom forwarding rule at any time. You cannot delete the default rule. If you delete a listener, all of its forwarding rules are also deleted.

1.  Log on to the [ALB console](https://slb.console.alibabacloud.com/alb).
    
2.  In the top navigation bar, select the region where your ALB instance is deployed.
    
3.  On the **Instances** page, click the ID of the instance that you want to manage.
    
4.  Click the **Listener** tab. Find the listener that you want to manage, click **Actions** in the Actions column, and then click **View/Modify Forwarding Rules**.
    
5.  On the **Forwarding Rules** tab, select **Inbound Forwarding Rules** or **Outbound Forwarding Rules**. Select the rule to delete and click Delete.
    
6.  In the message that appears, click **OK**.
    

## References

## User guides

-   For more information about how to configure domain names and paths in conditions, and advanced path settings for rewrites and redirects, see [Configure domain name- and path-based forwarding rules](/help/en/slb/application-load-balancer/user-guide/create-a-domain-name-based-or-url-based-forwarding-rule#task-2230710).
    
-   Common ALB forwarding rule use cases:
    
    -   [Redirect HTTP requests to an HTTPS listener](/help/en/slb/application-load-balancer/use-cases/redirect-http-requests-to-an-https-listener): You can use ALB forwarding rules to redirect HTTP requests to HTTPS listeners. This encrypts data in transit, prevents man-in-the-middle attacks and data breaches, and helps you build a modern and secure network architecture.
        
    -   [Mirror production traffic to a staging environment](/help/en/slb/application-load-balancer/use-cases/use-the-traffic-mirroring-feature-to-mirror-production-traffic-to-a-staging-environment): You can use the traffic mirroring feature of ALB to mirror live traffic to backend servers in a staging environment for testing purposes. ALB discards responses from the mirrored backend servers to ensure that test traffic does not affect production services.
        
    -   [Use ALB to implement a canary release](/help/en/slb/application-load-balancer/use-cases/use-alb-to-implement-canary-releases): You can configure condition-based or weight-based forwarding rules to route a portion of your traffic to new application versions. This lets you gradually verify the stability of the new versions before a full rollout.
        

## API references

-   [CreateRule](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-createrule): Creates a forwarding rule.
    
-   [CreateRules](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-createrules): Creates forwarding rules in batches.
    
-   [DeleteRule](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-deleterule): Deletes a forwarding rule.
    
-   [DeleteRules](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-deleterules): Deletes forwarding rules in batches.
    
-   [ListRules](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-listrules): Queries forwarding rules.
    
-   [UpdateRuleAttribute](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-updateruleattribute): Updates a forwarding rule.
    
-   [UpdateRulesAttribute](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-updaterulesattribute): Updates forwarding rules in batches.
