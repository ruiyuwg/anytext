Instrument your Python application with OpenTelemetry to export trace data to Managed Service for OpenTelemetry. Once traces flow into the service, you can view application topology, individual traces, abnormal transactions, slow transactions, and SQL analysis in the console.

OpenTelemetry supports three instrumentation approaches:

**Approach**

**Best for**

**Effort**

[Automatic instrumentation](#section-kdz-ttt-mi8)

Quick setup with supported frameworks -- no code changes required

Low

[Manual instrumentation](#section-hfw-wmn-ns5)

Full control over spans, attributes, and baggage propagation

Medium

[Combined instrumentation](#section-f23-xe2-gvi)

Auto-instrumented frameworks plus custom spans for business logic

Medium

**Note**

For richer observability -- including LLM framework support for LlamaIndex, Dify, LangChain, OpenAI, and Qwen, along with additional metrics and continuous profiling -- consider the [Alibaba Cloud agent for Python](/help/en/arms/application-monitoring/user-guide/start-monitoring-python-applications/) instead of the open-source OpenTelemetry agent.

## Quick start

The following example demonstrates automatic instrumentation with a minimal Flask application. You can have traces flowing to your console in under five minutes.

1.  Install the required packages:
    
    ```
       pip install flask opentelemetry-distro opentelemetry-exporter-otlp
       opentelemetry-bootstrap -a install
    ```
    
2.  Create a file named `app.py`:
    
    ```
       from flask import Flask
    
       app = Flask(__name__)
    
       @app.route("/hello")
       def hello():
           return "Hello, World!"
    ```
    
3.  Run the application with automatic instrumentation: Replace `<http-endpoint>` with the HTTP endpoint of your Managed Service for OpenTelemetry instance, for example `http://tracing-analysis-dc-hz.aliyuncs.com/adapt_xxx/api/otlp/traces`.
    
    ```
       opentelemetry-instrument \
           --traces_exporter console,otlp_proto_http \
           --metrics_exporter none \
           --service_name my-python-app \
           --exporter_otlp_traces_endpoint <http-endpoint> \
           flask run -p 8080
    ```
    
4.  Open `http://127.0.0.1:8080/hello` in a browser. The console displays trace data similar to:
    
    ```
       {
           "name": "GET /hello",
           "context": {
               "trace_id": "0x5e8e...",
               "span_id": "0xa3f1...",
               "trace_state": "[]"
           },
           "kind": "SpanKind.SERVER",
           "parent_id": null,
           "status": {
               "status_code": "UNSET"
           },
           "attributes": {
               "http.method": "GET",
               "http.url": "http://127.0.0.1:8080/hello",
               "http.status_code": 200
           }
       }
    ```
    

For deeper control, see [Manual instrumentation](#section-hfw-wmn-ns5) or [Combined instrumentation](#section-f23-xe2-gvi).

## Supported frameworks

OpenTelemetry provides automatic instrumentation plug-ins for common Python frameworks. The following table lists supported packages. For the full list, see the [opentelemetry-python-contrib](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation) repository on GitHub.

**Note**

Version notation `~= V.N` means `>= V.N` and `== V.*`. For example, `aiohttp ~= 3.0` means version >= 3.0 and version == 3.\\\*.

Supported Python frameworks

**Plug-in**

**Supported version**

[opentelemetry-instrumentation-django](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-django)

django >= 1.10

[opentelemetry-instrumentation-fastapi](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-fastapi)

fastapi ~= 0.58

[opentelemetry-instrumentation-flask](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-flask)

flask - \[1.0, 3.0)

[opentelemetry-instrumentation-requests](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-requests)

requests ~= 2.0

[opentelemetry-instrumentation-grpc](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-grpc)

grpcio ~= 1.27

[opentelemetry-instrumentation-redis](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-redis)

redis >= 2.6

[opentelemetry-instrumentation-sqlalchemy](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-sqlalchemy)

sqlalchemy

[opentelemetry-instrumentation-pymongo](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-pymongo)

pymongo - \[3.1, 5.0)

[opentelemetry-instrumentation-celery](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-celery)

celery - \[4.0, 6.0)

[opentelemetry-instrumentation-aiohttp-client](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-aiohttp-client)

aiohttp ~= 3.0

[opentelemetry-instrumentation-aiohttp-server](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-aiohttp-server)

aiohttp ~= 3.0

[opentelemetry-instrumentation-httpx](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-httpx)

httpx >= 0.18.0

[opentelemetry-instrumentation-tornado](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-tornado)

tornado >= 5.1.1

[opentelemetry-instrumentation-starlette](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-starlette)

starlette ~= 0.13.0

[opentelemetry-instrumentation-elasticsearch](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-elasticsearch)

elasticsearch >= 2.0

[opentelemetry-instrumentation-psycopg2](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-psycopg2)

psycopg2 >= 2.7.3.1

[opentelemetry-instrumentation-mysql](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-mysql)

mysql-connector-python ~= 8.0

[opentelemetry-instrumentation-pymysql](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-pymysql)

PyMySQL < 2

[opentelemetry-instrumentation-falcon](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-falcon)

falcon - \[1.4.1, 4.0.0)

[opentelemetry-instrumentation-pyramid](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-pyramid)

pyramid >= 1.7

[opentelemetry-instrumentation-kafka-python](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-kafka-python)

kafka-python >= 2.0

[opentelemetry-instrumentation-confluent-kafka](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-confluent-kafka)

confluent-kafka - \[1.8.2, 2.2.0\]

[opentelemetry-instrumentation-boto](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-boto)

boto ~= 2.0

[opentelemetry-instrumentation-botocore](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-botocore)

botocore ~= 1.0

[opentelemetry-instrumentation-boto3sqs](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-boto3sqs)

boto3 ~= 1.0

[opentelemetry-instrumentation-asgi](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-asgi)

asgiref ~= 3.0

[opentelemetry-instrumentation-asyncpg](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-asyncpg)

asyncpg >= 0.12.0

[opentelemetry-instrumentation-aiopg](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-aiopg)

aiopg - \[0.13.0, 2.0.0)

[opentelemetry-instrumentation-aio-pika](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-aio-pika)

aio\_pika - \[7.2.0, 10.0.0)

[opentelemetry-instrumentation-aws-lambda](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-aws-lambda)

aws\_lambda

[opentelemetry-instrumentation-cassandra](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-cassandra)

cassandra-driver ~= 3.25, scylla-driver ~= 3.25

[opentelemetry-instrumentation-dbapi](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-dbapi)

dbapi

[opentelemetry-instrumentation-jinja2](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-jinja2)

jinja2 - \[2.7, 4.0)

[opentelemetry-instrumentation-logging](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-logging)

logging

[opentelemetry-instrumentation-mysqlclient](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-mysqlclient)

mysqlclient < 3

[opentelemetry-instrumentation-pika](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-pika)

pika >= 0.12.0

[opentelemetry-instrumentation-pymemcache](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-pymemcache)

pymemcache - \[1.3.5, 5)

[opentelemetry-instrumentation-remoulade](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-remoulade)

remoulade >= 0.50

[opentelemetry-instrumentation-sqlite3](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-sqlite3)

sqlite3

[opentelemetry-instrumentation-system-metrics](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-system-metrics)

psutil >= 5

[opentelemetry-instrumentation-tortoiseorm](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-tortoiseorm)

tortoise-orm >= 0.17.0

[opentelemetry-instrumentation-urllib](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-urllib)

urllib

[opentelemetry-instrumentation-urllib3](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-urllib3)

urllib3 - \[1.0.0, 3.0.0)

[opentelemetry-instrumentation-wsgi](https://github.com/open-telemetry/opentelemetry-python-contrib/blob/main/instrumentation/opentelemetry-instrumentation-wsgi)

wsgi

## Sample code

Download the complete sample code from the [python-opentelemetry-demo](https://github.com/alibabacloud-observability/python-demo) repository on GitHub.

## Automatic instrumentation

Automatic instrumentation uses the `opentelemetry-instrument` CLI tool to inject tracing into supported frameworks without modifying application code. This is the fastest way to start collecting traces.

### Prerequisites

Before you begin, make sure you have:

-   Python 3.6 or later
    
-   The HTTP endpoint of your Managed Service for OpenTelemetry instance
    

### Step 1: Install dependencies

```
pip install django requests opentelemetry-distro opentelemetry-exporter-otlp
opentelemetry-bootstrap -a install
```

The `opentelemetry-bootstrap` command detects installed libraries and installs matching instrumentation plug-ins.

### Step 2: Create a Django project

1.  Create a project and an application:
    
    ```
       django-admin startproject AutoAndManualDemo
       cd AutoAndManualDemo
       python manage.py startapp helloworld
    ```
    
2.  Add the following code to `AutoAndManualDemo/helloworld/views.py`:
    
    ```
       from django.http import HttpResponse
       from datetime import datetime
    
       def hello_world_view(request):
           result = "Hello World!  Current Time =" + str(get_time())
           return HttpResponse(result)
    
       def get_time():
           now = datetime.now()
           return now.strftime("%H:%M:%S")
    ```
    
3.  Create the file `AutoAndManualDemo/helloworld/urls.py` with the following content:
    
    ```
       from django.urls import path
       from . import views
    
       urlpatterns = [
           path('', views.hello_world_view, name='helloworld')
       ]
    ```
    
4.  Register the application URL in `AutoAndManualDemo/AutoAndManualDemo/urls.py`:
    
    ```
       from django.contrib import admin
       from django.urls import path, include
    
       urlpatterns = [
           path('admin/', admin.site.urls),
           path('helloworld/', include('helloworld.urls')),
       ]
    ```
    

### Step 3: Run with automatic instrumentation

Run the application with the `opentelemetry-instrument` wrapper. Replace the placeholders with your actual values.

```
opentelemetry-instrument \
    --traces_exporter console,otlp_proto_http \
    --metrics_exporter none \
    --service_name <your-service-name> \
    --exporter_otlp_traces_endpoint <http-endpoint> \
    python manage.py runserver --noreload
```

**Placeholder**

**Description**

**Example**

`<your-service-name>`

Name that identifies your application in the console

`my-python-app`

`<http-endpoint>`

HTTP endpoint of your Managed Service for OpenTelemetry instance

`http://tracing-analysis-dc-hz.aliyuncs.com/adapt_xxx/api/otlp/traces`

**Note**

-   The `--noreload` flag prevents Django from running the `manage.main` method twice. Without it, traces may be duplicated.
    
-   If you get a `CommandError: You must set settings.ALLOWED_HOSTS if DEBUG is False` error, Django is loading its default config file (`django/conf/global_settings.py`) instead of your project settings. Export the settings module to fix this:
    
    ```
    export DJANGO_SETTINGS_MODULE=AutoAndManualDemo.settings
    ```
    

### Verify

1.  Open `http://127.0.0.1:8000/helloworld/` in a browser.
    
2.  Check the console output. You should see trace data similar to:
    
    ```
       {
           "name": "GET helloworld/",
           "context": {
               "trace_id": "0x5e8e...",
               "span_id": "0xa3f1...",
               "trace_state": "[]"
           },
           "kind": "SpanKind.SERVER",
           "parent_id": null,
           "start_time": "2024-01-15T10:30:00.000000Z",
           "end_time": "2024-01-15T10:30:00.050000Z",
           "status": {
               "status_code": "UNSET"
           },
           "attributes": {
               "http.method": "GET",
               "http.url": "http://127.0.0.1:8000/helloworld/",
               "http.status_code": 200
           }
       }
    ```
    
3.  Log in to the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/). On the Applications page, click the name of your application to view the trace data.
    

To stop printing trace data to the console and only export to the backend, change `--traces_exporter` to `otlp_proto_http`.

## Manual instrumentation

Manual instrumentation gives you full control over which operations produce spans, what attributes they carry, and how context propagates across services.

### Prerequisites

Before you begin, make sure you have:

-   Python 3.6 or later
    
-   The gRPC or HTTP endpoint of your Managed Service for OpenTelemetry instance
    
-   (If using gRPC) An authentication token for your endpoint
    

### Step 1: Install dependencies

```
pip install opentelemetry-api opentelemetry-sdk opentelemetry-exporter-otlp
```

### Step 2: Initialize the tracer

Create a file named `manual.py`. The initialization code configures a `TracerProvider` with a `BatchSpanProcessor` that exports spans to your endpoint.

The following example uses gRPC. To use HTTP instead, uncomment the HTTP section and comment out the gRPC section.

```
from opentelemetry import trace, baggage
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter as OTLPSpanGrpcExporter
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter as OTLPSpanHttpExporter
from opentelemetry.sdk.resources import SERVICE_NAME, Resource, HOST_NAME
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor

def init_opentelemetry():
    # Set the service name and hostname that appear in the console.
    resource = Resource(attributes={
        SERVICE_NAME: "<service-name>",
        HOST_NAME: "<host-name>"
    })

    # Option 1: Export over gRPC (default port 4317)
    span_processor = BatchSpanProcessor(OTLPSpanGrpcExporter(
        endpoint="<endpoint>",
        headers=("Authentication=<token>")
    ))

    # Option 2: Export over HTTP (default port 4318)
    # span_processor = BatchSpanProcessor(OTLPSpanHttpExporter(
    #     endpoint="<endpoint>",
    # ))

    trace_provider = TracerProvider(resource=resource, active_span_processor=span_processor)
    trace.set_tracer_provider(trace_provider)
```

**Placeholder**

**Description**

**Example**

`<service-name>`

Application name displayed in the console

`my-python-app`

`<host-name>`

Hostname of the machine running the application

`prod-server-01`

`<endpoint>`

gRPC or HTTP endpoint of your OpenTelemetry instance

`http://tracing-analysis-dc-hz.aliyuncs.com:4317`

`<token>`

Authentication token (gRPC only)

`abc123xyz`

**Note**

The `headers` parameter with the authentication token is required only for gRPC. HTTP endpoints do not require it.

### Step 3: Create spans

Get a tracer from the provider and wrap operations in spans:

```
tracer = trace.get_tracer(__name__)

with tracer.start_as_current_span("child_span") as child_span:
    print("hello world")
```

### Step 4: Retrieve trace and span IDs

Extract the trace ID and span ID from the current span context for log correlation:

```
ctx = trace.get_current_span().get_span_context()
trace_id = '{trace:032x}'.format(trace=ctx.trace_id)
span_id = '{span:016x}'.format(span=ctx.span_id)
print(trace_id)
print(span_id)
```

### Step 5: Propagate data with baggage

Use the OpenTelemetry Baggage API to pass key-value pairs between spans. Set attributes on spans to attach metadata.

```
def baggage_and_attribute_usage():
    tracer = trace.get_tracer(__name__)

    # Set baggage at the global level
    global_ctx = baggage.set_baggage("key", "value_from_global_ctx")

    # Create a parent span with custom attributes
    with tracer.start_as_current_span(name='baggage_parent_span', attributes={'attribute_key': 'value'}) as baggage_parent_span:
        parent_ctx = baggage.set_baggage("key", "value_from_parent_ctx")

        # Create a child span that inherits the parent context
        with tracer.start_as_current_span(name='baggage_child_span', context=parent_ctx) as baggage_child_span:
            child_ctx = baggage.set_baggage("key", "value_from_child_ctx")

    # Each context retains its own baggage value
    print(baggage.get_baggage("key", global_ctx))   # value_from_global_ctx
    print(baggage.get_baggage("key", parent_ctx))    # value_from_parent_ctx
    print(baggage.get_baggage("key", child_ctx))     # value_from_child_ctx
```

Complete sample code

```
from opentelemetry import trace, baggage
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter as OTLPSpanGrpcExporter
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter as OTLPSpanHttpExporter
from opentelemetry.sdk.resources import SERVICE_NAME, Resource, HOST_NAME
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor


def init_opentelemetry():
    resource = Resource(attributes={
        SERVICE_NAME: "<service-name>",
        HOST_NAME: "<host-name>"
    })
    # gRPC exporter
    span_processor = BatchSpanProcessor(OTLPSpanGrpcExporter(
        endpoint="<endpoint>",
        headers=("Authentication=<token>")
    ))
    # HTTP exporter (uncomment to use)
    # span_processor = BatchSpanProcessor(OTLPSpanHttpExporter(
    #     endpoint="<endpoint>",
    # ))
    trace_provider = TracerProvider(resource=resource, active_span_processor=span_processor)
    trace.set_tracer_provider(trace_provider)


def inner_method():
    tracer = trace.get_tracer(__name__)
    with tracer.start_as_current_span("child_span") as child_span:
        print("hello world")


def outer_method():
    tracer = trace.get_tracer(__name__)
    with tracer.start_as_current_span("parent_span") as parent_span:
        inner_method()


def baggage_and_attribute_usage():
    tracer = trace.get_tracer(__name__)
    global_ctx = baggage.set_baggage("key", "value_from_global_ctx")
    with tracer.start_as_current_span(name='baggage_parent_span', attributes={'attribute_key': 'value'}) as baggage_parent_span:
        parent_ctx = baggage.set_baggage("key", "value_from_parent_ctx")
        with tracer.start_as_current_span(name='baggage_child_span', context=parent_ctx) as baggage_child_span:
            child_ctx = baggage.set_baggage("key", "value_from_child_ctx")

    print(baggage.get_baggage("key", global_ctx))
    print(baggage.get_baggage("key", parent_ctx))
    print(baggage.get_baggage("key", child_ctx))


if __name__ == '__main__':
    init_opentelemetry()
    outer_method()
    baggage_and_attribute_usage()
```

### Run and verify

```
python manual.py
```

After the script finishes, log in to the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/) and check the Applications page for your trace data.

## Combined instrumentation

Combined instrumentation builds on [automatic instrumentation](#section-kdz-ttt-mi8) by adding custom spans for business-specific operations. Use this approach when auto-instrumented frameworks handle most tracing but you need finer-grained visibility into specific functions.

### Prerequisites

Before you begin, make sure you have:

-   Python 3.6 or later
    
-   The gRPC or HTTP endpoint of your Managed Service for OpenTelemetry instance
    
-   (If using gRPC) An authentication token for your endpoint
    

### Step 1: Install dependencies

```
pip install django requests opentelemetry-sdk opentelemetry-instrumentation-django opentelemetry-exporter-otlp
```

### Step 2: Create a Django project

1.  Create a project and an application:
    
    ```
       django-admin startproject AutoAndManualDemo
       cd AutoAndManualDemo
       python manage.py startapp helloworld
    ```
    
2.  Add the view code to `AutoAndManualDemo/helloworld/views.py`. This version adds custom spans inside the auto-instrumented Django request lifecycle:
    
    ```
       from django.http import HttpResponse
       from opentelemetry import trace
       from datetime import datetime
    
       def hello_world_view(request):
           tracer = trace.get_tracer(__name__)
    
           # Create a custom span inside the auto-instrumented Django request span
           with tracer.start_as_current_span("hello_world_span") as hello_world_span:
               result = "Hello World!  Current Time =" + str(get_time())
               return HttpResponse(result)
    
       def get_time():
           now = datetime.now()
           tracer = trace.get_tracer(__name__)
           # Track the time calculation as a separate span
           with tracer.start_as_current_span("time_span") as time_span:
               return now.strftime("%H:%M:%S")
    ```
    
3.  Create `AutoAndManualDemo/helloworld/urls.py`:
    
    ```
       from django.urls import path
       from . import views
    
       urlpatterns = [
           path('', views.hello_world_view, name='helloworld')
       ]
    ```
    
4.  Register the application URL in `AutoAndManualDemo/AutoAndManualDemo/urls.py`:
    
    ```
       from django.contrib import admin
       from django.urls import path, include
    
       urlpatterns = [
           path('admin/', admin.site.urls),
           path('helloworld/', include('helloworld.urls')),
       ]
    ```
    

### Step 3: Add initialization code

Create a `manual.py` file with the OpenTelemetry initialization code. This configures the tracer provider with both an OTLP exporter and a console exporter.

The following example uses gRPC. To use HTTP, uncomment the HTTP exporter import and replace the gRPC exporter.

```
from opentelemetry import trace
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter  # gRPC exporter
# from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter  # HTTP exporter
from opentelemetry.sdk.resources import SERVICE_NAME, Resource, HOST_NAME
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor, ConsoleSpanExporter

resource = Resource(attributes={
    SERVICE_NAME: "<service-name>",
    HOST_NAME: "<host-name>"
})

trace.set_tracer_provider(TracerProvider(resource=resource))

# Export traces to Managed Service for OpenTelemetry
trace.get_tracer_provider().add_span_processor(
    BatchSpanProcessor(OTLPSpanExporter(
        endpoint="<endpoint>",
        headers="Authentication=<token>"  # Required for gRPC only
    ))
)

# Also print traces to the console for debugging
trace.get_tracer_provider().add_span_processor(
    BatchSpanProcessor(ConsoleSpanExporter())
)
```

**Placeholder**

**Description**

`<service-name>`

Application name displayed in the console

`<host-name>`

Hostname of the machine running the application

`<endpoint>`

gRPC or HTTP endpoint of your OpenTelemetry instance

`<token>`

Authentication token (gRPC only)

### Step 4: Run the project

```
python manage.py runserver --noreload
```

**Note**

The `--noreload` flag prevents Django from running `manage.main` twice.

### Troubleshooting

If you encounter an `ImportError(symbol not found in flat namespace '_CFRelease')` error, install the gRPC package:

```
pip install grpcio
```

### Verify

Open `http://127.0.0.1:8000/helloworld/` in a browser. The trace data is exported to the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/) and printed to the terminal. On the Applications page, click the name of your application to view the traces, including the custom `hello_world_span` and `time_span` spans nested under the Django request span.

## gRPC vs. HTTP

Both protocols are supported for exporting trace data. Choose based on your environment:

**Factor**

**gRPC**

**HTTP**

Authentication

Requires a `<token>` in the `headers` parameter

No token needed

Default port

4317

4318

Firewall compatibility

May be blocked by some firewalls

Works through most firewalls

Performance

Higher throughput for large volumes of trace data

Adequate for most workloads

If your network environment restricts gRPC traffic, use HTTP.

## What's next

-   View trace details: On the Applications page of the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/), click the application name to explore topology, traces, abnormal transactions, slow transactions, and SQL analysis.
    
-   Try the [Alibaba Cloud agent for Python](/help/en/arms/application-monitoring/user-guide/start-monitoring-python-applications/) for deeper observability with LLM framework support, richer metrics, and continuous profiling.
