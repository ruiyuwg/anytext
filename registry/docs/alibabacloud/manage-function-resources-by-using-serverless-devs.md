Serverless Devs is an open source tool for developing, building, testing, and deploying serverless projects throughout their lifecycle. This topic describes how to use Serverless Devs to initialize and deploy a Function Compute project. All examples use Node.js 14.

## Command quick reference

**Command**

**Description**

`sudo s`

Start the interactive project wizard (Method 1)

`sudo s init <template>`

Initialize a project from a specific template (Method 2)

`sudo s build`

Build the project locally

`sudo s local start`

Start a local server for HTTP functions

`sudo s local invoke`

Invoke an event function locally

`sudo s deploy -y`

Deploy the project to Function Compute

`sudo s invoke -e '<payload>'`

Invoke the deployed function remotely

`sudo s remove service`

Delete the service and all associated resources

## Prerequisites

Before you begin, make sure that you have:

-   An activated Function Compute service. For more information, see [Activate Function Compute](/help/en/functioncompute/fc-2-0/create-a-function-in-the-function-compute-console#p-t79-y7o-68z)
    
-   [Install Serverless Devs and its dependencies](/help/en/functioncompute/fc-2-0/developer-reference/install-serverless-devs-and-docker#task-2093092)
    
-   [Configure Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/configure-serverless-devs#task-2093369)
    

## Choose a method

**Method**

**Command**

**Best for**

**What you get**

**Method 1**: Interactive setup

`s`

First-time users

Guided wizard for project creation and one-step deployment

**Method 2**: Step-by-step workflow

`s init`

Granular control

Build, local debug, remote invoke, and resource removal

## Method 1: Interactive setup with `s`

Run `s` to start the interactive wizard:

```
sudo s
```

The wizard prompts you to configure the project. The following example shows a typical session:

```
 No Serverless-Devs project is currently detected. Do you want to create a new project? Yes

 Serverless Awesome: https://github.com/Serverless-Devs/Serverless-Devs/blob/master/docs/zh/awesome.md

 Hello Serverless for Cloud Vendors Alibaba Cloud Serverless
 Hello, serverlesser. Which template do you like? Quick start [Deploy a Hello World function to FaaS]
 Which template do you like? [Event] Node.js 14

 Create application command: [s init devsapp/start-fc-event-nodejs14]

 Please input your project name (init dir) start-fc-event-nodejs14
 file decompression completed

     ____  _     _ ___  _ _     _        _____ ____
    /  _ \/ \   / \\  \/// \ /\/ \  /|  /    //   _\
    | / \|| |   | | \  / | | ||| |\ ||  |  __\|  /
    | |-||| |_/\| | / /  | \_/|| | \||  | |   |  \__
    \_/ \|\____/\_//_/   \____/\_/  \|  \_/   \____/
 please select credential alias default

    Welcome to the Aliyun FC start application
     This application requires to open these services:
         FC : https://fc.console.alibabacloud.com/

     * The project is initialized. You can go to the project directory and run the s deploy command to deploy the project.

 Thanks for using Serverless-Devs
 You could [cd /test/start-fc-event-nodejs14] and enjoy your serverless journey!
 If you need help for this example, you can use [s -h] after you enter folder.
 Document Star: https://github.com/Serverless-Devs/Serverless-Devs

 Do you want to deploy the project immediately? Yes
 ......
helloworld:
  region:   cn-hangzhou
  service:
    name: hello-world-service
  function:
    name:       event-nodejs14
    runtime:    nodejs14
    handler:    index.handler
    memorySize: 128
    timeout:    60
```

Key choices during the interactive flow:

1.  **Cloud vendor**: Select **Alibaba Cloud Serverless**.
    
2.  **Template**: Select the function type and runtime, for example, **\[Event\] Node.js 14**.
    
3.  **Project name**: Accept the default or enter a custom name.
    
4.  **Credential alias**: Select the alias configured during Serverless Devs setup.
    
5.  **Deploy immediately**: Select **Yes** to deploy in one step, or **No** to deploy later.
    

## Method 2: Step-by-step workflow with `s init`

### Initialize the project

```
sudo s init devsapp/start-fc-http-nodejs14
```

> This example deploys an HTTP function in Node.js 14. Replace `http` with a different trigger type such as `event` to change the function type. Replace `nodejs14` with another runtime identifier to change the runtime.

Sample output:

```
Serverless Awesome: https://github.com/Serverless-Devs/Serverless-Devs/blob/master/docs/zh/awesome.md
 Please input your project name (init dir) start-fc-http-nodejs14
 file decompression completed

     ____  _     _ ___  _ _     _        _____ ____
    /  _ \/ \   / \\  \/// \ /\/ \  /|  /    //   _\
    | / \|| |   | | \  / | | ||| |\ ||  |  __\|  /
    | |-||| |_/\| | / /  | \_/|| | \||  | |   |  \__
    \_/ \|\____/\_//_/   \____/\_/  \|  \_/   \____/
 please select credential alias default

    Welcome to the Aliyun FC start application
     This application requires to open these services:
         FC : https://fc.console.alibabacloud.com/

     * The project is initialized. You can go to the project directory and run the s deploy command to deploy the project.

 Thanks for using Serverless-Devs
 You could [cd /test/start-fc-http-nodejs14] and enjoy your serverless journey!
 If you need help for this example, you can use [s -h] after you enter folder.
 Document Star: https://github.com/Serverless-Devs/Serverless-Devs

 Do you want to deploy the project immediately? No
```

After initialization, the project directory contains these files:

**File**

**Description**

`s.yaml`

Defines Function Compute resources. For more information, see [YAML syntax and permission management](/help/en/functioncompute/fc-2-0/developer-reference/serverless-devs-commands#section-pkh-tcl-y3z).

`s_en.yaml`

Contains the same configuration as `s.yaml`. By default, the system uses `s.yaml`. To use `s_en.yaml` instead, specify the `-t` parameter: `s deploy -t s_en.yaml -y`.

`code/`

Contains `index.js` with function logic.

`readme.md`

Documents dependencies, modules, and project configuration.

### Enter the project directory

```
cd start-fc-http-nodejs14
```

### Build the project (optional)

Run `s build` to compile and package the project locally:

```
sudo s build
```

This generates a `.s` directory in the project root that stores build artifacts for debugging and deployment.

### Debug locally (optional)

After building, test the function on your machine before deploying.

**HTTP functions:**

```
sudo s local start
```

Sample output:

```
[2021-12-16 07:17:05] [INFO] [FC-LOCAL-INVOKE] - Using trigger for start: name: httpTrigger
type: http
config:
  authType: anonymous
  methods:
    - GET

[2021-12-16 07:17:05] [INFO] [FC-LOCAL-INVOKE] - HttpTrigger httpTrigger of hello-world-service/http-trigger-nodejs14 was registered
        url: http://localhost:7013/2016-08-15/proxy/hello-world-service/http-trigger-nodejs14/
        methods: GET
        authType: anonymous

Tips: You can also use these commands to run or debug custom domain resources:

Start with customDomain:
* s local start auto

Debug with customDomain:
* s local start -d 3000 auto


Tips for next step
======================
* Deploy Resources: s deploy
helloworld:
  status: succeed
function compute app listening on port 7013!
```

Trigger the HTTP function with cURL or a browser:

```
curl http://localhost:7013/2016-08-15/proxy/hello-world-service/http-trigger-nodejs14/
```

Or open the following URL in a browser:

```
http://localhost:7013/2016-08-15/proxy/hello-world-service/http-trigger-nodejs14/
```

**Event functions:**

```
sudo s local invoke
```

The result is returned directly after the command runs.

### Deploy to Function Compute

```
sudo s deploy -y
```

Sample output:

```
Checking Service, Function, Triggers (0.82s)
 Creating Service, Function, Triggers (0.6s)
 Creating custom domain (0.31s)

Tips for next step
======================
* Display information of the deployed resource: s info
* Display metrics: s metrics
* Display logs: s logs
* Invoke remote function: s invoke
* Remove Service: s remove service
* Remove Function: s remove function
* Remove Trigger: s remove trigger
* Remove CustomDomain: s remove domain

helloworld:
  region:   cn-hangzhou
  service:
    name: hello-world-service
  function:
    name:       http-trigger-nodejs14
    runtime:    nodejs14
    handler:    index.handler
    memorySize: 128
    timeout:    60
  url:
    custom_domain:
      -
        domain: http://http-trigger-nodejs14.hello-world-service.188077086902****.cn-hangzhou.fc.devsapp.net
  triggers:
    -
      type: http
      name: httpTrigger
```

### Invoke the function remotely (optional)

After deployment, invoke the function in the cloud to verify it works:

```
sudo s invoke -e '{"body": "","method":"GET","headers":{"header_1":"v1"},"queries":{"key":"value"},"path":"/"}'
```

Sample output:

```
Request url: https://188077086902****.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/hello-world-service/http-trigger-nodejs14/
========= FC invoke Logs begin =========
FC Invoke Start RequestId: 6a3adedb-5d5d-4ac5-aa0b-2d43f4ace65c
load code for handler:index.handler
2022-03-04T08:39:14.770Z 6a3adedb-5d5d-4ac5-aa0b-2d43f4ace65c [verbose] hello world
FC Invoke End RequestId: 6a3adedb-5d5d-4ac5-aa0b-2d43f4ace65c

Duration: 66.23 ms, Billed Duration: 67 ms, Memory Size: 128 MB, Max Memory Used: 42.48 MB
========= FC invoke Logs end =========

FC Invoke Result[Code: 200]:
{
  path: '//',
  queries: { key: 'value' },
  headers: {
    accept: 'application/json',
    authorization: 'FC yourAccessKeyID:yourAccessKeySecret',
    date: 'Fri, 04 Mar 2022 08:39:14 GMT',
    header_1: 'v1',
    host: '188077086902****.cn-hangzhou.fc.aliyuncs.com',
    'user-agent': 'Node.js(v14.17.4) OS(linux/x64) SDK(@alicloud/fc2@v2.5.0)',
    'x-forwarded-proto': 'http'
  },
  method: 'GET',
  requestURI: '/2016-08-15/proxy/hello-world-service/http-trigger-nodejs14//?key=value',
  clientIP: '47.97.XX.XX',
  body: ''
}

End of method: invoke
```

You can also trigger an HTTP function with cURL:

```
curl https://188077086902****.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/hello-world-service/http-trigger-nodejs14/
```

### Remove resources (optional)

When you no longer need the deployed resources, delete them:

```
sudo s remove service
```

Sample output:

```
Need to delete the resource in the cn-hangzhou area, the operation service is hello-world-service:
 ......
 Delete trigger hello-world-service/http-trigger-nodejs14/httpTrigger success.
 Delete function hello-world-service/http-trigger-nodejs14 success.
 Delete service hello-world-service success.
[2022-03-04 08:40:26] [INFO] [FC] - Getting list on-demand: _FC_NAS_hello-world-service-ensure-nas-dir-exist-service
[2022-03-04 08:40:26] [INFO] [FC] - Getting list provision: _FC_NAS_hello-world-service-ensure-nas-dir-exist-service
[2022-03-04 08:40:26] [INFO] [FC] - Getting listAliases: _FC_NAS_hello-world-service-ensure-nas-dir-exist-service
[2022-03-04 08:40:26] [INFO] [FC] - Getting list on-demand: _FC_NAS_hello-world-service
[2022-03-04 08:40:26] [INFO] [FC] - Getting list provision: _FC_NAS_hello-world-service
[2022-03-04 08:40:26] [INFO] [FC] - Getting listAliases: _FC_NAS_hello-world-service
End of method: remove
```

This command deletes triggers, functions, and the service in sequence, and cleans up related NAS service resources.

## References

-   [YAML syntax and permission management](/help/en/functioncompute/fc-2-0/developer-reference/serverless-devs-commands)
    
-   [Install Serverless Devs and Docker](/help/en/functioncompute/fc-2-0/developer-reference/install-serverless-devs-and-docker)
    
-   [Configure Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/configure-serverless-devs)
