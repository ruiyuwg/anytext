Starting 00:00:00 (UTC+8) on June 6, 2024, the cloud-native AI suite is free of charge. This topic describes the billing rules and billable items of the cloud-native AI suite. This topic also providers answers to some frequently asked questions about the cloud-native AI suite.

## Precautions

Starting 00:00:00 (UTC+8) on June 6, 2024, the cloud-native AI suite is free of charge. You are charged for the Container Service for Kubernetes (ACK) clusters in which the cloud-native AI suite is deployed and the cloud services used by the cloud-native AI suite.

## **Billable items**

![计费组成..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7192409861/p675585.png)

**Cloud-native AI suite service fee = Cloud-native AI suite fee (no fee is charged now) + ACK cluster fee + Other cloud service fees**

-   ACK cluster fee: You are charged by ACK for the ACK cluster in which the cloud-native AI suite is deployed. For more information, see [Billing rules](/help/en/ack/product-overview/billing-overview).
    
-   Other cloud service fees: You must pay for the cloud services that are used by the cloud-native AI suite based on the billing rules of the cloud services. If you use the built-in MySQL service or if Kubeflow Pipelines use the built-in MinIO service, disks are created from StorageClasses each time you deploy the cloud-native AI suite. You must pay for the disks. ACK does not manage the lifecycle of the disks. You need to manually manage the disks. If you no longer need the disks, release the disks to save costs. For more information, see [Cloud service billing](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/billing-of-cloud-services).
    

## **View billing details**

For more information, see [View your bills](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/view-your-bills).

## Overdue payments

The cloud-native AI suite is free of charge from 00:00:00 (UTC+8) on June 6, 2024. For more information about other overdue payments, see [Overdue payments](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/ack-pro-cluster-billing#section-7kv-klr-84n).

## Billing FAQ

### **Does the system count the number of physical GPUs or vGPUs?**

The system counts the number of physical GPUs on GPU-accelerated nodes.

### **Are NotReady nodes counted when ACK measures the size of a cluster?**

No, NotReady nodes are not counted.

### **Why are disks automatically created and billed** **when I deploy the cloud-native AI suite?**

If you use the built-in storage of the cluster for the cloud-native AI suite or Kubeflow Pipelines, a disk is created to persist data. Each time the cloud-native AI suite is uninstalled, the corresponding persistent volume (PV) and persistent volume claim (PVC) are deleted, but the disk is retained. When the cloud-native AI suite is reinstalled, a new PV and disk are created. You need to delete the disks that are no longer used by the cloud-native AI suite to save costs.
