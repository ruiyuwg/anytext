The rules engine allows you to follow the same syntax and logic to create and deploy various rules, such as cache rules, redirect rules, compression rules, origin rules, and Web Application Firewall (WAF) protection rules.

## **Overview**

With the rules engine in Edge Security Acceleration (ESA), you can create rules in a GUI. ESA checks whether to apply a specific configuration to incoming requests based on request parameters defined in the rules. This allows for more flexible and precise content distribution control.

## Rule priorities

-   Rules on a specific aspect (such as browser cache TTL) take precedence over the global configuration for the aspect.
    
-   If a specific aspect (such as caching) has a list of rules, the rules apply from top to bottom in sequence. To change the priority of a specific rule in the rule list, change its order in the rule list.
    

## Usage notes

-   A single rule condition cannot exceed 4 KB in size. The total size of all configuration information of a website, except for security configuration, cannot exceed 512 KB in size.
    
-   A rule condition supports a nested structure with a maximum depth of two levels. Each level supports separate logical operation settings.
    
-   A single rule condition can contain up to 20 match fields.
    

## Description of the **Apply to** parameter

When you create a rule, the following options are available for the Apply to parameter:

-   All Requests: The created rule applies to all traffic on the website.
    
-   Filtered Requests: The created rule applies only to traffic that matches the custom expression. You can select this option to accurately filter requests.
    

## Rule syntax

A rule condition consists of [expressions](#d600f6db2cn58) and a [logical operator](#f8cc70c0b6hlk).

-   Expression: used to filter requests with specific characteristics.
    
-   Logical operator: used to combine multiple expressions.
    

You can specify multiple expressions and combine them to filter requests based on your business requirements.

### Logical operators

A logical operator connects expressions in a rule condition to perform a logical operation. The following logical operators are supported:

-   and: A rule condition is matched only if all expressions in the rule condition are true.
    
-   or: A rule condition is matched if one of the expressions in the rule condition is true.
    

### Expressions

A simple expression contains parameters described in the following table.

**Parameter**

**Corresponding syntax parameter**

**Description**

**Required**

Match field

Field

The match field.

Yes

Match value

Value

The match value.

Yes

Comparison operator

Comparison\_operator

The comparison operator.

Yes

#### **Expression syntax**

-   Simple expressions
    
    -   Syntax: <field><comparison\_operator><value>
        
    -   Example: http.request.uri.path matches"/image\\.(jpg|png)$"
        
-   Compound expressions
    
    -   Definition: multiple expressions connected by logical operators
        
    -   Syntax: <expreesion><logical\_operator><expression>
        
    -   Example: http.host eq "www.example.com" and http.request.uri.path eq "/content"
        

#### **Match fields**

**Note**

-   The hostname (http.host) match field applies to SSL/TLS encryption rules and supports only the equals and does not equal operators.
    
-   Some Internet service providers (ISPs) may assign private IP addresses to clients in specific regions. In this case, POPs cannot accurately determine the country/region, IP source address, province, or ISP of the client as the received requests are sent from a private IP address. For more information, see [How do I identify private CIDR blocks?](/help/en/edge-security-acceleration/esa/support/rules-engine-faq#788b3a4a9b669)
    

**Match field**

**Description**

**Variable name in expression**

**Supported comparison operator**

**Match value**

Request Method

The method used by the request.

http.request.method

-   equals
    
-   does not equal
    
-   is in
    
-   is not in
    

Valid values:

-   GET
    
-   POST
    
-   PURGE
    
-   PUT
    
-   HEAD
    
-   OPTIONS
    
-   DELETE
    
-   PATCH
    

HTTP Version

The HTTP version used by the request.

http.request.version

Valid values:

-   HTTP/1.0
    
-   HTTP/1.1
    
-   HTTP/2.0
    
-   HTTP/3.0
    

Country/Region

The country or region to which the client IP address belongs.

ip.geoip.country

-   You can select a value from the drop-down list.
    
-   Case-insensitive.
    
-   Empty string not allowed in the match value.
    

File Name

The name of the file requested by the client.

http.request.uri.path.file\_name

-   The value cannot contain the suffix of the actual file name. Examples:
    
    -   /a/b: Specify b as the value.
        
    -   /a/b/: Specify an empty string as the value.
        
    -   /foo.tar.bz2: Specify foo.tar as the value.
        
    -   128\_128.jpg: Specify 128\_128 as the value.
        
-   Case-sensitive.
    
-   Empty string not allowed in the match value.
    

File Extension

The suffix of the name of the file requested by the client.

http.request.uri.path.extension

-   The value is the string that starts from the last period (.) in the file name. When you specify the value, do not contain the period (.) in the value. For example, specify bz2 as the value if the file name is foo.tar.bz2.
    
-   Case-sensitive.
    
-   Empty string not allowed in the match value.
    

IP Source Address

The IP address of the client.

ip.src

-   IPv4 addresses are supported. Example: `192.168.X.X`.
    
-   IPv6 addresses are supported. Example: `240e:95c:3004:2:3:0:0:XXX`.
    
-   CIDR blocks are supported. Example: 192.168.XXX.XXX/31.
    
-   Case-insensitive.
    
-   Empty string not allowed in the match value.
    

SSL/HTTPS

The type of the protocol used by the request.

http.request.scheme

-   equals
    
-   does not equal
    

Valid values:

-   http
    
-   https
    

Hostname

The hostname contained in the request.

Matching order: If hostnames are included in both the URL and the HOST header, the hostname in the request URL is used.

http.host

-   equals
    
-   does not equal
    
-   contains
    
-   does not contain
    
-   starts with
    
-   ends with
    
-   does not start with
    
-   does not end with
    
-   matches regex
    
-   does not match regex
    
-   is in
    
-   is not in
    

-   Example: \["www1.alibaba.com","www2.alibaba.com"\].
    
-   Case-insensitive.
    
-   Empty string not allowed in the match value.
    

URI

The path in the URL of the request. The value includes the request parameters.

http.request.uri

-   Example: /articles/index?section=330688&expand=comments.
    
-   Case-sensitive.
    
-   Empty string not allowed in the match value.
    

URI Full

The full Uniform Resource Identifier (URI) of the request.

http.request.full\_uri

-   Example: htt­ps://www.example.org/articles/index?section=330688&expand=comments.
    
-   Case-sensitive.
    
-   Empty string not allowed in the match value.
    

URI Path

The path in the URL of the request. The value excludes the request parameters.

http.request.uri.path

-   Example: /articles/index.
    
-   Case-sensitive.
    
-   Empty string not allowed in the match value.
    

URI Query String

All request parameters in the URL of the request.

http.request.uri.query

-   Example: section=330688&expand=comments.
    
-   Case-sensitive.
    
-   Empty string not allowed in the match value.
    

URI Query String Parameter

The specified query parameters in the URL of the request.

http.request.uri.args\["session"\]

-   You can specify a parameter name and a parameter value to match requests. For example, you can enter a parameter name session and a parameter value 330688.
    
-   Case-sensitive.
    
-   Empty string allowed in the match value.
    
    **Note**
    
    You can specify a null value only when you select one of the following operators:
    
    -   equals
        
    -   does not equal
        
    -   contains
        
    -   matches regex
        
    

Cookie

The cookie contained in the request.

http.cookie

-   equals
    
-   does not equal
    
-   contains
    
-   does not contain
    
-   matches regex
    
-   does not match regex
    

-   Example: session=330688;background=light.
    
-   Case-sensitive.
    
-   Empty string allowed in the match value.
    

User Agent

The client information contained in the request.

http.user\_agent

-   Example: curl/7.29.0.
    
-   Case-sensitive.
    
-   Empty string allowed in the match value.
    

Referer

The URL of the original web page from which the resource is requested.

http.referer

-   Example: http://refer.com.cn.
    
-   Case-insensitive.
    
-   Empty string allowed in the match value.
    

X-Forwarded-For

The value of the X-Forwarded-For header in the request.

http.x\_forwarded\_for

-   Examples: `192.168.1.X` and 192.168.2.X.
    
-   Case-sensitive.
    
-   Empty string allowed in the match value.
    

Header

The specified header in the request.

http.request.headers\["session"\]

-   You can specify a header name and a header value to match requests. For example, you can enter a header name session and a header value 330688.
    
-   Case-sensitive.
    
-   Empty string allowed in the match value.
    

Cookie Value Of

The specified cookie parameter in the request.

http.request.cookies\["session"\]

-   You can specify a cookie parameter and a cookie value to match requests. For example, you can enter a cookie parameter name session and a parameter value 330688.
    
-   Case-sensitive.
    
-   Empty string allowed in the match value.
    

ISP

The ISP to which the client IP address belongs.

ip.src.isp

-   equals
    
-   does not equal
    
-   contains
    
-   does not contain
    

Valid values:

-   China Telecom
    
-   China Mobile
    
-   China Unicom
    

IP Protocol Version

The protocol version of the client IP address.

ip.src.version

-   equals
    
-   does not equal
    

Valid values:

-   IPv4
    
-   IPv6
    

Province

The first-level administrative subdivision of a country.

ip.src.subdivision\_1\_iso\_code

-   equals
    
-   does not equal
    
-   contains
    
-   does not contain
    

-   Example: CN-ZJ (Zhengjiang, China)
    
-   Case-sensitive.
    

Load Balancer Region

The region where the load balancer resides.

ip.src.region\_code

-   equals
    
-   does not equal
    
-   contains
    
-   does not contain
    

-   Example: EAS (East Asia)
    
-   Case-sensitive.
    

Request Timestamp

The Unix timestamp that indicates when the request arrives at the POP.

http.request.timestamp.sec

-   equals
    
-   does not equal
    
-   greater than
    
-   smaller than
    
-   greater than or equal to
    
-   smaller than or equal to
    

-   Example: 1735019278 (13:47:58 on December 24, 2024)
    

#### **Comparison operators**

**Operator name**

**Operator**

**Negatable**

**Value type**

**Remarks**

equals

eq

No

string

/

does not equal

ne

No

string

/

contains

contains

Yes

string

The operator checks whether the specified string is contained.

matches regex

matches

Yes

string

The operator checks for matches by regex.

Only Business and Enterprise plans support the operator.

is in

in

Yes

array

The expression is true if any of the specified elements is matched.

-   The operator does not support wildcard characters in the value.
    
-   The operator supports up to 32 elements in the value array.
    

starts with

starts\_with

Yes

string

/

ends with

ends\_with

Yes

string

/

length less than

len-lt

No

integer

A match is found if the string length is less than the specified length condition.

length equal to

len-eq

No

integer

A match is found if the string length is equal to the specified length condition.

length greater than

len-gt

No

integer

A match is found if the string length is greater than the specified length condition.

in list

in\_list

Yes

integer

This operator is used on global lists that you create at the account level.

exists

exists

Yes

bool

The operator checks if the specified key exists in key-pair values. For example, you can use this operator in rules based on headers, cookies, and query strings.

greater than

gt

No

integer

The operator applies to rules where the values are integers.

smaller than

lt

No

integer

The operator applies to rules where the values are integers.

greater than or equal to

ge

No

integer

The operator applies to rules where the values are integers.

smaller than or equal to

le

No

integer

The operator applies to rules where the values are integers.

#### **Wildcard characters**

**Wildcard character**

**Description**

`?`

Matches one single character.

`*`

Matches any number of characters.

#### **Create expressions**

**Note**

By default, the expression builder is displayed for you to create expressions.

## Use the expression builder

The expression builder allows you to quickly create expressions in an interactive way. However, you may need to switch to the expression editor when you create complicated expressions.

For example, if you want to create an expression based on the request method, select the expression components from the drop-down lists to have the expression builder to automatically create the expression.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2579243271/p823380.png)

## Use the expression editor

The expression editor allows you to create more complicated expressions in a more flexible way.

1.  Click Edit Expression.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2579243271/p823382.png)
    
2.  In the editor, enter the expressions.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2579243271/p823383.png)
