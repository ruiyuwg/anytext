-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Talent Solution V4beta1 Client - Class Location (1.3.5) Stay organized with collections Save and categorize content based on your preferences.

2.3.0 (latest) 2.2.1 2.1.3 2.0.2 1.3.5 1.2.2 1.1.1 1.0.5

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Talent Solution V4beta1 Client class Location.

A resource that represents a location with full geographic information.

Generated from protobuf message `google.cloud.talent.v4beta1.Location`

## Namespace

Google \\ Cloud \\ Talent \\ V4beta1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ location_type`

`int`  

The type of a location, which corresponds to the address lines field of [google.type.PostalAddress](https://googleapis.github.io/common-protos-php#google.type.PostalAddress). For example, "Downtown, Atlanta, GA, USA" has a type of [LocationType.NEIGHBORHOOD](/php/docs/reference/cloud-talent/1.3.5/V4beta1.Location.LocationType#_Google_Cloud_Talent_V4beta1_Location_LocationType__NEIGHBORHOOD), and "Kansas City, KS, USA" has a type of [LocationType.LOCALITY](/php/docs/reference/cloud-talent/1.3.5/V4beta1.Location.LocationType#_Google_Cloud_Talent_V4beta1_Location_LocationType__LOCALITY).

`↳ postal_address`

`[Google\Type\PostalAddress](https://googleapis.github.io/common-protos-php#Google/Type/PostalAddress)`  

Postal address of the location that includes human readable information, such as postal delivery and payments addresses. Given a postal address, a postal service can deliver items to a premises, P.O. Box, or other delivery location.

`↳ lat_lng`

`[Google\Type\LatLng](https://googleapis.github.io/common-protos-php#Google/Type/LatLng)`  

An object representing a latitude/longitude pair.

`↳ radius_miles`

`float`  

Radius in miles of the job location. This value is derived from the location bounding box in which a circle with the specified radius centered from [google.type.LatLng](https://googleapis.github.io/common-protos-php#google.type.LatLng) covers the area associated with the job location. For example, currently, "Mountain View, CA, USA" has a radius of 6.17 miles.

### getLocationType

The type of a location, which corresponds to the address lines field of [google.type.PostalAddress](https://googleapis.github.io/common-protos-php#google.type.PostalAddress). For example, "Downtown, Atlanta, GA, USA" has a type of [LocationType.NEIGHBORHOOD](/php/docs/reference/cloud-talent/1.3.5/V4beta1.Location.LocationType#_Google_Cloud_Talent_V4beta1_Location_LocationType__NEIGHBORHOOD), and "Kansas City, KS, USA" has a type of [LocationType.LOCALITY](/php/docs/reference/cloud-talent/1.3.5/V4beta1.Location.LocationType#_Google_Cloud_Talent_V4beta1_Location_LocationType__LOCALITY).

**Returns**

**Type**

**Description**

`int`

### setLocationType

The type of a location, which corresponds to the address lines field of [google.type.PostalAddress](https://googleapis.github.io/common-protos-php#google.type.PostalAddress). For example, "Downtown, Atlanta, GA, USA" has a type of [LocationType.NEIGHBORHOOD](/php/docs/reference/cloud-talent/1.3.5/V4beta1.Location.LocationType#_Google_Cloud_Talent_V4beta1_Location_LocationType__NEIGHBORHOOD), and "Kansas City, KS, USA" has a type of [LocationType.LOCALITY](/php/docs/reference/cloud-talent/1.3.5/V4beta1.Location.LocationType#_Google_Cloud_Talent_V4beta1_Location_LocationType__LOCALITY).

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getPostalAddress

Postal address of the location that includes human readable information, such as postal delivery and payments addresses. Given a postal address, a postal service can deliver items to a premises, P.O. Box, or other delivery location.

**Returns**

**Type**

**Description**

`[Google\Type\PostalAddress](https://googleapis.github.io/common-protos-php#Google/Type/PostalAddress)|null`

### hasPostalAddress

### clearPostalAddress

### setPostalAddress

Postal address of the location that includes human readable information, such as postal delivery and payments addresses. Given a postal address, a postal service can deliver items to a premises, P.O. Box, or other delivery location.

**Parameter**

**Name**

**Description**

`var`

`[Google\Type\PostalAddress](https://googleapis.github.io/common-protos-php#Google/Type/PostalAddress)`  

**Returns**

**Type**

**Description**

`$this`

### getLatLng

An object representing a latitude/longitude pair.

**Returns**

**Type**

**Description**

`[Google\Type\LatLng](https://googleapis.github.io/common-protos-php#Google/Type/LatLng)|null`

### hasLatLng

### clearLatLng

### setLatLng

An object representing a latitude/longitude pair.

**Parameter**

**Name**

**Description**

`var`

`[Google\Type\LatLng](https://googleapis.github.io/common-protos-php#Google/Type/LatLng)`  

**Returns**

**Type**

**Description**

`$this`

### getRadiusMiles

Radius in miles of the job location. This value is derived from the location bounding box in which a circle with the specified radius centered from [google.type.LatLng](https://googleapis.github.io/common-protos-php#google.type.LatLng) covers the area associated with the job location. For example, currently, "Mountain View, CA, USA" has a radius of 6.17 miles.

**Returns**

**Type**

**Description**

`float`

### setRadiusMiles

Radius in miles of the job location. This value is derived from the location bounding box in which a circle with the specified radius centered from [google.type.LatLng](https://googleapis.github.io/common-protos-php#google.type.LatLng) covers the area associated with the job location. For example, currently, "Mountain View, CA, USA" has a radius of 6.17 miles.

**Parameter**

**Name**

**Description**

`var`

`float`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
