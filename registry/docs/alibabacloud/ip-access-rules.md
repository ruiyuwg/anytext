Create IP access rules to allow, challenge, or block traffic based on the IP address, Autonomous System Number (ASN), and geographical location of visitors. IP access rules are applicable to both HTTP (Layer 7) and TCP/UDP (Layer 4) requests.

## **Create an IP access rule**

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list), and then click your target website.
    
2.  In the left-side navigation pane, choose **Security** > ****WAF**** > **IP Access Rule**.
    
3.  In the IP Access Rules section, select **IP/CIDR Block**, **Region**, or **ASN** from the Value drop-down list, specify the value, select an action from the **Action** drop-down list, and then click **Create Rule**. For information about the supported actions, see [Actions](#56609e4e27ghb).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6322982471/p928719.png)
    
4.  Optional. By default, the rules apply to all HTTP (Layer 7) requests within your website. In the navigation pane on the left, choose **TCP/UDP** > **Settings**. On the page that appears, click ****Create Application****. On the ****Create Application**** page, turn on the **IP Access Rules** switch. This enables the IP access rule that you previously created to take effect for TCP/UDP (Layer 4 requests). By default, an IP access rule takes effect only for HTTP (Layer 7) requests.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2214255371/p885281.png)
    

## **Examples of blocking requests**

### From an IP address

The following example shows how to block requests from an IP address:

1.  In the **IP Access Rules** section, select **IP/CIDR Block** from the **Value** drop-down list and enter the IP address that you want to block.
    
2.  Select **Block** from the **Action** drop-down list and click **Create Rule**. After the rule is applied, the IP address can be blocked.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2214255371/p885348.png)
    

### From an ASN

The following example shows how to block requests from an ASN:

1.  In the **IP Access Rules** section, select **ASN** from the Value drop-down list and enter the ASN that you want to block.
    
2.  Select **Block** from the **Action** drop-down list and click **Create Rule**. After the rule is created, the request from that ASN can be blocked.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2214255371/p885380.png)
    

### From a region

The following example shows how to block requests from a region:

1.  In the **IP Access Rules** section, select **Region** from the Value drop-down list and select the region that you want to block.
    
2.  Select **Block** from the **Action** drop-down list and click **Create Rule**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2214255371/p885392.png)
    

## **Actions**

The following shows the effective scope and descriptions of the Action parameters:

-   Block
    
    -   Effective for Layer 7 and Layer 4 requests.
        
    -   Returns HTTP status code 403 for HTTP requests and rejects the connection for TCP/UDP requests by default.
        
-   Allow
    
    -   Effective for Layer 7 and Layer 4 requests.
        
    -   N/A
        
-   JavaScript Challenge
    
    -   Effective for Layer 7 requests.
        
    -   Allows a request only after the visitor's browser finishes processing the JavaScript. Bot traffic from non-browser clients is blocked.
        
-   Slider CAPTCHA
    
    -   Effective for Layer 7 requests.
        
    -   Requires the visitor to complete the slider CAPTCHA challenge before they can access your website. Bot traffic from non-browser clients is blocked.
        

## **Availability**

**Item**

**Entrance**

**Pro**

**Premium**

**Enterprise**

Number of IP access rules supported

50

200

400

400
