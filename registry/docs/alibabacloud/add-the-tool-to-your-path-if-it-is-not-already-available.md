The SkyWalking .NET Core agent collects trace data from your .NET applications and reports it to the Managed Service for OpenTelemetry console. This guide walks you through three stages:

1.  **Get your endpoint and token** from the Managed Service for OpenTelemetry console.
    
2.  **Install and configure the SkyWalking agent** in your .NET project.
    
3.  **Verify** that trace data reaches the console.
    

## Prerequisites

Before you begin, make sure that you have:

-   An Alibaba Cloud account with Managed Service for OpenTelemetry activated
    
-   A .NET Core project
    
-   The .NET SDK installed locally
    

## Background information

SkyWalking is a popular application performance monitoring (APM) service developed in China. It is designed for microservices, cloud-native architectures, and container-based architectures such as Docker, Kubernetes, and Mesos. SkyWalking is also a distributed tracing system.

**Supported frameworks**

The SkyWalking .NET Core agent automatically instruments the following frameworks:

-   [ASP.NET Core](https://github.com/dotnet/aspnetcore)
    
-   [.NET Core BCL types (HttpClient and SqlClient)](https://github.com/dotnet/runtime)
    
-   [EntityFrameworkCore](https://github.com/dotnet/efcore)
    
-   [EntityFrameworkCore.Sqlite](https://github.com/dotnet/efcore)
    
-   [Npgsql.EntityFrameworkCore.PostgreSQL](https://github.com/npgsql/Npgsql.EntityFrameworkCore.PostgreSQL)
    
-   [Pomelo.EntityFrameworkCore.MySql](https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql)
    
-   [CAP](https://github.com/dotnetcore/CAP)
    
-   ASP.NET
    

## Step 1: Get the SkyWalking endpoint and token

1.  Log on to the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Cluster Configurations**. Then, click the **Access point information** tab.
    
3.  In the top navigation bar, select a region. In the **Cluster Information** section, turn on **Show Token**.
    
4.  In the **Client** section, click **SkyWalking**.
    
5.  In the **Related Information** column, copy the endpoint and token values for use in later steps.
    
    ![SkyWalking endpoint information](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2663148661/p506425.png)
    

If your application runs in an Alibaba Cloud production environment, use the VPC endpoint. Otherwise, use the public endpoint.

## Step 2: Install the SkyWalking agent

Navigate to your .NET project root and install the agent NuGet package:

```
dotnet add package SkyAPM.Agent.AspNetCore
```

Set the required environment variables:

**Linux or macOS**

```
export ASPNETCORE_HOSTINGSTARTUPASSEMBLIES=SkyAPM.Agent.AspNetCore
export SKYWALKING__SERVICENAME=<your-service-name>
```

**Windows (Command Prompt)**

```
set ASPNETCORE_HOSTINGSTARTUPASSEMBLIES=SkyAPM.Agent.AspNetCore
set SKYWALKING__SERVICENAME=<your-service-name>
```

**Windows (PowerShell)**

```
$env:ASPNETCORE_HOSTINGSTARTUPASSEMBLIES="SkyAPM.Agent.AspNetCore"
$env:SKYWALKING__SERVICENAME="<your-service-name>"
```

Replace `<your-service-name>` with a name that identifies your application, such as `my-order-service`.

## Step 3: Configure the agent

Create a `skyapm.json` configuration file in your project root. Choose one of the following methods.

### Option A: Generate the file with the CLI tool

Install the SkyAPM CLI tool and generate the configuration file:

```
dotnet tool install -g SkyAPM.DotNet.CLI

# Add the tool to your PATH if it is not already available.
# Replace /path/to with the actual path to your .dotnet/tools directory.
export PATH="$PATH:/path/to/.dotnet/tools/"

dotnet skyapm config <your-service-name> <your-endpoint>
```

After the file is generated, open `skyapm.json` and set the `Authentication` field to your token value.

### Option B: Create the file manually

Create a file named `skyapm.json` in your project root with the following content:

```
{
  "SkyWalking": {
    "ServiceName": "<your-service-name>",
    "Namespace": "",
    "HeaderVersions": [
      "sw8"
    ],
    "Sampling": {
      "SamplePer3Secs": -1,
      "Percentage": -1.0,
      "LogSqlParameterValue": false
    },
    "Logging": {
      "Level": "Information",
      "FilePath": "logs/skyapm-{Date}.log"
    },
    "Transport": {
      "Interval": 3000,
      "ProtocolVersion": "v8",
      "QueueSize": 30000,
      "BatchSize": 3000,
      "gRPC": {
        "Servers": "<your-endpoint>",
        "Authentication": "<your-token>",
        "Timeout": 100000,
        "ConnectTimeout": 100000,
        "ReportTimeout": 600000
      }
    }
  }
}
```

Replace the following placeholders with your actual values:

**Placeholder**

**Description**

**Example**

`<your-service-name>`

A name that identifies your application in the tracing console

`my-order-service`

`<your-endpoint>`

The SkyWalking endpoint copied in Step 1

`xxx.cn-hangzhou.tracing.aliyuncs.com`

`<your-token>`

The authentication token copied in Step 1

`abc123def456@xxx`

### Configuration reference

The following table describes the configurable parameters in `skyapm.json`. Required parameters have no default listed.

**Parameter**

**Default**

**Description**

`ServiceName`

(required)

The name of your application as it appears in the tracing console.

`Transport.gRPC.Servers`

(required)

The SkyWalking gRPC endpoint from the Managed Service for OpenTelemetry console.

`Transport.gRPC.Authentication`

(required)

The authentication token from the Managed Service for OpenTelemetry console.

`Sampling.SamplePer3Secs`

`-1`

The number of trace segments collected every 3 seconds.

`Sampling.Percentage`

`-1.0`

The sampling percentage. For example, `10` traces 10% of requests.

`Logging.Level`

`Information`

Agent log level. Valid values: `Debug`, `Information`, `Warning`, `Error`.

`Logging.FilePath`

`logs/skyapm-{Date}.log`

Path and filename pattern for agent log files, relative to the project root.

`Transport.Interval`

`3000`

Interval in milliseconds between trace data uploads.

`Transport.QueueSize`

`30000`

Maximum number of trace segments held in the upload queue.

`Transport.BatchSize`

`3000`

Number of trace segments sent per upload batch.

`Transport.gRPC.Timeout`

`100000`

gRPC call timeout in milliseconds.

`Transport.gRPC.ConnectTimeout`

`100000`

gRPC connection timeout in milliseconds.

`Transport.gRPC.ReportTimeout`

`600000`

Timeout in milliseconds for a complete report upload.

## Step 4: Verify the integration

1.  Start your application:
    
    ```
    dotnet run
    ```
    
2.  Send a few requests to your application to generate trace data. For example:
    
    ```
    curl http://localhost:5000/
    ```
    
    Send several requests so the agent has data to report.
    
3.  Check the agent log file at `logs/skyapm-<date>.log` in your project directory. A successful connection produces log entries similar to the following:
    
    ![Agent log output](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2825885961/p711712.png)
    
4.  Log on to the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/) and confirm that your application name appears under your traces.
    

If the log file shows connection errors, verify the following:

-   The endpoint and token values in `skyapm.json` match the values from the console.
    
-   Your network allows outbound connections to the endpoint. For VPC endpoints, your application must run within the same VPC.
    

## Build from source

To build the SkyWalking .NET agent from source:

```
# Clone the repository
git clone https://github.com/SkyAPM/SkyAPM-dotnet.git

cd SkyAPM-dotnet/

# Check out the desired release tag
git checkout <tag-name>

# Initialize submodules
git submodule init
git submodule update

# Restore dependencies and build
dotnet restore
dotnet build src/SkyApm.Transport.Grpc.Protocol
dotnet build skyapm-dotnet.sln
```

## Sample code

For a complete working example, see the [skywalking-demo](https://github.com/alibabacloud-observability/skywalking-demo) repository on GitHub.

## FAQ

**`dotnet skyapm config` fails to generate `skyapm.json`**

![dotnet skyapm config error](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1825885961/p712422.png)

Try one of the following solutions:

-   **Create the file manually (recommended).** The CLI tool only generates a template `skyapm.json` file. Follow [Option B: Create the file manually](#section-0860a764) to create and configure the file yourself.
    
-   **Switch to .NET 6.0.** The `SkyAPM.DotNet.CLI` tool may not be compatible with your current .NET SDK version. Install .NET 6.0 and retry.
