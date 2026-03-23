-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class ScaleType (0.32.0) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class ScaleType.

The type of scaling that should be applied to this parameter.

Protobuf type `google.cloud.aiplatform.v1.StudySpec.ParameterSpec.ScaleType`

## Namespace

Google \\ Cloud \\ AIPlatform \\ V1 \\ StudySpec \\ ParameterSpec

## Methods

### static::name

**Parameter**

**Name**

**Description**

`value`

`mixed`  

### static::value

**Parameter**

**Name**

**Description**

`name`

`mixed`  

## Constants

### SCALE\_TYPE\_UNSPECIFIED

```
Value: 0
```

By default, no scaling is applied.

Generated from protobuf enum `SCALE_TYPE_UNSPECIFIED = 0;`

### UNIT\_LINEAR\_SCALE

```
Value: 1
```

Scales the feasible space to (0, 1) linearly.

Generated from protobuf enum `UNIT_LINEAR_SCALE = 1;`

### UNIT\_LOG\_SCALE

```
Value: 2
```

Scales the feasible space logarithmically to (0, 1). The entire feasible space must be strictly positive.

Generated from protobuf enum `UNIT_LOG_SCALE = 2;`

### UNIT\_REVERSE\_LOG\_SCALE

```
Value: 3
```

Scales the feasible space "reverse" logarithmically to (0, 1). The result is that values close to the top of the feasible space are spread out more than points near the bottom. The entire feasible space must be strictly positive.

Generated from protobuf enum `UNIT_REVERSE_LOG_SCALE = 3;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
