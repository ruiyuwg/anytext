Parameter

Type

Description

Example

object

The configurations of Managed Service for OpenTelemetry.

type

string

The protocol type. Only Jaeger is supported.

Jaeger

params

object

The parameters of Managed Service for OpenTelemetry. If the protocol type is set to Jaeger, the parameter is in map\[string\]string format, in which the key is "endpoint" and the value is the internal endpoint of Managed Service for OpenTelemetry. Sample endpoint: `http://tracing-analysis-dc-hz.aliyuncs.com/adapt_xxx/api/otlp/traces`.

string

The parameters of Managed Service for OpenTelemetry.

{"endpoint": "tracing\_analysis\_jaeger\_endpoint"}
