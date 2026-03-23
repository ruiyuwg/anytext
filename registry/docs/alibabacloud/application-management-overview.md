A Kubernetes workload is a set of pods and containers that run an application or a service in Kubernetes clusters. In Container Servicefor Kubernetes (ACK) Edge clusters, you can create Kubernetes workloads to deploy and release new versions of applications, and manage the configuration through the console or API, similar to what you do for ACK Pro clusters.

## Workloads in edge scenarios

To maintain pod stability and service continuity, you can perform operations on workloads, such as deploying, scaling, updating, and restoring the workloads. For more information about how to create workloads, see [Application management](/help/en/ack/application-management-1).

ACK Edge clusters are applicable to multi-region nodes and on-premises data centers, where the network may be unstable. ACK Edge clusters introduce enhanced workloads and extension capabilities to handle application management in such situations.

-   Node pool application management: In edge computing scenarios, computing nodes may be deployed across regions, and an application may need to run on nodes in different regions. To simplify such distributed deployment, ACK Edge clusters offer the YurtAppSet to centrally manage multiple workloads. For example, you can use YurtAppSets to create, update, and delete multiple Deployments in a centralized manner. For more information, see [Manage YurtAppSets](/help/en/ack/ack-edge/user-guide/node-pool-yurtappset-management).
    
-   Enhanced DaemonSet update: In edge computing scenarios, the traditional cloud-native rolling update model fails to meet application update requirements. For example, if the edge network disconnects from the cloud, DaemonSet rolling updates may get stuck because nodes enter the NotReady state. To overcome these network disruptions, enhanced DaemonSet update models **AdvancedRollingUpdate** and **over-the-air (OTA)** have been introduced. For more information, see [DaemonSet update models](/help/en/ack/ack-edge/user-guide/daemonset-upgrade-model).
