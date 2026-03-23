Once you enable the real-time log feature, Dynamic Content Delivery Network (DCDN) starts to generate real-time logs. The tables in this topic describe the fields that you may encounter when analyzing different types of real-time logs.

**Note**

-   The tables in this topic provide an extensive number of fields available in real-time logs. To avoid unnecessary costs, we recommend that you select the log fields to ship out of DCDN based on your business requirements.
    
-   If real-time logs that you collect are of the same type, all log delivery projects share a set of fields. Field modifications that are made for a project take effect globally. For example, the domain field is selected by default for access logs. If a user removes the domain field for a project, the field is immediately removed from other delivery projects of access logs.
    

## Usage notes

-   Before you transfer Domain A from Account 1 to Account 2, you need to disable real-time log delivery for Domain A in Account 1. After Domain A is transferred to Account 2, you can enable real-time log delivery for Domain A in Account 2. If you do not perform the preceding operations, real-time logs are still delivered to Account 1. This incurs charges to Account 1.
    

## Access logs

Once you enable the access log delivery feature, DCDN starts to generate access logs. The following table describes the fields available in access log entries.

**Field**

**Description**

**Indexed by Simple Log Service**

**Used for built-in visualized analysis**

unixtime

The time when the request was initiated.

Yes

Yes

domain

The domain name to which the request was sent.

Yes

Yes

method

The request method.

Yes

Yes

scheme

The protocol over which the request was sent.

Yes

No

uri

The requested resource.

Yes

Yes

uri\_param

The request parameters.

Yes

No

client\_ip

The real IP address of the client that made the request. The first IP address in the `X-Forwarded-For` request header that is carried in the request, which is client\_ip. If the client does not use a proxy to connect to the point of presence (POP), the IP address is used by the client to connect to the POP.

Yes

Yes

proxy\_ip

The IP address of the proxy. The second IP address in the `X-Forwarded-For` request header that is carried in the request, which is proxy\_ip. If the client does not use a proxy to connect to the POP, the value of this field is `-`.

Yes

No

remote\_ip

The public IP address of the client that is connected to a DCDN point of presence (POP).

Yes

No

remote\_port

The port to which a POP sends requests over the Internet.

Yes

No

refer\_protocol

The protocol in the HTTP Referer header.

Yes

No

refer\_domain

The domain name in the HTTP Referer header.

Yes

Yes

refer\_uri

The URI in the HTTP Referer header.

Yes

No

refer\_param

The parameters in the HTTP Referer header.

Yes

No

request\_size

The request size, including the request body and the request header. Unit: bytes.

Yes

No

request\_time

The response time. Unit: milliseconds.

Yes

Yes

response\_size

The response size. Unit: bytes.

Yes

No

return\_code

The HTTP status code returned.

Yes

Yes

sent\_http\_content\_range

The value of the Range header in the response, which is configured on the origin server. Example: bytes=0-99/200.

Yes

No

server\_addr

The IP address of the POP that responded to the request.

Yes

No

server\_port

The port on the POP that responded to the request.

Yes

No

body\_bytes\_sent

The size of the request body. Unit: bytes.

Yes

No

content\_type

The type of the requested resource.

Yes

No

hit\_info

The cache hit result. The cache hit results of requests for live streaming resources or dynamic content are not included. Valid values:

-   HIT: a cache hit.
    
-   MISS: a cache miss.
    

Yes

Yes

http\_range

The value of the Range header in the request. Example: bytes=0-100.

Yes

No

user\_agent

The information about the proxy of the client.

Yes

Yes

user\_info

The information about the client.

Yes

No

uuid

The request ID.

Yes

No

via\_info

The HTTP Via header.

Yes

No

xforwordfor

The X-Forwarded-For header in the request.

Yes

No

## EdgeRoutine logs

Once you enable the EdgeRoutine log delivery feature, DCDN starts to generate EdgeRoutine logs. The following table describes the fields available in EdgeRoutine log entries.

**Field**

**Description**

**Indexed by Simple Log Service**

**Used for built-in visualized analysis**

console\_alert

The custom log printed after you call console.alert() in JavaScript code.

Yes

Yes

error\_code

The error code. **0** indicates that no error occurred.

Yes

Yes

error\_message

The error description that corresponds to error\_code.

Yes

Yes

fetch\_status

The status of the subrequest.

Yes

Yes

fetch\_uuid

The UUID of the subrequest.

Yes

Yes

http\_2xx

The number of 2xx status codes returned for subrequests.

Yes

Yes

http\_3xx

The number of 3xx status codes returned for subrequests.

Yes

Yes

http\_4xx

The number of 4xx status codes returned for subrequests.

Yes

Yes

http\_5xx

The number of 5xx status codes returned for subrequests.

Yes

Yes

http\_status\_other

The number of other status codes returned for subrequests.

Yes

Yes

host

The HOST header of the request.

Yes

Yes

in\_method

The HTTP method used by the request.

Yes

Yes

in\_path

The request path.

Yes

Yes

out\_size

The response size.

Yes

Yes

out\_status

The response status code.

Yes

Yes

code\_ver

The version number of the code.

Yes

Yes

routine\_spec

The specifications of the routine.

Yes

Yes

total\_cpu\_time\_μs

The CPU time consumed by the request. Unit: microseconds.

Yes

Yes

total\_real\_time\_ms

The time consumed to execute the request in a routine. The time includes the wait time and I/O time of subrequests. Unit: milliseconds.

Yes

Yes

uuid

The EagleTraceID of the request.

Yes

Yes

UnixTime

The timestamp of the request.

Yes

Yes

## WAF logs

Once you enable Web Application Firewall (WAF) log delivery feature, DCDN starts to generate WAF logs. The following table describes the fields available in WAF log entries.

**Field**

**Description**

**Indexed by Simple Log Service**

**Example**

unixtime

The time when the request was initiated.

Yes

1640966400

domain

The domain name to which the request was sent.

Yes

api.aliyun.com

method

The request method.

Yes

GET

scheme

The protocol over which the request was sent.

Yes

http

uri

The requested resource.

Yes

/news/search.php

uri\_param

The request parameters.

Yes

title=tm\_content%3Darticle&pid=123

content\_type

The type of the requested content.

Yes

application/x-www-form-urlencoded

matched\_host

The domain name that is protected by WAF.

Yes

\*.aliyun.com

request\_id

The request ID.

Yes

792a121e16405968501823589e

return\_code

The HTTP status code returned.

Yes

200

referer

The Referer field in the HTTP request.

Yes

http://example.com

user\_agent

The information about the proxy of the client.

Yes

Dalvik/2.1.0 (Linux; U; Android 10; Android SDK built for x86 Build/QSR1.200715.002)

x\_forwarded\_for

The X-Forwarded-For (XFF) header. This field is used to identify the originating IP address of the client that is connected to the web server by using an HTTP proxy or a load balancing service.

Yes

101.XX.XX.120

client\_ip

The originating IP address of the client.

Yes

1.XX.XX.1

final\_test

Indicates that the monitoring mode is enabled.

Yes

FALSE

cookie

The HTTP Cookie header. This field contains information about the client.

Yes

k1=v1;k2=v2

final\_action

The executed protection action.

-   block: The request is blocked by the basic web protection module.
    
-   deny: The request is blocked by modules other than the basic web protection module.
    
-   captcha: The request is verified by using a slider CAPTCHA.
    
-   js: The request is verified by using JavaScript.
    
-   Empty string: The request is not blocked. No protection rule is triggered, a whitelist rule or monitor rule is triggered, or the request is allowed after the client passes the slider CAPTCHA verification or JavaScript verification.
    

**Note**

If a request triggers multiple protection modules at the same time, the field is recorded and includes only the final action that is performed. The following actions are listed in descending order of priority: block, slider CAPTCHA verification, dynamic token-based authentication, and JavaScript verification.

Yes

block

final\_plugin

The module to which the matched protection rule belongs.

-   If final\_action is configured, this field specifies the protection module that corresponds to the final action against the request.
    
-   If final\_action is left empty, this field specifies the information about the modules of all the protection rules hit by the request. If the hit rule does not belong to the whitelist or basic web protection rule module and the module name is suffixed with "-T", the request hits a monitor rule of the module.
    

This field may have multiple values that are separated by commas (,). Valid values:

-   whitelist: The whitelist module is matched.
    
-   waf: The basic web protection module is matched.
    
-   custom\_acl: The custom rule module is matched.
    
-   ip\_blacklist: The IP blacklist module is matched.
    
-   region\_block: The region blacklist module is matched.
    
-   bot: The bot management module is matched.
    
-   anti\_scan: The scan protection module is matched.
    

Yes

-   Example 1: "waf"
    
-   Example 2: "whitelist"
    
-   Example 3: "custom\_acl"
    
-   Example 4: "custom\_acl-T"
    
-   Example 5: "custom\_acl-T,ip\_blacklist-T,waf"
    

final\_rule\_id

The ID of the matched protection rule.

-   If final\_action is configured, this field specifies only the ID of the protection rule that is applied on the request.
    
-   If final\_action is left empty, this field specifies the ID information about all protection rules hit by the request. In this case, the value of final\_rule\_id is in the following format: moduleName-protectionRuleID(-T). For a matched whitelist or basic web protection rule, this field does not contain "-T". For a matched protection rule other than a whitelist or basic web protection rule, if this field contains "-T", the rule is of the monitor type.
    

This field may have multiple values that are separated by commas (,).

Yes

-   Example 1: "200106"
    
-   Example 2: "whitelist-20010060"
    
-   Example 3: "custom\_acl-20010065"
    
-   Example 4: "custom\_acl-20010063-T"
    
-   Example 5: "custom\_acl-20010063-T,ip\_blacklist-20010066-T,waf-200106"
    

remote\_addr

The IP address of the client.

Yes

1.XX.XX.1
