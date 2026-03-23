The Simple Log Service SDK for iOS collects and uploads log data from iOS applications to Simple Log Service. The SDK supports asynchronous log sending, resumable upload, dynamic parameter configuration, and multi-instance initialization.

## Prerequisites

The iOS SDK is installed. For more information, see [Install the iOS SDK](/help/en/sls/developer-reference/install-log-service-sdk-for-ios#task-2106931).

## Quick start

Initialize the SDK and call the `addLog` method to send logs.

**Important**

-   The iOS SDK supports the initialization of multiple instances. The `LogProducerConfig` and `LogProducerClient` instances must be used in pairs.
    
-   When you send logs to Simple Log Service, you must use the AccessKey pair of an Alibaba Cloud account or a Resource Access Management (RAM) user for authentication and tamper-proofing. Storing an AccessKey pair in your mobile application poses a security risk. To avoid this risk, we recommend that you use a service to directly transfer logs from mobile devices and configure the AccessKey pair. For more information, see [Build a service to upload logs from mobile devices to Simple Log Service](/help/en/sls/build-a-service-to-upload-logs-from-mobile-apps-to-log-service).
    

```
@interface ProducerExampleController ()
// Save the LogProducerConfig and LogProducerClient instances globally.
@property(nonatomic, strong) LogProducerConfig *config;
@property(nonatomic, strong) LogProducerClient *client;
@end

@implementation ProducerExampleController


// The callback function is optional. If you do not need to know whether a log is sent, you do not need to register a callback function.
// To dynamically configure an AccessKey pair, set the callback function and update the AccessKey pair when the callback function is invoked.
static void _on_log_send_done(const char * config_name, log_producer_result result, size_t log_bytes, size_t compressed_bytes, const char * req_id, const char * message, const unsigned char * raw_buffer, void * userparams) {
    if (result == LOG_PRODUCER_OK) {
        NSString *success = [NSString stringWithFormat:@"send success, config : %s, result : %d, log bytes : %d, compressed bytes : %d, request id : %s", config_name, (result), (int)log_bytes, (int)compressed_bytes, req_id];
        SLSLogV("%@", success);
    } else {
        NSString *fail = [NSString stringWithFormat:@"send fail   , config : %s, result : %d, log bytes : %d, compressed bytes : %d, request id : %s, error message : %s", config_name, (result), (int)log_bytes, (int)compressed_bytes, req_id, message];
        SLSLogV("%@", fail);
    }
}

- (void) initLogProducer {
    // The endpoint of Simple Log Service. The endpoint must start with https:// or http://.
    NSString *endpoint = @"your endpoint";
    NSString *project = @"your project";
    NSString *logstore = @"your logstore";

    _config = [[LogProducerConfig alloc] initWithEndpoint:endpoint
                                                  project:project
                                                 logstore:logstore
    ];

    // Set the log topic.
    [_config SetTopic:@"example_topic"];
    // Set tags. The tags are attached to each log.
    [_config AddTag:@"example" value:@"example_tag"];
    // Specifies whether to discard expired logs. A value of 0 indicates that expired logs are not discarded and the log time is updated to the current time. A value of 1 indicates that expired logs are discarded. Default value: 0.
    [_config SetDropDelayLog:1];
    // Specifies whether to discard logs for which authentication failed. A value of 0 indicates that the logs are not discarded. A value of 1 indicates that the logs are discarded. Default value: 0.
    [_config SetDropUnauthorizedLog:0];    

    // If you want to check whether a log is sent, pass a callback function as the second parameter.
    _client = [[LogProducerClient alloc] initWithLogProducerConfig:_config callback:_on_log_send_done];
}

// Request the AccessKey pair information.
- (void) requestAccessKey {
    // We recommend that you first use the service for direct log transfer from mobile devices to configure the AccessKey pair information.
    // ...

    // After you obtain the AccessKey pair information, update the information.
    [self updateAccessKey:accessKeyId accessKeySecret:accessKeySecret securityToken:securityToken];
}

// Update the AccessKey pair information.
- (void) updateAccessKey:(NSString *)accessKeyId accessKeySecret:(NSString *)accessKeySecret securityToken:(NSString *)securityToken {
    
    // If you obtain an AccessKey pair using Security Token Service (STS), the AccessKey pair contains a security token. In this case, you must update the AccessKey pair in the following way.
    if (securityToken.length > 0) {
        if (accessKeyId.length > 0 && accessKeySecret.length > 0) {
            [_config ResetSecurityToken:accessKeyId
                        accessKeySecret:accessKeySecret
                          securityToken:securityToken
            ];
        }
    } else {
        // If you do not obtain an AccessKey pair using STS, update the AccessKey pair in the following way.
        if (accessKeyId.length > 0 && accessKeySecret.length > 0) {
            [_config setAccessKeyId: accessKeyId];
            [_config setAccessKeySecret: accessKeySecret];
        }
    }
}
// Report a log.
- (void) addLog {
    Log *log = [Log log];
    // You can adjust the fields to report as needed.
    [log putContent:@"content_key_1" intValue:123456];
    [log putContent:@"content_key_2" floatValue:23.34f];
    [log putContent:@"content_key_3" value:@"Chinese characters"];
    
    [_client AddLog:log];
}
@end
```

## **Advanced usage**

### **Dynamically configure parameters**

The iOS SDK supports dynamic configuration of parameters such as ProjectName, Logstore, Endpoint, and AccessKey. For more information about how to obtain an endpoint, see [Endpoints](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint). For more information about how to obtain an AccessKey pair, see [AccessKey pair](/help/en/sls/developer-reference/access-key).

-   Dynamically configure Endpoint, ProjectName, and Logstore.
    
    ```
    // You can configure the Endpoint, ProjectName, and Logstore parameters independently or together.
    // Update the endpoint.
    [_config setEndpoint:@"your new-endpoint"];
    // Update ProjectName.
    [_config setProject:@"your new-project"];
    // Update the Logstore.
    [_config setLogstore:@"your new-logstore"];
    ```
    
-   Dynamically configure an AccessKey pair.
    
    When you dynamically configure an AccessKey pair, we recommend that you use it with a callback function.
    
    ```
    // If you have initialized the callback function when you initialize LogProducerClient, you can ignore the following code.
    static void _on_log_send_done(const char * config_name, log_producer_result result, size_t log_bytes, size_t compressed_bytes, const char * req_id, const char * message, const unsigned char * raw_buffer, void * userparams) {
        if (LOG_PRODUCER_SEND_UNAUTHORIZED == result || LOG_PRODUCER_PARAMETERS_INVALID) {
            [selfClzz requestAccessKey]; // A reference to the current class instance, captured for use within the C-style callback function.
        }
    }
    
    // If you want to check whether a log is sent, pass a callback function as the second parameter.
    _client = [[LogProducerClient alloc] initWithLogProducerConfig:_config callback:_on_log_send_done];
    
    // Request the AccessKey pair information.
    - (void) requestAccessKey {
        // We recommend that you first use the service for direct log transfer from mobile devices to configure the AccessKey pair information.
        // ...
    
        // After you obtain the AccessKey pair information, update the information.
        [self updateAccessKey:accessKeyId accessKeySecret:accessKeySecret securityToken:securityToken];
    }
    
    // Update the AccessKey pair information.
    - (void) updateAccessKey:(NSString *)accessKeyId accessKeySecret:(NSString *)accessKeySecret securityToken:(NSString *)securityToken {
        
        // If you obtain an AccessKey pair using STS, the AccessKey pair contains a security token. In this case, you must update the AccessKey pair in the following way.
        if (securityToken.length > 0) {
            if (accessKeyId.length > 0 && accessKeySecret.length > 0) {
                [_config ResetSecurityToken:accessKeyId
                            accessKeySecret:accessKeySecret
                              securityToken:securityToken
                ];
            }
        } else {
            // If you do not obtain an AccessKey pair using STS, update the AccessKey pair in the following way.
            if (accessKeyId.length > 0 && accessKeySecret.length > 0) {
                [_config setAccessKeyId: accessKeyId];
                [_config setAccessKeySecret: accessKeySecret];
            }
        }
    }
    ```
    
-   Dynamically configure source, topic, and tag.
    
    **Important**
    
    These settings apply globally and affect all subsequent logs, including any logs currently in the retry buffer. If your business logic requires tracking specific log types with these parameters, this global behavior may lead to unexpected results. Add a custom field to each log to identify its type.
    
    ```
    // Set the log topic.
    [_config SetTopic:@"your new-topic"];
    // Set the log source.
    [_config SetSource:@"your new-source"];
    // Set tags. The tags are attached to each log.
    [_config AddTag:@"test" value:@"your new-tag"];
    ```
    

### **Resumable upload**

The iOS SDK supports resumable upload. When this feature is enabled, logs submitted using the `addLog` method are first persisted to a local binary log (binlog) file. The local data is deleted only after the logs are successfully sent. This ensures at-least-once semantics for log uploads.

To implement resumable upload, add the following code during SDK initialization.

**Important**

-   When you initialize multiple LogProducerConfig instances, you must provide a unique file path to the `LogProducerConfig` class's `setPersistentFilePath` method for each instance.
    
-   If your application has multiple processes and resumable upload is enabled, initialize the SDK only in the main process. If child processes also need to collect data, ensure that the file path provided to the `SetPersistentFilePath` method is unique. Otherwise, log data may become disordered or lost.
    
-   Be aware of potential issues with repeated LogProducerConfig initialization that are caused by multiple threads.
    

```
- (void) initLogProducer {
    // A value of 1 enables resumable upload. A value of 0 disables this feature. Default value: 0.
    [_config SetPersistent:1];
    
    // The name of the persistence file. Make sure that the folder in which the file is stored is created.
    NSArray  *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *Path = [[paths lastObject] stringByAppendingString:@"/log.dat"];
    [_config SetPersistentFilePath:Path];
    // The number of persistent files that can be rolled over. Set this parameter to 10.
    [_config SetPersistentMaxFileCount:10];
    // The size of each persistent file in bytes. The value is calculated using the formula: N × 1024 × 1024. Set N to a value from 1 to 10.
    [_config SetPersistentMaxFileSize:N*1024*1024];
    // The maximum number of logs that can be cached locally. Do not set this parameter to a value greater than 1,048,576. Default value: 65,536.
    [_config SetPersistentMaxLogCount:65536];
}
```

## **Configuration reference**

All configuration parameters are provided by the LogProducerConfig class. The following table describes these parameters.

**Parameter**

Data type

**Description**

SetTopic

String

Set the value of the topic field. The default value is an empty string.

AddTag

String

Set a tag in the `tag:xxxx` format. The default value is an empty string.

SetSource

String

Set the value of the source field. Default value: iOS.

SetPacketLogBytes

Int

The maximum size of a cached log package. If the limit is exceeded, the logs are sent immediately.

Valid values: 1 to 5,242,880. Default value: 1024 × 1024. Unit: bytes.

SetPacketLogCount

Int

The maximum number of logs in a cached log package. If the limit is exceeded, the logs are sent immediately.

Valid values: 1 to 4,096. Default value: 1024.

SetPacketTimeout

Int

The timeout period for sending cached logs. If the timeout period expires, the logs are sent immediately.

Default value: 3,000. Unit: milliseconds.

SetMaxBufferLimit

Int

The maximum memory that a single Producer Client instance can use. If the limit is exceeded, the add\_log interface immediately returns a failure.

Default value: 64 × 1024 × 1024.

SetPersistent

Int

Specifies whether to enable resumable upload.

-   1: enables the feature.
    
-   0 (default): disables the feature.
    

SetPersistentFilePath

String

The name of the persistence file. Make sure that the folder in which the file is stored is created. When you configure multiple LogProducerConfig instances, make sure that the name is unique.

The default value is empty.

SetPersistentForceFlush

Int

Specifies whether to enable the force flush feature for each `AddLog` call. When enabled, the SDK immediately flushes the log buffer to the persistent file on disk.

-   1: enables the feature. This affects performance. Enable this feature with caution.
    
-   0 (default): disables the feature.
    

Enable this feature in high-reliability scenarios.

SetPersistentMaxFileCount

Int

The number of persistent files to rotate. A value of 0 means no rotation (a single file is used). Recommended value: 10. Default: 0.

SetPersistentMaxFileSize

Int

The size of each persistent file in bytes. The value is calculated using the formula: N × 1024 × 1024. Set N to a value from 1 to 10.

SetPersistentMaxLogCount

Int

The maximum number of logs that can be cached locally. Do not set this parameter to a value greater than 1,048,576. Default value: 65,536.

SetConnectTimeoutSec

Int

The connection timeout period. Default value: 10. Unit: seconds.

SetSendTimeoutSec

Int

The timeout period for sending logs. Default value: 15. Unit: seconds.

SetDestroyFlusherWaitSec

Int

The maximum wait time for the flusher thread to be destroyed. Default value: 1. Unit: second.

SetDestroySenderWaitSec

Int

The maximum wait time for the sender thread pool to be destroyed. Default value: 1. Unit: second.

SetCompressType

Int

The compression type for data upload.

-   0: no compression.
    
-   1 (default): LZ4 compression.
    

SetNtpTimeOffset

Int

The difference between the device time and the standard time. The value is calculated using the formula: Standard time - Device time. This difference usually occurs because the time of the client device is not synchronized. Default value: 0. Unit: seconds.

SetMaxLogDelayTime

Int

The difference between the log time and the local time. If the difference exceeds this value, the SDK processes the log based on the setDropDelayLog option. Unit: seconds. Default value: 7 × 24 × 3600, which is 7 days.

SetDropDelayLog

Int

Specifies whether to discard expired logs that exceed the value of setMaxLogDelayTime.

-   0: does not discard the logs and updates the log time to the current time.
    
-   1 (default): discards the logs.
    

SetDropUnauthorizedLog

Int

Specifies whether to discard logs for which authentication failed.

-   0 (default): does not discard the logs.
    
-   1: discards the logs.
    

## **Error codes**

All error codes are defined in `log_producer_result`. For more information, see the following table.

**Error code**

**Value**

**Description**

**Solution**

LOG\_PRODUCER\_OK

0

Success.

N/A.

LOG\_PRODUCER\_INVALID

1

The SDK is destroyed or invalid.

1.  Check whether the SDK is correctly initialized.
    
2.  Check whether the destroy() method is called.
    

LOG\_PRODUCER\_WRITE\_ERROR

2

A data write error occurred. The cause may be that the write traffic of the project has reached the upper limit.

Adjust the upper limit on the write traffic of the project. For more information, see [Adjust resource quotas](/help/en/sls/adjust-resource-quotas).

LOG\_PRODUCER\_DROP\_ERROR

3

The disk or memory cache is full, and logs cannot be written.

Adjust the values of the maxBufferLimit, persistentMaxLogCount, and persistentMaxFileSize parameters and retry.

LOG\_PRODUCER\_SEND\_NETWORK\_ERROR

4

A network error occurred.

Check the configurations of Endpoint, Project, and Logstore.

LOG\_PRODUCER\_SEND\_QUOTA\_ERROR

5

The write traffic of the project has reached the upper limit.

Adjust the upper limit on the write traffic of the project. For more information, see [Adjust resource quotas](/help/en/sls/adjust-resource-quotas).

LOG\_PRODUCER\_SEND\_UNAUTHORIZED

6

The AccessKey pair is expired or invalid, or the access policy is incorrectly configured.

Check the AccessKey pair.

A RAM user must have the permissions to manage Simple Log Service resources. For more information, see [Grant permissions to a RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#section-kxp-1ok-zj4).

LOG\_PRODUCER\_SEND\_SERVER\_ERROR

7

A service error occurred.

Submit a [ticket](https://smartservice.console.alibabacloud.com/console.htm) to contact technical support.

LOG\_PRODUCER\_SEND\_DISCARD\_ERROR

8

Data is discarded. This is usually because the device time is not synchronized with the server time.

The SDK automatically resends the data.

LOG\_PRODUCER\_SEND\_TIME\_ERROR

9

The time is not synchronized with the server time.

The SDK automatically fixes this issue.

LOG\_PRODUCER\_SEND\_EXIT\_BUFFERED

10

The cached data is not sent when the SDK is destroyed.

Enable resumable upload to prevent data loss.

LOG\_PRODUCER\_PARAMETERS\_INVALID

11

An error occurred in the SDK initialization parameters.

Check the configurations of parameters such as AccessKey, Endpoint, Project, and Logstore.

LOG\_PRODUCER\_PERSISTENT\_ERROR

99

Failed to write cached data to the disk.

1\. Check whether the path of the cache file is correctly configured.

2\. Check whether the cache file is full.

3\. Check whether the system disk has sufficient space.

## **FAQ**

### Why do duplicate logs exist?

The iOS SDK sends logs asynchronously. Due to network conditions, a log may fail to send and is then resent. The SDK considers a log successfully sent only when a status code of 200 is returned. This can result in duplicate logs. Use SQL statements during query and analysis to remove duplicate data.

If you experience a high log duplication rate, check for errors in the SDK initialization. The following list describes common causes and their solutions.

-   Incorrect configuration for resumable upload
    
    Check whether the file path provided to the `SetPersistentFilePath` method is globally unique.
    
-   Repeated SDK initialization
    
    -   A common cause of repeated SDK initialization is an incorrect implementation of the singleton instance or the failure to use a singleton pattern for SDK initialization. Initialize the SDK as shown in the following example.
        
        ```
        // AliyunLogHelper.h
        @interface AliyunLogHelper : NSObject
        + (instancetype)sharedInstance;
        - (void) addLog:(Log *)log;
        @end
        
        
        // AliyunLogHelper.m
        @interface AliyunLogHelper ()
        @property(nonatomic, strong) LogProducerConfig *config;
        @property(nonatomic, strong) LogProducerClient *client;
        @end
        
        @implementation AliyunLogHelper
        
        + (instancetype)sharedInstance {
            static AliyunLogHelper *sharedInstance = nil;
            static dispatch_once_t onceToken;
            dispatch_once(&onceToken, ^{
                sharedInstance = [[self alloc] init];
            });
            return sharedInstance;
        }
        
        - (instancetype)init {
            self = [super init];
            if (self) {
                [self initLogProducer];
            }
            return self;
        }
        
        - (void) initLogProducer {
            // Replace the following code with your initialization code.
            _config = [[LogProducerConfig alloc] initWithEndpoint:@""
                                                          project:@""
                                                         logstore:@""
                                                      accessKeyID:@""
                                                  accessKeySecret:@""
                                                    securityToken:@""
            ];
        
            _client = [[LogProducerClient alloc] initWithLogProducerConfig:_config callback:_on_log_send_done];
        }
        
        - (void) addLog:(Log *)log {
            if (nil == log) {
                return;
            }
        
            [_client AddLog:log];
        }
        
        @end
        ```
        
    -   Another cause of repeated SDK initialization is the use of multiple processes. Initialize the SDK only in the main process. If you must initialize the SDK in different processes, provide a unique value to `SetPersistentFilePath` for each process.
        
-   Configuration optimization for weak network environments
    
    If your application is used in an environment with a weak network connection, we recommend that you optimize the SDK configuration parameters as shown in the following example.
    
    ```
    // Initialize the SDK.
    - (void) initProducer() {
        // Adjust the timeout periods for HTTP connections and sending to reduce the log duplication rate.
        // You can adjust the specific timeout periods as needed.
        [_config SetConnectTimeoutSec:20];
        [_config SetSendTimeoutSec:20];
      
        // Other initialization parameters.
        // ...
    }
    ```
    

### **What do I do if logs are lost?**

Log sending is an asynchronous process. If the application closes before the logs are sent, the logs may be lost. Enable resumable upload. For more information, see [Resumable upload](#bd74f4f730oet).

### **What do I do if log reporting is delayed?**

The SDK sends logs asynchronously. Logs may not be sent immediately due to the network environment or specific application scenarios. If log sending is delayed on only a few devices, this is normal. Otherwise, troubleshoot the issue using the error codes in the following table.

**Error code**

**Description**

LOG\_PRODUCER\_SEND\_NETWORK\_ERROR

Check whether the Endpoint, Project, and Logstore parameters are correctly configured.

LOG\_PRODUCER\_SEND\_UNAUTHORIZED

Check whether the AccessKey pair is expired or valid, or whether the access policy is incorrectly configured.

LOG\_PRODUCER\_SEND\_QUOTA\_ERROR

The write traffic of the project has reached the upper limit. Adjust the upper limit on the write traffic of the project. For more information, see [Adjust resource quotas](/help/en/sls/adjust-resource-quotas).

### **Does the iOS SDK support DNS pre-resolution and cache policies?**

Yes. The following example shows how to use the iOS SDK with the HTTPDNS SDK to implement DNS pre-resolution and cache policies.

> Note: If the Simple Log Service endpoint uses an HTTPS domain name, you must refer to Solutions for HTTPS and SNI scenarios.

1.  Implement a custom NSURLProtocol.
    
    ```
    #import <Foundation/Foundation.h>
    #import "HttpDnsNSURLProtocolImpl.h"
    #import <arpa/inet.h>
    #import <zlib.h>
    #import <objc/runtime.h>
    
    static NSString *const hasBeenInterceptedCustomLabelKey = @"HttpDnsHttpMessagePropertyKey";
    static NSString *const kAnchorAlreadyAdded = @"AnchorAlreadyAdded";
    
    @interface HttpDnsNSURLProtocolImpl () <NSStreamDelegate>
    
    @property (strong, readwrite, nonatomic) NSMutableURLRequest *curRequest;
    @property (strong, readwrite, nonatomic) NSRunLoop *curRunLoop;
    @property (strong, readwrite, nonatomic) NSInputStream *inputStream;
    @property (nonatomic, assign) BOOL responseIsHandle;
    @property (assign, nonatomic) z_stream gzipStream;
    
    @end
    
    @implementation HttpDnsNSURLProtocolImpl
    
    - (instancetype)initWithRequest:(NSURLRequest *)request cachedResponse:(nullable NSCachedURLResponse *)cachedResponse client:(nullable id <NSURLProtocolClient>)client {
      self = [super initWithRequest:request cachedResponse:cachedResponse client:client];
      if (self) {
        _gzipStream.zalloc = Z_NULL;
        _gzipStream.zfree = Z_NULL;
        if (inflateInit2(&_gzipStream, 16 + MAX_WBITS) != Z_OK) {
          [self.client URLProtocol:self didFailWithError:[[NSError alloc] initWithDomain:@"gzip initialize fail" code:-1 userInfo:nil]];
        }
      }
      return self;
    }
    
    /**
     *  Specifies whether to intercept and process the specified request.
     *
     *  @param request The specified request.
     *  @return Returns YES to intercept and process the request, or NO to not intercept the request.
     */
    + (BOOL)canInitWithRequest:(NSURLRequest *)request {
      if([[request.URL absoluteString] isEqual:@"about:blank"]) {
        return NO;
      }
    
      // Prevents infinite loops. A request may be re-initiated during interception. If this is not handled, an infinite loop occurs.
      if ([NSURLProtocol propertyForKey:hasBeenInterceptedCustomLabelKey inRequest:request]) {
        return NO;
      }
    
      NSString * url = request.URL.absoluteString;
      NSString * domain = request.URL.host;
    
      // Intercept only HTTPS requests.
      if (![url hasPrefix:@"https"]) {
        return NO;
      }
    
      // You can add more conditions as needed, such as configuring a host array to intercept only the hosts in the array.
    
      // Intercept only requests whose hosts are replaced with IP addresses.
      if (![self isPlainIpAddress:domain]) {
        return NO;
      }
      return YES;
    }
    
    + (BOOL)isPlainIpAddress:(NSString *)hostStr {
      if (!hostStr) {
        return NO;
      }
    
      // Checks whether the address is an IPv4 address.
      const char *utf8 = [hostStr UTF8String];
      int success = 0;
      struct in_addr dst;
      success = inet_pton(AF_INET, utf8, &dst);
      if (success == 1) {
        return YES;
      }
    
      // Checks whether the address is an IPv6 address.
      struct in6_addr dst6;
      success = inet_pton(AF_INET6, utf8, &dst6);
      if (success == 1) {
        return YES;
      }
    
      return NO;
    }
    
    // To redirect the request or add headers, perform the operations in this method.
    + (NSURLRequest *)canonicalRequestForRequest:(NSURLRequest *)request {
      return request;
    }
    
    // Starts to load the request.
    - (void)startLoading {
      NSMutableURLRequest *request = [self.request mutableCopy];
      // Indicates that the request has been processed. This prevents infinite loops.
      [NSURLProtocol setProperty:@(YES) forKey:hasBeenInterceptedCustomLabelKey inRequest:request];
      self.curRequest = [self createNewRequest:request];
      [self startRequest];
    }
    
    - (NSString *)cookieForURL:(NSURL *)URL {
      NSHTTPCookieStorage *cookieStorage = [NSHTTPCookieStorage sharedHTTPCookieStorage];
      NSMutableArray *cookieList = [NSMutableArray array];
      for (NSHTTPCookie *cookie in [cookieStorage cookies]) {
        if (![self p_checkCookie:cookie URL:URL]) {
          continue;
        }
        [cookieList addObject:cookie];
      }
    
      if (cookieList.count > 0) {
        NSDictionary *cookieDic = [NSHTTPCookie requestHeaderFieldsWithCookies:cookieList];
        if ([cookieDic objectForKey:@"Cookie"]) {
          return cookieDic[@"Cookie"];
        }
      }
      return nil;
    }
    
    
    - (BOOL)p_checkCookie:(NSHTTPCookie *)cookie URL:(NSURL *)URL {
      if (cookie.domain.length <= 0 || URL.host.length <= 0) {
        return NO;
      }
      if ([URL.host containsString:cookie.domain]) {
        return YES;
      }
      return NO;
    }
    
    - (NSMutableURLRequest *)createNewRequest:(NSURLRequest*)request {
      NSURL* originUrl = request.URL;
      NSString *cookie = [self cookieForURL:originUrl];
    
      NSMutableURLRequest* mutableRequest = [request copy];
      [mutableRequest setValue:cookie forHTTPHeaderField:@"Cookie"];
    
      return [mutableRequest copy];
    }
    
    /**
     * Cancels the request.
     */
    - (void)stopLoading {
      if (_inputStream.streamStatus == NSStreamStatusOpen) {
        [self closeStream:_inputStream];
      }
      [self.client URLProtocol:self didFailWithError:[[NSError alloc] initWithDomain:@"stop loading" code:-1 userInfo:nil]];
    }
    
    /**
     * Forwards the request using CFHTTPMessage.
     */
    - (void)startRequest {
      // The header information of the original request.
      NSDictionary *headFields = _curRequest.allHTTPHeaderFields;
      CFStringRef url = (__bridge CFStringRef) [_curRequest.URL absoluteString];
      CFURLRef requestURL = CFURLCreateWithString(kCFAllocatorDefault, url, NULL);
    
      // The method of the original request, such as GET or POST.
      CFStringRef requestMethod = (__bridge_retained CFStringRef) _curRequest.HTTPMethod;
    
      // Creates a CFHTTPMessageRef object based on the URL, method, and version of the request.
      CFHTTPMessageRef cfrequest = CFHTTPMessageCreateRequest(kCFAllocatorDefault, requestMethod, requestURL, kCFHTTPVersion1_1);
    
      // Adds the data attached to the HTTP POST request.
      CFStringRef requestBody = CFSTR("");
      CFDataRef bodyData = CFStringCreateExternalRepresentation(kCFAllocatorDefault, requestBody, kCFStringEncodingUTF8, 0);
    
      if (_curRequest.HTTPBody) {
        bodyData = (__bridge_retained CFDataRef) _curRequest.HTTPBody;
      }  else if (_curRequest.HTTPBodyStream) {
        NSData *data = [self dataWithInputStream:_curRequest.HTTPBodyStream];
        NSString *strBody = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
        NSLog(@"originStrBody: %@", strBody);
    
        CFDataRef body = (__bridge_retained CFDataRef) data;
        CFHTTPMessageSetBody(cfrequest, body);
        CFRelease(body);
      } else {
        CFHTTPMessageSetBody(cfrequest, bodyData);
      }
    
      // Copies the header information of the original request.
      for (NSString* header in headFields) {
        CFStringRef requestHeader = (__bridge CFStringRef) header;
        CFStringRef requestHeaderValue = (__bridge CFStringRef) [headFields valueForKey:header];
        CFHTTPMessageSetHeaderFieldValue(cfrequest, requestHeader, requestHeaderValue);
      }
    
      // Creates an input stream for the CFHTTPMessage object.
      #pragma clang diagnostic push
      #pragma clang diagnostic ignored "-Wdeprecated-declarations"
      CFReadStreamRef readStream = CFReadStreamCreateForHTTPRequest(kCFAllocatorDefault, cfrequest);
      #pragma clang diagnostic pop
      self.inputStream = (__bridge_transfer NSInputStream *) readStream;
    
      // Sets the Server Name Indication (SNI) host information. This is a key step.
      NSString *host = [_curRequest.allHTTPHeaderFields objectForKey:@"host"];
      if (!host) {
        host = _curRequest.URL.host;
      }
    
      [_inputStream setProperty:NSStreamSocketSecurityLevelNegotiatedSSL forKey:NSStreamSocketSecurityLevelKey];
      NSDictionary *sslProperties = [[NSDictionary alloc] initWithObjectsAndKeys: host, (__bridge id) kCFStreamSSLPeerName, nil];
      [_inputStream setProperty:sslProperties forKey:(__bridge_transfer NSString *) kCFStreamPropertySSLSettings];
      [_inputStream setDelegate:self];
    
      if (!_curRunLoop) {
        // Saves the runloop of the current thread. This is critical for redirected requests.
        self.curRunLoop = [NSRunLoop currentRunLoop];
      }
      // Adds the request to the event queue of the current runloop.
      [_inputStream scheduleInRunLoop:_curRunLoop forMode:NSRunLoopCommonModes];
      [_inputStream open];
    
      CFRelease(cfrequest);
      CFRelease(requestURL);
      cfrequest = NULL;
      CFRelease(bodyData);
      CFRelease(requestBody);
      CFRelease(requestMethod);
    }
    
    - (NSData*)dataWithInputStream:(NSInputStream*)stream {
      NSMutableData *data = [NSMutableData data];
      [stream open];
      NSInteger result;
      uint8_t buffer[1024];
    
      while ((result = [stream read:buffer maxLength:1024]) != 0) {
        if (result > 0) {
          // buffer contains result bytes of data to be handled
          [data appendBytes:buffer length:result];
        } else if (result < 0) {
          // The stream had an error. You can get an NSError object using [iStream streamError]
          data = nil;
          break;
        }
      }
      [stream close];
      return data;
    }
    
    #pragma mark - NSStreamDelegate
    /**
     * The callback function after the input stream receives the complete header.
     */
    - (void)stream:(NSStream *)aStream handleEvent:(NSStreamEvent)eventCode {
      if (eventCode == NSStreamEventHasBytesAvailable) {
        CFReadStreamRef readStream = (__bridge_retained CFReadStreamRef) aStream;
        #pragma clang diagnostic push
        #pragma clang diagnostic ignored "-Wdeprecated-declarations"
        CFHTTPMessageRef message = (CFHTTPMessageRef) CFReadStreamCopyProperty(readStream, kCFStreamPropertyHTTPResponseHeader);
        #pragma clang diagnostic pop
        if (CFHTTPMessageIsHeaderComplete(message)) {
          NSInputStream *inputstream = (NSInputStream *) aStream;
          NSNumber *alreadyAdded = objc_getAssociatedObject(aStream, (__bridge const void *)(kAnchorAlreadyAdded));
          NSDictionary *headDict = (__bridge NSDictionary *) (CFHTTPMessageCopyAllHeaderFields(message));
    
          if (!alreadyAdded || ![alreadyAdded boolValue]) {
            objc_setAssociatedObject(aStream, (__bridge const void *)(kAnchorAlreadyAdded), [NSNumber numberWithBool:YES], OBJC_ASSOCIATION_COPY);
            // Notifies the client that the response is received. This notification is sent only once.
    
            CFStringRef httpVersion = CFHTTPMessageCopyVersion(message);
            // Obtains the status code from the response header.
            CFIndex statusCode = CFHTTPMessageGetResponseStatusCode(message);
    
            if (!self.responseIsHandle) {
              NSHTTPURLResponse *response = [[NSHTTPURLResponse alloc] initWithURL:_curRequest.URL statusCode:statusCode
                                                       HTTPVersion:(__bridge NSString *) httpVersion headerFields:headDict];
              [self.client URLProtocol:self didReceiveResponse:response cacheStoragePolicy:NSURLCacheStorageNotAllowed];
              self.responseIsHandle = YES;
            }
    
            // Verifies the certificate.
            SecTrustRef trust = (__bridge SecTrustRef) [aStream propertyForKey:(__bridge NSString *) kCFStreamPropertySSLPeerTrust];
            SecTrustResultType res = kSecTrustResultInvalid;
            NSMutableArray *policies = [NSMutableArray array];
            NSString *domain = [[_curRequest allHTTPHeaderFields] valueForKey:@"host"];
            if (domain) {
              [policies addObject:(__bridge_transfer id) SecPolicyCreateSSL(true, (__bridge CFStringRef) domain)];
            } else {
              [policies addObject:(__bridge_transfer id) SecPolicyCreateBasicX509()];
            }
    
            // Binds the verification policy to the server certificate.
            SecTrustSetPolicies(trust, (__bridge CFArrayRef) policies);
            if (SecTrustEvaluate(trust, &res) != errSecSuccess) {
              [self closeStream:aStream];
              [self.client URLProtocol:self didFailWithError:[[NSError alloc] initWithDomain:@"can not evaluate the server trust" code:-1 userInfo:nil]];
              return;
            }
            if (res != kSecTrustResultProceed && res != kSecTrustResultUnspecified) {
              // If the certificate fails to be verified, close the input stream.
              [self closeStream:aStream];
              [self.client URLProtocol:self didFailWithError:[[NSError alloc] initWithDomain:@"fail to evaluate the server trust" code:-1 userInfo:nil]];
            } else {
              // The certificate is verified.
              if (statusCode >= 300 && statusCode < 400) {
                // Handles the redirection error code.
                [self closeStream:aStream];
                [self handleRedirect:message];
              } else {
                NSError *error = nil;
                NSData *data = [self readDataFromInputStream:inputstream headerDict:headDict stream:aStream error:&error];
                if (error) {
                  [self.client URLProtocol:self didFailWithError:error];
                } else {
                  [self.client URLProtocol:self didLoadData:data];
                }
              }
            }
          } else {
            NSError *error = nil;
            NSData *data = [self readDataFromInputStream:inputstream headerDict:headDict stream:aStream error:&error];
            if (error) {
              [self.client URLProtocol:self didFailWithError:error];
            } else {
              [self.client URLProtocol:self didLoadData:data];
            }
          }
          CFRelease((CFReadStreamRef)inputstream);
          CFRelease(message);
        }
      } else if (eventCode == NSStreamEventErrorOccurred) {
        [self closeStream:aStream];
        inflateEnd(&_gzipStream);
        // Notifies the client that an error occurred.
        [self.client URLProtocol:self didFailWithError:
             [[NSError alloc] initWithDomain:@"NSStreamEventErrorOccurred" code:-1 userInfo:nil]];
      } else if (eventCode == NSStreamEventEndEncountered) {
        CFReadStreamRef readStream = (__bridge_retained CFReadStreamRef) aStream;
        #pragma clang diagnostic push
        #pragma clang diagnostic ignored "-Wdeprecated-declarations"
        CFHTTPMessageRef message = (CFHTTPMessageRef) CFReadStreamCopyProperty(readStream, kCFStreamPropertyHTTPResponseHeader);
        #pragma clang diagnostic pop
        if (CFHTTPMessageIsHeaderComplete(message)) {
          NSNumber *alreadyAdded = objc_getAssociatedObject(aStream, (__bridge const void *)(kAnchorAlreadyAdded));
          NSDictionary *headDict = (__bridge NSDictionary *) (CFHTTPMessageCopyAllHeaderFields(message));
    
          if (!alreadyAdded || ![alreadyAdded boolValue]) {
            objc_setAssociatedObject(aStream, (__bridge const void *)(kAnchorAlreadyAdded), [NSNumber numberWithBool:YES], OBJC_ASSOCIATION_COPY);
            // Notifies the client that the response is received. This notification is sent only once.
    
            if (!self.responseIsHandle) {
              CFStringRef httpVersion = CFHTTPMessageCopyVersion(message);
              // Obtains the status code from the response header.
              CFIndex statusCode = CFHTTPMessageGetResponseStatusCode(message);
              NSHTTPURLResponse *response = [[NSHTTPURLResponse alloc] initWithURL:_curRequest.URL statusCode:statusCode
                                                       HTTPVersion:(__bridge NSString *) httpVersion headerFields:headDict];
              [self.client URLProtocol:self didReceiveResponse:response cacheStoragePolicy:NSURLCacheStorageNotAllowed];
              self.responseIsHandle = YES;
            }
          }
        }
    
        [self closeStream:_inputStream];
        inflateEnd(&_gzipStream);
        [self.client URLProtocolDidFinishLoading:self];
      }
    }
    
    - (NSData *)readDataFromInputStream:(NSInputStream *)inputStream headerDict:(NSDictionary *)headDict stream:(NSStream *)aStream error:(NSError **)error {
      // In case the response header is incomplete.
      UInt8 buffer[16 * 1024];
    
      NSInteger length = [inputStream read:buffer maxLength:sizeof(buffer)];
      if (length < 0) {
        *error = [[NSError alloc] initWithDomain:@"inputstream length is invalid"
                      code:-2
                      userInfo:nil];
        [aStream removeFromRunLoop:_curRunLoop forMode:NSRunLoopCommonModes];
        [aStream setDelegate:nil];
        [aStream close];
        return nil;
      }
    
      NSData *data = [[NSData alloc] initWithBytes:buffer length:length];
      if (headDict[@"Content-Encoding"] && [headDict[@"Content-Encoding"] containsString:@"gzip"]) {
        data = [self gzipUncompress:data];
        if (!data) {
          *error = [[NSError alloc] initWithDomain:@"can't read any data"
                          code:-3
                          userInfo:nil];
          return nil;
        }
      }
    
      return data;
    }
    
    - (void)closeStream:(NSStream*)stream {
      [stream removeFromRunLoop:_curRunLoop forMode:NSRunLoopCommonModes];
      [stream setDelegate:nil];
      [stream close];
    }
    
    - (void)handleRedirect:(CFHTTPMessageRef)messageRef {
      // Response header.
      CFDictionaryRef headerFieldsRef = CFHTTPMessageCopyAllHeaderFields(messageRef);
      NSDictionary *headDict = (__bridge_transfer NSDictionary *)headerFieldsRef;
      [self redirect:headDict];
    }
    
    - (void)redirect:(NSDictionary *)headDict {
      // If cookies are required for redirection, handle them.
      NSString *location = headDict[@"Location"];
      if (!location)
        location = headDict[@"location"];
      NSURL *url = [[NSURL alloc] initWithString:location];
      _curRequest.URL = url;
      if ([[_curRequest.HTTPMethod lowercaseString] isEqualToString:@"post"]) {
        // According to the RFC documentation, when a POST request is redirected, it must be converted to a GET request.
        _curRequest.HTTPMethod = @"GET";
        _curRequest.HTTPBody = nil;
      }
      [self startRequest];
    }
    
    - (NSData *)gzipUncompress:(NSData *)gzippedData {
      if ([gzippedData length] == 0) {
        return gzippedData;
      }
    
      unsigned full_length = (unsigned) [gzippedData length];
      unsigned half_length = (unsigned) [gzippedData length] / 2;
    
      NSMutableData *decompressed = [NSMutableData dataWithLength:full_length + half_length];
      BOOL done = NO;
      int status;
      _gzipStream.next_in = (Bytef *)[gzippedData bytes];
      _gzipStream.avail_in = (uInt)[gzippedData length];
      _gzipStream.total_out = 0;
    
      while (_gzipStream.avail_in != 0 && !done) {
        if (_gzipStream.total_out >= [decompressed length]) {
          [decompressed increaseLengthBy:half_length];
        }
    
        _gzipStream.next_out = (Bytef *)[decompressed mutableBytes] + _gzipStream.total_out;
        _gzipStream.avail_out = (uInt)([decompressed length] - _gzipStream.total_out);
    
        status = inflate(&_gzipStream, Z_SYNC_FLUSH);
    
        if (status == Z_STREAM_END) {
          done = YES;
        } else if (status == Z_BUF_ERROR) {
          // If Z_BUF_ERROR is caused by an insufficient output buffer, the input buffer is not fully processed and the output buffer is full. In this case, the loop must continue to expand the buffer.
          // The opposite condition indicates that the error is not caused by an insufficient output buffer. In this case, the loop must be terminated, which indicates an error.
          if (_gzipStream.avail_in == 0 || _gzipStream.avail_out != 0) {
            return nil;
          }
        } else if (status != Z_OK) {
                return nil;
            }
        }
    
        [decompressed setLength:_gzipStream.total_out];
        return [NSData dataWithData:decompressed];
    }
    
    @end
    ```
    
2.  Implement a custom BeforeSend.
    
    ```
    - (void)setupHttpDNS:(NSString *)accountId {
      // Configures HTTPDNS.
      HttpDnsService *httpdns = [[HttpDnsService alloc] initWithAccountID:accountId];
      [httpdns setHTTPSRequestEnabled:YES];
      [httpdns setPersistentCacheIPEnabled:YES];
      [httpdns setReuseExpiredIPEnabled:YES];
      [httpdns setIPv6Enabled:YES];
    
      NSURLSessionConfiguration *configuration = [NSURLSessionConfiguration defaultSessionConfiguration];
    
      NSMutableArray *protocolsArray = [NSMutableArray arrayWithArray:configuration.protocolClasses];
      // Sets the custom NSURLProtocol defined above.
      [protocolsArray insertObject:[HttpDnsNSURLProtocolImpl class] atIndex:0];
      [configuration setProtocolClasses:protocolsArray];
      NSURLSession *session = [NSURLSession sessionWithConfiguration:configuration delegate:nil delegateQueue:nil];
    
      [SLSURLSession setURLSession:session];
      [SLSURLSession setBeforeSend:^NSMutableURLRequest * _Nonnull(NSMutableURLRequest * _Nonnull request) {
        NSURL *url = request.URL;
        // You can add a condition here to apply this only to required URLs.
        
        HttpdnsResult *result = [httpdns resolveHostSync:url.host byIpType:HttpdnsQueryIPTypeAuto];
        if (!result) {
          return request;
        }
    
        NSString *ipAddress = nil;
        if (result.hasIpv4Address) {
          ipAddress = result.firstIpv4Address;
        } else if(result.hasIpv6Address) {
          ipAddress = result.firstIpv6Address;
        } else {
          return request;
        }
    
        NSString *requestUrl = url.absoluteString;
        requestUrl = [requestUrl stringByReplacingOccurrencesOfString: url.host withString:ipAddress];
    
        [request setURL:[NSURL URLWithString:requestUrl]];
        [request setValue:url.host forHTTPHeaderField:@"host"];
    
        return request;
      }];
    }
    ```
    
3.  Complete the SLS SDK initialization.
    
    ```
    @implementation AliyunSLS
    
    - (void)initSLS {
      // Sets custom HTTPDNS for the SLS SDK.
      // !!!Note!!!
      // This setting takes effect for all SLS SDK instances.
      [self setupHttpDNS:accountId];
      [self initProducer];
    }
    
    - (void)initProducer {
        // Initialize LogProducerConfig and LogProducerClient as you normally would.
        // ...
    }
    
    @end
    ```
