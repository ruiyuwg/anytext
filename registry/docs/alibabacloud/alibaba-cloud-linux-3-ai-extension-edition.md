Alibaba Cloud Linux 3 AI Extension Edition is an AI extension of Alibaba Cloud Linux 3. It is an operating system (OS) image that is deeply customized for the Alibaba Cloud heterogeneous computing ecosystem and end-to-end AI workloads. It provides the same lifecycle maintenance as the general-purpose Alibaba Cloud Linux 3. The AI extension edition focuses on Alibaba Cloud elastic computing heterogeneous instances, such as Elastic GPU Service (EGS) and Lingjun series, and core AI platforms, such as Platform for AI (PAI) and Container Compute Service (ACS), to provide an end-to-end, AI-native operating system solution.

## Image overview

**Distribution**

**Image name**

**Image description**

**End of support date**

Alibaba Cloud Linux 3 AI Extension Edition

Alibaba Cloud Linux 3.2104 LTS 64-bit AI Extension Edition

An AI extension image that supports the x86 architecture.

2031-04-30

Alibaba Cloud Linux 3 AI Extension ARM Edition

Alibaba Cloud Linux 3.2104 LTS 64-bit AI Extension ARM Edition

An AI extension image that supports the arm64 architecture.

2031-04-30

The images have the following features:

-   **AI-accelerated kernel:** Uses kernel-level deep optimization to improve I/O scheduling and kernel management for deep learning training and inference scenarios. It works with [Alibaba Cloud AI container images](https://www.aliyun.com/activity/daily/alibaba_cloud_AI_containers?spm=5176.28243677.J_4VYgf18xNlTAyFFbOuOQe.152.492831a5wQsjGC) to deliver end-to-end performance improvements.
    
    > This feature applies only to Alibaba Cloud Linux 3.2104 LTS 64-bit AI Extension Edition and does not apply to Alibaba Cloud Linux 3.2104 LTS 64-bit AI Extension ARM Edition.
    
-   **Intelligent tuning with keentune:** Provides an out-of-the-box tuning framework for AI scenarios. It uses automated policies to ensure compatibility across multiple scenarios and simplify operations. It includes preset tuning templates for mainstream AI scenarios, such as deep learning training and real-time inference. You can trigger the tuning flow with a single click to reduce tuning complexity.
    
-   **Native integration with AI developer environments:** Python 3.12 is pre-installed as the default Python 3 version and is compatible with mainstream AI toolchains to significantly improve developer efficiency.
    

## **Applicability**

Alibaba Cloud Linux 3 AI Extension Edition is applicable to the following instances:

**Instance family name**

**Instance types**

Heterogeneous computing instance families

[gn8v, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/overview-of-instance-families#gn8v)

[gn8is, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/overview-of-instance-families#gn8is)

[gn7e, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/overview-of-instance-families#gn7e)

[gn7i, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/overview-of-instance-families#gn7i)

[gn7, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/overview-of-instance-families#gn7)

[gn7s, GPU-accelerated compute-optimized instance family](/help/en/ecs/user-guide/overview-of-instance-families#gn7s)

Elastic Compute Service (ECS) Bare Metal Instance families

[ebmgn8v, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/overview-of-instance-families#ebmgn8v)

[ebmgn8is, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/overview-of-instance-families#ebmgn8is)

[ebmgn7ex, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/overview-of-instance-families#ebmgn7ex)

[ebmgn7e, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/overview-of-instance-families#ebmgn7e)

[ebmgn7ix, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/overview-of-instance-families#ebmgn7ix)

[ebmgn7i, GPU-accelerated compute-optimized ECS Bare Metal Instance family](/help/en/ecs/user-guide/overview-of-instance-families#ebmgn7i)

> The Alibaba Cloud Linux 3 AI Extension Edition image can be used on some CPU instances. However, for optimal performance, we recommend that you deploy the image on the GPU-accelerated instances listed above to maximize performance improvements for AI workloads.

Alibaba Cloud Linux 3 AI Extension ARM Edition is applicable to the following instances:

**Instance family name**

**Instance types**

Enterprise-level Arm compute instance families

-   [g8y, general-purpose instance family](/help/en/ecs/user-guide/overview-of-instance-families#g8y)
    
-   [c8y, compute-optimized instance family](/help/en/ecs/user-guide/overview-of-instance-families#c8y)
    
-   [r8y, memory-optimized instance family](/help/en/ecs/user-guide/overview-of-instance-families#r8y)
    
-   [g6r, general-purpose instance family](/help/en/ecs/user-guide/overview-of-instance-families#g6r)
    
-   [c6r, compute-optimized instance family](/help/en/ecs/user-guide/overview-of-instance-families#c6r)
    

## **Billing**

Alibaba Cloud Linux 3 AI Extension Edition and Alibaba Cloud Linux 3 AI Extension ARM Edition images are free of charge. However, when you use an image to create an ECS instance, you are charged for other resources, such as vCPUs, memory, storage, public bandwidth, and snapshots. For more information about billing, see [Billing overview](/help/en/ecs/billing-overview#concept-isb-scd-5db).

## **Usage notes**

Refer to [Quickly purchase an instance](/help/en/ecs/user-guide/create-a-subscription-instance-on-the-quick-launch-tab). When you purchase a supported GPU-accelerated instance type, select Alibaba Cloud Linux 3 AI Extension Edition as the OS image.

## **Security notice**

Refer to [Operating system security notices](https://mirrors.aliyun.com/alinux/3/cve/alinux3.xml?spm=a2c4g.11186623.0.0.621829ff0w6IdV&file=alinux3.xml).
