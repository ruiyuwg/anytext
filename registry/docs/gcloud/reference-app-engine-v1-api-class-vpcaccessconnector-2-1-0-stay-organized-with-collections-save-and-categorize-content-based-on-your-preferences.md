-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# App Engine v1 API - Class VpcAccessConnector (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.1.0keyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/latest/Google.Cloud.AppEngine.V1.VpcAccessConnector)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.4.0/Google.Cloud.AppEngine.V1.VpcAccessConnector)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.3.0/Google.Cloud.AppEngine.V1.VpcAccessConnector)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.2.0/Google.Cloud.AppEngine.V1.VpcAccessConnector)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1.VpcAccessConnector)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.0.0/Google.Cloud.AppEngine.V1.VpcAccessConnector)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.4.0/Google.Cloud.AppEngine.V1.VpcAccessConnector)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.3.0/Google.Cloud.AppEngine.V1.VpcAccessConnector)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.2.0/Google.Cloud.AppEngine.V1.VpcAccessConnector)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.1.0/Google.Cloud.AppEngine.V1.VpcAccessConnector)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/1.0.0/Google.Cloud.AppEngine.V1.VpcAccessConnector)

```
public sealed class VpcAccessConnector : IMessage<VpcAccessConnector>, IEquatable<VpcAccessConnector>, IDeepCloneable<VpcAccessConnector>, IBufferMessage, IMessage
```

Reference documentation and code samples for the App Engine v1 API class VpcAccessConnector.

VPC access connector specification.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> VpcAccessConnector

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[VpcAccessConnector](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1.VpcAccessConnector)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[VpcAccessConnector](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1.VpcAccessConnector)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[VpcAccessConnector](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1.VpcAccessConnector)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.AppEngine.V1](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1)

## Assembly

Google.Cloud.AppEngine.V1.dll

## Constructors

### VpcAccessConnector()

```
public VpcAccessConnector()
```

### VpcAccessConnector(VpcAccessConnector)

```
public VpcAccessConnector(VpcAccessConnector other)
```

**Parameter**

**Name**

**Description**

`other`

`[VpcAccessConnector](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1.VpcAccessConnector)`  

## Properties

### EgressSetting

```
public VpcAccessConnector.Types.EgressSetting EgressSetting { get; set; }
```

The egress setting for the connector, controlling what traffic is diverted through it.

**Property Value**

**Type**

**Description**

`[VpcAccessConnector.Types.EgressSetting](/dotnet/docs/reference/Google.Cloud.AppEngine.V1/2.1.0/Google.Cloud.AppEngine.V1.VpcAccessConnector.Types.EgressSetting)`

### Name

```
public string Name { get; set; }
```

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
