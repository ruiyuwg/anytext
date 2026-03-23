-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class PollSettings (4.10.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [4.10.0 (latest)](/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.PollSettings)
-   [4.8.0](/dotnet/docs/reference/Google.Api.Gax/4.8.0/Google.Api.Gax.PollSettings)
-   [4.4.0](/dotnet/docs/reference/Google.Api.Gax/4.4.0/Google.Api.Gax.PollSettings)
-   [4.3.1](/dotnet/docs/reference/Google.Api.Gax/4.3.1/Google.Api.Gax.PollSettings)
-   [4.2.0](/dotnet/docs/reference/Google.Api.Gax/4.2.0/Google.Api.Gax.PollSettings)
-   [4.0.0](/dotnet/docs/reference/Google.Api.Gax/4.0.0/Google.Api.Gax.PollSettings)
-   [3.2.0](/dotnet/docs/reference/Google.Api.Gax/3.2.0/Google.Api.Gax.PollSettings)

```
public sealed class PollSettings
```

Settings controlling repeated polling, for example when waiting for a long-running operation to complete.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> PollSettings

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals\(system-object\))

[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals\(system-object-system-object\))

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Api.Gax](/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax)

## Assembly

Google.Api.Gax.dll

## Constructors

### PollSettings(Expiration, TimeSpan)

```
public PollSettings(Expiration expiration, TimeSpan delay)
```

Creates poll settings from the given expiration and constant delay.

**Parameters**

**Name**

**Description**

`expiration`

`[Expiration](/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Expiration)`  

The expiration to use in order to know when to stop polling. Must not be null.

`delay`

`[TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)`  

The constant delay between RPC calls. Must be non-negative.

### PollSettings(Expiration, TimeSpan, double, TimeSpan)

```
public PollSettings(Expiration expiration, TimeSpan delay, double delayMultiplier, TimeSpan maxDelay)
```

Creates poll settings from the given expiration, delay, delay multiplier and maximum delay.

**Parameters**

**Name**

**Description**

`expiration`

`[Expiration](/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Expiration)`  

The expiration to use in order to know when to stop polling. Must not be null.

`delay`

`[TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)`  

The delay between RPC calls. Must be non-negative.

`delayMultiplier`

`[double](https://learn.microsoft.com/dotnet/api/system.double)`  

The multiplier to apply to the delay on each iteration; must be greater or equal to 1.0.

`maxDelay`

`[TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)`  

The maximum delay to use.

## Properties

### Delay

```
public TimeSpan Delay { get; }
```

The delay between RPC calls when fetching the operation status. This is never negative. There is no exponential backoff between calls; the same delay is used for each call.

**Property Value**

**Type**

**Description**

`[TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)`

**Remarks**

This is the delay between the a successful RPC response being received and the next RPC request being sent.

### DelayMultiplier

```
public double DelayMultiplier { get; }
```

The multiplier to apply to the delay on each iteration; must be greater or equal to 1.0.

**Property Value**

**Type**

**Description**

`[double](https://learn.microsoft.com/dotnet/api/system.double)`

### Expiration

```
public Expiration Expiration { get; }
```

How long to wait before giving up. This is never null.

**Property Value**

**Type**

**Description**

`[Expiration](/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Expiration)`

### MaxDelay

```
public TimeSpan MaxDelay { get; }
```

The maximum delay to use. If the increasing delay due to the delay multiplier exceeds this, this maximum is used instead.

**Property Value**

**Type**

**Description**

`[TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
