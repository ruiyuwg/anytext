-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UserInfoOrBuilder (0.26.0) Stay organized with collections Save and categorize content based on your preferences.

0.94.0 (latest) 0.92.0 0.90.0 0.89.0 0.87.0 0.85.0 0.83.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.71.0 0.70.0 0.69.0 0.67.0 0.66.0 0.65.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.4 0.8.10

```
public interface UserInfoOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDirectUserRequest()

```
public abstract boolean getDirectUserRequest()
```

Optional. Indicates if the request is made directly from the end user in which case the user\_agent and ip\_address fields can be populated from the HTTP request. This should _not_ be set when using the javascript pixel. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events).

`bool direct_user_request = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The directUserRequest.

### getIpAddress()

```
public abstract String getIpAddress()
```

Optional. IP address of the user. This could be either IPv4 (e.g. 104.133.9.80) or IPv6 (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). This should _not_ be set when using the javascript pixel or if `direct_user_request` is set. Used to extract location information for personalization.

`string ip_address = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The ipAddress.

### getIpAddressBytes()

```
public abstract ByteString getIpAddressBytes()
```

Optional. IP address of the user. This could be either IPv4 (e.g. 104.133.9.80) or IPv6 (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). This should _not_ be set when using the javascript pixel or if `direct_user_request` is set. Used to extract location information for personalization.

`string ip_address = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for ipAddress.

### getUserAgent()

```
public abstract String getUserAgent()
```

Optional. User agent as included in the HTTP header. UTF-8 encoded string with a length limit of 1 KiB.

This should _not_ be set when using the JavaScript pixel or if `directUserRequest` is set.

`string user_agent = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The userAgent.

### getUserAgentBytes()

```
public abstract ByteString getUserAgentBytes()
```

Optional. User agent as included in the HTTP header. UTF-8 encoded string with a length limit of 1 KiB.

This should _not_ be set when using the JavaScript pixel or if `directUserRequest` is set.

`string user_agent = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for userAgent.

### getUserId()

```
public abstract String getUserId()
```

Optional. Unique identifier for logged-in user with a length limit of 128 bytes. Required only for logged-in users.

`string user_id = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The userId.

### getUserIdBytes()

```
public abstract ByteString getUserIdBytes()
```

Optional. Unique identifier for logged-in user with a length limit of 128 bytes. Required only for logged-in users.

`string user_id = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for userId.

### getVisitorId()

```
public abstract String getVisitorId()
```

Required. A unique identifier for tracking visitors with a length limit of 128 bytes.

For example, this could be implemented with a http cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Maximum length 128 bytes. Cannot be empty.

`string visitor_id = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The visitorId.

### getVisitorIdBytes()

```
public abstract ByteString getVisitorIdBytes()
```

Required. A unique identifier for tracking visitors with a length limit of 128 bytes.

For example, this could be implemented with a http cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Maximum length 128 bytes. Cannot be empty.

`string visitor_id = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for visitorId.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
