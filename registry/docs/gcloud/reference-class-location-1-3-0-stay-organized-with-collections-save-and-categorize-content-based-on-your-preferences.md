-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class Location (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.3.0keyboard\_arrow\_down

-   [2.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.Talent.V4/latest/Google.Cloud.Talent.V4.Location)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.7.0/Google.Cloud.Talent.V4.Location)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.6.0/Google.Cloud.Talent.V4.Location)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.5.0/Google.Cloud.Talent.V4.Location)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.4.0/Google.Cloud.Talent.V4.Location)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.Location)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.2.0/Google.Cloud.Talent.V4.Location)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.Location)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.0.0/Google.Cloud.Talent.V4.Location)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.4.0/Google.Cloud.Talent.V4.Location)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.3.0/Google.Cloud.Talent.V4.Location)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.2.0/Google.Cloud.Talent.V4.Location)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.1.0/Google.Cloud.Talent.V4.Location)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.0.0/Google.Cloud.Talent.V4.Location)

```
public sealed class Location : IMessage<Location>, IEquatable<Location>, IDeepCloneable<Location>, IBufferMessage, IMessage
```

A resource that represents a location with full geographic information.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> Location

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[Location](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.3.0/Google.Cloud.Talent.V4.Location)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[Location](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.3.0/Google.Cloud.Talent.V4.Location)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[Location](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.3.0/Google.Cloud.Talent.V4.Location)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Talent.V4](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.3.0/Google.Cloud.Talent.V4)

## Assembly

Google.Cloud.Talent.V4.dll

## Constructors

### Location()

```
public Location()
```

### Location(Location)

```
public Location(Location other)
```

**Parameter**

**Name**

**Description**

`other`

`[Location](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.3.0/Google.Cloud.Talent.V4.Location)`  

## Properties

### LatLng

```
public LatLng LatLng { get; set; }
```

An object representing a latitude/longitude pair.

**Property Value**

**Type**

**Description**

`[LatLng](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Type.LatLng.html)`

### LocationType

```
public Location.Types.LocationType LocationType { get; set; }
```

The type of a location, which corresponds to the address lines field of \[google.type.PostalAddress\]\[google.type.PostalAddress\]. For example, "Downtown, Atlanta, GA, USA" has a type of \[LocationType.NEIGHBORHOOD\]\[google.cloud.talent.v4.Location.LocationType.NEIGHBORHOOD\], and "Kansas City, KS, USA" has a type of \[LocationType.LOCALITY\]\[google.cloud.talent.v4.Location.LocationType.LOCALITY\].

**Property Value**

**Type**

**Description**

`[Location.Types.LocationType](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.3.0/Google.Cloud.Talent.V4.Location.Types.LocationType)`

### PostalAddress

```
public PostalAddress PostalAddress { get; set; }
```

Postal address of the location that includes human readable information, such as postal delivery and payments addresses. Given a postal address, a postal service can deliver items to a premises, P.O. Box, or other delivery location.

**Property Value**

**Type**

**Description**

`[PostalAddress](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Type.PostalAddress.html)`

### RadiusMiles

```
public double RadiusMiles { get; set; }
```

Radius in miles of the job location. This value is derived from the location bounding box in which a circle with the specified radius centered from \[google.type.LatLng\]\[google.type.LatLng\] covers the area associated with the job location. For example, currently, "Mountain View, CA, USA" has a radius of 6.17 miles.

**Property Value**

**Type**

**Description**

`[Double](https://learn.microsoft.com/dotnet/api/system.double)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
