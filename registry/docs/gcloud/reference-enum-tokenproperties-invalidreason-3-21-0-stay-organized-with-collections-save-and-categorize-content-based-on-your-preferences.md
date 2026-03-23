-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum TokenProperties.InvalidReason (3.21.0) Stay organized with collections Save and categorize content based on your preferences.

3.84.0 (latest) 3.82.0 3.80.0 3.79.0 3.77.0 3.75.0 3.73.0 3.72.0 3.71.0 3.70.0 3.69.0 3.67.0 3.65.0 3.64.0 3.61.0 3.60.0 3.59.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.12 2.6.1 2.5.0 2.4.10 2.3.1

```
public enum TokenProperties.InvalidReason extends Enum<TokenProperties.InvalidReason> implements ProtocolMessageEnum
```

Enum that represents the types of invalid token reasons.

Protobuf enum `google.cloud.recaptchaenterprise.v1beta1.TokenProperties.InvalidReason`

## Implements

[ProtocolMessageEnum](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolMessageEnum.html)

## Inherited Members

[Enum.<T>valueOf(Class<T>,String)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#valueOf-java.lang.Class-java.lang.String-)

[Enum.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#clone--)

[Enum.compareTo(E)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#compareTo-E-)

[Enum.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#equals-java.lang.Object-)

[Enum.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#finalize--)

[Enum.getDeclaringClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#getDeclaringClass--)

[Enum.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#hashCode--)

[Enum.name()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#name--)

[Enum.ordinal()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#ordinal--)

[Enum.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#toString--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

**Name**

**Description**

`BROWSER_ERROR`

A retriable error (such as network failure) occurred on the browser. Could easily be simulated by an attacker.

`BROWSER_ERROR = 7;`

`BROWSER_ERROR_VALUE`

A retriable error (such as network failure) occurred on the browser. Could easily be simulated by an attacker.

`BROWSER_ERROR = 7;`

`DUPE`

The user verification had already been seen.

`DUPE = 4;`

`DUPE_VALUE`

The user verification had already been seen.

`DUPE = 4;`

`EXPIRED`

The user verification token had expired.

`EXPIRED = 3;`

`EXPIRED_VALUE`

The user verification token had expired.

`EXPIRED = 3;`

`INVALID_REASON_UNSPECIFIED`

Default unspecified type.

`INVALID_REASON_UNSPECIFIED = 0;`

`INVALID_REASON_UNSPECIFIED_VALUE`

Default unspecified type.

`INVALID_REASON_UNSPECIFIED = 0;`

`MALFORMED`

The provided user verification token was malformed.

`MALFORMED = 2;`

`MALFORMED_VALUE`

The provided user verification token was malformed.

`MALFORMED = 2;`

`MISSING`

The user verification token was not present. It is a required input.

`MISSING = 6;`

`MISSING_VALUE`

The user verification token was not present. It is a required input.

`MISSING = 6;`

`SITE_MISMATCH`

The user verification token did not match the provided site key. This may be a configuration error (for example, development keys used in production) or end users trying to use verification tokens from other sites.

`SITE_MISMATCH = 5 [deprecated = true];`

`SITE_MISMATCH_VALUE`

The user verification token did not match the provided site key. This may be a configuration error (for example, development keys used in production) or end users trying to use verification tokens from other sites.

`SITE_MISMATCH = 5 [deprecated = true];`

`UNKNOWN_INVALID_REASON`

If the failure reason was not accounted for.

`UNKNOWN_INVALID_REASON = 1;`

`UNKNOWN_INVALID_REASON_VALUE`

If the failure reason was not accounted for.

`UNKNOWN_INVALID_REASON = 1;`

`UNRECOGNIZED`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-recaptchaenterprise/3.21.0/com.google.recaptchaenterprise.v1beta1.TokenProperties.InvalidReason#com_google_recaptchaenterprise_v1beta1_TokenProperties_InvalidReason_forNumber_int_) instead._

`valueOf(String name)`

`values()`

## Methods

**Name**

**Description**

`getDescriptorForType()`

`getNumber()`

`getValueDescriptor()`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
