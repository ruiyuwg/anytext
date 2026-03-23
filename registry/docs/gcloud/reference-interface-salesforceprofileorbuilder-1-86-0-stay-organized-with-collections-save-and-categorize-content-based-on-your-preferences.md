-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SalesforceProfileOrBuilder (1.86.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.80.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.2 1.1.1 1.0.0 0.4.2

```
public interface SalesforceProfileOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCredentialsCase()

```
public abstract SalesforceProfile.CredentialsCase getCredentialsCase()
```

**Returns**

**Type**

**Description**

`[SalesforceProfile.CredentialsCase](/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.SalesforceProfile.CredentialsCase)`

### getDomain()

```
public abstract String getDomain()
```

Required. Domain endpoint for the Salesforce connection.

`string domain = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The domain.

### getDomainBytes()

```
public abstract ByteString getDomainBytes()
```

Required. Domain endpoint for the Salesforce connection.

`string domain = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for domain.

### getOauth2ClientCredentials()

```
public abstract SalesforceProfile.Oauth2ClientCredentials getOauth2ClientCredentials()
```

Connected app authentication.

`.google.cloud.datastream.v1.SalesforceProfile.Oauth2ClientCredentials oauth2_client_credentials = 3;`

**Returns**

**Type**

**Description**

`[SalesforceProfile.Oauth2ClientCredentials](/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.SalesforceProfile.Oauth2ClientCredentials)`

The oauth2ClientCredentials.

### getOauth2ClientCredentialsOrBuilder()

```
public abstract SalesforceProfile.Oauth2ClientCredentialsOrBuilder getOauth2ClientCredentialsOrBuilder()
```

Connected app authentication.

`.google.cloud.datastream.v1.SalesforceProfile.Oauth2ClientCredentials oauth2_client_credentials = 3;`

**Returns**

**Type**

**Description**

`[SalesforceProfile.Oauth2ClientCredentialsOrBuilder](/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.SalesforceProfile.Oauth2ClientCredentialsOrBuilder)`

### getUserCredentials()

```
public abstract SalesforceProfile.UserCredentials getUserCredentials()
```

User-password authentication.

`.google.cloud.datastream.v1.SalesforceProfile.UserCredentials user_credentials = 2;`

**Returns**

**Type**

**Description**

`[SalesforceProfile.UserCredentials](/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.SalesforceProfile.UserCredentials)`

The userCredentials.

### getUserCredentialsOrBuilder()

```
public abstract SalesforceProfile.UserCredentialsOrBuilder getUserCredentialsOrBuilder()
```

User-password authentication.

`.google.cloud.datastream.v1.SalesforceProfile.UserCredentials user_credentials = 2;`

**Returns**

**Type**

**Description**

`[SalesforceProfile.UserCredentialsOrBuilder](/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.SalesforceProfile.UserCredentialsOrBuilder)`

### hasOauth2ClientCredentials()

```
public abstract boolean hasOauth2ClientCredentials()
```

Connected app authentication.

`.google.cloud.datastream.v1.SalesforceProfile.Oauth2ClientCredentials oauth2_client_credentials = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the oauth2ClientCredentials field is set.

### hasUserCredentials()

```
public abstract boolean hasUserCredentials()
```

User-password authentication.

`.google.cloud.datastream.v1.SalesforceProfile.UserCredentials user_credentials = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the userCredentials field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
