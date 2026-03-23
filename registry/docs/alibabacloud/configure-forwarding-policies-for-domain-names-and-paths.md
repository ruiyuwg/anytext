Global Accelerator (GA) listeners support domain name-based and path-based forwarding rules. This topic describes how to configure domain name-based and path-based forwarding conditions. This topic also describes how to configure paths for rewrites and redirects.

## Configure domain names in forwarding conditions

You can specify a specific domain name, a wildcard domain name, or a regular expression as the forwarding condition in a domain name-based forwarding rule. For more information about how to add a forwarding rule, see [Add a forwarding rule](/help/en/ga/user-guide/create-and-manage-forwarding-rules#section-axu-dkq-9lh).

**Match type**

**Description**

Exact match and wildcard match

-   **Match conditions**
    
    -   Exact match: The requested domain name must be the same as the specified domain name.
        
    -   Wildcard match: The requested domain name must match the wildcard pattern of the specified domain name.
        
-   **Requirements**
    
    The domain name must be 3 to 128 characters in length and can contain only letters, digits, `hyphens (-), and periods (.)`. You can use asterisks (`*`) and question marks (`?`) as wildcard characters.
    
-   **Examples**
    
    Requested domain name: www.example.com
    
    -   Exact match: matches only if `www.example.com` is specified in the forwarding rule.
        
    -   Wildcard match: matches if `*.example.com` or `www.example.*` is specified in the forwarding rule.
        
    

Regular expression match (case-insensitive)

-   **Match conditions**
    
    The requested domain name must match the specified regular expression.
    
-   **Requirements**
    
    The domain name must be 3 to 128 characters in length and can contain only letters, digits, and the following special characters: `. - ? = ~ _ + / \ ^ * ! $ & | ( ) [ ]`
    
-   **Examples**
    
    Requested domain name: www.Example.com
    
    Matches if `^www.example.com$` is specified in the forwarding rule.
    

## Configure paths in forwarding conditions

You can specify a specific path, a wildcard path, or a regular expression as the match condition in a path-based forwarding rule. For more information about how to add a forwarding rule, see [Add a forwarding rule](/help/en/ga/user-guide/create-and-manage-forwarding-rules#section-axu-dkq-9lh).

**Match type**

**Description**

Exact match and wildcard match

-   **Match conditions**
    
    -   Exact match: The requested path must be the same as the specified path.
        
    -   Wildcard match: The requested path must match the wildcard pattern of the specified path.
        
-   **Requirements**
    
    The path must be 1 to 128 characters in length and must start with a hyphen (`/`). The path can contain only letters, digits, and the following special characters: `$ - _ . + / & ~ @ : '`. You can use asterisks (`*`) and question marks (`?`) as wildcard characters.
    
-   **Examples**
    
    Requested path: /example/text
    
    -   Exact match: matches only if `/example/text` is specified in the forwarding rule.
        
    -   Wildcard match: matches if `/example/*` is specified in the forwarding rule.
        
    
    **Note**
    
    The path matching rules of Global Accelerator are different from the rules of NGINX. Global Accelerator does not support the longest prefix match rule.
    
    For example, a common path configured for NGINX is `location /abc`. The longest prefix match rule is used to match the path. To perform longest prefix match, Global Accelerator uses wildcard characters. You can configure `/abc/*` in Global Accelerator to perform longest prefix match.
    

Regular expression match (case-sensitive)

-   **Match conditions**
    
    The requested path matches the specified regular expression.
    
-   **Requirements**
    
    The regular expression can contain letters, digits, and the following special characters: `. - _ / \ = ? ~ ^ * $ : ( ) [ ] + | " ' @`
    
-   **Examples**
    
    Requested path: `/sys/aaa/HOST`
    
    Matches if `^/sys/(.*)/HOST$` is specified in the forwarding rule.
    

## Configure paths for rewrites and redirects

If you specify a regular expression as the match condition in a rewrite or redirect rule, the regular expression is overwritten by the path to which requests are redirected or rewritten. For more information about how to add a forwarding rule, see [Add a forwarding rule](/help/en/ga/user-guide/create-and-manage-forwarding-rules#section-axu-dkq-9lh).

**Note**

For more information about how to configure regular expressions in path-based forwarding conditions, see the [Configure paths in forwarding conditions](#section-v6k-rn7-27t) section of this topic.

-   **Precautions**
    
    -   The number of capture groups, defined by parentheses (`( )`), must be the same as the number of variables, defined by dollar signs (`$`), in the path to which requests are rewritten or redirected.
        
    -   You can use up to three variables (`${1}`, `${2}`, and `${3}`) to form the path that overwrites the original path. The variables cannot be replaced with other characters.
        
-   **Procedure**
    
    1.  Path matching: The client sends a request and matches the regular expression in a path-based forwarding rule.
        
    2.  Extraction and replacement: The content extracted from the capture groups, defined by parentheses (`( )`), are written to `${1}`, `${2}`, and `${3}`. The content is used in the path to which requests are rewritten or redirected.
        
    3.  Concatenation: The variables `${1}`, `${2}`, and `${3}` are replaced with actual values. The values are concatenated to form the actual path.
        
    
    **No.**
    
    **Step**
    
    **Example**
    
    1
    
    Configure the forwarding condition and forwarding action in the forwarding rule.
    
    -   Path in forwarding condition: `/sys/(.*)/(.*)/aaa`
        
    -   Path to which requests are rewritten or redirected: `/${1}/${2}`
        
    
    2
    
    A client request matches the path in a forwarding rule.
    
    -   Requested path: `/sys/ccc/bbb/aaa`
        
    -   Matched path: `/sys/(.*)/(.*)/aaa`
        
    
    3
    
    The system extracts values from the regular expression and replaces the variables with the values.
    
    `ccc` and `bbb` are extracted from `(.*)` in the regular expression and replace the variables ${1} and ${2} in the path to which requests are rewritten or redirected.
    
    -   `${1}` is replaced by `ccc`.
        
    -   `${2}` is replaced by `bbb`.
        
    
    4
    
    The values are concatenated to form the actual path.
    
    The path received by the backend server is `/ccc/bbb`.
    
-   **Examples**
    
    You can create forwarding rules in the GA console based on the preceding usage notes and procedure The following examples show how to configure forwarding rules.
    
    **Example 1: Configure a rule whose actions are Rewrite and Forward**
    
    ![路径-重写示例png.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485581071/p730644.png)
    
    **Parameter**
    
    **Description**
    
    **If (Matching All Conditions)**
    
    **Path**: **Regular Expression Match(Case-sensitive)**
    
    -   **Match conditions**
        
        The requested path matches the specified regular expression.
        
    -   **Requirements**
        
        The regular expression can contain letters, digits, and the following special characters: `. - _ / \ = ? ~ ^ * $ : ( ) [ ] + | " ' @`
        
    -   **Examples**
        
        Requested path: `/sys/ccc/bbb/aaa`
        
        The requested path is matched if `/sys/(.*)/(.*)/aaa` is specified as the forwarding condition.
        
    
    **Then**
    
    **Rewrite**
    
    -   **Domain Name**: `${host}`
        
    -   **Path**: `/${1}/${2}`
        
    -   **Search**: `${query}`
        
    
    **Forward**
    
    Select a virtual endpoint group from the drop-down list.
    
    **Example 2: Configure a forwarding rule whose action is Redirect**
    
    ![路径-重定向示例 .png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3485581071/p730770.png)
    
    **Parameter**
    
    **Description**
    
    **If (Matching All Conditions)**
    
    **Path**: **Regular Expression Matching (Case-sensitive)**
    
    -   **Match conditions**
        
        The requested path matches the specified regular expression.
        
    -   **Requirements**
        
        The regular expression can contain letters, digits, and the following special characters: `. - _ / \ = ? ~ ^ * $ : ( ) [ ] + | " ' @`
        
    -   **Examples**
        
        Requested path: `/sys/ccc/bbb/aaa`
        
        The requested path is matched if `/sys/(.*)/(.*)/aaa` is specified as the forwarding condition.
        
    
    **Then**
    
    **Redirect**
    
    -   **Protocol**: `$protocol`
        
    -   **Hosts**: `${host}`
        
    -   **Port**: `${port}`
        
    -   **Path**: `/${1}/${2}`
        
    -   **Search**: `${query}`
        
    -   **Status Code**: `301`
