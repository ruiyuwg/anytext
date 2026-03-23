This topic describes how to access corporate internal applications through a browser without installing the SASE client.

## **Scenarios**

External vendors or mobile office users need to securely access internal corporate applications through a browser without installing a client.

## **Prerequisites**

In CNAME record mode, a CNAME record is added to map the custom proxy domain name to the access point domain name of SASE.

## **Implementation methods**

SASE provides two proxy modes to support agentless access to internal domain names. Choose the appropriate mode based on your actual requirements.

**Proxy method**

**Principle**

**Advantage**

**Disadvantage**

**Domain Mapping**

SASE provides a new proxy domain name. Users can use the domain name to access office applications.

An independent new domain name that does not affect the original access logic is used.

The change in access domain name may cause the following issues:

-   **Cross-domain call restrictions**: If the API of a different application is called, you must add CORS policies to the corresponding application to allow access from the agentless domain name.
    
-   **Single sign-on (SSO) failure**: For example, if you have integrated DingTalk SSO, you must add the new agentless proxy domain name to the webhook address in the DingTalk application.
    
-   **Second-level domain cookies not working**: If your SSO sets cookies on the second-level domain to enable identity integration between different applications, we recommend that you use the CNAME record mode and apply for a new domain name for agentless access.
    

**CNAME**

A domain name applied by the enterprise is used and mapped SASE gateway based on a CNAME record. Users use the domain name to access office applications.

Internal domain names can be reused.

The configuration process is complex.

-   Your enterprise must configure a CNAME record for the custom proxy domain name that points to the SASE access point domain name.
    
-   Your enterprise must have an internal DNS service.
    
-   SSL certificate upload is required.
    

## **Step 1: Create an application**

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation tree, choose **Private Access** > **Application Management****.**
    
3.  Select a proxy mode based on whether a custom proxy domain name is required.
    
    ## **Domain mapping proxy mode**
    
    Use a new proxy domain name provided by SASE. Users can use this domain name to access internal applications.
    
    1.  Click **Add Application**, specify **Application Name** in the **Manual Configuration** > **Basic Configurations** section, select **Browser-based Access**, and then click **Next**.
        
    2.  In the **Application Address** section, configure the **Application Address**, **Port**, **Protocol**, **Proxy Domain Name (SaaS Proxy Gateway)**, and **Configure Domain Name Mappings** parameters. Configure the domain mapping proxy mode based on the following figure.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4922064471/p939187.png)
        
    
    ## **CNAME record mode**
    
    Use a domain name applied by the enterprise and configure a CNAME record that points to the SASE gateway. Users can use this domain name to access office applications.
    
    1.  In the upper-right corner of the page, click **Certificate Management**. Upload the enterprise SSL certificate and private key to the SASE console.
        
    2.  Click **Add Application**, specify **Application Name** in the **Manual Configuration** > **Basic Configurations** section, select **Browser-based Access**, and then click **Next**.
        
    3.  In the **Application Address** section, configure the **Application Address**, **Port**, and **Protocol** parameters, select **CNAME** for **Proxy Domain Name (SaaS Proxy Gateway)**, and then set the custom proxy domain name. Understand how to configure the domain mapping proxy mode based on the following figure.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4922064471/p939166.png)
        
    
4.  If your application meets the following conditions, click **OK** to complete the application creation. If not, refer to **Browser Access Settings** and **Advanced Settings**.
    
    -   SSO is not configured.
        
    -   Domain names for accessing the application are not limited.
        
    -   No URLs pointing to other internal addresses are configured for the application.
        
    -   No cross-domain requests from the application frontend to other internal applications are initiated.
        
    
    ### **Browser access configuration**
    
    If the application contains URLs to internal addresses or needs to make cross-domain requests to other internal applications and a client is installed, the applications can be accessed because the internal network is connected. However, in agentless scenarios, the relevant URLs must be rewritten to ensure normal agentless access because other internal applications cannot be accessed directly.
    
    #### **Configure HTML rewriting**
    
    1.  Select **HTML-based Internal Domain Rewriting**. If other internal applications included in the application are configured with proxy domain names, SASE scans all URLs and automatically replace them with proxy domain names.
        
    2.  In the following scenario, specify the addresses before and after rewriting because the SASE gateway cannot automatically detect domain names. Then, SASE replace them with proxy domain names.
        
        ```
        <script>
          //Use a JavaScript variable to declare a URL. The SASE gateway cannot automatically detect the URL, and you must specify a rule to replace the URL.
          const url = "https://www.a.com/"
          //Assign the URL to window.href
          window.href = url
        </script>
        ```
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4922064471/p939317.png)
        
    
    #### **Configure JavaScript rewriting**
    
    Select **JavaScript-based Internal Request Rewriting**. If the frontend JavaScript code of the application initiates cross-domain requests to other internal applications, the request addresses will be automatically replaced.
    
    #### **Configure anonymous access**
    
    Select **Anonymous Access**, and configure specific IP addresses or IP ranges to access specific internal paths without identity verification or zero trust policy checks. In this case, requests are directly allowed.
    
    ### **Advanced settings**
    
    You can configure gateway request rewriting parameters to rewrite headers and query parameters in agentless requests to configured values. The values can be used to identify agentless access identifiers for later analysis.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4922064471/p939348.png)
    
5.  After the configuration is complete, click **OK**. The configuration takes about 2 minutes to take effect.
    

## **Step 2: Configure a zero trust policy**

Configuring a zero trust policy ensures that only authenticated users can access agentless applications through a browser, thereby enhancing security.

1.  In the left-side navigation tree, choose **Private Access** > **Zero Trust Policies****.**
    
2.  Click **Create Policy**. In the **Create Policy** panel, configure the **Applicable User** parameter and applications.
    
    **Note**
    
    Agentless applications do not support security baseline configuration or trigger templates.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4922064471/p939172.png)
    
3.  Click **OK**.
    

## **Step 3: Verify the configuration**

1.  On a test machine, perform connectivity tests on the proxy domain name. Ensure that the proxy domain name is resolved to the SASE access point.
    
2.  Access the proxy domain name from a browser to check whether access to the office application is normal.
    
    **Note**
    
    The first time you access the domain name from a browser, you are redirected to the logon page.
    
    -   **Domain mapping mode:** Copy the proxy address from the application list.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4922064471/p939368.png)
        
    -   **CNAME record mode:** Use the custom proxy domain name for access.
        

## **Other operations**

For users who have enabled DingTalk as an IdP, you can refer to [Secure access for DingTalk users through Secure Access Service Edge](/help/en/sase/use-cases/use-sase-to-ensure-security-access-for-dingtaik-users). Create a web application, configure the agentless application proxy domain name in the **Application Homepage Address**, and configure effective users. With this configuration, DingTalk users can access the application without entering logon information again.
