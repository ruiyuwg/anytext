When you run Rust microservices, you need distributed tracing to diagnose latency and track requests across services. The `skywalking-rust` crate is the official Rust agent for [Apache SkyWalking](http://skywalking.apache.org/), an open-source Application Performance Monitoring (APM) and distributed tracing system originally developed in China. SkyWalking is designed for microservices applications, cloud-native applications, and containerized applications in Docker, Kubernetes, and Mesos. It lets you manually instrument Rust applications and report trace data to Managed Service for OpenTelemetry over gRPC.

For a complete working example that instruments an HTTP server built on the hyper framework, see the [skywalking-demo](https://github.com/alibabacloud-observability/skywalking-demo) repository on GitHub.

## SkyWalking span types

SkyWalking requires manual instrumentation for Rust applications. You create spans in your code to represent units of work, and the agent reports those spans to the collector over gRPC.

**Span type**

**Role**

**Example**

**Entry span** (`EntrySpan`)

Inbound request on the server side

An HTTP server handler receiving a request

**Local span** (`LocalSpan`)

In-process work that does not cross a network boundary

A local function call or computation

**Exit span** (`ExitSpan`)

Outbound call from the client side; the client uses an exit span to inject trace context into the outgoing request

An HTTP client call to a downstream service

## Instrument a Rust application

### Prerequisites

-   Protobuf is installed (unless you use the `vendored` feature; see Step 1).
    
    ## macOS
    
    ```
    brew install protobuf
    ```
    
    ## Debian/Ubuntu
    
    ```
    sudo apt install protobuf-compiler
    ```
    
-   To obtain an endpoint of SkyWalking, perform the following steps:
    
    1.  Log on to the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, click **Cluster Configurations**. Then, click the **Access point information** tab.
        
    3.  In the top navigation bar, select a region. In the **Cluster Information** section, turn on **Show Token**.
        
    4.  In the **Client** section, click **SkyWalking**.
        
    5.  Copy the endpoint from the **Related Information** column.
        
    
    ![SkyWalking endpoint information](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2663148661/p506425.png)
    
    **Note**
    
    If your application runs in an Alibaba Cloud production environment, use a Virtual Private Cloud (VPC) endpoint. Otherwise, use a public endpoint.
    

### Step 1: Add the SkyWalking dependency

**Note**

The examples in this topic use SkyWalking 0.8.0.

Choose one of the following methods:

## Option A -- Edit `Cargo.toml` directly (recommended)

Add the following line under `[dependencies]`:

```
skywalking = { version = "0.8.0", features = ["vendored"] }
```

The `vendored` feature compiles `protoc` from source during the build, so you do not need to install `protoc` separately.

## Option B -- Use the `cargo add` command

```
cargo add skywalking --features vendored
```

### Step 2: Create spans to instrument your code

Import the SkyWalking modules and use entry, local, and exit spans to trace requests across your application.

```
use skywalking::{reporter::grpc::GrpcReporter, trace::tracer::Tracer};
```

**Server-side instrumentation (entry span)**

Create an entry span for each inbound request your application handles. The server uses an entry span to obtain the tracing context from an HTTP request.

```
let mut ctx = tracer.create_trace_context();
{
    let _span = ctx.create_entry_span("handle_request");

    // Your request handling logic goes here.
}
```

**Client-side instrumentation (exit span)**

Create an exit span before calling a downstream service. The client uses an exit span to inject the tracing context into the outgoing request.

```
let mut ctx = tracer.create_trace_context();
{
    let _span = ctx.create_exit_span("call_downstream", "downstream-service:8080");

    // Your outbound call logic goes here.
}
```

**In-process instrumentation (local span)**

You can use a local span to instrument an application in the same process for internal operations that do not cross a network boundary.

### Step 3: Configure the endpoint and token

Connect the reporter to your Managed Service for OpenTelemetry endpoint and pass the authentication token.

Replace the following placeholders with your actual values:

**Placeholder**

**Description**

`<endpoint>`

SkyWalking collector endpoint from the console

`<token>`

Authentication token from the console

`<service_name>`

A name that identifies your application

`<instance_name>`

A name that identifies this specific instance

```
let endpoint = "<endpoint>";
let token = "<token>";
let service_name = "<service_name>";
let instance_name = "<instance_name>";

let reporter = GrpcReporter::connect(endpoint).await?;
let reporter = reporter.with_authentication(token);
let tracer = Tracer::new(service_name, instance_name, reporter.clone());
```

For more information about how to obtain an endpoint and an authentication token, see [Prerequisites](#BdimP).

### Step 4: Build and restart the application

After you add instrumentation and configure the endpoint, rebuild and restart your application:

```
cargo build --release
./target/release/<your-binary-name>
```

## FAQ

**Q: The build fails with a protobuf-related error.**

![Build error](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7703576961/p712932.png)

**A:** `protoc` is not installed or not in your `PATH`. Fix this in one of two ways:

-   Install `protoc` using your OS package manager. See [Prerequisites](#BdimP).
    
-   Add the `vendored` feature to the SkyWalking dependency so that `protoc` is compiled automatically during the build:
    
    ```
    skywalking = { version = "0.8.0", features = ["vendored"] }
    ```
    

## See also

-   [Apache SkyWalking official website](http://skywalking.apache.org/)
    
-   [skywalking-demo on GitHub](https://github.com/alibabacloud-observability/skywalking-demo)
