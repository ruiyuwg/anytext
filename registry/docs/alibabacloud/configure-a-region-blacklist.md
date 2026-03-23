Web Application Firewall (WAF) provides the region blacklist module. The module can identify the source regions of requests. You can configure the module to block or allow requests from the specified regions. This way, you can block malicious requests by region.

## Prerequisites

-   Web Application Firewall (WAF) is enabled. For more information, see [Getting started with WAF (new edition)](/help/en/edge-security-acceleration/dcdn/user-guide/getting-started-with-waf#section-0rx-nah-dq9).
    
-   The domain name that you want to protect is added to WAF. For more information, see [Add a domain name for protection](/help/en/edge-security-acceleration/dcdn/user-guide/getting-started-with-waf#section-mk6-v01-g5f).
    

## Create a region blacklist-based protection policy

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, choose **WAF** > **Protection Policies**.
    
3.  On the **Protection Policies** page, click **Create Policy**.
    
4.  On the **Create Policy** page, configure the parameters. The following table describes the parameters.
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    **Policy Information**
    
    **Policy Type**
    
    Select **Region Blacklist**.
    
    **Policy Name**
    
    The name of the protection policy. The name can be up to 64 characters in length and can contain letters, digits, and underscores (\_).
    
    **Make Default**
    
    Specifies whether the current policy is the default policy of the current policy type.
    
    **Note**
    
    -   You can specify only one default policy for each policy type. After you specify a default policy, you cannot change the default policy.
        
    -   If you have specified a default policy for the current policy type, this switch is unavailable.
        
    
    **Rule Information**
    
    **Regions in Chinese Mainland**
    
    Select a region in the Chinese mainland that you want to block.
    
    **Regions Outside Chinese Mainland**
    
    Select a region outside the Chinese mainland that you want to block.
    
    **Action**
    
    Select the action that you want WAF to perform when a request matches a rule. Valid values:
    
    -   Block: blocks requests that match the rule and returns a block page to the client.
        
    -   Monitor: does not block the request that matches the rule.
        
    
    In Monitor mode, you can view the protection performance of the rule and check whether a rule blocks normal requests. Then, you can determine whether to set the Action parameter to Block.
    
    **Protected Domain Names**
    
    **Protected Domain Names**
    
    The domain names that you want to associate with the current protection policy.
    
    **Note**
    
    You can associate a protected domain name with only one protection policy of the same policy type.
    
    If the domain name is associated with another protection policy of the same type, the domain name is associated with the current policy after you configure the current policy for the domain name.
    
5.  Click **Create Policy**.
    
    By default, the protection policy that you created is enabled.
    

## **Related API operations**

-   [CreateDcdnWafPolicy](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-createdcdnwafpolicy)
    
-   [BatchCreateDcdnWafRules](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-batchcreatedcdnwafrules)
    
-   [DescribeDcdnWafPolicies](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-describedcdnwafpolicies)
    
-   [DescribeDcdnWafDefaultRules](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-describedcdnwafdefaultrules)
    
-   [DescribeDcdnWafPolicies](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-describedcdnwafpolicies)
    
-   [DescribeDcdnWafPolicyValidDomains](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-describedcdnwafpolicyvaliddomains)
