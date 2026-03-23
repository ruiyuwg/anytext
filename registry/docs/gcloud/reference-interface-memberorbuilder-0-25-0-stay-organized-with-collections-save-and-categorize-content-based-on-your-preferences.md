-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface MemberOrBuilder (0.25.0) Stay organized with collections Save and categorize content based on your preferences.

0.54.0 (latest) 0.52.0 0.50.0 0.49.0 0.47.0 0.45.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.35.0 0.34.0 0.31.0 0.30.0 0.29.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface MemberOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getEmail()

```
public abstract String getEmail()
```

Email for the member. This is required for creating the member.

`string email = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The email.

### getEmailBytes()

```
public abstract ByteString getEmailBytes()
```

Email for the member. This is required for creating the member.

`string email = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for email.

### getName()

```
public abstract String getName()
```

Identifier. Resource name of the member. Format: spaces/{space}/members/{member}

`string name = 1 [(.google.api.field_behavior) = IDENTIFIER];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Identifier. Resource name of the member. Format: spaces/{space}/members/{member}

`string name = 1 [(.google.api.field_behavior) = IDENTIFIER];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getRole()

```
public abstract Member.Role getRole()
```

The meeting role assigned to the member.

`.google.apps.meet.v2beta.Member.Role role = 3;`

**Returns**

**Type**

**Description**

`[Member.Role](/java/docs/reference/google-cloud-meet/0.25.0/com.google.apps.meet.v2beta.Member.Role)`

The role.

### getRoleValue()

```
public abstract int getRoleValue()
```

The meeting role assigned to the member.

`.google.apps.meet.v2beta.Member.Role role = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for role.

### getUser()

```
public abstract String getUser()
```

[Developer Preview](https://developers.google.com/workspace/preview): Unique name for the user. Interoperable with Admin SDK API and People API. This will be empty for non google users. Setting both user and email in request will result in error. Format: `users/{user}`

`string user = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The user.

### getUserBytes()

```
public abstract ByteString getUserBytes()
```

[Developer Preview](https://developers.google.com/workspace/preview): Unique name for the user. Interoperable with Admin SDK API and People API. This will be empty for non google users. Setting both user and email in request will result in error. Format: `users/{user}`

`string user = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for user.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
