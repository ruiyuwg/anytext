Enable multi-node distributed training by adding EPL annotations to TensorFlow code.

## How it works

EPL provides a unified interface for multiple parallelism strategies. Add EPL annotations to existing TensorFlow code instead of rewriting training scripts. EPL manages communication and synchronization.

For API details and parallelism strategy options, see [EPL documentation](https://easyparallellibrary.readthedocs.io/en/latest/api/index.html).

## Prerequisites

Requirements:

-   Service-linked role authorization for DLC. See [Cloud service dependencies and authorization: DLC](/help/en/pai/user-guide/grant-the-permissions-that-are-required-to-use-dlc#task314).
    
-   Image running NVIDIA TensorFlow 1.15 or TensorFlow-GPU 1.15.
    

### EPL installation by image type

EPL availability varies by image type:

**Image type**

**Installation status**

**Details**

**Official image** (PAI-optimized)

Pre-installed

See [Official images](/help/en/pai/user-guide/before-you-begin)

**Community image** (standard)

Manual installation

See [Community images](/help/en/pai/user-guide/before-you-begin)

**Note**

For DLC, use community image `tensorflow-training:1.15-gpu-py36-cu100-ubuntu18.04`. Install EPL by running commands in the startup script shown in [Create a training job](#section-0cz-zph-2i0). For other environments, see [EPL installation](https://easyparallellibrary.readthedocs.io/en/latest/quick_start.html).

## Configure a code repository

Configure a code build to link your Git repository to DLC. Each training job clones the latest code. This example uses the EPL repository with a ResNet50 sample.

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/console).
    
2.  In the left-side navigation pane, click **Workspaces** and then click your workspace name.
    
3.  In the left-side navigation pane, choose **AI Asset Management** > **Source Code Repositories**.
    
4.  On the **Code Configuration** page, click **Create Code Build**.
    
5.  Configure parameters and click **Submit**. For parameter details, see [Code configuration](/help/en/pai/user-guide/code-builds#task-2183758).
    
    **Parameter**
    
    **Value**
    
    **Git Repository Address**
    
    `https://github.com/alibaba/EasyParallelLibrary.git`
    
    **Code Branch**
    
    `main`
    

## Create a training job

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/?r#/sw?path=/dlc/jobs), select a region and workspace, and click **Enter Deep Learning Containers (DLC)**.
    
2.  On the Distributed Training (DLC) page, click **Create Job**.
    
3.  In the **Basic Information** section, enter a job name.
    
4.  In the **Environment Information** section, configure parameters. The startup script installs NCCL, builds EPL from source, and launches data-parallel ResNet50 training.
    
    **Parameter**
    
    **Value**
    
    **Node Image**
    
    Select **Official Image** > **tensorflow-training:1.15-gpu-py36-cu100-ubuntu18.04**.
    
    **Code Configuration**
    
    From the **Online Configuration** drop-down list, select the code build created in [Configure code repository](/help/en/pai/user-guide/use-epl-to-improve-the-efficiency-of-tensorflow-distributed-model-training#section-0oe-qgy-bvb). Set **Branch** to **main**.
    
    **Startup Command**
    
    See startup script.
    
    ```
       apt update
       apt install libnccl2 libnccl-dev
       cd /root/code/EasyParallelLibrary/
       pip install .
       cd examples/resnet
       bash scripts/train_dp.sh
    ```
    
5.  In the **Resource Information** section, configure parameters.
    
    **Parameter**
    
    **Value**
    
    **Resource Source**
    
    Select **Public Resources**.
    
    **Framework**
    
    Select **TensorFlow**.
    
6.  In the **Job Resource Configuration** section, configure parameters.
    
    **Parameter**
    
    **Value**
    
    **Number Of Nodes**
    
    `2` (adjust as needed)
    
    **Node Configuration**
    
    On the **GPU Instance** tab, select **ecs.gn6v-c8g1.2xlarge**.
    
    **Maximum Running Time**
    
    `2` hours
    
7.  Click **OK** to submit.
    

## Verify job status

After submitting the job, verify it runs:

1.  On the Distributed Training Jobs page, click the job name.
    
2.  Check job status and wait for **Succeeded**.
    
3.  Review training logs to confirm the model trains on both nodes.
    

For job monitoring details, see [View training details](/help/en/pai/user-guide/view-training-jobs).

## Reference

-   [EPL API reference](https://easyparallellibrary.readthedocs.io/en/latest/api/index.html)
    
-   [EPL quick start guide](https://easyparallellibrary.readthedocs.io/en/latest/quick_start.html)
    
-   [Create a training job in DLC](/help/en/pai/user-guide/create-a-training-task/)
