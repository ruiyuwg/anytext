Cloud Assistant lets you run shell, batch, or PowerShell commands on multiple Elastic Compute Service (ECS) instances at the same time, without logging on to each instance individually. This topic walks you through using an ECS SDK to run a Cloud Assistant command and retrieve its execution results.

## Sample scenario

In cloud computing environments, an O&M (operations and maintenance) management system is essential for maintaining business stability. To keep ECS instances healthy, you need to regularly check resource usage such as CPU utilization, memory consumption, and disk usage.

Consider building an automated O&M management system. By leveraging the logon-free capability of Cloud Assistant (running commands on instances without needing to log on to them), this system can remotely execute Cloud Assistant commands on ECS instances to handle a range of O&M tasks. You can pass different commands to instances to perform functions such as resource monitoring, log collection, and troubleshooting. This approach significantly improves O&M efficiency and provides reliable support for business operations.

## Prerequisites

Before you begin, make sure the following requirements are met:

-   Your target ECS instances are in the **Running** state, and Cloud Assistant Agent is installed on each instance. For installation instructions, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent#concept-wtg-32x-ydb).
    
-   The `ALIBABA_CLOUD_ACCESS_KEY_ID` and `ALIBABA_CLOUD_ACCESS_KEY_SECRET` environment variables are configured in your runtime environment. For setup instructions, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
    **Note**
    
    To protect your Alibaba Cloud account, we recommend that you create a Resource Access Management (RAM) user, grant it the necessary permissions to access ECS resources, and use the RAM user's AccessKey pair to call ECS SDK operations. For more information, see [RAM users](/help/en/ecs/user-guide/control-access-to-resources-by-using-ram-users#concept-stg-4pd-zdb).
    
-   The RAM user has permissions to use Cloud Assistant. For more information, see [Grant permissions to RAM user](/help/en/ecs/user-guide/use-ram-to-implement-permission-control).
    
-   You have prepared the Cloud Assistant command you want to run. The command can be a shell, batch, or PowerShell command.
    
-   The ECS SDK dependencies are installed for your project. For more information, visit the [Elastic Compute Service](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=java-tea&tab=primer-doc) page in SDK Center.
    

## API operations used

This topic uses the following ECS API operations:

**Operation**

**Description**

[RunCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runcommand)

Runs a command on one or more ECS instances. Returns an `InvokeId` that identifies the command task.

[DescribeInvocations](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinvocations)

Queries the execution results of a Cloud Assistant command by its `InvokeId`.

## Command types

Cloud Assistant supports three command types, specified by the `Type` parameter in the `RunCommand` request:

**Type value**

**Description**

`RunShellScript`

Shell command, applicable to Linux instances

`RunBatScript`

Batch command, applicable to Windows instances

`RunPowerShellScript`

PowerShell command, applicable to Windows instances

## Invocation status values

When you poll for command execution results, the `InvocationStatus` field indicates the current state of the command:

**Status**

**Description**

`Pending`

The system is verifying or sending the command.

`Running`

The command is being run on the ECS instances.

`Stopping`

The command is being stopped.

`Finished`

The command completed successfully.

`Failed`

The command execution failed.

`Stopped`

The command was stopped.

## Sample code

The following code samples demonstrate how to use the ECS SDK to run a command on ECS instances and poll for the execution results. Both Java and Python examples are provided.

### Java

The Java example creates a `CloudAssistantService` class that initializes an ECS client, runs a command on specified instances, and polls for results until the command completes or times out.

**Key behaviors:**

-   Uses the double-checked locking pattern to create a thread-safe singleton ECS client.
    
-   Runs a shell command (`cat /proc/meminfo`) on the specified instances.
    
-   Polls for execution results at 2-second intervals, up to a maximum of `commandTimeOut / delay` retries.
    

```
import com.aliyun.ecs20140526.Client;
import com.aliyun.ecs20140526.models.*;
import com.aliyun.teaopenapi.models.Config;
import com.google.gson.Gson;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;


public class CloudAssistantService {

    /**
     * Read the AccessKey ID and AccessKey secret from environment variables.
     */
    private static final String ACCESS_KEY_ID = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
    private static final String ACCESS_KEY_SECRET = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
    private static final ScheduledExecutorService SCHEDULER = Executors.newScheduledThreadPool(1);
    private static volatile Client ecsClient;

    private CloudAssistantService() {
    }

    /**
     * Initialize the ECS client.
     *
     * @param regionId The region ID that specifies where the ECS client connects.
     * @return The initialized ECS client.
     * <p>
     * This method uses the double-checked locking pattern to ensure thread-safe
     * singleton creation of the ECS client. It first checks whether a client
     * already exists, then re-checks within a synchronized block before creating one.
     */
    public static Client getEcsClient(String regionId) throws Exception {
        if (ecsClient == null) {
            synchronized (CloudAssistantService.class) {
                if (ecsClient == null) {
                    Config config = new Config().setAccessKeyId(ACCESS_KEY_ID).setAccessKeySecret(ACCESS_KEY_SECRET).setRegionId(regionId);
                    ecsClient = new Client(config);
                }
            }
        }
        return ecsClient;
    }

    public static void main(String[] args_) {
        try {
            // The region ID.
            String regionId = "cn-chengdu";
            getEcsClient(regionId);
            // The IDs of the ECS instances on which to run the command.
            List<String> instanceIds = Arrays.asList("i-2vcXXXXXXXXXXXXXXXb8", "i-2vcXXXXXXXXXXXXXXXot");
            // The command to run.
            String commandContent = "#!/bin/bash\n cat /proc/meminfo";
            // The command execution timeout, in seconds.
            long commandTimeOut = 60;


            // Run the command.
            String invokeId = runCommand(commandContent, regionId, instanceIds, commandTimeOut);
            // Query the command execution results.
            DescribeInvocationsResponse invocationResult = describeInvocations(regionId, invokeId, commandTimeOut);
            System.out.println("The command execution result:" + new Gson().toJson(invocationResult));
            // Note: This sample does not include logging configuration.

        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            SCHEDULER.shutdown();
        }
    }

    /**
     * Run a command on the specified ECS instances.
     *
     * @param commandContent The command to run.
     * @param regionId       The region ID of the target ECS instances.
     * @param instanceIds    The IDs of the target ECS instances.
     * @param commandTimeOut The command execution timeout, in seconds.
     * @return The invocation ID (InvokeId) of the command task.
     */
    public static String runCommand(String commandContent, String regionId, List<String> instanceIds, long commandTimeOut) {
        try {
            System.out.println("runCommand start...");
            RunCommandRequest request = new RunCommandRequest();
            request.setRegionId(regionId);
            request.setType(Constants.COMMAND_TYPE.RUN_SHELL_SCRIPT);
            request.setCommandContent(commandContent);
            request.setInstanceId(instanceIds);
            request.setTimeout(commandTimeOut);
            RunCommandResponse runCommandResponse = ecsClient.runCommand(request);
            return runCommandResponse.body.invokeId;
        } catch (Exception e) {
            throw new RuntimeException("runCommand failed", e);
        }
    }

    /**
     * Query the execution results of a Cloud Assistant command.
     *
     * @param regionId       The region ID of the target instances.
     * @param invokeId       The invocation ID that uniquely identifies the command task.
     * @param commandTimeOut The command execution timeout, in seconds.
     */
    public static DescribeInvocationsResponse describeInvocations(String regionId, String invokeId, long commandTimeOut) {
        DescribeInvocationsRequest describeInvocationsRequest = new DescribeInvocationsRequest()
                .setRegionId(regionId)
                .setInvokeId(invokeId);

        long delay = 2;
        // Maximum number of polling retries.
        int maxRetries = (int) (commandTimeOut / delay);
        int retryCount = 0;

        try {
            while (retryCount < maxRetries) {
                ScheduledFuture<DescribeInvocationsResponse> future = SCHEDULER.schedule(() ->
                        ecsClient.describeInvocations(describeInvocationsRequest), delay, TimeUnit.SECONDS);
                DescribeInvocationsResponse results = future.get();
                List<DescribeInvocationsResponseBody.DescribeInvocationsResponseBodyInvocationsInvocation> invocationList = results.body.invocations.invocation;
                if (invocationList.isEmpty()) {
                    throw new RuntimeException("The command execution result was not found.");
                }
                DescribeInvocationsResponseBody.DescribeInvocationsResponseBodyInvocationsInvocation invocationResult = results.body.invocations.invocation.get(0);
                String invocationStatus = invocationResult.invocationStatus;
                switch (invocationStatus) {
                    case Constants.INVOCATION_STATUS.PENDING:
                    case Constants.INVOCATION_STATUS.RUNNING:
                    case Constants.INVOCATION_STATUS.STOPPING:
                        retryCount++;
                        continue;
                    default:
                        return results;
                }
            }
            throw new RuntimeException("Max retries exceeded for command execution result.");
        } catch (Exception e) {
            throw new RuntimeException("describeInvocationResults failed", e);
        }
    }


    public static class Constants {
        // Command types.
        public static final class COMMAND_TYPE {
            // Shell command, applicable to Linux instances.
            public static final String RUN_SHELL_SCRIPT = "RunShellScript";
            // Batch command, applicable to Windows instances.
            public static final String RUN_BAT_SCRIPT = "RunBatScript";
            // PowerShell command, applicable to Windows instances.
            public static final String RUN_POWERSHELL_SCRIPT = "RunPowerShellScript";
        }

        // Invocation status values for Cloud Assistant commands.
        public static final class INVOCATION_STATUS {
            // The system is verifying or sending the command.
            public static final String PENDING = "Pending";
            // The command is being run on the ECS instances.
            public static final String RUNNING = "Running";
            // The command is being stopped.
            public static final String STOPPING = "Stopping";
        }
    }
}
```

### Python

The Python example provides a modular approach with separate functions for client initialization, command execution, invocation querying, and completion polling.

**Key behaviors:**

-   Validates the command type against the three valid values (`RunShellScript`, `RunBatScript`, `RunPowerShellScript`) before execution.
    
-   Validates that the instance ID list is not empty.
    
-   Uses exponential backoff when polling for results: the wait time doubles with each retry (`2 ^ retry_count` seconds).
    
-   Maximum retries default to `max(command_timeout // 2, 1)`, which is 30 retries for a 60-second timeout.
    
-   Handles terminal states: `Finished` (success), `Failed`, and `Stopped`.
    

```
import os
import time
import logging
from alibabacloud_ecs20140526 import models as ecs_20140526_models
from alibabacloud_ecs20140526.client import Client as Ecs20140526Client
from alibabacloud_tea_openapi import models as open_api_models

# Configure logging.
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

ACCESS_KEY_ID = os.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")
ACCESS_KEY_SECRET = os.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")

if not ACCESS_KEY_ID or not ACCESS_KEY_SECRET:
    raise EnvironmentError(
        "Missing required environment variables: ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET")


def get_ecs_client(region_id):
    config = open_api_models.Config(
        access_key_id=ACCESS_KEY_ID,
        access_key_secret=ACCESS_KEY_SECRET,
        region_id=region_id
    )
    return Ecs20140526Client(config)


def execute_command(client, command_content, region_id, instance_ids, command_timeout, command_type):
    if not instance_ids:
        raise ValueError("Instance IDs list cannot be empty.")

    valid_command_types = ["RunShellScript", "RunBatScript", "RunPowerShellScript"]
    if command_type not in valid_command_types:
        raise ValueError(f"Invalid command type: {command_type}. Valid types are {valid_command_types}.")

    request = ecs_20140526_models.RunCommandRequest()
    request.region_id = region_id
    request.type = command_type
    request.command_content = command_content
    request.instance_ids = instance_ids
    request.timeout = command_timeout

    try:
        run_command_response = client.run_command(request)
        return run_command_response.to_map()['body']['InvokeId']
    except Exception as e:
        logging.error(f"Failed to execute command: {e}")
        raise


def query_invocations(client, region_id, invoke_id):
    request = ecs_20140526_models.DescribeInvocationsRequest()
    request.region_id = region_id
    request.invoke_ids = [invoke_id]

    try:
        describe_invocations_response = client.describe_invocations(request)
        return describe_invocations_response.to_map()['body']
    except Exception as e:
        logging.error(f"Failed to query invocations: {e}")
        raise


def wait_for_command_completion(client, region_id, invoke_id, max_retries, backoff_factor=2):
    retry_count = 0
    while retry_count < max_retries:
        time.sleep(backoff_factor ** retry_count)
        results = query_invocations(client, region_id, invoke_id)
        invocation_list = results.get('Invocations', {}).get('Invocation', [])
        if not invocation_list:
            raise RuntimeError("The command execution result was not found.")

        invocation_result = invocation_list[0]
        invocation_status = invocation_result.get('InvocationStatus')
        logging.info(f"Current invocation status: {invocation_status}")

        if invocation_status == "Finished":
            print("query_invocations result:", results)
            break
        elif invocation_status in ["Failed", "Stopped"]:
            raise RuntimeError(f"Command execution failed with status: {invocation_status}")
        else:
            retry_count += 1
    else:
        raise TimeoutError("Command execution timed out.")


def main():
    # The region ID.
    region_id = "cn-chengdu"
    # The IDs of the ECS instances on which to run the command.
    instance_ids = ["i-2vcXXXXXXXXXXXXXXXb8", "i-2vcXXXXXXXXXXXXXXXot"]
    # The command to run.
    command_content = "#!/bin/bash\n cat /proc/meminfo"
    # The command execution timeout, in seconds.
    command_timeout = 60
    # The command type. Valid values: RunShellScript, RunBatScript, and RunPowerShellScript.
    command_type = "RunShellScript"

    client = get_ecs_client(region_id)
    invoke_id = execute_command(client, command_content, region_id, instance_ids, command_timeout, command_type)

    max_retries = max(int(command_timeout // 2), 1)
    wait_for_command_completion(client, region_id, invoke_id, max_retries)


if __name__ == "__main__":
    main()
```
