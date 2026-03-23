-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum PartOfSpeech.Case (2.19.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.1 2.3.4 2.2.0 2.1.10

```
public enum PartOfSpeech.Case extends Enum<PartOfSpeech.Case> implements ProtocolMessageEnum
```

The grammatical function performed by a noun or pronoun in a phrase, clause, or sentence. In some languages, other parts of speech, such as adjective and determiner, take case inflection in agreement with the noun.

Protobuf enum `google.cloud.language.v1.PartOfSpeech.Case`

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

`ACCUSATIVE`

Accusative

`ACCUSATIVE = 1;`

`ACCUSATIVE_VALUE`

Accusative

`ACCUSATIVE = 1;`

`ADVERBIAL`

Adverbial

`ADVERBIAL = 2;`

`ADVERBIAL_VALUE`

Adverbial

`ADVERBIAL = 2;`

`CASE_UNKNOWN`

Case is not applicable in the analyzed language or is not predicted.

`CASE_UNKNOWN = 0;`

`CASE_UNKNOWN_VALUE`

Case is not applicable in the analyzed language or is not predicted.

`CASE_UNKNOWN = 0;`

`COMPLEMENTIVE`

Complementive

`COMPLEMENTIVE = 3;`

`COMPLEMENTIVE_VALUE`

Complementive

`COMPLEMENTIVE = 3;`

`DATIVE`

Dative

`DATIVE = 4;`

`DATIVE_VALUE`

Dative

`DATIVE = 4;`

`GENITIVE`

Genitive

`GENITIVE = 5;`

`GENITIVE_VALUE`

Genitive

`GENITIVE = 5;`

`INSTRUMENTAL`

Instrumental

`INSTRUMENTAL = 6;`

`INSTRUMENTAL_VALUE`

Instrumental

`INSTRUMENTAL = 6;`

`LOCATIVE`

Locative

`LOCATIVE = 7;`

`LOCATIVE_VALUE`

Locative

`LOCATIVE = 7;`

`NOMINATIVE`

Nominative

`NOMINATIVE = 8;`

`NOMINATIVE_VALUE`

Nominative

`NOMINATIVE = 8;`

`OBLIQUE`

Oblique

`OBLIQUE = 9;`

`OBLIQUE_VALUE`

Oblique

`OBLIQUE = 9;`

`PARTITIVE`

Partitive

`PARTITIVE = 10;`

`PARTITIVE_VALUE`

Partitive

`PARTITIVE = 10;`

`PREPOSITIONAL`

Prepositional

`PREPOSITIONAL = 11;`

`PREPOSITIONAL_VALUE`

Prepositional

`PREPOSITIONAL = 11;`

`REFLEXIVE_CASE`

Reflexive

`REFLEXIVE_CASE = 12;`

`REFLEXIVE_CASE_VALUE`

Reflexive

`REFLEXIVE_CASE = 12;`

`RELATIVE_CASE`

Relative

`RELATIVE_CASE = 13;`

`RELATIVE_CASE_VALUE`

Relative

`RELATIVE_CASE = 13;`

`UNRECOGNIZED`

`VOCATIVE`

Vocative

`VOCATIVE = 14;`

`VOCATIVE_VALUE`

Vocative

`VOCATIVE = 14;`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-language/2.19.0/com.google.cloud.language.v1.PartOfSpeech.Case#com_google_cloud_language_v1_PartOfSpeech_Case_forNumber_int_) instead._

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
