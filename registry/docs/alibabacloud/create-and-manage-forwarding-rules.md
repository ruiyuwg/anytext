To distribute and process traffic based on request attributes, such as domain names, paths, HTTP headers, or cookies, you can create custom forwarding rules for a listener. The listener then performs different forwarding actions on access requests based on these rules. This topic describes how forwarding rules work and how to add and manage them.

## How forwarding rules work

### Types of forwarding rules

Forwarding rules are classified as default or custom:

-   Default forwarding rule: When you create a listener, the system automatically creates a default forwarding rule and associates it with the default endpoint group. Each listener has only one default forwarding rule. You cannot change the priority of, modify, or delete the default forwarding rule.
    
-   Custom forwarding rule: After you create a listener, you can create custom forwarding rules as needed. You can create multiple custom forwarding rules for a listener and change their priorities.
    

### Components of forwarding rules

Each forwarding rule consists of **forwarding conditions** and **forwarding actions**. The forwarding actions are performed on a request only if the request matches all forwarding conditions.

The supported forwarding conditions and forwarding actions vary based on the listener protocol:

**Listener protocol**

**Forwarding conditions**

**Forwarding actions**

TCP

**Domain Names**

**Forward to**, **Drop (Block Traffic)**

HTTP or HTTPS

**Host**, **Path**, **HTTP Header**, **HTTP Request Method**, **Cookie**, **Source IP**, **Query String**

**Forward to**, **Redirect to**, **Mirror traffic to**, **Return fixed response**, **Rewrite**, **Insert header**, **Remove header**, **Drop (Block Traffic)**

**Note**

-   If your standard GA instance supports only the **Domain Name** and **Path** forwarding conditions and the **Forward To** forwarding action, your instance version may not support other condition or action types. To use these features, contact your business manager to upgrade the instance.
    
-   If your standard GA instance does not support adding forwarding rules for TCP listeners, your instance version may not support this feature. To use this feature, contact your business manager to upgrade the instance.
    

### How requests are matched against forwarding rules

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9577123771/CAEQUBiBgICZttWy2BkiIGEzMDk5OTlhZmI5NTQ3NmNiMTk2YTJmMWRhNzNmOTg33963382_20230830144006.372.svg)

1.  Requests are matched against custom forwarding rules one by one in descending order of priority. A smaller rule number indicates a higher priority.
    
    -   If a request matches a custom forwarding rule, which means it meets all forwarding conditions of the rule, the corresponding forwarding actions are immediately performed.
        
    -   If a request does not match a custom forwarding rule, the request is then matched against the custom forwarding rule with the next highest priority.
        
2.  If a request does not match any custom forwarding rule, the default forwarding rule, which has the lowest priority, is applied. The request is forwarded to the default endpoint group.
    
    If the listener has multiple default endpoint groups, the default forwarding rule forwards traffic based on the traffic distribution rules of the endpoint groups. For more information, see [Traffic distribution over multiple endpoint groups and scenarios](/help/en/ga/user-guide/distribute-traffic-across-endpoint-groups-in-different-scenarios).
    

**Note**

If you set the path to `/*`, requests to all paths are matched. If you need a catch-all rule to handle unexpected requests, you can set the path in the forwarding condition to `/*` and set the forwarding action to return a fixed response with a 404 or 403 status code. After you configure the rule, drag it to the second-to-last position in the rule list.

## Prerequisites

-   You have [created a standard GA instance](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#task-2381612).
    
-   If the GA instance uses the subscription billing method, you must purchase and associate a basic bandwidth plan.
    
-   You have added an intelligent routing listener. For more information, see [Add and manage intelligent routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners).
    

## Add a forwarding rule

Follow these steps to add a custom forwarding rule that performs specific actions on requests that match its conditions.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, find the target Global Accelerator instance and click **Configure Listener** in the **Actions** column.
    
3.  On the **Listeners** tab, find the target listener and click its ID.
    
4.  On the listener details page, you can click the **Forwarding Rule** tab.
    
5.  On the **Forwarding Rule** tab, click **Add Forwarding Rule**. Configure the forwarding rule using the information that follows, and then click **OK**.
    
    ### **HTTP or HTTPS Listener Forwarding Rules**
    
    **Parameter**
    
    **Description**
    
    **Policy Name**
    
    The name of the custom forwarding rule.
    
    **If (Matching All Conditions)**
    
    Select a forwarding condition type. You can also click **+Add Forwarding Condition** to add multiple forwarding conditions.
    
    -   **Host**: Enter one or more domain names. Exact-match domain names, wildcard domain names, and regular expressions are supported. For more information, see [Domain name configuration rules for forwarding conditions](/help/en/ga/user-guide/configure-forwarding-policies-for-domain-names-and-paths#section-v6e-lp1-klk).
        
        You can create only one **Host** forwarding condition in a forwarding rule. You can configure multiple domain names in the condition. The logical relationship between the domain names is OR.
        
        Example: \*.example.com
        
    -   **Path**: Enter one or more paths. Exact-match paths, wildcard paths, and regular expressions are supported. For more information, see [Path configuration rules for forwarding conditions](/help/en/ga/user-guide/configure-forwarding-policies-for-domain-names-and-paths#section-v6k-rn7-27t).
        
        You can create multiple **Path** forwarding conditions in a forwarding rule. The logical relationship between multiple **Path** forwarding conditions is OR. You can configure multiple paths in a **Path** condition. The logical relationship between the paths is OR.
        
        Example: If the URL is `www.example.com/test/test1?x=1&y=2`, you can set this parameter to /test/\*.
        
    -   **HTTP Header**: Enter the name of the HTTP header in the **Key is** field and the content of the HTTP header in the **Value is** field. You can add multiple HTTP header values. You can create multiple **HTTP Header** forwarding conditions in a forwarding rule. The logical relationship between multiple **HTTP Header** forwarding conditions is AND. The HTTP header keys must be unique. You can configure multiple HTTP header values in an **HTTP Header** forwarding condition. The HTTP header values must be unique.
        
        For example, for the key user-agent, the value is \*Mozilla/4.0\*.
        
    -   **HTTP Request Method**: Select an HTTP request method. Valid values: **HEAD**, **GET**, **POST**, **OPTIONS**, **PUT**, **PATCH**, and **DELETE**. You can create only one **HTTP Request Method** forwarding condition in a forwarding rule. You can configure multiple HTTP request methods in the condition. The logical relationship between the HTTP request methods is OR.
        
    -   **Cookie**: Enter one or more cookies. You can create multiple **Cookie** forwarding conditions in a forwarding rule. The logical relationship between multiple **Cookie** forwarding conditions is AND. You can configure multiple cookie key-value pairs in a **Cookie** condition. The logical relationship between the cookie key-value pairs is OR.
        
        Example: key:value.
        
    -   **Source IP**: Enter one or more IP addresses or CIDR blocks. You can create only one **Source IP** forwarding condition in a forwarding rule. You can configure multiple IP addresses or CIDR blocks in the condition. The logical relationship between the IP addresses or CIDR blocks is OR.
        
        Example of an IP address: 1.1.XX.XX/32. Example of a CIDR block: 2.2.XX.XX/24.
        
    -   **Query String**: Enter one or more query strings. You can create multiple **Query String** forwarding conditions in a forwarding rule. The logical relationship between multiple **Query String** forwarding conditions is AND. You can configure multiple string key-value pairs in a **Query String** condition. The logical relationship between the string key-value pairs is OR.
        
        Example: If the URL is `www.example.com/test/test1?x=1&y=2`, you can set this parameter to x:1 or y:2.
        
    
    **Then**
    
    Select a forwarding action type. You can also click **+Add Action** to add multiple forwarding actions.
    
    **Note**
    
    -   A forwarding rule must contain a **Forward to**, **Redirect to**, or **Return fixed response** action to ensure that client requests are not interrupted.
        
    -   A forwarding rule can contain only one action of the **Forward to**, **Redirect to**, or **Return fixed response** type.
        
    -   If a forwarding rule contains a **Rewrite**, **Insert header**, or **Remove header** action, you must also configure a **Forward to** action. The Rewrite, Insert header, or Remove header action must be placed before the **Forward to** action.
        
    
    -   **Forward to**: Select the destination endpoint group.
        
        **Note**
        
        The selection of endpoint groups is subject to the following restrictions based on the billing method of your GA instance:
        
        -   Pay-as-you-go: You can select multiple endpoint groups, including default and virtual endpoint groups. However, you can select only one endpoint group per region.By default, you can associate up to 10 endpoint groups. If you need a larger quota, contact your account manager.
            
        -   Subscription: You can select only one virtual endpoint group.
            
        
    -   **Redirect to**: Select the **Protocol** and **Status Code**, and enter the destination **Host**, **Port**, **Path**, and **Query** string. The **Protocol**, **Host**, **Port**, **Path**, and **Query** parameters cannot all be empty or use their default values at the same time.
        
        For more information about the advanced configuration rules for the **Path** parameter in a **Redirect to** action, see [Advanced path configurations for rewrites and redirects](/help/en/ga/user-guide/configure-forwarding-policies-for-domain-names-and-paths#section-zch-7la-wwh).
        
    -   **Mirror traffic to**: Select a destination endpoint group. A copy of the matched request traffic is mirrored to this endpoint group.
        
        **Note**
        
        -   The traffic mirroring feature is being rolled out in phases. To use this feature, contact your account manager.
            
        -   Only pay-as-you-go GA instances support the **Mirror traffic to** forwarding action.
            
        -   If you configure a **Mirror traffic to** action, you must also configure a **Forward to** action. The **Mirror traffic to** action must be placed before the **Forward to** action. The endpoint groups selected for these two actions cannot be the same.
            
        -   You can select only one endpoint group (a default endpoint group or a virtual endpoint group) for traffic mirroring.
            
        
    -   **Return fixed response**: Enter the **Response Status Code**, then select the **Response Body Type** and enter the **Response Body**.
        
    -   **Rewrite**: Enter the destination **Host**, **Path**, and **Query String**.
        
        For more information about the advanced configuration rules for the **Path** parameter in a **Rewrite** action, see [Advanced path configurations for rewrites and redirects](/help/en/ga/user-guide/configure-forwarding-policies-for-domain-names-and-paths#section-zch-7la-wwh).
        
    -   **Insert header**: Enter the HTTP header name in the **Key is** field and the HTTP header content in the **Value is** field. The entered information overwrites existing header variables in the request. The HTTP header keys in **Insert header** actions must be unique and cannot be the same as the keys in **Remove header** actions.
        
        **Note**
        
        Only pay-as-you-go instances support inserting **System-defined** **Request IDs** into headers.
        
    -   **Remove header**: Enter the HTTP header name. The HTTP header keys in **Remove header** actions must be unique and cannot be the same as the keys in **Insert header** actions.
        
    -   **Drop (Block Traffic)**: Directly drops access traffic.
        
    
    ### **TCP listeners**
    
    **Important**
    
    When you add a forwarding rule for a TCP listener, you must ensure that the traffic is forwarded to a backend service that uses HTTPS. Otherwise, the forwarding rule does not take effect.
    
    **Parameter**
    
    **Description**
    
    ****Name****
    
    The name of the custom forwarding rule.
    
    **If (Matching All Conditions)**
    
    You can configure the forwarding condition type, but only the **Domain Name** type is supported.
    
    The Host forwarding condition supports exact-match domain names, wildcard domain names, and regular expressions. For more information, see [Domain name configuration rules for forwarding conditions](/help/en/ga/user-guide/configure-forwarding-policies-for-domain-names-and-paths#section-v6e-lp1-klk).
    
    Example: \*.example.com
    
    You can also click **+Add Domain Name** to add multiple Host forwarding conditions. The logical relationship between the conditions is OR.
    
    **The Forwarding Action**
    
    Select a forwarding action type.
    
    A forwarding rule can contain only one action of the **Forward to** or **Drop (Block Traffic)** type.
    
    -   **Forward to**: Select the destination default endpoint group or virtual endpoint group.
        
        **Note**
        
        The selection of endpoint groups is subject to the following restrictions based on the billing method of your GA instance:
        
        -   Pay-as-you-go: You can select multiple endpoint groups, including default and virtual endpoint groups. However, you can select only one endpoint group per region.By default, you can associate up to 10 endpoint groups. If you need a larger quota, contact your account manager.
            
        -   Subscription: You can select only one default endpoint group or virtual endpoint group.
            
        
    -   **Drop (Block Traffic)**: Directly drops access traffic.
        
    
    You can click **Add New Rule** to add multiple forwarding rules at once.
    
6.  To add another forwarding rule, click **Add Forwarding Rule**.
    

## More operations

**Note**

You cannot edit, change the priority of, or delete the default forwarding rule.

**Operation**

**Description**

Edit a forwarding rule

On the **Forwarding Rule** tab, find the target forwarding rule, move the mouse pointer over the upper-right corner, click the ![编辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1051470661/p423011.png) icon that appears, edit the forwarding rule, and then click **Save**.

Change the priority of a forwarding rule

Forwarding rules are matched from top to bottom in descending order of priority. A smaller number indicates a higher priority. You can change the priority of custom forwarding rules but not the default forwarding rule.

On the **Forwarding Rule** tab, find the target forwarding rule and drag it to the desired position. Then, click **Save Priority Changes** in the upper-right corner of the page.

Delete a forwarding rule

**Delete a single forwarding rule**

1.  On the **Forwarding Rule** tab, find the target forwarding rule, move the mouse pointer over the upper-right corner, and click the ![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1051470661/p423015.png) icon that appears.
    
2.  In the dialog box that appears, confirm the forwarding rule ID and click **OK**.
    

**Delete multiple forwarding rules**

1.  On the **Forwarding Rule** tab, select the target forwarding rules and click **Delete** in the upper-right corner of the page.
    
2.  In the dialog box that appears, confirm the forwarding rule IDs and click **OK**.
    

## Usage examples

### Forward requests to a specific virtual endpoint group

A web application is deployed on two servers and provides services using the domain names `example.com` and `example.net`. Global Accelerator is used to improve the quality of the web application service and enhance the user experience.

You can configure an HTTPS listener in Global Accelerator, add a default endpoint group, and bind a default certificate to the listener. This way, requests destined for `example.com` are forwarded to the default endpoint group. You can then add a virtual endpoint group, bind an additional certificate, and create a **Host** forwarding rule to forward requests destined for `example.net` to the specified virtual endpoint group.

The following figure shows the configuration of the **Host** forwarding rule in this example.![Forward to virtual endpoint group](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2623584071/p469580.png)

**Note**

For more information about how to configure multiple certificates and forwarding rules to accelerate access to multiple HTTPS domain names, see [Use a single Global Accelerator instance to accelerate access to multiple HTTPS domain names](/help/en/ga/use-cases/use-one-ga-instance-to-accelerate-access-to-multiple-https-capable-domain-names#task-2022760).

### Redirect HTTP requests to HTTPS

When a website is switched from HTTP to HTTPS to improve security, users may no longer be able to access the site over HTTP. In this case, you can use the forwarding rule feature of Global Accelerator to configure a **Redirect** forwarding rule. By default, this rule returns an HTTP 301 status code that redirects HTTP requests from clients to their secure HTTPS counterparts.

In this example, HTTP requests on port 80 are redirected to HTTPS on port 443. The following figure shows the configuration of the **Redirect** forwarding rule.

![重定向](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6721837171/p469613.png)

### **Configure domain-based traffic blocking**

A website provides external services through the domain name `example.com` and hosts the domain name on a Content Delivery Network (CDN) service. To further improve the access experience for global users, the website deploys Alibaba Cloud Global Accelerator and uses the CDN as a backend service of Global Accelerator to accelerate the distribution of website resources.

Because CDN services are multi-tenant and share access IP addresses, when Global Accelerator provides acceleration for `example.com`, it also opens an acceleration channel for the CDN. If other tenants of the CDN obtain the accelerated IP address of Global Accelerator, they can resolve other domain names, such as `example.net`, to the accelerated IP address and "hitchhike" on the acceleration service. This causes `example.com` to bear additional traffic costs and may even lead to potential security risks.

To mitigate these risks, you can use the forwarding rule feature of Global Accelerator to configure rules that allow only requests from `example.com` to access Global Accelerator and drop all other requests. This configuration strictly isolates access requests from different domain names and verifies request sources, which ensures website security.

In this example, requests for `example.com` are forwarded to the backend service in the corresponding endpoint group. For all other domain names, the forwarding action is **Drop (Block Traffic)**.

![域名访问控制.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6129379271/p852851.png)

## References

-   [CreateForwardingRules](/help/en/ga/api-createforwardingrules#doc-api-Ga-CreateForwardingRules): Creates forwarding rules.
    
-   [UpdateForwardingRules](/help/en/ga/api-updateforwardingrules#doc-api-Ga-UpdateForwardingRules): Updates forwarding rules.
    
-   [ListForwardingRules](/help/en/ga/api-listforwardingrules#doc-api-Ga-ListForwardingRules): Queries created forwarding rules.
    
-   [DeleteForwardingRules](/help/en/ga/api-deleteforwardingrules#doc-api-Ga-DeleteForwardingRules): Deletes forwarding rules.
