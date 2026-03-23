Create single-node or distributed training jobs using the console, Python SDK, or CLI. Choose from public resources, subscription resource quotas, or preemptible instances.

## Prerequisites

1.  Activate PAI and create a workspace. Log on to the [PAI console](https://pai.console.alibabacloud.com/), select a region, and follow the prompts to authorize and activate. For more information, see [Activate PAI and create a workspace](/help/en/pai/user-guide/activate-pai-and-create-the-default-workspace).
    
2.  Grant permissions to your account. Skip this step if using your Alibaba Cloud account. For RAM users, assign one of the following roles: `Algorithm Developer`, `Algorithm O&M`, or `Workspace Administrator`. For more information, see **Configure Member and Role** in [Manage workspaces](/help/en/pai/user-guide/create-and-manage-workspaces#abbacbe7a0rvl).
    

## Create a job in the console

If new to PAI-DLC, create jobs using the console. PAI-DLC also supports [creating jobs using SDK or CLI](#4b50169a9bb0e).

1.  Go to the **Create Job** page.
    
    1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/?r#/sw?path=/dlc/jobs), select the target region and workspace, and click **Deep Learning Containers (DLC)**.
        
    2.  On the Deep Learning Containers (DLC) page, click **Create Job**.
        
2.  Configure parameters in the following sections.
    
    -   ### Basic information
        
        Configure the **Job Name** and **Tag**.
        
    -   ### Environment configuration
        
        **Parameter**
        
        **Description**
        
        **Image config**
        
        In addition to **Alibaba Cloud Image**, the following image types are supported:
        
        -   **Custom Image**: Custom image added to PAI. Image repository must allow public pulls or be stored in Container Registry (ACR). For more information, see [Custom images](/help/en/pai/user-guide/view-and-add-images).
            
            **Note**
            
            When selecting Lingjun resources and using a custom image, install RDMA manually to use the high-performance RDMA network. For more information, see [RDMA: Use a high-performance network for distributed training](/help/en/pai/user-guide/use-a-custom-image).
            
        -   **Image Address**: URL of a custom or official image accessible over the Internet.
            
            -   For private image URLs, click **enter the username and password** and provide credentials for the image repository.
                
            -   To improve image pull speeds, see [Accelerate image pulling](/help/en/pai/user-guide/use-accelerated-image-in-pai).
                
        
        **Mount dataset**
        
        Datasets provide data files required for model training. Supported dataset types:
        
        -   **Custom Dataset**: [Create a custom dataset](/help/en/pai/user-guide/create-and-manage-datasets#title-4d2-ipn-vww) to store training data. Set as **Read-only** and select a specific dataset version from **Version List**.
            
        -   **Public Dataset**: PAI provides pre-built public datasets that can only be mounted in read-only mode.
            
        
        **Mount Path**: Path where dataset is mounted inside the container, such as `/mnt/data`. Access dataset from code using this path. For more information, see [Use cloud storage in DLC training jobs](/help/en/pai/user-guide/use-cloud-storage-for-a-dlc-job).
        
        **Important**
        
        When using CPFS datasets, configure a VPC matching the CPFS VPC. Otherwise, the job remains in "Preparing" state.
        
        **Mount storage**
        
        Mount data source path to read data or store results.
        
        -   Supported data source types: OSS, General-purpose NAS, Extreme NAS, and BMCPFS (Lingjun AI Computing Service resources only).
            
        -   **Advanced Settings**: Use advanced configurations to enable specific features for different data source types:
            
            -   OSS: Set `{"mountType":"ossfs"}` in the advanced configuration to mount OSS storage using ossfs.
                
            -   General-purpose NAS and CPFS: Set `nconnect` parameter in advanced configuration to improve throughput when the container accesses NAS. For more information, see [How do I resolve poor performance when accessing NAS on a Linux OS?](/help/en/nas/user-guide/faq-about-the-performance-of-nas-file-systems#title-eva-gvl-lbs) Example: `{"nconnect":"<example_value>"}`. Replace <example\_value> with a positive integer.
                
        
        For more information, see [Use cloud storage in DLC training jobs](/help/en/pai/user-guide/use-cloud-storage-for-a-dlc-job).
        
        **Startup Command**
        
        Startup command for the job. Supports shell commands. PAI-DLC automatically injects [common environment variables for PyTorch and TensorFlow](/help/en/pai/user-guide/general-environment-variables), such as `MASTER_ADDR` and `WORLD_SIZE`. Access them using format `$variable_name`. Examples:
        
        -   **Run Python**: `python -c "print('Hello World')"`
            
        -   **PyTorch multi-node, multi-GPU distributed training**: `python -m torch.distributed.launch \ --nproc_per_node=2 \ --master_addr=${MASTER_ADDR} \ --master_port=${MASTER_PORT} \ --nnodes=${WORLD_SIZE} \ --node_rank=${RANK} \ train.py --epochs=100`
            
        -   **Set a shell file path as the startup command**: `/ml/input/config/launch.sh`
            
        
        **Show more configurations**
        
        **Environment Variable**
        
        In addition to automatically injected [common environment variables for PyTorch and TensorFlow](/help/en/pai/user-guide/general-environment-variables), provide custom environment variables in `Key:Value` format. Maximum 20 environment variables per job.
        
        **Third-party Libraries**
        
        If the container image is missing third-party libraries, add them here using one of two methods:
        
        -   **Select from List**: Enter names of third-party libraries in the text box.
            
        -   **Directory of requirements.txt**: Write third-party libraries into a `requirements.txt` file, upload to container, and specify the file path within container in the text box.
            
        
        **Code Builds**
        
        Upload code files required for training into the container using one of two methods:
        
        -   **Online configuration**: If you have a Git code repository with access permissions, [create a code source](/help/en/pai/user-guide/code-builds#title-rpv-spl-5ie) to allow PAI-DLC to access job code.
            
        -   **Local Upload**: Click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9069444071/p724322.png) button to upload local code files. After upload completes, set the **Mount path** to a specified path inside the container, such as `/mnt/data`.
            
        
    -   ### Resource configuration
        
        **Parameter**
        
        **Description**
        
        **Resource Type**
        
        Default: **General Computing**. China (Ulanqab), Singapore, China (Shenzhen), China (Beijing), China (Shanghai), and China (Hangzhou) regions support selecting **Lingjun Intelligence Resources**.
        
        **Source**
        
        -   **Public Resources**:
            
            -   Billing: Pay-as-you-go.
                
            -   Use cases: Public resources may experience queuing. For small job volumes without strict time constraints.
                
            -   Limitations: Maximum 2 GPU cards and 8 CPU cores. To exceed limits, contact your business manager.
                
        -   **Resource Quota**: Includes General Computing or Lingjun AI Computing Service resources.
            
            -   Billing: Subscription.
                
            -   Use cases: For large job volumes that require highly reliable execution.
                
            -   Special parameters:
                
                -   **Resource Quota**: Set quantity of resources such as GPUs and CPUs. To prepare a resource quota, see [Add a resource quota](/help/en/pai/user-guide/resource-quota-overview#614e25607dfa3).
                    
                -   **Priority**: Specifies execution priority for concurrent jobs. Value ranges from 1 to 9, where 1 is lowest priority.
                    
        -   **Preemptible Resources**:
            
            -   Billing: Pay-as-you-go.
                
            -   Use cases: Reduce resource costs using preemptible resources, which usually offer a discount.
                
            -   Limitations: Stable availability not guaranteed. Resources may not be immediately available or may be reclaimed. For more information, see [Use preemptible jobs](/help/en/pai/user-guide/use-preemptible-job).
                
        
        **Framework**
        
        Supports the following deep learning training frameworks and tools: TensorFlow, PyTorch, ElasticBatch, XGBoost, OneFlow, MPIJob, and Ray.
        
        **Note**
        
        When selecting Lingjun AI Computing Service for **Resource Quota**, only TensorFlow, PyTorch, ElasticBatch, MPIJob and Ray jobs are supported.
        
        **Job Resource**
        
        Based on selected **Framework**, configure resources for Worker, PS, Chief, Evaluator, and GraphLearn nodes. When selecting Ray framework, click **Add Role** to customize Worker roles, enabling mixed execution of heterogeneous resources.
        
        -   **Use public resources**: The following parameters can be configured:
            
            -   **Number of Nodes**: Number of nodes to run the DLC job.
                
            -   **Resource Type**: Resource specifications. The console displays the corresponding price. For more billing information, see [DLC billing](/help/en/pai/billing-of-dlc#concept-2538274).
                
        -   **Use resource quota**: Number of nodes, CPU (cores), GPU (cards), Memory (GiB), and Shared Memory (GiB) for each node type. Also configure the following special parameters:
            
            **Note**
            
            **System overhead**: The system reserves resources for container runtime and system processes. When configuring resource quotas, allocate 10-20% more resources than your training job requires to ensure successful execution. For example, if your job needs 2 CPU cores and 4 GiB memory, configure at least 2.5 cores and 5 GiB.
            
            -   **Node-Specific Scheduling**: Execute job on specified compute nodes.
                
            -   **Idle Resources**: When enabled, jobs can run on idle resources of other quotas, improving resource utilization. However, when these resources are needed by the original quota's jobs, the job running on idle resources will be preempted and terminated, and resources will be returned to the original quota. For more information, see [Use idle resources](/help/en/pai/user-guide/use-idle-resources-in-dlc-jobs).
                
            -   **CPU Affinity**: Binds processes in a container or Pod to specific CPU cores. Reduces CPU cache misses and context switches, improving CPU utilization and application performance. Suitable for performance-sensitive and real-time scenarios.
                
        -   **Use preemptible resources**: In addition to number of nodes and resource specifications, configure the **Bid** parameter to request preemptible instances by setting a maximum bid. Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7699467371/p910121.png) to select a bidding method:
            
            -   **By discount**: Maximum price is based on market price of resource specification, with discrete options from 10% to 90% discount, representing upper limit for bidding. When maximum bid for preemptible instance meets or exceeds market price and sufficient inventory exists, the instance can be requested.
                
            -   **By price**: Maximum bid is within market price range.
                
        
        **Expand for more configurations: Maximum runtime, Retention period, Advanced framework configuration**
        
        **Maximum Duration**
        
        Maximum duration for the job to run. Jobs exceeding this duration are stopped. Default: 30 days.
        
        **Retention Period**
        
        Retention period for successfully completed or failed jobs. Enabling job retention continuously occupies resources. Jobs exceeding this duration are deleted.
        
        **Important**
        
        Deleted DLC jobs cannot be recovered. Proceed with caution.
        
        **Advanced Framework Configuration**
        
        For a list of configurable parameters and value descriptions, see [Advanced parameter list](#c7c0f6fdebmhx).
        
        -   Parameters `ReleaseResourcePolicy`, `EnableNvidiaIBGDA`, `EnableNvidiaGDRCopy`, `EnablePaiNUMACoreBinding`, and `EnableResourcePreCheck` are supported by all frameworks.
            
        -   When **Framework** is **PyTorch**, the following parameters can be configured: `createSvcForAllWorkers`, `customPortList`, and `customPortNumPerWorker`.
            
            **Important**
            
            Lingjun AI Computing Service does not provide custom port capabilities, so `customPortNumPerWorker` parameter is not supported when submitting DLC jobs with Lingjun AI Computing Service resources.
            
        -   When **Framework** is **Ray**, the following parameters can be configured: `RayRuntimeEnv`, `RayRedisAddress`, `RayRedisUsername`, `RayRedisPassword`, `RaySubmitterBackoffLimit`, and `RayObjectStoreMemoryBytes`. Note that **Environment variable** and **Third-party libraries configuration** are overridden by the [RayRuntimeEnv](https://docs.ray.io/en/latest/ray-core/api/doc/ray.runtime_env.RuntimeEnv.html) configuration.
            
        
        Following configuration formats are supported:
        
        -   Plaintext: Must be configured as a comma-separated string of `key=value` pairs. Key is a supported advanced parameter, and value is its corresponding setting.
            
        -   JSON
            
        
        Typical configuration scenarios:
        
        -   Scenario 1: PyTorch advanced configuration
            
            Use advanced configuration parameters to enable network communication between Workers for more flexible training methods. For example, use extra open ports to launch frameworks like Ray within the DLC container and coordinate with PyTorch for more advanced distributed training. Configuration example:
            
            ```
            createSvcForAllWorkers=true,customPortNumPerWorker=100
            ```
            
            Obtain the domain name and available port numbers in the **Startup Command** through the `$JOB_NAME` and `$CUSTOM_PORTS` environment variables to launch and connect to frameworks like Ray.
            
        -   Scenario 2: Manually configure RayRuntimeEnv for the Ray framework (including dependent libraries and environment variables)
            
            Configuration example:
            
            ```
            {"RayRuntimeEnv": "{pip: requirements.txt, env_vars: {key: value}}"}
            ```
            
        -   Scenario 3: Custom resource release rule
            
            Currently, only supported release policy is `pod-exit`, which automatically releases resources when your Pod exits. Configuration example:
            
            ```
            {
              "ReleaseResourcePolicy": "pod-exit"
            }
            ```
            
        
    -   ### VPC configuration
        
        -   If not configuring a VPC, public network and public gateway are used. Limited public gateway bandwidth may cause slowdowns or interruptions during job execution.
            
        -   Configuring a VPC and selecting the corresponding vSwitch and security group improves network bandwidth, stability, and security. The cluster can directly access services within the VPC.
            
            **Important**
            
            -   When using a VPC, ensure the job's resource group, dataset storage (OSS), and code repository are in the same region, and that their respective VPCs can communicate.
                
            -   When using a CPFS dataset, configure a VPC matching the one used by CPFS. Otherwise, the DLC training job fails to mount the dataset and remains in `Preparing` state until timeout.
                
            -   When submitting a DLC job with Lingjun AI Computing Service preemptible instances, configure a VPC.
                
            
            Additionally, configure a **Internet Access Gateway** in one of two ways:
            
            -   **Public Gateway**: Network bandwidth is limited and may not meet requirements during high-concurrency access or when downloading large files.
                
            -   **Private Gateway**: To address public gateway bandwidth limitations, create an Internet NAT Gateway in the DLC's VPC, bind an Elastic IP (EIP), and configure SNAT entries. For more information, see [Improve public network access speed through a private gateway](/help/en/pai/user-guide/configure-a-dsw-instance-to-access-the-internet-through-a-private-nat-gateway).
                
    -   ### Fault tolerance and diagnosis
        
        **Parameter**
        
        **Description**
        
        **Automatic Fault Tolerance**
        
        Turn on **Automatic Fault Tolerance** switch and configure parameters. The system provides job detection and control capabilities to promptly detect and avoid errors at the job's algorithm layer, improving GPU utilization. For more information, see [AIMaster: An elastic and automatic fault tolerance engine](/help/en/pai/user-guide/aimaster-elastic-fault-tolerant-engine).
        
        **Note**
        
        When enabling automatic fault tolerance, the system starts an AIMaster instance that runs alongside the job instance and consumes computing resources. AIMaster instance resource usage is as follows:
        
        -   Resource quota: 1 CPU core and 1 GiB of memory.
            
        -   Public resources: Uses the ecs.c6.large specification.
            
        
        **Sanity Check**
        
        When enabling **Sanity Check**, a check is performed on resources involved in training. Automatically isolates faulty nodes and triggers automated backend O&M processes, reducing issues in early stages of job training and improving training success rate. For more information, see [SanityCheck: Health check](/help/en/pai/user-guide/sanity-check).
        
        **Note**
        
        Health check is only supported for PyTorch training jobs submitted with Lingjun AI Computing Service resource quotas and with a GPU count greater than 0.
        
    -   ### Roles and permissions
        
        How to configure the instance RAM role. For more information, see [Configure a DLC RAM role](/help/en/pai/user-guide/configure-the-dlc-ram-role).
        
        **Instance RAM role**
        
        **Description**
        
        **Default Role of PAI**
        
        Uses the `AliyunPAIDLCDefaultRole` service-linked role, which has fine-grained permissions to access ODPS and OSS. Temporary access credentials issued based on the PAI default role have the following permissions:
        
        -   When accessing MaxCompute tables, has permissions equivalent to the **DLC instance owner**.
            
        -   When accessing OSS, can only access the default OSS Bucket configured for the current workspace.
            
        
        **Custom Role**
        
        Custom RAM role. When accessing cloud products within the instance using STS temporary credentials, the permissions are consistent with those of this custom role.
        
        **Does Not Associate Role**
        
        Does not associate a RAM role with the DLC job. Default option.
        

After configuring parameters, click **OK**.

## References

After submitting the job:

-   View basic information, resource views, and operation logs. See [View training details](/help/en/pai/user-guide/view-training-jobs).
    
-   Clone, stop, or delete jobs. See [Manage training jobs](/help/en/pai/user-guide/manage-training-jobs).
    
-   View analysis reports through TensorBoard. For more information, see [Visualization tool Tensorboard](/help/en/pai/user-guide/use-tensorboard-to-view-training-results-in-dlc).
    
-   Configure monitoring and alerts. See [Monitor training jobs and configure alerts](/help/en/pai/user-guide/training-monitoring-and-alerting).
    
-   View billing details. See [Bill details](/help/en/user-center/user-guide/bill-details#topic-2059548).
    
-   Forward DLC job logs from the current workspace to a specified SLS Logstore for custom analysis. For more information, see [Subscribe to task logs](/help/en/pai/user-guide/subscribe-to-task-log).
    
-   Create notification rules in the PAI workspace's event center to track and monitor the status of DLC jobs. For more information, see [Training job notifications](/help/en/pai/user-guide/configure-notification-on-job-status-changes).
    
-   For troubleshooting, see [DLC FAQ](/help/en/pai/user-guide/dlc-faq).
    
-   For DLC use cases, see [DLC use cases](/help/en/pai/user-guide/dlc-use-case-summary).
    

## SDK and CLI

### Create a job with SDK or CLI

## Python SDK

#### Step 1: Install Alibaba Cloud Credentials tool

To use Alibaba Cloud SDK, install the Credentials tool to configure credentials. Requirements:

-   Python 3.7 or later.
    
-   Alibaba Cloud SDK V2.0.
    

```
pip install alibabacloud_credentials
```

#### Step 2: Obtain an AccessKey

This example uses an AccessKey pair to configure credentials. To prevent AccessKey leakage, configure AccessKey ID and AccessKey secret as environment variables. Environment variable names should be `ALIBABA_CLOUD_ACCESS_KEY_ID` and `ALIBABA_CLOUD_ACCESS_KEY_SECRET`.

-   To obtain an AccessKey pair, see [Create an AccessKey](/help/en/ram/user-guide/create-an-accesskey-pair).
    
-   To learn how to set environment variables, see [Configure environment variables](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
-   For other ways to configure credentials, see [Install the Credentials tool](/help/en/sdk/developer-reference/v2-manage-python-access-credentials#4df4d2604bkbx).
    

#### Step 3: Install Python SDK

-   Install the workspace SDK.
    
    ```
    pip install alibabacloud_aiworkspace20210204==3.0.1
    ```
    
-   Install the DLC SDK.
    
    ```
    pip install alibabacloud_pai_dlc20201203==1.4.17
    ```
    

#### Step 4: Submit the job

#### Submit a job using public resources

Example code to create and submit a job.

Sample code for creating and submitting a job

```
#!/usr/bin/env python3

from __future__ import print_function

import json
import time

from alibabacloud_tea_openapi.models import Config
from alibabacloud_credentials.client import Client as CredClient
from alibabacloud_pai_dlc20201203.client import Client as DLCClient
from alibabacloud_pai_dlc20201203.models import (
    ListJobsRequest,
    ListEcsSpecsRequest,
    CreateJobRequest,
    GetJobRequest,
)

from alibabacloud_aiworkspace20210204.client import Client as AIWorkspaceClient
from alibabacloud_aiworkspace20210204.models import (
    ListWorkspacesRequest,
    CreateDatasetRequest,
    ListDatasetsRequest,
    ListImagesRequest,
    ListCodeSourcesRequest
)


def create_nas_dataset(client, region, workspace_id, name,
                       nas_id, nas_path, mount_path):
    '''Create a NAS dataset.
    '''
    response = client.create_dataset(CreateDatasetRequest(
        workspace_id=workspace_id,
        name=name,
        data_type='COMMON',
        data_source_type='NAS',
        property='DIRECTORY',
        uri=f'nas://{nas_id}.{region}{nas_path}',
        accessibility='PRIVATE',
        source_type='USER',
        options=json.dumps({
            'mountPath': mount_path
        })
    ))
    return response.body.dataset_id


def create_oss_dataset(client, region, workspace_id, name,
                       oss_bucket, oss_endpoint, oss_path, mount_path):
    '''Create an OSS dataset.
    '''
    response = client.create_dataset(CreateDatasetRequest(
        workspace_id=workspace_id,
        name=name,
        data_type='COMMON',
        data_source_type='OSS',
        property='DIRECTORY',
        uri=f'oss://{oss_bucket}.{oss_endpoint}{oss_path}',
        accessibility='PRIVATE',
        source_type='USER',
        options=json.dumps({
            'mountPath': mount_path
        })
    ))
    return response.body.dataset_id



def wait_for_job_to_terminate(client, job_id):
    while True:
        job = client.get_job(job_id, GetJobRequest()).body
        print('job({}) is {}'.format(job_id, job.status))
        if job.status in ('Succeeded', 'Failed', 'Stopped'):
            return job.status
        time.sleep(5)
    return None


def main():

    # Ensure account has required permissions to DLC and has sufficient permissions.
    region_id = 'cn-hangzhou'
    # The AccessKey of an Alibaba Cloud account has permissions to access all APIs. We recommend that you use a RAM user for API access or daily O&M.
    # We strongly recommend that you do not save your AccessKey ID and AccessKey secret in your project code. This can lead to an AccessKey leak and threaten the security of all resources in your account.
    # This example shows how to use the Credentials SDK to read the AccessKey from environment variables for identity verification.
    cred = CredClient()

    # 1. create client;
    workspace_client = AIWorkspaceClient(
        config=Config(
            credential=cred,
            region_id=region_id,
            endpoint="aiworkspace.{}.aliyuncs.com".format(region_id),
        )
    )

    dlc_client = DLCClient(
         config=Config(
            credential=cred,
            region_id=region_id,
            endpoint='pai-dlc.{}.aliyuncs.com'.format(region_id),
         )
    )

    print('------- Workspaces -----------')
    # Get the list of workspaces. You can also enter the name of the workspace you created in the workspace_name parameter.
    workspaces = workspace_client.list_workspaces(ListWorkspacesRequest(
        page_number=1, page_size=1, workspace_name='',
        module_list='PAI'
    ))
    for workspace in workspaces.body.workspaces:
        print(workspace.workspace_name, workspace.workspace_id,
              workspace.status, workspace.creator)

    if len(workspaces.body.workspaces) == 0:
        raise RuntimeError('found no workspaces')

    workspace_id = workspaces.body.workspaces[0].workspace_id

    print('------- Images ------------')
    # Get the list of images.
    images = workspace_client.list_images(ListImagesRequest(
        labels=','.join(['system.supported.dlc=true',
                         'system.framework=Tensorflow 1.15',
                         'system.pythonVersion=3.6',
                         'system.chipType=CPU'])))
    for image in images.body.images:
        print(json.dumps(image.to_map(), indent=2))

    image_uri = images.body.images[0].image_uri

    print('------- Datasets ----------')
    # Get the dataset.
    datasets = workspace_client.list_datasets(ListDatasetsRequest(
        workspace_id=workspace_id,
        name='example-nas-data', properties='DIRECTORY'))
    for dataset in datasets.body.datasets:
        print(dataset.name, dataset.dataset_id, dataset.uri, dataset.options)

    if len(datasets.body.datasets) == 0:
        # If the current dataset does not exist, create a dataset.
        dataset_id = create_nas_dataset(
            client=workspace_client,
            region=region_id,
            workspace_id=workspace_id,
            name='example-nas-data',
            # NAS file system ID.
            # General-purpose NAS: 31a8e4****.
            # Extreme NAS: Must start with extreme-, for example, extreme-0015****.
            # CPFS: Must start with cpfs-, for example, cpfs-125487****.
            nas_id='***',
            nas_path='/',
            mount_path='/mnt/data/nas')
        print('create dataset with id: {}'.format(dataset_id))
    else:
        dataset_id = datasets.body.datasets[0].dataset_id

    print('------- Code Sources ----------')
    # Get the list of code sources.
    code_sources = workspace_client.list_code_sources(ListCodeSourcesRequest(
        workspace_id=workspace_id))
    for code_source in code_sources.body.code_sources:
        print(code_source.display_name, code_source.code_source_id, code_source.code_repo)

    print('-------- ECS SPECS ----------')
    # Get the list of node specifications for DLC.
    ecs_specs = dlc_client.list_ecs_specs(ListEcsSpecsRequest(page_size=100, sort_by='Memory', order='asc'))
    for spec in ecs_specs.body.ecs_specs:
        print(spec.instance_type, spec.cpu, spec.memory, spec.memory, spec.gpu_type)

    print('-------- Create Job ----------')
    # Create a DLC job.
    create_job_resp = dlc_client.create_job(CreateJobRequest().from_map({
        'WorkspaceId': workspace_id,
        'DisplayName': 'sample-dlc-job',
        'JobType': 'TFJob',
        'JobSpecs': [
            {
                "Type": "Worker",
                "Image": image_uri,
                "PodCount": 1,
                "EcsSpec": ecs_specs.body.ecs_specs[0].instance_type,
            },
        ],
        "UserCommand": "echo 'Hello World' && ls -R /mnt/data/ && sleep 30 && echo 'DONE'",
        'DataSources': [
            {
                "DataSourceId": dataset_id,
            },
        ],
    }))
    job_id = create_job_resp.body.job_id

    wait_for_job_to_terminate(dlc_client, job_id)

    print('-------- List Jobs ----------')
    # Get the list of DLC jobs.
    jobs = dlc_client.list_jobs(ListJobsRequest(
        workspace_id=workspace_id,
        page_number=1,
        page_size=10,
    ))
    for job in jobs.body.jobs:
        print(job.display_name, job.job_id, job.workspace_name,
              job.status, job.job_type)
    pass


if __name__ == '__main__':
    main()
```

#### Submit a job using a subscription resource quota

1.  Log on to [PAI console](https://pai.console.alibabacloud.com/).
    
2.  As shown in the following figure, find your workspace ID on the workspace list page.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2535651371/p744932.png)
    
3.  As shown in the following figure, find the resource quota ID of your dedicated resource group.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5357414271/p820414.png)
    
4.  Use following code to create and submit a job. For a list of available public images, see [Step 2: Prepare a container image](/help/en/pai/user-guide/before-you-begin#title-wrl-yx9-jp0).
    
    ```
    from alibabacloud_pai_dlc20201203.client import Client
    from alibabacloud_credentials.client import Client as CredClient
    from alibabacloud_tea_openapi.models import Config
    from alibabacloud_pai_dlc20201203.models import (
        CreateJobRequest,
        JobSpec,
        ResourceConfig, GetJobRequest
    )
    
    # Initialize a client to access the DLC API.
    region = 'cn-hangzhou'
    # The AccessKey of an Alibaba Cloud account has permissions to access all APIs. We recommend that you use a RAM user for API access or daily O&M.
    # We strongly recommend that you do not save your AccessKey ID and AccessKey secret in your project code. This can lead to an AccessKey leak and threaten the security of all resources in your account.
    # This example shows how to use the Credentials SDK to read the AccessKey from environment variables for identity verification.
    cred = CredClient()
    client = Client(
        config=Config(
            credential=cred,
            region_id=region,
            endpoint=f'pai-dlc.{region}.aliyuncs.com',
        )
    )
    
    # Declare the resource configuration for the job. For image selection, you can refer to the public image list in the documentation or provide your own image URL.
    spec = JobSpec(
        type='Worker',
        image=f'registry-vpc.cn-hangzhou.aliyuncs.com/pai-dlc/tensorflow-training:1.15-cpu-py36-ubuntu18.04',
        pod_count=1,
        resource_config=ResourceConfig(cpu='1', memory='2Gi')
    )
    
    # Declare the execution content of the job.
    req = CreateJobRequest(
            resource_id='<Replace with your resource quota ID>',
            workspace_id='<Replace with your WorkspaceID>',
            display_name='sample-dlc-job',
            job_type='TFJob',
            job_specs=[spec],
            user_command='echo "Hello World"',
    )
    
    # Submit the job.
    response = client.create_job(req)
    # Get the job ID.
    job_id = response.body.job_id
    
    # Query the job status.
    job = client.get_job(job_id, GetJobRequest()).body
    print('job status:', job.status)
    
    # View the command executed by the job.
    job.user_command
    ```
    

#### Submit a job using preemptible resources

-   #### SpotDiscountLimit (Spot discount)
    
    ```
    #!/usr/bin/env python3
    
    from alibabacloud_tea_openapi.models import Config
    from alibabacloud_credentials.client import Client as CredClient
    
    from alibabacloud_pai_dlc20201203.client import Client as DLCClient
    from alibabacloud_pai_dlc20201203.models import CreateJobRequest
    
    region_id = '<region-id>'  # The ID of the region in which the DLC job resides, such as cn-hangzhou. 
    cred = CredClient()
    workspace_id = '12****'  # The ID of the workspace to which the DLC job belongs. 
    
    dlc_client = DLCClient(
        Config(credential=cred,
               region_id=region_id,
               endpoint='pai-dlc.{}.aliyuncs.com'.format(region_id),
               protocol='http'))
    
    create_job_resp = dlc_client.create_job(CreateJobRequest().from_map({
        'WorkspaceId': workspace_id,
        'DisplayName': 'sample-spot-job',
        'JobType': 'PyTorchJob',
        'JobSpecs': [
            {
                "Type": "Worker",
                "Image": "dsw-registry-vpc.<region-id>.cr.aliyuncs.com/pai/pytorch-training:1.12-cpu-py39-ubuntu20.04",
                "PodCount": 1,
                "EcsSpec": 'ecs.g7.xlarge',
                "SpotSpec": {
                    "SpotStrategy": "SpotWithPriceLimit",
                    "SpotDiscountLimit": 0.4,
                }
            },
        ],
        'UserVpc': {
            "VpcId": "vpc-0jlq8l7qech3m2ta2****",
            "SwitchId": "vsw-0jlc46eg4k3pivwpz8****",
            "SecurityGroupId": "sg-0jl4bd9wwh5auei9****",
        },
        "UserCommand": "echo 'Hello World' && ls -R /mnt/data/ && sleep 30 && echo 'DONE'",
    }))
    job_id = create_job_resp.body.job_id
    print(f'jobId is {job_id}')
    ```
    
-   #### SpotPriceLimit (Spot price)
    
    ```
    #!/usr/bin/env python3
    
    from alibabacloud_tea_openapi.models import Config
    from alibabacloud_credentials.client import Client as CredClient
    
    from alibabacloud_pai_dlc20201203.client import Client as DLCClient
    from alibabacloud_pai_dlc20201203.models import CreateJobRequest
    
    region_id = '<region-id>'
    cred = CredClient()
    workspace_id = '12****'
    
    dlc_client = DLCClient(
        Config(credential=cred,
               region_id=region_id,
               endpoint='pai-dlc.{}.aliyuncs.com'.format(region_id),
               protocol='http'))
    
    create_job_resp = dlc_client.create_job(CreateJobRequest().from_map({
        'WorkspaceId': workspace_id,
        'DisplayName': 'sample-spot-job',
        'JobType': 'PyTorchJob',
        'JobSpecs': [
            {
                "Type": "Worker",
                "Image": "dsw-registry-vpc.<region-id>.cr.aliyuncs.com/pai/pytorch-training:1.12-cpu-py39-ubuntu20.04",
                "PodCount": 1,
                "EcsSpec": 'ecs.g7.xlarge',
                "SpotSpec": {
                    "SpotStrategy": "SpotWithPriceLimit",
                    "SpotPriceLimit": 0.011,
                }
            },
        ],
        'UserVpc': {
            "VpcId": "vpc-0jlq8l7qech3m2ta2****",
            "SwitchId": "vsw-0jlc46eg4k3pivwpz8****",
            "SecurityGroupId": "sg-0jl4bd9wwh5auei9****",
        },
        "UserCommand": "echo 'Hello World' && ls -R /mnt/data/ && sleep 30 && echo 'DONE'",
    }))
    job_id = create_job_resp.body.job_id
    print(f'jobId is {job_id}')
    ```
    

Following table describes key parameters:

**Parameter**

**Description**

**SpotStrategy**

The bidding policy. The bidding type parameters take effect only if you set this parameter to **SpotWithPriceLimit**.

**SpotDiscountLimit**

The spot discount bidding type.

**Note**

-   You cannot specify the **SpotDiscountLimit** and **SpotPriceLimit** parameters at the same time.
    
-   The **SpotDiscountLimit** parameter is valid only for Lingjun resources.
    

**SpotPriceLimit**

The spot price bidding type.

**UserVpc**

This parameter is required when you use Lingjun resources to submit jobs. Configure the VPC, vSwitch, and security group ID for the region in which the job resides.

### Command line

#### Step 1: Download client and authenticate

Download the Linux 64-bit or macOS version of the client tool based on your operating system and complete user authentication. For more information, see [Preparations](/help/en/pai/developer-reference/before-you-begin-1#concept-2076760).

#### Step 2: Submit the job

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/).
    
2.  On the workspace list page, view your workspace ID.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2535651371/p744955.png)
    
3.  Follow the instructions in the image below to view your resource quota ID.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4489504271/p820419.png)
    
4.  Prepare parameter file `tfjob.params` by referring to following content. For more information about how to configure the parameter file, see [Submit command](/help/en/pai/developer-reference/commands-used-to-submit-jobs).
    
    ```
    name=test_cli_tfjob_001
    workers=1
    worker_cpu=4
    worker_gpu=0
    worker_memory=4Gi
    worker_shared_memory=4Gi
    worker_image=registry-vpc.cn-beijing.aliyuncs.com/pai-dlc/tensorflow-training:1.12.2PAI-cpu-py27-ubuntu16.04
    command=echo good && sleep 120
    resource_id=<Replace with your resource quota ID> 
    workspace_id=<Replace with your WorkspaceID>
    ```
    
5.  Use following code example to pass the params\_file parameter to submit the job. Submit the DLC job to the specified workspace and resource quota.
    
    ```
    ./dlc submit tfjob --job_file  ./tfjob.params
    ```
    
6.  Use following code to view the DLC job that was submitted.
    
    ```
    ./dlc get job <jobID>
    ```
    

### Advanced parameter list

**Parameter (key)**

**Supported framework types**

**Parameter description**

**Parameter value (value)**

`ReleaseResourcePolicy`

ALL

Custom resource release rule. Optional. If not configured, all pod resources are released when the job ends. If configured, the only supported value is `pod-exit`, which releases a pod's resources when it exits.

pod-exit

`EnableNvidiaIBGDA`

ALL

Enables IBGDA feature when loading the GPU driver.

`true` or `false`

`EnableNvidiaGDRCopy`

ALL

Whether to install the GDRCopy kernel module. **Version 2.4.4 is currently installed.**

`true` or `false`

`EnablePaiNUMACoreBinding`

ALL

Enables NUMA.

`true` or `false`

`EnableResourcePreCheck`

ALL

When submitting a job, checks whether total resources (node specifications) in the quota can meet specifications of all roles in the job.

`true` or `false`

`createSvcForAllWorkers`

PyTorch

Whether to allow network communication between workers.

-   If `true`, network communication is allowed between all PyTorch workers.
    
-   If `false` or not configured, only the master can be accessed by default.
    

When enabled, domain name of each worker is its name, such as `dlcxxxxx-master-0`. Job name (`dlcxxxxx`) is passed to workers through the `JOB_NAME` environment variable, enabling determination of the specific worker's domain name for access.

`true` or `false`

`customPortList`

PyTorch

Defines the network ports to be opened on each worker. This can be used with `createSvcForAllWorkers` to enable network communication between workers.

If not configured, only port 23456 on the master is opened by default. Avoid using port 23456 in this custom port list.

**Important**

This parameter is mutually exclusive with `customPortNumPerWorker`. Do not set both at the same time.

A semicolon-separated string, where each string is a port number or a port range connected by a hyphen, such as `10000;10001-10010` (which will be converted to 11 consecutive port numbers from 10000 to 10010)

`customPortNumPerWorker`

PyTorch

Requests a number of network ports to be opened for each worker. This can be used with `createSvcForAllWorkers` to enable network communication between workers.

If not configured, only port 23456 on the master is opened by default. DLC randomly assigns the requested number of ports to each worker. Assigned ports are passed to the worker through the `CUSTOM_PORTS` environment variable in a semicolon-separated format for querying.

**Important**

-   This parameter is mutually exclusive with `customPortList`. Do not set both at the same time.
    
-   Because Lingjun AI Computing Service does not provide custom port capabilities, `customPortNumPerWorker` parameter is not supported when submitting DLC jobs with Lingjun AI Computing Service resources.
    

Integer (maximum 65536)

`RayRuntimeEnv`

Ray

When framework is Ray, define the runtime environment by manually configuring [RayRuntimeEnv](https://docs.ray.io/en/latest/ray-core/api/doc/ray.runtime_env.RuntimeEnv.html).

**Important**

The **Environment variable** and **Third-party library configuration** are overridden by this configuration.

Configure environment variables and third-party libraries (`{pip: requirements.txt, env_vars: {key: value}}`)

`RayRedisAddress`

Ray

External GCS Redis address.

String

`RayRedisUsername`

Ray

External GCS Redis username.

String

`RayRedisPassword`

Ray

External GCS Redis password.

String

`RaySubmitterBackoffLimit`

Ray

Number of retries for submitter.

Positive integer (int)

`RayObjectStoreMemoryBytes`

Ray

Configures shared memory for a node. For example, to configure 1 GiB of shared memory for each node, use the following configuration:

```
{
  "RayObjectStoreMemoryBytes": "1073741824"
}
```

Positive integer (int)
