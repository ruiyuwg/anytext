-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SubjectOrBuilder (2.13.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.4 2.4.0 2.3.0 2.2.5

```
public interface SubjectOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCommonName()

```
public abstract String getCommonName()
```

The "common name" of the subject.

`string common_name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The commonName.

### getCommonNameBytes()

```
public abstract ByteString getCommonNameBytes()
```

The "common name" of the subject.

`string common_name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for commonName.

### getCountryCode()

```
public abstract String getCountryCode()
```

The country code of the subject.

`string country_code = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The countryCode.

### getCountryCodeBytes()

```
public abstract ByteString getCountryCodeBytes()
```

The country code of the subject.

`string country_code = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for countryCode.

### getLocality()

```
public abstract String getLocality()
```

The locality or city of the subject.

`string locality = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The locality.

### getLocalityBytes()

```
public abstract ByteString getLocalityBytes()
```

The locality or city of the subject.

`string locality = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for locality.

### getOrganization()

```
public abstract String getOrganization()
```

The organization of the subject.

`string organization = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The organization.

### getOrganizationBytes()

```
public abstract ByteString getOrganizationBytes()
```

The organization of the subject.

`string organization = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for organization.

### getOrganizationalUnit()

```
public abstract String getOrganizationalUnit()
```

The organizational\_unit of the subject.

`string organizational_unit = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The organizationalUnit.

### getOrganizationalUnitBytes()

```
public abstract ByteString getOrganizationalUnitBytes()
```

The organizational\_unit of the subject.

`string organizational_unit = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for organizationalUnit.

### getPostalCode()

```
public abstract String getPostalCode()
```

The postal code of the subject.

`string postal_code = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The postalCode.

### getPostalCodeBytes()

```
public abstract ByteString getPostalCodeBytes()
```

The postal code of the subject.

`string postal_code = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for postalCode.

### getProvince()

```
public abstract String getProvince()
```

The province, territory, or regional state of the subject.

`string province = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The province.

### getProvinceBytes()

```
public abstract ByteString getProvinceBytes()
```

The province, territory, or regional state of the subject.

`string province = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for province.

### getStreetAddress()

```
public abstract String getStreetAddress()
```

The street address of the subject.

`string street_address = 7;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The streetAddress.

### getStreetAddressBytes()

```
public abstract ByteString getStreetAddressBytes()
```

The street address of the subject.

`string street_address = 7;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for streetAddress.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
