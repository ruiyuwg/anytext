-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum Deployment.ErrorCode (0.36.0) Stay organized with collections Save and categorize content based on your preferences.

0.64.0 (latest) 0.62.0 0.60.0 0.59.0 0.58.0 0.57.0 0.55.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.47.0 0.45.0 0.44.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.1.0

```
public enum Deployment.ErrorCode extends Enum<Deployment.ErrorCode> implements ProtocolMessageEnum
```

Possible errors that can occur with deployments.

Protobuf enum `google.cloud.config.v1.Deployment.ErrorCode`

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

`BUCKET_CREATION_FAILED`

Cloud Storage bucket creation failed due to an issue unrelated to permissions.

`BUCKET_CREATION_FAILED = 8;`

`BUCKET_CREATION_FAILED_VALUE`

Cloud Storage bucket creation failed due to an issue unrelated to permissions.

`BUCKET_CREATION_FAILED = 8;`

`BUCKET_CREATION_PERMISSION_DENIED`

Cloud Storage bucket creation failed due to a permission issue.

`BUCKET_CREATION_PERMISSION_DENIED = 7;`

`BUCKET_CREATION_PERMISSION_DENIED_VALUE`

Cloud Storage bucket creation failed due to a permission issue.

`BUCKET_CREATION_PERMISSION_DENIED = 7;`

`CLOUD_BUILD_PERMISSION_DENIED`

Cloud Build failed due to a permission issue.

`CLOUD_BUILD_PERMISSION_DENIED = 3;`

`CLOUD_BUILD_PERMISSION_DENIED_VALUE`

Cloud Build failed due to a permission issue.

`CLOUD_BUILD_PERMISSION_DENIED = 3;`

`DELETE_BUILD_API_FAILED`

Cloud Build job associated with a deployment deletion could not be started.

`DELETE_BUILD_API_FAILED = 5;`

`DELETE_BUILD_API_FAILED_VALUE`

Cloud Build job associated with a deployment deletion could not be started.

`DELETE_BUILD_API_FAILED = 5;`

`DELETE_BUILD_RUN_FAILED`

Cloud Build job associated with a deployment deletion was started but failed.

`DELETE_BUILD_RUN_FAILED = 6;`

`DELETE_BUILD_RUN_FAILED_VALUE`

Cloud Build job associated with a deployment deletion was started but failed.

`DELETE_BUILD_RUN_FAILED = 6;`

`ERROR_CODE_UNSPECIFIED`

No error code was specified.

`ERROR_CODE_UNSPECIFIED = 0;`

`ERROR_CODE_UNSPECIFIED_VALUE`

No error code was specified.

`ERROR_CODE_UNSPECIFIED = 0;`

`REVISION_FAILED`

The revision failed. See Revision for more details.

`REVISION_FAILED = 1;`

`REVISION_FAILED_VALUE`

The revision failed. See Revision for more details.

`REVISION_FAILED = 1;`

`UNRECOGNIZED`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-infra-manager/0.36.0/com.google.cloud.config.v1.Deployment.ErrorCode#com_google_cloud_config_v1_Deployment_ErrorCode_forNumber_int_) instead._

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
