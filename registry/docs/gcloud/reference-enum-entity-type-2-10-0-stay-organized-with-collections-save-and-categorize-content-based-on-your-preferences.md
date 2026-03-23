-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum Entity.Type (2.10.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.1 2.3.4 2.2.0 2.1.10

```
public enum Entity.Type extends Enum<Entity.Type> implements ProtocolMessageEnum
```

The type of the entity. For most entity types, the associated metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`). The table below lists the associated fields for entities that have different metadata.

Protobuf enum `google.cloud.language.v1beta2.Entity.Type`

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

`ADDRESS`

Address The metadata identifies the street number and locality plus whichever additional elements appear in the text:

-   `street_number` - street number
-   `locality` - city or town
-   `street_name` - street/route name, if detected
-   `postal_code` - postal code, if detected
-   `country` - country, if detected<
-   `broad_region` - administrative area, such as the state, if detected
-   `narrow_region` - smaller administrative area, such as county, if detected
-   `sublocality` - used in Asian addresses to demark a district within a city, if detected

`ADDRESS = 10;`

`ADDRESS_VALUE`

Address The metadata identifies the street number and locality plus whichever additional elements appear in the text:

-   `street_number` - street number
-   `locality` - city or town
-   `street_name` - street/route name, if detected
-   `postal_code` - postal code, if detected
-   `country` - country, if detected<
-   `broad_region` - administrative area, such as the state, if detected
-   `narrow_region` - smaller administrative area, such as county, if detected
-   `sublocality` - used in Asian addresses to demark a district within a city, if detected

`ADDRESS = 10;`

`CONSUMER_GOOD`

Consumer product

`CONSUMER_GOOD = 6;`

`CONSUMER_GOOD_VALUE`

Consumer product

`CONSUMER_GOOD = 6;`

`DATE`

Date The metadata identifies the components of the date:

-   `year` - four digit year, if detected
-   `month` - two digit month number, if detected
-   `day` - two digit day number, if detected

`DATE = 11;`

`DATE_VALUE`

Date The metadata identifies the components of the date:

-   `year` - four digit year, if detected
-   `month` - two digit month number, if detected
-   `day` - two digit day number, if detected

`DATE = 11;`

`EVENT`

Event

`EVENT = 4;`

`EVENT_VALUE`

Event

`EVENT = 4;`

`LOCATION`

Location

`LOCATION = 2;`

`LOCATION_VALUE`

Location

`LOCATION = 2;`

`NUMBER`

Number The metadata is the number itself.

`NUMBER = 12;`

`NUMBER_VALUE`

Number The metadata is the number itself.

`NUMBER = 12;`

`ORGANIZATION`

Organization

`ORGANIZATION = 3;`

`ORGANIZATION_VALUE`

Organization

`ORGANIZATION = 3;`

`OTHER`

Other types of entities

`OTHER = 7;`

`OTHER_VALUE`

Other types of entities

`OTHER = 7;`

`PERSON`

Person

`PERSON = 1;`

`PERSON_VALUE`

Person

`PERSON = 1;`

`PHONE_NUMBER`

Phone number The metadata lists the phone number, formatted according to local convention, plus whichever additional elements appear in the text:

-   `number` - the actual number, broken down into sections as per local convention
-   `national_prefix` - country code, if detected
-   `area_code` - region or area code, if detected
-   `extension` - phone extension (to be dialed after connection), if detected

`PHONE_NUMBER = 9;`

`PHONE_NUMBER_VALUE`

Phone number The metadata lists the phone number, formatted according to local convention, plus whichever additional elements appear in the text:

-   `number` - the actual number, broken down into sections as per local convention
-   `national_prefix` - country code, if detected
-   `area_code` - region or area code, if detected
-   `extension` - phone extension (to be dialed after connection), if detected

`PHONE_NUMBER = 9;`

`PRICE`

Price The metadata identifies the `value` and `currency`.

`PRICE = 13;`

`PRICE_VALUE`

Price The metadata identifies the `value` and `currency`.

`PRICE = 13;`

`UNKNOWN`

Unknown

`UNKNOWN = 0;`

`UNKNOWN_VALUE`

Unknown

`UNKNOWN = 0;`

`UNRECOGNIZED`

`WORK_OF_ART`

Artwork

`WORK_OF_ART = 5;`

`WORK_OF_ART_VALUE`

Artwork

`WORK_OF_ART = 5;`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-language/2.10.0/com.google.cloud.language.v1beta2.Entity.Type#com_google_cloud_language_v1beta2_Entity_Type_forNumber_int_) instead._

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
