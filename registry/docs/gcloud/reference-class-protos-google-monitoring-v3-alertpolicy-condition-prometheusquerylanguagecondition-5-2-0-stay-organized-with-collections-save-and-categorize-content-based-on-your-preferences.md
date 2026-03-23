-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Node.js](https://docs.cloud.google.com/nodejs/docs)
-   [Client libraries](https://docs.cloud.google.com/nodejs/docs/reference)

Send feedback

# Class protos.google.monitoring.v3.AlertPolicy.Condition.PrometheusQueryLanguageCondition (5.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [5.2.0 (latest)](/nodejs/docs/reference/monitoring/latest/monitoring/protos.google.monitoring.v3.alertpolicy.condition.prometheusquerylanguagecondition)
-   [4.0.0](/nodejs/docs/reference/monitoring/4.0.0/monitoring/protos.google.monitoring.v3.alertpolicy.condition.prometheusquerylanguagecondition)
-   [3.0.4](/nodejs/docs/reference/monitoring/3.0.4/monitoring/protos.google.monitoring.v3.alertpolicy.condition.prometheusquerylanguagecondition)
-   [2.3.5](/nodejs/docs/reference/monitoring/2.3.5/monitoring/protos.google.monitoring.v3.alertpolicy.condition.prometheusquerylanguagecondition)

Represents a PrometheusQueryLanguageCondition.

## Package

[@google-cloud/monitoring](https://docs.cloud.google.com/nodejs/docs/reference/monitoring/latest/overview.html)

## Constructors

### (constructor)(properties)

```
constructor(properties?: google.monitoring.v3.AlertPolicy.Condition.IPrometheusQueryLanguageCondition);
```

Constructs a new PrometheusQueryLanguageCondition.

**Parameter**

**Name**

**Description**

`properties`

`[IPrometheusQueryLanguageCondition](/nodejs/docs/reference/monitoring/latest/monitoring/protos.google.monitoring.v3.alertpolicy.condition.iprometheusquerylanguagecondition)`  

Properties to set

## Properties

### alertRule

```
public alertRule: string;
```

PrometheusQueryLanguageCondition alertRule.

### disableMetricValidation

```
public disableMetricValidation: boolean;
```

PrometheusQueryLanguageCondition disableMetricValidation.

### duration

```
public duration?: (google.protobuf.IDuration|null);
```

PrometheusQueryLanguageCondition duration.

### evaluationInterval

```
public evaluationInterval?: (google.protobuf.IDuration|null);
```

PrometheusQueryLanguageCondition evaluationInterval.

### labels

```
public labels: { [k: string]: string };
```

PrometheusQueryLanguageCondition labels.

### query

```
public query: string;
```

PrometheusQueryLanguageCondition query.

### ruleGroup

```
public ruleGroup: string;
```

PrometheusQueryLanguageCondition ruleGroup.

## Methods

### create(properties)

```
public static create(properties?: google.monitoring.v3.AlertPolicy.Condition.IPrometheusQueryLanguageCondition): google.monitoring.v3.AlertPolicy.Condition.PrometheusQueryLanguageCondition;
```

Creates a new PrometheusQueryLanguageCondition instance using the specified properties.

**Parameter**

**Name**

**Description**

`properties`

`[IPrometheusQueryLanguageCondition](/nodejs/docs/reference/monitoring/latest/monitoring/protos.google.monitoring.v3.alertpolicy.condition.iprometheusquerylanguagecondition)`  

Properties to set

**Returns**

**Type**

**Description**

`[PrometheusQueryLanguageCondition](/nodejs/docs/reference/monitoring/latest/monitoring/protos.google.monitoring.v3.alertpolicy.condition.prometheusquerylanguagecondition)`

PrometheusQueryLanguageCondition instance

### decode(reader, length)

```
public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.AlertPolicy.Condition.PrometheusQueryLanguageCondition;
```

Decodes a PrometheusQueryLanguageCondition message from the specified reader or buffer.

**Parameters**

**Name**

**Description**

`reader`

`(Reader|Uint8Array)`  

Reader or buffer to decode from

`length`

`number`  

Message length if known beforehand

**Returns**

**Type**

**Description**

`[PrometheusQueryLanguageCondition](/nodejs/docs/reference/monitoring/latest/monitoring/protos.google.monitoring.v3.alertpolicy.condition.prometheusquerylanguagecondition)`

PrometheusQueryLanguageCondition

### decodeDelimited(reader)

```
public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.AlertPolicy.Condition.PrometheusQueryLanguageCondition;
```

Decodes a PrometheusQueryLanguageCondition message from the specified reader or buffer, length delimited.

**Parameter**

**Name**

**Description**

`reader`

`(Reader|Uint8Array)`  

Reader or buffer to decode from

**Returns**

**Type**

**Description**

`[PrometheusQueryLanguageCondition](/nodejs/docs/reference/monitoring/latest/monitoring/protos.google.monitoring.v3.alertpolicy.condition.prometheusquerylanguagecondition)`

PrometheusQueryLanguageCondition

### encode(message, writer)

```
public static encode(message: google.monitoring.v3.AlertPolicy.Condition.IPrometheusQueryLanguageCondition, writer?: $protobuf.Writer): $protobuf.Writer;
```

Encodes the specified PrometheusQueryLanguageCondition message. Does not implicitly messages.

**Parameters**

**Name**

**Description**

`message`

`[IPrometheusQueryLanguageCondition](/nodejs/docs/reference/monitoring/latest/monitoring/protos.google.monitoring.v3.alertpolicy.condition.iprometheusquerylanguagecondition)`  

PrometheusQueryLanguageCondition message or plain object to encode

`writer`

`$protobuf.Writer`  

Writer to encode to

**Returns**

**Type**

**Description**

`$protobuf.Writer`

Writer

### encodeDelimited(message, writer)

```
public static encodeDelimited(message: google.monitoring.v3.AlertPolicy.Condition.IPrometheusQueryLanguageCondition, writer?: $protobuf.Writer): $protobuf.Writer;
```

Encodes the specified PrometheusQueryLanguageCondition message, length delimited. Does not implicitly messages.

**Parameters**

**Name**

**Description**

`message`

`[IPrometheusQueryLanguageCondition](/nodejs/docs/reference/monitoring/latest/monitoring/protos.google.monitoring.v3.alertpolicy.condition.iprometheusquerylanguagecondition)`  

PrometheusQueryLanguageCondition message or plain object to encode

`writer`

`$protobuf.Writer`  

Writer to encode to

**Returns**

**Type**

**Description**

`$protobuf.Writer`

Writer

### fromObject(object)

```
public static fromObject(object: { [k: string]: any }): google.monitoring.v3.AlertPolicy.Condition.PrometheusQueryLanguageCondition;
```

Creates a PrometheusQueryLanguageCondition message from a plain object. Also converts values to their respective internal types.

**Parameter**

**Name**

**Description**

`object`

`{ [k: string]: any }`  

Plain object

**Returns**

**Type**

**Description**

`[PrometheusQueryLanguageCondition](/nodejs/docs/reference/monitoring/latest/monitoring/protos.google.monitoring.v3.alertpolicy.condition.prometheusquerylanguagecondition)`

PrometheusQueryLanguageCondition

### getTypeUrl(typeUrlPrefix)

```
public static getTypeUrl(typeUrlPrefix?: string): string;
```

Gets the default type url for PrometheusQueryLanguageCondition

**Parameter**

**Name**

**Description**

`typeUrlPrefix`

`string`  

your custom typeUrlPrefix(default "type.googleapis.com")

**Returns**

**Type**

**Description**

`string`

The default type url

### toJSON()

```
public toJSON(): { [k: string]: any };
```

Converts this PrometheusQueryLanguageCondition to JSON.

**Returns**

**Type**

**Description**

`{ [k: string]: any }`

JSON object

### toObject(message, options)

```
public static toObject(message: google.monitoring.v3.AlertPolicy.Condition.PrometheusQueryLanguageCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };
```

Creates a plain object from a PrometheusQueryLanguageCondition message. Also converts values to other types if specified.

**Parameters**

**Name**

**Description**

`message`

`[PrometheusQueryLanguageCondition](/nodejs/docs/reference/monitoring/latest/monitoring/protos.google.monitoring.v3.alertpolicy.condition.prometheusquerylanguagecondition)`  

PrometheusQueryLanguageCondition

`options`

`$protobuf.IConversionOptions`  

Conversion options

**Returns**

**Type**

**Description**

`{ [k: string]: any }`

Plain object

### verify(message)

```
public static verify(message: { [k: string]: any }): (string|null);
```

Verifies a PrometheusQueryLanguageCondition message.

**Parameter**

**Name**

**Description**

`message`

`{ [k: string]: any }`  

Plain object to verify

**Returns**

**Type**

**Description**

`(string|null)`

`null` if valid, otherwise the reason why it is not

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
