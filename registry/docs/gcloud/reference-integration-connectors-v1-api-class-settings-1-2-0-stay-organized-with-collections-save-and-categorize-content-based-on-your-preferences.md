-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Integration Connectors v1 API - Class Settings (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.2.0keyboard\_arrow\_down

-   [1.4.0 (latest)](/dotnet/docs/reference/Google.Cloud.Connectors.V1/latest/Google.Cloud.Connectors.V1.Settings)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Connectors.V1/1.3.0/Google.Cloud.Connectors.V1.Settings)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Connectors.V1/1.2.0/Google.Cloud.Connectors.V1.Settings)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Connectors.V1/1.1.0/Google.Cloud.Connectors.V1.Settings)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Connectors.V1/1.0.0/Google.Cloud.Connectors.V1.Settings)

```
public sealed class Settings : IMessage<Settings>, IEquatable<Settings>, IDeepCloneable<Settings>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Integration Connectors v1 API class Settings.

Global Settings details.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Settings

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[Settings](/dotnet/docs/reference/Google.Cloud.Connectors.V1/1.2.0/Google.Cloud.Connectors.V1.Settings), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Settings](/dotnet/docs/reference/Google.Cloud.Connectors.V1/1.2.0/Google.Cloud.Connectors.V1.Settings), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[Settings](/dotnet/docs/reference/Google.Cloud.Connectors.V1/1.2.0/Google.Cloud.Connectors.V1.Settings), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Connectors.V1](/dotnet/docs/reference/Google.Cloud.Connectors.V1/1.2.0/Google.Cloud.Connectors.V1)

## Assembly

Google.Cloud.Connectors.V1.dll

## Constructors

### Settings()

```
public Settings()
```

### Settings(Settings)

```
public Settings(Settings other)
```

**Parameter**

**Name**

**Description**

`other`

`[Settings](/dotnet/docs/reference/Google.Cloud.Connectors.V1/1.2.0/Google.Cloud.Connectors.V1.Settings)`  

## Properties

### Name

```
public string Name { get; set; }
```

Output only. Resource name of the Connection. Format: projects/{project}/locations/global/settings}

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Payg

```
public bool Payg { get; set; }
```

Output only. Flag indicates if user is in PayG model

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### SettingsName

```
public SettingsName SettingsName { get; set; }
```

[SettingsName](/dotnet/docs/reference/Google.Cloud.Connectors.V1/1.2.0/Google.Cloud.Connectors.V1.SettingsName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Connectors.V1/1.2.0/Google.Cloud.Connectors.V1.Settings#Google_Cloud_Connectors_V1_Settings_Name) resource name property.

**Property Value**

**Type**

**Description**

`[SettingsName](/dotnet/docs/reference/Google.Cloud.Connectors.V1/1.2.0/Google.Cloud.Connectors.V1.SettingsName)`

### Vpcsc

```
public bool Vpcsc { get; set; }
```

Optional. Flag indicates whether vpc-sc is enabled.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
