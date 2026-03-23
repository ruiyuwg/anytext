-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class IPAllocationPolicy (2.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0keyboard\_arrow\_down

-   [2.10.0 (latest)](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/latest/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.9.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.8.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.7.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.6.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.5.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.4.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.3.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.2.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.1.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.0.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/1.0.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)

```
public sealed class IPAllocationPolicy : IMessage<IPAllocationPolicy>, IEquatable<IPAllocationPolicy>, IDeepCloneable<IPAllocationPolicy>, IBufferMessage, IMessage
```

Configuration for controlling how IPs are allocated in the GKE cluster running the Apache Airflow software.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> IPAllocationPolicy

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[IPAllocationPolicy](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.0.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[IPAllocationPolicy](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.0.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[IPAllocationPolicy](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.0.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Orchestration.Airflow.Service.V1](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.0.0/Google.Cloud.Orchestration.Airflow.Service.V1)

## Assembly

Google.Cloud.Orchestration.Airflow.Service.V1.dll

## Constructors

### IPAllocationPolicy()

```
public IPAllocationPolicy()
```

### IPAllocationPolicy(IPAllocationPolicy)

```
public IPAllocationPolicy(IPAllocationPolicy other)
```

**Parameter**

**Name**

**Description**

`other`

`[IPAllocationPolicy](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.0.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy)`  

## Properties

### ClusterIpAllocationCase

```
public IPAllocationPolicy.ClusterIpAllocationOneofCase ClusterIpAllocationCase { get; }
```

**Property Value**

**Type**

**Description**

`[IPAllocationPolicy.ClusterIpAllocationOneofCase](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.0.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy.ClusterIpAllocationOneofCase)`

### ClusterIpv4CidrBlock

```
public string ClusterIpv4CidrBlock { get; set; }
```

Optional. The IP address range used to allocate IP addresses to pods in the GKE cluster.

This field is applicable only when `use_ip_aliases` is true.

Set to blank to have GKE choose a range with the default size.

Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific netmask.

Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ClusterSecondaryRangeName

```
public string ClusterSecondaryRangeName { get; set; }
```

Optional. The name of the GKE cluster's secondary range used to allocate IP addresses to pods.

This field is applicable only when `use_ip_aliases` is true.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ServicesIpAllocationCase

```
public IPAllocationPolicy.ServicesIpAllocationOneofCase ServicesIpAllocationCase { get; }
```

**Property Value**

**Type**

**Description**

`[IPAllocationPolicy.ServicesIpAllocationOneofCase](/dotnet/docs/reference/Google.Cloud.Orchestration.Airflow.Service.V1/2.0.0/Google.Cloud.Orchestration.Airflow.Service.V1.IPAllocationPolicy.ServicesIpAllocationOneofCase)`

### ServicesIpv4CidrBlock

```
public string ServicesIpv4CidrBlock { get; set; }
```

Optional. The IP address range of the services IP addresses in this GKE cluster.

This field is applicable only when `use_ip_aliases` is true.

Set to blank to have GKE choose a range with the default size.

Set to /netmask (e.g. `/14`) to have GKE choose a range with a specific netmask.

Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range to use.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ServicesSecondaryRangeName

```
public string ServicesSecondaryRangeName { get; set; }
```

Optional. The name of the services' secondary range used to allocate IP addresses to the GKE cluster.

This field is applicable only when `use_ip_aliases` is true.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### UseIpAliases

```
public bool UseIpAliases { get; set; }
```

Optional. Whether or not to enable Alias IPs in the GKE cluster. If `true`, a VPC-native cluster is created.

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
