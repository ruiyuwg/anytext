-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud AI Platform v1 API - Class StudySpec.Types.ConvexAutomatedStoppingSpec (3.5.0) Stay organized with collections Save and categorize content based on your preferences.

3.68.0 (latest) 3.67.0 3.66.0 3.65.0 3.64.0 3.63.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class StudySpec.Types.ConvexAutomatedStoppingSpec : IMessage<StudySpec.Types.ConvexAutomatedStoppingSpec>, IEquatable<StudySpec.Types.ConvexAutomatedStoppingSpec>, IDeepCloneable<StudySpec.Types.ConvexAutomatedStoppingSpec>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud AI Platform v1 API class StudySpec.Types.ConvexAutomatedStoppingSpec.

Configuration for ConvexAutomatedStoppingSpec. When there are enough completed trials (configured by min\_measurement\_count), for pending trials with enough measurements and steps, the policy first computes an overestimate of the objective value at max\_num\_steps according to the slope of the incomplete objective value curve. No prediction can be made if the curve is completely flat. If the overestimation is worse than the best objective value of the completed trials, this pending trial will be early-stopped, but a last measurement will be added to the pending trial with max\_num\_steps and predicted objective value from the autoregression model.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> StudySpec.Types.ConvexAutomatedStoppingSpec

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[StudySpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.5.0/Google.Cloud.AIPlatform.V1.StudySpec)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.5.0/Google.Cloud.AIPlatform.V1.StudySpec.Types)[ConvexAutomatedStoppingSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.5.0/Google.Cloud.AIPlatform.V1.StudySpec.Types.ConvexAutomatedStoppingSpec), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[StudySpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.5.0/Google.Cloud.AIPlatform.V1.StudySpec)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.5.0/Google.Cloud.AIPlatform.V1.StudySpec.Types)[ConvexAutomatedStoppingSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.5.0/Google.Cloud.AIPlatform.V1.StudySpec.Types.ConvexAutomatedStoppingSpec), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[StudySpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.5.0/Google.Cloud.AIPlatform.V1.StudySpec)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.5.0/Google.Cloud.AIPlatform.V1.StudySpec.Types)[ConvexAutomatedStoppingSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.5.0/Google.Cloud.AIPlatform.V1.StudySpec.Types.ConvexAutomatedStoppingSpec), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AIPlatform.V1](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.5.0/Google.Cloud.AIPlatform.V1)

## Assembly

Google.Cloud.AIPlatform.V1.dll

## Constructors

### ConvexAutomatedStoppingSpec()

```
public ConvexAutomatedStoppingSpec()
```

### ConvexAutomatedStoppingSpec(ConvexAutomatedStoppingSpec)

```
public ConvexAutomatedStoppingSpec(StudySpec.Types.ConvexAutomatedStoppingSpec other)
```

**Parameter**

**Name**

**Description**

`other`

`[StudySpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.5.0/Google.Cloud.AIPlatform.V1.StudySpec)[Types](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.5.0/Google.Cloud.AIPlatform.V1.StudySpec.Types)[ConvexAutomatedStoppingSpec](/dotnet/docs/reference/Google.Cloud.AIPlatform.V1/3.5.0/Google.Cloud.AIPlatform.V1.StudySpec.Types.ConvexAutomatedStoppingSpec)`  

## Properties

### HasUpdateAllStoppedTrials

```
public bool HasUpdateAllStoppedTrials { get; }
```

Gets whether the "update\_all\_stopped\_trials" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### LearningRateParameterName

```
public string LearningRateParameterName { get; set; }
```

The hyper-parameter name used in the tuning job that stands for learning rate. Leave it blank if learning rate is not in a parameter in tuning. The learning\_rate is used to estimate the objective value of the ongoing trial.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### MaxStepCount

```
public long MaxStepCount { get; set; }
```

Steps used in predicting the final objective for early stopped trials. In general, it's set to be the same as the defined steps in training / tuning. If not defined, it will learn it from the completed trials. When use\_steps is false, this field is set to the maximum elapsed seconds.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### MinMeasurementCount

```
public long MinMeasurementCount { get; set; }
```

The minimal number of measurements in a Trial. Early-stopping checks will not trigger if less than min\_measurement\_count+1 completed trials or pending trials with less than min\_measurement\_count measurements. If not defined, the default value is 5.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### MinStepCount

```
public long MinStepCount { get; set; }
```

Minimum number of steps for a trial to complete. Trials which do not have a measurement with step\_count > min\_step\_count won't be considered for early stopping. It's ok to set it to 0, and a trial can be early stopped at any stage. By default, min\_step\_count is set to be one-tenth of the max\_step\_count. When use\_elapsed\_duration is true, this field is set to the minimum elapsed seconds.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### UpdateAllStoppedTrials

```
public bool UpdateAllStoppedTrials { get; set; }
```

ConvexAutomatedStoppingSpec by default only updates the trials that needs to be early stopped using a newly trained auto-regressive model. When this flag is set to True, all stopped trials from the beginning are potentially updated in terms of their `final_measurement`. Also, note that the training logic of autoregressive models is different in this case. Enabling this option has shown better results and this may be the default option in the future.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### UseElapsedDuration

```
public bool UseElapsedDuration { get; set; }
```

This bool determines whether or not the rule is applied based on elapsed\_secs or steps. If use\_elapsed\_duration==false, the early stopping decision is made according to the predicted objective values according to the target steps. If use\_elapsed\_duration==true, elapsed\_secs is used instead of steps. Also, in this case, the parameters max\_num\_steps and min\_num\_steps are overloaded to contain max\_elapsed\_seconds and min\_elapsed\_seconds.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
