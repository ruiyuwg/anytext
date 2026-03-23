-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum AnnotateAssessmentRequest.Annotation (3.84.0) Stay organized with collections Save and categorize content based on your preferences.

3.84.0 (latest) 3.82.0 3.80.0 3.79.0 3.77.0 3.75.0 3.73.0 3.72.0 3.71.0 3.70.0 3.69.0 3.67.0 3.65.0 3.64.0 3.61.0 3.60.0 3.59.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.12 2.6.1 2.5.0 2.4.10 2.3.1

```
public enum AnnotateAssessmentRequest.Annotation extends Enum<AnnotateAssessmentRequest.Annotation> implements ProtocolMessageEnum
```

Enum that represents the types of annotations.

Protobuf enum `google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.Annotation`

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

`ANNOTATION_UNSPECIFIED`

Default unspecified type.

`ANNOTATION_UNSPECIFIED = 0;`

`ANNOTATION_UNSPECIFIED_VALUE`

Default unspecified type.

`ANNOTATION_UNSPECIFIED = 0;`

`FRAUDULENT`

Provides information that the event turned out to be fraudulent.

`FRAUDULENT = 2;`

`FRAUDULENT_VALUE`

Provides information that the event turned out to be fraudulent.

`FRAUDULENT = 2;`

`LEGITIMATE`

Provides information that the event turned out to be legitimate.

`LEGITIMATE = 1;`

`LEGITIMATE_VALUE`

Provides information that the event turned out to be legitimate.

`LEGITIMATE = 1;`

`PASSWORD_CORRECT`

Provides information that the event was related to a login event in which the user typed the correct password. Deprecated, prefer indicating CORRECT\_PASSWORD through the reasons field instead.

`PASSWORD_CORRECT = 3 [deprecated = true];`

`PASSWORD_CORRECT_VALUE`

Provides information that the event was related to a login event in which the user typed the correct password. Deprecated, prefer indicating CORRECT\_PASSWORD through the reasons field instead.

`PASSWORD_CORRECT = 3 [deprecated = true];`

`PASSWORD_INCORRECT`

Provides information that the event was related to a login event in which the user typed the incorrect password. Deprecated, prefer indicating INCORRECT\_PASSWORD through the reasons field instead.

`PASSWORD_INCORRECT = 4 [deprecated = true];`

`PASSWORD_INCORRECT_VALUE`

Provides information that the event was related to a login event in which the user typed the incorrect password. Deprecated, prefer indicating INCORRECT\_PASSWORD through the reasons field instead.

`PASSWORD_INCORRECT = 4 [deprecated = true];`

`UNRECOGNIZED`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.Annotation#com_google_recaptchaenterprise_v1beta1_AnnotateAssessmentRequest_Annotation_forNumber_int_) instead._

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
