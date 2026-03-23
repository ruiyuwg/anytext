This topic describes the log fields for different types of real-time logs at the account and site levels.

## **Account level**

### **Edge function logs**

**Category**

**Field Name**

**Data Type**

**Description**

General

AccountID

string

Account ID

ClientRequestHost

string

The `Host` of the main client request.

ClientRequestID

string

The unique identifier of the main client request.

ClientRequestMethod

string

The `HTTP Method` of the main client request.

ClientRequestPath

string

The path of the main client request.

LogTimestamp

Timestamp ISO8601

The timestamp when the log was generated. For example: `2024-01-01T00:00:00+08:00`.

SubRequest

SubRequestID

string

The unique identifier of the subrequest.

FetchStatus

string

The status returned for a request made using an edge function.

KvStatus

string

The status returned for a request made using EdgeKV.

CacheStatus

string

The cache hit status obtained for a request made using the Cache API.

SubRequest2xxCount

int

The number of subrequests with a 2xx status code.

SubRequest3xxCount

int

The number of subrequests with a 3xx status code.

SubRequest4xxCount

int

The number of subrequests with a 4xx status code.

SubRequest5xxCount

int

The number of subrequests with a 5xx status code.

SubRequestOtherCount

int

The number of subrequests with other status codes.

EdgeRoutine

CodeVersion

string

The code version number.

ConsoleLog

string

Custom logs printed by calling `console.alert()` in the JavaScript code.

CPUTime

int

The CPU time consumed by the entire request. Unit: `μs`.

Duration

int

The actual execution time of the request in the edge function, including subrequest wait time and I/O time. Unit: `ms`.

ErrorCode

int

The code execution error code. `0` indicates no error.

ErrorMessage

string

The description of the `ErrorCode`.

EventType

string

The type of event that triggered the function.

ResponseSize

int

The total size of the response. Unit: `Byte`.

ResponseStatus

int

The status code of the response.

RoutineName

string

The function name.

RoutineSpec

string

The specifications of the EdgeRoutine.

### **Edge container logs**

**Category**

**Field Name**

**Data Type**

**Description**

General

AccountID

string

Account ID

ApplicationID

string

Application ID

ContainerLog

string

The log information output by the containerized application.

DataSource

string

The collection source. Current sources include standard output and log output.

DataPath

string

The collection path. For example: `/etc/logs/access.log`.

LogTimestamp

Timestamp ISO8601

The timestamp when the log was generated. For example: `2024-01-01T00:00:00+08:00`.

Operator

string

The carrier information of the POP that generated the log. For example, `China Mobile`.

Region

string

The region information of the POP that generated the log. For example, `Beijing`.

VersionID

string

Version ID

## **Website level**

### **Access and origin fetch logs**

**Category**

**Field Name**

**Data Type**

**Description**

General

BotTag

string

Records the bot type of the client request:

-   malicious: A definite bot
    
-   normal: A verified bot
    
-   suspected: A suspected bot
    
-   unrecognized: Likely a human
    

ClientRequestID

string

The unique identifier of the client request.

EdgeServerID

string

The unique identifier of the ESA POP server that the client accessed.

EdgeServerIP

string

The IP address of the ESA POP that the client accessed.

EdgeStartTimestamp

Timestamp ISO8601

The timestamp when the ESA POP received the client request. For example: `2024-01-01T00:00:00+08:00`.

EdgeEndTimestamp

Timestamp ISO8601

The timestamp when the ESA POP finished sending the response to the client. For example: `2024-01-01T00:00:00+08:00`.

JA3Hash

string

The hash value of the client's JA3 fingerprint.

JA4Hash

string

The hash value of the client's JA4 fingerprint.

SiteName

string

Site name

SmartRoutingStatus

string

The status of the smart routing feature. `0` indicates that it is not used. `1` indicates that it is used.

TlsHash

string

The MD5 hash value that describes the SSL/TLS client fingerprint.

Client

ClientASN

string

The [Autonomous System Number (ASN)](/help/en/edge-security-acceleration/esa/support/what-is-asn) parsed from the client IP address.

ClientCountryCode

string

The ISO-3166 Alpha-2 code parsed from the client IP address.

ClientIP

string

The IP address of the client that established a connection with the ESA POP.

ClientISP

string

The carrier information parsed from the client IP address.

ClientRegionCode

string

The ISO-3166-2 code parsed from the client IP address.

ClientSSLCipher

string

The SSL encryption suite of the client.

ClientSSLProtocol

string

The SSL protocol version of the client, with `-` indicating that SSL is not used.

ClientSrcPort

int

The port of the client that established a connection with the ESA POP.

ClientXRequestedWith

string

The `X-Requested-With` request header from the client.

ClientRequest

ClientRequestBytes

int

The size of the client request. Unit: `Byte`.

ClientRequestHeaderRange

string

In a client request, the `Header` specifies the value of the `Range` field. For example: `bytes=0-100`

ClientRequestHost

string

The `Host` of the client request.

ClientRequestMethod

string

The `HTTP Method` of the client request.

ClientRequestPath

string

The path of the client request.

ClientRequestProtocol

string

The protocol of the client request.

ClientRequestReferer

string

The `Referer` of the client request.

ClientRequestQuery

string

The `Query` of the client request.

ClientRequestScheme

string

The `Scheme` of the client request.

ClientRequestURI

string

The `URI` of the client request.

ClientRequestUserAgent

string

The `User-Agent` of the client request.

Edge

EdgeCacheStatus

string

The [cache status](/help/en/edge-security-acceleration/esa/user-guide/default-cache-rule#f778f767f169b) of the request.

EdgeRequestHost

string

The `Host` information for the origin fetch from the ESA POP.

EdgeResponseBodyBytes

int

The size of the response `Body` returned from the ESA POP to the client. Unit: `Byte`.

EdgeResponseBytes

int

The size of the response returned from the ESA POP to the client. Unit: `Byte`.

EdgeResponseCompressionAlgo

string

The compression algorithm of the response from the ESA POP.

EdgeResponseCompressionRatio

float

The compression ratio of the response from the ESA POP.

EdgeResponseContentType

string

The `Content-Type` of the response from the ESA POP.

EdgeResponseStatusCode

int

The status code returned from the ESA POP to the client.

EdgeResponseTime

int

The total time from when the ESA POP receives the client request to when the last byte of the response is sent to the client. Unit: `ms`.

EdgeTimeToFirstByteMs

int

The time from when an ESA node receives a client request to when the ESA node returns the first byte of the response to the client, in `ms`.

Origin

OriginDNSResponseTimeMs

int

The time taken to receive the DNS resolution response from the origin server. `-1` indicates that no origin fetch occurred. Unit: `ms`.

OriginIP

string

The origin IP address for the back-to-origin request. A value of `-` indicates that no back-to-origin request occurred.

OriginSSLProtocol

string

The version of the SSL protocol that is used for back-to-origin requests. A value of `-` indicates that no back-to-origin request is sent.

OriginTCPHandshakeDurationMs

int

The time taken to complete the TCP handshake when requesting the origin server. `-1` indicates that no origin fetch occurred. Unit: `ms`.

OriginTLSHandshakeDurationMs

int

The time taken to complete the TLS handshake when requesting the origin server. `-1` indicates that no origin fetch occurred or the origin protocol was HTTP. Unit: `ms`.

OriginResponse

OriginResponseDurationMs

int

The time to first byte from the origin server. `-1` indicates that no origin fetch occurred. Unit: ms.

OriginResponseHTTPExpires

string

The `Expires` information in the origin server's response. A hyphen (-) indicates that no origin fetch occurred.

OriginResponseHTTPLastModified

string

The `Last-Modified` information in the origin server's response. A hyphen (-) indicates that no origin fetch occurred.

OriginResponseHeaderRange

string

The `Range` information in the origin server's response. A hyphen (-) indicates that no origin fetch occurred.

OriginResponseStatusCode

int

The status code of the origin server's response. `-1` indicates that no origin fetch occurred.

Security

SecAction

string

The final protection action performed for the request.

SecActions

string

All protection actions performed for the request.

SecRuleID

string

The ID of the final protection rule executed for the request. `-1` indicates Basic DDoS Protection.

SecRuleIDs

string

The IDs of all protection rules executed for the request. `-1` indicates Basic DDoS Protection.

SecSource

string

The final protection rule executed for the request.

SecSources

string

All protection rules executed for the request.

### **Mitigation logs**

**Category**

**Field Name**

**Data Type**

**Description**

General

Action

string

The protection action performed:

-   deny: Block
    
-   captcha: Slider challenge
    
-   captcha\_pass: Slider challenge passed
    
-   js: JavaScript Challenge
    
-   js\_pass: JavaScript Challenge passed
    
-   sigchl: Dynamic token challenge
    
-   Observe: observe
    
-   pass: Allow
    
-   Empty string: No protection action is performed.
    

ClientRequestID

string

The unique identifier of the client request.

Datetime

Timestamp ISO8601

The timestamp when the ESA POP received the client request. For example: 2024-01-01T00:00:00+08:00.

JA3Hash

string

The hash value of the client's JA3 fingerprint.

JA4Hash

string

The hash value of the client's JA4 fingerprint.

ManagedRuleType

string

The specific protection rule type corresponding to the managed rule:

-   xss: Cross-site scripting (XSS) protection rule
    
-   code\_exec: Code execution protection rule
    
-   webshell: Webshell protection rule
    
-   sqli: SQL injection protection rule
    
-   lfilei: Local file inclusion protection rule
    
-   rfilei: Remote file inclusion protection rule
    
-   crlf: CRLF injection protection rule
    
-   other: Other protection rules
    
-   vvip: Custom rule
    
-   cmdi: OS command injection rule
    
-   ssrf: SSRF rule
    
-   xxe: External entity injection rule
    
-   csrf: CSRF rule
    
-   java\_deserialization: Java deserialization rule
    
-   expression\_injection: Expression injection rule
    
-   php\_deserialization: PHP deserialization rule
    
-   logic\_flaw: Business logic flaw rule
    
-   scanner\_behavior: Scanner behavior rule
    
-   arbitrary\_file\_download: Arbitrary file download rule
    
-   protocol\_violation: Protocol violation rule
    
-   path\_traversal: Path traversal rule
    
-   dot\_net\_deserialization: .NET deserialization rule
    
-   arbitrary\_file\_uploading: Arbitrary file upload rule
    
-   arbitrary\_file\_reading: Arbitrary file read rule
    
-   Empty string: No protection rule was matched, or the executed rule is not a managed rule, so no specific protection rule type information is available.
    

RuleID

string

The ID of the matched protection rule. `-1` indicates Basic DDoS Protection.

RuleType

string

The specific protection type corresponding to the security rule:

-   schema\_validation: Schema validation for API Security
    
-   acl: Accurate access control rule intelligently delivered by Deep Learning and Protection
    
-   api\_rule: API rule for API Security
    
-   xss: Cross-site scripting (XSS) protection rule under managed rules
    
-   code\_exec: Code execution protection rule under managed rules
    
-   webshell: Webshell protection rule under managed rules
    
-   sqli: SQL injection protection rule under managed rules
    
-   lfilei: Local file inclusion protection rule under managed rules
    
-   rfilei: Remote file inclusion protection rule under managed rules
    
-   crlf: CRLF injection protection rule under managed rules
    
-   other: Other protection rules under managed rules
    
-   vvip: Custom rule under managed rules
    
-   cmdi: OS command injection rule under managed rules
    
-   ssrf: SSRF rule under managed rules
    
-   xxe: External entity injection rule under managed rules
    
-   csrf: CSRF rule under managed rules
    
-   java\_deserialization: Java deserialization rule under managed rules
    
-   expression\_injection: Expression injection rule under managed rules
    
-   php\_deserialization: PHP deserialization rule under managed rules
    
-   logic\_flaw: Business logic flaw rule under managed rules
    
-   scanner\_behavior: Scanner behavior rule under managed rules
    
-   arbitrary\_file\_download: Arbitrary file download rule under managed rules
    
-   protocol\_violation: Protocol violation rule under managed rules
    
-   path\_traversal: Path traversal rule under managed rules
    
-   dot\_net\_deserialization: .NET deserialization rule under managed rules
    
-   arbitrary\_file\_uploading: Arbitrary file upload rule under managed rules
    
-   arbitrary\_file\_reading: Arbitrary file read rule under managed rules
    
-   acl: Accurate access control rule intelligently delivered by Deep Learning and Protection
    
-   cc: Rate limiting rule intelligently delivered by Deep Learning and Protection
    
-   ip: IP blacklist rule intelligently delivered by Deep Learning and Protection
    
-   others: Other rules intelligently delivered by Deep Learning and Protection
    
-   low: The `Low` security level
    
-   medium: Specifies the `medium` security level.
    
-   high: The `High` security level
    
-   essentially\_off: Indicates the `Essentially Off` security level.
    
-   under\_attack: Specifies the `I'm Under Attack` security level.
    
-   Empty string: No related sub-protection rule type information is available.
    

Source

string

The matched protection rule:

-   api\_shield: API Security
    
-   base\_protect: Basic DDoS Protection
    
-   http\_anti\_scan: Scan protection rule
    
-   http\_auto\_ratelimit: Smart rate limiting
    
-   http\_bandwidth\_abuse\_protection: Abuse prevention
    
-   http\_bot: Bots (Advanced Mode)
    
-   http\_bot\_simple: Bots (Simple Mode)
    
-   http\_custom: Custom rule
    
-   http\_deep\_learning: Deep learning protection rule
    
-   http\_ddos: HTTP DDoS attack protection rule
    
-   http\_managed: Managed rule
    
-   http\_ratelimit: Rate limiting rule
    
-   http\_security\_level: Security level
    
-   http\_security\_level\_rule: Security rule
    
-   http\_seo: Search engine crawlers allowed by Waiting Room
    
-   http\_whitelist: Whitelist rule
    
-   ip\_access\_rule: IP access rule
    
-   Empty string: No protection rule was hit.
    

TlsHash

string

The MD5 hash value that describes the SSL/TLS client fingerprint.

Client

ClientASN

string

The [Autonomous System Number (ASN)](/help/en/edge-security-acceleration/esa/support/what-is-asn) parsed from the client IP address.

ClientCountryCode

string

The ISO-3166 Alpha-2 code parsed from the client IP address.

ClientIP

string

**Connect IP**: The IP address of the client that established a connection with the ESA POP.

ClientISP

string

The carrier information parsed from the client IP address.

ClientRequest

ClientRequestHost

string

The `Host` of the client request.

ClientRequestMethod

string

The `HTTP Method` of the client request.

ClientRequestPath

string

The path of the client request.

ClientRequestProtocol

string

The protocol of the client request.

ClientRequestReferer

string

The `Referer` of the client request.

ClientRequestQuery

string

The `Query` of the client request.

ClientRequestScheme

string

The `Scheme` of the client request.

ClientRequestURI

string

The `URI` of the client request.

ClientRequestUserAgent

string

The `User-Agent` of the client request.

Edge

EdgeResponseContentType

string

The `Content-Type` of the response from the ESA POP.

EdgeResponseStatusCode

int

The status code returned from the ESA POP to the client.

OriginResponse

OriginResponseStatusCode

int

The status code of the origin server's response. `-1` indicates that no origin fetch occurred.

### **Layer 4 proxy logs**

**Category**

**Field Name**

**Data Type**

**Description**

General

BlockRuleID

string

The ID of the rule that was hit and blocked the request. An empty value indicates that the request was not blocked.

ConnectTimeStamp

Timestamp ISO8601

The timestamp of the connection establishment. For example: `2024-01-01T00:00:00+08:00`.

DisconnetTimeStamp

Timestamp ISO8601

The timestamp of the disconnection. For example: `2024-01-01T00:00:00+08:00`.

DomainName

string

The domain name used to create the application instance.

EdgeServerIP

string

The IP address of the ESA POP that the client accessed.

IpFirewall

bool

Indicates whether the IP access rule is enabled.

LogTimeStamp

Timestamp ISO8601

The timestamp when the log was generated. For example: `2024-01-01T00:00:00+08:00`.

ProxyProtocol

string

The proxy protocol version. Valid values include `off`, `v1`, and `v2`.

SessionID

string

The globally unique stream identifier.

SiteName

string

Site name

Status

int

The status code at the end of the session.

Client

ClientASN

string

The [Autonomous System Number (ASN)](/help/en/edge-security-acceleration/esa/support/what-is-asn) parsed from the client IP address.

ClientBytes

int

The number of data bytes received from the client. Unit: `Byte`.

ClientCountryCode

string

The ISO-3166 Alpha-2 code parsed from the client IP address.

ClientIP

string

The IP address of the client that established a connection with the ESA POP.

ClientISP

string

The carrier information parsed from the client IP address.

ClientMatchedIpFirewall

string

The type of the matched IP access rule.

ClientPort

int

The client port.

ClientProto

string

The data transmission protocol of the client.

Origin

OriginBytes

int

The number of data bytes received from the origin server. Unit: `Byte`.

OriginIP

string

The IP address of the origin server.

OriginPort

int

The origin server port.

OriginProto

string

The data transmission protocol of the origin server.

### **DNS logs**

**Category**

**Field Name**

**Data Type**

**Description**

General

DestIP

string

The IP address of the name server (NS).

EDNSSubnet

string

The IP address information of the EDNS Client Subnet (ECS) forwarded by the recursive resolver.

ProcessTime

int

The processing time of the query. Unit: `μs`.

Protocol

string

The transport protocol.

QueryName

string

The name of the query.

QueryType

string

The query type.

ResponseCode

string

The response result of the query.

SiteName

string

Site name

SourceIP

string

The IP address of the local DNS (LDNS).

Timestamp

string

The timestamp when the query occurred. For example: `2024-01-01T00:00:00+08:00`.
