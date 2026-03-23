Instrument your Android application with OpenTelemetry to report trace data to Managed Service for OpenTelemetry. After traces start flowing, the console provides application topology, trace views, abnormal and slow transaction detection, and SQL analysis.

This topic walks through the full integration for Java and Kotlin Android projects: adding dependencies, configuring network access, initializing the SDK, creating spans, and connecting client traces to a backend server.

Sample code: [opentelemetry-android-demo](https://github.com/alibabacloud-observability/android-demo)

## Prerequisites

Before you begin, make sure that you have:

-   An Android project in Android Studio with Minimum SDK **API 24: Android 7.0 (Nougat)** or later
    
-   An OpenTelemetry endpoint and authentication token from the Managed Service for OpenTelemetry console
    

### Create an Android project

1.  Create an application in Android Studio. Select **Basic Views Activity** and click **Next**.
    

![Create application in Android Studio](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1712016861/p668108.png)

1.  Select **Java** or **Kotlin** as Language, select **API 24: Android 7.0 (Nougat)** as Minimum SDK, and then click **Finish**.
    

### Get the OpenTelemetry endpoint

1.  Log on to the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Cluster Configurations**. On the page that appears, click the **Access point information** tab.
    
3.  In the top navigation bar, select a region. In the **Cluster Information** section, turn on **Show Token**.
    
4.  Set the **Client** parameter to **OpenTelemetry**.
    
5.  Copy the endpoint from the **Related Information** column.
    

![OpenTelemetry access point information](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9876253861/p506312.png)

If the application runs in an Alibaba Cloud production environment, use a VPC endpoint. Otherwise, use a public endpoint.

## Step 1: Add dependencies

Add the following dependencies to the `build.gradle` file of the module or project. This example uses OpenTelemetry SDK for Java 1.25.0. For other versions, see [Releases of opentelemetry-java](https://github.com/open-telemetry/opentelemetry-java/releases). For the complete build file, see [build.gradle](https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidJavaDemo/app/build.gradle).

```
implementation platform('io.opentelemetry:opentelemetry-bom:1.25.0')
implementation "io.opentelemetry:opentelemetry-api"
implementation "io.opentelemetry:opentelemetry-context"
implementation 'io.opentelemetry:opentelemetry-exporter-otlp'
implementation 'io.opentelemetry:opentelemetry-exporter-logging'
implementation 'io.opentelemetry:opentelemetry-extension-kotlin'
implementation 'io.opentelemetry:opentelemetry-sdk'
implementation 'io.opentelemetry:opentelemetry-semconv'
```

## Step 2: Configure network access

Android requires explicit network security configuration to allow cleartext HTTP traffic to the reporting endpoint.

### Create a network security config

Create a file named `network_security_config.xml` in the `app/res/xml` directory:

```
<!-- Full file: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidJavaDemo/app/src/main/res/xml/network_security_config.xml -->

<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
  <domain-config cleartextTrafficPermitted="true">
    <!-- Replace with your endpoint domain (without http://, port, or path). -->
    <domain includeSubdomains="true">tracing-analysis-dc-hz.aliyuncs.com</domain>
  </domain-config>
</network-security-config>
```

### Update AndroidManifest.xml

Add the `INTERNET` permission and reference the network security config in `app/src/main/AndroidManifest.xml`:

```
<!-- Full file: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidJavaDemo/app/src/main/AndroidManifest.xml -->

<?xml version="1.0" encoding="utf-8"?>
<manifest ...>
  <!-- Grant network access. -->
  <uses-permission android:name="android.permission.INTERNET" />

  <application
    ...
    android:networkSecurityConfig="@xml/network_security_config"
    ...>

    ...
  </application>

</manifest>
```

## Step 3: Initialize OpenTelemetry

Create an `OpenTelemetryUtil` utility class in the same directory as `MainActivity`. Two transport protocols are available: gRPC and HTTP.

### Option A: Report over gRPC

Java

```
/**
 * Full code: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidJavaDemo/app/src/main/java/com/example/androidjavademo/OpenTelemetryUtil.java
 */

Resource otelResource = Resource.getDefault().merge(
    Resource.create(
        Attributes.of(
            ResourceAttributes.SERVICE_NAME, "<your-service-name>",
            ResourceAttributes.HOST_NAME, "<your-host-name>"
        )
    )
);

SdkTracerProvider sdkTracerProvider = SdkTracerProvider.builder()
    .addSpanProcessor(SimpleSpanProcessor.create(LoggingSpanExporter.create())) // Optional: log spans to Logcat
    .addSpanProcessor(BatchSpanProcessor.builder(
        OtlpGrpcSpanExporter.builder()
             .setEndpoint("<gRPC-endpoint>") // Example: http://tracing-analysis-dc-hz.aliyuncs.com:8090
             .addHeader("Authentication", "<gRPC-token>") // Example: xxxx@xxxx_xxxx@xxxx
             .build()).build()
    )
    .setResource(otelResource)
    .build();

OpenTelemetry openTelemetry = OpenTelemetrySdk.builder()
    .setTracerProvider(sdkTracerProvider)
    .setPropagators(ContextPropagators.create(W3CTraceContextPropagator.getInstance()))
    .buildAndRegisterGlobal();

tracer = openTelemetry.getTracer("android-tracer", "1.0.0");
```

Kotlin

```
/**
 * Full code: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidKotlinDemo/app/src/main/java/com/example/androidkotlindemo/OpenTelemetryUtil.kt
 */

val otelResource = Resource.getDefault().merge(
    Resource.create(
        Attributes.of(
            ResourceAttributes.SERVICE_NAME, "<your-service-name>",
            ResourceAttributes.HOST_NAME, "<your-host-name>"
        )
    )
)

val sdkTracerProvider = SdkTracerProvider.builder()
    .addSpanProcessor(SimpleSpanProcessor.create(LoggingSpanExporter.create())) // Optional: log spans to Logcat
    .addSpanProcessor(
        BatchSpanProcessor.builder(
            OtlpGrpcSpanExporter.builder()
                .setEndpoint("<gRPC-endpoint>") // Example: http://tracing-analysis-dc-hz.aliyuncs.com:8090
                .addHeader("Authentication", "<gRPC-token>") // Example: xxxx@xxxx_xxxx@xxxx
                .build()
        ).build()
    )
    .setResource(otelResource)
    .build()

val openTelemetry: OpenTelemetry = OpenTelemetrySdk.builder()
    .setTracerProvider(sdkTracerProvider)
    .setPropagators(ContextPropagators.create(W3CTraceContextPropagator.getInstance()))
    .buildAndRegisterGlobal()

tracer = openTelemetry.getTracer("android-tracer", "1.0.0")
```

### Option B: Report over HTTP

Java

```
/**
 * Full code: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidJavaDemo/app/src/main/java/com/example/androidjavademo/OpenTelemetryUtil.java
 */

Resource otelResource = Resource.getDefault().merge(
    Resource.create(
        Attributes.of(
            ResourceAttributes.SERVICE_NAME, "<your-service-name>",
            ResourceAttributes.HOST_NAME, "<your-host-name>"
        )
    )
);

SdkTracerProvider sdkTracerProvider = SdkTracerProvider.builder()
    .addSpanProcessor(SimpleSpanProcessor.create(LoggingSpanExporter.create())) // Optional: log spans to Logcat
    .addSpanProcessor(BatchSpanProcessor.builder(
        OtlpHttpSpanExporter.builder()
             .setEndpoint("<HTTP-endpoint>") // Example: http://tracing-analysis-dc-hz.aliyuncs.com/adapt_xxxx@xxxx_xxxx@xxxx/api/otlp/traces
             .build()).build()
    )
    .setResource(otelResource)
    .build();

OpenTelemetry openTelemetry = OpenTelemetrySdk.builder()
    .setTracerProvider(sdkTracerProvider)
    .setPropagators(ContextPropagators.create(W3CTraceContextPropagator.getInstance()))
    .buildAndRegisterGlobal();

tracer = openTelemetry.getTracer("android-tracer", "1.0.0");
```

Kotlin

```
/**
 * Full code: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidKotlinDemo/app/src/main/java/com/example/androidkotlindemo/OpenTelemetryUtil.kt
 */

val otelResource = Resource.getDefault().merge(
    Resource.create(
        Attributes.of(
            ResourceAttributes.SERVICE_NAME, "<your-service-name>",
            ResourceAttributes.HOST_NAME, "<your-host-name>"
        )
    )
)

val sdkTracerProvider = SdkTracerProvider.builder()
    .addSpanProcessor(SimpleSpanProcessor.create(LoggingSpanExporter.create())) // Optional: log spans to Logcat
    .addSpanProcessor(BatchSpanProcessor.builder(
        OtlpHttpSpanExporter.builder()
            .setEndpoint("<HTTP-endpoint>") // Example: http://tracing-analysis-dc-hz.aliyuncs.com/adapt_xxxx@xxxx_xxxx@xxxx/api/otlp/traces
            .build()).build()
    )
    .setResource(otelResource)
    .build()

val openTelemetry: OpenTelemetry = OpenTelemetrySdk.builder()
    .setTracerProvider(sdkTracerProvider)
    .setPropagators(ContextPropagators.create(W3CTraceContextPropagator.getInstance()))
    .buildAndRegisterGlobal()

tracer = openTelemetry.getTracer("android-tracer", "1.0.0")
```

### Placeholder reference

Replace the following placeholders with values from the console:

**Placeholder**

**Description**

**Example**

`<your-service-name>`

Application name displayed in the console

`my-android-app`

`<your-host-name>`

Host identifier for the device or environment

`android-device-01`

`<gRPC-endpoint>`

gRPC endpoint from the console

`http://tracing-analysis-dc-hz.aliyuncs.com:8090`

`<gRPC-token>`

Authentication token for gRPC

`xxxx@xxxx_xxxx@xxxx`

`<HTTP-endpoint>`

HTTP endpoint from the console

`http://tracing-analysis-dc-hz.aliyuncs.com/adapt_xxxx@xxxx_xxxx@xxxx/api/otlp/traces`

### Call init() in MainActivity

Call `OpenTelemetryUtil.init()` inside the `onCreate` method of `MainActivity`.

Java

```
/**
 * Full code: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidJavaDemo/app/src/main/java/com/example/androidjavademo/MainActivity.java
 */

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Initialize OpenTelemetry
        OpenTelemetryUtil.init();
        ...
    }
}
```

Kotlin

```
/**
 * Full code: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidKotlinDemo/app/src/main/java/com/example/androidkotlindemo/MainActivity.kt
 */

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        WindowCompat.setDecorFitsSystemWindows(window, false)
        super.onCreate(savedInstanceState)
        // Initialize OpenTelemetry
        OpenTelemetryUtil.init()
        ...
    }
}
```

## Step 4: Create spans

Each span represents a single operation within a trace. The following examples show how to create a basic span, attach attributes and events, handle errors, and build nested parent-child spans.

### Create a basic span

In the `FirstFragment` file, create a span inside the button tap event handler.

Java

```
/**
 * Full code: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidJavaDemo/app/src/main/java/com/example/androidjavademo/FirstFragment.java
 */

public void onClick(View view) {
    Tracer tracer = OpenTelemetryUtil.getTracer();
    Span span = tracer.spanBuilder("First Fragment Button onClick").startSpan();
    try (Scope scope = span.makeCurrent()) {
        System.out.println(span.getSpanContext().getTraceId());
        ...
    } finally {
        span.end();
    }
}
```

Kotlin

```
/**
 * Full code: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidKotlinDemo/app/src/main/java/com/example/androidkotlindemo/FirstFragment.kt
 */

binding.buttonFirst.setOnClickListener {
    val tracer: Tracer = OpenTelemetryUtil.getTracer()!!
    val span = tracer.spanBuilder("First Fragment Button onClick").startSpan()
    try {
        span.makeCurrent().use { scope ->
            println(span.spanContext.traceId)
            println(span.spanContext.spanId)

            findNavController().navigate(R.id.action_FirstFragment_to_SecondFragment)
        }
    } catch (t: Throwable) {
        span.setStatus(StatusCode.ERROR, "Something wrong in onClick")
        throw t
    } finally {
        span.end()
    }
}
```

### Add attributes and events

Attributes attach key-value metadata to a span. Events mark points in time during the span lifetime.

Java

```
/**
 * Full code: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidJavaDemo/app/src/main/java/com/example/androidjavademo/FirstFragment.java
 */

// Set a custom attribute
span.setAttribute("key", "value");

Attributes eventAttributes = Attributes.of(
    AttributeKey.stringKey("key"), "value",
    AttributeKey.longKey("result"), 0L);
// Add an event with attributes
span.addEvent("onClick", eventAttributes);
```

Kotlin

```
/**
 * Full code: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidKotlinDemo/app/src/main/java/com/example/androidkotlindemo/FirstFragment.kt
 */

// Set a custom attribute
span.setAttribute("key", "value")
val eventAttributes =
    Attributes.of(
        AttributeKey.stringKey("key"), "value",
        AttributeKey.longKey("result"), 0L
    )

// Add an event with attributes
span.addEvent("onClick", eventAttributes)
```

### Set span status on errors

Wrap span logic in a try-catch block and set the status to `ERROR` when an exception occurs.

Java

```
/**
 * Full code: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidJavaDemo/app/src/main/java/com/example/androidjavademo/FirstFragment.java
 */

try (Scope scope = span.makeCurrent()) {
    ...
} catch (Throwable t) {
    span.setStatus(StatusCode.ERROR, "Something wrong in onClick");
    throw t;
} finally {
    span.end();
}
```

Kotlin

```
/**
 * Full code: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidKotlinDemo/app/src/main/java/com/example/androidkotlindemo/FirstFragment.kt
 */

try {
    ...
} catch (t: Throwable) {
    span.setStatus(StatusCode.ERROR, "Something wrong in onClick")
    throw t
} finally {
    span.end()
}
```

### Create nested spans

To build parent-child relationships, start a child span while the parent span scope is active. The SDK links them automatically through context propagation.

Java

```
/**
 * Full code: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidJavaDemo/app/src/main/java/com/example/androidjavademo/FirstFragment.java
 */

public void parentSpan() {
    Tracer tracer = OpenTelemetryUtil.getTracer();
    Span span = tracer.spanBuilder("Parent Span").startSpan();
    try (Scope scope = span.makeCurrent()) {
        System.out.println(span.getSpanContext().getTraceId());
        System.out.println(span.getSpanContext().getSpanId());
        childSpan(); // Child span inherits the parent context
    } finally {
        span.end();
    }
}

public void childSpan() {
    Tracer tracer = OpenTelemetryUtil.getTracer();
    Span span = tracer.spanBuilder("Child Span").startSpan();
    try (Scope scope = span.makeCurrent()) {
        System.out.println(span.getSpanContext().getTraceId());
        System.out.println(span.getSpanContext().getSpanId());
    } finally {
        span.end();
    }
}
```

Kotlin

```
/**
 * Full code: https://github.com/alibabacloud-observability/android-demo/blob/master/AndroidKotlinDemo/app/src/main/java/com/example/androidkotlindemo/FirstFragment.kt
 */

fun parentSpan() {
    val tracer: Tracer = OpenTelemetryUtil.getTracer()!!
    val span = tracer.spanBuilder("Parent Span").startSpan()
    try {
        span.makeCurrent().use { scope ->
            println(span.spanContext.traceId)
            println(span.spanContext.spanId)
            childSpan() // Child span inherits the parent context
        }
    } finally {
        span.end()
    }
}

fun childSpan() {
    val tracer: Tracer = OpenTelemetryUtil.getTracer()!!
    val span = tracer.spanBuilder("Child Span").startSpan()
    try {
        span.makeCurrent().use { scope ->
            println(span.spanContext.traceId)
            println(span.spanContext.spanId)
        }
    } finally {
        span.end()
    }
}
```

## Step 5: Run and verify

1.  Run the project in Android Studio and tap the button on the application page.
    

![Application running in emulator](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1712016861/p668170.png)

1.  Check Logcat for span data exported by LoggingSpanExporter.
    

![Logcat output showing span data](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1712016861/p668194.png)

1.  Open the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/). On the **Applications** page, click the application name to view trace data.
    

![Trace data in the console](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1712016861/p668143.png)

## Step 6: Connect client and server traces

To correlate Android client traces with backend server traces, both sides must use the same context propagation header format.

### Match the propagation format to the server

Different tracing systems use different HTTP header formats. Set the client propagator to the format the server expects.

**Server format**

**Client propagator**

**Action**

W3C Trace Context (OpenTelemetry default)

`W3CTraceContextPropagator`

None required -- this is the default

B3 / B3 Multi (Zipkin)

`B3Propagator`

Set `textPropagators` to `B3Propagator`

Jaeger

`JaegerPropagator`

Set `textPropagators` to `JaegerPropagator`

For more information, see [Specify the format to pass trace data](/help/en/opentelemetry/use-cases/opentelemetry-specifies-the-pass-through-header-format).

**B3 / B3 Multi (Zipkin)**

```
OpenTelemetry openTelemetry = OpenTelemetrySdk.builder()
        .setTracerProvider(sdkTracerProvider)
        .setPropagators(ContextPropagators.create(TextMapPropagator.composite(
                B3Propagator.injectingMultiHeaders(),
                B3Propagator.injectingSingleHeader())))
        .buildAndRegisterGlobal();
```

**Jaeger**

```
OpenTelemetry openTelemetry = OpenTelemetrySdk.builder()
        .setTracerProvider(sdkTracerProvider)
        .setPropagators(ContextPropagators.create(TextMapPropagator.composite(
                JaegerPropagator.getInstance())))
        .buildAndRegisterGlobal();
```

**Multiple formats (W3C Trace Context + B3 + Jaeger)**

```
OpenTelemetry openTelemetry = OpenTelemetrySdk.builder()
        .setTracerProvider(sdkTracerProvider)
        .setPropagators(ContextPropagators.create(TextMapPropagator.composite(
                W3CTraceContextPropagator.getInstance(),
                B3Propagator.injectingMultiHeaders(),
                B3Propagator.injectingSingleHeader(),
                JaegerPropagator.getInstance())))
        .buildAndRegisterGlobal();
```

### Add OkHttp instrumentation

The `opentelemetry-okhttp-3.0` library automatically instruments all HTTP requests made through OkHttp3, creating a span for each network call and injecting trace context headers.

Add the following dependencies to `build.gradle`:

```
dependencies {
    ...
    implementation 'io.opentelemetry.instrumentation:opentelemetry-okhttp-3.0:2.3.0-alpha'
    implementation 'com.squareup.okhttp3:okhttp:4.12.0'
}
```

Create an `OkHttpConfiguration` class that wraps `OkHttpClient` with OpenTelemetry instrumentation:

```
import io.opentelemetry.api.OpenTelemetry;
import io.opentelemetry.instrumentation.okhttp.v3_0.OkHttpTelemetry;
import okhttp3.Call;
import okhttp3.OkHttpClient;


public class OkHttpConfiguration {

    // Use this Call.Factory for all HTTP calls to enable automatic tracing.
    public Call.Factory createTracedClient(OpenTelemetry openTelemetry) {
        return OkHttpTelemetry.builder(openTelemetry).build().newCallFactory(createClient());
    }

    private OkHttpClient createClient() {
        return new OkHttpClient.Builder().build();
    }
}
```

### Send a traced HTTP request

Use the instrumented `Call.Factory` to send requests. Each request generates a span linked to the current trace context automatically.

```
private void callHttpService() throws IOException {
    Tracer tracer = OpenTelemetryUtil.getTracer();
    Span span = tracer.spanBuilder("AsyncRequestZipkinServer").startSpan();
    System.out.println("AsyncRequestZipkinServer TraceID: " + span.getSpanContext().getTraceId());
    System.out.println("AsyncRequestZipkinServer SpanID: " + span.getSpanContext().getSpanId());
    try (Scope scope = span.makeCurrent()) {
        OkHttpConfiguration configuration = new OkHttpConfiguration();
        Call.Factory tracedClient = configuration.createTracedClient(GlobalOpenTelemetry.get());

        Request request = new Request.Builder().url("${Server address}").get().build();

        Call call = tracedClient.newCall(request);
        try (Response response = call.execute()) {
            String responseBody = response.body().string();
            System.out.println(responseBody);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }  finally {
        span.end();
    }
}
```

Replace `${Server address}` with the URL of the backend server.

Complete FirstFragment.java with async HTTP calls

```
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.navigation.fragment.NavHostFragment;

import com.example.androidjavademo.databinding.FragmentFirstBinding;

import java.io.IOException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.common.AttributeKey;
import io.opentelemetry.api.common.Attributes;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.StatusCode;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.context.Scope;
import okhttp3.Call;
import okhttp3.Request;
import okhttp3.Response;

public class FirstFragment extends Fragment {

    private FragmentFirstBinding binding;

    @Override
    public View onCreateView(
            LayoutInflater inflater, ViewGroup container,
            Bundle savedInstanceState
    ) {

        binding = FragmentFirstBinding.inflate(inflater, container, false);
        return binding.getRoot();

    }

    public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        binding.buttonFirst.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Tracer tracer = OpenTelemetryUtil.getTracer();
                Span span = tracer.spanBuilder("First Fragment Button onClick").startSpan();
                try (Scope scope = span.makeCurrent()) {
                    System.out.println(span.getSpanContext().getTraceId());
                    System.out.println(span.getSpanContext().getSpanId());
                    span.setAttribute("key", "value");

                    Attributes eventAttributes = Attributes.of(
                            AttributeKey.stringKey("key"), "value",
                            AttributeKey.longKey("result"), 0L);

                    span.addEvent("onClick", eventAttributes);

                    parentSpan();

                    NavHostFragment.findNavController(FirstFragment.this)
                            .navigate(R.id.action_FirstFragment_to_SecondFragment);
                } catch (Throwable t) {
                    span.setStatus(StatusCode.ERROR, "Something wrong in onClick");
                    throw t;
                } finally {
                    span.end();
                }
            }
        });
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }

    public void parentSpan() {

        ExecutorService executorService = Executors.newSingleThreadExecutor();
        Handler handler = new Handler(Looper.getMainLooper());

        Tracer tracer = OpenTelemetryUtil.getTracer();
        Span span = tracer.spanBuilder("Parent Span").startSpan();
        try (Scope scope = span.makeCurrent()) {
            System.out.println(span.getSpanContext().getTraceId());
            System.out.println(span.getSpanContext().getSpanId());
            executorService.execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        callHttpService();
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                    handler.post(new Runnable() {
                        @Override
                        public void run() {
                            childSpan();
                        }
                    });
                }
            });

            executorService.shutdown();
        } finally {
            span.end();
        }
    }

    public void childSpan() {
        Tracer tracer = OpenTelemetryUtil.getTracer();
        Span span = tracer.spanBuilder("Child Span").startSpan();
        try (Scope scope = span.makeCurrent()) {
            System.out.println(span.getSpanContext().getTraceId());
            System.out.println(span.getSpanContext().getSpanId());
        } finally {
            span.end();
        }
    }

    private void callHttpService() throws IOException {
        Tracer tracer = OpenTelemetryUtil.getTracer();
        Span span = tracer.spanBuilder("AsyncRequestZipkinServer").startSpan();
        System.out.println("AsyncRequestZipkinServer TraceID: " + span.getSpanContext().getTraceId());
        System.out.println("AsyncRequestZipkinServer SpanID: " + span.getSpanContext().getSpanId());
        try (Scope scope = span.makeCurrent()) {
            OkHttpConfiguration configuration = new OkHttpConfiguration();
            Call.Factory tracedClient = configuration.createTracedClient(GlobalOpenTelemetry.get());

            Request request = new Request.Builder().url("${Server address}").get().build();
            Call call = tracedClient.newCall(request);
            try (Response response = call.execute()) {
                String responseBody = response.body().string();
                System.out.println(responseBody);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }  finally {
            span.end();
        }
    }

}
```

### Verify the end-to-end trace

On the **Trace Explorer** page of the Managed Service for OpenTelemetry console, verify that client and server spans appear in the same trace. The following figure shows an example where `AsyncRequestZipkinServer` is the Android client span and `zipkin-demo-server` is the backend server span.

![End-to-end trace in Trace Explorer](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2197477171/p798020.png)
