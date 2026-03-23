-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TaxOrBuilder (0.7.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface TaxOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCountry()

```
public abstract String getCountry()
```

The country within which the item is taxed, specified as a [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml).

`string country = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The country.

### getCountryBytes()

```
public abstract ByteString getCountryBytes()
```

The country within which the item is taxed, specified as a [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml).

`string country = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for country.

### getLocationId()

```
public abstract long getLocationId()
```

The numeric ID of a location that the tax rate applies to as defined in the [AdWords API](https://developers.google.com/adwords/api/docs/appendix/geotargeting).

`int64 location_id = 5;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The locationId.

### getPostalCode()

```
public abstract String getPostalCode()
```

The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using \* wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94_, 94002-95460, 94_\-95\*.

`string postal_code = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The postalCode.

### getPostalCodeBytes()

```
public abstract ByteString getPostalCodeBytes()
```

The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using \* wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94_, 94002-95460, 94_\-95\*.

`string postal_code = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for postalCode.

### getRate()

```
public abstract double getRate()
```

The percentage of tax rate that applies to the item price.

`double rate = 1;`

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The rate.

### getRegion()

```
public abstract String getRegion()
```

The geographic region to which the tax rate applies.

`string region = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The region.

### getRegionBytes()

```
public abstract ByteString getRegionBytes()
```

The geographic region to which the tax rate applies.

`string region = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for region.

### getTaxShip()

```
public abstract boolean getTaxShip()
```

Set to true if tax is charged on shipping.

`bool tax_ship = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The taxShip.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
