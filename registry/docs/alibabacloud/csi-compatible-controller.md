The csi-compatible-controller add-on enables you to install and use Container Storage Interface (CSI) storage in FlexVolume clusters. This topic provides basic information, usage instructions, and change history for the add-on.

## **Index**

-   [Component Overview](#56a35c90fbzpv)
    
-   [Usage instructions](#eda92a70fb6sb)
    
-   [Change history](#f8938200fbves)
    

## **Component Introduction**

The csi-compatible-controller add-on enables FlexVolume and CSI storage to coexist in the same cluster. This allows for a gradual migration from FlexVolume to CSI storage. After you install the add-on, you can use both FlexVolume and CSI storage on the same node.

## **Usage instructions**

You can install the csi-compatible-controller add-on on the **Add-ons** page of your FlexVolume cluster. Then deploy the required csi-provisioner and csi-plugin add-ons using YAML files. For more details, see [Migrate from FlexVolume to CSI (Container Storage Interface) storage using csi-compatible-controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-compatible-controller-to-migrate-from-flexvolume-to-csi).

## **Change history**

### July 2023

**Version number**

**Registry address**

**Changes**

**Modification Time**

**Impact**

v1.24.4-f2d782a-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-compatible-controller:v1.24.4-f2d782a-aliyun

Removed local storage logs.

July 10, 2023

This upgrade has no impact on your workloads.

### **June 2023**

**Version number**

**Registry address**

**Changes**

**Modification Time**

**Impact**

v1.24.1-b7158ad-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-compatible-controller:v1.24.1-b7158ad-aliyun

Added the csi-compatible-controller add-on. First release.

June 1, 2023

This upgrade has no impact on your workloads.
