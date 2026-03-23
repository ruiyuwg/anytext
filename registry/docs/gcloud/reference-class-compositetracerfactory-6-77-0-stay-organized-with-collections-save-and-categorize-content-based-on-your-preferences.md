-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CompositeTracerFactory (6.77.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public class CompositeTracerFactory extends BaseApiTracerFactory
```

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [BaseApiTracerFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.tracing.BaseApiTracerFactory.html) \> CompositeTracerFactory

## Inherited Members

[BaseApiTracerFactory.getInstance()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.tracing.BaseApiTracerFactory.html#com_google_api_gax_tracing_BaseApiTracerFactory_getInstance__)

[BaseApiTracerFactory.newTracer(ApiTracer,SpanName,ApiTracerFactory.OperationType)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.tracing.BaseApiTracerFactory.html#com_google_api_gax_tracing_BaseApiTracerFactory_newTracer_com_google_api_gax_tracing_ApiTracer_com_google_api_gax_tracing_SpanName_com_google_api_gax_tracing_ApiTracerFactory_OperationType_)

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Constructors

### CompositeTracerFactory(List<ApiTracerFactory> apiTracerFactories)

```
public CompositeTracerFactory(List<ApiTracerFactory> apiTracerFactories)
```

**Parameter**

**Name**

**Description**

`apiTracerFactories`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ApiTracerFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.tracing.ApiTracerFactory.html)>`  

## Methods

### newTracer(ApiTracer parent, SpanName spanName, ApiTracerFactory.OperationType operationType)

```
public ApiTracer newTracer(ApiTracer parent, SpanName spanName, ApiTracerFactory.OperationType operationType)
```

**Parameters**

**Name**

**Description**

`parent`

`[ApiTracer](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.tracing.ApiTracer.html)`  

`spanName`

`[SpanName](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.tracing.SpanName.html)`  

`operationType`

`[OperationType](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.tracing.ApiTracerFactory.OperationType.html)`  

**Returns**

**Type**

**Description**

`[ApiTracer](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.tracing.ApiTracer.html)`

**Overrides**

[BaseApiTracerFactory.newTracer(ApiTracer parent, SpanName spanName, ApiTracerFactory.OperationType operationType)](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.tracing.BaseApiTracerFactory.html#com_google_api_gax_tracing_BaseApiTracerFactory_newTracer_com_google_api_gax_tracing_ApiTracer_com_google_api_gax_tracing_SpanName_com_google_api_gax_tracing_ApiTracerFactory_OperationType_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
