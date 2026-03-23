-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum AccessReason (2.52.0) Stay organized with collections Save and categorize content based on your preferences.

2.90.0 (latest) 2.88.0 2.86.0 2.85.0 2.84.0 2.83.0 2.81.0 2.79.0 2.78.0 2.77.0 2.76.0 2.75.0 2.73.0 2.71.0 2.70.0 2.67.0 2.66.0 2.65.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.8 2.5.3 2.4.4 2.3.1

```
public enum AccessReason extends Enum<AccessReason> implements ProtocolMessageEnum
```

Describes the reason for a data access. Please refer to [https://cloud.google.com/assured-workloads/key-access-justifications/docs/justification-codes](https://cloud.google.com/assured-workloads/key-access-justifications/docs/justification-codes) for the detailed semantic meaning of justification reason codes.

Protobuf enum `google.cloud.kms.v1.AccessReason`

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

`CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING`

One of the following operations is being executed while simultaneously encountering an internal technical issue which prevented a more precise justification code from being generated:

-   Your account has been used to perform any access to your own data which your IAM policy authorizes.
-   An automated Google system operates on encrypted customer data which your IAM policy authorizes.
-   Customer-initiated Google support access.
-   Google-initiated support access to protect system reliability.

`CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING = 11;`

`CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING_VALUE`

One of the following operations is being executed while simultaneously encountering an internal technical issue which prevented a more precise justification code from being generated:

-   Your account has been used to perform any access to your own data which your IAM policy authorizes.
-   An automated Google system operates on encrypted customer data which your IAM policy authorizes.
-   Customer-initiated Google support access.
-   Google-initiated support access to protect system reliability.

`CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING = 11;`

`CUSTOMER_INITIATED_ACCESS`

Customer uses their account to perform any access to their own data which their IAM policy authorizes.

`CUSTOMER_INITIATED_ACCESS = 5;`

`CUSTOMER_INITIATED_ACCESS_VALUE`

Customer uses their account to perform any access to their own data which their IAM policy authorizes.

`CUSTOMER_INITIATED_ACCESS = 5;`

`CUSTOMER_INITIATED_SUPPORT`

Customer-initiated support.

`CUSTOMER_INITIATED_SUPPORT = 1;`

`CUSTOMER_INITIATED_SUPPORT_VALUE`

Customer-initiated support.

`CUSTOMER_INITIATED_SUPPORT = 1;`

`GOOGLE_INITIATED_REVIEW`

Google-initiated access for security, fraud, abuse, or compliance purposes.

`GOOGLE_INITIATED_REVIEW = 4;`

`GOOGLE_INITIATED_REVIEW_VALUE`

Google-initiated access for security, fraud, abuse, or compliance purposes.

`GOOGLE_INITIATED_REVIEW = 4;`

`GOOGLE_INITIATED_SERVICE`

Google-initiated access for system management and troubleshooting.

`GOOGLE_INITIATED_SERVICE = 2;`

`GOOGLE_INITIATED_SERVICE_VALUE`

Google-initiated access for system management and troubleshooting.

`GOOGLE_INITIATED_SERVICE = 2;`

`GOOGLE_INITIATED_SYSTEM_OPERATION`

Google systems access customer data to help optimize the structure of the data or quality for future uses by the customer.

`GOOGLE_INITIATED_SYSTEM_OPERATION = 6;`

`GOOGLE_INITIATED_SYSTEM_OPERATION_VALUE`

Google systems access customer data to help optimize the structure of the data or quality for future uses by the customer.

`GOOGLE_INITIATED_SYSTEM_OPERATION = 6;`

`GOOGLE_RESPONSE_TO_PRODUCTION_ALERT`

Google-initiated access to maintain system reliability.

`GOOGLE_RESPONSE_TO_PRODUCTION_ALERT = 10;`

`GOOGLE_RESPONSE_TO_PRODUCTION_ALERT_VALUE`

Google-initiated access to maintain system reliability.

`GOOGLE_RESPONSE_TO_PRODUCTION_ALERT = 10;`

`MODIFIED_CUSTOMER_INITIATED_ACCESS`

Customer uses their account to perform any access to their own data which their IAM policy authorizes, and one of the following is true:

-   A Google administrator has reset the root-access account associated with the user's organization within the past 7 days.
-   A Google-initiated emergency access operation has interacted with a resource in the same project or folder as the currently accessed resource within the past 7 days.

`MODIFIED_CUSTOMER_INITIATED_ACCESS = 8;`

`MODIFIED_CUSTOMER_INITIATED_ACCESS_VALUE`

Customer uses their account to perform any access to their own data which their IAM policy authorizes, and one of the following is true:

-   A Google administrator has reset the root-access account associated with the user's organization within the past 7 days.
-   A Google-initiated emergency access operation has interacted with a resource in the same project or folder as the currently accessed resource within the past 7 days.

`MODIFIED_CUSTOMER_INITIATED_ACCESS = 8;`

`MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION`

Google systems access customer data to help optimize the structure of the data or quality for future uses by the customer, and one of the following is true:

-   A Google administrator has reset the root-access account associated with the user's organization within the past 7 days.
-   A Google-initiated emergency access operation has interacted with a resource in the same project or folder as the currently accessed resource within the past 7 days.

`MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION = 9;`

`MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION_VALUE`

Google systems access customer data to help optimize the structure of the data or quality for future uses by the customer, and one of the following is true:

-   A Google administrator has reset the root-access account associated with the user's organization within the past 7 days.
-   A Google-initiated emergency access operation has interacted with a resource in the same project or folder as the currently accessed resource within the past 7 days.

`MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION = 9;`

`REASON_NOT_EXPECTED`

No reason is expected for this key request.

`REASON_NOT_EXPECTED = 7;`

`REASON_NOT_EXPECTED_VALUE`

No reason is expected for this key request.

`REASON_NOT_EXPECTED = 7;`

`REASON_UNSPECIFIED`

Unspecified access reason.

`REASON_UNSPECIFIED = 0;`

`REASON_UNSPECIFIED_VALUE`

Unspecified access reason.

`REASON_UNSPECIFIED = 0;`

`THIRD_PARTY_DATA_REQUEST`

Google-initiated access in response to a legal request or legal process.

`THIRD_PARTY_DATA_REQUEST = 3;`

`THIRD_PARTY_DATA_REQUEST_VALUE`

Google-initiated access in response to a legal request or legal process.

`THIRD_PARTY_DATA_REQUEST = 3;`

`UNRECOGNIZED`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-kms/2.52.0/com.google.cloud.kms.v1.AccessReason#com_google_cloud_kms_v1_AccessReason_forNumber_int_) instead._

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
